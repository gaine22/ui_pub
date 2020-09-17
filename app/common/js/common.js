;(function($, win, doc, undefined) {
	win.N = {
		initialize : function(){
			var base = this;
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
			
			// smooth wheel 도중 취소 추가
			$(win).on('mousedown', function(){
				$('body').data('smoothwheelstop', true);
			}).on('mouseup', function(){
				$('body').data('smoothwheelstop', false);
			});
			
			N.resizeClass();
			N.intro();
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
		intro : function() {
			var base = this;
			

		},
		sWheel : function(){
			$('body').smoothWheel();
		}
	
	};


	$(win).load(function() {
		setTimeout(function() {
			N.initialize();
		}, 0);
	});
	
})(jQuery, window, document);