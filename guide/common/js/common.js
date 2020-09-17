;(function($, win, doc, undefined) {
	win.N = {
		initialize : function(){
			var base = this;
			
			//root
			base.rootHeader = $('.header');
			base.rootNav_h = base.rootHeader.find('.nav_h');

			// desktop = true
			base.browser = !!$('html.win').length;
			base.s1 = !!$('html.s1').length; // ~ 768
			base.s2 = !!$('html.s2').length; // 768 ~ 1024
			base.s3 = !!$('html.s3').length; // 1024 ~ 1400
			base.s4 = !!$('html.s4').length; // 1400 ~
			base.s12 = !!$('html.s12').length;
			base.s34 = !!$('html.s34').length;
			base.ios = !!$('html.ios').length;
			
			base.prevSize = (base.s1) ? 1 : '' || (base.s2) ? 2 : '' || (base.s3) ? 3 : '' || (base.s4) ? 4 : '';
			base.deviceSize = base.prevSize;
			base.worksSum = 7;
			
			N.ui_ajaxPage('#header', '/guide/page/menu.html', 'header');
			N.ui_ajaxPage('#container', '/guide/page/countnumber.html', 'countnumber');
			setTimeout(function(){
				N.ui_ajaxPage('#footer', '/guide/page/footer.html', 'footer');
			},300);
			
			// smooth wheel 도중 취소 추가
			$(win).on('mousedown', function(){
				$('body').data('smoothwheelstop', true);
			}).on('mouseup', function(){
				$('body').data('smoothwheelstop', false);
			});
			
			// 가이드 라인
			$('.ui_guideline').uiGuideline();
			
			N.resizeClass();
		},
		resizeClass : function() {
			var base = this,
				timer;
			
			$(win).resize(function(){
				clearTimeout(timer);
				
				timer = setTimeout(function(){
					var width = $(doc).outerWidth(),
						devsize = [1440, 1023, 767],
						sizeMode = width > devsize[0] ? 4 : width > devsize[1] ? 3 : width > devsize[2] ? 2 : 1,
						sizeClass = (' s'+ sizeMode +' s'+ (3 > sizeMode ? 12 : 34) + (360 > width ? ' s0' : ''));
					
					$('html').removeClass('s0 s1 s2 s3 s4 s12 s34').addClass(sizeClass);
					
					base.browser = !!$('html.win').length;
					base.s1 = !!$('html.s1').length; // ~ 768
					base.s2 = !!$('html.s2').length; // 768 ~ 1024
					base.s3 = !!$('html.s3').length; // 1024 ~ 1400
					base.s4 = !!$('html.s4').length; // 1400 ~
					base.s12 = !!$('html.s1').length || !!$('html.s2').length;
					base.s34 = !!$('html.s3').length || !!$('html.s4').length;
					
					if (!base.s1) {
						base.rootHeader.css('height', base.rootHeader.find('.nav_h').outerHeight());
					}
					
					
				},50);
			});
		},
		sWheel : function(){
			$('body').smoothWheel();
		},
		
/* Ajax page --------------------------------------------------------------------------------- */ 
		ui_ajaxPage : function(target, url, page) {
			$(target).uiAjaxPage({
				url : url,
				callname : page
			});
		},
		ui_ajaxPage_call : function(name) {
			switch (name) {
				case 'header' 	: N.header();
					break;	
				case 'footer' 	: N.footer();
					break;
				case 'carousel' : N.carousel(); 
					break;
				case 'form' 	: N.form(); 
					break;
				case 'popup' 	: N.popup(); 
					break;
				case 'tab' 		: N.tab(); 
					break;
				case 'cardlist' : N.cardlist(); 
					break;
				case 'tetrislist' : N.tetrislist(); 
					break;
				case 'countnumber' : N.countnumber(); 
					break;
				case 'chart' : N.chart(); 
					break;
				
			}
		},
		chart : function() {
			$('body').removeClass().addClass('chart').data('smoothwheelstop', false);
			$('.exe_chart1').uiGraphCircle();
			$('.exe_chart2').uiGraphCircle({
				line : 20,
				from : 0,
				speed : 1000,
				color : 'lime',
				bgcolor : '#ececec',
				noanimation : false,
				autostart : false
			});
			
			$('.btn_change').click(function(){
				var v = Math.floor(Math.random(1) * 100);
				$('.ui_value').text(v);
			});
			N.sWheel();
		},
		countnumber : function(){
			$('body').removeClass().addClass('countnumber').data('smoothwheelstop', false);

			var countdata = [
			 	{
				'selector': '.exe_count1',
				'comma': true,
				'value': 54231258.135,
				'speed': 1000,
				'eff': 'easeInOutQuad'
				},
				{
				'selector': '.exe_count2',
				'comma': false,
				'value': '12,345',
				'speed': 1000,
				'eff': 'easeInOutQuad'
				},
				{
				'selector': '.exe_count3',
				'comma': true,
				'value': false,
				'speed': 1000,
				'eff': 'easeInOutQuad'
				},
			];
			$(doc).off('click.uicount').on('click.uicount', '.ui_count_exe' , function(){
				$._uiCountNumber.start(countdata[0]);
				$._uiCountNumber.start(countdata[1]);
				$._uiCountNumber.start(countdata[2]);
			});

			N.sWheel();
		},
		cardlist : function(){
			$('body').removeClass().addClass('cardlist').data('smoothwheelstop', false);
			
			$('.ui_cardlist').imagesLoaded(function(){
				$('.ui_cardlist').uiCardlist();
			});

			$('.ui_cardlist .ui_add').on('click', function () {
				var add = '<li class="ui_item" role="listitem">' +
					'<div><img src="/guide/img/@snap_1.jpg" alt=""></div>' +
					'<strong>커트 코베인 Kurt Cobain</strong>' +
					'<p>다른 누군가가 되어서 사랑받기보다는 있는 그대로의 나로서 미움받는 것이 낫다.<br>' +
					'Id rather be hated for who I am than be loved for who Im not.</p>' +
					'</li>' +
					'<li class="ui_item" role="listitem">' +
					'<div><img src="/guide/img/@snap_1.jpg" alt=""></div>' +
					'<strong>커트 코베인 Kurt Cobain</strong>' +
					'<p>다른 누군가가 되어서 사랑받기보다는 있는 그대로의 나로서 미움받는 것이 낫다.<br>' +
					'Id rather be hated for who I am than be loved for who Im not.</p>' +
					'</li>' +
					'<li class="ui_item" role="listitem">' +
					'<div><img src="/guide/img/@snap_1.jpg" alt=""></div>' +
					'<strong>커트 코베인 Kurt Cobain</strong>' +
					'<p>다른 누군가가 되어서 사랑받기보다는 있는 그대로의 나로서 미움받는 것이 낫다.<br>' +
					'Id rather be hated for who I am than be loved for who Im not.</p>' +
					'</li>' +
					'<li class="ui_item" role="listitem">' +
					'<div><img src="/guide/img/@snap_1.jpg" alt=""></div>' +
					'<strong>커트 코베인 Kurt Cobain</strong>' +
					'<p>다른 누군가가 되어서 사랑받기보다는 있는 그대로의 나로서 미움받는 것이 낫다.<br>' +
					'Id rather be hated for who I am than be loved for who Im not.</p>' +
					'</li>' +
					'<li class="ui_item" role="listitem">' +
					'<div><img src="/guide/img/@snap_1.jpg" alt=""></div>' +
					'<strong>커트 코베인 Kurt Cobain</strong>' +
					'<p>다른 누군가가 되어서 사랑받기보다는 있는 그대로의 나로서 미움받는 것이 낫다.<br>' +
					'Id rather be hated for who I am than be loved for who Im not.</p>' +
					'</li>';

				$(this).closest('.ui_cardlist').find('.ui_item_wrapper').append(add);
				N.sWheel();
			});
			
		},
		tetrislist : function(){
			$('body').removeClass().addClass('tetrislist').data('smoothwheelstop', false);
			
			$('.exe_tetris_item')
				.data('type', 'item')
				.data('unit', 270)
				.data('unit-col', 4);
			$('.exe_tetris_item').imagesLoaded(function(){
				$('.exe_tetris_item').uiTetrislist();
			});
			
			$('.exe_tetrislist_count')
				.data('type', 'col')
				.data('unit', 270)
				.data('unit-col', 4);
			
			
			$('.exe_tetrislist_count').imagesLoaded(function(){
				$('.exe_tetrislist_count').uiTetrislist();
			});
			
			
			
			$('.ui_tetrislist .ui_add').on('click', function () {
				var add = 
				'<li class="ui_item"><a href="#"><img src="/guide/img/works/project_15.png" alt=""></a></li>' +
				'<li class="ui_item"><a href="#"><img src="/guide/img/works/project_16.png" alt=""></a></li>' +
				'<li class="ui_item"><a href="#"><img src="/guide/img/works/project_17.png" alt=""></a></li>' +
				'<li class="ui_item"><a href="#"><img src="/guide/img/works/project_18.png" alt=""></a></li>' +
				'<li class="ui_item"><a href="#"><img src="/guide/img/works/project_19.png" alt=""></a></li>' +
				'<li class="ui_item"><a href="#"><img src="/guide/img/works/project_20.png" alt=""></a></li>' +
				'<li class="ui_item"><a href="#"><img src="/guide/img/works/project_21.png" alt=""></a></li>' +
				'<li class="ui_item"><a href="#"><img src="/guide/img/works/project_22.png" alt=""></a></li>' +
				'<li class="ui_item"><a href="#"><img src="/guide/img/works/project_23.png" alt=""></a></li>' +
				'<li class="ui_item"><a href="#"><img src="/guide/img/works/project_24.png" alt=""></a></li>' +
				'<li class="ui_item"><a href="#"><img src="/guide/img/works/project_25.png" alt=""></a></li>' +
				'<li class="ui_item"><a href="#"><img src="/guide/img/works/project_26.png" alt=""></a></li>' +
				'<li class="ui_item"><a href="#"><img src="/guide/img/works/project_27.png" alt=""></a></li>' +
				'<li class="ui_item"><a href="#"><img src="/guide/img/works/project_28.png" alt=""></a></li>' +
				'<li class="ui_item"><a href="#"><img src="/guide/img/works/project_29.png" alt=""></a></li>' +
				'<li class="ui_item"><a href="#"><img src="/guide/img/works/project_30.png" alt=""></a></li>';
				
				$(this).closest('.ui_tetrislist').find('.ui_item_wrapper').append(add);
				N.sWheel();
			});
			
			
			
			N.sWheel();
		},
		tab : function() {
			$('body').removeClass().addClass('tab').data('smoothwheelstop', false);
			
			$._uiFixed.init({
				id : 'exe-fix1',
				ps : 'bottom', // top, bottom
				type : 'f_r' // fixed > relative, r_f : relative > fixed
			});
			$._uiFixed.init({
				id : 'exe-fix2',
				ps : 'top', // top, bottom
				type : 'r_f' // fixed > relative, r_f : relative > fixed
			});
			
			$('.exe_tab').uiTab();
			$('.exe_acco').uiAccordion();
			$('.exe_drop').uiDropdowns();
			
			N.sWheel();
		},
		popup : function(){
			$('body').removeClass().addClass('popup').data('smoothwheelstop', false);
			
			// window popup
			$('.exe_daum').uiPopup({
				name: 'new popup', 
                width: 500,
                height: 400,
                align: 'center',
                top : 0,
                left : 0,
                toolbar : 'no',
                location : 'no',
                menubar : 'no',
                status : 'no',
                resizable: 'yes',
                scrollbars: 'no'
			});
			$('.exe_naver').uiPopup({
				link : 'http://naver.com'
			});
			
			// dialog popup
			$('.ui_layerpop').uiDialog();
			$('#dialog1').uiDialog({ auto : true });
			
			$('.ui_layerpop_add').on('click', function () {
				var add = '<button type="button" class="ui_layerpop" data-dialogid="dialog_add">추가 레이어팝업</button>' +
				'<section role="dialog" aria-labelledby="dialog_add_label" aria-describedby="dialog_add_desc" class="layerpop" id="dialog_add">' +
				'<h1 id="ddialog_add_label">추가</h1>' +
				'<p id="dialog_add_desc">추가된 레이어 팝업</p>' +
				'<button type="button" class="ui_close">닫기</button>' +
				'</section>';
				$(this).after(add);
				$('.ui_layerpop').uiDialog();
			});
			
			// toolip
			$('.ui_tooltip').uiTooltip();

			$('.ui_tooltip_add').on('click', function () {
				var add = '<button type="button" class="ui_tooltip" data-tooltipid="tooltip2">tooltip 추가</button>' +
				'<div id="tooltip2" class="ui_tooltip_cont" role="tooltip">' +
					'<span class="arrow"></span>' +
					'<h1>동적으로 추가된 툴팁</h1>' +
					'<p>추가된 툴팁입니다.</p>;' +
				'</strong>'; 						
				$(this).after(add);
				$('.ui_tooltip').uiTooltip();
			});
			N.sWheel();
		},
		carousel : function(){
			var base = this;
			$('body').removeClass().addClass('carousel').data('smoothwheelstop', false);
			
			$('.exe_slide_event0').uiSlide({ 
				view : 2,
				responsive : true,
				view_mobile 	: [0, 1],
				view_tablet 	: [500, 2],
				view_desktop 	: [800, 2],
				view_wide 		: [1000, 2],
				current : 1,
				dot : true,
				nav : true,
				rolling : true,
				type : 'slide',
				speed : 700,
				autoplay_state : 'stop',
				autoplay_time : 2000
			});
			$('.exe_slide_event0_1').uiSlide({ 
				view : 3,
				responsive : true,
				view_mobile 	: [0, 1],
				view_tablet 	: [500, 2],
				view_desktop 	: [800, 3],
				view_wide 		: [1000, 3],
				
				current : 1,
				dot : true,
				nav : true,
				rolling : true,
				type : 'slide',
				speed : 700,
				autoplay_state : 'stop',
				autoplay_time : 2000
			});
			$('.exe_slide_event0_2').uiSlide({ 
				view : 4,
				
				responsive : true,
				view_mobile 	: [0, 1],
				view_tablet 	: [500, 2],
				view_desktop 	: [800, 3],
				view_wide 		: [1000, 4],
				
				current : 1,
				dot : true,
				nav : true,
				rolling : true,
				type : 'slide',
				speed : 700,
				autoplay_state : 'stop',
				autoplay_time : 2000
			});
			$('.exe_slide_event0_3').uiSlide({ 
				view : 5,
				responsive : true,
				view_mobile 	: [0, 1],
				view_tablet 	: [500, 2],
				view_desktop 	: [800, 3],
				view_wide 		: [1000, 5],
				current : 1,
				dot : true,
				nav : true,
				rolling : true,
				type : 'slide',
				speed : 700,
				autoplay_state : 'stop',
				autoplay_time : 2000
			});
			$('.exe_slide_event0_4').uiSlide({ 
				view : 6,
				responsive : true,
				view_mobile 	: [0, 1],
				view_tablet 	: [500, 2],
				view_desktop 	: [800, 3],
				view_wide 		: [1000, 6],
				current : 1,
				dot : true,
				nav : true,
				rolling : true,
				type : 'slide',
				speed : 700,
				autoplay_state : 'stop',
				autoplay_time : 2000
			});
			
			$('.exe_slide_event1').uiSlide({ 
				current : 2,
				dot : true,
				nav : true,
				rolling : true,
				type : 'slide',
				speed : 700,
				autoplay_state : 'stop',
				autoplay_time : 5000
			});
			
			$('.exe_slide_event3').uiSlide({ 
				current : 2,
				dot : true,
				nav : true,
				rolling : true,
				type : 'cover',
				item_eff : true,
				speed : 700,
				autoplay_state : 'stop',
				autoplay_time : 5000
			});
			
			$('.exe_slide_event2').uiSlide({ 
				dot : true,
				nav : true,
				rolling : true,
				type : 'fade',
				speed : 700,
				
				autoplay : false,
				autoplay_state : 'stop', // stop. play
				autoplay_time : 5000,
				
				load : true,
				load_url : '/guide/data/slide.json',
				load_type : 'json',
				load_view : 1, // all 이면 전체
				load_start : 0, // 0부터 시작
				load_success : customDataSuccess
			});
			
			$('input[type="radio"], input[type="checkbox"]').uiRadioCheck();
			$('input[type="text"], input[type="password"]').uiPlaceholder();
			
			function customDataSuccess(data, n) {
				var contents = '';
					contents += '	<div class="ex_slidejo_txt" style="background:' + data.items[n].background + '; color:' + data.items[n].color + '" data-shade="'+ data.items[n].shade +'">';
					contents += '		<strong class="ui_item_tit">' + data.items[n].en + '</strong>';
					contents += '		<p>' + data.items[n].kr + '</p>';
					contents += '		<a href="' + data.items[n].link + '">' + data.items[n].name + '</a>';
					contents += '	</div>';
					
				return contents;
			}
			
			N.sWheel();
		},
		form : function(){
			var base = this;
			$('body').removeClass().addClass('form').data('smoothwheelstop', false);
			
			$('.exe_select').uiSelect();
			$('input[type="radio"], input[type="checkbox"]').uiRadioCheck();
			$('input[type="text"], input[type="password"]').uiPlaceholder();
			
			// 테스트용
			$('#sel_add').on('click', function(){
				$('.exe_select[data-select-id="sel_2"]').append('<option value="5">새로 추가된 셀렉트입니다.</option>');
				$('.exe_select[data-select-id="sel_2"]').uiSelect({ 
					id : 'sel_2',
					reset : true 
				});
			});
			N.sWheel();
		},

		
/* FOOTER --------------------------------------------------------------------------------- */
		footer : function() {
			var base = this;
			
			$(win).off('scroll.footer').on('scroll.footer', function(){
				var sc_t = $(this).scrollTop(),
					$footer = $('#footer'),
					doc_h = $(doc).outerHeight(),
					win_h = $(win).outerHeight(),
					footer_h = 100;
				
				// pc 버전 & 1025~ 에서 적용
				if (base.s34 && base.ios === false) {
					if(doc_h - win_h - 200 < sc_t && !$footer.data('show')) {
						$footer.stop().animate({
							bottom : 0
						}).data('show', true);
					} 
					if(doc_h - win_h - 200 > sc_t && $footer.data('show') === true) {
						$footer.stop().animate({
							bottom : -200
						}).data('show', false);
					}
				}
				
			});
		},
		
/* HEADER --------------------------------------------------------------------------------- */
		header : function() {
			var base = this;
			
			base.rootHeader = $('.header');
			base.rootNav_h = base.rootHeader.find('.nav_h');
			
			var $body = $('body'),
				win_h = $(win).outerHeight(),
				header_h = base.rootHeader.outerHeight(),
				nav_h = base.rootNav_h.outerHeight();
			
			if (!base.s1) {
				base.rootHeader.css('height', base.rootHeader.find('.nav_h').outerHeight());
			}
			
			// menu
			$('.ui_btn_nav li:not(".btn_profile"), h1.ui_btn_nav').find('a').on('click', function(e){
				e.preventDefault();

				var $this = $(this),
					url = $this.attr('href'),
					target = $this.data('target'),
					page = $this.data('ajaxcall');
					
				// 초기화
				$('.btn_menu').data('open', false);
				$('body').data('homeani', false);
				$('.container').removeClass('fixed');
				N.ui_ajaxPage(target, url, page);
			});
			
			// mobile ver
			$('.btn_menu').off('click.menu').on('click.menu', menuOpen);
			function menuOpen(){
				var $btn = $(this);
				
				if (!$btn.data('open')) {
					$btn.data('open', true);
					$btn.data('scroll', $(win).scrollTop());
					$body.addClass('menu_open');
					setTimeout(function(){
						$('.container').addClass('fixed');
					},300);
				}
				else {
					$btn.data('open', false);
					$body.removeClass('menu_open');
					$('.container').removeClass('fixed');
					$._uiScroll.move($btn.data('scroll'), 0);
					
				}	
			}
			
			$(win).off('scroll.header').on('scroll.header', function(){
				var sc_t = $(this).scrollTop(),
					logo_opacity = 1,
					range = 50;

				if (!base.s1) {
					// LOGO				
					base.rootHeader.find('h1').css('opacity', $._opacityValue.decrease(sc_t, base.rootHeader.find('h1').outerHeight(), 0));
					
					// NAV
					header_h = base.rootHeader.outerHeight();
					(header_h < sc_t) ? navDrak() : navLight();
				} else {
					// mobile menu bg
					var $btn_bg = $('.s1 .btn_menu_bg');
					
					(sc_t > 200) ? $btn_bg.addClass('on') : $btn_bg.removeClass('on');
				}
				
			});
			
			function navDrak() {
				if (!!$body.data('navdark')) {
					$body.data('navdark', false);
					$body.data('navlight', true);
					base.rootNav_h.css('top', nav_h * -1).addClass('dark').stop().animate({
						top : 0,
						opacity : 1
					});
				}
			}
			function navLight() {
				if (!$body.data('navdark')) {
					$body.data('navdark', true);
					if (!!$body.data('navlight')) {
						$body.data('navlight', false);
						base.rootNav_h.stop().animate({
							top : nav_h * -1,
							opacity : 0
						},100 ,function(){
							base.rootNav_h.css({
								top : 0,
								opacity : 1
							}).removeClass('dark');
						});
					}
				}
			}
			
		}
	
	};


	$(win).load(function() {
		setTimeout(function() {
			N.initialize();
		}, 0);
	});
	
})(jQuery, window, document);