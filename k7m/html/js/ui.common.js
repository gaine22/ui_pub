;(function ($, win, doc, undefined) {
	$plugins.page = {
        header: function(){
			var nav = $('#menuTree');

			$('#uiMenuToggle').on('click', function(){			
				menulayerOpen();
			});
			
			function menulayerOpen(){
				nav.show("fast" ,function(){
					$('html, body').css({'overflow':'hidden'});
					$('body').addClass('iosfix');
					$('.ui-m .mgmenu-wrap').show();
					$('.ui-m .mgmenu .submenu-wrap').show();
					$('.header-logo').hide();
					$('#uiMenuToggle').hide();
					$('.floating-wrap').hide();					
					
					if($('.topbanner').hasClass('slide-up')){
						$('.topbanner').hide();
					} else {
						$('.topbanner').hide();
					}
					
					nav.find('#uiMenuClose').bind('click',function(){
						menulayerClose();
						$('.floating-wrap').show();

						if($('.topbanner').hasClass('slide-up')){
							$('.topbanner').hide();
						} else {
							$('.topbanner').show();
						}
					});
					
				});
			}
		
			function menulayerClose(){
				$('.ui-m .mgmenu .submenu-wrap').hide();
				nav.hide("fast" ,function(){
					$('html, body').css({'overflow':'visible'});
					$('body').removeClass('iosfix');
					$('.header-logo').show();
					$('#uiMenuToggle').show();
				});
			}

			var menudepth = $('.ui-gnb > li'),
				menu = $('.ui-d .ui-gnb > li > a'),
				len = menudepth.length,
				mgmenu = $('.ui-d .mgmenu-wrap'),
				m_menu = $('.ui-m .ui-gnb > li > a'),
				m_mgmenuwrap = $('.ui-m .mgmenu-wrap'),
				m_mgmenu = $('.ui-m .mgmenu'),
				device_height = $(win).innerHeight() + 100,
				gnb_wrap_height = device_height,				
				m_menu_active = $('.ui-m .mgmenu .submenu-wrap>li a.active'),
				gnbTimer;
				
			if($('html').hasClass('ui-d')){
				mgmenu.mouseleave(gnboff)
				mgmenu.find('a').blur(gnbblur);
				
				menu.each(function(idx){
					var ind = idx + 1,
						_this = $(this);
					
					_this.bind('mouseover focus', function(){
						mgmenuOver(ind);
					});
					
				});
				
				function gnbblur() {
					if(gnbTimer) {
						clearTimeout(gnbTimer);
					}
					gnbTimer = setTimeout(function() {
						if($('.gnb-wrap a:focus').length<1) {
							gnboff();
						}
					}, 0);
				}
				
				function mgmenuOver(ind){
					var mgmenuIdx = mgmenu.children('div.mgmenu'+ind),					
						mgmenuH = mgmenuIdx.outerHeight();
					
					mgmenu.show();
					mgmenu.stop().animate(
						{height: mgmenuH + 'px'}, function() {
							$(this).addClass('opened');
							mgmenu.show();
							mgmenu.children('div.mgmenu').css('display','none');
							mgmenuIdx.css('display','block');							
						}
					);					
				}
				
				function gnboff() {
					mgmenu.stop().animate(
						{height:'0px'}, 500, function() {
							$(this).removeClass('opened');
							mgmenu.hide();
						}
					);
				}

			} else {
				$('.gnb-wrap').css({
					'height': gnb_wrap_height,
					'min-height':gnb_wrap_height
				});

				$('.ui-m #menuTree').css({
					'height': device_height,
					'min-height':device_height,
					'overflow':'hidden'
				});			
				
				// if ($('.ui-m .mgmenu .submenu-wrap>li a').hasClass('active')){					
				// 	m_menu_active.parent().parent().prev('strong').children('a').css('color','#f58026');
				// }

				m_menu.each(function(index){
					var num = index + 1,
						_this = $(this);
					
					_this.bind('touchstart focus', function(){
						m_mgmenuOver(num);
					});
				});

				function m_mgmenuOver(num){
					m_menu.parent('li').removeClass('on');
					m_menu.parent('.dp'+num).addClass('on');
					m_mgmenuwrap.show();
					m_mgmenuwrap.children('div.mgmenu').children('.submenu-wrap').css('display','none');
					m_mgmenuwrap.children('div.mgmenu'+num).css('display','block');
					m_mgmenuwrap.children('div.mgmenu'+num).children('.submenu-wrap').css({'display':'block','position':'fixed','top':'84px'});					
				}
			}
		},
		quick: function(){
			// button - Top
			$('.btn-top').on('click', function(){
				$('body').stop().animate({scrollTop: 0}, 500);
			});

			// button - floating menu
			$(win).on('scroll', function() {
				$('#uibtnFloat').addClass('on');
			});

			$('#uibtnFloat').on('click', function(){
				if (!$('#uibtnFloat').hasClass('open')) {
                    $('#uibtnFloat').hasClass('open', true);
					$(this).addClass('open');
					floatmenulayerOpen();
                } else {
                    $('#uibtnFloat').hasClass('open', false);
					$(this).removeClass('open');
					floatmenulayerClose();
                }
			});

			function floatmenulayerOpen(){
				$('.wrapper').append('<div class="dim"></div>');
				$('.floating-menu').css('display','block');					
			}

			function floatmenulayerClose(){
				$('.dim').remove();
				$('.floating-menu').css('display','none');
			}

			// side-banner
			var bnr_max = $( '.side-wrapper .slide' ).length - 1,
				bnr_min = 0,
				bnr_index = 0,
				$bnr_list = $( '.side-wrapper' ),
				$bnr_prev = $('.sidebar-button-prev'),
				$bnr_next = $('.sidebar-button-next');
			
			$bnr_prev.on( 'click', function(){
				if( bnr_index + 1 > bnr_max ) return;
				bnr_index += 1;
				sidebnr_move();
			});
			
			$bnr_next.on( 'click', function(){
				if( bnr_index - 1 < 0 ) return;
				bnr_index -= 1;
				sidebnr_move();
			});
			
			sidebnr_move();
			function sidebnr_move(){				
				var top = bnr_index * 120;
				if(bnr_index == bnr_min){
					$bnr_next.addClass('disabled');
				} else if(bnr_index == bnr_max){
					$bnr_prev.addClass('disabled');	
				} else {
					$bnr_prev.removeClass('disabled');
					$bnr_next.removeClass('disabled');
				}

				$bnr_list.css( 'top', -top );
				$bnr_list.stop().animate( { top:-top }, 500 );
			}
		},

		// 다이렉트샵 상세
		thumbViewer: function(){
			var $rotate_viewer = $('.phone-thumb .rotate_viewer'),
				$photo_viewer = $('.phone-thumb .photo_viewer'),
				$thumb_list = $('.phone-thumb .thumbnail>li>a'),
				$thumb = $thumb_list.find('img'),
				$photo = $('.phone-thumb .photo_viewer>img'),				
				$colorBtn = $('.color-box>button'),
				$colorTxt = $('.color-txt'),
				$price_wrap = $('.price-expect'),				
				priceWrapH = $price_wrap.outerHeight(),
				$acCon = $price_wrap.find('.prex-detail'),
				acConH = 0,
				$acBtn = $price_wrap.find('.btn-acco'),
				$button = $('.thumb-wrap button'),
				$tbLBar = $('.thumb-layerbar'),
				$tbLBarCon = $tbLBar.find('.layer-cont'),
				$tbLBarBtn = $tbLBar.find('.btn-layer-cont'),
				$thumb_list2 = $('.combi-thumb .thumbnail>li>a'),
				$photo_viewer2 = $('.combi-thumb .photo_viewer'),
				$photo2 = $('.combi-thumb .photo_viewer>img');
				
			// 휴대폰 썸네일
			$thumb_list.each(function(idx){
				var ind = idx + 1,
					_this = $(this);
				
				_this.bind('click', function(){
					var _src = _this.find('img').attr('src'),
						_alt = _this.find('img').attr('alt');

					$thumb_list.parent('li').removeClass('on');
					_this.parent('li').addClass('on');

					if(_this.hasClass('rotate')){
						$photo_viewer.css('display','none');
						$rotate_viewer.css('display','block');
					} else {
						$photo_viewer.css('display','block');
						$rotate_viewer.css('display','none');
						$photo.attr('src', _src).attr('alt', _alt);

					}
				});				
			});

			// 결합상품 썸네일
			$thumb_list2.each(function(idx){
				var ind = idx + 1,
					_this = $(this);
				
				_this.bind('click', function(){
					var _src = _this.find('img').attr('src'),
						_alt = _this.find('img').attr('alt');

					$thumb_list2.parent('li').removeClass('on');
					_this.parent('li').addClass('on');

					$photo_viewer2.css('display','block');
					$photo2.attr('src', _src).attr('alt', _alt);
				});				
			});

			$colorBtn.each(function(){
				var _this = $(this);
				_this.bind('click', function(){
					_this.addClass('on').siblings('button').removeClass('on');;
					$txt = _this.text();
					$colorTxt.text($txt);
				});
			});
			
			$button.each(function(){
				var _this = $(this);
				_this.bind('click', function(){
					_this.addClass('on').siblings('button').removeClass('on');
				});
			})

			$acBtn.on('click', function(){
				$acCon.each(function(i){
					acConH += $acCon.eq(i).outerHeight();
				});
				
				if($acCon.attr('aria-hidden')==='false'){
				$price_wrap.stop().animate({
						'height' : priceWrapH
					},400, function(){
						$acBtn.attr('aria-expanded','false');
						$acCon.attr('aria-hidden','true');
						$acBtn.find('span').text('열기');
					});
					$acCon.stop().slideUp();	
					acConH = 0;				
				}else{
					$price_wrap.stop().animate({
						'height' : priceWrapH + acConH
					},400, function(){
						$acBtn.attr('aria-expanded','true');
						$acCon.attr('aria-hidden','false');
						$acBtn.find('span').text('닫기');
						$price_wrap.addClass('on');
					});
					$acCon.stop().slideDown();
				}
			});

			$tbLBarBtn.on('click', function(){
				if($tbLBarCon.is(':visible')){
					$tbLBarCon.stop().slideUp();
					$tbLBarBtn.removeClass('on').text('열기');
				}else{
					$tbLBarCon.stop().slideDown();
					$tbLBarBtn.addClass('on').text('닫기');
				}
			});
		},

		// 요금제 변경 플로팅버튼
		fixedBtn : function(){
			var timer = 0,
				$footer = $('footer'),
				$floatBox = $('.ui-m .m-float .fixed'),
				$fixedBtn = $floatBox.find('.btn'),				
				$fixed_posY = $floatBox.offset.top,
				$bottom = $(window).scrollTop() + $(window).height();
				
			if($bottom > $footer.offset().top){
				$floatBox.addClass('ft');
			} else{
				$floatBox.removeClass('ft');
			}
		},

		topbnr : function(){
			// 탑배너
			( !$plugins.uiCookieGet({ name:'todayTopBanner' }) ) ? '' : $('#topBanner').hide();
			$('#btnTopBanner').on('click',function(){
				topBannerOpenCheck();
			});
			function topBannerOpenCheck(){
				$('#topBanner').slideUp().addClass('slide-up');

				if($('#todayTopBanner').is(":checked")) {
					$plugins.uiCookieSet({ name:'todayTopBanner', term:1, value:1 });
				}
			}

			$(window).scroll(function(){
				var scrollTop = $(window).scrollTop();                                      
				var topBanner = $("#topBanner"),
					topBannerH = $("#topBanner").innerHeight(),
					header = $("#header"),
					headerWrap = $('.header-wrap');

				if (scrollTop >= topBannerH) {
					header.css({
						"position": "fixed",
						"top": 0,
						"z-index": 80,
						"width": "100%"
					});
				} else {
					header.css({
						"position": "relative"
					});
				}

				if(topBanner.css("display") == "none") {
					if (scrollTop >= topBannerH) {
						header.css({
							"position": "fixed",
							"top": 0,
							"z-index": 80,
							"width": "100%"
						});
					}
				}
			});
		}
	};
	
	// $plugins.page.header();
	// $plugins.page.quick();
	$("#header").load("../inc/header.html", function(){
		$plugins.page.header();
	});
	$("#footer").load("../inc/footer.html");
	$("#quick").load("../pages/POC_MAI_QIC_0000.html", function(){
		$plugins.page.quick();
	});

	$('#topBanner').load("../inc/topbanner.html", function(){
		$plugins.page.topbnr();
	});
		
	$(win).on('scroll', function() {
		var $sidebar   = $(".sidebar")
			scrollTop = $(win).scrollTop(),
			$floatPos = 216,
			newPos = scrollTop + $floatPos + "px";

		// sidebar banner scrolling
		$sidebar.stop().animate({
			"top" : newPos
		}, 500);
		
		// 요금제 변경 플로팅버튼
		$plugins.page.fixedBtn();
	});

	$(win).on('resize', function(){
		var $uiDialog = $('.ui-dialog'),
			$l_h = $uiDialog.height(),
			$l_w = $uiDialog.width();
			
		$uiDialog.css({
			'left':'50%', 'margin-left': -$l_w/2 + 'px', 'top':'50%', 'margin-top': -$l_h/2 + 'px'
		});
	});

	$(doc).ready(function(){

		$plugins.page.thumbViewer();
		
		$plugins.uiForm();
		$plugins.uiFormCheck();
		$plugins.uiTooltip();
		
		$('input.date').datepicker({
			inline: true, 
			dateFormat: "yy-MM-dd",    /* 날짜 포맷 */ 
			prevText: '이전 달', 
			nextText: '다음 달', 
			defaultDate:new Date(),
			showButtonPanel: true,    /* 버튼 패널 사용 */ 
			changeMonth: true,        /* 월 선택박스 사용 */ 
			changeYear: true,        /* 년 선택박스 사용 */ 
			showOtherMonths: true,    /* 이전/다음 달 일수 보이기 */ 
			selectOtherMonths: true,    /* 이전/다음 달 일 선택하기 */         
			yearRange:'2010:+5',
			closeText: '닫기', 
			currentText: '오늘', 
			showMonthAfterYear: true,        /* 년과 달의 위치 바꾸기 */ 
			minDate: '-20y',
			/* 한글화 */ 
			monthNames : ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'], 
			monthNamesShort : ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'], 
			dayNames : ['일', '월', '화', '수', '목', '금', '토'],
			dayNamesShort : ['일', '월', '화', '수', '목', '금', '토'],
			dayNamesMin : ['일', '월', '화', '수', '목', '금', '토']			
		});
				
		var $cp_wrap = $('.cp-wrap');
		if($cp_wrap.hasClass('fixed')){
			$('footer').addClass('pdbt1');
		}

		var $thumb_layerbar = $('.thumb-layerbar');
		if($thumb_layerbar.hasClass('fixed')){
			$('footer').addClass('pdbt2');
		}

	});
})(jQuery, window, document);