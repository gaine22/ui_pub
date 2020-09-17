;(function ($, win, doc, undefined) {
	
	'use strict';

	var 
		ua = navigator.userAgent,
		div = doc.createElement('div'),
		inp = doc.createElement("input"),
		ie = ua.match(/(?:msie ([0-9]+)|rv:([0-9\.]+)\) like gecko)/i), 
		prefix = ['Webkit', 'Moz', 'O'],
		transition = 'transition',
		transform = 'transform',
		requestanimationframe = 'requestanimationframe',
		cancelanimationframe = 'cancelanimationframe',
		transfroms = {
			translate3d : 'taranslate3d(0px, 0px, 0px)',
			translate : 'tranaslate(0px, 0px)',
			scale3d : 'scale3d(1,1,1)',
			scale : 'scale(1,1)'
		},
		browser = $.borwser,
		support = $.support,
		device = $.device,
		deviceInfo = ['android', 'iphone', 'ipod', 'ipad', 'blackberry', 'windows ce', 'samsung', 'lg', 'mot', 'sonyericsson', 'nokia', 'opeara mini', 'opera mobi', 'webos', 'iemobile', 'kfapwi', 'rim', 'bb10'],
		uAgent = ua.toLowerCase(),
		deviceInfoAmount = deviceInfo.length,
		version, i;

	if (!browser) {
		$.browser = browser = {};
	}
	
	for (var j = 0; j < deviceInfoAmount; j++) {
		//console.log(uAgent, deviceInfo[j], uAgent.match(deviceInfo[j]));
		if (uAgent.match(deviceInfo[j]) != null){
			device = deviceInfo[j];
			break;
		}
	}
	
	var filter = "win16|win32|win64|mac|macintel";

	if ( navigator.platform ) {
		if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
			//mobile
			//alert('mobile 접속');
		} else {
			//pc
			//alert('pc 접속');
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

	// touch, mobile 환경 구분
	support.touch = browser.ios || browser.android || (doc.ontouchstart !== undefined && doc.ontouchstart !== null);
	browser.mobile = support.touch && ( browser.ios || browser.android);
	
	// false 삭제
	for (i in browser) {
		if (!browser[i]) {
			delete browser[i]
		}
	}
	
	// os 구분
	browser.os = (navigator.appVersion).match(/(mac|win|linux)/i),
	browser.os = (browser.os) ? browser.os[1].toLowerCase() : '';

	// version 체크
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
	
	// ie 기본 프로퍼티 추가 및 버전 체크
	support.svgimage = true;
	support.pointerevents = true;
	if (ie) {
		browser.ie = ie = parseInt( ie[1] || ie[2] );
		if ( 9 > ie ) {
			browser.oldie = true;
		} else if ( 9 == ie ) {
			prefix.push('ms');
		}
		if ( 11 > ie ) {
			support.pointerevents = false;  
		}
		if ( 9 > ie ) {
			support.svgimage = false; 
		}
	}

	support.pushstate = !!history.pushState; // ie9 false
	support.mediaquery = typeof(win.matchMedia) == 'function' || !browser.oldie; // ie8 false
	support.placeholder = ("placeholder" in inp);
	support.video = doc.createElement('video').canPlayType !== undefined; // ie8 false
	support.backgroundsize = 'backgroundSize' in div.style; // ie8 false
	if ( support.backgroundsize ) {
		div.style.backgroundSize = 'cover';
		support.backgroundsize = div.style.backgroundSize == 'cover';
	}
	try {
		if (browser.ie > 8 || !browser.ie) {
			div.style.background = "rgba(0, 0, 0, 0)";
		} 
		support.rgba = div.style.background == 'rgba(0, 0, 0, 0)';
	} catch(e) {
		support.rgba = false;
	}
	support.canvas = doc.createElement('canvas');
	support.canvas = support.canvas.getContext && support.canvas.getContext('2d');
	
	// transition check : 지원여부에 따라 접두사 추가
	if ( div.style[transition] != undefined ) {
		support.transition = transition;
	} else {
		transition = 'Transition';
		for ( i = 0; i < 4; i++ ) {
			if ( div.style[prefix[i]+transition] !== undefined ) {
				support.transition = prefix[i]+transition;
				break;
			}
		}
	}
	
	// ie8 false
	if (div.style[transform] != undefined) {
		support.transform = transform;
	} else {
		transform = 'Transform';
		for (i = 0; i < 4; i++) {
			if (div.style[prefix[i] + transform] !== undefined) {
				support.transform = prefix[i] + transform;
				break;
			}
		}
	}
	if (win[requestanimationframe]) {
		support.requestanimationframe = true;
	} else {
		requestanimationframe = 'RequestAnimationFrame';
		for ( i = 0; i < 4; i++ ) {
			if ( win[prefix[i]+requestanimationframe] !== undefined ) {
				win.requestAnimationFrame = w[prefix[i]+requestanimationframe];
				win.cancelAnimationFrame = w[prefix[i]+cancelanimationframe];
				support.requestanimationframe = true;
				break;
			}
		}
	}
	/* 
	if ( !support.requestanimationframe ) {
		win.requestAnimationFrame = (function () {
			var lasttime = 0;
			return function (callback) {
				var currenttime = gettime();
				var timetocall = Math.max(0, 16-(currenttime-lasttime));
				lasttime = currenttime+timetocall;
				return setTimeout(function () { callback(currenttime+timetocall); }, timetocall);
			}
		})();
		win.cancelAnimationFrame = function (id) {
			clearTimeout(id);
		}
	}
	*/
	$('html')
		.addClass(browser.os)
		.addClass(browser.chrome? "chrome" : browser.firefox ? "firefox" : browser.opera ? "opera" : browser.safari ? "safari" : browser.ie ? "ie ie" + browser.ie : "")
		.addClass(browser.ie && 8 > browser.ie ? "ie8" : "")
		.addClass(browser.ios ? "ios" : browser.android ? "android" : "")
		.addClass(support.transition ? 'transition' : 'notransition')
		.addClass(support.transform ? 'transform' : 'notransform')
		.addClass(support.backgroundsize ? 'backgroundsize' : 'nobackgroundsize')
		.addClass(support.rgba ? 'rgba' : 'norgba')
		.addClass(support.svgimage ? 'svg' : 'nosvg')
		.addClass(support.pointerevents ? 'pointerevents' : 'nopointerevents')
		.addClass(support.opacity ? 'opacity' : 'noopacity');
		
	/*
	* easings.
	* Convert to JS from "Robert Penner's Easing Functions" http://www.robertpenner.com/easing/
	*/
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
		easing,
		
		/*
		* css transition cubic-bezier
		* from "Ceaser - CSS Easing Animation Tool - Matthew Lein" http://matthewlein.com/ceaser/
		*/
		cubicbeziers = {
			linear: '0.250, 0.250, 0.750, 0.750',
			ease: '0.250, 0.100, 0.250, 1.000',
			'ease-in': '0.420, 0.000, 1.000, 1.000',
			'ease-out': '0.000, 0.000, 0.580, 1.000',
			'ease-in-out': '0.420, 0.000, 0.580, 1.000',
			easeInQuad: '0.550, 0.085, 0.680, 0.530',
			easeInCubic: '0.550, 0.055, 0.675, 0.190',
			easeInQuart: '0.895, 0.030, 0.685, 0.220',
			easeInQuint: '0.755, 0.050, 0.855, 0.060',
			easeInSine: '0.470, 0.000, 0.745, 0.715',
			easeInExpo: '0.950, 0.050, 0.795, 0.035',
			easeInCirc: '0.600, 0.040, 0.980, 0.335',
			easeInBack: '0.600, -0.280, 0.735, 0.045',
			easeOutQuad: '0.250, 0.460, 0.450, 0.940',
			easeOutCubic: '0.215, 0.610, 0.355, 1.000',
			easeOutQuart: '0.165, 0.840, 0.440, 1.000',
			easeOutQuint: '0.230, 1.000, 0.320, 1.000',
			easeOutSine: '0.390, 0.575, 0.565, 1.000',
			easeOutExpo: '0.190, 1.000, 0.220, 1.000',
			easeOutCirc: '0.075, 0.820, 0.165, 1.000',
			easeOutBack: '0.175, 0.885, 0.320, 1.275',
			easeInOutQuad: '0.455, 0.030, 0.515, 0.955',
			easeInOutCubic: '0.645, 0.045, 0.355, 1.000',
			easeInOutQuart: '0.770, 0.000, 0.175, 1.000',
			easeInOutQuint: '0.860, 0.000, 0.070, 1.000',
			easeInOutSine: '0.445, 0.050, 0.550, 0.950',
			easeInOutExpo: '1.000, 0.000, 0.000, 1.000',
			easeInOutCirc: '0.785, 0.135, 0.150, 0.860',
			easeInOutBack: '0.680, -0.550, 0.265, 1.550'
		};

	for ( easing in easings ) {
		jQuery.easing[easing] = (function(easingname) {
			return function(x, t, b, c, d) {
				return easings[easingname](t, b, c, d);
			}
		})(easing);
	}
	
	// 쿠키값 설정, 가져오기
	$._cookie = {
		set: function(name, value, term, path, domain) {
			var cookieset = name + '=' + value + ';',
				expdate;
			if ( term ) {
				expdate = new Date();
				expdate.setTime( expdate.getTime() + term * 1000 * 60 * 60 * 24 ); // term 1 is a day
				cookieset += 'expires=' + expdate.toGMTString() + ';';
			}
			if ( path ) {
				cookieset += 'path=' + path + ';';
			}
			if ( domain ) {
				cookieset += 'domain=' + domain + ';';
			}
			document.cookie = cookieset;
		},
		get: function(name) {
			var match = ( document.cookie || ' ' ).match( new RegExp(name+' *= *([^;]+)') );
			return ( match ) ? match[1] : null;
		}
	};
	
	$._uiFixed = {
			init: function(opt){
				var $this = $('#' + opt.id),
					ps = (opt.ps === false) ? 'top' : opt.ps, 
					classname = (ps === 'top') ? 'ui-fixed-top' : 'ui-fixed-bottom',
					type = (opt.type === false) ? 'f_r' : opt.type,
					t, th, st, wh, st_p = 0, dir;

				type === 'f_r' ? $this.addClass(classname) : '';
				$(win).off('scroll.'+ opt.id).on('scroll.'+ opt.id, function(){
					t = $this.offset().top;
					th = $this.find('.ui-position-wrap').outerHeight();
					st = $(this).scrollTop();
					wh = $(this).outerHeight();
					
					dir = st > st_p ? 'down' : 'up';
					st_p = st;
					
					if (ps === 'top') {
						type === 'f_r' ? 
							t <= st ? $this.removeClass(classname) : $this.addClass(classname): 
							t <= st ? $this.addClass(classname) : $this.removeClass(classname);
					} else {
						type === 'f_r' ? 
							t + th - wh <= st ? $this.removeClass(classname) : $this.addClass(classname): 
							t + th - wh <= st ? $this.addClass(classname) : $this.removeClass(classname);
					} 
				});
			}
		}
	/* 포커스 이동 scope 영역에서 홀딩
	 * 170301 class 대신 attr로 hold속성으로 대체
	 */
	$._uiHold = {
		hold : function(scope) {
			var $hold = $(scope),
				$hold_focus = $hold.find('h1, a, input, button, label, select');
			
			$hold.find('h1').attr('tabindex',0);
			$hold_focus.eq(0).attr('hold','s');
			$hold_focus.eq(-1).attr('hold','e');
			$hold.off('keydown.hold').on('keydown.hold', function (e) {
				if (e.shiftKey && e.keyCode == 9) {
					e.preventDefault();
					$hold.find('[hold="e"]').focus();
				}
			});
			$hold.find('[hold="s"]').off('keydown.hold').on('keydown.hold', function (e) {
				$hold.off('keydown.modal');
				if (e.shiftKey && e.keyCode == 9) {
					e.preventDefault();
					$hold.find('[hold="e"]').focus();
				}
			});
			$hold.find('[hold="e"]').off('keydown.hold').on('keydown.hold', function (e) {
				$hold.off('keydown.modal');
				if (!e.shiftKey && e.keyCode == 9) {
					e.preventDefault();
					$hold.find('[hold="s"]').focus();
				}
			});
		}
	}
	
	/* 지정된 범위 영역에서 scroll 이벤트에 0~1 값 설정
	 * (scroll, range, start)
	 * scorll : 스크롤이벤트 값
	 * range : 스크롤 범위 설정 0 ~ range
	 * decrease : 1에서 0으로
	 * increase : 0에서 1로
	 */
	$._opacityValue = {
		decrease : function (scroll, range) {
			// 1 > 0
			var value = ((range - scroll) / range).toFixed(2);
			return (value < 0) ? 0 : value;
		},
		increase : function (scroll, range) {
			// 0 > 1
			var value = ((scroll) / range).toFixed(2);
			return (value > 1) ? 1 : value;
		}
	}

	//바닥 클릭 시 callback
	$._backDrop = {
		close : function (target, callback) {
			var base = target,
				$body = $('body'),
				backdrop = false,
				eventHandle = ['mouseover.backdrop', 'mouseleave.backdrop' ];

			// 바닥 클릭 시 닫히기
			$(base)
				.off(eventHandle[0]).on(eventHandle[0], function (){
					backdrop = true;
					docEvent();
				})
				.off(eventHandle[1]).on(eventHandle[1], function (){
					backdrop = false;
					docEvent();
					if (!$body.data('old-backdrop-target')) {
						$body.data('old-backdrop-target', base);
						$body.data('old-backdrop-callback', callback);
					}
					
				})
				.off('click.old').on('click.old', function(){
					(!!$body.data('old-backdrop-target') && $body.data('old-backdrop-target') !== base) ? docEventOld() : '';
				});
			
			function docEvent() {
				(backdrop === true) ? $(doc).off('click.sel_doc') : $(doc).off('click.sel_doc').one('click.sel_doc', docClick);
			}
			function docEventOld() {
				var old_callback = $body.data('old-backdrop-callback');
				
				old_callback();
				$body.removeData('old-backdrop-target');
				$body.removeData('old-backdrop-callback');
			}
			function docClick() {
				(!!$body.data('old-backdrop-target') && $body.data('old-backdrop-target') !== base) ? docEventOld() : '';

				backdrop = true;
				callback();
			}	
		}
	}
	
	/*
	 * 숫자 카운트모션 수정: 17.03.12
	 * data.selector : css 방식의 셀렉터
	 * data.comma : 자동콤마사용 유무. true 사용 / false 미사용
	 * data.value : 숫자 및 문자식 사용. 값이 false 일 경우 html .ui_count 값  
	 * data.speed : 모션 속도
	 * data.eff : 모션 효과
	 */
	$._uiCountNumber = {
		start : function(data) {
			var $base = $(data.selector);

			if ($base.data('ing') === true) {
				return false;
			} 
			
			var countNum = !!data.value === true ? data.value : $base.text(),
				base_h = $base.outerHeight(),
				textNum = 0,
				len = countNum.toString().length,
				comma = data.comma,
				speed = !!data.speed === true ? Number(data.speed) : 1000,
				eff  = !!data.eff === true ? data.eff : 'easeOutQuart',
				i = 0,
				nn = 1,
				step, re, timer, r;
			
			comma === true ?  numberWithCommas(countNum) : textNum = countNum;
			base_h === 0 ? base_h = $base.text('0').outerHeight() : '';
			
			$base.data('ing',true).empty().css('height', base_h);
			len = textNum.length;
			step = len;
			re = Math.ceil(len / 9); 
			(step < 9) ? step = 9 - len : step = 1;
						
			// 숫자 단위만큼 
			for (i; i < len; i++) {
				var n = Number(textNum.substr(i, 1)),
					j = 0,
					$thisNum, $base_div;

				if (isNaN(n)) {
					// 숫자가 아닐때 ', . '
					$base.append('<div class="n' + i + '"><div class="ui_count_og" style="top:' + base_h + 'px">' + textNum.substr(i, 1) + '</div></div>');
					$base.find('.n' + i).append('<span>' + textNum.substr(i, 1) + '</span>');
				}
				else {
					// 숫자일때
					$base.append('<div class="n' + i + '"><div class="ui_count_og" style="top:' + base_h + 'px">' + n + '</div></div>');

					for (j; j < step; j++){
						var k = j > 9 ? j - 10 : j,
							txt = '<span>' + k + '</span>';
						$base.find('.n' + i).append(txt);
					}
					$base.find('.n' + i).append('<span>' + n + '</span>');
					step = step + 1;
				}
				
				$base_div = $base.children('.n' + i);
				$base_div.find('span').wrapAll('<div class="ui_count_num" style="top:' + base_h + 'px"></div>');
				$thisNum = $base_div.find('.ui_count_num');
				$thisNum.data('height', $thisNum.height());	
			}
			// comma, 소수점 
			function numberWithCommas(n) {
	            var parts = n.toString().split(".");
	            textNum = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
	        } 
			
			r = len;
			timer = setInterval(function() {
				count(r);
				r = r - 1; 
				if (r < 0) {
					// 완료후 텍스트로 다시 변환
					clearInterval(timer);
					setTimeout(function() {
						$base.text(textNum).data('ing', false);
					}, speed);
				}
			},100);
			
			function count(r){
				var $current_num = $base.children('.n' + r).find('.ui_count_num'),
					num_h = Number($current_num.data('height'));

				$current_num.stop().animate({
					top : (num_h - base_h) * -1
				},speed , eff);
			}
		}
	}
	
	/* Ajax 
	var xmlHttp = false;
	try {
		xmlHttp = new XMLHttpRequest();
	}
	catch (trymicrosoft) {
		try {
			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		} 
		catch (othermicrosoft) {
			try {
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			} 
			catch (failed) {
				xmlHttp = false;
			}
		}
	}
	if (!xmlHttp && typeof XMLHttpRequest != 'undefined') {
	  xmlHttp = new XMLHttpRequest();
	}
	*/

	/*!
	 * @module a variety of module
	 * @author jo
	 * @email jo@netive.co.kr
	 * @create 2016-07-17
	 * @license MIT License
	 */
	$._uiLoading = {
		show : function(target){
			var $body = $('body');
			
			if (!$body.data('loadingfull')) {
				var loading = 
					'<div class="ui_loading loading_netive">' +
					'<div class="loading_bg"></div>' +
					'<div class="loading_img"><span>잠시만 기다려주세요.</span></div>' +
					'</div>';
				
				if (!target) {
					$body.prepend(loading); 
					$body.data('loadingfull', true);
				} 
				else {
					$(target).prepend(loading);
					$body.data('loadingfull', false);
				}

				$('.ui_loading').fadeIn(500, function(){
					$('.loading_bg').stop().animate({
						opacity : 0.8
					});
					imgShow();
				});
			}
			
			function imgShow(){
				$('.ui_loading').find('.loading_img').stop().animate({
					opacity : 1
				}, function(){
					imgHide();
				});
			}
			function imgHide(){
				$('.ui_loading').find('.loading_img').stop().animate({
					opacity : 0
				}, function(){
					imgShow();
				});
			}
		},
		hide : function(target) {
			if (!target) {
				// 전체
				$('body > .ui_loading').fadeOut(300, function(){
					$(this).remove();
				});
			}
			else {
				$(target).find('.ui_loading').fadeOut(300, function(){
					$(this).remove();
				});
			}
			$('body').data('loadingfull', false);
		}
	}
	
	// 스크롤 위치 이동
	$._uiScroll = {	
		move : function(value, speed, callback) {
			!value ? value = 0 : '';
			isNaN(speed) ? speed = 600 : '';
			var $target = $('html, body');
			
			//(browser.chrome ) ? $target = $('body') : '';

			$target.animate({
				scrollTop : value
			},speed , function(){
				!!callback ? callback() : '';
			});
		}
	};
	
	$.fn.extend({
		uiAjaxPage : function (opt) {
			var defaults = {
					url : '',
					callname : null
				},
				opt = $.extend(defaults, opt);
			
			return this.each(function (){	
				var $this = $(this),
					url = opt.url,
					callname = opt.callname,
					timer;
				
				$.ajax({
					type 		: 'GET',
					url 		: url,
					cache		: false,
					//async		: false,
					headers		: { "cache-control": "no-cache", "pragma": "no-cache" },
					error 		: function() {
										$this.text('error');
									},
					success 	: function (result) {
										// page 전환 시 상단 이동
										//$._uiScroll.move(0, 300, function(){
											//$._uiLoading.hide();
											$this.html(result);
											(!!callname) ? N.ui_ajaxPage_call(callname) : '';	
										//});
									}
				});
				
				/*
				xmlHttp.open("GET", url, true);
				xmlHttp.onreadystatechange = function () {
					if (xmlHttp.readyState == 4) {
						if (xmlHttp.status == 200) {
							var result = xmlHttp.responseText;
							$this.html(result);
							N.ui_ajaxPage_call(callname);
						}
					}
					if (xmlHttp.readyState == 2) {
						alert(1);
					}
					
				};
				xmlHttp.send(null);
				*/
			});	
		},

		uiGuideline : function (opt){
			var defaults = {
				},
				opt = $.extend(defaults, opt);
			return this.each(function (){
				var $base = $(this),
					$line = $base.parent(),
					ps_x, ps_y;
				
				function pos(e) {
					if (e.touches !== undefined) {
						return {
							x : e.touches[0].pageX,
							y : e.touches[0].pageY
						};
					}
					if (e.touches === undefined) {
						if (e.pageX !== undefined) {
							return {
								x : e.pageX,
								y : e.pageY
							};
						}
						if (e.pageX === undefined) {
							return {
								x : e.clientX,
								y : e.clientY
							};
						}
					}
				}

				$base.on('touchstart.guide mousedown.guide', function (e){
					if ($(this).data('align') === 'hz') {
						ps_y = pos(e).y;
						
						$(doc).on('touchmove.guide mousemove.guide', function (e){
							$line.css('top', pos(e).y);
						});
						$(doc).on('touchend.guide touchcancel.guide mouseup.guide', function (e){
							$(doc).off('touchmove.guide mousemove.guide');
						});
					} 
					if ($(this).data('align') === 'vt') {
						ps_x = pos(e).x;
						
						$(doc).on('touchmove.guide mousemove.guide', function (e){
							$line.css('left', pos(e).x);
						});
						$(doc).on('touchend.guide touchcancel.guide mouseup.guide', function (e){
							$(doc).off('touchmove.guide mousemove.guide');
						});
					}
				});		
			});
		},
		
		uiGraphCircle : function(opt) {
			var defaults = {
					line : 8,
					from : 0,
					speed : 1000,
					range : 200,
					rotate : 270,
					color : 'red',
					bgcolor : 'transparent',
					noanimation : false,
					autostart : true	
				},
				opt = $.extend(defaults, opt);
			
			return this.each(function() {
				 var
				 	box = $(this),
			        canvas = document.createElement('canvas'),
			        context = canvas.getContext('2d'),
			        boxsize = box.outerWidth(),
			        value = box.find('.ui_value').text(),
			        linewidth = opt.line,
			        barcolor = opt.color,
			        bgcolor = opt.bgcolor,
			        from = opt.from,
			        speed = opt.speed,
			        range = opt.range,
			        rotate = opt.rotate,
			        noanimation = opt.noanimation,
			        autostart = opt.autostart,
			        to = value,
			        now = {percent: from},
			        nowanimating = false,
			        animateduration = 2;
			        //animateoptions = {ease: 'easeInOutCubic', onUpdate: onupdate, onComplete: onend};
			    
			    var app = {
			    	init : function() {
						canvas.width = canvas.height = boxsize;
						box.append(canvas);
						(rotate !== 0) ? box.find('canvas').css('transform','rotate(' + rotate + 'deg)') : '';
						context.lineWidth = linewidth;
						context.lineCap = 'round';
						context.strokeStyle = barcolor;
						
						(noanimation) ? autostart = true : '';
						autostart ? app.start() :  app.reset();
						app.evt();
			    	},
			    	ready : function(){
			    		app.draw(from);
			    	},
			    	start : function(){
			    		if (!nowanimating) {
				            now.percent = noanimation ? value : from;
				            if (now.percent == to) {
				                app.draw(now.percent);
				            } else {
				                nowanimating = true;
				                //animateoptions.percent = to;
				                
				                box.animate({ 
				                	'user-chart' : to 
				                }, { 
				                	duration: speed,
				                	easing : 'easeInOutCubic' ,
				                	step : function(i){
					                	now.percent = i;
					                	app.onupdate();
					                },
					                complete : app.onend()
				                });

				                //TweenMax.to(now, animateduration, animateoptions);
				            }
				        }
			    	},
			    	onupdate : function(){
			    		app.draw(now.percent);
			    	},
			    	onend : function(){
				        nowanimating = false;
			    	},
			    	draw : function(percent) {
			    		var boxhalfsize = boxsize/2;

				        percent = Math.max(percent, 0.005);
				        context.clearRect(0, 0, boxsize, boxsize);

				        // bg
				        context.beginPath();
				        context.strokeStyle = bgcolor;
				        context.arc(boxhalfsize, boxhalfsize, boxhalfsize-linewidth/2, 0, 2*Math.PI);
				        context.stroke();

				        // bar
				        context.beginPath();
				        context.strokeStyle = barcolor;
				        context.arc(boxhalfsize, boxhalfsize, boxhalfsize-linewidth/2, 0-Math.PI/2, (2*Math.PI)*percent/range-Math.PI/2);
				        context.globalAlpha = 1;
				        context.stroke();
			    	},
			    	reset : function(){
			    		app.draw(from);
			    	},
			    	evt : function() {
			    		box.find('.ui_start').on('click.chartstart', function(){
			    			value = box.find('.ui_value').text();
			    			to = value;
			    			app.start();
			    		});
			    	}
			    }
			   app.init();
			});
		   

		},
		/*
		 * ---------------------------------------------------------------------------
		 * 이름 : uiCountNumber
		 * 설명 : 숫자 촤르르르 올라가는 효과 
		 * 옵션 : 
		 * 		comma 	: Boolean 		'true' or 'false' 값 사용. 천단위로 ',' 추가 필요 시 true
		 */
        uiCountNumber : function(opt){
			var defaults = {
					comma : true
				},
				opt = $.extend(defaults, opt);
			
			return this.each(function() {
				var $base = $(this),
					countNum = $base.text(),
					base_h = $base.outerHeight(),
					textNum = 0,
					len = countNum.length,
					comma = opt.comma;
				
				var app = {
					init: function() {
						var i = 0,
							nn = 1,
							step, re;
						
						comma === true ?  numberWithCommas(countNum) : textNum = countNum;
						
						$base.empty();
						len = textNum.length;
						step = len;
						re = Math.ceil(len / 12); 
						(step < 12) ? step = 12 - len : step = 1;

						// 숫자 단위만큼 
						for (i; i < len; i++) {
							var n = Number(textNum.substr(i, 1)),
								j = 0,
								$thisNum, $base_div;
							
							if (isNaN(n)) {
								// 숫자가 아닐때 ', . '
								$base.append('<div class="n' + i + '"><b style="top:' + base_h + 'px">' + textNum.substr(i, 1) + '</b></div>');
							}
							else {
								// 숫자일때
								$base.append('<div class="n' + i + '"><b style="top:' + base_h + 'px">' + n + '</b></div>');

								for (j; j < step; j++){
									var txt = '<span>' + j + '</span>';
									$base.find('.n' + i).append(txt);
								}
								if (nn >= re) {
									step = step + 1;
									nn = 1;
								}
								nn = nn + 1;

								$base_div = $base.children('div').eq(i);
								$base_div.find('span').wrapAll('<div class="num" style="top:' + base_h + 'px"></div>');
								$thisNum = $base_div.find('.num');
								$thisNum.data('height', $thisNum.height());	
							}	
						}
						// comma, 소수점 
						function numberWithCommas(n) {
                            var parts = n.toString().split(".");
                            textNum = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
                        }
						
						app.act();
					},
					act : function() {
						var n = len,
							timer;
						
						timer = setInterval(function() {
							count(n);
							n = n - 1;
							if (n < 0) {
								clearInterval(timer);
								setTimeout(function() {
									$base.text(textNum);
								}, 1000);
							}
						},100);
						
						function count(n){
							var $current = $base.children('.n' + n),
								$current_num = $current.find('.num'),
								num_h = Number($current_num.data('height'));
								
							$current_num.stop().animate({
								top : num_h * -1
							},1000 , 'easeOutQuart');
							$current.find('b').stop().delay(400).animate({
								top : 0
							},300, 'easeOutQuart');
						}
					}
				}
				app.init();
			});
		},
		
		/*
		 * ---------------------------------------------------------------------------
		 * 이름 : uiCardlist
		 * 설명 : 가로폭이 고정, 세로폭 유동적인 카드타입의 목록. 
		 * 필수 : image (기준으로 가로,세로 값이 정해짐).
		 * 옵션 : 
		 * 		margin 	: Number 		상하좌우 마진 값
		 */
		uiCardlist : function(opt) {
			var defaults = {
					margin : 10
				},
				opt = $.extend(defaults, opt);
			
			return this.each(function() {
				var base = this,
					$base = $(base), 
					$item = $base.find('.ui_item'),
					mg = opt.margin,
					add_n, item_col, item_sum, wrap_w, item_w, item_row, item_h, timer;
				
				var app = {
					init : function(){
						$base = $(base);
						$item = $base.find('.ui_item');
						wrap_w = $base.outerWidth();
						item_w = $item.outerWidth();
						item_sum = $item.length;
						item_row = Math.floor(wrap_w / (item_w + mg));
						item_col = [];
						add_n = 0;
						$item.css('opacity', 1);

						app.itemCol();
					},
					itemCol : function() {
						for (var i = 0; i < item_row; i++) {
							item_col[i] = 0;
						}
						app.listRow();
					},
					eventHandle : function() {
						var $ui_add = $base.find('.ui_add');
						
						$ui_add.on('click', app.addRow);
					},
					addRow : function() {
						add_n = $base.find('.ok').length;
						item_sum = $base.find('.ui_item').length;
						
						$base.imagesLoaded(function(){
							app.listRow();
						});
					},
					listRow : function(){
						var i = add_n,
							minH, maxH, nextN, item_h;
						
						$item = $base.find('.ui_item');

						for (i; i < item_sum; i++) {
							minH = Math.min.apply(null, item_col);							
							nextN = item_col.indexOf(minH);
							item_h = Number($item.eq(i).outerHeight() + mg);

							$item.eq(i).css({
								position: 'absolute',
								left : (item_w * nextN) + (mg * nextN),
								top : item_col[nextN],
								opacity: 1
							}).addClass('ok');
							
							item_col[nextN] = Number(minH + item_h);
						}

						maxH = Math.max.apply(null, item_col);
						$base.css('height', maxH).data('row', item_col);
					},
					resizeRow : function(){
						$(win).on('resize', function(){
							clearTimeout(timer);
							$item.css('opacity', 0.5);
							
							if(wrap_w !== $base.outerWidth()) {
								timer = setTimeout(function(){
									app.init();
								},500);
							}
							else {
								$base.find('.ui_item').css('opacity', 1);
							}
						});
					}
				}
				app.init();
				app.resizeRow();
				app.eventHandle();
			});
		},
		
		/*
		 * ---------------------------------------------------------------------------
		 * 이름 : uiTetrislist
		 * 설명 : 테트리스처럼 차곡차곡 쌓이는 목록. 이미지만 표현되는 포토갤러리에 적합.
		 * 필수 : 이미지(기준으로 가로,세로 값이 정해짐). 이미지 필수적인 요소임. 
		 * 옵션 :
		 * 		type : String		'item' 이미지 최소단위 설정(unit)값 기준으로 전체가로폭을 나누어 세로단 설정. 가로폭에 따라 유동적으로 세로단이 바뀜. 이미지크기는 고정.
		 * 			 					'col' 세로단(unit_col) 기준으로 설정. 가로폭에 따라 이미지크기가 유동적으로 변함. 세로단 수는 고정.
		 * 		unit	 : Number 		최소 가로값 입력 단위는 px. type : 'item', 'col' 양쪽에서 쓰임.
		 * 		unit_col : Number		세로단 갯수 입력. type : 'col' 에서만 쓰임.
		 */
		uiTetrislist : function(opt, callback) {
			var defaults = {
					type : 'item',
					unit : 270, 
					unit_col : 4
				},
				opt = $.extend(defaults, opt);
			
			return this.each(function() {
				var base = this,
					$base = $(base),
					$item = $base.find('.ui_item'),
					$btn = $base.find('.ui_add'),
					
					type = opt.type,
					unit = opt.unit,
					unit_col = opt.unit_col,
					
					item_col = [],
					add_n = 0,
					top_add = 200,
					item_sum, wrap_w, unit_w, item_w, item_h, col_length, j, per, timer;
				
				var app = {
					init : function(){
						$base = $(base);
						$item = $base.find('.ui_item');
						$btn = $base.find('.ui_add');
						item_col = [];
						
						// 기본 옵션으로 
						type 		= (!!$base.data('type')) ? $base.data('type') : opt.type;
						unit 		= (!!$base.data('unit')) ? $base.data('unit') : opt.unit;
						unit_col 	= (!!$base.data('unit-col')) ? $base.data('unit-col') : opt.unit_col;
						add_n = 0;
						
						$base.removeAttr('style');
						$item.removeAttr('style');
						$item.find('img').removeAttr('style');
						
						wrap_w = $base.outerWidth();
						item_sum = $item.length;
						$item.css('opacity', 1);
						
						$base.find('.ui_item').css('opacity', 1);
						
						app.itemCol();
						
					},
					itemCol : function() {
						if (type === 'item') {
							col_length = Math.floor(wrap_w / unit);
							unit_col = col_length;
							unit_w = unit;
						}
												
						if (type === 'col') {
							col_length = unit_col;
							per = (10 / unit_col) * 10;
							unit_w = Math.floor(wrap_w / unit_col);
						}
						
						for (var i = 0 ; i < col_length; i++) {
							item_col[i] = 0;
						}
						
						app.listRow();
						app.resizeRow();
						app.eventHandle();
					},
					eventHandle : function() {
						var $ui_add = $base.find('.ui_add');
						$ui_add.off('click.addrow').on('click.addrow', app.addRow);
						
					},
					addRow : function() {
						add_n = $base.find('.ok').length;
						item_sum = $base.find('.ui_item').length;	
						top_add = 200;
						$base.imagesLoaded(function(){
							app.listRow();
						});
					},
					resizeRow : function(){
						$(win).on('resize', function(){
							clearTimeout(timer);
							$base.find('.ui_item').css('opacity', 0.2);
							top_add = 0;
							if(wrap_w !== $base.outerWidth()) {
								timer = setTimeout(function(){
									app.init();
									!!callback ? callback() : '';
								},200);
							} else {
								$base.find('.ui_item').css('opacity', 1);
							}
						});
					},
					
					listRow : function() {
						var i = add_n, 
							j = 0,
							minH, maxH, colN, colN_copy, reN, type_n, trueN, item_col_clone, compare;
						
						// item 갯수만큰 반복
						for (i; i < item_sum; i++) {
							var img_css_w;
							
							// 이미지 가로 값(img_css_w)을 기준값(unit)으로 나누어 이미지 열단위 구함(type_n)
							img_css_w 	= $base.find('.ui_item').eq(i).find('img').css('width', 'auto').outerWidth(); 
							type_n 		= Math.ceil(img_css_w / unit);

							// type col 일때 만 사용
							if (type === 'col') {
								// 기준열값(unit_col) 보다 크다면 기준값으로 변경
								type_n > unit_col ? type_n = unit_col : '';
								
								// 가로 % 값 생성(per * type_n) 및 이미지 css 속성 설정
								$base.find('.ui_item').eq(i).css({
									width : per * type_n + '%'
								}).find('img').css({
									width: '100%',
									height: 'auto'
								});
							}
							
							if (type === 'item') {
								// unit_col 보다 크다면 최대치를 unit_col 로 변경
								$base.find('.ui_item').eq(i).find('img').css('width', '100%')
								if (type === 'item' && type_n > unit_col) {
									$base.find('.ui_item').eq(i)
										.css('width', unit * unit_col);
									
								}
								// 이미지 열값(type_n)이 기준 열값(unit_col)보다 크다면 기준 열값으로 변경
								type_n > unit_col ? type_n = unit_col : '';
							}
							
							// 아이템 가로,세로,타입. *safari, ios에서 width,height값을 구하지 못해 addClass을 주면 구해짐.
							item_w = $base.find('.ui_item').eq(i).addClass('dsp').outerWidth();
							item_h = $base.find('.ui_item').eq(i).addClass('dsp').outerHeight();
							item_w = $base.find('.ui_item').eq(i).removeClass('dsp').outerWidth();
							item_h = $base.find('.ui_item').eq(i).removeClass('dsp').outerHeight();	
							
							// item_col 배열 복사본 생성
							item_col_clone = item_col.slice();
							
							// 복사본 최소, 최대 구하기
							minH = Math.min.apply(null, item_col_clone);
							maxH = Math.max.apply(null, item_col_clone);
							colN = item_col_clone.indexOf(minH); // 0부터 시작 예) 4칸기준이면 0,1,2,3

							// 최소 열 단위(1)보다 큰 아이템이라면 colCompare함수 실행
							(type_n > 1) ? colCompare(complete) : colApply(true);
						}

						// 완료 확인하여 재비교 아니면 적용 함수
						function complete(){
							if (compare) {
								colApply();
							}
							else {
								minH = Math.min.apply(null, item_col_clone);
								maxH = Math.max.apply(null, item_col_clone);
								colN = item_col_clone.indexOf(minH);
								
								colCompare(complete);
							}
						}
						
						// 배열 비교 함수
						function colCompare(callback) {
							// 전체열에서 최소높이열 시작하여 남은 열(col_length - minN) 갯수보다 크다면 그 위치에서 뒤쪽 열은 필요없으므로
							if (type_n > (item_col_clone.length - colN)) {
								// 현재에서는 올수 있는곳이 아무곳도 없다. 젤 처음 시작하는곳에 최대값 높이로 설정.
								colN = 0;
								minH = maxH;
								item_col[colN] = maxH;
								
								colApply();
							}
							else {
								// 연속 true가 나와야할 수
								trueN = type_n - 1;
								colN_copy = colN - 1;
								compare = false;
								
								for (j = 0; j < col_length ; j++) {
									// 비교할 시작점(minN_i) 하나(j)씩 증가
									colN_copy = colN_copy + 1;
									
									// 현재(min_current)와 다음(min_next)의 높이 값
									var min_current = item_col_clone[colN_copy],
										min_next = item_col_clone[colN_copy + 1];
									
									
									// 다음열 존재 여부 체크. 있다면 !false값. 없다면 !true
									if (!isNaN(min_next)) {
										if (min_current < min_next) {
											// 현재 보다 다음이 크다면 즉시 중단
											// 배열에서 실패된 앞부분 삭제 : 나머지부분에서 최소 영역을 찾기 위함
											item_col_clone = item_col_clone.splice(colN_copy + 1, col_length);

											compare = false;
											break;
											
										} else {
											//현재 보다 다음이 작다면 
											trueN = trueN - 1;

											if (trueN === 0) {
												compare = true; // 완료
												break;
											} 
										}
									} 
									else {
										item_col[0] = maxH;
										colN = item_col_clone.indexOf(maxH);
										colN_copy = 0;

										compare = true; // 완료
										break;
									}	
								}
								callback();
							}
						}
						function colApply(value) {
							$base.find('.ui_item').eq(i).css({
								position: 'absolute',
								left : unit_w * colN,
								top: item_col[colN] + top_add,
								opacity : 0
							}).stop().addClass('ok').data('orgtop', item_col[colN]);
							
							(value) ? $base.find('.ui_item').eq(i).addClass('base') : '';
							
							for (var u = 0; u < type_n; u++) {
								item_col[colN + u] = Number(minH + item_h);
							}
							
							(i === item_sum - 1) ? (!!callback) ? callback() : '' : '';
							
							maxH = Math.max.apply(null, item_col);
							$base.css('height', maxH).data('row', item_col);
						}
						// 순차적으로 모션 재생
						
						
						app.itemShow();
					},
					itemShow : function () {
						var timer_show, 
							y = add_n;
						
						timer_show = setInterval(function(){
							if (y < item_sum) {
								var $item_show = $base.find('.ui_item').eq(y);
								
								$item_show.animate({
									top: $item_show.data('orgtop')
								}, 400);
								$item_show.animate({
									opacity : 1
								}, 300);
								
								y = y + 1;
							} else {
								clearInterval(timer_show);
							}
						},100);
					}
				}
				app.init();
			});
		},
		
		uiTab : function (opt){
			var defaults = {
					current : 1,
					eff : 'fade' // show, fade 
				},
				opt = $.extend(defaults, opt);
			return this.each(function (){
				var base = this,
					$base = $(base),
					$btn = $base.find('.ui_btn'),
					$pnl = $base.find('.ui_pnl'),
					eff = opt.eff,
					current = opt.current - 1,
					tab_sum, tab_id, open_id, $current;
				
				var app = {
					init : function() {
						var btn_id, btn_href;
						
						tab_sum = $btn.length; 
						$btn.parent().attr('role','tablist');
						$btn.attr('role','tab').attr('aria-selected', false);
						$pnl.attr('role','tabpanel');
						
						for (var i = 0; i < tab_sum; i++) {
							btn_id = $btn.eq(i).attr('id');
							btn_href = $btn.eq(i).attr('href');
							btn_href = btn_href.split('#');
							$btn.eq(i).attr('aria-controls', btn_href[1]);
							$('#' + btn_href[1]).attr('aria-labelledby', btn_id);
						}
						
						if (current > -1) {
							$current = $btn.eq(current);
							tab_id = $current.attr('href');
							open_id = tab_id;
							app.act(tab_id, 'selected');
						}

						app.evt();
					},
					act : function(tab_id, state) {
						$btn.removeClass('selected').attr('aria-selected', false);
						$current.addClass('selected').attr('aria-selected', true);

						if (eff === 'fade' && open_id !== tab_id) {
							$pnl.css('opacity', 0);
							$pnl.stop().animate({
								opacity : 0
							});
							$(tab_id).stop().animate({
								opacity : 1
							})
						}
						open_id = tab_id;
						
						$pnl.attr('aria-hidden', true);
						$(tab_id).attr('aria-hidden', false);
						(state !== 'selected') ? $(tab_id).attr('tabindex',0).focus() : '';
					},
					evt : function() {
						$btn.on('click', function(e) {
							e.preventDefault();
							$current = $(this);
							tab_id = $current.attr('href');

							app.act(tab_id);
						});	
					}
				}
				app.init();
			});
		},
		
		/*
		 * ---------------------------------------------------------------------------
		 * 이름 : uiAccordion
		 * 설명 : 수직 아코디언 탭
		 * 옵션 :	
		 * 		current 	: 0				0 이면 전체 닫힘. 1~ 순번이 열림
		 * 		toggle 		:  		 
		 * 		focusTarget : 		
		 * 		scrollTop 	: 		
		 */
		uiAccordion : function (opt, callback){
			var defaults = {
					current : 0, // 0,1 ..... 'all'
					toggle : true,
					focusTarget : null,
					scrollTop : false,
					addTop : 0
				},
				opt = $.extend(defaults, opt);
			
			return this.each(function (){
				var base = this,
					
					$base = $(base),
					$wrap = $base.find('.ui_wrap'),
					$all = $base.find('.ui_all'),
					$btnWrap = $base.find('.ui_btn_wrap'),
					$btn = $btnWrap.find('.ui_btn'),
					$txt = $btn.find('.ui_txt'),
					$pnl = $base.find('.ui_pnl'),
					
					toggle = opt.toggle,
					focusTarget = opt.focusTarget,
					scrollTop = opt.scrollTop,
					addTop = opt.addTop,
					current = opt.current,
					
					acco_sum, tab_id, $current, $currentBtn;
				
				var app = {
					init : function() {
						acco_sum = $wrap.length; 
												
						// 열린 상태 선택
						if (current - 1 > -1) {
							$current = $wrap.eq(current - 1);
							$currentBtn = $current.find('.ui_btn');
						
							tab_id = $currentBtn.attr('href');
							app.show(tab_id, 'opened')
						
						} 
						else if (current === 'all') {
							app.showAll();
						}
	
						app.evt();
					},
					showAll: function(){
						$all.addClass('selected').find('span').text('전체닫기');
						$btn.data('expand',true);
						$wrap.addClass('selected');
						$txt.text('닫기');
						$pnl.stop().slideDown(200);
						$base.data('allopen', true);
					},
					hideAll : function(){
						$all.removeClass('selected').find('span').text('전체열기');
						$btn.data('expand',false);
						$wrap.removeClass('selected');
						$txt.text('열기');
						$pnl.stop().slideUp(200);
						$base.data('allopen', false);
					},
					show : function(tab_id, state) {
						// 이벤트로 열린 상태
						if (state !== 'opened') {
							if (toggle === true) {
								$pnl.stop().slideUp(200);
								$txt.text('열기');
								$btn.data('expand',false).closest('.ui_wrap').removeClass('selected');
							}

							$(tab_id).stop().slideDown(200, function(){
								// 현재선택영역 기준으로 스크롤 이동
								setTimeout(function(){
									var th_t = $(tab_id).offset().top - ($(tab_id).closest('.ui_wrap').find('.ui_btn_wrap').outerHeight()) - addTop;
									
									(!!scrollTop) ? $._uiScroll.move(th_t, 400) : '';
									!!callback ? callback() : '';
								},0);
							});
							
							// 기본 아니면 지정한 곳으로 포커스 이동
							if (!focusTarget) {
								$(tab_id).attr('tabindex',0).focus();
							} else {
								$base.closest('.selected').find(focusTarget).attr('tabindex',0).focus();
							}		
						} 
						// 처음 열린 상태
						else {
							$(tab_id).show();
							$currentBtn.data('expand', true);
						}
						
						$current.find('.ui_txt').text('닫기');
						$current.data('expand',true).closest('.ui_wrap').addClass('selected');
					},
					hide : function(){
						$current.find('.ui_txt').text('열기');
						$current.data('expand',false).closest('.ui_wrap').removeClass('selected'); 
						$(tab_id).stop().slideUp(200);
			
					},
					evt : function() {
						$btn.off('click.acco').on('click.acco', function(e) {
							e.preventDefault();
							
							$current = $(this);
							tab_id = $current.attr('href');
							
							(!$current.data('expand')) ? app.show(tab_id) : app.hide(tab_id); 
						});
						
						$all.off('click.acco').on('click.acco', function(e) {
							e.preventDefault();
							
							(!$base.data('allopen')) ? app.showAll() : app.hideAll();
						});
					}
				}
				
				app.init();
			});
		},
		
		uiPlaceholder : function (opt) {
			var defaults = {},
				opt = $.extend(defaults, opt);
			
			return this.each(function (){
				var base = this,
					$base = $(base),
					inp_w = $base.width(),
					txt = $base.attr('placeholder'),
					$ph, $ph_wrap;
				
				var app = {
					init : function (){
						if (!$base.data('overlap')) {
							var ph = '<span class="ph_item">' + txt + '</span>';
							
							$base.data('overlap', true).wrap('<span class="ph_wrap"></span>');
							$ph_wrap = $base.closest('.ph_wrap');
							$ph_wrap.prepend(ph);
							$ph = $ph_wrap.find('.ph_item');
							
							($base.val() === "") ? app.show(base) : app.hide(base);
							
							app.evt();
						}
					},
					show : function (target) {
						$(target).closest('.ph_wrap').find('.ph_item').css({
							'z-index' : 0,
							width : inp_w,
							opacity : 1
						}).removeAttr('aria-hidden');
					},
					hide : function (target) {
						$(target).closest('.ph_wrap').find('.ph_item').css({
							'z-index' : -1,
							opacity : 0
						}).attr('aria-hidden', true);
					},
					evt : function () {
						$ph.on('click.ph', function (){
							$ph_wrap.find('input').focus();
						});
						
						$base.on('keyup.ph', function (){
							($base.val() === "") ? app.show(this) : app.hide(this);
						});
					}
				}
				if (!support.placeholder) {
					app.init();
				}
				
			});	
		},
		
		uiRadioCheck : function (opt) {
			var defaults = {},
				opt = $.extend(defaults, opt);
		
			return this.each(function (){
				var base = this,
					$base = $(base),
					inp_type = $base.attr('type'),
					inp_id = $base.attr('id'),
					inp_name = $base.attr('name'),
					$label = $('label[for="' + inp_id + '"]');
				
				var app = {
					init : function () {
						if (inp_type === 'radio') {
							$label.addClass('ui_radio');
						}
						else if (inp_type === 'checkbox') {
							$label.addClass('ui_checkbox');
						}
						
				
						
						if ($base.prop('checked') === true) {
							$label.addClass('checked');
						}
						if ($base.prop('disabled') === true) {
							$label.addClass('disabled');
						}
						$base.addClass('ui_form');
						$label.attr('ui-name', inp_name);
						$label.attr('ui-id', inp_id);
						
						app.evt();
					},
					allCheck : function(name, value){
						var $all = $('input[name="'+ name + '"]'),
							all_len = $all.length,
							i = all_len,
							id;
													
							for (i; i--;) {
								id = $all.eq(i).attr('id');
								if ($all.eq(i).prop('disabled') !== true) {
									$all.eq(i).prop('checked', value);
									value ? $('label[for="' + id + '"]').addClass('checked') : $('label[for="' + id + '"]').removeClass('checked');
								}
							}
					},
					check : function(all_name){
						var $all = $('input[data-all-check="' + all_name + '"]');
						
						if ($('input[name="' + all_name + '"]').length === $('input[name="' + all_name + '"]:checked').length) {
							$all.prop('checked', true);
							$('label[for="' + $all.attr('id') + '"]').addClass('checked');
						} else {
							$all.prop('checked', false);
							$('label[for="' + $all.attr('id') + '"]').removeClass('checked');
						}
						
					},
					evt : function () {
						var $label = $('label');
						
						$('input[type="radio"]').off('click.rc').on('click.rc', function (){
							var current_id = $(this).attr('id'),
								current_name = $(this).attr('name');
							$label.removeClass('focus');
							$('label[ui-name="' + current_name + '"]').removeClass('checked');
							$('label[ui-id="' + current_id + '"]').addClass('checked focus');
						});
						
						$('input[type="checkbox"]').off('click.rc').on('click.rc', function (){
							var current_id = $(this).attr('id'),
								$current_label = $('label[ui-id="' + current_id + '"]'),
								all = $(this).data('all-check'),
								all_name = $(this).attr('name');

							$label.removeClass('focus');

							if ($(this).prop('checked') === true) {
								$current_label.addClass('checked focus');
								(!!$(this).data('all-check')) ? app.allCheck(all, true) : '';
							} else {
								$current_label.removeClass('checked').addClass('focus');
								(!!$(this).data('all-check')) ? app.allCheck(all, false) : '';
							}
							(!!$(this).attr('name')) ? app.check(all_name) : '';
						});
						

						$('input[type="checkbox"], input[type="radio"]').off('focus.rc').on('focus.rc', function (){
							var current_id = $(this).attr('id'),
								$current_label = $('label[ui-id="' + current_id + '"]');
							$label.removeClass('focus');
							$current_label.addClass('focus');
						});
						
						$('input[type="checkbox"], input[type="radio"]').off('blur.rc').on('blur.rc', function (){
							$label.removeClass('focus');
						});
					}
				}
				app.init();
			});
		},
		
		uiSelect : function (opt) {
			var defaults = {
					id : null,
					reset : false,
					dsb : null
				},
				opt = $.extend(defaults, opt);
			
			return this.each(function (){
				var base = this,
					$body = $('body'),
					$base = $(base),
					$base_optg = $base.find('optgroup'),
					$base_opt = $base.find('option'),
					
					base_tit = $base.attr('title'),
					base_id = $base.data('select-id'),
					base_w = $base.outerWidth(),
					opt_sum = $base_opt.length,
					w_h = $(win).height(),
					//backdrop = false,
					
					reset = opt.reset,
					reset_id = opt.id,

					$clone, $ui_select_clone, $ui_clone_list, $ui_clone_btn, $ui_clone_tit, $ui_clone_opt;
				
				var app = {
					init : function () {
						(base_w < 60) ? base_w = 'auto' : '';
						
						var clone = 
							'<div class="ui_select_clone ' + base_id + '" id="' + base_id + '" style="width:' + base_w + 'px">' +
							'<button type="button" class="ui_clone_btn" aria-controls="' + base_id + '_ctr">' +
							'<em></em><span> 선택됨.</span> <span>' + base_tit + ' 선택창 <span class="ui_state">열기</span></span>' + 
							'</button>' +
							'</div>',
							ui_clone_list = doc.createElement("div"),
							i = 0;
						
						$(ui_clone_list)
							.addClass('ui_clone_list')
							.attr('role','listbox')
							.attr('aria-expanded',false)
							.attr('id', base_id + '_ctr');
						$base.before(clone);
						
						$clone =  $('#' + base_id);
						$ui_clone_btn = $('.ui_clone_btn');
						$ui_clone_tit = $clone.find('.ui_clone_btn').find('em');

						for (i; i < opt_sum; i++) {
							var $currnet_opt = $base_opt.eq(i),
								$optgroup = $currnet_opt.closest('optgroup'),
								opt_txt = $currnet_opt.text(),
								opt_val = $currnet_opt.val(),
								opt_attrVal = $currnet_opt.attr('value'),
								opt_class = '',
								opt_sel = '',
								optg_num = i,
								j = 0, 
								optg_sum = $optgroup.find('option').length;

							// optgroup이 있다면
							if ($optgroup.length) {
								$(ui_clone_list).append('<div class="ui_optgroup_' + optg_num + '" role="group"><em>'+ $base_opt.eq(i).closest('optgroup').attr('label') +'</em></div>');

								for(j; j < optg_sum; j++) {
									$currnet_opt = $base_opt.eq(i);
									opt_txt = $currnet_opt.text();
									opt_val =$currnet_opt.val();
									
									optClone(i);
									$(ui_clone_list).find('.ui_optgroup_' + optg_num).append('<button role="option" class="ui_clone_opt '+ opt_class +'" type="button" value="' + opt_val + '" ' + opt_sel + ' data-optnum="' + i + '">' + opt_txt + '</button>');
									i = i + 1;
								}
								i = i - 1;
							} 
							else {
								optClone(i);
								$(ui_clone_list).append('<button role="option" class="ui_clone_opt '+ opt_class +'" type="button" value="' + opt_val + '" ' + opt_sel + ' data-optnum="' + i + '">' + opt_txt + '</button>');
							}
						}
						
						function optClone(i) {
							$currnet_opt.attr('data-optnum', i);
							if ($currnet_opt.prop('selected') === true) {
								$ui_clone_tit.text(opt_txt);
								opt_class = 'selected';
								opt_sel = 'aria-selected="true"';
							}
							if ($currnet_opt.prop('disabled') === true) {
								opt_class = 'disabled';
								opt_sel = 'disabled="disabled"';
							}
						}
						
						$clone.append(ui_clone_list);
						$ui_clone_list = $('.ui_clone_list');
						$ui_clone_opt = $('.ui_clone_opt');
						
						$base.hide(); 
						app.evt();
					},
					sync: function (sel_id, sel_idx) {
						var $re =  $('#' + sel_id),
							opt_txt = $re.find('.ui_clone_opt').eq(sel_idx).text();
						
						$re.find('.ui_clone_btn').find('em').text(opt_txt);
						$re.find('.ui_clone_opt')
							.removeClass('selected')
							.attr('aria-selected', false)
							.eq(sel_idx).addClass('selected')
							.attr('aria-selected', true)
						
					},
					reset : function () {
						$('#' + reset_id).remove();
						app.init();
					},
					show : function (current) {
						var c_t = $(current).offset().top,
							w_t = $(win).scrollTop(),
							c_p = c_t - w_t,
							c_h = $(current).outerHeight() / 2,
							half = (w_h + c_h) / 2,
							$current_list = $(current).closest('.ui_select_clone').find('.ui_clone_list'),
							l_h = $current_list.outerHeight(),
							max_h = w_h - (c_p + (c_h * 2)),
							max_h2 = (c_p);
						
						app.hide();
						
						// clone list postion
						if (max_h > l_h) {
							$current_list.removeClass('ps_bottom').addClass('ps_top');
						}
						else {
							if (half > c_p) {
								if (max_h < l_h) {
									$current_list.css({
										height : max_h - 40,
										overflowY : 'scroll'
									});
								} 
								$current_list.removeClass('ps_bottom').addClass('ps_top');
							} 
							else {
								if (max_h2 < l_h) {
									$current_list.css({
										height : max_h2 - 40,
										overflowY : 'scroll'
									});
								} 
								$current_list.removeClass('ps_top').addClass('ps_bottom');
							}
						}
						
						$('.ui_select_clone .ui_clone_btn').data('open', false);
						$(current).closest('.ui_select_clone').addClass('open');
						$current_list.stop().fadeIn(100, function(){
							$(this).find('.selected').focus();
						});
					},
					hide : function ($current) {
						$('.ui_select_clone').removeClass('open');
						$('.ui_clone_btn').data('open', false);
						
						$ui_clone_list.hide().removeAttr('style');
						if (!!$current) {
							$current.find('.ui_clone_btn').attr('tabindex', 0).focus();
						}
					},
					evt : function () {
						// clone button event
						$ui_clone_btn.off('click.sel').on('click.sel', function (){
							var current = this,
								$current = $(current);

							if (!$(current).data('open')) {
								app.show(current);
								$current.data('open', true).find('.ui_state').text('닫기');
								
							} else {
								app.hide($current);
								$current.data('open', false).find('.ui_state').text('열기');
							}
						});
						
						// keyboard up down event add
						$ui_clone_btn.off('focus.sel').on('focus.sel', function(){
							$ui_clone_btn.off('keydown.sel').on('keydown.sel', function (e) {
								//38 up , 40 down
								if (e.keyCode == 38) {
									e.preventDefault();
									console.log('upup');
								}
								if (e.keyCode == 40) {
									e.preventDefault();
									console.log($ui_clone_opt.closest('.ui_clone_list').find('.selected').index());
									
									var optIdx = $ui_clone_opt.closest('.ui_clone_list').find('.selected').index();
									
									keymove(optIdx, 'down')
									
								}
							});
							
						});
						function keymove(n, dir) {
							
							
							console.log($ui_clone_opt.length, n)
							
							if (dir === 'down') {
								$ui_clone_opt.eq(n).removeClass('selected').attr('aria-selected', false);
								$ui_clone_opt.eq(n + 1).addClass('selected').attr('aria-selected', true);
								
								$('select[data-select-id="' + current_id + '"]').find('option').eq(n + 1).prop('selected', true).change();
								$current_btn.find('em').text(opt_txt);
							}
						}
						
						
						$('label[data-select-label]').off('click.sel_label').on('click.sel_label', function(){
							$('#' + $(this).attr('data-select-label') + ' .ui_clone_btn').attr('tabindex', 0).focus();
						});
						
						// clone option event
						$ui_clone_opt.off('click.sel_opt').on('click.sel_opt', function () {
							var $current = $(this),
								idx = $current.attr('data-optnum'),
								$current_clone = $current.closest('.ui_select_clone'),
								$current_btn = $current_clone.find('.ui_clone_btn'),
								current_id = $current_clone.attr('id'),
								opt_txt = $current.text();
							
							$current.closest('.ui_clone_list').find('.ui_clone_opt').removeClass('selected').attr('aria-selected', false);
							$current.addClass('selected').attr('aria-selected', true);
							
							$('select[data-select-id="' + current_id + '"]').find('option').eq(idx).prop('selected', true).change();
							$current_btn.find('em').text(opt_txt);
							$current_btn.data('open', false).find('.ui_state').text('열기');
							
							app.hide($current_clone);
						});
						
						// select 선택값 전달
						$base.on('change.sel', function (){
							app.sync($(this).data('select-id'), $(this).find('option:selected').attr('data-optnum'));
						});
						
						// backdrop close
						var backDrop_target = '.ui_select_clone';
						$._backDrop.close(backDrop_target, app.hide);
					}
				}
				
				//if (!!browser.ie) {
					if (!$base.data('overlap')) {
						app.init();
						$base.data('overlap', true);
					} 
					if (reset === true) {
						app.reset();
					}
				//};
			});
		},
		
		uiPopup : function (opt) {
			var defaults = {
					link : null,
					name : 'new popup', 
                    width : 300,
                    height : 400,
                    align: 'center',
                    top : 0,
                    left : 0,
                    toolbar : 'no',
                    location : 'no',
                    menubar : 'no',
                    status : 'no',
                    resizable : 'no',
                    scrollbars : 'no'
                   
				},
				opt = $.extend(defaults, opt);
			
			return this.each(function (){
				var $base = $(this),
					href = $base.attr('href'),
					link = opt.link,
					align = opt.align,
					width = opt.width,
					height = opt.height,
					top = opt.top, 
					left = opt.left;
				
				$base.off('click.popup').on('click.popup', open);
				
				function open(e){
					e.preventDefault();
					
					if (align === 'center') {
						var w_w = $(win).outerWidth() / 2,
							w_h = $(win).outerHeight() / 2;
						
						left = w_w - (width / 2);
						top = w_h - (height / 2);
					}
					
					if (link !== null) {
						href = link;
					}

					var specs = 'width=' + width + ', height='+ height + ', left=' + left + ', top=' + top;
						specs += ', toolbar=' + opt.toolbar + ', location=' + opt.location + ', resizable=' + opt.resizable + ', status=' + opt.status + ', menubar=' + opt.menubar + ', scrollbars=' + opt.scrollbars;
					
					win.open(href, opt.name , specs);
				}
			});
		},
		
		uiDropdowns : function (opt) {
			var defaults = {
					callback : null
				},
				opt = $.extend(defaults, opt);
			
			return this.each(function () {
				var base = this,
					$base = $(base),
					$btn = $('.ui_drop_btn'),
					$cont = $('.ui_drop_cont'),
					callback = opt.callback;
				
				var app = {
					show : function (current) {
						$base = $(current);
						
						$cont.hide();
						$btn.data('open', false).attr('aria-expanded', false);
						
						$base.closest('.ui_drop').find('.ui_drop_cont').show();
						$base.data('open', true).attr('aria-expanded', true);
						
						callback !== null ? callback(current) : '';
					},
					hide : function () {
						$cont.hide();
						$btn.data('open', false).attr('aria-expanded', false);
					},
					evt : function () {
						$base.find('.ui_drop_btn').off('click.drop').on('click.drop', act);
						
						function act(e){
							var current = this;
							e.preventDefault();
							(!$(this).data('open')) ? app.show(this) : app.hide();
						}
						
						// backdrop close
						var backDrop_target = '.ui_drop_cont, .ui_drop_btn';
						$._backDrop.close(backDrop_target, app.hide);
					}
				}
				app.evt();
			});
		},
		// 툴팁 자동으로 화면 위치와 크기 작업 필요. 최소 크기와 최대크기 추가 필요.
		uiTooltip : function (opt) {
			var defaults = {
					trigger : 'hover', // hover = 'moseover focus', click = 'click'
					place : 'bottom',	// top. middle, bottom
					align : 'left', // left, right, center
					max_w : 300,
					min_w : 200,
					auto : true, // 작업중
					space : 5
				},
				opt = $.extend(defaults, opt);
			
			return this.each(function () {
				var base = this,
					$btn = $(base),
					tooltipId = $btn.data('tooltipid'),
					$body = $('body'),
					$cont = $('#' + tooltipId),
					trigger = opt.trigger,
					place = opt.place,
					align = opt.align,
					space = opt.space,
					auto = opt.auto,
					min_w = opt.min_w,
					max_w = opt.max_w,
					half = $(win).outerWidth() / 2,
					win_h = $(win).outerHeight(),
					backdrop = false,
					evt_show, evt_hide, timer;
					
				var app = {
					init : function() {
						
						if (trigger === 'hover') {
							evt_show = 'mouseover.tooltip focus.tooltip'; 
							evt_hide = 'mouseleave.tooltip blur.tooltip';
						}
						if (trigger === 'click') {
							evt_show = 'click.tooltip'; 
							evt_hide = 'click.tooltip';
						}
						
						app.evt();
					},
					show : function (current, way, event) {
						var base = current, 
							tooltip_id = $(base).attr('data-tooltipid');
						
						// 다른 툴팁 초기화
						$('.ui_tooltip_cont').hide();
						$('.ui_tooltip').attr('aria-expanded', false);
						
						var t = Math.floor($(base).position().top),
							l = Math.floor($(base).position().left),
							w = Math.floor($(base).outerWidth()),
							h = Math.floor($(base).outerHeight()),
							
						
						$tooltip = $('#' + tooltip_id),
						h_t = $tooltip.outerHeight(),
						w_t = $tooltip.outerWidth(),
						value_top, value_left;
							
				
						(w_t < min_w) ? w_t = min_w : '';
						(w_t > max_w) ? w_t = max_w : '';
						
						$tooltip.css('width', w_t).css({
							'display' : 'block',
							'opacity' : 0
						});
						
						h_t = $tooltip.outerHeight();
						
						if (auto) {
							place = (win_h < ($(base).offset().top - $(win).scrollTop()) + h_t + 20) ? 'top' : 'bottom';
							align = (l > half) ? 'right' : 'left';
						}
						
						if (place === 'bottom' || place === 'top') {
							if (place === 'bottom') {
								value_top = t + h + space; 
								$tooltip.removeClass('bottom top').addClass('bottom');
							} else if(place === 'top') {
								value_top = t - (h_t + space);
								$tooltip.removeClass('bottom middle').addClass('top');
							}
							
							switch (align) {
								case 'left' : 
									value_left = l; 
									$tooltip.removeClass('right center').addClass('left');
									break;
								case 'right' : 
									value_left = l - (w_t - w); 
									$tooltip.removeClass('left center').addClass('right');
									break;
								case 'center' : 
									value_left = (l + (w / 2)) - (w_t / 2); 
									$tooltip.removeClass('left right').addClass('center');
									break;
								// not default
							}
						}

						$tooltip
							.css({
								top : value_top, 
								left : value_left, 
								display : 'block',
								opacity : 0
							})
							.stop().animate({
								opacity : 1
							},200)
							.data('backid', tooltip_id)
							.find('a, button, input, label').eq(-1).addClass('end');
						
						if (way === 'click') {
							$tooltip.attr('tabindex', 0).focus();
							$._uiHold.hold('#' + tooltip_id);
						}
						
						$(base).attr('aria-expanded', true);
						$btn.data('tooltip', true);
					},
					hide_click : function (){
						var backid = $cont.data('backid');

						$('.ui_tooltip[data-tooltipid="' + backid + '"]').focus();
						app.hide();
					},
					hide : function (val) {
						var speed = (val === 0) ? 0 : 200;

						$cont.stop().delay(10).fadeOut(speed);
						$btn.attr('aria-expanded', false);
						$btn.data('tooltip', false);
					},
					evt : function () {
						if (trigger === 'hover') {
							if (!browser.mobile) {
								$btn
									.on('mouseover.tooltip', function(e){
										e.preventDefault();
										$btn.on('click.tooltip', function(e) {
											e.preventDefault();
										});
										(!$btn.data('tooltip')) ? app.show(this, '', e) : '';
									})
									.on('mouseleave.tooltip', function(e){
										e.preventDefault();
										timer = setTimeout(function() {
											app.hide();
										},50);
									})
									.on('click.tooltip', function(e){
										e.preventDefault();
										(!$btn.data('tooltip')) ? app.show(this, 'click', e) : app.hide();
									});
								$cont
									.on('mouseover.tooltip focus.tooltip', function(e){
										clearTimeout(timer);
										$btn.data('tooltip', true);
									})
									.on('mouseleave.tooltip', app.hide);
							} else {
								$btn.on('click.tooltip', function(e){
									e.preventDefault();
									(!$btn.data('tooltip')) ? app.show(this, 'click', e) : app.hide();
								});
							}
							$cont.find('.ui_close').on('click.tooltip', app.hide_click);
						}
						
						if (trigger === 'click') {
							$btn.off('click.tooltip').on('click.tooltip', function(e){
								e.preventDefault();
								(!$btn.data('tooltip')) ? app.show(this, '', e) : app.hide();
							});
							
							$('.ui_tooltip_cont .ui_close').off('click.tooltip').on('click.tooltip', function(e){
								e.preventDefault();
								app.hide();
							});
						}
						
						// backdrop close
						var backDrop_target = '.ui_tooltip, .ui_tooltip_cont';
						$._backDrop.close(backDrop_target, app.hide);
					}
				}
				app.init();
			});
		},
		
		uiDialog : function (opt) {
			var defaults = {
					auto : false,
					run : null,
					focus_back : null,
					width : null, 
					height : null,
					ps_vt : 'middle', // top, middle, bottom 
					ps_hz : 'center' // left, center, right	
				},
				opt = $.extend(defaults, opt);
			
			return this.each(function () {
				var $base = $(this),
					dialog_id = $base.attr('data-dialogid'),
					$dialog = $('#' + dialog_id),
					$body = $('body'),
					auto = opt.auto,
					run = opt.run,
					focus_back = opt.focus_back,
					w = opt.width,
					h = opt.height,
					ps_vt = opt.ps_vt,
					ps_hz = opt.ps_hz,
					sc_t = 0,
					$back, $dialog_bg, left, right;
				
				var app = {
					position : function () {
						$dialog = $('#' + dialog_id);

						(w === null) ? w = $dialog.outerWidth() : '';
						(h === null) ? h = $dialog.outerHeight() : '';
						
						var w_h = $(win).outerHeight();
						
						if (w_h < h ) {
							$dialog.css({
								top : 10,
								height : w_h - 20,
								overflowY : 'scroll'
							});
						} else {
							if (ps_vt === 'middle') {
								$dialog.css({ 
									top : '50%',
									marginTop : (h / 2) * -1
								});
							} 
							else if (ps_vt === 'top') {
								$dialog.css('top', 0);
							} 
							else if (ps_vt === 'bottom') {
								$dialog.css('bottom', 0);
							}
						}

						if (ps_hz === 'center') {
							$dialog.css({ 
								left : '50%',
								marginLeft : (w / 2) * -1
							});
						} 
						else if (ps_hz === 'left') {
							$dialog.css('left', 0);
						} 
						else if (ps_hz === 'right') {
							$dialog.css('right', 0);
						}
					},
					bg : function () {
						$body.data('bg_dialog', true);
						$body.append('<div class="bg_dialog"></div>');
						
						$dialog_bg = $('.bg_dialog');
						$dialog_bg.css('display','block').stop().animate({
							opacity : 0.8
						},600 , function () {
							$dialog_bg.off('click.dialog_bg').on('click.dialog_bg', function () {
								app.hide();
							});
						});
					},
					show : function (dialog_id) {
						$dialog = $('#' + dialog_id);
						
						// dialog show
						app.position();
						$dialog.css('display', 'block').stop().animate({
							opacity : 1
						},200, function(){
							// dialog hold
							$._uiHold.hold('#' + dialog_id);
							(browser.mobile) ? $dialog.find('h1').eq(0).focus() : $dialog.attr("tabindex", 0).focus();
						});

						// bg
						(!$('body').data('bg_dialog')) ? app.bg() : '';
						
						// close
						$dialog.find('.ui_close').off('click.dialog_close').on('click.dialog_close', function () {
							app.hide();
						});
					},
					hide : function (callback_id) {
						(!!callback_id) ? $dialog = $('#' + callback_id) : $dialog = $('#' + dialog_id);
						
						$dialog.stop().animate({
							opacity : 0.5
						}, 100, function () {
							var $this_hide = $(this);
							
							$this_hide.find('.fst').removeClass('fst').removeAttr('tabindex');
							$this_hide.find('.end').removeClass('end');
							$this_hide.hide().removeAttr('style');
						});
						
						$dialog_bg.animate({
							opacity : 0
						}, 100, function () {
							$('body').data('bg_dialog', false);
							$dialog_bg.remove();
							
						});
						$._uiScroll.move(sc_t);
						$back.attr('tabindex', 0).focus();
					
					},
					evt : function () {
						// click						
						$base.off('click.dialog').on('click.dialog', function (e) {
							e.preventDefault();
							
							if (focus_back === null) {
								$back = $(this);
								sc_t = $(doc).scrollTop();
							} else {
								$back = $(focus_back);
								$back.attr('tabindex',0);
								sc_t = $back.position().top;
							}
							dialog_id = $(this).attr('data-dialogid');
							
							app.show(dialog_id);
						});

						// auto & run
						if (auto === true || run !== null) {
							if (focus_back === null) {
								$back = $body.find('a, input, button, label, select').eq(0);
								sc_t = $(doc).scrollTop();
							} else {
								if (!!$(focus_back).length) {
									$back = $(focus_back);
									$back.attr('tabindex',0);
									sc_t = $back.position().top;
								}
							}
							
							dialog_id = $base.attr('id');
							$dialog_bg = $('.bg_dialog');
							if (run === 'show') {
								app.show(dialog_id);
							} else if (run === 'hide') {
								//$base.find('.ui_close').click();
								app.hide();
								$back.focus();
							}
							
							// auto modal layer popup
							if (auto === true) {
								$base.off('click.dialog');
								($._cookie.get(dialog_id) === null) ? app.show(dialog_id) : '';
								
								// cookie button
								$('.ui_cookie_wrap button').off('click.cookie').on('click.cookie', function () {
									var $this 		= $(this),
										$ck_dialog 	= $this.closest('[role="dialog"]'),
										ck_id 		= $this.attr('data-cookieid'),
										d_id 		= $ck_dialog.attr('id'),
										$ck_inp 	= $('#' + ck_id),
										ck_val 		= $ck_inp.val();
									
									$dialog_bg = $('.bg_dialog');
									($ck_inp.prop('checked') === true) ? $._cookie.set(d_id, ck_val, ck_id, "/") : '';
									app.hide();
								});
							}	
						}
					}
				}
				app.evt();
			});
		}
	});
			
	/*!
	 * @module carousel 
	 * @author jo
	 * @email jo@netive.co.kr
	 * @create 2016-07-02
	 */
	var UiSlide = {
		init : function (options, el) {
			var base = this;
			
			// base root
			base.$elem 			= $(el);
			base.$item_wrapper 	= base.$elem.find('.ui_item_wrapper');
			base.$item 			= base.$item_wrapper.find('.ui_item');
			
			// option
			base.opt 			= $.extend({}, $.fn.uiSlide.options, base.$elem.data(), options);
			
			// load type 이라면 load_item 실행(첫 보여줄 위치값 전달)
			(base.opt.load) ? base.load_item(base.opt.load_start, 'next') : base.set();
		},
		
		load_item : function(n, dir, callback) {
			var base = this;
			
			// 첫번째 아이템값 순서값이 없다면(isNaN으로 숫자가 아닌지 체크) 0. 처음으로 자동 설정
			(isNaN(n)) ? n = 0 : '' ;
			
			// ajax로 파일 불러옴.
			$.ajax({
				url     	: base.opt.load_url,
				dataType	: base.opt.load_type, 
				error 		: function() {
					alert('error');
				},
				success 	: function(data) {
					// 처음 불러올때 한번만 사용. data 값으로 체크
					if (!base.$elem.data('itemload')){
						base.$elem.data('itemload', true);
						
						// ajax로 불러오는 파일의 items 갯수만큼.. !!! json 파일 items 키 이름 필수
						for (var i = 0; i < data.items.length; i++) {
							base.$item_wrapper.append('<div class="ui_item"></div>');
							base.$item = base.$item_wrapper.find('.ui_item');
							
							// 전체 정보 load
							if (base.opt.load_view === 'all') {
								base.$item.eq(i).data('load', true).append( base.opt.load_success(data, i) )
							} 
							// 일부 정보 load
							else {
								(i === n) ? base.$item.eq(n).data('load', true).append( base.opt.load_success(data, n) ) : '';
							}
						}
						base.set(data.items.length);
					} 
					// 추후 정보를 가져올때 사용
					else {
						base.$item.eq(n).data('load', true).append( base.opt.load_success(data, n) );
						base.set_load(data.items.length);
					}
					
					// callback 있다면 실행
					(!!callback) ? callback() : '';
				}
			});
		},
		set : function (loadsum) {
			var base = this;
			
			// 현재아이템 설정
			base.current 		= (!base.opt.load_start) ? base.opt.current - 1 : base.opt.load_start;
			
			// item 정보
			base.info 		= {};
			base.info.tit	= base.$elem.find('.ui_slide_tit').text();
			base.info.sum 	= (!!loadsum) ? loadsum : base.$item.length;
			base.info.w 	= base.$item.outerWidth();
			base.info.h 	= base.$item.eq(base.current).outerHeight();
			base.info.rem 	= base.info.sum % base.opt.view
			base.firstwidth = base.info.w;
			
			
			base.$elem.addClass('slide_ready').css('min-height', base.info.h);
			base.$item_wrapper.css('height', base.info.h);
			base.$item.attr('role', 'tabpanel').eq(base.current).addClass('slide_on');
			
			// multi
			if (base.opt.view > 1) {
				base.$elem.css('width', base.info.w * base.opt.view);
				base.$item_wrapper.css('width', base.info.w * base.opt.view);
				base.$item.addClass('slide_multi').wrapAll('<div class="ui_item_group" />');
				base.$item_group = base.$item_wrapper.find('.ui_item_group');
				base.$item_group.addClass('ui_multi').css('width', base.info.w * base.info.sum);
				base.group_w = base.$item_group.outerWidth();

				// dot 연결 
				for (var i = 0; i < base.info.sum; i++) {
					base.$item.eq(i).data('n', i).addClass('ui_n_' + i);
				}
				
				base.opt.type = 'slide';
				base.clone = base.$item.clone(true);
				
				base.multi_on();
			}
			
			// 완료 후 다음 이벤트 실행 false
			base.moving_btn = false;
			
			// item이 한개 이상이면 이벤트 실행
			if (base.info.sum > 1 || base.opt.load) {
				base.nav_dot();
				base.nav_auto();
				base.nav();
			}
			base.set_re();
		},
		multi_on : function(){
			var base =	this,
				n = base.current;

			base.$elem.find('.ui_item').attr('aria-hidden', true).removeClass('slide_on').find('a, button').attr('tabindex', -1);

			for (var i = 0; i < base.opt.view; i++) {
				base.$elem.find('.ui_item').eq(n + i).attr('aria-hidden', false).addClass('slide_on').find('a, button').attr('tabindex', 0);	
			}
		},
		multi_on_dot : function(){
			var base =	this,
				n = base.current;
			
			base.$elem.find('.dot_wrapper button').removeClass('on');
			
			var $slideOn = base.$elem.find('.slide_on'),
				slideLen = $slideOn.length;

			base.$elem.find('.dot_wrapper .dot_div button').eq(Math.ceil(base.$elem.find('.ui_item').eq(n).data('n') / base.opt.view)).addClass('on');
			
			/*for (var i = 0; i < slideLen; i++) {
				var dot_idx = $slideOn.eq(i).data('n');
				base.$elem.find('.dot_wrapper .dot_div button').eq(dot_idx).addClass('on');
			}*/
		},
		set_re : function () {
			var base = this;
				
			$(win).resize(resizer).resize();
			
			function resizer(){	
				var win_w = $(win).outerWidth();

				if (base.opt.responsive) {
					if (base.opt.view_wide[0] < win_w ) {
						base.$elem.data('reset-d', false);
						base.$elem.data('reset-t', false);
						base.$elem.data('reset-m', false);
						if (!base.$elem.data('reset-w')) {
							base.$elem.data('reset-w', true);
							
							base.opt.view = base.opt.view_wide[1];
							reset();
						}
					} else if (base.opt.view_desktop[0] < win_w ) {
						base.$elem.data('reset-w', false);
						base.$elem.data('reset-t', false);
						base.$elem.data('reset-m', false);
						if (!base.$elem.data('reset-d')) {
							base.$elem.data('reset-d', true);
							base.opt.view = base.opt.view_desktop[1];
							reset();
						}
						
					} else if (base.opt.view_tablet[0] < win_w ) {
						base.$elem.data('reset-w', false);
						base.$elem.data('reset-d', false);
						base.$elem.data('reset-m', false);
						if (!base.$elem.data('reset-t')) {
							base.$elem.data('reset-t', true);
							base.opt.view = base.opt.view_tablet[1];
							reset();
						}
						
					} else if (base.opt.view_mobile[0] < win_w ) {
						base.$elem.data('reset-w', false);
						base.$elem.data('reset-d', false);
						base.$elem.data('reset-t', false);
						if (!base.$elem.data('reset-m')) {
							base.$elem.data('reset-m', true);
							base.opt.view = base.opt.view_mobile[1];
							reset();
						}
					}
					
					
					
				}
				
				
				//if (win_w)
				
				// item width값 %일 경우
				if (base.firstwidth !== base.$item.outerWidth()) {
					base.info.sum = base.$item.length;
					base.info.w = base.$item.outerWidth();
					base.info.h = base.$item.eq(base.current).outerHeight();
					base.firstwidth = base.info.w;
					base.$item_wrapper.css('height', base.info.h);
					base.$elem.css('min-height', base.info.h);
					
					
					
					base.gestures();
				}
			}
			
			function reset(){
				//base.$item.removeClass().addClass('ui_item').unwrap('.ui_item_group');
				base.$elem.find('.ui_item_group').remove();
				base.$elem.find('.ui_item_wrapper').removeAttr('style').append(base.clone);
				base.$item = base.$elem.find('.ui_item');
				base.$elem.find('.dot_wrapper').remove();
				base.$elem.find('.nav_wrapper').remove();
				base.$elem.removeClass('slide_ready').removeAttr('style');
				
				if (base.opt.view === 1) {
					base.$elem.removeClass('multi_slide');
					base.$item.removeClass('slide_multi');
				} else {
					base.$elem.addClass('multi_slide');
				}
				
				base.set();
			}
		},
		set_load : function (sum) {
			var base = this;
			
			base.$item_wrapper 	= base.$elem.find('.ui_item_wrapper');
			base.$item_group 	= base.$item_wrapper.find('.ui_item_group');
			base.$item 			= base.$item_wrapper.find('.ui_item');
			
			//base.$item.attr('role', 'tabpanel').attr('tabindex', 0);
			base.$dot_wrapper 	= base.$elem.find('.dot_wrapper');
			base.$dot_div 		= base.$dot_wrapper.find('.dot_div');
			base.$dot_button 	= base.$dot_div.find('button');

			base.info.sum = sum;
			base.info.w = base.$item.outerWidth();
			base.info.h = base.$item.eq(base.current).outerHeight();
			base.firstwidth = base.info.w;
			
			base.$item_wrapper.css('height', base.info.h);
			base.$elem.css('min-height', base.info.h);
			
			base.nav_dot();
		},
		nav_auto : function(){
			var base = this;
			
			// autoplay
			if (base.opt.autoplay) {
				
				if (base.opt.dot) {
					base.$dot_wrapper.prepend('<button type="button" class="btn_auto"><span>' + base.info.tit + ' <em>정지</em></span></button>');
				} else {
					base.$item_wrapper.before('<button type="button" class="btn_auto type_b"><span>' + base.info.tit + ' <em>정지</em></span></button>');
				}
			
				base.$btn_auto = base.$elem.find('.btn_auto');
				
				// 상태확인에 따른 설정
				(base.opt.autoplay_state === 'play') ? base.move_play() : base.move_stop();
			}
		},
		nav_dot : function(){
			var base = this,
				dot_sum = base.info.sum,
				tit_n, tit_p, dot_button;
						
			// dot nav
			if (base.opt.dot) {
				// dot html생성
				if (!base.$elem.find('.dot_wrapper').length){
					base.$item_wrapper.before('<div class="dot_wrapper" role="tablist"><span class="dot_div"></span></div>');
					
					base.$dot_wrapper 	= base.$elem.find('.dot_wrapper');
					base.$dot_div 		= base.$dot_wrapper.find('.dot_div');
					
					var j = 0;
					for (var i = 0; i < dot_sum; i++) {
						
						if (i === j) {
							j = j + base.opt.view;
							tit_n = base.$item.eq(i).find('.ui_item_tit').text();
							dot_button = '<button type="button" role="tab" data-n="' + i + '">' + tit_n + '</button>';
							base.$dot_div.append(dot_button);
						}
						
						
							
						
					}
				}
				
				base.$dot_button = base.$dot_div.find('button');
				base.$dot_button.attr('aria-selected',false);
				base.$dot_button.eq(base.current).addClass('on').attr('aria-selected',true);
				
				if (base.opt.view > 1) {
					base.multi_on_dot();
				}
			}
		},
		nav : function () {
			var base = this,
				tit_p, tit_n;
			
			// button nav
			if (base.opt.nav) {
				if (!base.$elem.find('.nav_wrapper').length){
					base.$item_wrapper.after('<div class="nav_wrapper"></div>');
					base.$nav_wrapper = base.$elem.find('.nav_wrapper');
	
					tit_p = base.$item.eq(base.current - 1).find('.ui_item_tit').text();
					tit_n = base.$item.eq(base.current + 1).find('.ui_item_tit').text();
					
					if (base.opt.view > 1) {
						base.$nav_wrapper.append('<button type="button" class="prev">이전 - ' + base.info.tit + '</button>');
						base.$nav_wrapper.append('<button type="button" class="next">다음 -' + base.info.tit + '</button>');
					} else {
						base.$nav_wrapper.append('<button type="button" class="prev">이전 - ' + tit_p + '</button>');
						base.$nav_wrapper.append('<button type="button" class="next">다음 -' + tit_n + '</button>');
					}
					
					base.$prev = base.$nav_wrapper.find('.prev');
					base.$next = base.$nav_wrapper.find('.next');
				}
				if (base.opt.rolling === false) {
					if (base.current === base.info.sum - 1) {
						base.$next.addClass('nav_end').text('마지막입니다.').attr('disabled','disabled');
					} else if (base.current === 0) {
						base.$prev.addClass('nav_end').text('마지막입니다.').attr('disabled','disabled');
					} 
				}
			}
			base.evt();
			base.evt_type();
			base.gestures();
		},
		
		nav_re : function (n){
			var base = this,
				t_n, t_p;
			
			// auto height
			var current_height = base.$item.eq(base.current).outerHeight();
			base.$item_wrapper.stop().animate({
				height : current_height
			}, 300);
			base.$elem.stop().animate({
				minHeight : current_height
			}, 300);
			
			//base.moving_btn = false;
			(n >= base.info.sum - 1) ? n = -1 : '';
			
			// dot nav reset
			if (base.opt.dot && base.opt.view === 1) {
				base.$dot_button.removeClass('on').attr('aria-selected', false);
				base.$dot_button.eq(base.current).addClass('on').attr('aria-selected',true);
			} else if (base.opt.view > 1){
				base.multi_on_dot();
			}
			// button nav reset
			if (base.opt.nav) {
				t_p = '이전 - ' + base.$item.eq(n - 1).find('.ui_item_tit').text();
				t_n = '다음 - ' + base.$item.eq(n + 1).find('.ui_item_tit').text();
				
				if (base.opt.view > 1) {
					base.$prev.text('이전 - ' + base.info.tit).removeClass('nav_end').removeAttr('disabled');
					base.$next.text('다음 - ' + base.info.tit).removeClass('nav_end').removeAttr('disabled');
				} else {
					base.$prev.text(t_p).removeClass('nav_end').removeAttr('disabled');
					base.$next.text(t_n).removeClass('nav_end').removeAttr('disabled');
				}

				if (base.opt.rolling === false) {
					if (n < 0) {
						base.$next.addClass('nav_end').text('마지막입니다.').attr('disabled','disabled');
					} else if (n === 0) {
						base.$prev.addClass('nav_end').text('마지막입니다.').attr('disabled','disabled');
					}
				}
			}
		},
		
		evt_type : function () {
			var base = this,
				types = ['as', 'ever', 'jo'];
			
			base.ev_types = {};
			
			if (base.opt.mouseDrag === true && base.opt.touchDrag === true) {
				types = [
					'touchstart.jo mousedown.jo',
					'touchmove.jo mousemove.jo',
					'touchend.jo touchcancel.jo mouseup.jo' 
				];
			}
			else if (base.opt.mouseDrag === false && base.opt.touchDrag === true) {
				types = [
					'touchstart.jo',
					'touchmove.jo',
					'touchend.jo touchcancel.jo' 
				];
			}
			else if (base.opt.mouseDrag === true && base.opt.touchDrag === false) {
				types = [
					'mousedown.jo',
					'mousemove.jo',
					'mouseup.jo' 
				];
			}
			
			base.ev_types.start = types[0];
			base.ev_types.move = types[1];
			base.ev_types.end = types[2]; 
		},
		
		gestures:function () {
			var base = this,
				sum = base.info.sum,
				w = base.info.w,
				n = base.current,
				nn = 0,
				nnn = 0,
				locals,
				left_s;
			
			base.$object = (base.opt.view > 1) ? base.$elem.find('.ui_item_group') : base.$item;
			base.moving = false;
			base.movFix = false;
			
			locals = {
				offsetX : 0,
				offsetY : 0,
				movX : 0,
				movY : 0,
				movX2 : 0,
				movY2 : 0,
				minSwap : w / 10,
				maxSwap : w
			};
			
			function getTouches(event) {
				//터치 이벤트가 undefined 가 아니라면
				if (event.touches !== undefined) {
					return {
						x : event.touches[0].pageX,
						y : event.touches[0].pageY
					};
				}
				if (event.touches === undefined) {
					if (event.pageX !== undefined) {
						return {
							x : event.pageX,
							y : event.pageY
						};
					}
					//ie
					if (event.pageX === undefined) {
						return {
							x : event.clientX,
							y : event.clientY
						};
					}
				}
			}
			
			function swapEvent(type) {
				if (type === 'on') {
					$(doc).off(base.ev_types.move).on(base.ev_types.move, dragMove);
					$(doc).off(base.ev_types.end).on(base.ev_types.end, dragEnd);
				}
				if (type === 'off') {
					$(doc).off(base.ev_types.move);
					$(doc).off(base.ev_types.end);
				}
			}
			
			function dragMove(event) {
				var ev = event.originalEvent || event || win.event,
					ps;
				
				n = base.current;
				base.moving = true; // 움직임중일때 새로운 터치 이벤트 취소
				base.move_stop(); // 자동진행 취소

				// 시작한 위치값 - 현재 위치값 = 이동거리
				locals.movX = parseInt(locals.offsetX - getTouches(ev).x, 10) * -1;
				locals.movY = parseInt(locals.offsetY - getTouches(ev).y, 10) * -1;
				
				// 움직임시 스크롤이벤트 취소
				(Math.abs(locals.movX) > 10) ? ev.preventDefault() : '';
				
				// 최대 드래그 값 설정
				if (Math.abs(locals.movX) > base.info.w * (base.opt.view * 1.2)) {
					return;
				}
				
				// 움직임감도 설정
				locals.movX = Math.round(locals.movX / 1.5);
				locals.movY = Math.round(locals.movY / 1.5);				
				
				// 좌우 슬라이드 
				if (Math.abs(locals.movX) > Math.abs(locals.movY)) {
					(!support.touch) ? event.preventDefault() : ''; // touch 지원 안할때
					base.movFix = true;
					
					// base & multi select
					if (base.opt.view > 1) {
						// multi
						if (base.$elem.find('.ui_n_' + nn).data('n') !== base.$elem.find('.ui_n_' + nn).index()) {
							var idx_i = base.$elem.find('.slide_on').eq(0).data('n');
							
							for (var i = base.info.sum; i--;) {
								var $target = base.$elem.find('.ui_item').eq(-1),
									first = $target.data('n'),
									cut = $target.detach();
								
								base.$item_group.prepend(cut);
								if (first === 0) {
									base.$item_group.stop().css('left', base.info.w * idx_i * -1);
									n = idx_i;
									nn = (locals.movX < 0) ? base.opt.view : 0;
									base.current = n;
									break;
								}
							}
						}
						
						if (locals.movX < 0) {
							//next
							if (nn >= base.info.sum - base.opt.view) {
								locals.movX = (w * n * -1) + Math.round(locals.movX / (base.opt.view - base.info.rem));
								locals.movY = (w * n * -1) + Math.round(locals.movY / (base.opt.view - base.info.rem));			
							} else {
								nn = n + base.opt.view;
								locals.movX = (w * n * -1) + locals.movX;
								locals.movX2 = (w * n * -1) + locals.movX ;
							}
						}
						if (locals.movX > 0) {
							//prev
							if (n === 0) {
								// 정순서, 젤 앞
								locals.movX = Math.round(locals.movX / 10);
								locals.movY = Math.round(locals.movY / 10);				
							} else if (n <= base.info.rem && 0 !== base.info.rem) {
								// 정순서, 나머지보다 같거나 작은수가 남았다면
								nn = 0;
								locals.movX = ((base.info.rem* base.info.w) - Math.round(locals.movX / (base.opt.view - base.info.rem))) * -1;
							} else if (n === (base.info.rem + base.opt.view) && 0 !== base.info.rem) {
								nn = base.info.rem;
								locals.movX = (((base.info.rem + base.opt.view) * base.info.w) - locals.movX) * -1;
							} else {
								nn = n - base.opt.view;
								/*nn = (nn === base.info.rem) ? base.info.rem : n - base.opt.view;*/
								locals.movX =  (((nn + base.opt.view) * base.info.w) - locals.movX) * -1;
							}
						} 
						
					} else {
						//base
						if (locals.movX > 0) {
							nn = n - 1;
							locals.movX2 = (w * -1) + locals.movX;
							// 초기화
							base.$object.eq(n + 1).css({ 
								left : w,
								display : 'none'
							});
						} 
						if (locals.movX < 0) {
							nn = n + 1;
							locals.movX2 = w + locals.movX;
							// 초기화
							base.$object.eq(n - 1).css({ 
								left : w * -1,
								display : 'none'
							});
						}
					}
					
					(nn < 0 ) ? nn = sum - 1 : '';
					(nn >= sum) ? nn = 0 : '';
					
					base.swapMove(locals.movX, locals.movX2, n, nn);
				}
				// 상하스크롤
				if (Math.abs(locals.movY) > Math.abs(locals.movX) && !base.movFix) {					
					$(doc).off("touchmove.jo");
					base.moving = false;
				}
				if (Math.abs(locals.movX) > Math.abs(locals.movY) && base.movFix) {					
					//$(doc).off("touchmove.jo");
					base.moving = true;
				}
			}
			function dragEnd(event) {
				var ev = event.originalEvent || event || win.event;

				// click 움직임 없을 때 item 안의 이벤트 실행..
				if (locals.movX === 0 && locals.movY === 0) {
					base.$object.find('a').off('click.inner_evt').on('click.inner_evt', function (e){
						alert('ok ' + $(this).attr('href'));
					});
					base.moving = false;
					swapEvent('off');
				}
				// (locals.movX !== 0 ) 
				else { 
					// 좌우 움직임일때만 실행
					if (base.movFix) {
						// 좌우 최소 움직임에 대한 설정 안에 들어간다면 취소 움직임
						if (locals.movX < locals.minSwap && locals.movX > 0) {
							base.swapMove_cancel('prev', n, nn);
						}
						else if (Math.abs(locals.movX) < locals.minSwap && locals.movX < 0) {
							base.swapMove_cancel('next', n, nn);
						}
						// 좌우 움직임이 맞다면 완료 움직임.
						else {
							base.swapMove_ok(locals.movX, n, nn);
						}
						swapEvent('off');
					}
				}
				
				// 움직임 완료 후 초기화
				locals.movX = 0;
				base.movFix = false;
			}
			function dragStart(event) {
				var ev = event.originalEvent || event || win.event;
				
				n = base.current;
				
				if (base.opt.load) {
					base.load_item( (n - 1 < 0) ? base.info.sum - 1 : n - 1, 'prev' )
					base.load_item( (n + 1 > base.info.sum - 1) ? 0 : n + 1, 'next' );
				}
				
				if (base.opt.view > 1) {
					left_s = base.$object.position().left;
				}
				
				// 마우스오른쪽버튼 클릭 취소 & 동작중 터치 이벤트 취소, item 전체갯수가 보여주는 갯수보다 작거나 같으면 취소
				if (ev.which === 3 || base.moving === true || base.info.sum <= base.opt.view) {
					return false;
				}
				
				// item 안의 이벤트 취소.. input,button 요소도 추가필요
				/*(base.$object.find('a').off('click.inner_evt').on('click.inner_evt', function (e){
					alert(e);
					e.preventDefault();
				});
				*/
				
				// item 안의 input,button 선택시
				base.$object.find('input, button, select, label').on('click', function (e){
					swapEvent('off');
				});
				
				// 시작 위치값
				locals.offsetX = getTouches(ev).x;
				locals.offsetY = getTouches(ev).y;
				
				// drag,end 이벤트 시작
				swapEvent('on');
			}
			
			// 터치스타트 이벤트
			base.$object.on(base.ev_types.start, dragStart);	
		},
		
		// drag move 시 움직임
		swapMove : function (value, value2, n, nn) {
			var base = this;
			
			if (base.opt.view > 1) {
				// multi
				base.$object.css('left', value);
				
			} else {
				// base
				base.$item.eq(n).css({
					'left' : (base.opt.type === 'cover') ? 0 : value,
					'z-index': 0
				});
				base.$item.eq(nn).css({ 
					left : value2,
					zIndex: 1,
					display : 'block'
				});
			}
		},
		// drag move 취소 움직임
		swapMove_cancel : function (value, n ,nn) {
			var base = this,
				value2 = base.info.w;
		
			(value === 'prev') ? value2 = value2 * -1 : '';
			
			if (base.opt.view > 1) {
				// multi
				base.$object.stop().animate({ 
					left :  0 
				}, base.opt.speed_drag, 'linear', function () {
					base.moving = false;
				});
				
			} else {
				// base
				base.$item.eq(n).stop().animate({ 
					left :  0 
				}, base.opt.speed_drag, 'linear');
				base.$item.eq(nn).stop().animate({ 
					left : value2
				}, base.opt.speed_drag, 'linear', function () {
					base.$item.eq(nn).css({
						display: 'none'
					});
					base.moving = false;
				});
			}
			
		},
		// drag move 완료 움직임
		swapMove_ok : function (value, n, nn) {
			var base = this,
				w = base.info.w;
			
			
			
			
			(value > 0) ? w = w * 1 : ''; 
			(value < 0) ? w = w * -1 : '';
			
			$(doc).off(base.ev_types.start);
			
			if (base.opt.view > 1) {
				//multi
				
				if (nn >= base.info.sum - base.opt.view) {
					base.$object.stop().animate({
						left : w * (base.info.sum - base.opt.view) 
					}, base.opt.speed_drag, 'linear', function (){
						base.current = base.info.sum - base.opt.view;
						base.nav_re(base.info.sum - base.opt.view);
						base.moving = false;
						base.moving_btn = false;
					
						
					});
				} else {
					base.$object.stop().animate({
						left : (w * nn > base.info.w) ? w * nn * -1 :  w * nn
					}, base.opt.speed_drag, 'linear', function (){
						base.current = nn;
						base.nav_re(nn);
						base.moving = false;
						base.moving_btn = false;
					
					});
				}
				base.multi_on();
			} else {
				// base
				if (base.opt.item_eff) {
					base.$item.eq(n).addClass('eff_n');
					base.$item.eq(nn).addClass('eff_nn');
				}
				(base.opt.type === 'cover') ? base.$nav_wrapper.data('ing', true) : '';

				base.$item.eq(n).css('z-index', 0).stop().animate({
					left : (base.opt.type === 'cover') ? 0 : w
				}, base.opt.speed, base.opt.easing, function (){
					base.$nav_wrapper.data('ing', false);
					base.$item.eq(n).removeClass('slide_on eff_n eff_nn').removeAttr('style').removeAttr('tabindex').hide();
				});
				base.$item.eq(nn).stop().animate({
					left : 0
				}, base.opt.speed, base.opt.easing, function (){
					base.moving = false;
					base.moving_btn = false;
				}).addClass('slide_on').attr('tabindex', 0);
				
				base.current = nn;
				base.nav_re(nn);
			}
		},

		// button click event
		evt : function () {
			var base = this,
				direction;
			
			// dot event
			if (base.opt.dot) {
				base.$dot_div.find('button').off('click.uiSlide').on('click.uiSlide', function(){
					var idx = $(this).data('n');
					
					if (base.opt.load && !base.$item.eq(idx).data('load')) {
						base.load_item(idx, 'next', eventAct('', idx));
					} else {
						eventAct('', idx);
					}
				});
				base.$dot_div.find('button').off('focus.uiSlide').on('focus.uiSlide', function() {
					base.move_stop();
				});
			}
			// nav button event
			if (base.opt.nav) {
				base.$prev.off('click.uiSlide').on('click.uiSlide', function(){
					if (!base.$nav_wrapper.data('ing')) {
						if (base.opt.load && !base.$item.eq(base.current - 1).data('load')) {
							(base.current - 1 < 0) ? base.current = base.info.sum : '';
							base.load_item(base.current - 1, 'prev', eventAct('prev'));
						} else {
							eventAct('prev')
						}
					} else {
						return false;
					}
				});
				base.$next.off('click.uiSlide').on('click.uiSlide', function(){
					if (!base.$nav_wrapper.data('ing')) {
						if (base.opt.load) {
							if (!base.$item.eq(base.current + 1).length) {
								base.load_item(0, 'next', eventAct('next'));
							} else {
								if (!base.$item.eq(base.current + 1).data('load')) {
									base.load_item(base.current + 1, 'next', eventAct('next'));
								} else {
									eventAct('next');
								}
							}
						} else {
							eventAct('next');
						}
						
					} else {
						return false;
					}
				});
				base.$nav_wrapper.find('button').off('focus.uiSlide').on('focus.uiSlide', function() {
					base.move_stop();
				});
			}
			// item event
			base.$item.off('focus.uiSlide').on('focus.uiSlide', function() {
				base.move_stop();
			});
			base.$item.find('a, input, button, select').off('focus.uiSlide').on('focus.uiSlide', function() {
				base.move_stop();
			});
			
			//autoplay
			if (base.opt.autoplay) {
				base.$btn_auto.on('click.uiSlide', function () {
					(!!$(this).data('playing')) ? base.move_stop() : base.move_play();
				});
			}

			function eventAct(dir, idx) {
				base.moving_btn = true;
				direction = dir;
				base.move(direction, !!idx ? idx : ''  );
				base.move_stop();
			}
		},
		
		// autoplay move
		move_auto : function (){
			var base = this;

			base.autoPlayInterval = win.setInterval(function () {
				base.move('next');
            }, base.opt.autoplay_time);
		},
		move_stop : function (){
			var base = this;
			
			if (base.opt.autoplay) {
				base.$btn_auto.data('playing', false).removeClass('ico_stop').addClass('ico_play').find('em').text('진행');
				win.clearInterval(base.autoPlayInterval);
			}
		},
		move_play : function (){
			var base = this;

			base.$btn_auto.data('playing', true).removeClass('ico_play').addClass('ico_stop').find('em').text('정지');
			base.move_auto();
		},
		
		// button move
		move : function (direction, idx) {
			var base = this,
				n = base.current,
				nn, dir;
			
			if (base.opt.view > 1) {
				//sum = Math.ceil(base.info.sum / base.opt.view);
				base.info.rem = base.info.sum % base.opt.view
			}
			
			// nav button 
			if (!!direction) {
				if (direction === 'next') {
					dir = '-1';
					nn = n + base.opt.view;
				}
				if (direction === 'prev') {
					dir = '1';
					nn = n - base.opt.view;
				} 
			} 
			
			// dot button
			if (!direction) {
				(!idx) ? idx = 0 : '';
				(n === idx) ? dir = '1' : (n > idx) ? dir = '1' : (n < idx) ? dir = '-1' : '';
				nn = idx;
			}

			base.act(dir, n, nn, direction);
		},
		
		itemCut : function (direction, ord, len) {
			var base = this,
				ord = ord,
				len = len;
			
			for (var i = 0; i < len; i++) {
				var cut = base.$elem.find('.ui_item').eq(ord).detach();
				(direction === 'next' || direction === '') ? base.$item_group.append(cut): '';
				(direction === 'prev') ? base.$item_group.prepend(cut): '';
			}
		},
		groupMove : function (nn, type, value) {
			var base = this,
				left_value,
				nn = nn,
				type = type,
				value = value;
			
			switch (type) {
				case 'a' : left_value = base.info.w * nn * -1;
					break;
				case 'b' : left_value = base.info.w * (base.info.sum - base.opt.view) * -1;
					break;
				case 'c' : left_value = (base.info.w * base.info.rem) * -1;
					break;
				case 'd' : left_value = 0;	
					break;
				case 'e' : left_value = (base.info.w * (base.info.sum - (base.opt.view + base.info.rem))) * -1;
					break;
				case 'f' : left_value = base.info.w * value * -1;
					break;
				default : left_value = base.info.w * nn * -1;
					break;
			}
			
			base.$item_group.stop().animate({
				left : left_value
			}, base.opt.speed, base.opt.easing);
		},
		// button move action
		act : function (dir, n, nn, direction) {
			var base = this,
				idx_rem;

			// type slide
			if (base.opt.type === 'slide' || base.opt.type === 'cover') {
				base.moving_btn = true;
				// multi
				// dot button 연관성 필요... 터치까지....
				(nn > base.info.sum) ? nn = base.info.sum : '';
				
				if (base.opt.view > 1) {
					if (direction === 'next') {
						// 나머지가 없는 경우
						if (base.info.rem === 0) {
							if (nn === base.info.sum) {
								// 나머지가 없는 경우 마지막
								base.itemCut(direction, 0, base.opt.view);
								nn = base.info.sum - base.opt.view;
								base.$item_group.stop().css('left', (base.info.w * (base.info.sum - (base.opt.view * 2))) * -1);
								base.groupMove(nn, 'a');
							} else {
								// 기본 다음 가기
								base.groupMove(nn, 'a');
							}
						}
						
						// 나머지가 있는 경우
						if (base.info.rem > 0) {
							if (base.info.sum < base.opt.view * 2) {
								// 전체갯수가 (보여주는 갯수 * 2) 보다 작다면 
								if (n === 0) {
									nn = base.info.sum - base.opt.view;
									base.groupMove(nn, 'b');
									
								} else {
									base.itemCut(direction, 0, base.info.rem);
									base.$item_group.stop().css('left',  0);
									nn = base.info.sum - base.opt.view;
									base.groupMove(nn, 'c');
								}
							} else {
								if (base.info.sum - (base.opt.view + base.info.rem) === base.$elem.find('.ui_item').eq(n).data('n') || 
									base.info.sum - (base.opt.view + base.info.rem) === base.$elem.find('.ui_item').eq(n).index()) {
									
									idx_rem = base.$elem.find('.ui_item').eq(n).index();
									if (!!base.$elem.find('.ui_item').eq(n + base.opt.view).length) {
										// 나머지부분이 다음위치에 존재한다면
										nn = nn - (base.opt.view - base.info.rem);
										base.groupMove(nn, 'f', idx_rem + base.info.rem);
										
									} else {
										// 나머지부분이 다음위치에 없다면 앞에서 나머지 값만큼 뒤로 이동 
										base.itemCut(direction, 0, base.info.rem);
										base.$item_group.stop().css('left', base.info.w * (base.info.sum - (base.opt.view + base.info.rem)) * -1);
										nn = base.info.sum - base.opt.view;
										base.groupMove(nn, 'f', idx_rem);
									}
								} else {
									if (nn > base.info.sum - base.opt.view) {
										base.itemCut(direction, 0, base.opt.view);
										nn = base.info.sum - base.opt.view;
										base.$item_group.stop().css('left', (base.info.w * (base.info.sum - (base.opt.view * 2))) * -1);
										base.groupMove(nn, 'a');
									} else {
										base.groupMove(nn, 'a');
									}
								}
							}
						}
					}
					
					if (direction === 'prev') {
						// 나머지가 없는 경우
						if (base.info.rem === 0){
							if (nn < 0){
								// nn < 0 인 경우. base.opt.view 값 만큼 뒤에서 앞으로 아이템 이동 후 현재아이템의 위치값은 nn = 0으로 설정.
								base.itemCut(direction, -1, base.opt.view);
								nn = 0;
								base.$item_group.stop().css('left', base.info.w * base.opt.view * -1);
								base.groupMove(nn, 'a');
							} else {
								base.groupMove(nn, 'a');
							}
						}
	
						// 나머지가 있는 경우
						if (base.info.rem > 0) {
							if (base.info.sum < base.opt.view * 2) {
								// 전체갯수가 (보여주는 갯수 * 2) 보다 작다면 
								if (nn > base.opt.view * -1) {
									//base.itemCut(direction, -1, base.opt.view - (base.info.sum - base.opt.view));
									//base.$item_group.stop().css('left',  base.info.w * (base.opt.view - (base.info.sum - base.opt.view)) * -1);
									nn = 0;
									base.groupMove(nn, 'd');
								} else {
									base.itemCut(direction, -1, base.info.rem);
									base.$item_group.stop().css('left',  base.info.w * base.info.rem * -1);
									nn = 0;
									base.groupMove(nn, 'd');
								}
							} 
							else {
								idx_rem = base.$elem.find('.ui_item').eq(n).index();
								if (idx_rem < 1) {
									if (base.$elem.find('.ui_item').eq(n).data('n') === base.info.sum - base.opt.view) {
										// 현재 n이 data값이 (전체수 - 보여주는 갯수) 일때 나머지 수만큼만 이동
										base.itemCut(direction, -1, base.info.rem);
										base.$item_group.stop().css('left', base.info.w * base.info.rem * -1);
										nn = 0;
										base.groupMove(nn, 'd');
									} else {
										// base.opt.view 값 만큼 뒤에서 앞으로 아이템 이동 후 현재아이템의 위치값은 nn = 0으로 설정.
										base.itemCut(direction, -1, base.opt.view);
										base.$item_group.stop().css('left', base.info.w * base.opt.view * -1);
										nn = 0;
										base.groupMove(nn, 'd');
									}
								} else {
									if (base.info.rem === base.$elem.find('.ui_item').eq(n).data('n') || 
										base.info.rem === base.$elem.find('.ui_item').eq(n).index()) {
										// 현재 n이 data값이 전체수 - (보여주는 갯수 + 나머지) 일때 나머지 수만큼만 이동
										nn = idx_rem - base.info.rem;
										base.groupMove(nn, 'f', idx_rem - base.info.rem);
									} else {
										base.groupMove(nn, 'a');
									}
								}
							}
						}
					} 
					
					if (!direction) {
						var nn = base.$elem.find('.ui_n_' + nn).data('n'),
							idx_dot = base.$elem.find('.ui_n_' + nn).index();

						if (nn !== idx_dot) {
							// 기본복사된 순서로 변경.. 문제는 만약 컨텐츠안데 폼요소가 있을 경우 초기화될수 있음.. 
							/*base.$elem.find('.ui_item').detach();
							base.$elem.find('.ui_item_group').append(base.clone);
							base.$item = base.$elem.find('.ui_item');*/

							for (var i = base.info.sum; i--;) {
								var $target = base.$elem.find('.ui_item').eq(-1),
									first = $target.data('n'),
									cut = $target.detach();
								
								base.$item_group.prepend(cut);
								if (first === 0) {
									break;
								}
							}
						} 

						if (nn > base.info.sum - base.opt.view) {
							nn = base.info.sum - base.opt.view;
							idx_dot = base.info.sum - base.opt.view;
							base.$item_group.data('two',true);
							
							base.$item_group.stop().animate({
								left : base.info.w * nn * -1
							}, base.opt.speed, base.opt.easing);
							
						} else {
							base.$item_group.stop().animate({
								left : base.info.w * nn * -1
							}, base.opt.speed, base.opt.easing);
						}
						
					}
				} 
				// base
				else {
					infLoop();
					itemEff();
					
					if (base.opt.type === 'cover') {
						//cover
						base.$nav_wrapper.data('ing', true);
						
						base.$item.eq(n).css('z-index',(dir < 0) ? 0 : 1).stop().animate({
							left : (dir < 0) ? 0 : base.info.w * dir
						}, base.opt.speed, (dir < 0) ? base.opt.easing :  base.opt.easing_re, function (){
							base.$nav_wrapper.data('ing', false);
							base.$item.eq(n).removeClass('slide_on eff_n eff_nn').removeAttr('style').removeAttr('tabindex');
							
						});
						base.$item.eq(nn).css({
							zIndex : (dir > 0) ? 0 : 1,
							display: 'block',
							left : (dir > 0) ? 0 : base.info.w * (dir * -1)
						}).addClass('slide_on').attr('tabindex', 0).stop().animate({
							left : 0
						}, base.opt.speed, (dir < 0) ? base.opt.easing :  base.opt.easing_re);
	
						base.$item.eq(nn).removeClass('eff_n eff_nn');
					
					} else {
						//slide
						base.$item.eq(n).css('z-index',0).stop().animate({
							left : base.info.w * dir
						}, base.opt.speed, base.opt.easing, function (){
							base.$nav_wrapper.data('ing', false);
							base.$item.eq(n).removeClass('slide_on eff_n eff_nn').removeAttr('style').removeAttr('tabindex');
						});
						base.$item.eq(nn).css({
							zIndex : 1,
							display: 'block',
							left : base.info.w * (dir * -1)
						}).addClass('slide_on').attr('tabindex', 0).stop().animate({
							left : 0
						}, base.opt.speed, base.opt.easing);
					}
				}
			}
			// type fade
			if (base.opt.type === 'fade') {
				infLoop();
				itemEff();
				
				base.moving_btn = false;
				base.$item.eq(n).stop().animate({
					left : 0,
					opacity : 0
				}, base.opt.speed, base.opt.easing, function (){
					base.$item.eq(n).removeClass('slide_on eff_n eff_nn').removeAttr('style').removeAttr('tabindex');
				});
				base.$item.eq(nn).css({
					display: 'block',
					left : 0,
					opacity : 0
				}).addClass('slide_on').attr('tabindex', 0).stop().animate({
					opacity : 1
				}, base.opt.speed, base.opt.easing);
				
				base.current = nn;
			}
			function itemEff() {
				if (base.opt.item_eff) {
					
					base.$item.eq((dir < 0) ? n : nn).addClass('eff_n');
					base.$item.eq((dir < 0) ? nn : n).addClass('eff_nn');
				}
			}
			function infLoop() {
				(direction === 'next') ? 
						(nn >= base.info.sum) ? nn = 0 : '' : 
				(direction === 'prev') ? 
						(nn < 0 ) ? nn = base.info.sum - 1 : '' : '';
			}

			base.current = nn;
			if (base.opt.view > 1) {
				base.multi_on();
			}
			base.nav_re(nn);
		}

	};
	$.fn.uiSlide = function (options) {
		return this.each(function (){
			if (!!$(this).data('overlap')) {
				return false;
			}
			$(this).data('overlap', true);
			
			var slide = Object.create(UiSlide);
			
			slide.init(options, this);
			$.data(this, "uiSlide", slide);
		});
	};
	$.fn.uiSlide.options = {
		view : 1,			// 노출 갯수
		item_eff : false,
		responsive : false,
		view_mobile 	: [0, 1],
		view_tablet 	: [760, 2],
		view_desktop 	: [1024, 3],
		view_wide 		: [1400, 4],
		
		current : 1, 		// 1부터 시작
		type : 'slide',		// 'slide' or 'fade'
		easing : 'easeOutQuart',
		easing_re : 'easeInOutQuart',
		/*
		 * linear
		 * easeInQuad, 		easeOutQuad, 		easeInOutQuad, 		easeOutInQuad,
		 * easeInCubic,	 	easeOutCubic, 		easeInOutCubic, 	easeOutInCubic,
		 * easeInQuart,	 	easeOutQuart, 		easeInOutQuart, 	easeOutInQuart, 
		 * easeInQuint, 	easeOutQuint, 		easeInOutQuint, 	easeOutInQuint, 
		 * easeInSine, 		easeOutSine, 		easeInOutSine, 		easeOutInSine, 
		 * easeInExpo, 		easeOutExpo, 		easeInOutExpo, 		easeOutInExpo, 
		 * easeInCirc, 		easeOutCirc, 		easeInOutCirc, 		easeOutInCirc, 
		 * easeInElastic, 	easeOutElastic, 	easeInOutElastic, 	easeOutInElastic, 
		 * easeInBack, 		easeOutBack, 		easeInOutBack, 		easeOutInBack, 
		 * easeInBounce, 	easeOutBounce, 		easeInOutBounce, 	easeOutInBounce
		 * 
		 */
		
		speed : 500,			// animation 속도
		
		rolling : true,
		autoplay : true,
		autoplay_state : 'play', // 'play' or 'stop'
		autoplay_time : 1000,
		
		load : false,			// 파일 로드
		load_url : null,		// 파일 주소
		load_type : null,		// 파일 타입, 'json', 'html' 등
		load_success : null,	// 파일 불러들일 함수
		load_view : 1,			// 몇개씩 불러올건지
		load_start : 0,			// 처음 보여줄 시작 아이템
		
		dot : true,
		nav : true,
		
		mouseDrag : true,
		touchDrag : true,
		speed_drag : 200,		// drag 속도
	};
	
	$('.ui_backpage').on('click',function(){
		history.back();
	});
	
})(jQuery, window, document);