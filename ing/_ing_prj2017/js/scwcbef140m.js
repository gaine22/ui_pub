/*****************************************************************************
 *  File Name      : scwcbef140m.js
 *  Description    : side menu
 *  Author         : JMLEE
 *  Date Created   : 2014-03-10
 *--------------------------------------------------------------
 *  [변경 내역]
 *  [YY.MM.DD] [변경자] [변경내역]
 ******************************************************************************/

/**
 * side menu
 *
 * @class SCWCBEF140M
 * @namespace ingmh.common.biz
 * @constructor
 * @date 2014-03-27
 * @author JMLEE
 */

var SCWCBEF140M = ingmh.custw.addWorker({
	/**
	 * Screen Identification.
	 *
	 * @property SCREENID
	 * @type {String}
	 * @default "SCWCBEF140M"
	 */
	SCREENID : 'SCWCBEF140M',
	/**
	 * Screen Initialize
	 *
	 * @property init
	 * @type {Object}
	 */
	init : {},
	/**
	 * Member Function List
	 *
	 * @property mfunction
	 * @type {Object}
	 */
	mfunction : {},
	/**
	 * Member Variable
	 *
	 * @property mvar
	 * @type {Object}
	 */
	mvar : {
		setBmkMenuPop : null,
		dataList : null,
		stringValue : '',
		now : null,
    	minute : null,
    	second : null,
    	end : null,

    	timeObj : null, //시간설정
    	oneMinLeftPop : null,

    	isLogin : null
	},
	/**
	 * ingmh.custw.bizutil alias (업무공통유틸 shortcut)
	 *
	 * @property bizutil
	 * @type {Object}
	 */
	bizutil : ingmh.custw.bizutil
});

/**
 * 화면 초기화 객체 화면 로드후 처음으로 호출되는 메소드로 스크립트 진입점에 해당한다.
 *
 * @method init
 */
SCWCBEF140M.init = function() {

	// Define Local Variable
	SCWCBEF140M.mvar.isLogin = $.isLogin;

	// Define Local Function

	// Define Event Binding
	//타이머 클리어
	clearTimeout(SCWCBEF140M.mvar.timeObj);  //타이머 초기화

	// 즐겨찾기 메뉴 조회
	SCWCBEF140M.mfunction.retrieveListCustBmkMenu();
	//타이머
	SCWCBEF140M.mfunction.setSessionTime();

	// 연장버튼
	$('#resetTimerBtn').off('click').on('click', SCWCBEF140M.mfunction.resetTimer);
	// 즐겨찾기 설정 팝업
	$('#openSetCustBmkMenuPopBtn').off('click').on('click', SCWCBEF140M.mfunction.openSetCustBmkMenuPop);

	// 로그아웃
	$('#sideLogOutBtn').on('click', SCWCBEF140M.mfunction.sideLogOut);

	// top 버튼
	$('#btnTop').on('click', function(){
		// 스크롤 최상위로 이동
		var $scrollBody = ( ingmh.custw.library.isIE() || ingmh.custw.library.isFF() ? $(document.documentElement) : $('body'));
		$scrollBody.stop().animate({scrollTop : 0}, 300);
		return false;
	});


};

/**
 * Top으로 버튼 스크롤시 위치 이동 이벤트 바인딩
 *
 * @method topBtnEventBind
 * @date 2014-05-20
 * @Author jcAhn
 */
SCWCBEF140M.mfunction.topBtnEventBind = function() {

	var $btn = $('#btnTop');
	var btnH = $btn.height();

	$(window).off('scroll').on('scroll', function(){
		var startPos = ($('div.asideCont').offset().top + $('div.asideCont').height()) + 12;
		var endPos = (($('section.contentArea').offset().top + $('section.contentArea').height()) - btnH) -15;
		var scrollH = $(document).scrollTop();
		var winH	= $(window).height();
		var compH2 = (scrollH +  winH) - btnH;

		if(endPos < startPos){ $btn.hide(); return false; } else { $btn.show(); }

		if(startPos < compH2){
			var moveH = (compH2 - startPos - btnH);
			// min
			if(moveH < 0){ moveH = 0; }
			// max
			if(endPos < startPos + moveH){ moveH = (moveH - (startPos + moveH - endPos)); }
			$btn.stop().animate({'margin-top' : moveH + 'px'});
		}
	}).resize();

	return false;
};


/**
 * 로그아웃 버튼 클릭
 *
 * @method logOut
 * @date 2014-03-27
 * @Author LJM
 */
SCWCBEF140M.mfunction.sideLogOut = function() {
	ingmh.custw.bizutil.doLogOut();
	return false;
};


/**
 * 즐겨찾기 메뉴 조회
 *
 * @date 2014-03-27
 * @Author LJM
 */
SCWCBEF140M.mfunction.retrieveListCustBmkMenu = function() {

	// 거래 공통속성 설정한 로그인 거래을 실행하고 성공한 경우 메인화면으로 이동, 실패한 경우에는 입력항목 초기화하고 처리를 종료한다.
	var tranProp = sui.uti.object.clone(ingmh.custw.transaction.TRAN_COMM_PROP);
	tranProp.url = "/cb/ef/TCWCBEFIQ030";
	tranProp.tradeKey = "TCWCBEFIQ030";
	tranProp.ajaxFlag = true;
	tranProp.blokingFlag = false;
	tranProp.returnType = "json";
	//공통거래는 로그처리를 하지 않는다.
	tranProp.noLogging = true;
	tranProp.success = SCWCBEF140M.mfunction.retrieveListCustBmkMenuSuccess;
	tranProp.failure = SCWCBEF140M.mfunction.retrieveListCustBmkMenuFailure;

	try {
		ingmh.custw.transaction.callLaxTran(tranProp);
	} catch (e) {
		//ingmh.custw.bizutil.alert("ERR-TYPE : " + e.name + "\nERR-MESSAGE : " + e.message
		//		+ "\n\nDETAIL MESSAGE [\n" + " ERR-TYPE : " + e.cause.name
		//		+ "\n ERR-MESSAGE : " + e.cause.message + "\n]");
		return false;
	}
};

/**
 * 즐겨찾기 메뉴 조회 정상완료 콜백
 *
 * @method retrieveListCustBmkMenuSuccess
 * @date 2014-03-27
 * @Author LJM
 */

SCWCBEF140M.mfunction.retrieveListCustBmkMenuSuccess = function(data) {

	//초기화
	$('#bmkMenuList *').remove();
	SCWCBEF140M.mvar.dataList = data;

	SCWCBEF140M.mvar.stringValue  = '';
	for ( var i = 0; i < data.bmkMenuList.rows.length; i++) {
		if(data.bmkMenuList.rows[i].extnlLinkFlg == 'Y'){

			var linkUrl = data.bmkMenuList.rows[i].mvUrlAddr;
			var mainUrl = linkUrl.substr((linkUrl.lastIndexOf('://')+3));
			var strUrl1 = mainUrl.substr(0,mainUrl.indexOf('/'));
			var strUrl2 = mainUrl.substr(mainUrl.indexOf('/'));
			var makeName = strUrl1.substr(strUrl1.indexOf('.')+1);
			var urlName = makeName.substr(0,makeName.indexOf('.'));
			//var strName = mainUrl.substr(0,mainUrl.indexOf('.'));
			SCWCBEF140M.mvar.stringValue += '<li><a href="' + data.bmkMenuList.rows[i].mvUrlAddr
			+ '" onclick="dcsMultiTrack(\'DCS.dcssip\',\''+strUrl1+'\' , \'DCS.dcsuri\', \''+strUrl2+'\' ,WT.ti","download_'+urlName+'\')>'+ data.bmkMenuList.rows[i].menuNm + '</a></li>';
		}else{
			SCWCBEF140M.mvar.stringValue += '<li><a href="' + data.bmkMenuList.rows[i].mvUrlAddr
			+ '" onclick="return ingmh.custw.bizutil.checkAccessCyberAndLinkApp();">' + data.bmkMenuList.rows[i].menuNm + '</a></li>';
		}

		/*
		 * aaa.substr((aaa.lastIndexOf('://')+3))
		 * var bbb = aaa.substr((aaa.lastIndexOf('://')+3))
		 * bbb.substr(0,bbb.indexOf('/'))
		 * bbb.substr(0,bbb.indexOf('.'))
		 *
		aaa.substr(aaa.indexOf('/',aaa.indexOf('www')))
		aaa.substr(0,aaa.indexOf('/',aaa.indexOf('www')))
		var bbb = aaa.substr(0,aaa.indexOf('/',aaa.indexOf('www')))
		bbb.substr(bbb.indexOf('www'))

		var ccc = aaa.substr(aaa.lastIndexOf('www.')+4)
		ccc.substr(0,ccc.indexOf('.'))
		*/

	};

	$('#bmkMenuList').append(SCWCBEF140M.mvar.stringValue);

	// Top으로 버튼 스크롤시 위치 이동 이벤트 바인딩
	SCWCBEF140M.mfunction.topBtnEventBind();
};

/**
 * 즐겨찾기 메뉴 조회 오류응답 콜백
 *
 * @method retrieveListCustBmkMenuFailure
 * @date 2014-03-27
 * @Author LJM
 */
SCWCBEF140M.mfunction.retrieveListCustBmkMenuFailure = function(data) {

	//ingmh.custw.bizutil.alert(data.resMsg);

	// Top으로 버튼 스크롤시 위치 이동 이벤트 바인딩
	SCWCBEF140M.mfunction.topBtnEventBind();
};

/**
 * 즐겨찾기 메뉴 설정 팝업
 *
 * @method openSetCustBmkMenuPop
 * @date 2014-03-27
 * @Author LJM
 */

SCWCBEF140M.mfunction.openSetCustBmkMenuPop = function() {

	SCWCBEF140M.bizutil.openLayerPopup("/biz/common/cb/ma/scwcbma030p.jsp");
};

/**
 * 세션시간 설정
 *
 * @method setSessionTime
 * @date 2014-03-27
 * @Author LJM
 */
SCWCBEF140M.mfunction.setSessionTime = function(){
	var successCallback = function(data){
		SCWCBEF140M.mfunction.setTime(data.sessionTime);
	};
	//세션시간을 갱신해야 하므로  immediate 플래그 전달
	SCWCBEF140M.bizutil.getLoginCheck(successCallback, true);
};

/**
 * 로그인 남은 시간
 *
 * @method openSetCustBmkMenuPop
 * @date 2014-03-27
 * @Author LJM
 */
SCWCBEF140M.mfunction.setTime = function(sessionTime){

	SCWCBEF140M.mvar.now = new Date();
	SCWCBEF140M.mvar.minute = SCWCBEF140M.mvar.now.getMinutes().toString();
	SCWCBEF140M.mvar.second = SCWCBEF140M.mvar.now.getSeconds().toString();


	SCWCBEF140M.mvar.minute = sessionTime;
	SCWCBEF140M.mvar.second = 00;
	SCWCBEF140M.mvar.end=0;

	if(SCWCBEF140M.mvar.isLogin){
		SCWCBEF140M.mfunction.timeclock();
	}


};

/**
 * 타이머
 *
 * @method openSetCustBmkMenuPop
 * @date 2014-03-27
 * @Author LJM
 */
SCWCBEF140M.mfunction.timeclock = function (){

	  if(SCWCBEF140M.mvar.second == 00) {
		  SCWCBEF140M.mvar.minute = SCWCBEF140M.mvar.minute - 1 ;
		  SCWCBEF140M.mvar.second = 59 ;
	  } else{
		  SCWCBEF140M.mvar.second = SCWCBEF140M.mvar.second-1;
	  }

	//01:00분이 남았을 경우 함수를 호출하여 자동로그아웃 팝업 띄워야 함
	  if (SCWCBEF140M.mvar.minute == 1 && SCWCBEF140M.mvar.second == 00 && (SCWCBEF140M.mvar.end==0) ) {
		  SCWCBEF140M.mfunction.oneMinLeftPop();  // 시간 종료시 처리하는 함수
	  }

	  if ((SCWCBEF140M.mvar.minute < 0) && (SCWCBEF140M.mvar.end==0)) {
		    clearTimeout(SCWCBEF140M.mvar.timeObj);  //타이머 초기화
		    $('div.layerWrap').remove();
		    ingmh.custw.bizutil.doLogOut(SCWCBEF140M.mfunction.doLogOutSuccess, SCWCBEF140M.mfunction.doLogOutFailure);
		    end=1;
			return false;
	  }

	  if (SCWCBEF140M.mvar.second < 10) {
		  $('#sec').text(0 + SCWCBEF140M.mvar.second.toString());
	  } else {
		  $('#sec').text(SCWCBEF140M.mvar.second.toString());
	  }

	  if (SCWCBEF140M.mvar.minute < 10) {
		  	$('#min').text(0 + SCWCBEF140M.mvar.minute.toString());
	   } else {
			$('#min').text(SCWCBEF140M.mvar.minute.toString());
	   }
	  SCWCBEF140M.mvar.timeObj = setTimeout("SCWCBEF140M.mfunction.timeclock()", 1000);

	  if($('body').find('iframe#lPopArea').contents().find('#sec').length > 0){
		  $('body').find('iframe#lPopArea').contents().find('#sec').text(SCWCBEF140M.mvar.second.toString());
	  }
};



/**
 * 자동로그아웃 요청시 수행되는 함수이다.
 */
SCWCBEF140M.mfunction.oneMinLeftPop = function () {
	SCWCBEF140M.bizutil.openLayerPopup("/biz/common/cb/et/scwcbet080p.jsp");

};

SCWCBEF140M.mfunction.doLogOutSuccess = function(){
	 ingmh.custw.bizutil.goGetScreen(sui.env.getString("nsn.default.sessionOut"));
};

SCWCBEF140M.mfunction.doLogOutFailure = function(data){
	ingmh.custw.bizutil.alert(data.resMsg);

};




/**
 * resetTimer
 *
 * @method resetTimer
 */
SCWCBEF140M.mfunction.resetTimer = function(){
	clearTimeout(SCWCBEF140M.mvar.timeObj);  //타이머 초기화
	SCWCBEF140M.mfunction.setSessionTime();
};
