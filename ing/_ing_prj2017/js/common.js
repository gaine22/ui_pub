/*****************************************************************************
*  File Name      : common.js
*  Description    : 공통 JS 컴포넌트
*  Author         : jskim_m
*  Date Created   : 2014.01.09
*--------------------------------------------------------------
*  [변경 내역]
*  [YY.MM.DD] [변경자] [변경내역]
******************************************************************************/

//naitive prototype 처리

if(!String.prototype.replaceAll) {
	String.prototype.replaceAll = function (regexp, replaceValue){
		return this.toString().replace(new RegExp(regexp, 'gi'), replaceValue);
	};
}

/**
 * NameSpace 생성
 * 비지니스 클래스
 *
 * @namespace ingmh.custw
 * @constructor
 * @date 2014-01-18
 * @Author jskim_m
 */
ingmh = {
        custw : {
            /**
             * 네임스페이스에 모듈 오브젝트를 추가한다.
             *
             * @method addModule
             * @param {String} namespace 네임스페이스
             * @param {Object} module 모듈 오브젝트
             * @return {Object} ingmhModule ingmhObject
             */
            addModule : function(namespace, module) {
                var parts = namespace.split("."), parent = ingmh.custw;

                //중복되는 전역 객체명은 제거
                if ("ingmh" === parts[0]) {
                    parts = parts.slice(1);
                }
               // 중복되는 전역 객체명은 제거
                if ("custw" === parts[1]) {
                    parts = parts.slice(2);
                }
                for ( var i = 0, len = parts.length; i < len; i += 1) {
                    if ("undefined" === typeof parent[parts[i]]) {
                        parent[parts[i]] = (i === len - 1 ? module || {} : {});
                    }
                    parent = parent[parts[i]];
                }

                return parent;
            },
            /**
             * Bisiness 모듈 등록
             *
             * @method addWorker
             * @param {Object} screen 화면 오브젝트
             * @return {Object} screen 화면 오브젝트
             */
            addWorker : function(screen) {
                window._screens = window._screens || new Array();
                window._screens.push(screen);

                return screen;
            },
            /**
             * Bisiness 모듈 반환
             *
             * @method getWorker
             * @param {String} screen 화면명
             * @return {Object} screen 화면 오브젝트
             */
            getWorker : function(screen) {
                var screens = window._screens
                      , i
                      , loopCnt
                      , rtnScreen;

                for(i = 0, loopCnt = screens.length; i < loopCnt ; i=i+1){
                    if(screen === screens[i].SCREENID){
                        rtnScreen = screens[i];
                        break;
                    }
                }
                return rtnScreen;
            },
            /**
             * Bisiness 모듈 전체 반환
             *
             * @method getWorkers
             * @return {Object} screens 화면 오브젝트
             */
            getWorkers : function(){
                return window._screens;
            }
        }
};

/**
 * 솔루션 설치관련 함수를 제공하는 모듈이다.
 *
 * @class library
 * @namespace ingmh.custw
 * @constructor
 * @date 2014-03-27
 * @author tjseo
 */
ingmh.custw.addModule("library", (function() {
    var _private = {}, _public = {};

    _public.isMandatoryLibraryInstalled = function(){
    	if(_public.isLinux() || _public.isMac()){
    		//if(_public.xecure.isInstalled() && _public.nprotect.isInstalled()){
			if(_public.xecure.isInstalled()){
    			return true;
    		}
    	}
    	else{
    		/*TO-DO: 개인방화벽 포트오픈후 원복해야함..*/
    		if(_public.xecure.isInstalled() && _public.touchenkey.isInstalled()){
    		//if(_public.xecure.isInstalled() && _public.nprotect.isInstalled() && _public.touchenkey.isInstalled()){
    			return true;
    		}
    	}

    	return false;
    };

    _public.isLinux = function(){
    	//return true;
		return navigator.platform.indexOf("Linux") >= 0 ? true : false;
    };

    _public.isMac = function(){
    	return navigator.platform.indexOf("Mac") >= 0 ? true : false;
    };

    _public.isWin = function(){
    	return navigator.platform.indexOf("Win") >= 0 ? true : false;
    };

    _public.isWin32 = function(){
    	return navigator.platform.indexOf("Win32") >= 0 ? true : false;
    };

    _public.isWin64 = function(){
    	return navigator.platform.indexOf("Win64") >= 0 ? true : false;
    };

    _public.isMobile = {
    	    Android: function() {
    	        return /Android/i.test(navigator.userAgent);
    	    },
    	    BlackBerry: function() {
    	        return /BlackBerry/i.test(navigator.userAgent);
    	    },
    	    iOS: function() {
    	        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    	    },
    	    Windows: function() {
    	        return /IEMobile/i.test(navigator.userAgent);
    	    },
    	    any: function() {
    	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    	    }
    	};

    _public.isIE = function(){
    	if(navigator.userAgent.indexOf ("MSIE") >= 0 || navigator.userAgent.indexOf ("Trident") >= 0){
    		return true;
    	}
    	else{
    		return false;
    	}
    };

    _public.getIEVer = function(){
		var rv = -1; // Return value assumes failure.
		if (navigator.appName == 'Microsoft Internet Explorer') {
			var ua = navigator.userAgent;
			var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(ua) != null){
				rv = parseFloat(RegExp.$1);
			}
		} else if (ingmh.custw.library.isIE() && navigator.appName == 'Netscape') {
		    var ua = navigator.userAgent;
		    var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
		    if (re.exec(ua) != null){
				rv = parseFloat(RegExp.$1);
			}
		}
		return rv;
    };

    _public.isChrome = function(){
    	var browser = navigator.userAgent.toLowerCase();
    	return (browser.indexOf('chrome') > -1 && browser.indexOf('opr') == -1);
    };

    _public.isFF = function(){
    	var browser=navigator.userAgent.toLowerCase();
    	if(browser.indexOf('firefox') > -1) {
    		return true;
    	}
    	else{
    		return false;
    	}
    };

    _public.xecure = {
    	name : "XecureWeb",
    	isInstalled : function(){
    		if(typeof(XecureWeb) != "undefined"){
    			return !XecureWeb.IsNeedUpdate();
    		}
    		else{
    			ingmh.custw.bizutil.alert("XecureWeb 모듈이 로드되지 않았습니다.");
    			return false;
    		}
    	},
    	getDownloadLink : function(osBit){
    		if(_public.isLinux() && osBit == "32"){
    			// 32bit linux ubuntu
    			return XecureWeb.mPlatform.aInstallPath[0];
    			//return XecureWeb.mPlatformList[0].aInstallPath[0];
    		}
    		else if(_public.isLinux() && osBit == "64"){
    			// 64bit linux ubuntu
    			return XecureWeb.mPlatform.aInstallPath[2];
    			//return XecureWeb.mPlatformList[0].aInstallPath[2];
    		}
    		else{
    			return XecureWeb.mPlatform.aInstallPath;
    		}
    	}
    };

    _public.nprotect = {
    	name : "nProtect Netizen",
    	isInstalled : function(){
    		if(typeof(checkInstallNetizenPlugin) != "undefined"){
    			return checkInstallNetizenPlugin();
    		}
    		else{
    			ingmh.custw.bizutil.alert("개인방화벽 모듈이 로드되지 않았습니다.");
    			return false;
    		}
    	},
    	getDownloadLink : function(osBit){
    		if(_public.isLinux() && osBit == "32"){
    			// 32bit linux ubuntu
    			return "https://supdate.nprotect.net/netizen/insurance/inglife/81/linux/linux/ubuntu/linux-netizen-104.deb";
    		}
    		else if(_public.isLinux() && osBit == "64"){
    			// 64bit linux ubuntu
    			return "https://supdate.nprotect.net/netizen/insurance/inglife/81/linux/linux/ubuntu/linux-netizen-104-x86_64.deb";
    		}
    		else if(_public.isMac()){
    			return "https://supdate.nprotect.net/netizen/insurance/inglife/81/mac/nProtectOnlineSecurity.dmg";
    		}
    		else if(_public.isWin() && _public.isIE()){
    			return "https://supdate.nprotect.net/netizen/insurance/inglife/81/win/IE_nProtect_Netizen55_Setup_m.exe";
    		}
    		else if(_public.isWin() && !_public.isIE()){
    			return "https://supdate.nprotect.net/netizen/insurance/inglife/81/win/OB_nProtect_Netizen55_Setup.exe";
    		}
    	}
    };

    _public.touchenkey = {
    	name : "TouchEnKey",
    	isInstalled : function(){
    		if(_public.isWin()){
        		if(typeof(isInstalledTouchEnKey) != "undefined"){
        			return isInstalledTouchEnKey();
        		}
        		else if(typeof(TNK_IS_ENABLED) != "undefined" && TNK_IS_ENABLED == false){
        			return true;
        		}
        		else{
        			ingmh.custw.bizutil.alert("키보드보안 모듈이 로드되지 않았습니다.");
        			return false;
        		}
    		}
    		else{
    			return true;
    		}
    	},
    	getDownloadLink : function(){
    		if(_public.isWin32()){
    			return TouchEnKey_Multi_InstallBinary;
    		}
    		else if(_public.isWin64()){
    			return TouchEnKey_Multi_InstallBinary_x64;
    		}
    	}
    };

    _public.epagesafer = {
    	name : "e-PageSAFER",
    	isInstalled : function(){
    		if(typeof(getInstallMarkany) != "undefined"){
    			return getInstallMarkany().InstallCheck;
    		}
    		else{
    			ingmh.custw.bizutil.alert("위변조방지 모듈이 로드되지 않았습니다.");
    			return false;
    		}
    	},
    	getDownloadLink : function(osBit){
    		if(_public.isLinux() && osBit == "32"){
    			// 32bit linux ubuntu
    			return "/library/epage_safer/install/epagesafer-markany-2.5.0.2-1.deb";
    		}
    		else if(_public.isLinux() && osBit == "64"){
    			// 64bit linux ubuntu
    			return "/library/epage_safer/install/epagesafer-markany-2.5.0.2-1-release.tar.gz";
    		}
    		else if(_public.isMac()){
    			return "/library/epage_safer/install/ePageSAFERMarkAnySTD.dmg";
    		}
    		else if(_public.isWin()){
    			return "/library/epage_safer/install/MaDownloadRD.exe";
    		}
    	}
    };

    _public.reportviewer = {
    	name : "Crownix Report Viewer",
    	isInstalled : function(){
    		if(typeof(getInstallCxviewer) != "undefined"){
    			return getInstallCxviewer();
    		}
    		else{
    			ingmh.custw.bizutil.alert("리포트 모듈이 로드되지 않았습니다.");
    			return false;
    		}
    	},
    	getDownloadLink : function(){
    		if(_public.isLinux() || _public.isMac()){
    			return "http://www.oracle.com/technetwork/java/javase/downloads/index.html";
    		}
    		else if(_public.isIE()){
    			return "/library/report_designer/install/plugin/CX60u_OCX_setup.exe";
    		}
    		else{
    			return "/library/report_designer/install/plugin/CX60_Plugin_u_setup.exe";
    		}
    	}
    };

    return _public;
}()));


/**
 * 보안(암복호화) 관련 함수를 제공하는 모듈이다.
 *
 * @class secure
 * @namespace ingmh.custw
 * @constructor
 * @date 2014-01-18
 * @author jskim_m
 */
ingmh.custw.addModule("secure", (function() {
    var _private = {}, _public = {};

    /**
     * 키보드 암호화 사용여부를 반환한다.
     *
     * @public
     * @method isEnabled
     * @return {Boolean} 암호화 사용여부
     */
    _public.isKeySecure = function() {
    	if($("#transkeyUuid").length > 0){
    		return true;
    	}
    	else{
    		return false;
    	}
    };

    /**
     * form의 데이터를 암호화한다.
     *
     * @public
     * @method keyEncrypt
     * @param {String} formId : 폼의 ID
     * @return
     */
    _public.keyEncrypt = function(formId){
    	var frm = document.getElementById(formId);
    	if(makeEncData(frm)){
    		tk.fillEncData();
    	} else{
    		ingmh.custw.bizutil.alert("암호화에 실패하였습니다. 정확한 값을 입력 후 재시도 해주세요.");
    	}
    };

    /**
     * 키보드 보안필드를 초기화한다.
     *
     * @public
     * @method clearSecureField
     * @param {String} formId : 폼의 ID
     * @param {String} fieldId : 필드의 ID
     * @return
     */
    _public.clearSecureField = function(formId, fieldId){
    	var frm = document.getElementById(formId);
    	var field = document.getElementById(fieldId);
    	field.value = "";
    	TouchEnKey_Clear(frm.name, field.name);
    };

    _private.transkeyCloseCallback = {};
    /**
     * 가상키보드 close시에 호출되는 callback을 추가한다.
     *
     * @public
     * @method addTranskeyCloseCallback
     * @return
     */
    _public.addTranskeyCloseCallback = function(inputId, callback){
    	_private.transkeyCloseCallback[inputId] = callback;
    };

    /**
     * 가상키보드로 처리되는지 여부 확인
     *
     * @public
     * @method isTranskey
     * @return
     */
    _public.isTranskey = function(inputId){
    	try{
    		return transkey[inputId].useTranskey;
    	}
    	catch(e){}

    	return false;
    };

    /**
     * 가상키보드 close시에 등록된 callback을 호출한다.
     *
     * @public
     * @method callTranskeyCloseCallback
     * @return
     */
    _public.callTranskeyCloseCallback = function(tk){
    	for(inputId in _private.transkeyCloseCallback){
    		if(tk.doneCheck(inputId)){
        		var callback = _private.transkeyCloseCallback[inputId];
        		if(typeof(callback) == 'function'){
        			callback();
        			return;
        		}
    		}
    	}
    	try{
    		tk.close();
    	}
    	catch(e){};
    };

    /**
     * 전자서명
     *
     * @public
     * @method sign
     * @param {String} str
     * @param {String} str : 서명할 데이터
     * @param {Function} successCB
     */
    _public.sign = function(str, successCB) {
    	if(ing_xecure_s == ""){
    		return successCB("", "");
    	}

    	var _success = function(aResult){
    		var signedMsg = aResult;
    		var vidMsg = XecureWeb.GetVidInfo();

    		return successCB(vidMsg, signedMsg);
    	};
    	XecureWeb.SignDataWithVID(null, null, str, 8+16, null, null, null, ing_xecure_s, _success, _private.showMessage);
    };

    /**
     * 공인인증서 본인인증
     *
     * @public
     * @method vidSign
     * @param {Function} successCB
     */
    _public.vidSign = function(successCB) {
    	_public.sign("", successCB);
    };

    _private.showMessage = function(aResult) {
    	ingmh.custw.bizutil.alert(aResult.msg);
    };

    return _public;
}()));


/**
 * 리포트 관련 함수를 제공하는 모듈이다.
 *
 * @class report
 * @namespace ingmh.custw
 * @constructor
 * @date 2014-03-01
 * @author tjseo
 */
ingmh.custw.addModule("report", (function() {
    var _private = {}, _public = {};

    /**
     * 리포트 미리보기
     *
     * @public
     * @method viewReport
     * @return
     */
    _public.viewReport = function(mrdFilePath, options) {
    	// 리포트 파라미터 설정
    	var rdParam = "";

    	// 데이터셋 직접입력
    	if(options.rdata){
    		rdParam += " /rdata ["+ options.rdata +"]";
    	}

    	// 데이터를 가져오는 서버경로 입력
    	if(options.rfn){
    		rdParam += " /rfn ["+ _private.getServerPath() + options.rfn +"]";
    	}

    	// 데이터셋 직접입력
    	if(options.rnl){
    		rdParam += " /rnl ["+ options.rnl +"]";
    	}

    	// 마크애니 모듈설정
    	if(options.isSecure){
    		rdParam += " /rmultipage /rmacert ["+_private.getRdAgentPath()+"]";
    	}

    	// SSL Cert 예외처리
    	rdParam += " /rignorecert";


    	// 서버Path설정
    	rdParam += " /rv server_path[" + _private.getServerPath() + "]";


    	// 출력관련 추가옵션설정
    	rdParam += " /rwait /rwatchprn";

    	// 라이센스 적용
    	cxviewer.ApplyLicense(_private.getRdAgentPath());

    	// MRD캐싱 옵션(0:캐싱하지 않음, 1:캐싱함)
    	cxviewer.SetCacheOption(0);

    	// 파일미리보기설정
    	cxviewer.FileOpen(_private.getServerPath() + mrdFilePath, rdParam);
    	// 바로출력 설정
    	if(options.isPrint){
    		_public.printReport();
    	}
    };

    /**
     * RD Agent Path 설정
     *
     * @public
     * @method viewReport
     * @return
     */
    _private.getRdAgentPath = function(){
    	var host = window.location.host;
    	if(host.indexOf("localhost") >= 0){
    		rdServerPath = "https://10.25.3.3:8080";
    	}
    	else{
    		rdServerPath = _private.getServerPath();
    	}
    	var rdAgentPath = rdServerPath + "/DataServer/rdagent.jsp";

    	return rdAgentPath;
    };

    _private.getServerPath = function(){
    	var serverPath = window.location.protocol + "//" + window.location.host;

    	return serverPath;
    };

    /**
     * 리포트 인쇄
     *
     * @public
     * @method printReport
     * @return
     */
    _public.printReport = function() {
    	cxviewer.PrintDialog();
    };

    /**
     * 처음으로
     *
     * @public
     * @method goFirst
     * @return
     */
    _public.goFirstPage = function() {
    	cxviewer.FirstPage();
    };

    /**
     * 마지막으로
     *
     * @public
     * @method goLast
     * @return
     */
    _public.goLastPage = function() {
    	cxviewer.LastPage();
    };

    /**
     * 이전
     *
     * @public
     * @method goPrev
     * @return
     */
    _public.goPrevPage = function() {
    	cxviewer.PrevPage();
    };

    /**
     * 다음
     *
     * @public
     * @method goNext
     * @return
     */
    _public.goNextPage = function() {
    	cxviewer.NextPage();
    };

    /**
     * 확대
     *
     * @public
     * @method zoomIn
     * @return
     */
    _public.zoomIn = function() {
    	cxviewer.ZoomIn();
    };

    /**
     * 축소
     *
     * @public
     * @method zoomOut
     * @return
     */
    _public.zoomOut = function() {
    	cxviewer.ZoomOut();
    };

    var _eventCallback = {};

    /**
     * 이벤트콜백 추가
     *
     * @public
     * @method addEventCallback
     * @return
     */
    _public.addEventCallback = function(eventType, callback){
    	_eventCallback[eventType] = callback;
    };

    /**
     * 이벤트콜백 가져오기
     *
     * @public
     * @method getEventCallback
     * @return
     */
    _public.getEventCallback = function(eventType){
    	var callback = _eventCallback[eventType];
    	if(typeof(callback) != 'function'){
    		callback = function(){
    			// None
    		};
    	}
    	return callback;
    };

    return _public;
}()));

/**
 * 거래관련 함수를 제공하는 모듈이다.
 *
 * @class transaction
 * @namespace ingmh.custw
 * @constructor
 * @date 2014-01-18
 * @Author jskim_m
 */
ingmh.custw.addModule('transaction', (function() {
    var _public = {};

    _public.screenBlock = function(callback){
    	_private.screenBlock(callback);
    };

    _public.screenUnBlock = function(){
    	_private.screenUnBlock();
    };

    var _private = {
        // 전역 거래처리식별자
        GLOBAL_TRAN_TRAD_KEY : undefined,
        // 화면 블록킹 스택(여러거래가 동시에 진행시 제일 마지막 블록해제를 확인하여 해제처리...)
        GLOBAL_BLOCK_COUNT : new Array(),
        /**
         * 화면의 블로킹 처리를 한다.
         *
         * @private
         * @method screenBlock
         */
        screenBlock : function(callback){
        	if( 0 >= _private.GLOBAL_BLOCK_COUNT.length ) {
        		$.blockUI({
                    message : ("<div class=\"layer_content\"><div id=\"popup\" class=\"inner winPopS\" style=\"margin-top:350px;\"><div class=\"in\"><p class=\"popPtit\"><strong>당신을 위한 올바른 약속</strong></p><p class=\"popPimg\"><img src=\"/images/common/loading_n.gif\" alt=\"로딩중\"></p><div class=\"cardPBox\"><p><strong><span class=\"colorOrg\">처리중</span>입니다. 잠시만 기다려 주십시오.</strong></p><span>실행 처리 후 뒤로가기 버튼이나 새로고침 버튼을 클릭 시 <br>이중 처리되거나 에러가 발생할 수 있으니 유의하시기 바랍니다.</span></div></div></div></div>"),
                    onBlock : ($.isFunction(callback) ? callback : null),
                    css:{top: ($(window).height() - 900) / 2}
                });
        		_private.GLOBAL_BLOCK_COUNT.push(false);
        	} else {
        		_private.GLOBAL_BLOCK_COUNT.push(true);
        		if ($.isFunction(callback) ) {
        			callback();
        		}
        	}
        },
        /**
         * 화면의 블로킹를 해제한다.
         *
         * @private
         * @method screenUnBlock
         */
        screenUnBlock : function(){
        	if( !_private.GLOBAL_BLOCK_COUNT.pop() ) {
        		$.unblockUI();
        	}
        },

        /**
         * 거래를 실행하고 AJAX 거래처리 경우 성공여부에 따른 콜백을 호출해주고 결과를 반환해준다.
         * 만약 FORM 거래처리 이면 화면이 전환된다.
         *
         * @private
         * @method execute
         * @param {Object} tranProp 거래처리속성
         * @return {Object} AJAX 거래처리 경우에만 결과가 반환된다.
         */
        execute : function(tranProp) {
            tranProp.url = tranProp.url + (tranProp.ajaxFlag ? ".ajax" : ".form");

            tranProp.params += (tranProp.params ? "&" : "")
                                    + "TRADE_ID=" + tranProp.tradeKey
                                    //명시적으로 스크린아이디를 안 넘겨주면 getWorkers에서 제일 마지막에 push된 값을 기준으로 처리함(공통 레프트에서 전처리자들이 있어서)
                                    + "&SCREEN_ID=" + (tranProp.screenId ? tranProp.screenId : ingmh.custw.getWorkers()[ingmh.custw.getWorkers().length-1].SCREENID)
                                    + "&noLogging=" + tranProp.noLogging
                                    + "&_useLogId=" + ($("form[name='_commonForm']>input[name='_useLogId']").val()? $("form[name='_commonForm']>input[name='_useLogId']").val():-1)
                                    + "&nocache=" + new Date().getTime();

            // 키보드암호화 요청인경우
            if (typeof tranProp.dataForm != "undefined") {
            	if(ingmh.custw.secure.isKeySecure()){
            		ingmh.custw.secure.keyEncrypt(tranProp.dataForm.attr("id"));
            	}
            }

            // AJAX 요청
            if (tranProp.ajaxFlag) {
            	// dataForm.serialize()가 호출되기전에 params만 encode해야지 이중으로 encode되지 않으므로 앞으로 옮겼음. by STJ
            	tranProp.params = encodeURI(tranProp.params);
                // 파라메터에 폼요소들을 합친다.
                if (typeof tranProp.dataForm != "undefined") {
                    tranProp.params = (tranProp.params ? tranProp.params + encodeURI("&") + tranProp.dataForm.serialize() : tranProp.dataForm.serialize());
                } else {
                    tranProp.params = (tranProp.params ? tranProp.params : "");
                }

                // ## 거래 AJAX전송 전 출력
                if (sui.log.logEnabled()) {
                    sui.log.log("common.js in transaction.execute");
                    sui.log.log("ajax : " + tranProp.params);
                }

                //tranProp.params = encodeURIComponent(tranProp.params);

		        sui.trn.asyncTran("ajax", tranProp.method, tranProp.url, tranProp.params, (function(data, resStatus) {

		            // 이중거래 방지 해제
		            _private.GLOBAL_TRAN_TRAD_KEY = undefined;
		            // 화면 블로킹 해제
		            if (tranProp.blokingFlag) {
		            	_private.screenUnBlock();
		            }

		            var resultData = "";
		            try {
		                try {
		                    resultData = data;

		                } catch (jsonError) {
		                    throw {
		                        name : "JsonError",
		                        message : "데이터 파싱을 실패하였습니다.",
		                        cause : jsonError
		                    };
		                }

		            } catch (tError) {
		            	_private.GLOBAL_TRAN_TRAD_KEY = undefined;
		                // 전송 실패시 화면 블로킹 해제
		                if (tranProp.blokingFlag) {
		                	_private.screenUnBlock();
		                }

		                // 응답 형식이 올바르지 않습니다
		                resultData = JSON.parse("{\"resCode\":\"9999\",\"prcSts\":\"F\",\"resMsg\":\"" + tError.name + " : " + tError.message + "\"}");

		                if (sui.log.errorEnabled()) {
		                    sui.log.error("common.js in transaction.execute");
		                    sui.log.error(tError);
		                    sui.log.error(resultData);
		                }

		            }

		            ingmh.custw.transaction.resultMessageFunc(resultData, tranProp);

		        }), 60000);

            }
            // FROM 요청이면..
            else {

                //tranProp.dataForm.removeAttr("onsubmit");

                tranProp.dataForm.attr('method', tranProp.method);
                tranProp.dataForm.attr('action', tranProp.url);

                // 폼 주소에 파라메터을 추가한다.
                if ("GET" == tranProp.method.toUpperCase()) {
                    tranProp.dataForm[0].action + (tranProp.params ? "?" + tranProp.params : "");
                } else {
                    // 폼에 파라메터를 요소로 추가한다.
                    var inpts = tranProp.params.split("&");
                    for ( var idx = 0; idx < inpts.length; idx++) {
                        var inpt = inpts[idx].split("=");
                        // 먼저 폼요소에 있는지 해당 엘레먼트가 있는지 확인 후 없을때만 추가 한다.
                        // 추가 파라메터를 배열로 올리는건 불가.
                        var inputEle = $("input[name='" + inpt[0] + "']", tranProp.dataForm);
                        if (!inputEle[0]) {
                            inputEle = $("<input type=\"hidden\" name=\"" + inpt[0] + "\" value=\"" + inpt[1] + "\" />");
                            tranProp.dataForm.append(inputEle);
                        }
                        inputEle.val(inpt[1]);
                    }

                }

             // target 저장
                var formTarget = tranProp.dataForm[0].target;
                if(tranProp.isPopup){
	              	  var scrollbars = 'no';
	            	  if('' != tranProp.popupProp.scrollbars){
	            		  scrollbars = tranProp.popupProp.scrollbars;
	            	  }
	            	  var re =/[\#&.:;!@?=\\\|\{\}\/<>]/gi;
					  var popUid = tranProp.url.replace(re, '');
	            	  var popup = window.open(
	            			   '',
	            			   popUid,
	            			   "width="+tranProp.popupProp.width+
	            			   ", height="+tranProp.popupProp.height+
	            			   ", left="+tranProp.popupProp.left+
	            			   ", top="+tranProp.popupProp.top+
	            			   ", station=no, location=no, scrollbars="+scrollbars+", toolbar=no, resizable=no");
	            	  tranProp.dataForm[0].target = popUid;
                }

                // 거래 FORM전송 전 출력
                if (sui.log.logEnabled()) {
                    sui.log.log("common.js in transaction.execute");
                    sui.log.log("form : " + tranProp.dataForm.serialize());
                }
                tranProp.dataForm[0].submit();

                // target 복원
                tranProp.dataForm[0].target = formTarget;

            	_private.GLOBAL_TRAN_TRAD_KEY = undefined;
                // 전송 실패시 화면 블로킹 해제
                if (tranProp.blokingFlag) {
                	_private.screenUnBlock();
                }

            }
        },

        execute_external : function(tranProp) {

        	// 파라메터에 폼요소들을 합친다.
            if (typeof tranProp.dataForm != "undefined") {
                tranProp.params = (tranProp.params ? tranProp.params + encodeURI("&") + tranProp.dataForm.serialize() : tranProp.dataForm.serialize());
            } else {
                tranProp.params = (tranProp.params ? tranProp.params : "");
            }

            // ## 거래 AJAX전송 전 출력
            if (sui.log.logEnabled()) {
                sui.log.log("common.js in transaction.execute");
                sui.log.log("ajax : " + tranProp.params);
            }

	        sui.trn.asyncTran("ajax", tranProp.method, tranProp.url, tranProp.params, (function(data, resStatus) {

	            // 이중거래 방지 해제
	            _private.GLOBAL_TRAN_TRAD_KEY = undefined;
	            // 화면 블로킹 해제
	            if (tranProp.blokingFlag) {
	            	_private.screenUnBlock();
	            }

	            var resultData = "";
	            try {
	                try {
	                    resultData = data;

	                } catch (jsonError) {
	                    throw {
	                        name : "JsonError",
	                        message : "데이터 파싱을 실패하였습니다.",
	                        cause : jsonError
	                    };
	                }

	            } catch (tError) {
	            	_private.GLOBAL_TRAN_TRAD_KEY = undefined;
	                // 전송 실패시 화면 블로킹 해제
	                if (tranProp.blokingFlag) {
	                	_private.screenUnBlock();
	                }

	                // 응답 형식이 올바르지 않습니다
	                resultData = JSON.parse("{\"resCode\":\"9999\",\"prcSts\":\"F\",\"resMsg\":\"" + tError.name + " : " + tError.message + "\"}");

	                if (sui.log.errorEnabled()) {
	                    sui.log.error("common.js in transaction.execute");
	                    sui.log.error(tError);
	                    sui.log.error(resultData);
	                }
	            }

	            ingmh.custw.transaction.resultMessageFunc(resultData, tranProp);

	        }), 60000);

           },

        /**
         * 거래 처리가 성공할 경우 호출되어 지는 함수이다.
         *
         * @private
         * @method recvTranForSuccess
         * @param {Object} recvTranData 응답거래 데이터
         */
        recvTranForSuccess : function(recvTranData) {
        },

        /**
         * 거래 처리가 실패할 경우 호출되어 지는 함수이다.
         *
         * @private
         * @method recvTranForFailure
         * @param {Object} recvTranData 거래실패 메시지 데이터
         */
        recvTranForFailure : function(recvTranData) {
        }
    };

    /**
    * 거래공통 기본 속성
    *
    * @public
    * @property TRAN_COMM_PROP
    * @type {Object}
    */
    _public.TRAN_COMM_PROP = {
            /**
            * 거래방식 (select Ajax or Form Transaction)
            *
            * @property ajaxFlag
            * @type {Boolean}
            * @default true
            */
            ajaxFlag : true,
            /**
            * 화면잠금여부 (blocking Screen)
            *
            * @property blokingFlag
            * @type {Boolean}
            * @default true
            */
            blokingFlag : true,
            /**
            * 거래주소
            *
            * @property url
            * @type {String}
            */
            url : undefined,
            /**
            * 화면식별자
            *
            * @property screenId
            * @type {String}
            */
            screenId : undefined,
            /**
            * 거래식별자
            *
            * @property tradeKey
            * @type {String}
            */
            tradeKey : undefined,
            /**
            * 비동기여부
            *
            * @property asyncFlag
            * @type {Boolean}
            * @default true
            */
            asyncFlag : true,
            /**
            * 폼메서드
            *
            * @property method
            * @type {String}
            * @default POST
            */
            method : "POST",
            /**
            * 데이터폼
            *
            * @property dataForm
            * @type {Object}
            */
            dataForm : undefined,
            /**
            * 데이터파라메터
            *
            * @property params
            * @type {String}
            * @default ""
            */
            params : "",
            /**
            * 성공처리콜백
            *
            * @property success
            * @type {Function}
            * @default _private.recvTranForSuccess
            */
            success : _private.recvTranForSuccess,
            /**
            * 실패처리콜백
            *
            * @property failure
            * @type {Function}
            * @default _private.recvTranForFailure
            */
            failure : _private.recvTranForFailure,
            /**
            * 암호화여부
            *
            * @property security
            * @type {Boolean}
            * @default false
            */
            security : false,
            /**
             * 로깅 여부
             * (공통관련 로깅제외 하기 위한 옵션)
             *
             * @property noLogging
             * @type {Boolean}
             * @default false
             */
             noLogging : false,
            /**
            * 이중거래 방지
            *
            * @property doubleTranBlock
            * @type {Boolean}
            * @default false
            */
            doubleTranBlock : false,

            /**
             * 팝업호출여부
             *
             * @property isPopup
             * @type {Boolean}
             * @default false
             */
             isPopup : false,

             /**
              * 팝업호출여부
              *
              * @property popupProp
              * @type {Object}
              * @default ""
              */
              popupProp : ""
    };

    /**
     * 거래를 실행하고 AJAX 거래처리 경우 성공여부에 따른 콜백을 호출해주고 결과를 반환해준다.
     * 만약 FORM 거래처리 이면 거래처리후 서버에서 화면이 전환된다.
     *
     * @public
     * @method callTran
     * @param {Object} tranProp 거래처리속성
     * @return {Object} 동기화 AJAX 거래처리 경우에만 결과가 반환된다.
     */
    _public.callTran = function(tranProp) {
        try {
            // 처리할 폼 오브젝트가 없는 경우 처리중단....
            if (typeof tranProp.dataForm[0] == "undefined") {
                (function() {
                    var thrown = {
                        name : "TransactionError",
                        message : "처리할 데이터 양식이 존재하지 않습니다."
                    };

                    if (sui.log.errorEnabled()) {
                        sui.log.error("common.js in transaction.callTran");
                        sui.log.error(thrown);
                    }

                    throw thrown;
                }());
            }

            // 동일 거래가 요청된 경우 처리중단...
            if (_private.GLOBAL_TRAN_TRAD_KEY == tranProp.tradeKey) {
            	ingmh.custw.bizutil.alert("처리중입니다. 잠시만 기다려 주세요!");
                return false;
            }
            _private.GLOBAL_TRAN_TRAD_KEY = tranProp.tradeKey;



            // 이중거래 방지플래그 활성화 되어 있는 경우 서버에 토큰 생성 및 생성된 토큰값을 파라미터에 자동추가를 한다.
        	if(tranProp.doubleTranBlock){
        		return ingmh.custw.commonTran.getDoubleTranBlockTokenRetrieve(
						function(tranData, resMessage){
							// 성공
        					tranProp.params += (tranProp.params ? "&" : "")
	                                + "devon.token.field=" + tranData["devon.token.field"]
	                                + "&" + tranData["devon.token.field"] + "=" + tranData[tranData["devon.token.field"]];
        					return tranProp.blokingFlag ? _private.screenBlock(_private.execute(tranProp)) : _private.execute(tranProp);
						},
						function(tranData, resMessage){
							// 실패
							return tranProp.failure(tranData, resMessage);
						});
        	}else {
        		// 화면이 잠겨있지 않으면 화면을 잠근다.
        		return tranProp.blokingFlag ? _private.screenBlock(_private.execute(tranProp)) : _private.execute(tranProp);
        	}

        } catch (e) {
        	_private.GLOBAL_TRAN_TRAD_KEY = undefined;
            // 전송 실패시 화면 블로킹 해제
            if (tranProp.blokingFlag) {
            	_private.screenUnBlock();
            }

            (function(causeErr) {
                var thrown = {
                    name : "TransactionError",
                    message : "거래 처리를 실패하였습니다.",
                    cause : causeErr
                };

                if (sui.log.errorEnabled()) {
                    sui.log.error("common.js in transaction.callTran");
                    sui.log.error(thrown);
                }

                throw thrown;
            }(e));

        }

    };

    /**
     * 거래를 실행하고 AJAX 거래처리 경우 성공여부에 따른 콜백을 호출해주고 결과를 반환해준다.
     * 만약 FORM 거래처리 이면 거래처리후 서버에서 화면이 전환된다.
     *
     * @public
     * @method callTran
     * @param {Object} tranProp 거래처리속성
     * @return {Object} 동기화 AJAX 거래처리 경우에만 결과가 반환된다.
     */
    _public.callTran_external = function(tranProp) {
        try {

            // 동일 거래가 요청된 경우 처리중단...
            if (_private.GLOBAL_TRAN_TRAD_KEY == tranProp.tradeKey) {
            	ingmh.custw.bizutil.alert("처리중입니다. 잠시만 기다려 주세요!");
                return false;
            }
            _private.GLOBAL_TRAN_TRAD_KEY = tranProp.tradeKey;

            return tranProp.blokingFlag ? _private.screenBlock(_private.execute_external(tranProp)) : _private.execute_external(tranProp);


        } catch (e) {
        	_private.GLOBAL_TRAN_TRAD_KEY = undefined;
            // 전송 실패시 화면 블로킹 해제
            if (tranProp.blokingFlag) {
            	_private.screenUnBlock();
            }

            (function(causeErr) {
                var thrown = {
                    name : "TransactionError",
                    message : "거래 처리를 실패하였습니다.",
                    cause : causeErr
                };

                if (sui.log.errorEnabled()) {
                    sui.log.error("common.js in transaction.callTran");
                    sui.log.error(thrown);
                }

                throw thrown;
            }(e));

        }

    };

    /**
     * 폼이나 거래중복 체크을 하지 않는 AJAX 거래를 실행하고 성공여부에 따른 콜백을 호출해주고 결과를 반환해준다.
     *
     * @public
     * @method callLaxTran
     * @param {Object} tranProp 거래처리속성
     * @return {Object} 처리결과
     */
    _public.callLaxTran = function(tranProp) {
        try {
            tranProp.ajaxFlag = true;

            // 화면이 잠겨있지 않으면 화면을 잠근다.
            if (tranProp.blokingFlag) {
            	_private.screenBlock();
            }
            return _private.execute(tranProp);

        } catch (e) {
        	_private.GLOBAL_TRAN_TRAD_KEY = undefined;
            // 전송 실패시 화면 블로킹 해제
            if (tranProp.blokingFlag) {
            	_private.screenUnBlock();
            }

            (function(causeErr) {
                var thrown = {
                    name : "TransactionError",
                    message : "거래 처리를 실패하였습니다.",
                    cause : causeErr
                };

                if (sui.log.errorEnabled()) {
                    sui.log.error("common.js in transaction.callLaxTran");
                    sui.log.error(thrown);
                }

                throw thrown;
            }(e));

        }

    };

    /**
     * 성공 또는 실패에 대한 결과메시지를 작성하여, 콜백함수를 호출한다.
     *
     * @public
     * @method resultMessageFunc
     * @param {Object} recvTranData 거래응답 데이터
     * @param {Object} tranProp 거래처리속성
     */
    _public.resultMessageFunc = function(recvTranData, tranProp) {

        //응답 데이터가 데이터셋이 아니면...
        if("string"  === typeof(recvTranData)) {
            try{
                recvTranData = JSON.parse(recvTranData);
            }catch(e){

            	if ("object" === typeof(recvTranData)){
                // 네트웍이 끊어진 경우 연계오류 발생
            		recvTranData.prcSts = 'E';
            		recvTranData.resCode = 'CWECOS0001';
            		recvTranData.resMsg = '일시적인 장애가 발생하였습니다.';
            	}else {
            		recvTranData = {'prcSts' : 'E', 'resCode':'CWECOS0001', 'resMsg' : '일시적인 장애가 발생하였습니다.'};
            	}

            }
        }

        var isSuccess = (recvTranData.prcSts === "N");

        recvTranData.resCode = (isSuccess ? "0000" : (recvTranData.resCode ? recvTranData.resCode : "9999")) ;
        recvTranData.resMsg = (isSuccess ? "서비스가 정상 처리되었습니다." : (recvTranData.resMsg ? recvTranData.resMsg : "서비스 처리중 오류가 발생 하였습니다."));

        var message = "ERRCODE : " + recvTranData.resCode + "\nERRMESSAGE :" + recvTranData.resMsg;

        if(recvTranData.resAddMsg && 0 < recvTranData.resAddMsg.totalRowSize) {
            message += "\n\n부가메세지";
            for(var i=0, addMsgLen =recvTranData.resAddMsg.totalRowSize; i < addMsgLen; i +=1) {
                message += ("\n - " + recvTranData.resAddMsg.rows[i].addCode + " : " + recvTranData.resAddMsg.rows[i].addMsg); }
        }
        if(recvTranData.errCause) {
            message += "\n\n원인"; message += "\n - 파일 : " + recvTranData.errCause.fileName; message +=
                "\n - 줄번호 : " + recvTranData.errCause.lineNumber; message +=
                    "\n - 클래스 : " + recvTranData.errCause.className; message +=
                        "\n - 메소드 : " + recvTranData.errCause.methodName;
        }
        if(recvTranData.errTrace) {
            message += "\n\n추적\r\n\t" +
            recvTranData.errTrace;
        }


        if (isSuccess) {
            if (tranProp.success) {
                tranProp.success(recvTranData, message);
            }
        } else {
            if (tranProp.failure) {

                //로그인 처리에 걸림 (로그인 페이지로 전환)
                if("E" === recvTranData.prcSts && "SCP_COM_COMM_004" === recvTranData.resCode) {
                	ingmh.custw.bizutil.alert("로그인이 유효하지 않습니다.\n로그인 후 이용 바랍니다.");
                    //로그인 체크에 걸렸을때 최상위 부모창이 로그인 페이지로 가도록 처리
                	top.ingmh.custw.bizutil.goGetScreen(sui.env.get("nsn.default.login"), null);
                } else if("E" === recvTranData.prcSts && "CWECBU038" === recvTranData.resCode) {
                	//ingmh.custw.bizutil.alert("중복로그인이 으로 로그아웃 되었습니다.\n로그인 후 이용 바랍니다.");
                    //로그인 체크에 걸렸을때 최상위 부모창이 로그인 페이지로 가도록 처리
                	top.ingmh.custw.bizutil.goGetScreen(sui.env.get("nsn.default.ssologin"), null);
                } else {
                    tranProp.failure(recvTranData, message);
                }
            }
        }

    };

    return _public;
})());

/**
 * 공통 거래를 제공하는 모듈이다.
 *
 * @class commonTran
 * @namespace ingmh.custw
 * @constructor
 * @date 2014-01-18
 * @Author jskim_m
 */
ingmh.custw.addModule('commonTran', (function() {
    var _public = {};

    /**
     * 코드의 메세지를 반환한다.
     * 만약 메새지가 치환가능하고 치환목록이 입력되면 치환된 메세지가 반환되게 된다.
     *
     * @public
     * @method getMessageRetrieve
     * @param {String} code 코드
     * @param {Array} args 치환목록
     * @return {String} 메세지
     */
    _public.getMessageRetrieve = function(code, args) {
        var tranProp = sui.uti.object.clone(transaction.TRAN_COMM_PROP);
        tranProp.tradeKey = "TCOCOMG0100";
        tranProp.url = "co/co/TCOCOMG0100";
        tranProp.asyncFlag = false;
        tranProp.blokingFlag = false;
        tranProp.noLogging = true;
        tranProp.params = "code=" + code;
        if (args && $.isArray(args)) {
            tranProp.params = tranProp.params + "&args=" + args.join(",");
        }
        tranProp.failure = function(tranData, resMessage) {
            // TODO 처리를 실패한 경우 window.alert 으로 처리하고 있는데 향후에는 어떻게 할 것인가?
        	ingmh.custw.bizutil.alert("At commonTran.getMessageRetrieve@tranProp.failure\n" + resMessage);
        };

        var resData = transaction.callLaxTran(tranProp);
        return resData.message;
    };


    /**
     * 이중거래 방지
     * 토큰을 세션에 설정하고 생성된 토큰명과 토큰값을 얻는다.
     *
     * @public
     * @method getDoubleTranBlockTokenRetrieve
     * @return {Object} 토큰명과 토큰값 {"devon.token.field":"E2Z2OCGDX5B9J6HMGXTVE","E2Z2OCGDX5B9J6HMGXTVE"="6ZGF6GQ3Q54SWU237FHN8FL6GS5OB108"}
     */
    _public.getDoubleTranBlockTokenRetrieve = function(success,failure){
        var tranProp = sui.uti.object.clone(ingmh.custw.transaction.TRAN_COMM_PROP);
        tranProp.tradeKey = "TCWCBUTIQ010";
        tranProp.url = "/cb/ut/TCWCBUTIQ010";
        tranProp.asyncFlag = true;
        tranProp.blokingFlag = false;
        tranProp.noLogging = true;
        tranProp.success = success;
        tranProp.failure = failure;

        ingmh.custw.transaction.callLaxTran(tranProp);
    };

    return _public;
})());

/**
 * 프로젝트 유틸리티성격관련 함수를 제공하는 모듈이다.
 *
 * @class bizutil
 * @namespace ingmh.custw.bizutil
 * @constructor
 * @date 2014-01-18
 * @Author jskim_m
 */
ingmh.custw.addModule('bizutil', (function() {
    var _private = {}, _public = {};

    _public.screenBlock = function(callback){
    	ingmh.custw.transaction.screenBlock(callback);
    };

    _public.screenUnBlock = function(){
    	ingmh.custw.transaction.screenUnBlock();
    };

    /**
     * 그룹코드에 해당되는 코드목록(코드,이름)을 반환한다.
     *
     * @public
     * @method getCodeList
     * @param {String} gcode 그룹코드
     * @param {String} code 코드
     * @return {Object} 코드목록 {{"code" : "코드", "name" : "코드내용"}, ...}
     */
    _public.getCodeList = function(codeClss, codeGroup, code, callBack) {

    	var form = $("#dataForm1");

    	var tranProp = sui.uti.object.clone(ingmh.custw.transaction.TRAN_COMM_PROP);
        tranProp.tradeKey = "TCWCBUTIQ020";
        tranProp.dataForm 	= form;
        tranProp.url = "/cb/ut/TCWCBUTIQ020";
        tranProp.ajaxFlag   	= true;
        tranProp.blokingFlag = false;
        tranProp.noLogging = true;
        tranProp.params = "codeClss=" + codeClss+"&codeGroup="+codeGroup+"&code="+code;
        tranProp.success  	= callBack;
        tranProp.failure = function(tranData, resMessage) {
            // TODO 처리를 실패한 경우 window.alert 으로 처리하고 있는데 향후에는 어떻게 할 것인가?
        	ingmh.custw.bizutil.alert("At commonTran.getCodeList@tranProp.failure\n" + resMessage);
        };

        ingmh.custw.transaction.callLaxTran(tranProp);
    };


    /**
     * 로그인 여부 및 세션시간을 리턴한다.
     * ( 서버에 세션타임을 갱신해야 할 결우 즉시여부 플래그를 반드시 셋팅한다. )
     *
     * @public
     * @param callBack
     * @param immediate 즉시처리여부(서버세션값 갱신)
     * @method getLoginCheck
     * @return {Object} 로그인 여부 / 세션시간
     */
    _public.getLoginCheck = function(callBack, immediate) {
    	if(immediate){
        	var tranProp = sui.uti.object.clone(ingmh.custw.transaction.TRAN_COMM_PROP);
            tranProp.tradeKey = "TCWCBUTIQ030";
            tranProp.url = "/cb/ut/TCWCBUTIQ030";
            tranProp.ajaxFlag   	= true;
            tranProp.blokingFlag = false;
            tranProp.success  	= callBack;
            tranProp.failure = function(tranData, resMessage) {
                // TODO 처리를 실패한 경우 window.alert 으로 처리하고 있는데 향후에는 어떻게 할 것인가?
            	ingmh.custw.bizutil.alert("At commonTran.getLoginCheck@tranProp.failure\n" + resMessage);
            };

            ingmh.custw.transaction.callLaxTran(tranProp);
    	}else {
	    	if(callBack){
	    		callBack({"sessionTime" : $.sessionTime, "isLogin" : $.isLogin});
	    	}
    	}
    };

    /**
     * 개인별 인증 한도/최소금액/금액단위 조회
     *
     * @public
     *   <li>PLIMDT:보험계약대출즉시분류코드</li>
     *   <li>PLD2:보험계약대출D2분류코드</li>
     *   <li>DVAMT:배당금분류코드</li>
     *   <li>DORM:휴면보험금분류코드</li>
     *   <li>PLC:계약해지분류코드</li>
     *   <li>PTWDL:중도인출분류코드</li>
     * @method getLoanLimitAll
     * @return {Object} 개인별 인증 한도/최소금액/금액단위 조회
     */
    _public.getLoanLimitAll = function(type, callBack) {

    	var form = $("#dataForm1");

    	var tranProp = sui.uti.object.clone(ingmh.custw.transaction.TRAN_COMM_PROP);
        tranProp.tradeKey = "TCWCBUTIQ050";
        tranProp.dataForm 	= form;
        tranProp.url = "/cb/ut/TCWCBUTIQ050";
        tranProp.ajaxFlag   	= true;
        tranProp.params = "type=" + type;
        tranProp.blokingFlag = false;
        tranProp.noLogging = true;
        tranProp.success  	= callBack;
        tranProp.failure = function(tranData, resMessage) {
            // TODO 처리를 실패한 경우 window.alert 으로 처리하고 있는데 향후에는 어떻게 할 것인가?
        	ingmh.custw.bizutil.alert("At commonTran.getLoanLimitAll@tranProp.failure\n" + resMessage);
        };

        ingmh.custw.transaction.callLaxTran(tranProp);
    };

    /**
     * 현재 페이지가 팝업일때 최상위 WINDOW를 찾아 온다.
     * (iFrame에서 native 처리를 할수 없어서 parent의 라이브러리를 참조할 목적으로 제공
     *
     * @public
     * @method getParent
     * @return {Object} 최상위윈도우오브젝트
     */
    _public.getParent = function getParent(){
        var isRoot = _ispopup,
            node = '',
            stopFlag = 10,
            prObj = window;

        while(0 <= (--stopFlag) && isRoot){
            node = (node == '' ? 'parent' : 'parent.' + node );
            prObj = eval(node);
            isRoot = prObj._ispopup;
        }

        return prObj;
    };

    /**
     * 유효성 검증 공통 처리 로직
     * (개별적인 처리가 필요한 페이지는 각 페이지에서 따로 정의하여 사용할 수 있다.)
     *
     * @public
     * @method validateCheck
     * @param {Object} validResult SmartUI용 Validator 검증후 응답 오브젝트
     * @return {Boolean} true  : 오류에 대한 브레이크용, false : 정상에 대한 정상흐름용
     */
    _public.validateCheck = function (validResult) {
        if (!validResult[0]) {
            var isFocus = true, message = "", loopCnt1 = validResult.length, loopCnt2, obj, i, j;

            for (i = 1; i < loopCnt1; i += 1) {
                var errObj = validResult[i];

                for (j = 0, obj = errObj.result, loopCnt2 = obj.length; j < loopCnt2; j += 1) {

                    message += ("[" + errObj.title + "] " + obj[j] + "\n");
                }

                if (isFocus) {
                    errObj.object.focus();
                    isFocus = false;
                }
            }

            ingmh.custw.bizutil.alert(message);
            return true;
        } else {
            // 정상 처리 완료
            return false;
        }
    };


    /**
     * 사이버 센터에 PC로만 접근가능여부 판단
     *
     * @public
     * @method checkAccessCyber
     * @return {boolean} true/false
     *
     */
    _public.checkAccessCyber = function(){
    	if('PC' != sui.env.getString("config.env.deviceType")){
    		ingmh.custw.bizutil.openLayerPopup('/biz/common/cb/et/scwcbet130p.jsp');
    		return false;
    	}else{
    		return true;
    	}
    };

    /**
     * PC로만 접근가능여부 판단
     *
     * @public
     * @method checkAccessOnlyPC
     * @return {boolean} true/false
     *
     */
    _public.checkAccessOnlyPC = function(){
    	if('PC' != sui.env.getString("config.env.deviceType")){
    		ingmh.custw.bizutil.openLayerPopup('/biz/common/cb/et/scwcbet131p.jsp');
    		return false;
    	}else{
    		return true;
    	}
    };

    /**
     * 사이버 센터에 PC로만 접근가능 확인 및 앱 연결
     *
     * @public
     * @method checkAccessCyberAndLinkApp
     * @return {boolean} true/false
     *
     */
    _public.checkAccessCyberAndLinkApp = function(){
    	if('PC' != sui.env.getString("config.env.deviceType")){
    		ingmh.custw.bizutil.openLayerPopup('/biz/common/cb/et/scwcbet140p.jsp');
    		return false;
    	}else{
    		return true;
    	}
    };

    /**
     * 요청된 화면을 호출한다.(get방식)
     *
     * @public
     * @method goGetScreen
     * @param {String} uri [필수]주소
     * @param {String} param [선택]파라메터
     */
    _public.goGetScreen = function(uri, param){
        //TODO
        //sui.nsn.goScreen();
        location.href = (param ? uri + "?" + param : uri);
    };

    /**
     * 요청된 화면을 호출한다.(post방식)
     *
     * @public
     * @method goPostScreen
     * @param {String} uri [필수]주소
     * @param form or {String} param [선택] 파라메터
     */
    _public.goPostScreen = function(uri, param, checkDeviceTypeYn){

    	if('Y' === checkDeviceTypeYn){
    		if(!ingmh.custw.bizutil.checkAccessCyber()){
    			 return false;
    		 }
    	} else if('A' === checkDeviceTypeYn){
    		if(!ingmh.custw.bizutil.checkAccessCyberAndLinkApp()){
    			return false;
    		}
    	}

    	var tempForm = param = param || '';
    	var isTemporary = false;
    	//오브젝트인지 확인
    	if('object' === $.type(param)){
    		tempForm = $(param);
    	}else {
    		//폼 으로 설정
    		tempForm = new Array();
    		tempForm.push('<form onSubmit="return false">');
    		var tempParam = param.split('&');
    		for(var i=0, loopCnt = tempParam.length; i < loopCnt; i++){
    			var key = tempParam[i].substring(0, tempParam[i].indexOf('='));
    			var value = tempParam[i].substring(tempParam[i].indexOf('=') + 1);
    			tempForm.push('<input type=\'hidden\' name=\'');
    			tempForm.push(key);
    			tempForm.push('\' value=\'');
    			tempForm.push(value);
    			tempForm.push('\' />');
    		}
    		tempForm.push('</form>');
    		tempForm = $(tempForm.join(''));
    		isTemporary = true;
    	}

    	//IE일때는 DOM에 적용하지 않으면 submit 처리 안되서 아래와 같이 분기함
    	//if(navigator.userAgent.toLowerCase().indexOf("msie") != -1){

    		if(isTemporary){
    			$("body").append(tempForm);
    		}
        	tempForm.attr('action', uri);
       		tempForm.attr('method', 'post');
        	tempForm[0].submit();
        	if(isTemporary){
        		$(tempForm, "body").remove();
        	}

    };

    /**
     * 에러화면을 호출한다.(post방식)
     *
     * @public
     * @method goErrorScreen
     * @param {String} resCode [필수] 에러코드
     * @param {String} resMsg [필수] 에러메시지
     * @param {String} returnPage [필수] 에러페이지 확인후 전환될 페이지
     * @param {Object} resAddMsg
     */
    _public.goErrorScreen = function(resCode, resMsg, returnPage, resAddMsg ){
    	_public.goPostScreen(sui.env.getString("nsn.default.error"), "reqParam=true&resCode=" + resCode +"&resMsg=" + resMsg +"&returnPage=" +returnPage);
    };

    /**
     * 코드의 메세지를 반환한다.
     * 만약 메새지가 치환가능하고 치환목록이 입력되면 치환된 메세지가 반환되게 된다.
     *
     * @public
     * @method goWebzineLink
     * @param {String} url : 웹진 링크 url
     */
    _public.goWebzineLink = function(url) {

    	if($.isMobile){ window.open(url); return false; }

    	ingmh.custw.bizutil.getLoginCheck(function(data){
    		if(data.isLogin){
    	        var tranProp = sui.uti.object.clone(ingmh.custw.transaction.TRAN_COMM_PROP);
    	        tranProp.tradeKey = "TCWCBETIQ050";
    	        tranProp.url = "/cb/et/TCWCBETIQ050";
    	        tranProp.blokingFlag = false;
    	        tranProp.params = "url=" + url;
    	        tranProp.noLogging = true;
    	        tranProp.ajaxFlag   	= true;
    	        tranProp.success  		= function(data) {
    	        	var linkUrl = data.webzineUrl + '/auth/fromWebzineGateway.jsp?tm=' + encodeURIComponent(data.webzine) + '&returnUrl=' + encodeURIComponent(url);
    	        	createNewWindow(linkUrl);
    	        };

    	        try {
    	        	ingmh.custw.transaction.callLaxTran(tranProp);
    	        } catch(e) {
    	        	//console.log(e);
    	        	//ingmh.custw.bizutil.alert( "ERR-TYPE : " + e.name + "\nERR-MESSAGE : " +  e.message + "\n\nDETAIL MESSAGE [\n" + " ERR-TYPE : " + e.cause.name + "\n ERR-MESSAGE : " +  e.cause.message + "\n]");
								return false;
    	        }
        	} else {
        		createNewWindow(url);
        	}

        	function createNewWindow(url){
        		if($('#webzineLink').length == 0){ $('body').append('<a id="webzineLink" style="display:none" target="_blank">-</a>'); }
        		$('#webzineLink').attr('href', url)[0].click();
        	}

        	return false;
    	});
    	return false;
    };

    /**
     * 이벤트 정보(배너 영역)를 셋팅한다.
     *
     * @public
     * @param {object} data : 이벤트 Object Data
     * @param {String} id   : 배너 영역 id값
     */
    _public.setEventBnInfo = function(data, id) {

		var obj = ingmh.custw.getWorkers()[ingmh.custw.getWorkers().length-1];
		if (ingmh.custw.bizutil.isNull(obj.mvar.paramData)) {
			obj.mvar.paramData = {};
		}

		obj.mvar.paramData.basicId 		= data.evntBasicId;	// 이벤트기본ID
		obj.mvar.paramData.fcfsbSelFlg	= data.fcfsbSelFlg;	// 선착순선택여부
		obj.mvar.paramData.ptctnTypCd	= "4";				// 이벤트참여유형코드(4:거래형)
		obj.mvar.paramData.tgtpnTypCd	= "1";				// 참여대상자유형코드(1:계약자)

		// 이벤트 배너 영역
		$("#"+id).append("<div class='eventBn mt10'><a href='#' id='eventArea'><img id='evntUrlAddr'></a></div>");
		$("#eventArea").prop("title", data.evntTitlNm);
		$("#evntUrlAddr").prop("src", data.atcmtFileUrlAddr).prop("alt", data.evntBanrImgRpmtTxtNm);

		// 이벤트 배너 영역 클릭시 계약자 이벤트 고객정보 확인 화면 호출
		$(".eventBn").on('click', function() {
			ingmh.custw.bizutil.openLayerPopup("/biz/home/bs/ev/scwbsev100p.jsp");
		});
    };

    /**
     *
     * 보험상담팝업 호출
     *
     * @method openInsCnslPopup
     * @param planCode 상품코드
     * @return
     */
    _public.openInsCnslPopup = function(planCode) {

    	var params = "insEntryCnslProd=" + planCode + "&WT.si_n=" + $('meta[name="WT.si_n"]').attr('content');

    	ingmh.custw.bizutil.openWinPopup("/biz/home/ap/cb/scwapcb010p.jsp", {
    							width : 960,				//팝업창의 가로사이즈
    							height : 600,				//팝업창의 세로사이즈
    							left : 100,					//좌측에서 X픽셀을 띄운다.
    							top : 50,					//상단에서 X픽셀을 띄운다.
    							scrollbars : "yes",
    							resizable : "yes",
    							title : "보험가입상담" ,
    							location : "no",
    							param : params
    	});
    };

    /**
     * 문자열에 대해서 Null체크를 하여서 Null이면 취환할 문자열을 반환한다.
     *
     * @public
     * @method nvl
     * @param {String} strVal 체크할문자열
     * @param {String} reStrVal 치환할 문자열
     * @return {String} 치환된 문자열
     */
    _public.nvl = function(strVal, reStrVal){
    	if(strVal == null || strVal == "undefined") {
    		return (reStrVal || "");
    	}

    	return strVal;
    };


    /**
     * 문자열에 대해서 Null체크를 하여서 Null이면 취환할 문자열을 반환한다.
     *
     * @public
     * @method nvl
     * @param {String} strVal 체크할문자열
     * @param {String} reStrVal 치환할 문자열
     * @return {String} 치환된 문자열
     */
    _public.startTimer = function(time,timerId){

    		var x1 = document.getElementById("time1");
    		var x2 = document.getElementById("time2");
    		x1.innerHTML = toMinSec(time);
    		x2.innerHTML = toMinSec(time);

    		if(time > 0) time--;
    		else {
    			// 시간이 0이 되었으므로 타이머를 중지함
    			clearInterval(timerID);

    			// 시간이 만료되고 나서 할 작업을 여기에 작성
    			document.form.submit(); // 예: 강제로 form 실행
    		}

    };


    /**
     * null여부 반환
     *
     * @param strVal
     * @returns
     */
    _public.isNull = function (strVal){
    	return (strVal == null || strVal == "undefined" || strVal == "null") ? true : false;
    };

    /**
     * 사용자 안내/경고 메시지를 표시 한다.
     *
     * @public
     * @method alert
     * @param {String} message 주소
     * @param {Function} func 메세지 후행처리
     * @param {Array} funcArguments 후행처리 아규먼트
     */
    _public.alert = function(message, func, funcAgu){
        alert(message);
        if($.isFunction(func)){
        	func.apply(this, funcAgu);
        }
    };


    /**
     * 사용자 Confirm 을 수행한다
     *
     * @public
     * @method confirm
     * @param {String} message 메세지
     * @param {String} title 타이틀
     * @param {Array} callback 후행처리 아규먼트
     */
    _public.confirm = function(message, title, callback){
    	var result;
    	result = confirm(message);
    	if($.isFunction(callback)){
    		callback.apply(this, result);
        }

    	return result;

    };

    /**
     * 사용자 prompt 을 수행한다
     *
     * @public
     * @method prompt
     * @param {String} message 메세지
     * @param {String} defaultText 출력text
     * @param {String} title 타이틀
     * @param {Array} callback
     */
    _public.prompt = function(message, defaultText, title, callback){
    	var result;

    	result = (defaultText == null ? prompt(message) : prompt(message, defaultText));

    	if($.isFunction(callback)){
    		callback.apply(this, result);
        }

    	return result;
    };


    /**
     * 스페이스을 제거한다.
     *
     * @public
     * @method removeSpace
     * @param : 스페이스가 포함된 스트링
     * @returns : 스페이스가 제거된 스트링이 반환된다.
     */
    _public.removeSpace = function(strValue){
    	return strValue.replace(" ", "");
    };

    /**
	 * 파일확장자에 따른 파일다운로드 파일icon명 반환
	 *
	 * @method getLoginCheckCallback
	 * @date 2014-03-27
	 * @Author hryoo2
	 */
	_public.getFileImgInfo = function(filePath){

		var arrPath = filePath.split(".");
		var extension = arrPath[arrPath.length-1];
		extension = extension.toLowerCase();

		var preFix = "/images/common/icon/";
		var fileImgObj = null;

		switch(extension)
		{
			case "doc" :
				fileImgObj = {"imgPath":preFix+"icon_word.png", "imgAlt":"워드"};
				break;
			case "xls" :
				fileImgObj = {"imgPath":preFix+"icon_excel.png", "imgAlt":"엑셀"};
				break;
			case "xlsx" :
				fileImgObj = {"imgPath":preFix+"icon_excel.png", "imgAlt":"엑셀"};
				break;
			case "ppt" :
				fileImgObj = {"imgPath":preFix+"icon_powerPoint.png", "imgAlt":"파워포인트"};
				break;
			case "pptx" :
				fileImgObj = {"imgPath":preFix+"icon_powerPoint.png", "imgAlt":"파워포인트"};
				break;
			case "hwp" :
				fileImgObj = {"imgPath":preFix+"icon_hwp.png", "imgAlt":"한글"};
				break;
			case "zip" :
				fileImgObj = {"imgPath":preFix+"icon_zip.png", "imgAlt":"알집"};
				break;
			case "gif" :
				fileImgObj = {"imgPath":preFix+"icon_img.png", "imgAlt":"이미지"};
				break;
			case "jpg" :
				fileImgObj = {"imgPath":preFix+"icon_img.png", "imgAlt":"이미지"};
				break;
			case "png" :
				fileImgObj = {"imgPath":preFix+"icon_img.png", "imgAlt":"이미지"};
				break;
			case "pdf" :
				fileImgObj = {"imgPath":preFix+"icon_acrobat.png", "imgAlt":"PDF"};
				break;
			default :
				fileImgObj = {"imgPath":preFix+"icon_fileDown.png", "imgAlt":""};
				break;
		}
		return fileImgObj;
	};

    /**
     * 특수문자를 제거한다
     *
     * @public
     * @method removeSpecialChar
     * @param : String
     * @returns 	: 특수문자를 제거한 문자열
     */

    _public.removeSpecialChar = function(strValue){
    	 var strSpecial = "~!@#$%^&*-+./=_`{|}()\\?<>";

     	for (i = 0; i < strValue.length; i++)
     	{
     		for (j = 0; j < strSpecial.length; j++)
     		{
     			if (strValue.charAt(i) == strSpecial.charAt(j))
     			{
     				strValue = strValue.replace(strValue.charAt(i), "");
     			}
     		}
     	}

        return strValue;
    };


    /**
     * 함 수 명 	: formatRight
     * 함수설명 	: 문자열의 오른쪽부분을 지정한 길이만큼 Return 한다.
     * 입    력 	: strString	- 대상 문자열
     *			  	  nSize		- 얻어올 크기. [Default Value = 0]
     * 결    과 	: 오른쪽 부분이 얻어진 문자열.
     */
    _public.formatRight = function (strString, nSize)
    {
        var nStart 	= String(strString).length;
        var nEnd 	= Number(nStart) - Number(nSize);
        var rtnVal 	= strString.substring(nStart, nEnd);

        return rtnVal;
    };


    /**
     * 문자열의 바이트수 리턴
     * @returns {Number}
     */
    _public.byteLength = function (strString)
    {
    	var l= 0;

        for(var idx=0; idx < strString.length; idx++) {
            var c = escape(strString.charAt(idx));

            if( c.length==1 ) l ++;
            else if( c.indexOf("%u")!=-1 ) l += 2;
            else if( c.indexOf("%")!=-1 ) l += c.length/3;
        }

        return l;
    };


    /**
     * 함 수 명 	: formatLeft
     * 함수설명 	: 문자열의 왼쪽부분을 지정한 길이만큼 Return 한다.
     * 입    력 	: strString	- 대상 문자열
     *			  	  nSize		- 얻어올 크기. [Default Value = 0]
     * 결    과 	: 왼쪽 부분이 얻어진 문자열
     */
    _public.formatLeft =  function (strString, nSize)
    {
        var rtnVal = "";
        if (nSize > String(strString).length || nSize == null)
        {
            rtnVal = strString;
        } else {
            rtnVal = strString.substring(0, nSize);
    	}
        return rtnVal;
    };


   /**
    * 함 수 명 	: getToday
    * 함수설명 	: 해당 PC의 오늘 날짜를 가져온다
    * 입    력 	: None
    * 결    과 	: string
   */
   _public.getToday = function(){
	   var strToday = "";
       var objDate = new Date();
       var strToday  = objDate.getFullYear() + "";
   		strToday += _public.formatRight("0" + (objDate.getMonth() + 1), 2);
   		strToday += _public.formatRight("0" + objDate.getDate(), 2);

       return strToday;
   };

   /**
    * 함 수 명 	: getSrvTodayDate
    * 함수설명 	: 해당 서버의 오늘 날짜를 가져온다
    * 입    력 	: None
    * 결    과 	: string
   */
   _public.getSrvTodayDate = function(){
	   return $.serverData;
   };


   /**
    * 함 수 명 	: getTodayTime
    * 함수설명 	: 해당 PC의 오늘 날짜+시간를 가져온다.
    * 입    력 	: None
    * 결    과 	: string
   */
   _public.getTodayTime = function(){
		var strToday = "";
	   	var objDate = new Date();
	   	var strToday  = objDate.getFullYear() + "";
	   		strToday += _public.formatRight("0" + (objDate.getMonth() + 1), 2);
	   		strToday += _public.formatRight("0" + objDate.getDate(), 2);
	   		strToday += _public.formatRight("0" + objDate.getHours(), 2);
	   		strToday += _public.formatRight("0" + objDate.getMinutes(), 2);
	   		strToday += _public.formatRight("0" + objDate.getSeconds(), 2);

	   	return strToday;
   };

   /**
    * 현재날짜를 기준으로 n주전의 날짜를 조회
    *
    * @public
    * @method getWeekDay
    * @param : weeks
    * @returns 	: weekDate
    */
   _public.getWeekDay =  function (weeks){
   	var today = new Date();

   	today = today - 0;

   	var weekDay = new Date(parseInt(today)-(1000*86400*weeks*7));

   	var year = weekDay.getFullYear();
   	var month = weekDay.getMonth() + 1;
   	var day = weekDay.getDate();

   	if(month<10){
   		month = '0' + month;
   	}

   	if(day<10){
   		day = '0' + day;
   	}

   	var weekDate = year + '-' + month + '-' + day;

   	return weekDate;
   };


   /**
    * 현재날짜를 기준으로 n개월 전의 날짜를 조회
    *
    * @public
    * @method getMonthDay
    * @param : months
    * @returns 	: monthDate
    */
   _public.getMonthDay =  function (months){
   	var today = new Date();


   	if(today.getMonth()  - months < 0 ){
   		monthDay = new Date(today.setFullYear(today.getFullYear()-1, 12 + today.getMonth() - months, today.getDate()));
   	}else{
   		monthDay = new Date(today.setMonth(today.getMonth()- months, today.getDate()));
   	}

   	var year = monthDay.getFullYear();
   	var month = monthDay.getMonth() + 1;
   	var day = monthDay.getDate();

   	if(month<10){
   		month = '0' + month;
   	}

   	if(day<10){
   		day = '0' + day;
   	}

   	var monthDate = year + '-' + month + '-' + day;

   	return monthDate;

   };


   /**
    * 현재날짜를 기준으로 1년 전의 날짜를 조회
    *
    * @public
    * @method getOneYearBeforeDay
    * @param :
    * @returns 	: yearDate
    */

   _public.getOneYearBeforeDay =  function (){
   	var today = new Date();

   	var yearDay = new Date(today.setFullYear(today.getFullYear()-1, today.getMonth(), today.getDate()));

   	var year = yearDay.getFullYear();
   	var month = yearDay.getMonth() + 1;
   	var day = yearDay.getDate();

   	if(month<10){
   		month = '0' + month;
   	}

   	if(day<10){
   		day = '0' + day;
   	}

   	var yearDate = year + '-' + month + '-' + day;

   	return yearDate;
   };



   /**
   * 현재날짜를 기준으로 n년 후의 날짜를 조회
   *
   * @method getNYearDay
   * @param year
   * @return yearDate
   */
   _public.getNYearDay =  function (year){
   	var today = new Date();

   	var yearDay = new Date(today.setFullYear(today.getFullYear()+year, today.getMonth(), today.getDate()));

   	var year = yearDay.getFullYear();
   	var month = yearDay.getMonth() + 1;
   	var day = yearDay.getDate();

   	if(month<10){
   		month = '0' + month;
   	}

   	if(day<10){
   		day = '0' + day;
   	}

   	var yearDate = year + '-' + month + '-' + day;

   	return yearDate;
   };

   /**
    * 입력받은 날짜를 기준으로 n년 후의 날짜를 조회
    *
    * @method addNYearDay
    * @param inputDate
    * @param year
    * @return yearDate
    */
    _public.addNYearDay =  function (inputDate,year){

 	var inputYear = inputDate.substr(0,4);
 	var inputMonth = inputDate.substr(4,2);
 	var inputDay = inputDate.substr(6,2);

 	var setDateFormat = new Date(inputYear,inputMonth,inputDay);


    	var yearDay = new Date(setDateFormat.setFullYear(setDateFormat.getFullYear()+year, setDateFormat.getMonth(), setDateFormat.getDate()));

    	var resultYear = yearDay.getFullYear();
    	var resultMonth = yearDay.getMonth();
    	var resultDay = yearDay.getDate();

    	if(resultMonth<10){
    		resultMonth = '0' + resultMonth;
    	}

    	if(resultDay<10){
    		resultDay = '0' + resultDay;
    	}

    	var yearDate = resultYear + '-' + resultMonth + '-' + resultDay;

    	return yearDate;
    };

   /**
    * 함 수 명 	: isLeapYear
    * 함수설명 	: 윤년여부 확인
    * 입    력 	: sDate ( yyyyMMdd형태의 날짜 )( 예 : "20121122" )
    * 결    과 	: Boolean
    */
   _public.isLeapYear =  function (sDate)
   {
       var ret;
       var nY;

       if( _public.isNull(sDate) )	return false;

       nY = parseInt(sDate.substring(0, 4), 10);

       if ((nY % 4) == 0)
       {
   		if ((nY % 100) != 0 || (nY % 400) == 0)
           {
               ret = true;
           } else {
               ret = false;
           }
       } else {
           ret = false;
   	}
       return ret;
   };


   /**
    * 함 수 명 	: makeDate
    * 함수설명 	: yyyyMMdd 형태의 문자열 날짜 출력
    * 입    력 	: 예)makeDate("2010", "05", "01");
    *				  nYear 	- Year : 년도
    *				  nMonth 	- Month : 월
    *				  nDate 	- Date : 일
    * 결    과 	: sYear + sMonth + sDate
    */
   _public.makeDate = function (nYear, nMonth, nDate)
   {
   	if( _public.isNull(nYear) || _public.isNull(nMonth) || _public.isNull(nDate) )	return "";

   	var objDate = new Date(nYear, nMonth-1, nDate);

   	var sYear   = objDate.getFullYear().toString();
   	var sMonth  = _public.formatRight("0" + (objDate.getMonth() + 1), 2);
   	var sDate   = _public.formatRight("0" + objDate.getDate(), 2);

   	return sYear + sMonth + sDate;
   };


   /**
    * 함 수 명 	: addDate
    * 함수설명 	: 입력된 날자에 nOffset 으로 지정된 만큼의 일을 증감한다.
    * 입    력 	: sDate ( 날짜 )( 예 : "20121122" )
    *				  nOffset (일 증감값) ( 예 : 10 또는 -10 )
    * 결    과 	: String
    */
   _public.addDate = function (sDate, nOffset)
   {
   	if( _public.isNull(sDate) || _public.isNull(nOffset) )	return "";

       var nYear  	= parseInt(sDate.substr(0, 4));
       var nMonth 	= parseInt(sDate.substr(4, 2), 10);
       var nDate 	= parseInt(sDate.substr(6 ,2), 10) + nOffset;

       return _public.makeDate(nYear, nMonth, nDate);

   };

   /**
    * 함 수 명 	: addMonth
    * 함수설명 	: 입력된 날자에 nOffset 으로 지정된 만큼의 월을 증감한다.
    * 입    력 	: sDate ( 날짜 )( 예 : "20121122" )
    *				  nOffset (일 증감값) ( 예 : 10 또는 -10 )
    * 결    과 	: String
    */
   _public.addMonth = function (sDate, nOffset)
   {
   	if( _public.isNull(sDate) || _public.isNull(nOffset) )	return "";

       var nYear 	= parseInt(sDate.substr(0, 4));
       var nMonth 	= parseInt(sDate.substr(4, 2), 10) + nOffset;
       var nDate 	= parseInt(sDate.substr(6, 2), 10);
   	var nLastDate, sRet;

   	if(nDate.toString().length == 1)
   	{
   		nDate = "0" + nDate;
   	}

   	sRet 		= _public.makeDate(nYear, nMonth, 1);
       nLastDate 	= _public.lastDateNum(sRet);
       sRet 		= sRet.substr(0, 6);

       if( nDate > nLastDate )
       {
   		sRet += nLastDate.toString();
   	} else {
   		sRet += nDate.toString();
   	}

   	return sRet;
   };

   /**
    * 함 수 명 	: lastDateNum
    * 함수설명 	: 해당월의 마지막 날짜
    * 입    력 	: sDate ( 날짜 )( 예 : "20100501" )
    * 결    과 	: integer
    */
   _public.lastDateNum = function (sDate)
   {
   	var nMonth, nLastDate;

   	if( _public.isNull(sDate) )	return -1;

   	nMonth = parseInt(sDate.substr(4, 2), 10);
   	if( nMonth == 1 || nMonth == 3 || nMonth == 5 || nMonth == 7  || nMonth == 8 || nMonth == 10 || nMonth == 12 )
   	{
   		nLastDate = 31;
   	} else if( nMonth == 2 ) {
   		if( _public.isLeapYear(sDate) == true )
   		{
   			nLastDate = 29;
   		} else {
   			nLastDate = 28;
   		}
   	} else {
   		nLastDate = 30;
   	}
   	return nLastDate;
   };


   /**
    * 함 수 명 	: settingOnlyNumber
    * 함수설명 	: 숫자만 입력가능
    * 입    력 	:
    * 결    과 	:
    */
   _public.settingOnlyNumber = function (){

	   var key = event.keyCode;
	   if(!(key==8||key==9||key==13||key==46||key==144||
	       (key>=48&&key<=57)||key==110||key==190)) {
	       event.returnValue = false;
	   }
   };

   /**
    * 함 수 명 	: settingAmtByCcyCd
    * 함수설명 	: 통화코드(ccyCd)에 따라 원화,US달러, EURO달러를 분기
    * 입    력 	: amt,ccyCd,dotYn
    * 결    과 	: returnVal
    */
   _public.settingAmtByCcyCd = function (amt, ccyCd, dotYn){

	   var amtFormat = '';
	   var returnVal = '';

	   	var str = String(amt).split(".");

	   	var re = /(-?[0-9]+)([0-9]{3})/;

	   	while (re.test(str[0])) {
	   		str[0] = str[0].replace(re, "$1,$2");
	   	}

	   	if (str.length == 2){
	   		amtFormat =  str[0] + "." + str[1];
	   	}else{
	   		if('Y' == dotYn){
	   			amtFormat =  str[0]+"."+"00";
	   		}else{
	   			amtFormat =  str[0];
	   		}
	   	}

	   	if(ccyCd == '' || ccyCd == 'KRW' || ccyCd =='원'){
		       returnVal = sui.uti.formatter(amt, {mask : "amtWon"});
		}else if(ccyCd == 'USD'){
			   returnVal = amtFormat+'$';
		}else if(ccyCd == 'EUR'){
			   returnVal = amtFormat+'€';
		}

	   return returnVal;
   };

   /**
    * 함 수 명 	: makeSignDataAddStart
    * 함수설명 	: sms송신을 위한 스타트
    * 입    력 	: body
    * 결    과 	: returnVal
    */
   _public.makeSignDataAddStart =  function (body){
	    return "<sign_data>" + body;
	};

   /**
    * 함 수 명 	: makeSignDataAddBody
    * 함수설명 	: sms송신을 위한 바디
    * 입    력 	: body, strName, strValue
    * 결    과 	: returnVal
    */
	_public.makeSignDataAddBody =  function  (body, strName, strValue){
		return body + "<name>" + strName + "</name><value>" + strValue + "</value>";
	};

   /**
    * 함 수 명 	: makeSignDataAddEnd
    * 함수설명 	: sms송신을 위한 종료
    * 입    력 	: body
    * 결    과 	: returnVal
    */
	_public.makeSignDataAddEnd =  function (body){
		return body + "</sign_data>";
	};

	/**
	 * 함 수 명 	: getDayOfTheWeek
	 * 함수설명 	: 해당날짜의 요일을 가져온다
	 * 입    력 	: YYYYMMDD('20140101')
	 * 결    과 	: returnVal
	 */
	_public.getDayOfTheWeek =  function (checkDay){
		var yy = parseInt(checkDay.substr(0, 4), 10);

	    var mm = parseInt(checkDay.substr(4, 2), 10);

	    var dd = parseInt(checkDay.substr(6), 10);


	    var d = new Date(yy,mm - 1, dd);
	    var weekday=new Array(7);
	    weekday[0]="일";
	    weekday[1]="월";
	    weekday[2]="화";
	    weekday[3]="수";
	    weekday[4]="목";
	    weekday[5]="금";
	    weekday[6]="토";

	    return weekday[d.getDay()];
	};


	/**
	* 문자열 마스킹
	*
	* @public
	* @method strMasking
	* @param {String} str [필수] 변경 대상 String
	* @param {String} type [필수] 변경 타입
	* @param {String} defaultVal [옵션] str이 널인 경우 기본값*
	*/
	_public.strMasking = function(str, type, defaultVal){

		if(str == undefined || str == 'undefined' || str == null || str == 'null' || str == '' || str.length == 0){
			return (defaultVal || '');
		} else {

			var maskedStr = '';

			if(type=='pono'){
				maskedStr = '*****'+ str.substr(5);
			} else if(type=='rrn'){
				if(str.indexOf('-') > 0){
					maskedStr = str.substr(0, 6) + '-' + str.substr(7, 1) + '******';
				} else {
					maskedStr = str.substr(0, 6) + '-' + str.substr(6, 1) + '******';
				}
			} else if(type=='acntno'){
				maskedStr = str.substr(0, str.length-4).replace(/[0-9]/g, '*') + str.substr(str.length-4);
			} else if(type=='tel'){
				if(str.length > 4){
					maskedStr = str.substr(0, str.length-4) + '****';
				} else {
					maskedStr = '****';
				}
			} else if(type=='email'){
				if(str.indexOf('@') > 0 && str.split('@').length == 2){
					maskedStr = str.split('@')[0].substr(0, str.split('@')[0].length-2) + '**' + '@' + str.split('@')[1];
				} else {
					maskedStr = str.substr(0, str.length-2) + '**';
				}
			} else if(type=='addr'){
				maskedStr = '***';
			} else {
				maskedStr = str;
			}

			return maskedStr;
		}
	};


   /**
    * 윈도우 팝업 생성 (form/param)
    *
    * @public
    * @method openWinPopup
    * @param {String} screenId [필수]주소, 옵션벨류
    * @param form or {String} param [선택] 파라메터
    */
   _public.openWinPopup = function(screenId, settingValue){
	   // MAC Pc에서 Safari 브라우져로 인증서 내보내기 할 경우 안되는 문제 해결
	   if(screenId.indexOf("certificate") == -1) {

		   var re =/[\#&.:;!@?=\\\|\{\}\/<>]/gi;
		   var popUid = screenId.replace(re, '');
		   var orgTarget, orgMethod, orgAction;

		   //tempForm Submit 후 받을 더미 팝업을 생성 한다.
		   var popup = window.open(
				  '',
				  //팝업을 유니크 하게 하기 위해서 스크린아이디로 생성한다.
				  popUid,
				   "width="+settingValue.width+
				   ", height="+settingValue.height+
				   ", left="+settingValue.left+
				   ", top="+settingValue.top+
				   ", station=no, location=no, scrollbars="+((!settingValue.scrollbars) ? "no" : settingValue.scrollbars) +", toolbar=no, resizable=yes");

		   var tempForm = settingValue.param = settingValue.param || '';
		   var isTemporary = false;
		   //오브젝트인지 확인
		   if('object' === $.type(settingValue.param)){
			   tempForm = $(settingValue.param);
		   }else {
			   //폼 으로 설정
			   tempForm = new Array();
			   tempForm.push('<form onSubmit="return false">');
			   var tempParam = settingValue.param.split('&');
			   for(var i=0, loopCnt = tempParam.length; i < loopCnt; i++){
				   var inputEle = tempParam[i].split('=');
				   tempForm.push('<input type=\'hidden\' name=\'');
				   tempForm.push(inputEle[0]);
				   tempForm.push('\' value=\'');
				   tempForm.push(inputEle[1]);
				   tempForm.push('\' />');
			   }
			   tempForm.push('</form>');
			   tempForm = $(tempForm.join(''));
			   isTemporary = true;
		   }
		   //IE일때는 DOM에 적용하지 않으면 submit 처리 안되서 아래와 같이 분기함
		   //if(navigator.userAgent.toLowerCase().indexOf("msie") != -1){
		   if(isTemporary){
			   $("body").append(tempForm);
		   }
		   //원래값으로 변환
		   orgTarget = tempForm.attr('target');
		   orgMethod = tempForm.attr('method');
		   orgAction = tempForm.attr('action');
		   //위에 더미로 생성된 팝업에 스크린아이디로 target으로 요청한다.
		   tempForm.attr('target', popUid);
		   tempForm.attr('method', 'post');
		   tempForm.attr('action', screenId);
		   tempForm[0].submit();

		   if(isTemporary){
			   $(tempForm, "body").remove();
		   }

		   setTimeout(function(){
			   tempForm.attr('target', (orgTarget || ''));
			   tempForm.attr('method', (orgMethod || ''));
			   tempForm.attr('action', (orgAction || ''));
		   } ,200);


		   return popup;

	   } else {

		   window.open(screenId , '', 'width=940, height=700, station=no, location=no, scrollbars=yes, toolbar=no, resizable=yes');

	   }

   };

   /**
    * 레이어 팝업 생성 (url, closeCallBackFunc)
    *
    * @public
    * @method openLayerPopup
    * @param {String} url [필수] 팝업 주소
    * @param {function} closeCallBackFunc [옵션] 팝업이 닫힐때 호출될 콜백 함수
    */
   _public.openLayerPopup = function(url, closeCallBackFunc){
	   /**
	    * [Notice]
	    * 1. 팝업 js에서  " mvar : { parentMvar : parent[parent.ingmh.custw.getWorkers()[0].SCREENID].mvar } "
	    *    위와 같이 선언하면 부모화면의 mvar객체를 팝업화면의 mvar로 사용 할 수 있다. [SCWXXXX010M.mvar.parentMvar]
	    *
	    * 2. closeCallBackFunc을 인자로 넘기는 경우 파라미터로 팝업화면의 mvar객체를 넘겨준다
	    */
	   var $scrollBody = ( ingmh.custw.library.isIE() || ingmh.custw.library.isFF() ? $(document.documentElement) : $('body'));
	   var returnScrollY = 0;
	   var $returnFocus = $(':focus');

	   // 초기화
	   $('div.layerWrap').remove();

	   // 팝업 엘리먼트 영역 생성
		$('body')
		.append($('<div class="layerWrap" style="display:block;">')
		.append($('<div class="popupLayer">')
		.append($('<div class="back">dimmArea</div>'))
		.append($('<div class="layer_content">')
		.append('<iframe id="lPopArea" src="'+url+'" scrolling="no" border="0" marginheight="0" marginwidth="0" style="opacity:0;">'))));

		var jdoPopArea = $('body').find('iframe#lPopArea');

		// 팝업 onLoad
		jdoPopArea.load(function(){

			var jdoPop = jdoPopArea.contents().find('#popup').attr('tabIndex',0);

			jdoPopArea.prop('title', jdoPop.find('h2').text());

			// iframe 초기 Size 지정
			jdoPopArea.contents().find('object, embed').css({ position : 'absolute', left:'-5000px'});

			jdoPopArea.css({
				width : jdoPop.outerWidth(),
				height : (jdoPop.outerHeight())
			}).data('orgPopWidth', jdoPop.outerWidth())
			.data('orgPopHeight', jdoPop.outerHeight());


			// 반응형 대응
			$(window).on('resize', function(){

				var winW = window.innerWidth || $(window).innerWidth();
				var winH = window.innerHeight || $(window).innerHeight();
				var popW = jdoPopArea.data('orgPopWidth');
				var popH = jdoPopArea.data('orgPopHeight');

				if((winW*0.95) < popW){ popW  = (winW*0.95); }
				if((winH*0.95) < popH){ popH  = (winH*0.95); }

//				if(winW < popW){ popW  = winW; }
//				if(winH < popH){ popH  = winH; }

				jdoPopArea.css({
					top : (winH/2 - popH/2) + 'px',
					left : (winW/2 - popW/2) + 'px',
					width : popW
					, height : jdoPopArea.data('orgPopHeight')
				});

				// 현재 스크롤 X값 저장
				returnScrollY = $scrollBody.scrollTop();

				// 스크롤 최상위로 이동
				$scrollBody.stop().animate({scrollTop : 0}, 100, function(){
					jdoPopArea.stop().animate({ opacity : 1}, 300);
				});

			}).resize();

			// 웹접근성 : 레이어 팝업 포커스 이동을 위한 추가(IE7이하 적용 제외)
			if(ingmh.custw.library.getIEVer() == -1 || ingmh.custw.library.getIEVer() > 7){
				if(ingmh.custw.library.isIE() || ingmh.custw.library.isFF()){
					setTimeout( function() { jdoPop.focus(); } , 100);
					$('<a id="recurFocus" href="#none" class="hidden"></a>').appendTo(jdoPop).on('focus', function(){
						setTimeout( function() { jdoPop.focus(); } , 100);
					});
				} else {
					$('<a id="recurFocus" href="#none" class="hidden">').appendTo(jdoPop).on('focus', function(){
						jdoPop.focus();
					}).focus();
				}
			}
			// 레이어 팝업 닫기 버튼 클릭시
			jdoPopArea.contents().find('#popup').find('._btnClose, ._closeBtn, .close').on('click', function(){

				if(typeof(closeCallBackFunc) == 'function'){
					var returnData = undefined;
					/*// 오류발생으로 인한 일시 제한
					if(window.frames[0].window[url.split('/')[5].substr(0, 11).toUpperCase()]){
						returnData = window.frames[0].window[url.split('/')[5].substr(0, 11).toUpperCase()].mvar;
					}
					*/
					closeCallBackFunc(returnData);
				}
				// IE에서 팝업 ReOpen시에 input영역이 Block되는 현상으로 인하여 추가
				jdoPopArea.attr('src', 'about:blank');
				setTimeout( function(){$('div.layerWrap').remove();}, 200);

				// 스크롤 원래대로 되돌림
				$scrollBody.scrollTop(returnScrollY);
				// 포커스 원래대로 되돌림
				$returnFocus.focus();
			});
		});
   };

   /**
    * 강제 스크롤 공통
    *
    * @public
    * @method scrollTop
    * @param {String, Number} 이동 위치
    * @param {boolean} 애니메이션 유무
    * @param {function} 콜백함수
    */
   _public.scrollTop = function(pos, isAnimate, callback){
	   var $scrollBody = ( ingmh.custw.library.isIE() || ingmh.custw.library.isFF() ? $(document.documentElement) : $('body'));

	   if(isAnimate){
		   $scrollBody.stop().animate({scrollTop : Number(pos)}, 100, function(){
			   if(callback == 'function') { callback(); }
		   });
	   } else {
		   $scrollBody.scrollTop(Number(pos));
		   if(callback == 'function') { callback(); }
	   }
   };

	/**
	* Cookie 값 셋팅
	*
	* @public
	* @method setCookieVal
	* @param {String} name
	* @param {String} value
	*/
	_public.setCookieVal = function(name, value, days){
		var ExpDate = new Date();
		ExpDate.setTime(ExpDate.getTime() + 1000*60*60*24*Number(days ? days : 1));

		var argv = ingmh.custw.bizutil.setCookieVal.arguments;
		var argc = ingmh.custw.bizutil.setCookieVal.arguments.length;
		var expires = days ? days : 1;
		var path = (3 < argc) ? argv[3] : location.pathname.substring(0, location.pathname.lastIndexOf('/')) +'/';
		var domain = (4 < argc) ? argv[4] : null;
		var secure = (5 < argc) ? argv[5] : false;

		document.cookie = name + "=" + escape (value) +
		((expires == null) ? "" : ("; expires=" + ExpDate.toGMTString())) +
		((path == null) ? "" : ("; path=" + path)) +
		((domain == null) ? "" : ("; domain=" + domain)) +
		((secure == true) ? "; secure" : "");
	};

	/**
	* Cookie 값 셋팅
	*
	* @public
	* @method setCookieVal
	* @param {String} name
	* @param {String} value
	*/
	_public.getCookieVal = function(name){
		var arg = name + "=";
		var alen = arg.length;
		var clen = document.cookie.length;
		var i = 0;
		while (i < clen) {	//while open
			var j = i + alen;
			if (document.cookie.substring(i, j) == arg){
				var endstr = document.cookie.indexOf (";", j);
				if (endstr == -1) endstr = document.cookie.length;
				return unescape(document.cookie.substring(j, endstr));
			}
			i = document.cookie.indexOf(" ", i) + 1;
			if (i == 0) break;
		}	//while close
		return null;
	};

   /**
    * Cookie 값 삭제
    *
    * @public
    * @method setCookieVal
    * @param {String} name
    * @param {String} value
    */
   _public.deleteCookieVal = function(name){
	   document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
   };

   /**
    * 신용카드인증 공통
    *
    * @public
    * @method openLayerPopup
    * @param {String} url [필수] 팝업 주소
    */
   _public.includeCardAuth = function(url){

	   var hiddenClass = "";
	   if(!($.envType == "T" || $.envType  =="D")) hiddenClass = "class='disNone'";

	   if($("#_CARD_AUTH_DIV_").length == 0){
    		var hiddenDiv = $("<div id='_CARD_AUTH_DIV_' "+hiddenClass+"></div>");
			hiddenDiv.append($("<iframe id='ifrmComCardAuth' name='ifrmComCardAuth' width='600' height='50' title='신용카드인증용 프레임'></iframe>"));
			$("body").append(hiddenDiv);
	   }
	   $("#ifrmComCardAuth").prop("src", "/biz/common/cb/cc/scwcbcc100m.jsp");
   };

   /**
    * SELECT OPTION 삭제
    *
    * @private
    * @method emptySelect
    * @param {Object} jObject jQueryObject - Select
    * @return {Object} jQueryObject - Select
    */
   _private.emptySelect = function(jObject) {
        return jObject.each(function(){
          if (this.tagName=='SELECT') {
       	   this.options.length = 0;
          }
        });
     };

   /**
    * SELECT OPTION 등록
    *
    * @private
    * @method loadSelect
    * @param {Object} jObject jQueryObject - Select
    * @param {Array} arrData 셀렉트 생성 데이터
    * @param {String} defaultValue 디폴트값
    * @description arrData구조 [{'value' : '...', 'text' : '...'}, { 'value' : '...', 'text' :  '...'}, ...]
    */
     _private.loadSelect = function(jObject, arrData, defaultValue) {
        return _private.emptySelect(jObject).each(function(){
          if (this.tagName=='SELECT') {
              var selectElement = this;
              $.each(arrData,function(idx, optionData){
                  var option = new Option(optionData.text, optionData.value);
                  //if (navigator.userAgent.toLowerCase().indexOf("msie") != -1) {
                  if(ingmh.custw.library.isIE()){
                      selectElement.add(option);
                  }
                  else {
                      selectElement.add(option,null);
                  }
              });

              //default value Setting
              if(defaultValue) {
           	   $(selectElement).find('option[value="'+defaultValue+'"]').attr("selected", true);
              }
          }
       });
     };

     /**
      * SELECT OPTION 삭제
      *
      * @public
      * @method loadSelect
      * @param {Object} jObject jQueryObject - Select
      * @param {Array} arrData 셀렉트 생성 데이터
      * @param {String} defaultValue 디폴트값
      * @description arrData구조 [{'value' : '...', 'text' : '...'}, { 'value' : '...', 'text' :  '...'}, ...]
      */
     _public.emptySelect = function(jObject) {
   	  _private.emptySelect(jObject);
     };

     /**
      * SELECT OPTION 등록
      *
      * @public
      * @method loadSelect
      * @param {Object} jObject jQueryObject - Select
      * @param {Array} arrData 셀렉트 생성 데이터
      * @param {String} defaultValue 디폴트값
      * @description arrData구조 [{'value' : '...', 'text' : '...'}, { 'value' : '...', 'text' :  '...'}, ...]
      */
     _public.loadSelect = function(jObject, arrData, defaultValue) {
   	  _private.loadSelect(jObject, arrData, defaultValue);
     };

     /**
      * 원하는 value 값을 치환하여 반환한다.
      *
      * @public
      * @method replaceValue
      * @param strValue, changeValue, returnValue
      * @return 변환된 스트링이 반환된다.
      */
     _public.replaceValue = function(strValue, changeValue, retunrValue) {
    	 return strValue.replaceAll(changeValue,retunrValue);
     };

     /**
      * html 문서 스크립트 제거
      *
      * @public
      * @method removeScript
      * @param strValue
      * @return 변환된 스트링이 반환된다.
      */
     _public.removeScript = function(strValue) {

    	 var re = /\r\n/g;
		 var retunrValue = strValue;
		 retunrValue = retunrValue.replace(re, "@!-_-!@");
		 re = /<\s*script.+?<\/\s*script\s*>/gi;
		 retunrValue = retunrValue.replace(re, "");
		 re = /@!-_-!@/g;
		 retunrValue = retunrValue.replace(re, "\r\n");
		 re = /^\r\n/g;
    	 return retunrValue.replace(re, "");
     };

     /**
      * 모바일을 위한 플리킹 및 Zoom In Out 안내 Dimm 처리 부분
      *
      * @public
      * @method displayDimm
      */
     _public.displayDimm = function() {

    	 $('.tableScroll').each(function(){
			if($(this).is(':visible') && $(this).width() != $(this).find('table').width()){
				var flickingClass = 'flicking';
				var bgDivProp = $(this).offset();

				// dimm 위치를 정확히 맞추기 위한 (top)버퍼값
				var topBuffer = 53;
				var topMargin = 0;

				bgDivProp['height'] = $(this).height();
				bgDivProp['width'] = $(this).width();
				bgDivProp['top'] = (bgDivProp['top'] -topBuffer);

				if(bgDivProp['height'] < 400){
					flickingClass = 'flicking2';
					topMargin = Math.round((bgDivProp['height'] - 70)/2);
				} else {
					topMargin = Math.round((bgDivProp['height'] - 400)/2);
				}

				if($(this).next('#scrollDimm').length == 0 ) {
					$(this).after('<div id="scrollDimm" style="position:absolute;opacity:0.7;background-color:#000;"><p class="' + flickingClass +'" style="margin-top: ' + topMargin + 'px;">ING생명을 이용해 주셔서 감사합니다. 손가락으로 화면을 터치 한 후 좌,우로 플리킹하여 사용하시면 해당 콘텐츠를 확인하실 수 있습니다. </p></div>')
					.next().css(bgDivProp).on('click', function(){
						$(this).fadeOut('400', function(){ $(this).remove(); });
					});
				} else {
					$(this).next('#scrollDimm').css(bgDivProp);
				}
			} else {
				$(this).next('#scrollDimm').remove();
			}
		});
     };

     /**
      * 파일을 다운로드 한다.
      *
      * @public
      * @method download
      * @param bizDivCd 업무구분
	  	* 				01	사고보험금
      * 				02	고객문의
      * 				03	제휴
      * 				04	인재채용
      * 				05	설문조사
      * 				06	수술분류표
      * 				07 이벤트
      * 				99	기타
      * @param fileKey 첨부파일 key
      * @param fileType[선택] 첨부파일유형
      * @return
      */
     _public.download = function(bizDivCd, fileKey, fileType){
    	 fileType = fileType || '';

    	 var fileName = "";
    	 var url = "";
    	 if(bizDivCd == "99"){
    		 fileName = fileKey.split("/").pop();
    		 url = fileKey;
    	 }else{
    		 url = "/cb/ut/TCWCBUTIQ060.file?fileKey=" +fileKey + "&bizDivCd=" + bizDivCd;
    	 }

    	 //////////// [WEBTRENDS-START] 파일 다운로드 로그
    	 try{
    		 // DCS.dcssip : 도메인주소, DCS.dcsuri : 파일경로, WT.ti 파일명

	    	 dcsMultiTrack('DCS.dcssip', location.hostname,
	    			 			'DCS.dcsuri', url,
	    			 			'WT.ti', bizDivCd == "99" ? 'download_' + fileName :  'download_' + fileKey);
    	 }
    	 catch(e){
    	    	var cause = {
    	             name : "download",
    	             message : "[WEBTRENDS] 파일다운로드 로깅시 오류발생",
    	             cause : e
    	         };
    	    	if(typeof(sui) != 'undefined' && sui.log.isEnabled()){
    	    		sui.log.debug(cause);
    	    	}
    	 }
    	 //////////// [WEBTRENDS-END] 파일 다운로드 로그
    	 var isRevoke = !!(window.URL || window.webkitURL);
    	 if(ingmh.custw.library.isIE() || !isRevoke){

    		 if(fileName.toLowerCase().indexOf(".pdf") != -1 || fileType.toLowerCase() == "pdf" ){
    			 var _window = window.open(url, "_blank");
    			 return;
    		 }

        	 if($("#_DOWNLOAD_IFRAME_").length == 0){
         		var hiddenDiv = $("<div id='_DOWNLOAD_DIV_'' style='display:none'></div>");
     			hiddenDiv.append($("<iframe id='_DOWNLOAD_IFRAME_' name='_DOWNLOAD_IFRAME_' style='display:block'></iframe>"));
     			$("body").append(hiddenDiv);
     		}
     		$("#_DOWNLOAD_IFRAME_").prop("src", url);

    	 }else{
    			var saveFile = document.createElement('a');
    			saveFile.href = url;
    			saveFile.target = '_blank';
    			saveFile.download = fileName || 'unknown';

    	        //var event = document.createEvent('Event');
    	        //event.initEvent('click', true, true);

    			// Firefox 지원
    			var event = null;
    			try{
    				event = new MouseEvent('click', {view: window, bubbles: true, cancelable: true});
    			}catch(e){
    				event = document.createEvent('Event');
    				event.initEvent('click', true, true);
    			}

    	        saveFile.dispatchEvent(event);
    	        (window.URL || window.webkitURL).revokeObjectURL(saveFile.href);

    	 }



     };
     /**
      * 파일을 지정된 곳에서 다운로드 한다.
      *
      * @public
      * @method downloadLocation
      * @param bizDivCd 업무구분
	  	* 				01	사고보험금
      * 				02	고객문의
      * 				03	제휴
      * 				04	인재채용
      * 				05	설문조사
      * 				06	수술분류표
      * 				07 이벤트
      * 				99	기타
      * @param fileKey 첨부파일 key
      * @param fileType[선택] 첨부파일유형
      * @return
      */

     _public.downloadLocation = function(locationURL, bizDivCd, fileKey, fileType){

    	 fileType = fileType || '';

    	 var fileName = "";
    	 var url = "";
    	 if(bizDivCd == "99"){
    		 fileName = fileKey.split("/").pop();
    		 url = locationURL+fileKey; //외부사이트에서 다운로드이므로 절대경로로 표시한다.
    	 }else{
    		 url = "/cb/ut/TCWCBUTIQ060.file?fileKey=" +fileKey + "&bizDivCd=" + bizDivCd;
    	 }

    	 //////////// [WEBTRENDS-START] 파일 다운로드 로그
    	 try{
    		 // DCS.dcssip : 도메인주소, DCS.dcsuri : 파일경로, WT.ti 파일명
	    	 dcsMultiTrack('DCS.dcssip', locationURL,
	    			 			'DCS.dcsuri', url,
	    			 			'WT.ti', bizDivCd == "99" ? 'download_' + fileName :  'download_' + fileKey);
    	 }
    	 catch(e){
 	    	var cause = {
 	             name : "download",
 	             message : "[WEBTRENDS] 파일다운로드 로깅시 오류발생",
 	             cause : e
 	         };
 	    	if(typeof(sui) != 'undefined' && sui.log.isEnabled()){
 	    		sui.log.debug(cause);
 	    	}
	 	 }
	 	 //////////// [WEBTRENDS-END] 파일 다운로드 로그
	 	 var isRevoke = !!(window.URL || window.webkitURL);
	 	 if(ingmh.custw.library.isIE() || !isRevoke){

	 		 if(fileName.toLowerCase().indexOf(".pdf") != -1 || fileType.toLowerCase() == "pdf" ){
	 			 var _window = window.open(url, "_blank");
	 			 return;
	 		 }

	     	 if($("#_DOWNLOAD_IFRAME_").length == 0){
	      		var hiddenDiv = $("<div id='_DOWNLOAD_DIV_'' style='display:none'></div>");
	  			hiddenDiv.append($("<iframe id='_DOWNLOAD_IFRAME_' name='_DOWNLOAD_IFRAME_' style='display:block'></iframe>"));
	  			$("body").append(hiddenDiv);
	  		}
	  		$("#_DOWNLOAD_IFRAME_").prop("src", url);

	 	 }else{
	 			var saveFile = document.createElement('a');
	 			saveFile.href = url;
	 			saveFile.target = '_blank';
	 			saveFile.download = fileName || 'unknown';

	 	        //var event = document.createEvent('Event');
	 	        //event.initEvent('click', true, true);

	 			// Firefox 지원
	 			var event = null;
	 			try{
	 				event = new MouseEvent('click', {view: window, bubbles: true, cancelable: true});
	 			}catch(e){
	 				event = document.createEvent('Event');
	 				event.initEvent('click', true, true);
	 			}

	 	        saveFile.dispatchEvent(event);
	 	        (window.URL || window.webkitURL).revokeObjectURL(saveFile.href);

	 	 }



     };


    return _public;
})());


//화면이 준비되면 비지니스 초기화 호출(비지니스사용자의 초기화 함수 호출)
$(document).ready(function(){



	//includeJS.jsp에서 최초 화면 호출 했을때 블록킹 제거
	if($.isCyber) {
		ingmh.custw.transaction.screenUnBlock();
	}

	try {
		(function workerinit(){
			var screens = ingmh.custw.getWorkers()
					, i
					, loopCnt;

			//호출화면에 워커들을 모두 초기화 한다.
			for(i = 0, loopCnt = screens.length; i < loopCnt ; i=i+1){
					screens[i].init();
			}

		})();
	}catch(e){
		var cause = {
			 name : "document.ready",
			 message : "화면자원을 로드 하는데 실패 했습니다.",
			 cause : e
		 };
		if(typeof(sui) != 'undefined' && sui.log.isEnabled()){
			sui.log.debug(cause);
		}
		//throw cause;

	}

	/**
	 * 페이지 본문 공통 영역 스크립트
	 * @date 2014-06-14
	 * @Author jcAhn
	 */

	// 접근성을 위한 임시 코드 (메인컨텐츠 바로 이동)
	$('div#skipToContent > a').attr('href', '#goContent').on('click', function(){
		$('#goContent').parent().find('a, button, input, textarea').filter(':first').focus();
	});
	$('section#container > h1.hidden').removeAttr('class').wrap('<div id="goContent" class="hidden"></div>');

	$('<div class="topBtn"><button type="button">맨위로</button></div>').appendTo('section#container').on('click', function(){
		// 스크롤 최상위로 이동
		var $scrollBody = ( ingmh.custw.library.isIE() || ingmh.custw.library.isFF() ? $(document.documentElement) : $('body'));
		$scrollBody.stop().animate({scrollTop : 0}, 300);
	});


	/**
	 * 공통 헤더 영역 스크립트
	 * @date 2014-06-14
	 * @Author jcAhn
	 */

	$.isMobile = (sui.env.getString("config.env.deviceType") != 'PC');

	// 모바일인 경우
	if($.isMobile){
		// 헤더메뉴 링크 삭제
		$('.gnbArea > nav > ul > li > a').attr('onclick', 'javascript:return false;').attr('href', 'javascript:void(0);');
		// 전체메뉴에서 사이버센터 영역 삭제
		$('header').find('div.scroll > ul > li#iob > div[class*="menu"]').remove();
		// 모바일에서만 표시되는 닫기 버튼
		$('p.gnbBtn').show();
	}

	// 배너존 모바일 모드의 이동 버튼
	$('div.mBtnR', 'div.bannerZone').find('button').on('click', function(){
		$(this).parent().find('button').removeClass('on').filter($(this)).addClass('on');
		$('div.bannerW > ul', 'div.bannerZone').prepend($('li[class*="banner0' + ($(this).index() +1) + '"]', 'div.bannerZone'));
	});

	// 헤더메뉴 마우스 오버시 이벤트 바인딩
	$('.gnbArea > nav > ul > li').hover(function(e){
		if($(this).find('.menuW').is(':visible')){ return false; }
		if($.isMobile && $(this).hasClass('cyber')){
			ingmh.custw.bizutil.checkAccessCyberAndLinkApp();
		} else {
			$(this).parent().find('li').removeClass('on').filter($(this)).addClass('on');
			$(this).parent().find('.menuW').hide().filter($(this).find('.menuW')).stop().slideDown(300);
			$('section.location > nav > ul').find('div').hide();
		}
		// 공시실 메뉴 영역 아닌 곳을 클릭한 경우
		if($('#disclosureMenu > div').is(':visible')){ $('#disclosureMenu > div').hide().parent().removeClass('on'); }
	}, function(){
		$(this).removeClass('on').find('.menuW').hide();
	});

	$('.gnbArea > nav > ul > li > a').on('focus click', function(e){
		if(e.type=='focus' || $.isMobile){
			$(this).parent().trigger('mouseover');
			e.preventDefault();
			return false;
		}
	});

	// 접근성을 위한 조치, 헤더 하위 메뉴에서 마지막 링크에서 이동시 메뉴 닫음
	$('.gnbArea > nav > ul').find('.menuW').each(function(){
		var $menu = $(this);
		$(this).find('a').on('focusout blur', function(){
			setTimeout(function(){ if($menu.find('a:focus').length == 0){ $menu.hide().parent().removeClass('on'); } }, 100);
		});
	});

	//대메뉴 이벤트 처리 추가(링크)
	$('div.gnbArea>nav li>a').on('click', function(e){
		//팝업일때만  a href를 가로채서 팝업으로 처리 한다.
		if($(this).data('popoption')){
			var url = $(this).attr('href');
			// 모바일 환경에서 인증서 내보내기 메뉴인 경우, Block
			if(url.indexOf('smobile') != -1 && !ingmh.custw.bizutil.checkAccessOnlyPC()){ return false; }

			ingmh.custw.bizutil.openWinPopup(url, JSON.parse($(this).data('popoption').replaceAll('\'', '"')));
			e.preventDefault();
			return false;
		}
	});

	// 전체메뉴 > 좌측 메뉴 클릭시 이벤트 바인딩
	$(window).on('resize', function(){

		var $allMenus = $('header').find('div.scroll > ul > li');
		//var liHeight = $allMenus.eq(0).height();
		var marginHeight = (window.innerWidth < 768 ?  0 : 20);

		$allMenus.each(function(){


			$(this).find('a:first').off('click').on('click', function(){

				// 사이버 센터 인 경우
				//alert('모바일 테스트 중입니다 : ' + $.isMobile +':'+ $(this).parent().attr('id'));
				if($.isMobile && $(this).parent().attr('id') == 'iob'){
					$allMenus.removeClass('on');
					ingmh.custw.bizutil.checkAccessCyberAndLinkApp();
				} else {
					var nextTopPos = 0;
					$allMenus.removeClass('on').filter($(this).parent()).addClass('on').parent().find('ul').removeClass('on');
					$(this).next().animate({ top : nextTopPos + 'px' }).find('ul:first').addClass('on');

					nextTopPos += Number($(this).next().height());

					$allMenus.not($(this).parent()).each(function(idx){
						$(this).find('div:first').animate({ top : nextTopPos /* - (liHeight * idx) */ + (marginHeight * (idx+1)) + 'px' });
						nextTopPos +=  $(this).find('div:first').height();
					});
				}
				return false;
			});
		});
		$allMenus.filter('.on').find('a:first').click();
	}).resize();

	// 전체 메뉴 열기 버튼
	$('div.all_menu > p > button').on('click', function(){
		$('div.all_menuList').slideDown();
		$('header').find('div.scroll > ul > li:first > a:first').click();

		// 공시실 메뉴 영역 아닌 곳을 클릭한 경우
		if($('#disclosureMenu > div').is(':visible')){ $('#disclosureMenu > div').stop().slideUp(200).parent().removeClass('on'); }
	});

	// 전체 메뉴 닫기 버튼
	$('div.all_menuList > div.inner > div.all_menuTop').find('button:first').on('click', function(){
		$('div.all_menuList').stop().slideUp();
		$('div.all_menu > p > button').focus();
	});

	// 접근성을 위한 조치, 전체 메뉴 마지막 링크에서 이동시 전체 메뉴 닫음

	$('header').find('div.scroll').find('a').on('focusout blur', function(){
		setTimeout(function(){ if($('header').find('div.scroll').find('a:focus').length == 0){ $('div.all_menuList').stop().slideUp(); $('div.all_menu > p > button').focus(); } }, 100);
	})
	//팝업일때만  a href를 가로채서 팝업으로 처리 한다.
	.on('click', function(e){
		if($(this).data('popoption')){
			var url = $(this).attr('href');

			// 모바일 환경에서 인증서 내보내기 메뉴인 경우, Block
			if(url.indexOf('smobile') != -1 && !ingmh.custw.bizutil.checkAccessOnlyPC()){ return false; }

			ingmh.custw.bizutil.openWinPopup(url, JSON.parse($(this).data('popoption').replaceAll('\'', '"')));
			e.preventDefault();
			return false;
		}
	});

	// Utility 영역 공시실 하위 메뉴 생성
	$('div.all_menuList:first').find('ul.pnMenu:first').find('ul > li:first-of-type').not(':last').clone(false).appendTo($('#disclosureMenu').find('ul:first'));

	// Utility 영역 공시실 이벤트 바인딩
	$('#disclosureMenu > a').on('click', function(){
		$(this).parent().toggleClass('on');
		$(this).next().stop().slideToggle(200);

		// 네비게이션 영역 메뉴 영역 아닌 곳을 클릭한 경우
		if($('section.location > nav > ul > li > div').filter(':visible').length > 0){
			$('section.location > nav > ul > li > div').stop().slideUp(200);
		}

		// 전체메뉴가 열려 있는 경우
		if($('div.all_menuList').is(':visible')){
			$('div.all_menuList').stop().slideUp();
		}
		return false;
	})
	// 접근성을 위한 조치, 메뉴에서 마지막 링크에서 이동시 메뉴 닫음
	.next().find('a').on('focusout blur', function(){
		setTimeout(function(){ if($('#disclosureMenu > div').find('a:focus').length == 0){ $('#disclosureMenu > div').slideUp(200); $('#disclosureMenu > a').focus(); } }, 100);
	});


	$('body').on('click', function(){

		// GNB영역 아닌 곳을 클릭한 경우
		$('.gnbArea > nav > ul > li.on').removeClass('on').find('.menuW').hide();

		// 네비게이션 영역 메뉴 영역 아닌 곳을 클릭한 경우
		if($('section.location > nav > ul > li > div').filter(':visible').length > 0){
			$('section.location > nav > ul > li').removeClass('on');
			$('section.location > nav > ul > li > div').stop().slideUp(200);
		}
		// 공시실 메뉴 영역 아닌 곳을 클릭한 경우
		if($('#disclosureMenu > div').is(':visible')){ $('#disclosureMenu > div').stop().slideUp(200).parent().removeClass('on'); }
	});

	// 반응형 검색버튼 이벤트 바인딩
	$('div.topGroup').find('button.searchBtn').on('click', function(){
		if($('div.fieldestW').css('display') == 'none'){
			$('div.fieldestW').slideDown();
		} else {
			$('div.fieldestW').slideUp();
		}
	});

	// RELATED LICK 버튼 이벤트 바인딩
	$('div.fmenuBtn').find('button').on('click', function(){
		if($(this).parent().next().is(':visible')){
			$(this).parent().removeClass('click').next().hide();
		} else {
			$(this).parent().addClass('click').next().show();
		}
	});

	// 로그인 버튼 이벤트 바이딩
	$("#logInBtn").click(function(){
		// 사이버 센터에 PC로만 접근가능여부 판단
		if (!ingmh.custw.bizutil.checkAccessCyberAndLinkApp()) return false;
		ingmh.custw.bizutil.doLogIn();
		return false;
	});

	// 로그아웃 버튼 이벤트 바이딩
	$("#logOutBtn").click(function(){
		ingmh.custw.bizutil.doLogOut();
		return false;
	});


	// 메뉴에 링크가 없는 경우 그레이 처리(임시)
	/* $('header').find('a').each(function(){
		var url = $(this).attr('href');
		if(url == '' || url == '#' || url == '#none'){
			$(this).css('color', '#DCDCDC');
		}
	}); */

	// 검색버튼 클릭시
	$("#searchQBtn").click(function(e){
		if ($("#query").val() == null || $("#query").val() == "") {
			ingmh.custw.bizutil.alert("검색어를 입력하세요.");
			$("#query").focus();
			return false;
		}else{
			//if ($.cookieSave == 0) {
				ingmh.custw.bizutil.setCookie('INGLifeSearch', $("#query").val());
			//}
			ingmh.custw.bizutil.goSearch();
		}
	});

	// 검색창에서 엔터키 입력시
	$("#query").keypress(function(e){
		if ( (e.keyCode)&& (e.keyCode == 13) ) {
			if ( $("#query").val() == null || $("#query").val() == "") {
				ingmh.custw.bizutil.alert("검색어를 입력하세요.");
				$("#query").focus();
				return false;
			} else {
				ingmh.custw.bizutil.setCookie('INGLifeSearch', $("#query").val());
				ingmh.custw.bizutil.goSearch();
			}
		}
	});


	// 보험가입상담 팝업에서 로그인버튼으로 로그인 한 후 되돌아 온 경우, 파업을 다시 오픈한다.
	(function(){ if($('#isInsCnslPopupOpen').val() == 'Y'){ ingmh.custw.bizutil.openInsCnslPopup($("#planCode").val()); } })();


	/**
	 * 모바일을 위한 플리킹 및 Zoom In Out 안내 Dimm 처리 부분
	 */
	if($.isMobile){

		var $target = $('.tableScroll');
		if($target.length > 0){
			$target.off('mousedown').on('mousedown', function (event) {
		        $(this).data('down', true).data('x', event.clientX).data('scrollLeft', this.scrollLeft);
		        return false;
		    }).off('mouseup').on('mouseup', function (event) {
		        $(this).data('down', false);
		        return false;
		    }).off('mousemove').on('mousemove', function (event) {
		        if ($(this).data('down') == true) {
		            this.scrollLeft = $(this).data('scrollLeft') + $(this).data('x') - event.clientX;
		        }
		    });

		    $(window).off('mouseout').on('mouseout', function (event) {


			    if ($target.data('down')) {
			    	//if (event.originalTarget.nodeName == 'BODY' || event.originalTarget.nodeName == 'HTML') {
			    		$target.data('down', false);
	            	//}
			    }
			}).on('resize', function(){
				displayDimm();
			});

		    function displayDimm(){
				$target.each(function(){
					if($(this).is(':visible') && $(this).width() != $(this).find('table').width()){
						var flickingClass = 'flicking';
						var bgDivProp = $(this).offset();

						// dimm 위치를 정확히 맞추기 위한 (top)버퍼값
						var topBuffer = 53;
						var topMargin = 0;

						bgDivProp['height'] = $(this).height();
						bgDivProp['width'] = $(this).width();
						bgDivProp['top'] = (bgDivProp['top'] -topBuffer);
						//높이가 0보다 클때, 동적으로 생성되는 스크롤에는 적용하면 안되기때문에 체크필요
						if($target.height()>0){
							if(bgDivProp['height'] < 400){
								flickingClass = 'flicking2';
								topMargin = Math.round((bgDivProp['height'] - 70)/2);
							} else {
								topMargin = Math.round((bgDivProp['height'] - 400)/2);
							}

							if($(this).next('#scrollDimm').length == 0 ) {
								$(this).after('<div id="scrollDimm" style="position:absolute;opacity:0.7;background-color:#000;"><p class="' + flickingClass +'" style="margin-top: ' + topMargin + 'px;">ING생명을 이용해 주셔서 감사합니다. 손가락으로 화면을 터치 한 후 좌,우로 플리킹하여 사용하시면 해당 콘텐츠를 확인하실 수 있습니다. </p></div>')
								.next().css(bgDivProp).on('click', function(){
									$(this).fadeOut('400', function(){ $(this).remove(); });
								});
							} else {
								$(this).next('#scrollDimm').css(bgDivProp);
							}
						}
					} else {
						$(this).next('#scrollDimm').remove();
					}
				});
			}

			displayDimm();
		}

		// 공시실 영역에서 만 Zoom In Out 안내 Dimm 처리
		if(location.href.indexOf('/pn/') != -1){
			$('<div id="scrollDimm" style="position:absolute;opacity:0.7;background-color:#000;width:100%;height:100%;top:0;left:0;z-index:999"><p class="flicking3">ING생명을 이용해 주셔서 감사합니다. 손가락으로 화면을 터치 한 후 좌,우로 플리킹하여 사용하시면 해당 콘텐츠를 확인하실 수 있습니다. </p></div>').appendTo($('body')).on('click', function(){
				$(this).fadeOut('400', function(){ $(this).remove(); });
			});
		}
	}
});
