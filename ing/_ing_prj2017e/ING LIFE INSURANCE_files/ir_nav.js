$(document).ready(function(){
	// 메뉴 Element
	var $menu = $('div.inner');
	// ING로고 영역
	var $head = $('div.hGroup > h1');
	// 컨텐츠 전체 영역 (모바일 형태일 때 margin-top을 조정 하기 위함)
	var $wrap	= $('#wrap');

	// window frame 사이즈 변경시 이벤트 바인딩
	$(window).on('resize', function(){
		// 현재 width : 700px 이하이면 모바일 형태로 변경됨
		if(window.innerWidth <= 700){
			$.isTabMode = false; $.isCpMode = true;
			$menu.hide();
		}
		// 현재 width : 1050px 미만이면 태블릿 형태로 변경됨
		else if(window.innerWidth < 1050){
			$.isTabMode = true; $.isCpMode = false;
			$menu.hide(); $wrap.css({'margin-top' : '0px'});
		}
		// 이외 PC 형태로
		else {
			$.isTabMode = false; $.isCpMode = false;
			$menu.show(); $wrap.css({'margin-top' : '0px'});
		}

	})
	// 최초 1회 실행;
	.resize();

	// 모바일 형태일때 메뉴보기 버튼 이벤트 바인딩
	$('div.hGroup:first').find('button').on('click', function(){ $menu.slideToggle(); return false; });

	// 로고 클릭시 국문 페이지로 이동
	$('div.hGroup:first').find('a').on('click', function(){ location.href = '/'; return false; });

	// 메뉴 선택시 본문 스크롤 이벤트
	$('div.headerG:first').find('a').on('click', function(){
		//IR 메뉴 추가
		if($(this).hasClass('ir')){
			var t_href = $(this).attr('href');
			// console.log(t_href);
			location.href(t_href);
			return;
		}
		// 모바일 형태의 경우 margin-top이 있어서 정확한 위치확인을 위해 추가되는 값
		var addTop = ($.isTabMode || $.isCpMode ? ($head.height()*-1) : 0);
		// 모바일 형태의 경우 메뉴영역및 ING로고를 숨김
		if($.isTabMode || $.isCpMode){ $menu.hide(); if($.isCpMode){ $wrap.css({'margin-top' : addTop + 'px'}); } }
		// 메뉴 선택 효과
		$(this).parents('ul').find('li').removeClass('on').filter($(this).parent()).addClass('on');

		return false;
	})
	// 최초 1회 실행
	.filter(':first').trigger('click');


	// 탑으로 버튼 이벤트 바인딩
	$('div.topBtn > button').on('click', function(){ $scrollBody.stop().animate({scrollTop : 0}, '100'); });

	// 초기 셋팅
	(function(){
		$wrap.css({'margin-top' : '0px'});
		return false;
	}());

});
