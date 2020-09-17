;(function ($, win, doc, undefined) {

    $plugins.page = {
        initialize: function(){
            $plugins.uiAjax({ id:'baseHeader', url:'/html/ui/inc/base_header.html', page:true, callback:$plugins.page.header });
        },

        header: function(){
            var now = new Date();
            $('#uiNow').text(now.getFullYear() + '' + (now.getMonth() + 1) + '' + now.getDate());
            $('#uiMenuToggle').on('click', function(){
                if (!$('#uiMenuToggle').data('on')) {
                    $('#uiMenuToggle').data('on', true);
                    $('.nav-wrap').fadeIn(200);
                } else {
                    $('#uiMenuToggle').data('on', false);
                    $('.nav-wrap').fadeOut(200);
                }
                
            });

            var pathname = win.location.pathname,
                len = $('#menuTree > .ui-acco-wrap').length;
            
            pathname = pathname.split('/');
            for (var i = 0; i < len; i++) {
                if (pathname[i].indexOf("start") > -1){
                    $plugins.uiAccordion({ id:'menuTree', current:[0,1,2], autoclose:false});
                } else if(pathname[i].indexOf("layout") > -1){
                    $plugins.uiAccordion({ id:'menuTree', current:[0,1,2], autoclose:false});
                } else if (pathname[i].indexOf("ui") > -1){
                    $plugins.uiAccordion({ id:'menuTree', current:[0,1,2], autoclose:false});
                } 
            }
            
        }
    };

    $(win).on('load', function() {
		setTimeout(function() {
			$plugins.page.initialize();
		}, 0);
	});


})(jQuery, window, document);