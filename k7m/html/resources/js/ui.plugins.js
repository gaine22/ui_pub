
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

		/* coding list ----------------------------------*/
		uiCodinglist: function(opt){
			return createUiCodinglist(opt);
		},

		/* menu ----------------------------------*/
		uiMenu: function(opt){
			return createUiMenu(opt);
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
		
		/* card list ----------------------------------*/
		uiCardList: function(opt){
			return createUiCardList(opt);
		},
		uiCardListRow: function(opt){
			return createUiCardListRow(opt);
		},
		
		/* slot machine ----------------------------------*/
		uiSlot: function(opt){
			return createUiSlot(opt);
		},
		uiSlotStart: function(opt){
			return createUiSlotStart(opt);
		},
		uiSlotStop: function(opt){
			return createUiSlotStop(opt);
		},
		
		/* dropdown ----------------------------------*/
		uiDropdown: function(opt){
			return createUiDropdown(opt);
		},
		uiDropdownToggle: function(opt){
			return createUiDropdownToggle(opt);
		},
		uiDropdownHide: function(){
			return createUiDropdownHide();
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
		},

		/* capture ----------------------------------*/
		uiCapture: function(opt) {
			return createUiCapture(opt);
		},

		/* slider ----------------------------------*/
		uiSlider: function(opt){
			return createUiSlider(opt);
		},

		/* follow object ----------------------------------*/
		uiFloating: function(opt) {
			return createUiFloating(opt);
		},

		/* count number ----------------------------------*/
		uiCountStep: function(opt) {
			return createUiCountStep(opt);
		},
		uiCountSlide: function(opt) {
			return createUiCountSlide(opt);
		},

		/* slide ----------------------------------*/
		uiSlide: function(opt) {
			return createUiSlide(opt);
		},
		uiSlideFnEvt: function(opt) {
			return createUiSlideFnEvt(opt);
		}
		,
		uiSlideFnAuto: function(opt) {
			return createUiSlideFnAuto(opt);
		}
	});


	//base run
	mConsole.log()//mobile console log
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

	//fn slide
	win[global].uiSlide.options = {
		current:0,
		multi:false,
		loop:true,
		items:1,
		eff:'slide',
		dot:true,
		nav:true,
		auto:true,
		play:false,
		gauge:true,
		speed:300,
		autoTime:3000,
		callback: false,
		/* multi use */
		margin:0,
		mouseDrag:true,
		touchDrag:true
	};
	function createUiSlide(opt) {
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiSlide({ id:'name', current:0, multi:false, loop:true, items:1, eff:'slide', dot:true, nav:true, auto:true, play:false, gauge:true, speed:300, autTime:3000, margin:0, mouseDrag:true, touchDrag:true });",
				"- id [String]: #을 제외한 아이디명만 입력 (!필수)",
				"※ 슬라이드"
			]);
			return false;
		}
		
		win[global].uiSlide[opt.id] = {};
		var base = win[global].uiSlide[opt.id];

		//루트설정
		base.root = $('#' + opt.id);
		base.tit = base.root.find('.ui-slide-tit');
		base.wrap = base.root.find('.ui-slide-wrap');
		base.itemwrap = base.root.find('.ui-slide-itemwrap');
		base.item = base.root.find('.ui-slide-item');
		base.itemtit = base.root.find('.ui-slide-itemtit');

		//옵션저장
		base.opt = $.extend({}, win[global].uiSlide.options, opt);
		
		//중복실행 방지
		if (!base.root.is('.load')) {
			base.root.addClass('load');
			uiSlideSet(base);
		}
	}
	function uiSlideSet(base){
		var base = base;

		//기본필요값 설정
		base.opt.len = base.item.length;
		base.opt.w = base.item.eq(base.opt.current).outerWidth();
		base.opt.h = base.item.eq(base.opt.current).outerHeight();
		base.opt.winw = $(win).outerWidth();
		base.opt.docw = $(doc).outerHeight();
		
		//multi
		base.multi = {};
		base.multi.is = base.opt.multi;
		if (base.multi.is) {
			base.multi.w = [0]; //items width array
			base.multi.h = [];
			base.multi.ww = 0; //itemwrap width
			base.multi.rw = base.root.outerWidth(); //slide width
			base.root.addClass('ui-slide-multi n' + base.opt.items);
			base.itemwrap.addClass('ui-slide-multiitem');
			
			for (var i = 0; i < base.opt.len; i++) {
				base.item.eq(i).css('margin-right', (i !== base.opt.len - 1) ? base.opt.margin: 0 );
				base.multi.h.push(base.item.eq(i).outerHeight());
				base.multi.ww = base.multi.ww + base.item.eq(i).outerWidth() + Number((i !== base.opt.len - 1) ? base.opt.margin : 0);
				base.multi.w.push(base.multi.ww);
			}
			base.itemwrap.css('width', base.multi.ww);
			base.itemwrap.data('left', 0) ;
		}
		
		//current item 설정
		//base.opt.eff !== 'slide' ? base.item.addClass('animated') : '';
		if (!base.multi.is) {
			base.item.attr('aria-hidden', true).css('left', base.opt.w).eq(base.opt.current).attr('aria-hidden', false).css('left',0);
		}
		
		//heigth 설정
		base.wrap.css('height', base.opt.h);
		base.itemwrap.css('height', base.opt.h);
		base.item.eq(base.opt.current).css('height', base.opt.h);

		//이벤트 관련 설정
		base.evt = {};
		base.evt.offsetX = 0;
		base.evt.offsetY = 0;
		base.evt.activate = false; //현재 모션 여부
		base.evt.swap = 'off'; //dragmove,cancel 이벤트 실행여부
		base.evt.cancel = false;
		base.evt.xaxis = false;
		base.evt.movX = 0;
		base.evt.movY = 0;

		//자동진행
		base.auto = {};
		base.timer = {};
		base.timers = {};
		
		//fade effect value
		base.fade = {};
		base.fade.opacity = 0;
		
		//control 
		(base.opt.dot) ? uiSlideDot(base) : ''; 
		(base.opt.nav) ? uiSlideNav(base) : '';
		(base.opt.auto) ? uiSlideAuto(base) : '';
		(base.opt.gauge) ? uiSlideGauge(base) : ''; 
		
		uiSlideReset(base);
		uiSlideEvtType(base);
		uiSlideEvt(base);

		base.root.data('base', base);
	}
	function uiSlideDot(base) {
		var base = base,
			i, dotwrap, dotdiv, selected;
		
		dotwrap = doc.createElement("div");
		dotdiv = doc.createElement("div");
		$(dotwrap).addClass('ui-slide-dotwrap');
		$(dotdiv).addClass('ui-slide-dotdiv').attr('role', 'tablist');

		for (i = 0; i < base.opt.len; i++) {
			selected = (base.opt.current === i) ? 'true' : 'false'; 
			$(dotdiv).append('<button class="ui-slide-dot" type="button" role="tab" aria-selected="' + selected + '">' + base.item.eq(i).find(".ui-slide-itemtit").text() + '</button>');
		}
		base.root.prepend(dotwrap);
		base.dotwrap = base.root.find('.ui-slide-dotwrap');
		base.dotwrap.append(dotdiv);
		base.dotdiv = base.dotwrap.find('.ui-slide-dotdiv');
		base.dotbtn = base.dotdiv.find('.ui-slide-dot');
	}
	function uiSlideNav(base) {
		var base = base,
			navwrap, $navwrap, eqNext, eqPrev;
		
		eqNext = base.opt.current + 1 >= base.opt.len ? 0 : base.opt.current + 1;
		eqPrev = base.opt.current - 1 < 0 ? base.opt.len - 1 : base.opt.current - 1;
		
		navwrap = doc.createElement("div");
		$navwrap = $(navwrap);
		
		$navwrap.addClass('ui-slide-navwrap');
		$navwrap.append('<button type="button" class="ui-slide-prev">이전 : <span>' + base.item.eq(eqPrev).find(".ui-slide-itemtit").text() + '</span></button>');
		$navwrap.append('<button type="button" class="ui-slide-next">다음 : <span>' + base.item.eq(eqNext).find(".ui-slide-itemtit").text() + '</span></button>');
		base.root.append(navwrap);
		
		base.nav = base.root.find('.ui-slide-navwrap');
		base.nav.prev = base.nav.find('.ui-slide-prev');
		base.nav.next = base.nav.find('.ui-slide-next');
	}
	function uiSlideAuto(base) {
		var base = base,
				dotwrap, autobtn;

			if (!base.root.find('.ui-slide-dotwrap').length) {
				dotwrap = doc.createElement("div");
				$(dotwrap).addClass('ui-slide-dotwrap');
				base.root.prepend(dotwrap);
				base.dotwrap = base.root.find('.ui-slide-dotwrap');
			}
			if (!!base.opt.play) {
				autobtn = '<button type="button" class="ui-slide-auto" state="play"><span>정지</span></button>';
			} else {
				autobtn = '<button type="button" class="ui-slide-auto" state="stop"><span>자동 진행</span></button>';
			}
			base.dotwrap.prepend(autobtn);
			base.autobtn = base.dotwrap.find('.ui-slide-auto');
			(base.opt.play && base.opt.auto) ? uiSlideAutoEvt(base, true) : '';
	}
	function uiSlideGauge(base) {
		var base = base,
			gaugewrap = doc.createElement("div"),
			$gaugewrap = $(gaugewrap);
		
		$gaugewrap.addClass('ui-slide-gauge');
		$gaugewrap.append('<div class="ui-slide-gaugebar"></div>');
		base.root.append(gaugewrap);
		
		base.gauge =  base.root.find('.ui-slide-gauge');
		base.gauge.bar = base.gauge.find('.ui-slide-gaugebar');
	}
	function uiSlideReset(base) {
		var base = base;

		$(win).resize(function(){
			clearTimeout(base.timers);
			base.timers = setTimeout(function(){
				if (base.opt.winw !== $(win).outerWidth()) {
					base.opt.len = base.item.length;
					base.opt.w = base.item.eq(base.opt.current).outerWidth();
					base.opt.h = base.item.eq(base.opt.current).outerHeight();
					base.opt.winw = $(win).outerHeight();
					base.opt.docw = $(doc).outerHeight();
					base.evt.activate = false; //현재 모션 여부
					
					if (base.multi.is) {
						base.multi.w = [0]; //items width array
						base.multi.h = [];
						base.multi.ww = 0; //itemwrap width
						base.multi.rw = base.root.outerWidth(); //slide width
						base.root.addClass('ui-slide-multi n' + base.opt.items);
						base.itemwrap.addClass('ui-slide-multiitem');
						
						for (var i = 0; i < base.opt.len; i++) {
							base.item.eq(i).css('margin-right', (i !== base.opt.len - 1) ? base.opt.margin: 0 );
							base.multi.h.push(base.item.eq(i).outerHeight());
							base.multi.ww = base.multi.ww + base.item.eq(i).outerWidth() + Number((i !== base.opt.len - 1) ? base.opt.margin : 0);
							base.multi.w.push(base.multi.ww);
						}
						base.itemwrap.css({ width: base.multi.ww, left: 0 });
						base.itemwrap.data('left', 0) ;
					}
				}
			}, 200);
		});	
	}
	function uiSlideEvtType(base) {
		var base = base,
			types = ['as', 'ever', 'j', 'o'];

		if (base.opt.mouseDrag === true && base.opt.touchDrag === true) {
			types = ['touchstart.uiSlide mousedown.uiSlide', 'touchmove.uiSlide mousemove.uiSlide', 'touchend.uiSlide touchcancel.uiSlide mouseup.uiSlide', 'click.uiSlide'];
		}
		else if (base.opt.mouseDrag === false && base.opt.touchDrag === true) {
			types = ['touchstart.uiSlide', 'touchmove.uiSlide', 'touchend.uiSlide touchcancel.uiSlide', 'click.uiSlide'];
		}
		else if (base.opt.mouseDrag === true && base.opt.touchDrag === false) {
			types = ['mousedown.uiSlide', 'mousemove.uiSlide', 'mouseup.uiSlide', 'click.uiSlide'];
		}
		
		base.evt.start = types[0];
		base.evt.move = types[1];
		base.evt.end = types[2]; 
		base.evt.click = types[3]; 
	}
	function uiSlideEvtCurrent(base){
		var base = base;
		
		//이전 다음 번호생성
		base.evt.next = (base.opt.current + 1 >= base.opt.len) ? 0 : base.opt.current + 1;
		base.evt.prev = (base.opt.current - 1 < 0) ? base.opt.len - 1 : base.opt.current - 1;
	}
	function uiSlideEvt(base) {
		var base = base;

		base.opt.past = base.opt.current;
		
		//click event
		base.root.off(base.evt.click).on(base.evt.click, 'button', function(){
			var $this = $(this);
			
			if (!base.evt.activate) {
				uiSlideEvtCurrent(base);

				if ($this.hasClass('ui-slide-next')) {
					actfn(base.evt.next, 'next');
				} else if ($this.hasClass('ui-slide-prev')) {
					actfn(base.evt.prev, 'prev');
				} else if ($this.hasClass('ui-slide-dot')) {
					actfn($this.index(), base.opt.past < base.opt.current ? 'next' : 'prev');
				} else if ($this.hasClass('ui-slide-auto')) {
					$this.attr('state') === 'play' ? uiSlideAutoEvt(base, false) : uiSlideAutoEvt(base, true);
				}
			}
		});
		function actfn(c, d){
			base.opt.current = c;
			base.dir = d;
			uiSlideAct(base);
			base.opt.auto ? uiSlideAutoEvt(base, false) : '';
		}
		
		if (!base.multi.is) {
			base.item.off(base.evt.start).on(base.evt.start, function(event){
				if (!base.evt.activate) {
					uiSlideDragStart(base, event);
				}
			});
		} else {
			base.itemwrap.off(base.evt.start).on(base.evt.start, function(event){
				if (!base.evt.activate) {
					uiSlideDragStart(base, event);
				}
			});
		}
	}
	function uiSlideAutoEvt(base, v) {
		//자동실행 v값이 true이면 실행, false이면 정지
		var base = base;

		if (v === true) {
			base.opt.play = false;
			base.autobtn.attr('state', 'play').find('span').text('정지');
			base.timer = win.requestAFrame(autoRAF);
			//base.timer = window.requestAFrame(autoRAF);
		} else {
			base.opt.play = true;
			base.autobtn.attr('state', 'stop').find('span').text('자동 진행');
			win.cancelAFrame(base.timer);
			//window.cancelAFrame(base.timer);
		}

		function autoRAF(timestamp){
			var tstamp = !timestamp ? base.timer : timestamp.toFixed(0),
				limit = !timestamp ? base.opt.autoTime / 10 : base.opt.autoTime,
				progress;

			(!base.startA) ? base.startA = tstamp : '';
			progress = tstamp - base.startA;
			
			if (progress < limit) {
				base.gauge.bar.css('width', (progress / limit * 100).toFixed(0) + '%');
				base.timer = win.requestAFrame(autoRAF);
				/*base.timer = window.requestAFrame(autoRAF);*/
			} else {
				base.opt.current = (base.opt.current + 1 >= base.opt.len) ? 0 : base.opt.current + 1;
				base.dir = 'next';
				base.startA = null;
				base.gauge.bar.css('width', '100%');
				
				uiSlideAct(base, callbackAuto);
				
			}
		}
		function callbackAuto(){
			base.timer = win.requestAFrame(autoRAF);
			/*base.timer = window.requestAFrame(autoRAF);*/
		}
	}
	function uiSlideGetTouches(event) {
		//터치 이벤트가 undefined 가 아니라면
		if (event.touches !== undefined) {
			return { x : event.touches[0].pageX, y : event.touches[0].pageY };
		}
		if (event.touches === undefined) {
			if (event.pageX !== undefined) {
				return { x : event.pageX, y : event.pageY };
			}
			//ie
			if (event.pageX === undefined) {
				return { x : event.clientX, y : event.clientY };
			}
		}
	}
	function uiSlideEvtDrag(base) {
		var base = base;

		if (base.evt.swap === 'on') {
			$(doc).off(base.evt.move).on(base.evt.move, function(event){
				base.root.data('touch', 'move');
				uiSlideDragMove(base, event);
			});
			$(doc).off(base.evt.end).on(base.evt.end, function(event){
				base.root.data('touch', 'end');
				uiSlideDragEnd(base, event);
			});
		} else if (base.evt.swap === 'off') {
			$(doc).off(base.evt.move);
			$(doc).off(base.evt.end);
		}
	}
	function uiSlideDragStart(base, event) {
		var ev = event.originalEvent || event || win.event,
			base = base;
		
		base.evt.offsetX = uiSlideGetTouches(ev).x;
		base.evt.offsetY = uiSlideGetTouches(ev).y;
		base.evt.swap = 'on';
		base.evt.yaxis = false;

		uiSlideEvtCurrent(base);
		if (!base.multi.is) {
			switch(base.opt.eff){
			case 'slide': 
				startLeft(base.opt.w, base.opt.w * -1);
				break;
			case 'fade': 
				startLeft(0, 0);
				break;
			//The default value is 'slide'. So no default value is required.
			}
		}
		function startLeft(n,p){
			base.item.eq(base.evt.next).css('left', n);
			base.item.eq(base.evt.prev).css('left', p);
		}
		
		uiSlideEvtDrag(base);
		//$('body').on('touchstart.bodyscroll', uiSlideLockTouch);
		// /
	}
	function uiSlideDragEnd(base, event) {
		var ev = event.originalEvent || event || win.event,
			base = base;

		base.evt.swap = 'off';
		base.evt.xaxis = false;
		uiSlideEvtDrag(base);
		//$('body').off('touchstart.bodyscroll', NETIVE.uiSlide.lockTouch);
		if (!base.multi.is) {
			if (Math.abs(base.evt.movX) > base.opt.w / 5) {
				if (base.evt.movX < 0) {
					base.opt.current = base.evt.next;
					base.dir = 'next';
				} else if (base.evt.movX > 0) {
					base.opt.current = base.evt.prev;
					base.dir = 'prev';
				}
				base.evt.cancel = false;
				uiSlideAct(base);
			} else if(base.evt.movX !== 0) {
				base.evt.cancel = true;
				uiSlideAct(base);
			}
		} else {
			var n = 0;
			for (var i = 0; i < base.multi.w.length; i++) {
				//console.log('end: ', Number(base.multi.w[i]),  Number(base.itemwrap.css('left').replace(/[^0-9]/g, "")));
				if (Number(base.multi.w[i]) > Number(base.itemwrap.css('left').replace(/[^0-9]/g, ""))) {
					n = i;
					break;
				}
			}
			if (base.multi.ps === 'prev') {
				n = n - 1 < 0 ? 0 : n - 1;
			}
			
			base.itemwrap.stop().animate({
				left:(base.multi.ww - base.multi.rw) < base.multi.w[n] ? (base.multi.ww - base.multi.rw) * -1 : base.multi.w[n] * -1
			},200 , function(){
				base.itemwrap.data('left', base.multi.w[n] * -1);
			});
		}
	}
	function uiSlideDragMove(base, event) {
		var ev = event.originalEvent || event || win.event,
			base = base;
		
		base.evt.movX = parseInt(base.evt.offsetX - uiSlideGetTouches(ev).x, 10) * -1;
		base.evt.movY = parseInt(base.evt.offsetY - uiSlideGetTouches(ev).y, 10) * -1;
		
		uiSlideAutoEvt(base, false);

		//single drag scope
		if (Math.abs(base.evt.movX) > base.opt.w && !base.multi.is) {
			base.evt.movX = (base.evt.movX < 0) ? base.opt.w * -1 : base.opt.w;
		} 
		if (base.multi.is) {
			base.multi.ps = (base.evt.movX < 0) ? 'next' : 'prev';
		}

		//y축이 x축보다 이동이 크고 X축 이동이 5보다 작을때
		if (Math.abs(base.evt.movY) > 2 && Math.abs(base.evt.movX) < 2 && base.evt.xaxis === false) {
			mConsole.log('y축이동');
			base.evt.swap = 'off';
			base.evt.yaxis = true;
			uiSlideEvtDrag(base);
			//$('body').off('touchstart.bodyscroll', NETIVE.uiSlide.lockTouch);
			//$('html, body').off('touchstart.bodyscroll', NETIVE.uiSlide.lockTouch);
		}
		//X축이 y축보다 이동이 클때	
		else if(base.evt.yaxis === false){
			mConsole.log('x축이동', base.evt.movY, $(win).scrollTop(), $(win).scrollTop() - base.evt.movY);
			base.evt.xaxis = true;
			//멀티일때 좌우 끝에서 복원되는 모션 일때 중복실행 방지
			//base.multi.restore : 멀티일때 좌우 끝에서 복원되는 모션
			//if (!base.multi.restore) {
				
				//slide mode
				if (base.opt.eff === 'slide') {
					//single slide mode
					if (!base.multi.is) {
						base.item.eq(base.opt.current).css('left', base.evt.movX);
						base.item.eq(base.evt.next).css('left', base.opt.w + base.evt.movX);
						base.item.eq(base.evt.prev).css('left', (base.opt.w * -1) + base.evt.movX);
					} 
					//multi slide mode
					else if (base.multi.is) {
						// data left 값이 없다면 0으로 설정.
						//base.itemwrap.data('left') ? base.itemwrap.data('left', 0) : '';

						/*clearTimeout(base.multi.timer);
						if (base.evt.movX + Number(base.itemwrap.data('left')) > 0) {
							base.multi.timer = setTimeout(function(){
								NETIVE.uiSlide.restore(base, 0);
							},200);
							base.itemwrap.data('left', 0);
							base.evt.movX = 0;
						} 
						*/

						//multi drag scope 
						if (base.evt.movX + Number(base.itemwrap.data('left')) > 0) {
							//앞부분
							base.itemwrap.css('left', 0).data('left', 0);
						} else if(base.evt.movX + Number(base.itemwrap.data('left')) <  (base.multi.ww - base.multi.rw) * -1){
							//뒷부분
							base.itemwrap.css('left', (base.multi.ww - base.multi.rw) * -1).data('left', (base.multi.ww - base.multi.rw) * -1);
						} else {
							base.itemwrap.css('left', base.evt.movX + Number(base.itemwrap.data('left'))).data('movx', base.evt.movX + Number(base.itemwrap.data('left')));
						}
					}
				}
				
				//fade mode
				else if (base.opt.eff === 'fade') {
					base.fade.opacity = ((base.opt.w - Math.abs(base.evt.movX)) / base.opt.w).toFixed(2);
					base.item.css({ opacity: 0, zIndex: 0 }).eq(base.opt.current).css({ opacity: base.fade.opacity, zIndex: 1 });
					(base.evt.movX < 0) ?
						base.item.eq(base.evt.next).css({ opacity: 1 - base.fade.opacity, zIndex: 0 }) :
						base.item.eq(base.evt.prev).css({ opacity: 1 - base.fade.opacity, zIndex: 0 });
				}
			//}
		}
	}
	function uiSlideAct(base, callbackAuto) {
		var base = base,
			$current = base.item.eq(base.opt.current),
			$past = base.item.eq(base.opt.past),
			w = base.opt.w,
			h = base.opt.h;

		if (base.opt.past !== base.opt.current || base.evt.cancel) {
			if (base.dir === 'next' && base.evt.movX === 0) {
				$current.css('left', w);
			} else if(base.dir === 'prev' && base.evt.movX === 0) {
				$current.css('left', w * -1);
			} else {
				if (base.evt.cancel) {
					$current.css('left', base.evt.movX);
				} else {
					base.evt.movX < 0 ? $current.css('left', w + base.evt.movX) : $current.css('left', (w * -1) + base.evt.movX);
				}
			}
			
			base.item.removeClass('on').attr('aria-hidden', true);
			$current.addClass('on').attr('aria-hidden', false);
			base.start = null;
			uiSlideStep(base, callbackAuto);
		}
	}
	function uiSlideStep(base, callbackAuto) {
		//eff분기
		switch(base.opt.eff){
		case'slide':
			(!base.multi.is) ? uiSlideStepSlide(base, callbackAuto) : uiSlideStepMulti(base, callbackAuto);
			break;
		case'fade':
			uiSlideStepFade(base, callbackAuto);
			break;
		}
		
		//heigth 재설정
		base.opt.w = base.item.eq(base.opt.current).outerWidth();
		base.opt.h = base.item.eq(base.opt.current).outerHeight();
		base.wrap.css('height', base.opt.h);
		base.itemwrap.css('height', base.opt.h);
		base.item.eq(base.opt.current).css('height', base.opt.h);
	}
	function uiSlideStepMulti(base, callbackAuto) {
		base.itemwrap.data('left', base.itemwrap.data('movx'));
	}
	function uiSlideStepFade(base, callbackAuto) {
		var base = base,
			step = (base.opt.speed / 16).toFixed(0),
			per = Math.ceil(100 / step),
			n = 0,
			opa = 0,
			tstamp, 
			progress;

			win.requestAFrame(stepRAF);
		base.evt.activate = true;

		function stepRAF(timestamp){
			if (!!timestamp) {
				tstamp = timestamp.toFixed(0);
				(!base.start) ? base.start = tstamp : '';
				progress = tstamp - base.start;
				opa = Number((per * n) / 100);

				base.fade.opacity !== 0 ? opa = opa + (1 - Number(base.fade.opacity)) : '';
				opa = opa.toFixed(2);
				n = n + 1;
				
				if (!base.evt.cancel) {
					base.item.eq(base.opt.past).css({ 
						left: 0,
						opacity: 1 - opa < 0 ? 0 : 1 - opa,
						zIndex: 0
					});
					base.item.eq(base.opt.current).css({
						left: 0,
						opacity: opa > 1 ? 1 : opa,
						zIndex: 1
					});
				} 
				//cancle step
				else {
					//next cancel
					if (base.evt.movX < 0) {
						base.item.eq(base.opt.current).css({ 
							left: 0,
							opacity: 1,
							zIndex: 1
						});
						base.item.eq(base.evt.next).css({ 
							left: 0,
							opacity: 0,
							zIndex: 0
						});
					} 
					//prev cancel
					else {
						base.item.eq(base.opt.current).css({ 
							left: 0,
							opacity: 1,
							zIndex: 1
						});
						base.item.eq(base.evt.prev).css({ 
							left: 0,
							opacity: 0,
							zIndex: 0
						});
					}
				}
				//ing or end
				(progress < base.opt.speed) ? win.requestAFrame(stepRAF) : uiSlideEnd(base, callbackAuto);
			}
			//animated
			else {
				base.item.eq(base.opt.current).stop().animate({
					left: 0,
					opacity: 1,
					zIndex: 1
				},300, function(){
					uiSlideEnd(base, callbackAuto)
				});

				if (!base.evt.cancel) {
					base.item.eq(base.opt.past).stop().animate({
						left: 0,
						opacity: 0,
						zIndex: 0
					}, 300);
				}
			}
		}
	}
	function uiSlideStepSlide(base, callbackAuto){
		var base = base,
			tstamp, progress, m, n, 
			j = (base.dir === 'next') ? [-1, 1] : [1, -1],
			nn = 0,
			px_add = (base.opt.w / (base.opt.speed / 16)) - 16,
			px;

			win.requestAFrame(stepRAF);
		base.evt.activate = true;
		
		function stepRAF(timestamp){
			//requestAnimationFrame
			if (!!timestamp) {
				tstamp = timestamp.toFixed(0);
				(!base.start) ? base.start = tstamp : '';
				progress = tstamp - base.start;
				
				m = base.evt.movX < 0 ? base.evt.movX : base.evt.movX * -1; //X축으로 이동값 정수로 변경
				px = progress + (px_add * nn);
				n = Math.ceil(px - m); 
				nn = nn + 1;
				//console.log(tstamp, progress)
				//next & prev step
				if (!base.evt.cancel) {
					base.item.eq(base.opt.past).css({ 
						left: Math.min(n , base.opt.w) * j[0] + 'px',
						zIndex: 1
					});
					base.item.eq(base.opt.current).css({
						left: Math.max(base.opt.w - n, 0) * j[1] + 'px',
						zIndex: 1
					});
				} 
				//cancle step
				else {
					//next cancel
					if (base.evt.movX < 0) {
						base.item.eq(base.opt.current).css({ 
							left: Math.min(base.evt.movX + px, 0),
							zIndex: 1
						});
						base.item.eq(base.evt.next).css({ 
							left: Math.min((base.opt.w + base.evt.movX) + px, base.opt.w),
							zIndex: 1
						});
					} 
					//prev cancel
					else {
						base.item.eq(base.opt.current).css({ 
							left: Math.max(base.evt.movX - px, 0),
							zIndex: 1
						});
						base.item.eq(base.evt.prev).css({ 
							left: Math.max( ((base.opt.w * -1) + base.evt.movX) - px, base.opt.w * -1 ),
							zIndex: 1
						});
					}
				}
				//ing or end
				(px < base.opt.w) ? win.requestAFrame(stepRAF) : uiSlideEnd(base, callbackAuto);
			}
			//animated
			else {
				base.item.eq(base.opt.current).stop().animate({
					left: 0,
					zIndex: 1
				},300, function(){
					uiSlideEnd(base, callbackAuto)
				});

				if (!base.evt.cancel) {
					base.item.eq(base.opt.past).stop().animate({
						left: base.opt.w * j[0] + 'px',
						zIndex: 1
					}, 300);
				}
			}
		}
	}
	function uiSlideEnd(base, callbackAuto) {
		var base = base;

		base.item.css('z-index', 0);
		base.item.eq(base.opt.current).css('z-index', 1);
		
		(!base.evt.cancel) ? base.opt.past = base.opt.current : '';
		//console.log('end: ' + base.opt.current);
		
		//base.opt.eff !== 'slide' ? base.item.eq(base.opt.current).addClass(base.opt.eff) : '';
		base.evt.activate = false;
		base.evt.cancel = false;
		base.evt.movX = 0;
		base.evt.movY = 0;
		base.root.data('base', base);
		base.fade.opacity = 0;
		base.gauge.bar.css('width', 0);
		
		(base.opt.nav) ? uiSlideNavTxt(base) : '';
		(base.opt.dot) ? uiSlideDotChg(base) : ''; 
		!!callbackAuto ? callbackAuto() : '';
		!!base.opt.callback ?  uiSlideCallback(base) : '';
	}
	function uiSlideNavTxt(base){
		//이전다음 버튼 명 설정
		var base = base;
		
		base.nav.prev.find('span').text(base.item.eq(base.opt.current - 1 < 0 ? base.opt.len - 1 : base.opt.current - 1).find('.ui-slide-itemtit').text());
		base.nav.next.find('span').text(base.item.eq(base.opt.current + 1 >= base.opt.len ? 0 : base.opt.current + 1).find('.ui-slide-itemtit').text());
	}
	function uiSlideDotChg(base){
		//이전다음 버튼 명 설정
		var base = base;
		
		base.dotbtn.attr('aria-selected', false).eq(base.opt.current).attr('aria-selected', true)
	}
		
	/* callback */
	function uiSlideCallback(base) {
		var base = base,
			v = { 'id':base.opt.id, 'current':base.opt.current};
		base.opt.callback(v);		
	}
	function createUiSlideFnEvt(opt) {
		//함수실행
		var base = $('#' + opt.id).data('base');
			
		base.opt.current = opt.current;
		base.dir = base.opt.past < base.opt.current ? 'next' : 'prev';
		
		uiSlideAct(base);
	}
	function createUiSlideFnAuto(opt) {
		//함수실행
		var base = $('#' + opt.id).data('base');

		uiSlideAutoEvt(base, opt.play)

	}








	//fn count number
	function createUiCountSlide(opt){
		var $base = $('#' + opt.id),
			countNum = !!opt.value === true ? opt.value : $base.text(),
			base_h = $base.outerHeight(),
			textNum = 0,
			len = countNum.toString().length,
			speed = !!opt.speed === true ? opt.speed + 's' : '1.0s',
			eff  = !!opt.eff === true ? opt.eff : 'easeOutQuart',
			transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend',
			i = 0,
			nn = 1,
			step, re, timer, r;
			
		if ($base.data('ing') !== true) {
			textNum = uiComma(countNum);
			base_h === 0 ? base_h = $base.text('0').outerHeight() : '';
			$base.data('ing',true).empty().css('height', base_h);
			len = textNum.length;
			step = len;
			re = Math.ceil(len / 9); 
			(step < 9) ? step = 9 - len : step = 1;	

			// 숫자 단위만큼 
			for (i; i < len; i++) {
				var n = Number(textNum.substr(i, 1)),
					$thisNum, $base_div;
				
				if (isNaN(n)) {
					// 숫자가 아닐때 ', . ' 
					$base.append('<div class="n' + i + '"><div class="ui-count-og" style="top:' + base_h + 'px">' + textNum.substr(i, 1) + '</div></div>');
					$base.find('.n' + i).append('<span>' + textNum.substr(i, 1) + '</span>');
				}
				else {
					// 숫자일때
					$base.append('<div class="n' + i + '"><div class="ui-count-og" style="top:' + base_h + 'px">' + n + '</div></div>');
					$base.find('.n' + i).append('<span>9<br>8<br>7<br>6<br>5<br>4<br>3<br>2<br>1<br>0<br>' + n + '</span>');
					step = step + 1;
				}
				
				$base_div = $base.children('.n' + i);
				$base_div.find('span').wrapAll('<div class="ui-count-num" style="top:' + base_h + 'px; transition:top '+ speed +' cubic-bezier(' + win[global].cubicbeziers[eff] + ');"></div>');
				$thisNum = $base_div.find('.ui-count-num');
				$thisNum.data('height', $thisNum.height()); 
			}

			r = len;
			timer = setInterval(function() {
				count(r)
				r = r - 1; 
				(r < 0) ? clearInterval(timer) : '';
			},150);
			
			
		}
		function count(r){
			var $current_num = $base.children('.n' + r).find('.ui-count-num'),
				num_h = Number($current_num.data('height'));
			$current_num.css('top', (num_h - base_h) * -1); 
			
			if (r === 0) {
				$current_num.one(transitionEnd, function(){
					$base.text(textNum).data('ing', false);
				});
			}
		}
	}
	function createUiCountStep(opt) {
		var $base = $('#' + opt.id),
			countNum = !!opt.value === true ? opt.value : $base.text(),
			count = 0,
			timer, diff, counter;
		
		if ($base.data('ing') !== true) {
			counter = function(){
				diff = countNum - count;
				(diff > 0) ? count += Math.ceil(diff / 20, -2) : '';
				var n = uiComma(count);
				$base.text(n);
				if(count < countNum) {
					timer = setTimeout(function() { 
						counter(); 
					}, 1);
				} else {
					clearTimeout(timer);
				}
			}
			counter();
		}
	}
	function uiComma(n) {
		var parts = n.toString().split(".");
			return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
	}

	//fn scroll move
	function createUiScroll(opt) {
		var v = opt.value || 0,
			s = opt.speed || 600,
			c = opt.callback,
			f = opt.focus,
			$base = $('html, body');

		$base.stop().animate({
			scrollTop : v
		}, s, function(){
			!!c ? c() : '';
			!!f ? $(f).attr('tabindex', 0).focus() : '';
		});
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

	//fn follow
	function createUiFloating(opt) {
		var id = opt.id,
			ps = opt.ps === undefined ? 'bottom' : opt.ps,
			add = opt.add === undefined ? false : opt.add,
			fix = opt.fix === undefined ? true : opt.fix,
			callback = opt.callback === undefined ? false : opt.callback,
			$id = $('#' + id),
			$idwrap = $id.find('.ui-floating-wrap'),
			$add = $('#' + add),
			$addwrap = $add.find('.ui-floating-wrap').length ? $add.find('.ui-floating-wrap') : $add,
			c = 'ui-fixed-' + ps,
			timer;
		
		(!!fix) ? $id.addClass(c) : '';
		
		if ($id.length) {
			clearTimeout(timer);
			timer = setTimeout(act, 300);
		}
		
		$(win).off('scroll.'+ id ).on('scroll.'+ id, function(){
			if ($id.length) {
				act();
				clearTimeout(timer);
				timer = setTimeout(act, 500);
			}
		});
		
		function act(){
			var tt = Math.ceil($id.offset().top),
				th = Math.ceil($idwrap.outerHeight()),
				st = $(win).scrollTop(),
				wh = Math.ceil( win[global].uiCheck.mobile ? window.screen.height : $(win).outerHeight() ),
				dh = Math.ceil($(doc).outerHeight()),
				lh = (!!add) ? $add.outerHeight() : 0 ,
				lt = (!!add) ? dh - ($add.offset().top).toFixed(0) : 0,
				lb = 0, 
				_lb;
			
			//console.log(id, lh, $add.data('fixtop'));

			$id.data('fixbottom', th);
			if ($add.data('fixbottom') === undefined) {
				$add.data('fixbottom', th + $addwrap.outerHeight());
			} 
			(!!add) ? lh = lh + Number($add.data('fixtop') === undefined ? 0 : $add.data('fixtop')) : '';
			(!!callback) ? callback({ id:id, scrolltop:st, boundaryline: tt - lh }) : '';
			$id.css('height', th);

			// 상단으로 고정
			if (ps === 'top') {
				// 고정 > 흐름
				if (fix === true) {
					if (tt - lh <= st) { 
						$id.removeClass(c).data('fixtop', false);
						$idwrap.removeAttr('style');
					} else { 
						$id.addClass(c).data('fixtop', lh);
						$idwrap.css('top', lh);
					}
				} 
				// 흐름 > 고정	
				else {
					if (tt - lh <= st) { 
						$id.addClass(c).data('fixtop', lh);
						$idwrap.css('top', lh);
					} else { 
						$id.removeClass(c).data('fixtop', false);
						$idwrap.removeAttr('style');
					}
				}
			} 
			// 하단으로 고정
			else if (ps === 'bottom') {
				if (!!add) { 
					lb = th + Number($add.data('fixbottom'));
					$id.data('fixbottom', lb);
				}
				_lb = (lb - th < 0) ? 0 : lb - th;
				// 고정 > 흐름
				if (fix === true) {
					if (tt + th + _lb - wh <= st) { 
						$id.removeClass(c);
						$idwrap.removeAttr('style');
					} else {
						$id.addClass(c)
						$idwrap.css('bottom', _lb);
					}
						
				// 흐름 > 고정		
				} else {
					if (tt + th + _lb - wh <= st) {
						$id.addClass(c);
						$idwrap.css('bottom', _lb);
						// if (lt !== 0) {
						// 	if (dh - (lt + wh) < st) {
						// 		$idwrap.css({ position: 'fixed', bottom:'auto' , top: (wh - th) - Math.abs((wh + lt) - (dh - st)) , zIndex: 9999 });
						// 	} else{
						// 		$idwrap.removeAttr('style');
						// 	}
						// }
					} else {
						$id.removeClass(c);
						$idwrap.removeAttr('style');
					}
				}
			}
		}
	}
	function createUiFloatingAside(opt) {
		var id = opt.id,
			st = opt.start,
			et = opt.end,
			$id = $('#' + id),
			timer;
		
		$id.css('top', st);
		
		$(win).off('scroll.'+ id ).on('scroll.'+ id, function(){
			if ($id.length) {
				act();
				clearTimeout(timer);
				timer = setTimeout(act, 30);
			}
		});
		
		function act(){
			var nt = $(win).scrollTop(),
				th = Math.ceil($id.outerHeight()),
				tt = Math.ceil($id.offset().top),
				wh = Math.ceil( browser.mobile ? window.screen.height : $(win).outerHeight() ),
				dh = Math.ceil($(doc).outerHeight()),
				a = dh - wh,
				b = nt + (th - (wh - et));

			if (st < nt) {
				if (a < b && th > (wh - et)) {
					$id.removeAttr('style').css('bottom', et );
				} else {
					$id.addClass('fix').removeAttr('style').css('top', 0);
				}
			} else {
				$id.removeClass('fix').removeAttr('style').css('top', st);
			}
		}
	}

	//fn slider slide
	function createUiSlider(opt) {
		var $slider = $('#' + opt.id),
			$wrap = $slider.find('.ui-slider-wrap'),
			$divwrap = $slider.find('.ui-slider-divwrap'),
			$bg = $wrap.find('.ui-slider-bg'),
			$btn = $wrap.find('button'),
			$btn_s = $wrap.find('.ui-slider-btn-s'),
			$btn_e = $wrap.find('.ui-slider-btn-e'),
			$bar = $bg.find('.ui-slider-bar'),
			vertical = (opt.vertical === undefined) ? false : opt.vertical,//가로세로 type
			range = (opt.range === undefined) ? false : opt.range,//range type
			rev = (opt.reverse === undefined) ? false : opt.reverse,//역순
			stepname = (opt.stepname === undefined) ? false : opt.stepname,
			acc = (opt.acc === undefined) ? false : opt.acc;//select 연결

		rev ? $slider.addClass('type-reverse') : $slider.removeClass('type-reverse');
		vertical ? $slider.addClass('type-vertical') : $slider.removeClass('type-vertical');

		var	step = opt.step,
			id = opt.id,
			min = opt.min,
			max = opt.max,
			tooltip = (opt.txt_e === undefined) ? false : opt.tooltip,
			callback = (opt.callback === undefined) ? false : opt.callback,
			unit = (opt.unit === undefined) ? '' : opt.unit,
			txt_e = (opt.txt_e === undefined) ? '' : opt.txt_e,
			txt_s = (opt.txt_s === undefined) ? '' : opt.txt_s,
			slider_w = !vertical ? $bg.outerWidth() : $bg.outerHeight(),
			step_w = 100 / step,
			unit_sum = (max - min) / step,
			now_s = opt.now[0] < min ? min : opt.now[0],
			now_e = opt.now[1] > max ? max : opt.now[1],
			per_min = ((now_s - min) / (max - min)) * 100,
			per_max = ((now_e - min) / (max - min)) * 100,
			div_w = Math.ceil(slider_w / step),
			maxlimit = 100,
			minlimit = 0,
			lmt_max,
			lmt_min,
			now_sum = [],
			sliderstep = [],
			ps, keyCode, $sel_s, $sel_e, txt_val,
			dir = !vertical ? rev ? 'right' : 'left' : rev ? 'bottom' : 'top',
			siz = !vertical ? 'width' : 'height';

		//percent change
		per_min = perStep(per_min);
		range ? per_max = perStep(per_max) : '';

		//web accessibility : select 
		if (acc) {
			$sel_s = $('[data-sliderselect="' + opt.id + '"]').find('.ui-slider-min');
			range ? $sel_e = $('[data-sliderselect="' + opt.id + '"]').find('.ui-slider-max') : '';
		}
		
		//reset
		$wrap.find('.ui-slider-tooltip').remove();
		$divwrap.find('span').remove();
		
		//tooltip setting
		if (!!tooltip) {
			$wrap.append('<div class="ui-slider-tooltip"></div>');
			sliderTooltip({ unit:unit, now_1:opt.now[0], now_2:opt.now[1], per_min:per_min, per_max:per_max });
			sliderCallback({ callback:callback, now_1:opt.now[0], now_2:opt.now[1] });
		} 
		
		//button setting
		$btn_s.css(dir, per_min + '%').find('.ui-slider-txt').text(((per_min / step_w) * unit_sum) + min);
		range ? $btn_e.css(dir, per_max + '%').find('.ui-slider-txt').text(((per_max / step_w) * unit_sum) + min) : '';
		//range 타입 : 버튼이 겹치는 경우 우선 클릭될 버튼 설정
		if (per_min === per_max && per_min >= 50 && range) {
			$btn_s.addClass('on');
			$btn_e.removeClass('on');
		} else if (per_min === per_max && per_max < 50 && range){
			$btn_s.removeClass('on');
			$btn_e.addClass('on');
		}
		
		//graph bar setting
		!range ? $bar.css(siz,per_min + '%').css(dir,0) : $bar.css(siz,per_max - per_min + '%').css(dir,per_min + '%' );

		//graph step & select option setting
		for (var i = 0; i < step + 1; i++) {
			txt_e = (i === step) ? opt.txt_e : '';
			txt_s = (i === 0) ? opt.txt_s : '';
			txt_val = parseInt(min + (unit_sum * i));
			now_sum.push(txt_val);
			if (stepname) {
				$divwrap.append('<span class="ui-slider-div n'+ i +'" style="'+ dir +':' + step_w * i + '%; '+ siz +':' + div_w + 'px; margin-'+ dir +':' + (div_w / 2) * -1 + 'px"><em>' + stepname[i] + '</em></div>');
			} else {
				$divwrap.append('<span class="ui-slider-div n'+ i +'" style="'+ dir +':' + step_w * i + '%; '+ siz +':' + div_w + 'px; margin-'+ dir +':' + (div_w / 2) * -1 + 'px"><em>' + txt_val + ' ' + txt_e + '' + txt_s + '</em></div>');
			}
			
			sliderstep.push(parseInt(min + (unit_sum * i)));
			if (stepname) {
				if (acc) {
					if (now_s === txt_val) {
						$sel_s.append('<option value="' + txt_val + '" selected>' + stepname[i] + '</option>');
					} else if (now_e < txt_val) {
						$sel_s.append('<option value="' + txt_val + '" disabled>' + stepname[i] + '</option>');
					} else {
						$sel_s.append('<option value="' + txt_val + '">' + stepname[i] + '</option>');
					}
					
					if (now_e === txt_val && range) {
						$sel_e.append('<option value="' + txt_val + '" selected>' + stepname[i] + '</option>');
					} else if (now_s > txt_val && range) {
						$sel_e.append('<option value="' + txt_val + '" disabled>' + stepname[i] + '</option>');
					} else if (range){
						$sel_e.append('<option value="' + txt_val + '">' + stepname[i] + '</option>');
					}
				}
			} else {
				if (acc) {
					if (now_s === txt_val) {
						$sel_s.append('<option value="' + txt_val + '" selected>' + txt_val + '' + opt.unit + ' ' + txt_e +'' + txt_s + '</option>');
					} else if (now_e < txt_val) {
						$sel_s.append('<option value="' + txt_val + '" disabled>' + txt_val + '' + opt.unit + ' ' + txt_e +'' + txt_s + '</option>');
					} else {
						$sel_s.append('<option value="' + txt_val + '">' + txt_val + '' + opt.unit + ' ' + txt_e +'' + txt_s + '</option>');
					}
					
					if (now_e === txt_val && range) {
						$sel_e.append('<option value="' + txt_val + '" selected>' + txt_val + '' + opt.unit + ' ' + txt_e +'' + txt_s + '</option>');
					} else if (now_s > txt_val && range) {
						$sel_e.append('<option value="' + txt_val + '" disabled>' + txt_val + '' + opt.unit + ' ' + txt_e +'' + txt_s + '</option>');
					} else if (range){
						$sel_e.append('<option value="' + txt_val + '">' + txt_val + '' + opt.unit + ' ' + txt_e +'' + txt_s + '</option>');
					}
				}
			}
			
		}
		
		if (acc) {
			$('[data-sliderselect="' + opt.id + '"]').find('.ui-slider-min').on('change', function(){
				per_min = (($(this).val() - min) / (max - min)) * 100;
				per_min = perStep(per_min);
				actSel($(this).find('option:selected').index(), 'min');
				act($btn_s, 'min');
			});
			$('[data-sliderselect="' + opt.id + '"]').find('.ui-slider-max').on('change', function(){
				per_max = (($(this).val() - min) / (max - min)) * 100,
				per_max = perStep(per_max);
				actSel($(this).find('option:selected').index(), 'max');
				act($btn_e, 'max');
			});
		}

		$('body	.ui-slider-wrap button').on('touchmove.uislider', function(e){
			e.preventDefault()}
		);

		$btn.off('mousedown.sliderstart touchstart.sliderstart').on('mousedown.sliderstart touchstart.sliderstart', function(e){
			e.preventDefault();
			var $this = $(this),
				minmax = $this.data('btn'),
				moving = false;
				mConsole.log('touch');
	
			$(doc).off('mousemove.slidermove touchmove.slidermove').on('mousemove.slidermove touchmove.slidermove', function(e){
				moving = true;
				($('html').is('.mb')) ? per($this, event, minmax) : per($this, e, minmax);
				sliderTooltip({ now_1:((per_min / step_w) * unit_sum) + min, now_2:((per_max / step_w) * unit_sum) + min, per_min:perStep(per_min), per_max:perStep(per_max) });
				
			}).off('mouseup.sliderend touchcancel.slidermove touchend.slidermove').on('mouseup.sliderend touchcancel.slidermove touchend.slidermove', function(e){
				$this.closest('.ui-slider').find('.ui-slider-wrap button').removeClass('on');
				moving ? act($this, minmax) : '';
				$(doc).off('mousemove.slidermove mouseup.sliderend touchmove.slidermove');
			});
		});
		
		/* 접근성 이슈 : 키보드와 스크리리더기의 키 중복 */
		$btn_s.off('keyup.' + opt.id).on('keyup.' + opt.id, function(e){
			e.preventDefault();
			keyCode = e.keyCode || e.which;
			ps = per_min;
			
			var $btnthis = $(this),
				$barthis = $btnthis.closest('.ui-slider').find('.ui-slider-bar');

			if(keyCode == 39 || keyCode == 40) {
				per_min = per_min + step_w;
				if (per_min > per_max) {
					per_min = per_max;
					alert('최대값을 수정하세요');
				} else {
					$btnthis.css(dir, per_min + '%').find('.ui-slider-txt').text(((per_min / step_w) * unit_sum) + min);
					$barthis.css(dir,per_min + '%').css(siz,(per_max - per_min) + '%');
				}
			}
			
			if(keyCode == 37 || keyCode ==  38) {
				per_min = per_min - step_w;
				if (per_min < 0) {
					per_min = 0;
					alert('최소값입니다.');
				} else {
					$btnthis.css(dir, per_min + '%').find('.ui-slider-txt').text(((per_min / step_w) * unit_sum) + min);
					$barthis.css(dir,per_min + '%').css(siz,(per_max - per_min) + '%');
				}
			}
			
			sliderTooltip({ now_1:((per_min / step_w) * unit_sum) + min, now_2:((per_max / step_w) * unit_sum) + min, per_min:per_min, per_max:per_max });
			sliderCallback({ callback:callback, now_1:((per_min / step_w) * unit_sum) + min, now_2:((per_max / step_w) * unit_sum) + min });
		});
		
		$btn_e.off('keyup.' + opt.id).on('keyup.' + opt.id, function(e){
			e.preventDefault();
			keyCode = e.keyCode || e.which;
			ps = per_max;
			
			var $btnthis = $(this),
				$barthis = $btnthis.closest('.ui-slider').find('.ui-slider-bar');
			
			if(keyCode == 39 || keyCode == 40) {
				per_max = per_max + step_w;
				if (per_max > 100) {
					per_max = 100;
					alert('최대값입니다');
				} else {
					$btnthis.css(dir, per_max + '%').find('.ui-slider-txt').text(((per_max / step_w) * unit_sum) + min);
					$barthis.css(dir,per_min + '%').css(siz, (per_max - per_min) + '%');
				}
			}
			
			if(keyCode == 37 || keyCode ==  38) {
				per_max = per_max - step_w;
				if (per_max < per_min) {
					per_max = per_min;
					alert('최소값을 수정하세요.');
				} else {
					$btnthis.css(dir, per_max + '%').find('.ui-slider-txt').text(((per_max / step_w) * unit_sum) + min);
					$barthis.css(dir,per_min + '%').css(siz, (per_max - per_min) + '%');
				}
			}
			
			sliderTooltip({ now_1:((per_min / step_w) * unit_sum) + min, now_2:((per_max / step_w) * unit_sum) + min, per_min:per_min, per_max:per_max });
			sliderCallback({ callback:callback, now_1:((per_min / step_w) * unit_sum) + min, now_2:((per_max / step_w) * unit_sum) + min });
		});
		
		function act($this, minmax){
			if (minmax === 'min') {
				per_min = perStep(per_min);
				!range ? $bar.css(siz, per_min + '%').css(dir, 0) : $bar.css(siz, per_max - per_min + '%').css(dir, per_min + '%');
				lmt_min = per_min;
				if (acc) {
					now_sum.forEach(function(v, i){
						(v === ((per_min / step_w) * unit_sum) + min) ? actSel(i, minmax) : '';
					});
				}

				$this.css(dir, per_min + '%').addClass('on').find('.ui-slider-txt').text(((per_min / step_w) * unit_sum) + min);
			} else {
				per_max = perStep(per_max);
				$bar.css(siz, (per_max - per_min) + '%').css(dir,per_min + '%');

				lmt_max = per_max;
				if (acc) {
					now_sum.forEach(function(v, i){
						(v === ((per_max / step_w) * unit_sum) + min) ? actSel(i, minmax): '';
					});
				}
				$this.css(dir, per_max + '%').addClass('on').find('.ui-slider-txt').text(((per_max / step_w) * unit_sum) + min);
			}

			sliderTooltip({ now_1: ((per_min / step_w) * unit_sum) + min, now_2: ((per_max / step_w) * unit_sum) + min, per_min: per_min, per_max: per_max });
			sliderCallback({ callback:callback, now_1:Number(((per_min / step_w) * unit_sum) + min), now_2:Number(((per_max / step_w) * unit_sum) + min) });
		}
		function actSel(n, minmax){
			if (minmax === 'min') {
				range ? $sel_e.find('option').removeAttr('disabled') : '';
				$sel_s.find('option').eq(n).prop('selected', 'selected');
				range ? $sel_e.find('option:lt('+ n +')').prop('disabled', 'disabled') : '';
			} else {
				$sel_s.find('option').removeAttr('disabled');
				$sel_e.find('option').eq(n).prop('selected', 'selected');
				$sel_s.find('option:gt('+ n +')').prop('disabled', 'disabled');
			}
		}
		function perStep(v){
			var n = ((v % step_w) >= step_w / 2) ? 1 : 0;
			return (Math.floor(v / step_w) + n) * step_w;
		}
		function per($this, e, minmax){
			var value_l;
			slider_w = !vertical ? $bg.outerWidth() : $bg.outerHeight();
			if (!vertical) {
				if (e.touches !== undefined) {
					value_l = e.touches[0].pageX - $bg.offset().left - 0;
				}
				if (e.touches === undefined) {
					if (e.pageX !== undefined) {
						value_l = e.pageX - $bg.offset().left - 0;
					}
					//ie
					if (e.pageX === undefined) {
						value_l = e.clientX - $bg.offset().left - 0;
					}
				}
			} else {
				if (e.touches !== undefined) {
					value_l = e.touches[0].pageY - $bg.offset().top - 0;
				}
				if (e.touches === undefined) {
					if (e.pageX !== undefined) {
						value_l = e.pageY - $bg.offset().top - 0;
					}
					//ie
					if (e.pageX === undefined) {
						value_l = e.clientY - $bg.offset().top - 0;
					}
				}
			}

			ps = (value_l <= 0) ? 0 : (value_l >= slider_w) ? slider_w - 0 : value_l;
			ps = (ps / slider_w) * 100;
			rev ? ps = 100 - ps : ''; 
			ps > 50 ? Math.floor(ps/10) * 10 : Math.ceil(ps/10) * 10;
			ps = ps.toFixed(0);
			ps = ps < 0 ? 0 : ps > 100 ? 100 : ps;


			if (minmax === 'min') {
				lmt_min = 0;
				isNaN(lmt_max) ? lmt_max = per_max : '';
				ps * 1 >= lmt_max * 1 ? ps = lmt_max: '';
				per_min = ps; 
				!range ? $bar.css(siz, per_min + '%').css(dir, 0) : $bar.css(siz, lmt_max - per_min + '%').css(dir, per_min + '%');
			}  
			 
			if (minmax === 'max') {
				lmt_max = 100;
				isNaN(lmt_min) ? lmt_min = per_min : '';
				ps * 1 <= lmt_min * 1 ? ps = lmt_min: '';
				per_max = ps;
				$bar.css(siz, per_max - per_min + '%');
			}
			$this.css(dir, ps + '%');
		}

		function sliderCallback(opt){
			$(doc).off('mouseup.sliderend touchcancel.slidermove touchend.slidermove');
			opt.callback ? opt.callback({ id:id, per_min:per_min, per_max:per_max, min: opt.now_1, max: opt.now_2 }) : '';
		}

		function sliderTooltip(opt){
			var $tooltip = $('#' + id).find('.ui-slider-tooltip'),
				tooltip_w, 
				bar_w,
				timer, 
				per_min = opt.per_min,
				per_max = opt.per_max,
				n_min = opt.now_1,
				n_max = opt.now_2,
				in_s = (per_min === 0) ? txt_s : '',
				in_e = (per_max === 100) ? txt_e : '',
				in_se = (per_max === 0) ? txt_s : (per_min === 100) ? txt_e : '';

			!range ? in_e = (per_min === 100) ? txt_e : '' : '';

			if (per_min === 0 && per_max === 100) {
				$tooltip.text('전체');
			} else if (n_min === n_max) {
				$tooltip.text(n_min.toFixed(0) + '' + unit + ' ' + in_se);
			} else {
				if (!range) {
					$tooltip.text(n_min.toFixed(0) + '' + unit + '' + in_s + '' + in_e);
				} else {
					$tooltip.text(n_min.toFixed(0) + '' + unit + '' + in_s + ' ~ '+ n_max.toFixed(0) + '' + unit + '' + in_e);
				}
			}

			clearTimeout(timer);
			timer = setTimeout(function(){
				var tt_l, tt_ml;

				if (!vertical) {
					tooltip_w = $tooltip.outerWidth();
					bar_w = $('#' + id).find('.ui-slider-bar').outerWidth();
				} else {
					tooltip_w = $tooltip.outerHeight();
					bar_w = $('#' + id).find('.ui-slider-bar').outerHeight();
				}

				if (!range) {
					tt_l = per_min + '%';
					tt_ml = (per_min === 0) ? 0 : (per_min === 100) ? tooltip_w * -1 : (tooltip_w / 2) * -1;
				} else {
					if (per_min === 0 && tooltip_w > bar_w) {
						tt_l = '0%';
						tt_ml = 0;
					} else if (per_max === 100 && tooltip_w > bar_w) {
						tt_l = '100%';
						tt_ml = tooltip_w * -1;
					} else {
						tt_l = per_min + ((per_max - per_min)/ 2) + '%';
						tt_ml = (tooltip_w / 2) * -1;
					}
				}

				$tooltip.css(dir, tt_l).css('margin-' + dir, tt_ml);
			},0);
		}
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

		function reLaypop(){
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
		}
		
		clearTimeout(timer);
		timer = setTimeout(function(){
			reLaypop(); //크기 재설정.
			win[global].uiFocusHold({ selector:'#'+opt.id });
		},0);
		
		$(win).resize(function(){
			//console.log('resize')
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
			});
			$('.modal-backdrop').css('z-index', 1000 - layN);
		}
		function closed(){
			(layRemove === true) ? $lay.remove() : $lay.removeAttr('style');
			(!$(endfocus).length) ? endfocus = 'body' : '';

			$body.removeClass('modal-open');
			$(doc).off('keyup.uilayerpop'); //esc키 이벤트 취소
			//모바일에서 포커스를 주기 위해서는 endfocus 에 직접 아이디를 넣어줘야지 실행됨.
			//흠 layOpt.endfocus 값을 왜 인식을 못할까?
			if ((wst < sct && wst + winH > sct)) {
				$(endfocus).attr('tabindex', 0).focus();
			} else {
				$('html, body').stop().animate({
					 scrollTop : sct
				}, 200, function(){
					 $(endfocus).attr('tabindex', 0).focus();
				});
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
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiForm({ id:'name', all:true, callback:function(v){...} });",
				"- id [String]: #을 제외한 아이디명만 입력, 값이 없을 경우는 기본값 (!선택- 기본 input[type='checkbox'], input[type='radio'])",
				"- all [Boolean]: true 전체체크사용 (!선택, 체크박스에서만 사용)",
				"- callback [Function]: 콜백함수 실행 (!선택)",
				"※ 라디오,체크박스"
			]);
			//return false;
		}
		
		//특정 아이디가 없다면 모든 checkbox, radio 를 대상
		var selector = (opt === undefined) ? 'input[type="checkbox"], input[type="radio"]' : (opt.id === undefined) ? 'input[type="checkbox"], input[type="radio"]' : '#' + opt.id, 
			callback = (opt === undefined) ? null : (opt.callback === undefined) ? null : opt.callback,
			allcheck = (opt === undefined) ? null : (opt.all === undefined) ? false : opt.callback,
			$inp = $(selector);

		$inp.each(function(i){
			$inp.eq(i).data('callback', callback).data('allcheck', callback);
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
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiFormCheck({ id:'name', checked:true, callback:function(v){...} });",
				"- id [String]: #을 제외한 아이디명만 입력(!필수)",
				"- checked [Boolean]: 체크상태 설정(!선택)",
				"- callback [Function]: 콜백함수 실행 (!선택)",
				"※  드롭다운 toggle. id옵션만 주면 기존 설정으로 동작"
			]);
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
	function uiFormCheckAct(opt){
		var $inp = $('#'+ opt.id),
			inpName = $inp.attr('name'),
			$inps = $('input[name="' + inpName + '"]'),
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
			$label = $('label[for="'+ id +'"]'), // 연결된 label
			allcheck = $inp.data('callback'),
			callback = $inp.data('callback'),
			act = opt.act === undefined ? false : opt.act,
			$allItemNot,
			dataChecked,
			checkClass;

		//전체체크 
		if (!!allcheck === true){
			//전체체크에 포함되어 있으면서 disabled가 아닌 input
			$allItemNot = $('input[name=' + id + ']:not(:disabled)');
			
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

	//fn uiDropdown
	win[global].uiDropdown.root = {}
	function createUiDropdown(opt){
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiDropdown({ id:'name', eff:'base', ps:'bl', offset:true, besides:true });",
				"- id [String]: #을 제외한 아이디명만 입력(!필수)",
				"- eff [String]: 나타다고 사라지는 효과 (!선택 - 기본값 base)",
				"  base, fade, (st, sb, sr, sl - slide effect)",
				"- ps [String]: 드롭다운 위치 (!선택 - 기본값 bl)",
				"  tl,tc,tr, bl,bc,br, lt,lm,lb, rt,rm,rb",
				"- besides [Boolean]: true일 경우 선택된 이외의 드롭다운은 닫힘, (!선택 - 기본값 true)",
				"- offset [Boolean]: 위치값 구하기 true이면 절대위치, false 상대위치 (!선택 - 기본값 false)",
				"※  드롭다운"
			]);
			return false;
		}
		
		var id = '#' + opt.id,
			$btn = $(id),
			$pnl = $(id + '-pnl'),
			eff = (opt.eff === undefined) ? 'base' : opt.eff,
			ps = (opt.ps === undefined) ? 'bl' : opt.ps,
			besides = (opt.besides === undefined) ? true : opt.besides,
			offset = (opt.offset === undefined) ? false : opt.offset,
			inner = false, //dropdown in dropdown
			eventType = 'click.uidropdown',
			timer; 
	
		//set up
		win[global].uiDropdown.root[opt.id] = opt.id;
		$btn
		.attr('aria-haspopup', true).attr('aria-expanded', false)
		.data('opt', {
			id:opt.id, ps:ps, eff:eff, besides:besides, offset:offset, ing:false, expanded:false
		});
		$pnl
		.attr('aria-hidden', true).attr('aria-labelledby', opt.id).addClass(ps)
		.data('opt', {
			ps:ps, eff:eff, besides:besides, offset:offset, ing:false
		});

		//event
		$btn.off('click.dropdown').on('click.dropdown', function(e){
			var $this = $(this),
				thisOpt = $this.data('opt');
			
			inner = ($this.closest('.ui-drop-pnl').length) ? true : false;
			thisOpt.inner = inner;

			if (!thisOpt.ing) {
				//thisOpt.expanded === undefined ? thisOpt.view = false : '';
				win[global].uiDropdownToggle(thisOpt);
			}
		});
		$('.ui-drop-close').off('click.dropdown').on('click.dropdown', function(e){
			var $pnl_ = $(this).closest('.ui-drop-pnl'),
				thisOpt = $('#' + $pnl_.data('id')).data('opt');
			
			thisOpt.ing = false;
			thisOpt.expanded = true;

			win[global].uiDropdownToggle(thisOpt);
			$('#' + $pnl_.data('id')).focus();
		});
	}
	function createUiDropdownToggle(opt){
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiDropdownToggle({ id:'name', eff:'base', ps:'bl', offset:true, besides:true });",
				"- id [String]: #을 제외한 아이디명만 입력(!필수)",
				"- eff [String]: 나타다고 사라지는 효과 (!선택 - 기본값 base)",
				"  base, fade, (st, sb, sr, sl - slide effect)",
				"- ps [String]: 드롭다운 위치 (!선택 - 기본값 bl)",
				"  tl,tc,tr, bl,bc,br, lt,lm,lb, rt,rm,rb",
				"- besides [Boolean]: true일 경우 선택된 이외의 드롭다운은 닫힘, (!선택 - 기본값 true)",
				"- offset [Boolean]: 위치값 구하기 true이면 절대위치, false 상대위치 (!선택 - 기본값 true)",
				"※  드롭다운 toggle. id옵션만 주면 기존 설정으로 동작"
			]);
			return false;
		}
		
		var id = '#' + opt.id,
			$btn = $(id),
			$pnls = $('.ui-drop-pnl'),
			$pnl = $('.ui-drop-pnl[data-id="'+ opt.id +'"]'),
			expanded = opt.expanded === undefined ? !!$btn.data('opt').expanded ? $btn.data('opt').expanded : false : opt.expanded,
			ps = (opt.ps === undefined) ? !!$btn.data('opt').ps ? $btn.data('opt').ps : 'bl' : opt.ps,
			eff = (opt.eff === undefined) ? !!$btn.data('opt').eff ? $btn.data('opt').eff :'base' : opt.eff,
			besides = (opt.besides === undefined) ? true : opt.besides,
			offset = (opt.offset === undefined) ? false : opt.offset,
			inner = (opt.inner === undefined) ? false : opt.inner,
			btn_w = Math.ceil($btn.outerWidth()),
			btn_h = Math.ceil($btn.outerHeight()),
			btn_t = Math.ceil($btn.position().top),
			btn_l = Math.ceil($btn.position().left),
			pnl_w = Math.ceil($pnl.outerWidth()),
			pnl_h = Math.ceil($pnl.outerHeight()),
			timer,
			eff1 = 10, 
			eff2 = 100;
		
		//offset -> position
		if (offset) {
			btn_t = Math.ceil($btn.offset().top);
			btn_l = Math.ceil($btn.offset().left);
		}
		
		//test 용
		!!$btn.attr('data-ps') ? ps = $btn.attr('data-ps') : '';
		
		expanded ? hide() : show();

		function show(){
			var org_t, org_l;
		
			besides && !inner ? win[global].uiDropdownHide() : '';
			win[global].uiFocusHold({ selector:'.ui-drop-pnl[data-id="'+ opt.id +'"]' });

			$btn.attr('aria-expanded', true);
			$pnl.attr('aria-hidden', true).attr('tabindex',-1);
			$btn.data('opt').ing = true;
			$btn.data('opt').expanded = true;
			($btn.closest('.ui-drop-pnl').length > 0) ? $btn.data('opt').ing = false : '';
			
			switch (ps) {
				case 'bl': $pnl.css({ top: btn_t + btn_h, left: btn_l }); break;
				case 'bc': $pnl.css({ top: btn_t + btn_h, left: btn_l - ((pnl_w - btn_w) / 2) }); break;
				case 'br': $pnl.css({ top: btn_t + btn_h, left: btn_l - (pnl_w - btn_w) }); break;
				case 'tl': $pnl.css({ top: btn_t - pnl_h, left: btn_l }); break;
				case 'tc': $pnl.css({ top: btn_t - pnl_h, left: btn_l - ((pnl_w - btn_w) / 2) }); break;
				case 'tr': $pnl.css({ top: btn_t - pnl_h, left: btn_l - (pnl_w - btn_w) }); break;
				case 'rt': $pnl.css({ top: btn_t, left: btn_l + btn_w }); break;
				case 'rm': $pnl.css({ top: btn_t - ((pnl_h - btn_h) / 2), left:  btn_l + btn_w  }); break;
				case 'rb': $pnl.css({ top: btn_t - (pnl_h - btn_h), left: btn_l + btn_w }); break;
				case 'lt': $pnl.css({ top: btn_t, left: btn_l - pnl_w }); break;
				case 'lm': $pnl.css({ top: btn_t - ((pnl_h - btn_h) / 2), left: btn_l - pnl_w  }); break;
				case 'lb': $pnl.css({ top: btn_t - (pnl_h - btn_h), left: btn_l - pnl_w }); break; 
			}
			
			org_t = parseInt($pnl.css('top')),
			org_l = parseInt($pnl.css('left'));
			
			switch (eff) {
				case 'base': $pnl.stop().show(0,showend); break;
				case 'fade': $pnl.stop().fadeIn(eff2, showend); break;
				case 'st': $pnl.css({ top: org_t - eff1, opacity: 0, display: 'block' }).stop().animate({ top: org_t, opacity: 1 },eff2, showend); break;
				case 'sb': $pnl.css({ top: org_t + eff1, opacity: 0, display: 'block' }).stop().animate({ top: org_t, opacity: 1 },eff2, showend); break;
				case 'sl': $pnl.css({ left: org_l + eff1, opacity: 0, display: 'block' }).stop().animate({ left: org_l, opacity: 1 },eff2, showend); break;
				case 'sr': $pnl.css({ left: org_l - eff1, opacity: 0, display: 'block' }).stop().animate({ left: org_l, opacity: 1 },eff2, showend); break;
			}

			if (!inner) {
				clearTimeout(timer);
				timer = setTimeout(function(){
					win[global].uiBackdrop({ name:opt.id, selector:'.ui-drop-pnl[data-id="'+ opt.id +'"]', callback:callbackHide}); 
				},0);
			}
			function showend(){
				$pnl.attr('aria-hidden', false).attr('tabindex',0).focus();
			}
			function callbackHide(v){
				v ? win[global].uiDropdownHide() : '';
			}
	
		}
		
		function hide(){
			var org_t = parseInt($pnl.css('top')),
				org_l = parseInt($pnl.css('left'));
			
			($btn.closest('.ui-drop-pnl').length === 0) ? $(doc).off('click.uibackdrop') : '';

			switch (eff) {
				case 'base': $pnl.stop().hide(0).removeAttr('style'); break;
				case 'fade': $pnl.stop().fadeout(eff2).removeAttr('style'); break;
				case 'st': $pnl.stop().animate({ top: org_t - eff1, opacity: 0 },eff2, hidend); break;
				case 'sb': $pnl.stop().animate({ top: org_t + eff1, opacity: 0 },eff2, hidend); break;
				case 'sl': $pnl.stop().animate({ left: org_l + eff1, opacity: 0 },eff2, hidend); break;
				case 'sr': $pnl.stop().animate({ left: org_l - eff1, opacity: 0 },eff2, hidend); break;
			}
			function hidend(){
				$pnl.hide().removeAttr('style'); 
				$btn.data('opt').ing = false;
				$btn.data('opt').expanded = false;
				$btn.attr('aria-expanded', false);
				$pnl.attr('aria-hidden', false).attr('tabindex',0).focus();
			}
		}
	}
	function createUiDropdownHide(){
		$('.ui-drop').each(function(i){
			var thisOpt = $('.ui-drop').eq(i).data('opt');

		 	if (thisOpt !== undefined) {
		 		thisOpt.expanded = true;
				win[global].uiDropdownToggle(thisOpt);
		 	}
		});
	}
	
	
	//fn uiSlot
	win[global].uiSlot.play = {}
	function createUiSlot(opt){
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiSlot({ id:'아이디명', auto:true/false, single:true/false });",
				"- id: #을 제외한 아이디명만 입력(!필수)",
				"- auto: true일 경우 자동실행, (!선택 - 기본값 false)",
				"- single: true일 경우 하나만 노출, false일 경우 걸쳐보이는...(!선택 - 기본값 true)",
				"※  슬롯머신효과"
			]);
			return false;
		}
		
		var $slot = $('#' + opt.id),
			current = opt.current,
			auto = opt.auto === undefined ? false : opt.auto,
			single = opt.single === undefined ? true : opt.single,
			$wrap = $slot.find('.ui-slot-wrap'),
			$item = $wrap.find('.ui-slot-item'),
			item_h = $item.outerHeight(),
			len = $item.length,
			cut, clone;
		
		//common set up
		$slot.data('n', len).data('single', single);
		$item.each(function(i){
			$(this).attr('n', i + 1).data('n', i + 1);
		});
		
		//single or multi set up
		if (single) {
			$wrap.css({ 
				marginTop: 0, 
				top: (current - 1) * item_h * -1
			});
			itemClone({ n: 0, append: true });
		} else {
			$wrap.css({ 
				marginTop: ((item_h/2) + item_h) * -1, 
				top: 0
			});
			if (current - 1 > 0) {
				for(var i = 0; i < current - 1; i++){
					// 2일경우
					if (current - 2 === i) {
						itemClone({ n: i - 1, append: false });
						itemClone({ n: i, append: true });
						itemClone({ n: i + 1, append: true });
						itemClone({ n: i + 2, append: true });
					} else {
						cut = $item.eq(i).detach();
						$wrap.append(cut);
					}
				}
			} else {
				itemClone({ n: - 1, append: false });
				itemClone({ n: - 2, append: false });
				itemClone({ n: current - 1, append: true });
				itemClone({ n: current, append: true });
			}
		}

		function itemClone(opt) {
			//var stickitem = opt.append ? 'append' : 'prepend';
			clone = $item.eq(opt.n).clone().addClass('clone').removeAttr('n');
			$wrap[opt.append ? 'append' : 'prepend'](clone);
		}
		auto ? win[global].uiSlotStart(opt) : '';
	}
	function createUiSlotStart(opt){
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiSlotStart({ id:'아이디명' });",
				"- id: #을 제외한 아이디명만 입력(!필수)",
				"※  슬롯머신 시작"
			]);
			return false;
		}
		
		var $slot = $('#' + opt.id),
			$wrap = $slot.find('.ui-slot-wrap'),
			$item = $wrap.find('.ui-slot-item'),
			single = $slot.data('single'),
			item_h = $item.outerHeight(),
			len = $item.length,
			wrap_h = len * item_h,
			h = 0;
		
		var s = 500;
		if (!$slot.data('ing')) {
			$slot.data('ing', true);
			win[global].uiSlot.play[opt.id] = win.setInterval(stepSlot, s);
		}
		
		function stepSlot(){
			$wrap.css('top', 0).stop().animate({
				top: single ? item_h * (len - 1) * -1 : Math.ceil(item_h * (len - 3) * -1)
			},s , 'linear') ;
			win.clearInterval(win[global].uiSlot.play[opt.id]);
			win[global].uiSlot.play[opt.id] = win.setInterval(stepSlot, s);
		}
	}
	function createUiSlotStop(opt){
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiSlotStop({ id:'아이디명', callback:function(result){...} });",
				"- id: #을 제외한 아이디명만 입력(!필수)",
				"- callback: 콜백함수 선택값 전달 (!선택)",
				"※  슬롯머신 정지"
			]);
			return false;
		}
		
		var $slot = $('#' + opt.id),
			$wrap = $slot.find('.ui-slot-wrap'),
			$item = $wrap.find('.ui-slot-item'),
			item_h = $item.outerHeight(),
			len = $item.length,
			
			callback = opt.callback,
			single = $slot.data('single'),
			n = $slot.data('n'),
			result = Math.floor(Math.random() * n) + 1,
			index =  $wrap.find('.ui-slot-item[n="' + result + '"]').index(),
			x = single ? index : index - 2,
			timer, t, s = 500;
		
		$slot.data('ing', false);
		$item.removeClass('selected');
		single ? $wrap.css('margin-top', 0): '';

		clearTimeout(timer);
		timer = setTimeout(function(){
			win.clearInterval(win[global].uiSlot.play[opt.id]);
			t = item_h * x * -1 > 0 ? item_h * x : item_h * x * -1;
			$wrap.stop().animate({
				top: t
			},1000, 'easeOutQuad', function(){
				$wrap.find('.ui-slot-item').eq(index).addClass('selected');
				callback(result);
			});
		},10);
		
	}
	
	//fn uiCardList
	function createUiCardList(opt){
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiCardList({ id:'아이디명', margin:'', response:true/false );",
				"- id: 움직일 위치(!필수)",
				"- margin: 아이템 간격(!선택)",
				"- response: resize 될 떄 재구성 여부 (!선택 - 기본값 true)",
				"※  카드리스트 첫열 설정"
			]);
			return false;
		}
		
		var $base = $('#' + opt.id), 
			$item = $base.find('.ui-cardlist-item'),
			mg = opt.margin === undefined ? 0 : opt.margin,
			re = opt.response === true ? 0 : opt.response,
			wrap_w  = $base.outerWidth(),
			item_w  = $item.outerWidth(),
			item_sum = $item.length,
			item_col = Math.floor(wrap_w / (item_w + mg)),
			item_row = (item_sum / item_col) + (item_sum % item_col) ? 1 : 0,
			item_top = [],
			i = 0,
			timer;

		$base.addClass('trans');
		for (i = 0; i < item_col; i++) {
			$item.eq(i).attr('role','listitem').css({
				position: 'absolute',
				left : (item_w + mg) * i,
				top : 0,
				opacity: 1
			});
			item_top[i] = $item.eq(i).outerHeight() + mg;
		}

		$base.data('opt', { 'wrap': wrap_w, 'width': item_w, 'top': item_top, 'row': item_row, 'col': item_col, 'mg': mg });
		win[global].uiCardListRow({ id: opt.id });
		
		if (opt.response) {
			$(win).resize(function(){
				clearTimeout(timer);
				timer = setTimeout(function(){
					win[global].uiCardList({ id : opt.id, margin: opt.margin });
				},100);
				$base.find('.ui-cardlist-wrapper').css('height', Math.max.apply(null, item_top));
			});
		}	
	}
	function createUiCardListRow(opt){
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiCardListRow({ id:'아이디명' );",
				"- id: 움직일 위치(!필수)",
				"※  카드리스트 추가"
			]);
			return false;
		}
		
		var $base = $('#' + opt.id), 
			$item = $base.find('.ui-cardlist-item'),
			dataOpt = $base.data('opt'),
			wrap_w = dataOpt.wrap,
			item_w = dataOpt.width,
			item_sum = $item.length,
			item_col = dataOpt.col,
			item_row = dataOpt.row,
			item_top = dataOpt.top,
			mg = dataOpt.mg,
			i = item_col,
			minH, nextN, item_h,timer;

		clearTimeout(timer);
		timer = setTimeout(function(){
			for (i; i < item_sum; i++) {
				minH = Math.min.apply(null, item_top)
				nextN = item_top.indexOf(minH);
				item_h = Number($item.eq(i).outerHeight() + mg);
				
				$item.eq(i)
				.css({
					position: 'absolute',
					left : (item_w * nextN) + (mg * nextN),
					top : item_top[nextN],
					opacity: 1
				});
				
				item_top[nextN] = Number(minH + item_h);
			}
			$base
			.data('opt', { 'wrap':wrap_w, 'width':item_w, 'top':item_top, 'row':item_row, 'col':i, 'mg':mg })
				.find('.ui-cardlist-wrapper')
				.css('height', Math.max.apply(null, item_top));
		},300);

		
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
	
	//fn uiScroll
	function createUiScroll(opt){
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiScroll({ value:0, speed:600, focus:'#name', callback:function(){...} );",
				"- value: 움직일 위치값(!선택 - 기본값 0)",
				"- speed: 속도(!선택 - 기본값 600)",
				"- ps: 방향(!선택 - 기본값 'top')",
				"- focus: 포커스이동  (!선택)",
				"- callback: 콜백함수 (!선택)"
			]);
			return false;
		}

		var v = opt.value || 0,
			s = opt.speed || 1000,
			c = opt.callback === undefined ? false : opt.callback,
			p = opt.ps === undefined ? 'top' : opt.ps,
			f = opt.focus === undefined ? false : '#' + opt.focus,
			t = opt.target === undefined ? 'html, body' : '#' + opt.target,
			$base = $(t),
			overlap = false;
		
		if (p === 'top') {
			$base.stop().animate({ 
				scrollTop : v 
			}, { 
				duration: s,
				step: function(now) { 
					!!c && now !== 0 ? c({ scrolltop:Math.ceil(now), complete:false }) : '';
				},
				complete: function(){
					if (overlap) {
						!!c ? c({ focus:f, complete:true }) : '';
						!!f ? $(f).attr('tabindex', 0).focus() : '';
					} else {
						overlap = true;
					}
				}
			});
		} else if (p === 'left') {
			$base.stop().animate({ 
				scrollLeft : v 
			}, { 
				duration: s,
				step: function(now) { 
					!!c && now !== 0 ? c({ scrollleft:Math.ceil(now), complete:false }) : '';
				},
				complete: function(){
					!!c ? c({ focus:f, complete:true }) : '';
					!!f ? $(f).attr('tabindex', 0).focus() : '';
				}
			});
		}
		
	}
	
	//fn uiProject
	function createUiProject(opt){
		//option guide
		if (opt === undefined) {
			win[global].consoleGuide([
				global + ".uiProject({ id:'id name', list:{'list':[{'name':'..', 'ms':'1', 'ds':'1', 'me':'12', 'de':'31',},{}...]} );",
				"- id: #을 제외한 아이디명만 입력(!필수)",
				"- list: json type. name[프로젝트명], ms[시작월], ds[시작일], me[종료월], de[종료일] (!필수)",
				"※ 일정 그래프 사용"
			]);
			return false;
		}
		
		var $id = $('#' + opt.id),
			project = opt.list.list,
			len = project.length,
			i = 0, dl = '', w, l, d_e, d_s;
	
		for (i = 0; i < len; i++){
			d_e = project[i].de === '~' ? 0 : project[i].de
			l = 8.3 * (project[i].ms - 1)
			w = Number((8.3 * (project[i].me)) - l)
			dl += '<dl>';
			dl += '<dt>'+ project[i].name +'</dt>';
			dl += '<dd>';
			dl += '<div class="bar n'+ i +'" style="left:'+ l +'%; width:0%">';
			dl += '<b>'+ project[i].ds +'</b><b>'+ project[i].de +'</b>';
			dl += '</div>';
			dl += '</dd>';
			dl += '</dl>';
			$id.append(dl);
			dl = '';
		}
		
		setTimeout(function(){
			for (i = 0; i < len; i++){
				l = 8.3 * (project[i].ms - 1);
				w = Number((8.3 * (project[i].me)) - l);
				$('#' + opt.id).find('.n' + i).css('width', w + '%');
			}
		},500);
	}
	
	//fn menu
	function createUiMenu(opt){
		var dataExecel;
		
		win[global].uiAjax({ url: opt.url, type: opt.type, page:false, callback: callback });
		function callback(v){
			dataExecel = v;

			var len = dataExecel.menu.length,
				i = 0,
				d1, d2, d3, d4, d5, d6, d7, d8, href, id,
				f1 = true,
				f2 = true,
				f3 = true,
				f4 = true,
				navHtml = '',
				d1Html = '';

			for (i = 0; i < len; i++) {
				d1 = dataExecel.menu[i].d1;
				d2 = dataExecel.menu[i].d2;
				d3 = dataExecel.menu[i].d3;
				d4 = dataExecel.menu[i].d4;
				id = dataExecel.menu[i].id;
				href = dataExecel.menu[i].href;
				
				if (d1 !== '') {
					if (f1) {
						navHtml = '<ul class="ui-menu-d1">';
						navHtml += '<li>';
						f1 = false;
					} else {
						f4 ? '' : navHtml += '</li></ul>';//depth4 닫기
						f3 ? '' : navHtml += '</li></ul>';//depth3 닫기
						f2 ? '' : navHtml += '</li></ul>';//depth2 닫기
						f2 = f3 = f4 = true;
						navHtml += '</li><li>';
					}
					navHtml += (href === '') ? '<button type="button" class="ui-menu-btn" id="' + id +'">' + d1 + '</button>' : '<a href="' + href + '" class="ui-menu-btn" id="' + id +'">' + d1 + '</a>';
				}
				if (d2 !== '') {
					if (f2) {
						navHtml += '<ul class="ui-menu-d2">';
						navHtml += '<li>';
						f2 = false;
					} else {
						f4 ? '' : navHtml += '</li></ul>';//depth4 닫기
						f3 ? '' : navHtml += '</li></ul>';//depth3 닫기
						f3 = f4 = true;
						navHtml += '</li><li>';
					}
					navHtml += (href === '') ? '<button type="button" class="ui-menu-btn" id="' + id +'">' + d2 + '</button>' : '<a href="' + href + '" class="ui-menu-btn" id="' + id +'">' + d2 + '</a>';
				}
				if (d3 !== '') {
					if (f3) {
						navHtml += '<ul class="ui-menu-d3">';
						navHtml += '<li>';
						f3 = false;
					} else {
						f4 ? '' : navHtml += '</li></ul>';//depth4 닫기
						f4 = true;
						navHtml += '</li><li>';
					}
					navHtml += (href === '') ? '<button type="button" class="ui-menu-btn" id="' + id +'">' + d3 + '</button>' : '<a href="' + href + '" class="ui-menu-btn" id="' + id +'">' + d3 + '</a>';
				}
				if (d4 !== '') {
					if (f4) {
						navHtml += '<ul class="ui-menu-d4">';
						navHtml += '<li>';
						f4 = false;
					} else {
						navHtml += '</li><li>';
					}
					navHtml += (href === '') ? '<button type="button" class="ui-menu-btn" id="' + id +'">' + d4 + '</button>' : '<a href="' + href + '" class="ui-menu-btn" id="' + id +'">' + d4 + '</a>';
				}



			}
			navHtml += '</ul>';
			$('#' + opt.id).html(navHtml);
			navHtml = '';


		}
	}

	//fn codinglist
	function createUiCodinglist(opt){
		var dataExecel;
		
		win[global].uiAjax({ url: opt.url, type: opt.type, page:false, callback: callback });
		function callback(v){
			dataExecel = v;
			
			var len = dataExecel.list.length,
				i = 0,
				state, date, enddate, worker, id, idm, page, memo,
				d1, d2, d3, d4, d5, d6, d7, d8, 
				r1, r2, r3, r4,
				d1_, d2_, d3_, d4_, d5_, d6_, d7_, d8_,
				c1, c2, c3, c4, c5, c6, c7, c8, 
				endsum = 0, delsum = 0, tstsum = 0, ingsum = 0, watsum = 0, 
				ctg_state = [],
				ctg_worker = [],
				ctg_dev = [],
				ctg_date = [],
				ctg_enddate = [],
				ctg_mdate = [],
				ctg_menu = [],
				cls2 = '',
				cls = '',
				root = '',
				depth = '',
				table = '';

			for (i = 0; i < len; i++) {
				state = dataExecel.list[i].state || ''; 		//진행상태
				date = dataExecel.list[i].date || '';			//예정일
				enddate = dataExecel.list[i].enddate || '';		//종료일
				worker = dataExecel.list[i].worker || '';				//퍼블리셔 담당자
				id = dataExecel.list[i].id || '';				//화면아이디
				idm = dataExecel.list[i].idm || '';				//화면아이디 (모바일)
				page = dataExecel.list[i].page || '';			//레이어팝업(lp), 윈도우팝업(wp), 중복페이지(ol)
				memo = dataExecel.list[i].memo || '';			//전달내용					
				d1 = dataExecel.list[i].d1 || '';				//depth1
				d2 = dataExecel.list[i].d2 || '';				//depth2
				d3 = dataExecel.list[i].d3 || '';				//depth3
				d4 = dataExecel.list[i].d4 || '';				//depth4
				d5 = dataExecel.list[i].d5 || '';				//depth5
				d6 = dataExecel.list[i].d6 || '';				//depth6
				d7 = dataExecel.list[i].d7 || '';				//depth7
				d8 = dataExecel.list[i].d8 || '';				//depth8
				r1 = dataExecel.list[i].r1 || '';				//경로1
				r2 = dataExecel.list[i].r2 || '';				//경로2
				r3 = dataExecel.list[i].r3 || '';				//경로3
				r4 = dataExecel.list[i].r4 || '';				//경로4
				
				//경로 합치기
				root += '/' + r1;
				(dataExecel.list[i].r2 !== undefined && dataExecel.list[i].r2 !== '') ? root += '/' + r2 : '';
				(dataExecel.list[i].r3 !== undefined && dataExecel.list[i].r3 !== '') ? root += '/' + r3 : '';
				(dataExecel.list[i].r4 !== undefined && dataExecel.list[i].r4 !== '') ? root += '/' + r4 : '';
				
				//빈값에 해당 경로 depth 넣기
				(d1 !== '') ? d1_ = dataExecel.list[i - 1 < 0 ? 0 : i ].d1 : d1 = d1_;
				
				(dataExecel.list[i].d1 === '') ? 
				(d2 !== '') ? d2_ = dataExecel.list[i - 1 < 0 ? 0 : i ].d2 : d2 = d2_ :
				(!!dataExecel.list[i - 1 < 0 ? 0 : i ].d2) ? d2_ = dataExecel.list[i - 1 < 0 ? 0 : i ].d2 : d2_ = '';

				(dataExecel.list[i].d1 === '' && dataExecel.list[i].d2 === '') ? 
				(d3 !== '') ? d3_ = dataExecel.list[i - 1 < 0 ? 0 : i ].d3 : d3 = d3_ :
				(!!dataExecel.list[i - 1 < 0 ? 0 : i ].d3) ? d3_ = dataExecel.list[i - 1 < 0 ? 0 : i ].d3 : d3_ = '';
				
				(dataExecel.list[i].d1 === '' && dataExecel.list[i].d2 === '' && dataExecel.list[i].d3 === '') ? 
				(d4 !== '') ? d4_ = dataExecel.list[i - 1 < 0 ? 0 : i ].d4 : d4 = d4_ :
				(!!dataExecel.list[i - 1 < 0 ? 0 : i ].d4) ? d4_ = dataExecel.list[i - 1 < 0 ? 0 : i ].d4 : d4_ = '';
						
				(dataExecel.list[i].d1 === '' && dataExecel.list[i].d2 === '' && dataExecel.list[i].d3 === '' && dataExecel.list[i].d4 === '') ? 
				(d4 !== '') ? d5_ = dataExecel.list[i - 1 < 0 ? 0 : i ].d5 : d5 = d5_ :
				(!!dataExecel.list[i - 1 < 0 ? 0 : i ].d5) ? d5_ = dataExecel.list[i - 1 < 0 ? 0 : i ].d5 : d5_ = '';
				
				(dataExecel.list[i].d1 === '' && dataExecel.list[i].d2 === '' && dataExecel.list[i].d3 === '' && dataExecel.list[i].d4 === '' && dataExecel.list[i].d5 === '') ? 
				(d4 !== '') ? d6_ = dataExecel.list[i - 1 < 0 ? 0 : i ].d6 : d6 = d6_ :
				(!!dataExecel.list[i - 1 < 0 ? 0 : i ].d6) ? d6_ = dataExecel.list[i - 1 < 0 ? 0 : i ].d6 : d6_ = '';
				
				(dataExecel.list[i].d1 === '' && dataExecel.list[i].d2 === '' && dataExecel.list[i].d3 === '' && dataExecel.list[i].d4 === '' && dataExecel.list[i].d5 === '' && dataExecel.list[i].d6 === '') ? 
				(d4 !== '') ? d7_ = dataExecel.list[i - 1 < 0 ? 0 : i ].d7 : d7 = d7_ :
				(!!dataExecel.list[i - 1 < 0 ? 0 : i ].d7) ? d7_ = dataExecel.list[i - 1 < 0 ? 0 : i ].d7 : d7_ = '';
				
				!!dataExecel.list[i].d1 ? d1 = dataExecel.list[i].d1 : '';
				!!dataExecel.list[i].d2 ? d2 = dataExecel.list[i].d2 : '';
				!!dataExecel.list[i].d3 ? d3 = dataExecel.list[i].d3 : '';
				!!dataExecel.list[i].d4 ? d4 = dataExecel.list[i].d4 : '';
				!!dataExecel.list[i].d5 ? d5 = dataExecel.list[i].d5 : '';
				!!dataExecel.list[i].d6 ? d6 = dataExecel.list[i].d6 : '';
				!!dataExecel.list[i].d7 ? d7 = dataExecel.list[i].d7 : '';
				!!dataExecel.list[i].d8 ? d8 = dataExecel.list[i].d8 : '';
				
				endsum = (state === "완료") ? endsum + 1 : endsum ;
				tstsum = (state === "검수") ? tstsum + 1 : tstsum ;
				ingsum = (state === "진행") ? ingsum + 1 : ingsum ;
				delsum = (state === "제외") ? delsum + 1 : delsum ;
				watsum = (state === "대기") ? watsum + 1 : watsum ;
				
				//클래스 생성
				c1 = (dataExecel.list[i].d1 !== '') ? ' c1' : '';
				c2 = (dataExecel.list[i].d2 !== '') ? ' c2' : '';
				c3 = (dataExecel.list[i].d3 !== '') ? ' c3' : '';
				c4 = (dataExecel.list[i].d4 !== '') ? ' c4' : '';
				c5 = (dataExecel.list[i].d5 !== '') ? ' c5' : '';
				
				cls2 = state === '진행' ? 'ing' : state === '완료' ? 'end' : state === '검수' ? 'tst' : state === '제외' ? 'del' : state === '약관' ? 'trm' : '';
				cls = cls2 + c1 + c2 + c3 + c4 + c5;
				
				//배열생성
				ctg_state.push(dataExecel.list[i].state); 
				ctg_worker.push(dataExecel.list[i].worker); 
				ctg_dev.push(dataExecel.list[i].dev); 
				ctg_date.push(dataExecel.list[i].date);
				ctg_enddate.push(dataExecel.list[i].enddate); 
				ctg_menu.push(dataExecel.list[i].d1);
				
				var imgroot = win[global].uiCheck.mobile ? "m" : "d";

				if (state !== '제외' && i=== 0) {
					table += '<table>';
					table += '<caption>코딩리스트</caption>';
					table += '<colgroup>';
					table += '<col class="col1">';
					table += '<col class="col2">';
					table += '<col class="col3">';
					table += '<col class="col4">';
					table += '<col class="col5">';
					table += '<col class="col6">';
					table += '<col class="col7">';
					table += '</colgroup>';
					table += '<colgroup>';
					(dataExecel.list[i].d1 !== undefined) ? table += '<col class="col8 n1">' : '';
					(dataExecel.list[i].d2 !== undefined) ? table += '<col class="col8 n2">' : '';
					(dataExecel.list[i].d3 !== undefined) ? table += '<col class="col8 n3">' : '';
					(dataExecel.list[i].d4 !== undefined) ? table += '<col class="col8 n4">' : '';
					(dataExecel.list[i].d5 !== undefined) ? table += '<col class="col8 n5">' : '';
					table += '</colgroup>';
					table += '<col class="col9">';
					table += '<thead>';
					table += '<th scope="col">'+ state +'</th>';
					table += '<th scope="col">'+ date +'</th>';
					table += '<th scope="col">'+ enddate +'</th>';
					table += '<th scope="col">'+ worker +'</th>';
					table += '<th scope="col">IMG</th>';
					table += '<th scope="col">'+ id +'</th>';
					table += '<th scope="col">'+ root +'</th>';
					(dataExecel.list[i].d1 !== undefined) ? table += '<th scope="col">'+ d1 +'</th>' : '';
					(dataExecel.list[i].d2 !== undefined) ? table += '<th scope="col">'+ d2 +'</th>' : '';
					(dataExecel.list[i].d3 !== undefined) ? table += '<th scope="col">'+ d3 +'</th>' : '';
					(dataExecel.list[i].d4 !== undefined) ? table += '<th scope="col">'+ d4 +'</th>' : '';
					(dataExecel.list[i].d5 !== undefined) ? table += '<th scope="col">'+ d5 +'</th>' : '';
					table += '<th scope="col">'+ memo +'</th>';
					table += '</thead>';
					table += '</tbody>';
				}
				else if (state !== '제외') {
					table += '<tr class="'+ cls +'">';
					table += '<td class="state"><span>' + state + '</span></td>';
					table += '<td class="date"><span>' + date + '</span></td>';
					table += '<td class="enddate"><span>' + enddate + '</span></td>';
					table += '<td class="name worker"><span>' + worker + '</span></td>';
					table += '<td class="img"><span><a href="/resources/data/design/'+ imgroot + '/'+ id +'.jpg" target="design"><img src="/resources/data/design/img.png" alt=""></a></span></td>';
					table += (id !== '') ? 
							'<td class="id ico_pg"><span><a href="'+ root +'/'+ id +'.html" target="coding">' + id + '</a></span></td>' :
							'<td class="id "><span></span></td>';
					table += '<td class="root"><span>' + root + '/</span></td>';
						
					(dataExecel.list[i].d1 !== undefined) ? table += '<td class="d d1"><span>' + d1 + '</span></td>' : '';
					(dataExecel.list[i].d2 !== undefined) ? table += '<td class="d d2"><span>' + d2 + '</span></td>' : '';
					(dataExecel.list[i].d3 !== undefined) ? table += '<td class="d d3"><span>' + d3 + '</span></td>' : '';
					(dataExecel.list[i].d4 !== undefined) ? table += '<td class="d d4"><span>' + d4 + '</span></td>' : '';
					(dataExecel.list[i].d5 !== undefined) ? table += '<td class="d d5"><span>' + d5 + '</span></td>' : '';
					(dataExecel.list[i].memo === '') ? table += '<td class="memo none"><span>' + memo + '</span></td>' : table += '<td class="memo"><span>' + memo + '</span></td>';
					table += '</tr>';
					(i === len - 1) ? table += '</tbody>' : '';
					(i === len - 1) ? table += '</table>' : '';
				}
				root = '';
			}
			$('#' + opt.id).html(table);
			table = '';

			// 통계
			var info = ''
			info += '<ul class="ui-codinglist-info">';
			info += '<li>진행율(완료+검수) : <span class="n_all">0</span> / <span class="total">0</span> (<span class="per0">0</span>%)</li>';
			info += '<li>완료 : <span class="n_end">0</span> (<span class="per1">0</span>%)</li>';
			info += '<li>검수 : <span class="n_tst">0</span> (<span class="per2">0</span>%)</li>';
			info += '<li>진행 : <span class="n_ing">0</span> (<span class="per3">0</span>%)</li>';
			info += '<li>대기 : <span class="n_wat">0</span> (<span class="per4">0</span>%)</li>';
			info += '</ul>';
			$('#' + opt.id).prepend(info);

			if (!$('.ui-codinglist-info .total').data('data')) {
				$('.ui-codinglist-info .total').data('data', true).text(len - delsum - 1);
				$('.ui-codinglist-info .n_all').text(endsum + tstsum);
				$('.ui-codinglist-info .per0').text(((endsum + tstsum) / (len - delsum - 1) * 100).toFixed(0));
				$('.ui-codinglist-info .n_end').text(endsum);
				$('.ui-codinglist-info .per1').text((endsum / (len - delsum - 1) * 100).toFixed(0));
				$('.ui-codinglist-info .n_tst').text(tstsum);
				$('.ui-codinglist-info .per2').text((tstsum / (len - delsum - 1) * 100).toFixed(0));
				$('.ui-codinglist-info .n_ing').text(ingsum);
				$('.ui-codinglist-info .per3').text((ingsum / (len - delsum - 1) * 100).toFixed(0));
				$('.ui-codinglist-info .n_wat').text(watsum);
				$('.ui-codinglist-info .per4').text((watsum / (len - delsum - 1) * 100).toFixed(0));
			}
			
			var sel = '';
			sel += '<div class="ui-codinglist-sel">';
			sel += '<button type="button" class="btn-base"><span>전체</span></button>';
			sel += '<select id="uiCLstate" data-ctg="state">';
			sel += '<option value="0">상태선택</option>';
			sel += '</select>';
			sel += '<select id="uiCLworker" data-ctg="worker">';
			sel += '<option value="0">퍼블선택</option>';
			sel += '</select>';
			sel += '<select id="uiCLDate" data-ctg="date">';
			sel += '<option value="0">일정선택</option>';
			sel += '</select>';
			sel += '<select id="uiCLdepth" data-ctg="d1">';
			sel += '<option value="0">메뉴선택</option>';
			sel += '</select>';
			sel += '<a href="/resources/data/codinglist.xlsx" class="btn-base"><span>Excel Download</span></a>';
			sel += '</div>';
			$('#' + opt.id).prepend(sel);

			selectoption('uiCLstate', ctg_state);
			selectoption('uiCLworker', ctg_worker);
			selectoption('uiCLDate', ctg_date);
			selectoption('uiCLdepth', ctg_menu);
			selectAct();
			
			function selectoption(id, optarray) {
				var $sel = $('#' + id);
				
				if(!$sel.data('data')) {
					var optionArray = [], 
						j = 0, 
						optionHtml = '';
					
					optarray.splice(0,1);

					// 숫자 .sort(function(a,b){return a-b}) , 문자 sort()
					optionArray = optarray.slice().sort().reduce(function(a,b){
						(a.slice(-1)[0] !== b && b !== '') ? a.push(b) : '';
						return a;
					},[]);

					for (j; j < optionArray.length; j++) {
						optionHtml += '<option value="'+ optionArray[j] +'">'+ optionArray[j] +'</option>';
					}

					$sel.data('data',true).append(optionHtml);
				}
			}
			
			function selectAct(){
				$('.ui-codinglist-sel select').on('change', function(){
					var $this = $(this),
						v = $this.val(),
						c = $this.data('ctg'),
						$sel = $('#' + opt.id + ' .' + c);

					if (v === '0') {
						$sel.closest('tr').removeClass('hidden');
					} else {
						$this.siblings().find('option:eq(0)').prop('selected', true);
						$sel.each(function(i){
							v === 'all' ? $sel.closest('tr').removeClass('hidden') :
							v !== $sel.find('span').eq(i).text() ? 
								$(this).closest('tr').addClass('hidden') : $(this).closest('tr').removeClass('hidden');
						});
					}
				});
			}

			$('.ui-codinglist-sel button').on('click', function(e){
				$('#' + opt.id + ' tr').removeClass('hidden');
				$('.ui-codinglist-sel select').find('option:eq(0)').prop('selected', true);
			});
		}
	}

})(jQuery, window, document);