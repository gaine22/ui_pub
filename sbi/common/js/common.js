;(function($, win, doc, undefined) {
	win.SBI = {
		initialize : function(){
			var base = this,
				contents = '';
			
			contents += '	<div class="ui_menu" id="menu">';
			contents += '		<a href="#">메뉴 링크1</a>';
			contents += '		<a href="#">메뉴 링크2</a>';
			contents += '		<a href="#btn_menu" class="ui_close">a - 닫기</a>';
			contents += '		<button type="button" class="ui_close">button - 닫기</button>';
			contents += '	</div>';
			
			$('.menu_wrapper').append(contents);
			
			//button
			$('button.ui_open').on('click', function(){
				$('.ui_menu').show().stop().animate({
					right: 0
				}, function(){
					$(this).find('a, button, input, label').eq(0).focus();
				});
			});
			$('button.ui_close').on('click', function(){
				$('.ui_menu').stop().animate({
					right: '-50%'
				}, function(){
					$('button.ui_open').focus();
					$(this).hide();
				});
			});

			// a 
			$('a.ui_open').on('click', function(){
				$('.ui_menu').show().stop().animate({
					right: 0
				}).attr('tabindex', 0).focus();
			});
			$('a.ui_close').on('click', function(){
				$('.ui_menu').stop().animate({
					right: '-50%'
				}, function(){
					$(this).hide();
				});
			});
			
			
		}
	};


	$(win).load(function() {
		setTimeout(function() {
			SBI.initialize();
		}, 0);
	});
	
})(jQuery, window, document);