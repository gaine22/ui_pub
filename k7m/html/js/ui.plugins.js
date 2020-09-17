
//utils module
;(function ($, win, doc, undefined) {
	
	'use strict';

	var global = "$plugins", 
		namespace = "NETIVE.plugins";

	if(!!win[global]){
		throw new Error("already exists global!> " + global);
	}
	
	//win[global] & NETIVE.utils
	win[global] = createNameSpace(namespace, {
		namespace: function(identifier, module){
			return createNameSpace(identifier, module);
		},
		
		consoleGuide: function(opt){
			return createConsoleGuide(opt);
		},
		uiCheck: function(){
			return createUiCheck();
		},
		uiResizeClass: function(){
			return createUiResizeClass();
		},
		uiEasing: function(){
			return createUiEasing();
		},
		uiProject: function(opt){
			return createUiProject(opt);
		},
		
		uiAjax: function(opt){
			return createUiAjax(opt);
		},
		uiScroll: function(opt){
			return createUiScroll(opt);
		},
		uiBackdrop: function(opt){
			return createUiBackdrop(opt);
		},
		uiEventKey: function(opt){
			return createUiEventKey(opt);
		},
		uiImgLoad: function(opt) {
			return createUiImgLoad(opt);
		},
		
		/* cookie ----------------------------------*/
		uiCookieSet: function(opt){
			return creaeteUiCookieSet(opt);
		},
		uiCookieGet: function(opt){
			return creaeteUiCookieGet(opt);
		},
		
		/* focus ----------------------------------*/
		uiFocusHold: function(opt){
			return createUiFocusHold(opt);
		},
		uiFocusSense: function(opt){
			return createUiFocusSense(opt);
		},
		
		/* tootip ----------------------------------*/
		uiTooltip: function(opt){
			return createUiTooltip(opt);
		},

		/* form ----------------------------------*/
		uiForm: function(opt){
			return createUiForm(opt);
		},
		uiFormCheck: function(opt){
			return createUiFormCheck(opt);
		},
		uiFormCheckVal: function(opt){
			return createUiFormValue(opt);
		},
		
		/* tab ----------------------------------*/
		uiTab: function(opt){
			return createUiTab(opt);
		},
		uiTabToggle: function(opt){
			return createUiTabToggle(opt);
		},
		
		/* accordion ----------------------------------*/
		uiAccordion: function(opt){
			return createUiAccordion(opt);
		},
		uiAccordionToggle: function(opt){
			return createUiAccordionToggle(opt);
		},
		
		/* file upload ----------------------------------*/
		uiFileUpload: function(opt){
			return createUiFileUpload(opt);
		},
		
		/* modal layer popup ----------------------------------*/
		uiModal: function(opt){
			return createUiModal(opt);
		},
		uiModalClose: function(opt){
			return createUiModalClose(opt);
		},

		/* window popup ----------------------------------*/
		uiPopup: function(opt) {
			return createUiPopup(opt);
		}
	});


	//base run
	//mConsole.log()//mobile console log
	win[global].uiCheck();//device & borwser check
	win[global].uiEasing();//jquery easing
	win[global].uiResizeClass();
	
	/* css easing effect
	* linear, ease, ease-in, ease-out, ease-in-out
	* easeInQuad, easeInCubic, easeInQuart, easeInQuint, easeInSine, easeInExpo, easeInBack
	* easeOutQuad, easeOutCubic, easeOutQuart, easeOutQuint, easeOutSine, easeOutExpo, easeOutCirc, easeOutBack
	* easeInOutQuad, easeInOutCubic, easeInOutQuart, easeInOutQuint, easeInOutSine, easeInOutExpo, easeInOutCirc, easeInOutBack
	*/
	win[global].cubicbeziers = {linear: '0.250, 0.250, 0.750, 0.750',ease: '0.250, 0.100, 0.250, 1.000','ease-in': '0.420, 0.000, 1.000, 1.000','ease-out': '0.000, 0.000, 0.580, 1.000','ease-in-out': '0.420, 0.000, 0.580, 1.000',easeInQuad: '0.550, 0.085, 0.680, 0.530',easeInCubic: '0.550, 0.055, 0.675, 0.190',easeInQuart: '0.895, 0.030, 0.685, 0.220',easeInQuint: '0.755, 0.050, 0.855, 0.060',easeInSine: '0.470, 0.000, 0.745, 0.715',easeInExpo: '0.950, 0.050, 0.795, 0.035',easeInCirc: '0.600, 0.040, 0.980, 0.335',easeInBack: '0.600, -0.280, 0.735, 0.045',easeOutQuad: '0.250, 0.460, 0.450, 0.940',easeOutCubic: '0.215, 0.610, 0.355, 1.000',easeOutQuart: '0.165, 0.840, 0.440, 1.000',easeOutQuint: '0.230, 1.000, 0.320, 1.000',easeOutSine: '0.390, 0.575, 0.565, 1.000',easeOutExpo: '0.190, 1.000, 0.220, 1.000',easeOutCirc: '0.075, 0.820, 0.165, 1.000',easeOutBack: '0.175, 0.885, 0.320, 1.275',easeInOutQuad: '0.455, 0.030, 0.515, 0.955',easeInOutCubic: '0.645, 0.045, 0.355, 1.000',easeInOutQuart: '0.770, 0.000, 0.175, 1.000',easeInOutQuint: '0.860, 0.000, 0.070, 1.000',easeInOutSine: '0.445, 0.050, 0.550, 0.950',easeInOutExpo: '1.000, 0.000, 0.000, 1.000',easeInOutCirc: '0.785, 0.135, 0.150, 0.860',easeInOutBack: '0.680, -0.550, 0.265, 1.550'};
	
	//requestAnimationFrame
	win.requestAFrame = (function () {
		return win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame ||
			//if all else fails, use setTimeout
			function (callback) {
				return win.setTimeout(callback, 1000 / 60); //shoot for 60 fps
			};
	})();
	//handle multiple browsers for cancelAnimationFrame()
	win.cancelAFrame = (function () {
		return win.cancelAnimationFrame || win.webkitCancelAnimationFrame || win.mozCancelAnimationFrame || win.oCancelAnimationFrame ||
			function (id) {
				win.clearTimeout(id);
			};
	})();

	function createUiCapture(opt){
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiCapture({ id:'name' });",
				"- id [String]: #을 제외한 아이디명만 입력 (!필수)",
				"- 필수 라이브러리 : canvas-toBlob.js, FileSaver.js, html2canvas.js",
				"※ 선택 영역 캡쳐하기"
			]);
			return false;
		}

		var canvas = "";

		html2canvas(document.getElementById(opt.id), { 
			onrendered : function(canvas) { 
				document.body.appendChild(canvas); 
				canvas.id ="uiCanvas"
				canvas.toBlob(function(blob){ saveAs(blob,"do.png"); }, "image/png");
				$('#uiCanvas').remove();
			}
		});
	}

	function uiComma(n) {
		var parts = n.toString().split(".");
			return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
	}

	
	//fn window popup
	function createUiPopup(opt) {
		var link = opt.link,
			name = (!opt.name) ? 'new popup' : opt.name, 
			width = (!opt.width) ? 790 : opt.width,
			height = (!opt.height) ? 620 : opt.height,
			align = (!opt.align) ? 'center' : opt.align,
			top = (opt.top === undefined) ? 0 : opt.top,
			left = (opt.left === undefined) ? 0 : opt.left,
			toolbar = (!opt.toolbar) ? 'no' : opt.toolbar,
			location = (!opt.location) ? 'no' : opt.location,
			menubar = (!opt.menubar) ? 'no' : opt.menubar,
			status = (!opt.status) ? 'no' : opt.status,
			resizable = (!opt.resizable) ? 'no' : opt.resizable,
			scrollbars = (!opt.scrollbars) ? 'yes' : opt.scrollbars,
			specs;

		if (align === 'center') {
			left = ($(win).outerWidth() / 2) - (width / 2);
			top = ($(win).outerHeight() / 2) - (height / 2);
		}

		specs = 'width=' + width + ', height='+ height + ', left=' + left + ', top=' + top;
		specs += ', toolbar=' + opt.toolbar + ', location=' + opt.location + ', resizable=' + opt.resizable + ', status=' + opt.status + ', menubar=' + opt.menubar + ', scrollbars=' + opt.scrollbars;
		
		win.open(link, name , specs);
	}

	//fn cookie set & get
	function creaeteUiCookieSet(opt){
		var cookieset = opt.name + '=' + opt.value + ';',
			expdate;
		if (opt.term) {
			expdate = new Date();
			expdate.setTime( expdate.getTime() + opt.term * 1000 * 60 * 60 * 24 ); // term 1 is a day
			cookieset += 'expires=' + expdate.toGMTString() + ';';
		}
		(opt.path) ? cookieset += 'path=' + opt.path + ';' : '';
		(opt.domain) ? cookieset += 'domain=' + opt.domain + ';' : '';
		document.cookie = cookieset;
	}
	function creaeteUiCookieGet(opt){
		var match = ( document.cookie || ' ' ).match( new RegExp(opt.name + ' *= *([^;]+)') );
		return (match) ? match[1] : null;
	}

	//fn madal popup
	function createUiModal(opt){
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiModal({ id:'name', width:500, height:500, link:'url', endfocus:'아이디명', full:true });",
				"- id [String]: #을 제외한 아이디명만 입력 (!필수)",
				"- width [Number]: 가로값 설정 (!선택)",
				"- height [Number]: 세로값 설정 (!선택)",
				"- full [Boolean]: true 이면 전체팝업 (!선택 - 기본 false)",
				"- link [String]: Ajax로 파일을 불러올 경우 url (!선택)",
				"- endfocus [String]: 아이디명. 값 설정 시 해당 위치로 포커스 이동 (!선택, -기본 document.activeElement)",
				"※ 모달 팝업"
			]);
			return false;
		}
		
		if (!opt.link) {
			($('#' + opt.id).attr('aria-hidden') === 'true') ? uiModalOpen(opt) : ''
		} else {
			//link가 있지만 아직 화면에 뿌려지지 않은 상태 확인.
			(!$('#' + opt.id).length) ? 
				win[global].uiAjax({ id:'baseLayer', url:opt.link, page:true, callback: function(){ uiModalOpen(opt) }, add:true }) : 
					uiModalOpen(opt);
		}
	}
	// 모바일버전과 풀팝업, 멀티로 뜨는 모달 추가. 2개가 동시에 뜨는 버전과 차례대로 위로 뜨는 버전.
	function uiModalOpen(opt){
		var $body = $('body'),
			$lay = $('#' + opt.id),
			$layWrap = $lay.find('.ui-modal-wrap'),
			$layTit = $lay.find('.ui-modal-tit'),
			$layCont = $lay.find('.ui-modal-cont'),
			
			endfocus = (opt.endfocus === undefined) ? document.activeElement : '#' + opt.endfocus,
			w = (opt.width === undefined) ? Math.ceil($lay.outerWidth()) : opt.width,
			h = (opt.height === undefined) ?  Math.ceil($lay.outerHeight()) : opt.height,
			titH = !!$layTit.outerHeight() ? $layTit.outerHeight() : 0,
			full = (opt.full === undefined) ? false : opt.full,
			callback = (opt.callback === undefined) ? false : opt.callback,
			ps = (opt.ps === undefined) ? 'center' : opt.ps, // top, center, bottom
			
			modalSpace = 10,
			
			winH = $(win).outerHeight(),
			winW = $(win).outerWidth(),
			overH = winH <= h,
			overW = winW <= w,
			
			timer, 
			layN;
		
		//layer popup ready
		$lay.data('opt', { endfocus:endfocus,  scrolltop:$(win).scrollTop(), ps:ps });
		$lay.data('endfocus', endfocus).data('scrolltop', $(win).scrollTop())
		.css({ 
			display : 'block',
			opacity: 0,
			top : '50%',
			left : overW || full ? modalSpace : '50%',
			width : overW || full ? winW - (modalSpace * 2)  : w,
			height : overH || full ? winH : h,
			marginLeft : overW || full ? 0 : (w / 2) * -1,
			marginTop : 0
		})
		.attr('aria-hidden',false).attr('aria-labelledby', opt.id + '-tit').attr('aria-modal', true)
		.find('h1').attr('id', opt.id + '-tit');
		
		//팝업 열리는 현재 스크롤위치값 저장 및 oveflow:hidden 속성 추가 클래스
		$body.addClass('modal-open');
		//win[global].uiCheck.mobile ? $('html').addClass('modal-open') : '';
		//win[global].uiCheck.mobile ? $body.find('.base-wrap').css('height', winH) : '';
		
		//위치설정
		switch (ps){
		case 'top': $lay.css({ top:h * -1 });
			break;
		case 'center': $lay.css({ top:'50%' });
			break;
		case 'bottom': $lay.css({ top:'auto', bottom: h * -1});
			break;
		}
		
	
		//single or multi 
		layN = $('#baseLayer .ui-modal[aria-hidden="false"]').length;
		if (layN === 1) { 
			//single
			modalBackdrop('open');
		} else { 
			//multi
			$lay.css({ 'z-index': 1001 +  layN, 'position':'fixed' });
			$('.modal-backdrop').css('z-index', 1000 +  layN);
		}

		function reLaypop(v){
			//초기화 및 세팅
			//$body.removeClass('ui-modal-full');
			$lay.css('height', 'auto');
			$layCont.css('height', 'auto');
			
			winH = $(win).outerHeight();
			winW = $(win).outerWidth();
			h = (opt.height === undefined) ? Math.ceil($lay.outerHeight())  : opt.height;
			w = (opt.width === undefined) ? Math.ceil($lay.outerWidth())  : opt.width;

			overH = winH <= h;
			overW = winW <= w;
			titH =  $layTit.outerHeight();
			overH || full ? $layCont.css({ height: winH - titH - (modalSpace * 2) + 'px' }): '';
			overH || full ? $layWrap.css('overflow', 'hidden') : '';
			
			switch (ps){
			case 'top': 
				$lay.stop().animate({ 
					opacity: 1,
					top : overH || full ? modalSpace : 20 ,
					left : overW || full ? modalSpace : '50%',
					width : overW || full ? winW - (modalSpace * 2) : w,
					height : overH || full ? winH - (modalSpace * 2) : h,
					marginTop : 0 ,
					marginLeft : overW || full ? 0 : (w / 2) * -1
				},300, 'easeOutQuart');
				break;
			case 'center':
				$lay.stop().animate({ 
					opacity: 1,
					top : overH || full ? modalSpace : '50%',
					left : overW || full ? modalSpace : '50%',
					width : overW || full ? winW - (modalSpace * 2) : w,
					height : overH || full ? winH - (modalSpace * 2) : h,
					marginTop : overH || full ? 0 : (h / 2) * -1,
					marginLeft : overW || full ? 0 : (w / 2) * -1
				},200, 'easeOutQuart');
				break;
			case 'bottom':
				$lay.stop().animate({ 
					opacity: 1,
					bottom : overH || full ? modalSpace : 20 ,
					left : overW || full ? modalSpace : '50%',
					width : overW || full ? winW - (modalSpace * 2) : w,
					height : overH || full ? winH - (modalSpace * 2) : h,
					marginTop : 0 ,
					marginLeft : overW || full ? 0 : (w / 2) * -1
				},300, 'easeOutQuart');
				break;
			}

			v ? !!callback ? callback() : '' : '';
		}
		
		clearTimeout(timer);
		timer = setTimeout(function(){
			reLaypop(true); //크기 재설정.
			win[global].uiFocusHold({ selector:'#'+opt.id });
		},0);
		
		$(win).resize(function(){
			reLaypop(); //크기 재설정.
		});

		//esc key close
		$(doc).off('keyup.uilayerpop').on('keyup.uilayerpop', function(e){
			e.preventDefault();
			var keyCode = e.keyCode || e.which;
			if(keyCode == 27) {
				win[global].uiModalClose({ id:opt.id });
			}
		});
		
		$lay.find('.ui-modal-close').off('click.uilayerpop').on('click.uilayerpop', function(e){
			e.preventDefault();
			win[global].uiModalClose({ id:opt.id });
		});
	}
	function createUiModalClose(opt){
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiModalClose({ id:'name', endfocus:'id', remove:false });",
				"- id [String]: #을 제외한 아이디명만 입력 (!필수)",
				"- remove [Boolean]: true 이면 코드삭제. (!선택 - 기본 false)",
				"- endfocus [String]: 아이디명. 값 설정 시 해당 위치로 포커스 이동 (!선택)",
				"※ 모달 팝업 닫기"
			]);
			return false;
		}

		var $body = $('body'),
			$lay = $('#' + opt.id),
			$layshow = $('#baseLayer .ui-modal[aria-hidden="false"]'),
			layN = $layshow.length,
			layOpt = $lay.data('opt'),
			endfocus = (opt.endfocus === undefined) ? layOpt.endfocus : '#' + opt.endfocus,
			layRemove = (opt.remove === undefined) ? false : opt.remove,
			callback = (opt.callback === undefined) ? false : opt.callback,
			sct = layOpt.scrolltop,
			wst = $(win).scrollTop(),
			h = Math.ceil($lay.outerHeight()),
			winH = $(win).outerHeight(),
			fst;

			opt.endfocus !== undefined ? sct = $(endfocus).offset().top : '';

		if (layN < 2 ) {
			//single	
			switch (layOpt.ps){
			case 'top': 
				$lay.attr('aria-hidden', true).stop().animate({
					opacity: 0,
					top : h * -1 
				},300, 'easeOutQuart', closed);
				break;
			case 'center':
				$lay.attr('aria-hidden', true).stop().animate({
					opacity: 0,
					marginTop: 0
				},200, 'easeOutQuart', closed);
				break;
			case 'bottom':
				$lay.attr('aria-hidden', true).stop().animate({
					opacity: 0,
					bottom: h * -1
				},300, 'easeOutQuart', closed);
				break;
			}
			modalBackdrop('close');
		} else {
			//multi
			$lay.attr('aria-hidden', true).stop().animate({
				opacity: 0
			},200, function(){
				$lay.removeAttr('style').removeClass('scrollpop');
				$layshow.eq(layN - 1).focus();
				callback ? callback({ id:opt.id }) : '';
			});
			$('.modal-backdrop').css('z-index', 100 - layN);
		}
		function closed(){
			(layRemove === true) ? $lay.remove() : $lay.removeAttr('style');
			(!$(endfocus).length) ? endfocus = 'body' : '';

			$body.removeClass('modal-open');
			$(doc).off('keyup.uilayerpop'); //esc키 이벤트 취소
			//모바일에서 포커스를 주기 위해서는 endfocus 에 직접 아이디를 넣어줘야지 실행됨.
			if ((wst < sct && wst + winH > sct)) {
				$(endfocus).attr('tabindex', 0).focus();
			} else {
				$('html, body').stop().animate({
					 scrollTop : sct
				}, 200, function(){
					 $(endfocus).attr('tabindex', 0).focus();
				});
				callback ? callback({ id:opt.id }) : '';
			}
		}
	}
	function modalBackdrop(value){
		var $body = $('body'),
			$baseLayer = $('#baseLayer'),
			$backdrop, 
			timer;
		
		if (value === 'open' && !$baseLayer.data('bgmodal')) {
			$baseLayer.data('bgmodal', true);
			$baseLayer.append('<div class="modal-backdrop"></div>');
			$backdrop = $('.modal-backdrop');
			$backdrop.css('display','block');
			
			clearTimeout(timer);
			timer = setTimeout(function(){
				$backdrop.stop().animate({
					opacity: 1,
					width: '101%',
					height: '101%'
				}, 200);
			},0);
		} else {
			$baseLayer.data('bgmodal', false);
			$('.modal-backdrop').stop().animate({
				//width: '100%',
				opacity: 0
			},200, function(){
				$(this).remove();
			});
		}
	
	}
	
	//fn file upload
	function createUiFileUpload(opt){
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiFileUpload({ id:'name', multi:false, accept:'image/*' });",
				"- id [String]: #을 제외한 아이디명만 입력 (!필수)",
				"- multi [Boolean]: true 일 경우 다중업로드 (!선택, -기본 false)",
				"- accept [String]: 업로드 파일 종류 선택 (!선택 - 기본 '')",
				"※ 파일업로드"
			]);
			return false;
		}
		
		var base = {};

		base.id = $('#' + opt.id);
		base.multi = opt.multi === undefined ? false : opt.multi;
		base.accept = opt.accept === undefined ? '' : 'accept="' + opt.accept + '"' ;
		base.n = 0;
		base.txthtml = '<input type="text" class="ui-file-txt inp-base" readonly="readonly" title="첨부파일명">';
		base.delhtml = '<button type="button" class="ui-file-del btn-del">첨부파일 삭제</button>';
		base.filehtml = '<input type="file" value="" ' + base.accept + '" class="ui-file-inp" aria-hidden="true" tabindex="-1" title="첨부파일 불러오기">';
		base.id.data('files', opt.multi);
		base.wraphtml = '<div class="ui-file-wrap"></div>';
		base.btn = base.id.find('.ui-file-btn');
		base.id.append(base.wraphtml);
		base.wrap = base.id.find('.ui-file-wrap');
		base.wrap.append(base.filehtml);
		base.file = base.wrap.find('.ui-file-inp');
		base.timer;
		
		//event
		$(doc).off('change.'+ opt.id).on('change.' + opt.id, '#' + opt.id + ' .ui-file-inp', function(){
			fileChange(base);
		});
		$(doc).off('click.'+ opt.id).on('click.'+ opt.id, '.ui-file-del', function(){
			fileDel(this);
		});
		base.btn.off('click.'+ opt.id).on('click.'+ opt.id, function(){
			upload(base);
		}); 
		
		//fn
		function upload(base){
			if (!base.multi) {
				base.file.trigger('click');
			} else {
				base.wrap = base.id.find('.ui-file-wrap').eq(-1);
				base.file = base.wrap.find('.ui-file-inp');
				base.file.trigger('click');
			}
		}
		function fileDel(v){
			var $del = $(v),
				$file = $del.closest('.ui-file'),
				len = $file.find('.ui-file-wrap').length,
				idx = $del.closest('.ui-file-wrap').index() - 1,
				$txt = $file.find('.ui-file-txt'),
				$wrap = $del.closest('.ui-file-wrap');
	
			if (!$file.data('files')) {
				if($wrap.length > 0) {
					$wrap.find('.ui-file-inp').val('');
					$txt.remove();
					$del.remove();
				} 
				$file.data('single', false);
			} else {
				(len > 1) ? $file.find('.ui-file-wrap').eq(idx).remove() : '';
			}
		}
		function fileChange(base){
			base.v = base.file.val();
			base.v =  base.v.split("\\");
			base.n =  base.v.length;
			base.n = ( base.n === 0) ? 0 :  base.n - 1; 

			(!base.multi && !base.id.data('single')) ? act('single') : '';
			if (!!base.multi){
				(!base.id.data('multi')) ? act('multi') : act('add');
				
				clearTimeout(base.timer);
				base.timer = setTimeout(function(){
					base.wraphtml = '<div class="ui-file-wrap"></div>';
					base.id.append(base.wraphtml);
					base.wrap = base.id.find('.ui-file-wrap').eq(-1);
					base.wrap.append(base.filehtml);
					base.file = base.wrap.find('.ui-file-inp');
				},35);
			} 
			if (!!base.v && !base.file.val()) {
				base.txt.remove();
				base.del.remove();
				base.id.data('single', false);
			} 
			function act(v){
				v === 'single' ? base.id.data('single', true) : '';
				v === 'multi' ? base.id.data('multi', true) : '';
				v === 'add' ? base.wrap = base.id.find('.ui-file-wrap').eq(-1) : '';
				base.wrap.append(base.txthtml);
				base.wrap.append(base.delhtml);
				base.txt = base.wrap.find('.ui-file-txt');
				base.del = base.wrap.find('.ui-file-del');
			}
			base.txt.val(base.v[base.n]);
		}
	}
	
	//fn accordion
	function createUiAccordion(opt){
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiAccordion({ id:'name', current:[0,1], autoclose:true, callback:function(v){...} });",
				"- id [String]: #을 제외한 아이디명만 입력 (!필수)",
				"- current [Array]: [0,1,2] 복수선택 가능, null 인 경우 무선택 (!선택, 기본 null)",
				"- autoclose [Boolean]: true 일 경우 선택된 아이템 외는 닫힘 (!선택, -기본 true)",
				"- callback [Function]: 콜백함수 실행 (!선택)",
				"※ 아코디언 탭"
			]);
			return false;
		}
		
		var id = opt.id,
			current = opt.current === undefined ? null : opt.current,
			callback = opt.callback === undefined ? false : opt.callback,
			autoclose = opt.autoclose === undefined ? false : opt.autoclose,
			$acco = $('#' + id),
			$wrap = $acco.children('.ui-acco-wrap'),
			$pnl = $wrap.children('.ui-acco-pnl'),
			$tit = $wrap.children('.ui-acco-tit'),
			$btn = $tit.find('.ui-acco-btn'),
			len = $wrap.length, 
			i, optAcco;
		
		if(!$pnl){
			$pnl = $tit.children('.ui-acco-pnl');
		}

		$acco.attr('role','tablist').data('opt', {id: id, close: autoclose, callback: callback});
		$tit.attr('role','tab');
		$pnl.attr('role','tabpanel');
		for (i = 0; i < len; i++) {
			var $accobtn = $wrap.eq(i).find('> .ui-acco-tit > .ui-acco-btn'),
				$accotit = $wrap.eq(i).find('> .ui-acco-tit'),
				$accopln = $wrap.eq(i).find('> .ui-acco-pnl');
			
			if(!$accopln){
				$accopln = $accotit.children('.ui-acco-pnl');
			}

			$accotit.attr('id') === undefined ? $accobtn.attr('id', id + '-btn-' + i) : '';
			$accopln.attr('id') === undefined ? $accopln.attr('id', id + '-pnl-' + i) : '';
			$accobtn
				.data('selected', false)
				.attr('data-n', i)
				.attr('aria-expanded', false)
				.attr('aria-controls', $accopln.attr('id'))
				.removeClass('selected')
				.find('span').text('열기');
			$accopln
				.attr('data-n', i)
				.attr('aria-labelledby', $accobtn.attr('id'))
				.attr('aria-hidden', true).hide();
		}
		
		current !== null ? win[global].uiAccordionToggle({ id: id, current: current, motion:false }) : '';
		
		
		$btn.off('click.uiacco').on('click.uiacco', function(e){
			e.preventDefault();
			optAcco = $(this).closest('.ui-acco').data('opt');
			win[global].uiAccordionToggle({ id: optAcco.id, current: [$(this).closest('.ui-acco-wrap').index()], close: optAcco.close, callback: callback, motion:true });
		});
	}
	function createUiAccordionToggle(opt){
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiAccordionToggle({ id:'name', current:[0,1], motion:false, state:'open', callback:function(v){...} });",
				"- id [String]: #을 제외한 아이디명만 입력 (!필수)",
				"- current [Array]: [0,1,2] 복수선택 가능, null 인 경우 무선택 (!선택, 기본 0)",
				"- state [String]: 'toggle'일 토글, 'open' 열림 , 'close' 닫힘 .(!선택- 기본 toggle)",
				"- motion [Boolean]: true 일 경우 animate효과, false 일 경우 모션없음 (!선택, -기본 true)",
				"- callback [Function]: 콜백함수 실행 (!선택)",
				"※ 아코디언 탭"
			]);
			return false;
		}
		
		var id = opt.id,
			$acco = $('#' + id),
			dataOpt = $acco.data('opt'),
			current = opt.current === undefined ? null : opt.current,
			callback = opt.callback === undefined ? dataOpt.callback : opt.callback,
			state = opt.state === undefined ? 'toggle' : opt.state,
			motion = opt.motion === undefined ? true : opt.motion,
			autoclose = dataOpt.close,
			allshow = opt.allshow,
			allhide = opt.allhide,
			open = null,
			$wrap = $acco.children('.ui-acco-wrap'),
			$pnl = $wrap.eq(current).children('.ui-acco-pnl'),
			$tit = $wrap.eq(current).children('.ui-acco-tit'),
			$btn = $tit.find('.ui-acco-btn'),
			len = $wrap.length,
			speed = 200;
		
		(motion === false) ? speed = 0 : speed = 200;

		if (current !== 'all') {
			for (var i = 0 ; i < current.length; i++) {
				$pnl = $wrap.eq(current[i]).children('.ui-acco-pnl');
				$tit = $wrap.eq(current[i]).children('.ui-acco-tit');
				$btn = $tit.find('.ui-acco-btn');
				
				if (state === 'toggle') {
					(!$btn.data('selected')) ? act('down') : act('up');
				} else {
					(state === 'open') ? act('down') : (state === 'close') ? act('up') : '';
				}

			}
		} else if (current === 'all') {
			checking();
		}
		
		//전체 열고 닫기 
		function checking(){
			//열린상태 체크하여 전체 열지 닫을지 결정
			var c = 0;
			$wrap.each(function(i){
				c = ($wrap.eq(i).find('> .ui-acco-tit .ui-acco-btn').attr('aria-expanded') === 'true') ? c + 1 : c + 0;
			});
			
			//state option 
			if (state === 'open') {
				c = 0;
				$acco.data('allopen', false);
			} else if (state === 'close') {
				c = len;
				$acco.data('allopen', true);
			}
			
			//all check action
			if (c === 0 || !$acco.data('allopen')) {
				$acco.data('allopen', true);
				act('down');
			} else if (c === len || !!$acco.data('allopen')) {
				$acco.data('allopen', false);
				act('up');
			}
		}
		//모션
		function act(v) {
			var a = (v === 'down') ? true : false, 
				cls = (v === 'down') ? 'addClass' : 'removeClass', 
				updown = (v === 'down') ? 'slideDown' : 'slideUp',
				txt = (v === 'down') ? '닫기' : '열기',
				c = '';
			
			open = (v === 'down') ? true : false;

			if (autoclose === true && v === 'down') {
				$wrap.each(function(i){
					$wrap.eq(i).find('> .ui-acco-tit .ui-acco-btn').data('selected', false).removeClass('selected').attr('aria-expanded', false).find('.ui-acco-txt').text('열기');
					$wrap.eq(i).find('> .ui-acco-pnl').attr('aria-hidden',true).stop().slideUp(speed);
				});
			}
			if (current === 'all') {
				$wrap.each(function(i){
					$wrap.eq(i).find('> .ui-acco-tit .ui-acco-btn').data('selected', a)[cls]('selected').attr('aria-expanded', a).find('.ui-acco-txt').text(txt);
					$wrap.eq(i).find('> .ui-acco-pnl').attr('aria-hidden', !a).stop()[updown](speed, function(){
						$(this).css({ height:'', padding:'', margin:'' }); // 초기화
					});
				});
			} else {
				$btn.data('selected', a).attr('aria-expanded', a)[cls]('selected').find('.ui-acco-txt').text(txt);
				$pnl.attr('aria-hidden', !a).stop()[updown](speed, function(){
					$(this).css({ height:'', padding:'', margin:'' }); // 초기화
				});
			}

			!!callback ? callback({ id: id, open: open, current:current}): '';
		}
	}
	
	//fn event key
	function createUiEventKey(opt){
		var keyCode  = opt.e.keyCode || opt.e.which, 
			keyCurrent = opt.index, 
			$selectors = opt.scope,
			len = opt.len || $selectors.length;
	
		if (keyCode == 39 || keyCode == 40) {
			keyCurrent = keyCurrent + 1;
			len <= keyCurrent ? keyCurrent = 0 : '';
			($selectors.eq(keyCurrent).attr('aria-hidden') === 'true') ? keyAct('next') : '';
			$selectors.eq(keyCurrent).focus();
		}
	
		if (keyCode == 37 || keyCode == 38) {
			keyCurrent = keyCurrent - 1;
			0 > keyCurrent ? keyCurrent = len - 1 : '';
			($selectors.eq(keyCurrent).attr('aria-hidden') === 'true') ? keyAct('prev') : '';
			$selectors.eq(keyCurrent).focus();
		}
		
		(keyCode == 32) ? $selectors.eq(keyCurrent).trigger('click') : '';
		(keyCode == 35) ? $selectors.eq(len-1).focus() : ''; //end
		(keyCode == 36) ? $selectors.eq(0).focus() : ''; //home
		
		function keyAct(v) {
			(keyCurrent >= len - 1 && v === 'next') ? 0 : keyCurrent + 1;
			(keyCurrent < 0 && v === 'prev') ? len - 1: keyCurrent - 1;
		   
			if ($selectors.eq(keyCurrent).attr('aria-hidden') === 'true') {
			   (keyCurrent >= len - 1 && v === 'next') ? keyCurrent = 0 : '';
			   (keyCurrent < 0 && v === 'prev') ? keyCurrent = len - 1 : '';
			   keyAct(v);
			}
		}
	}
	
	//fn tab
	function createUiTab(opt){
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiTab({ id:'name', current:0, unres:false, label:'tabname', callback:function(v){...} });",
				"- id [String]: #을 제외한 아이디명만 입력, 값이 없을 경우는 기본값 (!선택- 기본 input[type='checkbox'], input[type='radio'])",
				"- current [Number]: 처음 열린패널 선택 (!선택, 기본 0)",
				"- unres [Boolean]: true 일 경우 변경무 (!선택, -기본 false)",
				"- label [String]: aria-label 명 (!선택)",
				"- callback [Function]: 콜백함수 실행 (!선택)",
				"※ 탭"
			]);
			return false;
		}
		
		var id = opt.id,
			current = isNaN(opt.current) ? 0 : opt.current,
			unres = (opt.unres === undefined) ? false : opt.unres,
			callback = (opt.callback === undefined) ? false : opt.callback,
			tabLabel = (opt.label === undefined) ? false : opt.label,
			tabId = '#' + id,
			
			$tab = $(tabId),
			$btns = $tab.children('.ui-tab-btns'),
			$btn = $btns.find('.ui-tab-btn'),
			$pnls = $tab.children('.ui-tab-pnls'),
			$pnl = $pnls.children('.ui-tab-pnl'),
			len = $btn.length, 
			i, attrs, keyCode, keyCurrent, len;
		
		//set up
		$tab.data('callback', callback).data('unres', unres);
		tabLabel ? $btns.attr('aria-label', opt.label) : '';
		$btns.attr('role','tablist');
		$btn.attr('role','tab');
		$pnl.attr('role','tabpanel');
		
		for (i = 0; i < len; i++) {
			attrs = (current === i) ? 'removeAttr' : 'attr';
			
			$btn.eq(i).attr('id') === undefined ? $btn.eq(i).attr('id', id + 'Btn' + i) : '';
			$pnl.eq(i).attr('id') === undefined ? $pnl.eq(i).attr('id', id + 'Pnl' + i) : '';
			
			if (unres === false) {
				$btn.eq(i).attr('aria-controls', $pnl.eq(i).attr('id'));
				$pnl.eq(i).attr('aria-labelledby', $btn.eq(i).attr('id')).attr('aria-hidden', (current === i) ? false : true)[attrs]('tabindex', -1);
			} else {
				$pnl.attr('aria-hidden', false).removeAttr('tabindex');
			}
			
			$btn.eq(i).attr('aria-selected', (current === i) ? true : false);
		}
		
		//event
		$btn
		.off('click.uitab').on('click.uitab', function(){
			win[global].uiTabToggle({ id:id, current:$(this).index() });
		})
		.off('keyup.uitab').on('keyup.uitab', function(e){
			var $this = $(this);
			
			e.preventDefault();
			win[global].uiEventKey({ selector:$this, index:$this.index(), e:event, scope:$this.closest('.ui-tab-btns').find('.ui-tab-btn') });
		});
	}
	function createUiTabToggle(opt){
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiTabToggle({ id:'name', current:0, callback:function(v){...} });",
				"- id [String]: #을 제외한 아이디명만 입력, 값이 없을 경우는 기본값 (!선택- 기본 input[type='checkbox'], input[type='radio'])",
				"- current [Number]: 처음 열린패널 선택 (!선택, 기본 0)",
				"- callback [Function]: 콜백함수 실행 (!선택)",
				"※ 탭 토글 설정"
			]);
			return false;
		}
		
		var id = opt.id,
			$tab = $('#' + id),
			$btns = $tab.children('.ui-tab-btns'),
			$btn = $btns.find('.ui-tab-btn'),
			$pnls = $tab.children('.ui-tab-pnls'),
			$pnl = $pnls.children('.ui-tab-pnl'),
			current = isNaN(opt.current) ? 0 : opt.current,
			unres = (opt.unres === undefined) ? $tab.data('unres') : opt.unres,
			callback = opt.callback === undefined ? $tab.data('callback') : opt.callback;
	
		$btn.attr('aria-selected', false).eq(current).attr('aria-selected', true).focus();
		
		if ($tab.data('unres') === false) {
			$pnl.attr('aria-hidden', true).attr('tabindex', '-1').eq(current).attr('aria-hidden', false).removeAttr('tabindex');
		}
		(!!callback) ? callback(opt): '';
	}
	
	//fn form
	function createUiForm(opt){
		//특정 아이디가 없다면 모든 checkbox, radio 를 대상
		var selector = (opt === undefined) ? 
				'input[type="checkbox"], input[type="radio"]' : 
				(opt.id === undefined) ? 'input[type="checkbox"], input[type="radio"]' : '#' + opt.id, 
			callback, allcheck, data_call, data_all,
			$inp = $(selector);

		$inp.each(function(i){
			data_call = $inp.eq(i).data('callback');
			data_all = $inp.eq(i).data('allcheck');
			($inp.eq(i).data('callback')) ? callback = (opt === undefined) ? 
				data_call : (opt.callback === undefined) ? data_call : opt.callback :
				callback = (opt === undefined) ? null : (opt.callback === undefined) ? null : opt.callback;

			($inp.eq(i).data('allcheck')) ?
				allcheck = (opt === undefined) ? data_all : (opt.callback === undefined) ? data_all : opt.callback :
				allcheck = (opt === undefined) ? null : (opt.all === undefined) ? false : opt.all;

			$inp.eq(i).data('callback', callback).data('allcheck', allcheck);
			($inp.eq(i).attr('type') === 'checkbox') ? uiFormCheckAct({ id: $inp.eq(i).attr('id') }) : uiFormApp({ id: $inp.eq(i).attr('id') });
		});
		
		$inp.off('click.uiform').on('click.uiform', function(){
			var $this = $(this);

			($this.attr('type') === 'checkbox') ? uiFormCheckAct({ id: $this.attr('id') }) : uiFormApp({ id: $this.attr('id') });
			$('label[for="'+ $this.attr('id') +'"]').focus();
		}).off('focus.uifrom').on('focus.uifrom', function(){
			$('label[for="'+ $(this).attr('id') +'"]').addClass('activated');
		}).off('blur.uifrom').on('blur.uifrom', function(){
			$('label[for="'+ $(this).attr('id') +'"]').removeClass('activated');
		});
	}
	function createUiFormCheck(opt){
		if (opt === undefined) {
			return false;
		}

		(opt.callback === undefined) ? '' : $('#'+ opt.id).data('callback', opt.callback);
		if (opt.checked === undefined) {
			$('#'+ opt.id).prop('checked') === false ? $('#'+ opt.id).prop('checked', true) : $('#'+ opt.id).prop('checked', false);
		} else {
			$('#'+ opt.id).prop('checked', opt.checked);
		}
		uiFormCheckAct({ id: opt.id });
	}
	function createUiFormValue(opt){
		var data_val = [];
		$('input').each(function(){
			$(this).prop('checked') === true ? data_val.push($(this).attr('id')) : '';
		});
		opt.callback({ v:data_val });
		
	}
	function uiFormCheckAct(opt){
		var $inp = $('#'+ opt.id),
			inpName = $inp.attr('type') === 'checkbox' ? $inp.attr('class') : $inp.attr('name'),
			$inps = $inp.attr('type') === 'checkbox' ? $('input.' + inpName) : $('input[name="' + inpName + '"]'),
			$all = $('#'+ inpName),
			i = 0, 
			n = 0, 
			m = 0, 
			len = $inps.length;

		uiFormApp({ id: opt.id });
		
		if (inpName !== undefined) {
			for (i = 0; i < len; i++) {
				n = ($inps.eq(i).prop('checked')) ?  1 : 0;
				m = m + n;
			}
			
			(m === len) ? act(true) : (m === len - 1 && $all.data('checked') === true) ? act(false) : '';
		}
		function act(v){
			$all.data('checked', v ? true : false);
			$all.prop('checked') === false ? $all.prop('checked', true) : $all.prop('checked', false);
			uiFormApp({ id: inpName, act: v ? false : true });
		}
	}
	function uiFormApp(opt){
		var id = opt.id,
			$inp = $('#'+ id),
			$label = $('label[for="'+ id +'"]'),
			allcheck = $inp.data('callback'),
			callback = $inp.data('callback'),
			act = opt.act === undefined ? false : opt.act,
			$allItemNot,
			dataChecked,
			checkClass;

		//전체체크 
		if (!!allcheck === true){
			//전체체크에 포함되어 있으면서 disabled가 아닌 input
			$allItemNot = $('input.' + id + ':not(:disabled)');
			
			//전체체크
			if ($inp.prop('checked') === true) {
				dataChecked = true;
				$allItemNot.prop('checked', true).each(function(i){
					callback = $allItemNot.eq(i).data('callback');
					$('label[for=' + $allItemNot.eq(i).attr('id') + ']:not(.disabled)').addClass('checked');
					!!callback ? callback({ id: $allItemNot.eq(i).attr('id'), value: dataChecked }) : '';
				});
			}
			//전체미체크
			else if($inp.prop('checked') === false) {
				dataChecked = false;
				if (act === false) {
					$allItemNot.prop('checked', false).each(function(i){
						callback = $allItemNot.eq(i).data('callback');
						$('label[for=' + $allItemNot.eq(i).attr('id') + ']:not(.disabled)').removeClass('checked');
						!!callback ? callback({ id:$allItemNot.eq(i).attr('id'), value: dataChecked }) : '';
					});
				}
			}
		}
		//개별체크
		else {
			if ($inp.prop('checked') === true) {
				if ($inp.attr('type') === 'radio') {
					$('input[name="' + $inp.attr('name') + '"]').each(function(){
						$('label[for="'+ $(this).attr('id') +'"]').removeClass('checked');
					});
				}
				dataChecked = true;
			} 
			else if ($inp.prop('checked') === false) {
				dataChecked = false;
			}
		}
		checkClass = (dataChecked === true) ? 'addClass' : 'removeClass';
		
		$inp.prop('disabled') === true ? $label.addClass('disabled') : $label.removeClass('disabled');
		$inp.data('checked', dataChecked);
		$label[checkClass]('checked');
		!!callback ? callback({ id: opt.id, value: dataChecked }) : '';
	}
	
	//fn easing
	function createUiEasing(){
		var easings = {
			linear : function(t,b,c,d){return c*t/d+b;},
			easeInQuad : function(t,b,c,d){return c*(t/=d)*t+b;},
			easeOutQuad : function(t,b,c,d){return -c*(t/=d)*(t-2)+b;},
			easeInOutQuad : function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return -c/2*((--t)*(t-2)-1)+b;},
			easeOutInQuad : function(t,b,c,d){if(t < d/2)return easings.easeOutQuad(t*2,b,c/2,d);return easings.easeInQuad((t*2)-d,b+c/2,c/2,d);},
			easeInCubic : function(t,b,c,d){return c*(t/=d)*t*t+b;},
			easeOutCubic : function(t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},
			easeInOutCubic : function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},
			easeOutInCubic : function(t,b,c,d){if(t<d/2)return easings.easeOutCubic(t*2,b,c/2,d);return easings.easeInCubic((t*2)-d,b+c/2,c/2,d);},
			easeInQuart : function(t,b,c,d){return c*(t/=d)*t*t*t+b;},
			easeOutQuart : function(t,b,c,d){return -c*((t=t/d-1)*t*t*t-1)+b;},
			easeInOutQuart : function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return -c/2*((t-=2)*t*t*t-2)+b;},
			easeOutInQuart : function(t,b,c,d){if(t<d/2)return easings.easeOutQuart(t*2,b,c/2,d);return easings.easeInQuart((t*2)-d,b+c/2,c/2,d);},
			easeInQuint : function(t,b,c,d){return c*(t/=d)*t*t*t*t+b;},
			easeOutQuint : function(t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},
			easeInOutQuint : function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},
			easeOutInQuint : function(t,b,c,d){if(t<d/2)return easings.easeOutQuint(t*2,b,c/2,d);return easings.easeInQuint((t*2)-d,b+c/2,c/2,d);},
			easeInSine : function(t,b,c,d){return -c*Math.cos(t/d*(Math.PI/2))+c+b;},
			easeOutSine : function(t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},
			easeInOutSine : function(t,b,c,d){return -c/2*(Math.cos(Math.PI*t/d)-1)+b;},
			easeOutInSine : function(t,b,c,d){if(t<d/2)return easings.easeOutSine(t*2,b,c/2,d);return easings.easeInSine((t*2)-d,b+c/2,c/2,d);},
			easeInExpo : function(t,b,c,d){return (t==0)? b : c*Math.pow(2,10*(t/d-1))+b-c*0.001;},
			easeOutExpo : function(t,b,c,d){return (t==d)? b+c : c*1.001*(-Math.pow(2,-10*t/d)+1)+b;},
			easeInOutExpo : function(t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b-c*0.0005;return c/2*1.0005*(-Math.pow(2,-10*--t)+2)+b;},
			easeOutInExpo : function(t,b,c,d){if(t<d/2)return easings.easeOutExpo(t*2,b,c/2,d);return easings.easeInExpo((t*2)-d,b+c/2,c/2,d);},
			easeInCirc : function(t,b,c,d){return -c*(Math.sqrt(1-(t/=d)*t)-1)+b;},
			easeOutCirc : function(t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},
			easeInOutCirc : function(t,b,c,d){if((t/=d/2)<1)return -c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},
			easeOutInCirc : function(t,b,c,d){if (t<d/2)return easings.easeOutCirc(t*2,b,c/2,d);return easings.easeInCirc((t*2)-d,b+c/2,c/2,d);},		
			easeInElastic : function(t,b,c,d,a,p){if(!t)return b;if((t/=d)==1)return b+c;var s,p=(!p||typeof(p)!='number')? d*.3 : p,a=(!a||typeof(a)!='number')? 0 : a;if(!a||a<Math.abs(c)){a=c;s=p/4;}else s=p/(2*Math.PI)*Math.asin(c/a);return -(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},
			easeOutElastic : function(t,b,c,d,a,p){if(!t)return b;if((t/=d)==1)return b+c;var s,p=(!p||typeof(p)!='number')? d*.3 : p,a=(!a||typeof(a)!='number')? 0 : a;if(!a||a<Math.abs(c)){a=c;s=p/4;}else s=p/(2*Math.PI)*Math.asin(c/a);return (a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b);},
			easeInOutElastic : function(t,b,c,d,a,p){if(t==0)return b;if((t/=d/2)==2)return b+c;var s,p=d*(.3*1.5),a=0;var s,p=(!p||typeof(p)!='number')? d*(.3*1.5) : p,a=(!a||typeof(a)!='number')? 0 : a;if(!a||a<Math.abs(c)){a=c;s=p/4;}else s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return -.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},
			easeOutInElastic : function(t,b,c,d,a,p){if (t<d/2)return easings.easeOutElastic(t*2,b,c/2,d,a,p);return easings.easeInElastic((t*2)-d,b+c/2,c/2,d,a,p);},
			easeInBack : function(t,b,c,d,s){var s=(!s||typeof(s)!='number')? 1.70158 : s;return c*(t/=d)*t*((s+1)*t-s)+b;},
			easeOutBack : function(t,b,c,d,s){var s=(!s||typeof(s)!='number')? 1.70158 : s;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},
			easeInOutBack : function(t,b,c,d,s){var s=(!s||typeof(s)!='number')? 1.70158 : s;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},
			easeOutInBack : function(t,b,c,d,s){if(t<d/2)return easings.easeOutBack(t*2,b,c/2,d,s);return easings.easeInBack((t*2)-d,b+c/2,c/2,d,s);},			
			easeInBounce : function(t,b,c,d){return c-easings.easeOutBounce(d-t,0,c,d)+b;},
			easeOutBounce : function(t,b,c,d){if((t/=d)<(1/2.75))return c*(7.5625*t*t)+b;else if(t<(2/2.75))return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;else if(t<(2.5/2.75))return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;else return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;},
			easeInOutBounce : function(t,b,c,d){if(t<d/2)return easings.easeInBounce(t*2,0,c,d)*.5+b;else return easings.easeOutBounce(t*2-d,0,c,d)*.5+c*.5+b;},
			easeOutInBounce : function(t,b,c,d){if(t<d/2)return easings.easeOutBounce(t*2,b,c/2,d);return easings.easeInBounce((t*2)-d,b+c/2,c/2,d);}
		},
		easing;
		
		for (easing in easings) {
			jQuery.easing[easing] = (function(easingname) {
				return function(x, t, b, c, d) {
					return easings[easingname](t, b, c, d);
				}
			})(easing);
		}
	}
	
	//fn device check
	function createUiCheck(){
		var ua = navigator.userAgent,
			ie = ua.match(/(?:msie ([0-9]+)|rv:([0-9\.]+)\) like gecko)/i), 
			deviceInfo = ['android', 'iphone', 'ipod', 'ipad', 'blackberry', 'windows ce', 'samsung', 'lg', 'mot', 'sonyericsson', 'nokia', 'opeara mini', 'opera mobi', 'webos', 'iemobile', 'kfapwi', 'rim', 'bb10'],
			filter = "win16|win32|win64|mac|macintel",
			uAgent = ua.toLowerCase(),
			deviceInfoAmount = deviceInfo.length,
			browser = $.borwser,
			support = $.support,
			device = $.device,
			j = 0,
			version, 
			i;

		if (!browser) {
			$.browser = browser = {};
		}
		
		for (j = 0; j < deviceInfoAmount; j++) {
			//console.log(uAgent, deviceInfo[j], uAgent.match(deviceInfo[j]));
			if (uAgent.match(deviceInfo[j]) != null){
				device = deviceInfo[j];
				break;
			}
		}
		
		browser.local = !(/^http:\/\//).test(location.href);
		browser.firefox = (/firefox/i).test(ua);
		browser.webkit = (/applewebkit/i).test(ua);
		browser.chrome = (/chrome/i).test(ua);
		browser.opera = (/opera/i).test(ua);
		browser.ios = (/ip(ad|hone|od)/i).test(ua);
		browser.android = (/android/i).test(ua);
		browser.safari = browser.webkit && !browser.chrome;
	
		//touch, mobile 환경 구분
		support.touch = browser.ios || browser.android || (doc.ontouchstart !== undefined && doc.ontouchstart !== null);
		browser.mobile = support.touch && ( browser.ios || browser.android);
		//(navigator.platform) ? (filter.indexOf(navigator.platform.toLowerCase()) < 0) ? browser.mobile = true : browser.mobile = false : '';
		
		//mobile, pc, app 구분
		if(browser.mobile){
			if(browser.ios){
				browser.device = ua.indexOf('appname') > -1 ? "IA" : "IW";
				win[global].uiCheck.ios = true;
				win[global].uiCheck.android = false;
			}else if(browser.android){
				browser.device = ua.indexOf('appname') > -1 ? "AA" : "AW";
				win[global].uiCheck.android = true;
				win[global].uiCheck.ios = false;
			}
			win[global].uiCheck.mobile = true;
			win[global].uiCheck.desktop = false;
		}else{
			win[global].uiCheck.mobile = false;
			win[global].uiCheck.desktop = true;
		}
		
		//false 삭제
		for (i in browser) {
			if (!browser[i]) {
				delete browser[i]
			}
		}
		
		//os 구분
		browser.os = (navigator.appVersion).match(/(mac|win|linux)/i),
		browser.os = (browser.os) ? browser.os[1].toLowerCase() : '';
	
		//version 체크
		if (browser.ios || browser.android) {
			version = ua.match(/applewebkit\/([0-9.]+)/i);
			if (version && version.length > 1) {
				browser.webkitversion = version[1];
			}
			if (browser.ios) {
				version = ua.match(/version\/([0-9.]+)/i);
				if (version && version.length > 1) {
					browser.ios = version[1];
				}
			} else if (browser.android) {
				version = ua.match(/android ([0-9.]+)/i);
				if (version && version.length > 1) {
					browser.android = parseInt(version[1].replace(/\./g, ''));
				}
			}
		}

		if (ie) {
			win[global].uiCheck.ie = true;
			browser.ie = ie = parseInt( ie[1] || ie[2] );
			( 9 > ie ) ? browser.oldie = true : ( 9 == ie ) ? '' : '';
			( 11 > ie ) ? support.pointerevents = false : '';
			( 9 > ie ) ? support.svgimage = false : '';
		} else {
			win[global].uiCheck.ie = false;
		}
		//class 생성
		$('html')
		.addClass(browser.os)
		.addClass(browser.chrome? 'chrome' : browser.firefox ? 'firefox' : browser.opera ? 'opera' : browser.safari ? 'safari' : browser.ie ? 'ie ie' + browser.ie : '')
		.addClass(browser.ie && 8 > browser.ie ? 'oldie' : '')
		.addClass(browser.ios ? "ios" : browser.android ? "android" : '')
		.addClass(browser.mobile ? 'ui-m' : 'ui-d')
		.addClass((browser.device === 'IA' || browser.device === 'AA') ? 'app' : '');
	}
	function createUiResizeClass(){
		var base = this,
			timer;
	
		$(win).resize(function(){
			clearTimeout(timer);
			timer = setTimeout(function(){
				var dw = $(win).outerWidth(),
					sc = [1440, 1023, 767, 359],
					sizeMode = dw > sc[0] ? 4 : dw > sc[1] ? 3 : dw > sc[2] ? 2 : 1,
					sizeClass = (' s'+ sizeMode +' s'+ (3 > sizeMode ? 12 : 34) + (360 > dw ? ' s0' : ''));
					//s4 = (1440 ~)wide size, 
					//s3 = (1023 ~ 1440)desktop size, 
					//s2 = (767 ~ 1023)tablet size, 
					//s1 = (767 ~ 359)mobile size,
					//s0 = ( ~ 359)mobile size

				$('html').removeClass('s0 s1 s2 s3 s4 s12 s34').addClass(sizeClass);

			},50);
		});
	}
	//fn namespace 
	function createNameSpace(identifier, module){
		//option guide
		if (identifier === undefined) {
			win[global].consoleGuide([
				global + ".namespace({ identifier, module);",
				"- identifier: 식별자네임밍(!필수)",
				"- module: {}모듈함수 (!선택)"
			]);
			return false;
		}
		
		var w = win, name = identifier.split('.'), p, i = 0;
	
		if(!!identifier){
			for (i = 0; i < name.length; i += 1){
				(!w[name[i]]) ? (i === 0) ? w[name[i]] = {} : w[name[i]] = {} : '';
				w = w[name[i]];
			}
		}
		if(!!module){
			for (p in module){
				if(!w[p]){
					w[p] = module[p];
				} else {
					throw new Error("module already exists! >> " + p);
				}
			}
		}
		return w;
	}
	
	//fn console
	function createConsoleGuide(opt){
		if (!win[global].uiCheck.ie) {
			var i = 0;
			console.log('');
			for (i = 0; i < opt.length; i++){
				(i === 0) ? console.log("%c" + opt[i], "background:#333; color:#ffe400; font-size:12px") : console.log(opt[i]);
			}
			console.log('');
		}
	}

	//fn tooltip
	function createUiTooltip(opt){
		var $btn = $('.ui-tooltip-btn'),
			sp = 10,
			off_t, off_l, w, h, bw, bh, st, sl, id, timer;

		$btn.off('mouseover.tooltip focus.tooltip touchstart.tooltip').on('mouseover.tooltip focus.tooltip touchstart.tooltip', function(e){
			e.preventDefault();
			//clearTimeout(timer);

			id = $(this).attr('aria-describedby');
			off_t = $(this).offset().top;
			off_l = $(this).offset().left;
			w = $(this).outerWidth();
			h = $(this).outerHeight();
			bw = $(win).innerWidth();
			bh = $(win).innerHeight();
			st = $(doc).scrollTop();
			sl = $(doc).scrollLeft();
			
			tshow(off_t, off_l, w, h, bw, bh, st, sl, id);
		}).off('mouseleave.tooltip ').on('mouseleave.tooltip', function(e){
			delayhide();
			$('.ui-tooltip').on('mouseover', function(e){
				clearTimeout(timer);
			}).on('mouseleave', function(e){
				thide();
			});
		}).off('blur.tooltip touchcancel.tooltip touchend.tooltip').on('blur.tooltip touchcancel.tooltip touchend.tooltip', function(e){
			thide();
		})

		function thide(){
			$('.ui-tooltip').removeAttr('style').attr('aria-hidden', true).removeClass('ps-ct ps-cb ps-lt ps-lb ps-rt ps-rb');
		}
		function delayhide(){
			timer = setTimeout(thide, 100);
		}
		function tshow(off_t, off_l, w, h, bw, bh, st, sl, id) {
			var pst = (bh / 2 > (off_t - st) + (h / 2)) ? true : false,
				psl = (bw / 2 > (off_l - sl) + (w / 2)) ? true : false,
				tw = $('#' + id).outerWidth(),
				th = $('#' + id).outerHeight(),
				ps_l, ps_r, cursorCls = 'ps-';
				
			if (psl) {
				if (off_l - sl > tw / 2) {
					cursorCls += 'c';
					ps_l = off_l - (tw / 2) + (w / 2);
				} else {
					cursorCls += 'l';
					ps_l = off_l;
				}
			} else {
				if (bw - (off_l - sl + w) > tw / 2) {
					cursorCls += 'c';
					ps_r = off_l - (tw / 2) + (w / 2);
				} else {
					cursorCls += 'r';
					ps_r = off_l - tw + w;
				}
			}
			if (pst) {
				cursorCls += 'b';
			} else {
				cursorCls += 't';
			}

			$('#' + id).addClass(cursorCls).attr('aria-hidden', false).css({ 
				display:'block'
			}).css({
				top : pst ? off_t + h + sp : off_t - th - sp,
				left : psl ? ps_l : ps_r
			});
		}
	}

	//fn uiAjax
	function createUiAjax(opt) {
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiAjax({ id:'아이디명', url:'링크주소', add:true/false, page:true/false, callback:function(){...} );",
				"- id: #을 제외한 아이디명만 입력(!필수)",
				"- url: 링크 주소 입력(!필수)",
				"- page: true일 경우 html추가 및 값 전달, false일 경우 값만 전달, (!선택 - 기본값 true)",
				"- add: false일 경우 삭제추가, true일 경우 추가(!선택 - 기본값 false)",
				"- callback: 콜백함수 (!선택)",
				"※  ajax로 페이지 또는 데이타 불러오기"
			]);
			return false;
		}
		
		var $id = $('#' + opt.id),
			page = opt.page === undefined ? true : opt.page,
			add = opt.add === undefined ? false : opt.add;
		
		$.ajax({
			type: 'GET',
			url: opt.url,
			cache: false,
			async: false, //비동기 통신 여부 
			headers: { 
				"cache-control": "no-cache", 
				"pragma": "no-cache" 
			},
			error: function(request, status, err) {
				//console.log(request.responseText + " error 호출"+  status+ " \n" +   err);
			},
			success: function (result) {
				page ? add ? $id.append(result) : $id.html(result) : '';
				(!!opt.callback) ? opt.callback(result) : ''; 
			}
		});
	}
	
	//fn uiFocus
	function createUiFocusSense(opt){
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiFocusSense({ selector:'css셀렉트', callback:function(){...} );",
				"- selector: css셀렉터 형식 예) '#aaa', '.aa .bb' ...(!필수)",
				"- callback: 콜백함수(!필수)",
				"※  지정한 특정영역에서 포커스가 사라질때 콜백 "
			]);
			return false;
		}
		
		var $hold = $(opt.selector),
			$hold_focus = $hold.find('h1, a, input, button, label, select'),
			$btn_s = $hold.find('[hold="s"]'),
			$btn_e = $hold.find('[hold="e"]');

		if (!!$hold_focus.length) {
			$hold.find('h1').attr('tabindex',0);
			$hold_focus.eq(0).attr('hold','s');
			$hold_focus.eq(-1).attr('hold','e');
		} else {
			$hold.attr('tabindex',0);
			$btn_s = $hold;
			$btn_e = $hold;
		}
		
		$btn_s.off('keydown.holds').on('keydown.holds', function (e) {
			$hold.off('keydown.modal');
			if (e.shiftKey && e.keyCode == 9) {
				opt.callback();
			}
		});
		$btn_e.off('keydown.holde').on('keydown.holde', function (e) {
			$hold.off('keydown.modal');
			if (!e.shiftKey && e.keyCode == 9) {
				opt.callback();
			}
		});
	}
	function createUiFocusHold(opt){
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiFocusHold({ id:'css셀렉트' );",
				"- selector: css셀렉터 형식 예) '#aaa', '.aa .bb' ...(!필수)",
				"※  지정한 특정영역에서 tab 이동 시 포커스 홀딩 "
			]);
			return false;
		}
		
		var $hold = $(opt.selector),
			$hold_focus = $hold.find('h1, a, input, button, label, select');
		
		$hold_focus.eq(0).attr('holds', true).attr('tabindex',0).focus();
		$hold_focus.eq(-1).attr('holde', true);
		$hold.find('[holds="true"]').off('keydown.holds').on('keydown.holds', function (e) {
			if (e.shiftKey && e.keyCode == 9) {
				e.preventDefault();
				$hold.find('[holde="true"]').focus();
			}
		});
		$hold.find('[holde="true"]').off('keydown.holde').on('keydown.holde', function (e) {
			if (!e.shiftKey && e.keyCode == 9) {
				e.preventDefault();
				$hold.find('[holds="true"]').focus();
			}
		});
	}
	
	//fn uiBackdrop
	function createUiBackdrop(opt){
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiBackdrop({ selector:'.classname, .classname2, #idname', callback:function(v,t){...} );",
				"- selector: 이벤트 제외영역, 복수선택가능 (!필수)",
				"- callback: 콜백함수 (!선택)"
			]);
			return false;
		}
		
		var $base = $(opt.selector),
			callback = opt.callback,
			scope = true,
			eventHandle = ['mouseover.uibackdrop', 'mouseleave.uibackdrop', 'click.uibackdrop'],
			meventHandle = ['touchstart.uibackdrop', 'touchend.uibackdrop touchcancel.uibackdrop', 'touchmove.uibackdrop'];

		if (win[global].uiCheck.mobile) {
			$(doc).off(meventHandle[0]).on(meventHandle[0], opt.selector, function(){
				scope = false; 
			});
			$(doc).off(meventHandle[2]).on(meventHandle[2], function(){
				scope = false;
			});
			$(doc).off(meventHandle[1]).on(meventHandle[1], function(){
				if (scope) {
					$(doc).off(meventHandle[1]);
					!!callback ? callback(true , this) : '';
				} else {
					scope = true;
				}
			});
		} else {
			$(doc).off(eventHandle[0]).on(eventHandle[0], opt.selector, function(){
				scope = false;
			}).off(eventHandle[1]).on(eventHandle[1], opt.selector, function(){
				scope = true;
			})
			$(doc).off(eventHandle[2]).on(eventHandle[2], function (e){
				if (!$base.has(e.target).length && scope) {
					$(doc).off(eventHandle[2]);
					callback(true , this);
				} 
			});
		}
	}
	
})(jQuery, window, document);