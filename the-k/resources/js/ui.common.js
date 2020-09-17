;(function ($, win, doc, undefined) {
	
	'use strict';
	
	var global = "$utils", 
		nameSpace = "NETIVE.utils";
	function createNameSpace(identifier, module){
		var w = win, name = identifier.split('.'), p, i = 0;
	
		if(!!identifier){
			for (i = 0; i < name.length; i += 1){
				(!w[ name[i] ]) ? (i === 0) ? w[ name[ i ] ] = {} : w[ name[ i ] ] = {} : '';
				w = w[ name[ i ] ];
			}
		}
		if(!!module){
			for (p in module){
				if(!w[ p ]){
					w[ p ] = module[ p ];
				} else {
					throw new Error("module already exists! >> " + p);
				}
			}
		}
		return w;
	}
	
	if(!!window[global]){
		throw new Error("already exists global!> " + global);
	}
	window[global] = createNameSpace(nameSpace, {
		namespace: function(identifier, module){
			return createNameSpace(identifier, module);
		}
	});
})(jQuery, window, document);

;(function ($, win, doc, undefined) {
	var global = "$plugins", 
		nameSpace = "NETIVE.plugins";
	
	if(!!window[global]){
		throw new Error("already exists global!> " + global);
	}

	window[global] = $utils.namespace(nameSpace, {
		uiParallax : function(opt){
			var id = opt.id 
				$base = $('#' + id),
				$item = $base.find('.ui-parallax-item'),
				len = $item.length,
				callback = opt.callback,
				i = 0,
				item_h = [];
			
			for(i = 0; i < len; i++) {
				item_h.push($item.eq(i).offset().top);
			}

			$(win).off('scroll.'+ id ).on('scroll.'+ id, function(){
				act($(win).scrollTop());
			});

			function act(v){
				
				console.log(v);
				
				if (v !== 0) {
					for(i = 0; i < len; i++) {						
						var end = i === len - 1 ? item_h[i] : item_h[i + 1];
						if (item_h[i] < v && item_h[i + 1]  > v) {
							
							item_h[i + 1] = $item.eq(i + 1).offset().top;
							
						//	$item.eq(i + 1).css('margin-top', ((v - item_h[i]) / 2) * -1);
							if(v > $(doc).height()-$(win).height() - 5){
								//console.log('끝')
								$(win).off('scroll.'+ id , function(){
									if(v < $(doc).height()-$(win).height() - 5){
										$(win).off('scroll.'+ id ).on('scroll.'+ id, function(){
											act($(win).scrollTop());
										});
									}
								});
							}else {
								callback({ id: opt.id, index:i,  v: v, h: item_h[i] });
							}
							
						} 
					}
				}
				
				
			}
		}
	});

	NETIVE.uiFollow = {
		inner: function(opt){
			var id = opt.id,
				ps = opt.ps === undefined ? 'bottom' : opt.ps,
				add = opt.add === undefined ? false : opt.add,
				fix = opt.fix === undefined ? true : opt.fix,
				callback = opt.callback === undefined ? false : opt.callback,
				$id = $('#' + id),
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
					th = Math.ceil($id.find('.ui-position-wrap').outerHeight()),
					st = $(win).scrollTop(),
					wh = Math.ceil($(win).outerHeight()),
					dh = Math.ceil($(doc).outerHeight()),
					lh = (!!add) ? $('#' + add).outerHeight() : 0 ,
					lt = (!!add) ? dh - ($('#' + add).offset().top).toFixed(0) : 0;
					
				//console.log(opt.id, lt)
					
				$id.css('height', th);
				!!callback ? callback({ scrolltop: st }) : '';
				
				// 상단으로 고정
				if (ps === 'top') {
					if (fix === true) {
						if (tt - lh <= st) { 
							console.log(1);
							$id.removeClass(c);
							$id.find('.ui-position-wrap').removeAttr('style');
						} else { 
							console.log(2, lh);
							$id.addClass(c);
							$id.find('.ui-position-wrap').css('top', lh);
						}
					} else {
						if (tt - lh <= st) { 
							$id.addClass(c);
							$id.find('.ui-position-wrap').css('top', lh);
						} else { 
							$id.removeClass(c);
							$id.find('.ui-position-wrap').removeAttr('style');
						}
					}
				} 
				// 하단으로 고정
				else if (ps === 'bottom') {
					if (fix === true) {
						tt + th - wh <= st ? $id.removeClass(c) : $id.addClass(c);
					} else {
						if (tt + th - wh <= st) {
							$id.addClass(c).find('.ui-position-wrap').removeAttr('style');
							if (lt !== 0) {
								if (dh - (lt + wh) < st) {
									$id.find('.ui-position-wrap').css({ position: 'fixed', bottom:'auto' , top: (wh - th) - Math.abs((wh + lt) - (dh - st)) , zIndex: 9999 });
								} else{
									$id.find('.ui-position-wrap').removeAttr('style');
								}
							}
						} else {
							$id.removeClass(c);
						}
					}
				}
			}
		}
	}
	/*GNB메뉴*/
	$('#btn_gnb').on('click', function(){
		if($('.gnb_menu_wrap').hasClass('show')){
			$('.gnb_menu_wrap').stop().animate({
					'left' : -850 + 'px'
				});
			$('.dim').stop().animate({
				opacity:0
			},300, function(){
				$(this).hide();
			});
			$('.gnb_menu_wrap').removeClass('show');
		}else{
			$('.dim').css({
				display: 'block',
				opacity: 0
			}).stop().animate({
				opacity:1
			},300);
			
			$('.gnb_menu_wrap').stop().animate({
				'left' : 172
			}, function(){
				$('.gnb_menu_wrap').addClass('show');
			});
			
		}
	});
	$('.btn_close').on('click', function(){
		$('.gnb_menu_wrap').stop().animate({
				'left' : -850 + 'px'
			});
		$('.gnb_menu_wrap').removeClass('show');
		$('.dim').removeClass('show');
		$('.dim').stop().animate({
			opacity:0
		},300, function(){
			$(this).hide();
		});
		
	});
    /*마이페이지 레이어팝업*/
	$('#btn_mypage').on('click', function(){
        $('.layer_mypage').show().stop().animate({
            opacity:1,
            left:"143px"
        });
	});
	$('.layer_mypage .close').on('click', function(){
		$('.layer_mypage').stop().animate({
            opacity:0,
            left:"163px"
        }).fadeOut();
	});
	/*보험상담신청 레이어팝업*/
	$('.btn_consult').on('click', function(){
		console.log(1111)
		
        $('.layer_consult').show().stop().css({
        	'z-index' : 999
        }).animate({
            opacity: 1,
            'margin-top' : '-132.5px'
        });
		$('.dim').css({
			display: 'block',
			opacity: 0
		}).stop().animate({
			opacity:1
		},300);
	});
	$('.layer_consult .close').on('click', function(){
		$('.dim').css({
			display: 'none',
			opacity: 1
		}).stop().animate({
			opacity:0
		},300);
		$('.layer_consult').stop().animate({
            opacity:0,
            'margin-top' : '-245px',
            'z-index' : '-1'
        }).fadeOut();
	});
	$._mainSlide = {
        init : function(opt){
            var $el = $('#' + opt.id),
                $slideWrap = $el.find('ul'),
                $slideItem = $slideWrap.find('li'),
                $slideW = $slideItem.find('img').width(),
                $paging = $('.paging'),
                slideIndex = $paging.find('.on').index();
            $el.css({
                width : $slideW
            })    
            $slideWrap.css({
                width : $slideW * $slideItem.length,
                'margin-left' : (-$slideW * slideIndex) + 'px'
            })
            $('.main_slide').stop().animate({
                height: $slideWrap.find('li').eq(0).outerHeight()
            },600);
            $paging.find('.page-01').on('click', function(){
                var th = $(this);
                $slideWrap.stop().animate({
                    'margin-left': 0,
                    height: $slideWrap.find('li').eq(0).outerHeight()
                },600);
                $('.main_slide').stop().animate({
                    height: $slideWrap.find('li').eq(0).outerHeight()
                },600);
                $._mainSlide.remove(th)
                $('.ui-slide-tab img').attr('src','./resources/img/main2_d_tab01.png')
            });
            $paging.find('.page-02').on('click', function(){
               var th = $(this);
                $slideWrap.stop().animate({
                    'margin-left': -$slideW + 'px',
                    height: $slideWrap.find('li').eq(1).outerHeight()
                },600);
                $('.main_slide').stop().animate({
                    height: $slideWrap.find('li').eq(1).outerHeight()
                },600);
                $._mainSlide.remove(th)
                $('.ui-slide-tab img').attr('src','./resources/img/main2_d_tab02.png')
            });
            $paging.find('.page-03').on('click', function(){
                var th = $(this);
                $slideWrap.stop().animate({
                    'margin-left': -$slideW * 2 + 'px',
                    height: $slideWrap.find('li').eq(2).outerHeight()
                },600);
                $('.main_slide').stop().animate({
                    height: $slideWrap.find('li').eq(2).outerHeight()
                },600);
                $._mainSlide.remove(th)
                $('.ui-slide-tab img').attr('src','./resources/img/main2_d_tab03.png')
                
            });
        },

        remove : function(th){
            var $pageBtn = $('.paging a');
            $pageBtn.removeClass('on')
            th.addClass('on');
        }
    }
	
	$._aniDim = {
		dim : null,
		wW : null,
		wH : null,
		mob : null,
		mobD : null,
		mobW : null,
		mobH : null,
		tbW : null,
		lrH : null,
		init : function(v, r){
			o = this;
			o.dim = $('.dimWrap');
			o.wW = $(window).width();
			o.wH = $(window).height();
			o.mob = $('.mob');
			o.mobD = $('.mobData');
			o.mobW = o.mobD.innerWidth();
			o.mobH = o.mobD.innerHeight();
			o.tbW = (o.wW - o.mobW)/2;
			o.lrH = (o.wH - o.mobH)/2;
			o.openFn(v, r);
		},
		openFn : function(v, r){
			if (v) {
				o.dim.show().animate({
					'border-top-width'    : o.lrH + 300 + 'px',
					'border-bottom-width' : o.lrH + 300 + 'px',
					'border-right-width'  : o.tbW + 300 + 'px',
					'border-left-width'   : o.tbW + 300 + 'px'
				},700,'easeInOutQuint', function(){
					location.href = r;
				});
				//o.mob.delay(300).animate({ 'opacity' : 1, background: '#222' },500);
			} else {
				o.dim.css({
					'border-top-width'    : o.lrH + 'px',
					'border-bottom-width' : o.lrH + 'px',
					'border-right-width'  : o.tbW + 'px',
					'border-left-width'   : o.tbW + 'px',
					display: 'block'
				});
				o.mob.css({ 'opacity' : 1 },500);
				$('.mdim').stop().animate({
					opacity:0
				}, function(){
					$(this).hide();
				})
			}
		},
		closeFn : function(r){
			o.dim.animate({
				'border-width' : 0
			},700,'easeInOutQuint',function(){
				o.dim.hide();
				location.href = r;
			});
			o.mob.animate({ 'opacity' : 0 },300);
			$('main').animate({ 'opacity' : 0 },700);
			$('.ctrl').fadeOut();
		}
	}
	
	$(document).ready(function(){
		$('.mobView').click(function(){
			$._aniDim.init(true, $(this).data('href'));
		});
		$('.mobClose').click(function(){
			$._aniDim.closeFn($(this).data('href'));
		});
	});
	$(window).resize(function(){
		 if($('.dimWrap').css('display') == 'none') return;
		waitForFinalEvent(function(){
			$._aniDim.init();
	    }, 100, "some unique string");
	});
	
	//https://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed
	var waitForFinalEvent = (function () {
		var timers = {};
		return function (callback, ms, uniqueId) {
			if (!uniqueId) {
				uniqueId = "Don't call this twice without a uniqueId";
			}
			if (timers[uniqueId]) {
	 			clearTimeout (timers[uniqueId]);
			}
			timers[uniqueId] = setTimeout(callback, ms);
		};
	})();
})(jQuery, window, document);

// common
;(function ($, win, doc, undefined) {
	$(window).on('load', function(){
		
		$('main').delay(1000).stop().animate({
			opacity:1
		},1000);
		
		/*$("body").mCustomScrollbar({
			callbacks: {
				whileScrolling:function(){
					NETIVE.mcsTop = this.mcs.top;
				      //console.log(NETIVE.mcsTop);
				}
			}
		});*/
		
		
		/*window.gambitScrollWheelAmount = 16;
		window.gambitScrollKeyAmount = 10;
		window.gambitScrollDecompositionRate = 0.95;
		window.gambitUseRequestAnimationFrame = true;*/
	});
	
})(jQuery, window, document);
