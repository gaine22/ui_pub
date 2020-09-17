var slion = {};

slion.$ = function(element){
	return document.getElementById(element);
}


slion.getCookie = function ( name ){
	
	var cookieStr = document.cookie;
	var cookies = cookieStr.split('; ');
	var rtn_value = null;
	
	for(var i=0; i < cookies.length; i++){
		var cookie = cookies[i];		
		var c = cookie.split('=');
		if(c.length == 2 && c[0] == name){
			rtn_value = unescape(c[1]);
		}
	}

	return rtn_value;
}


slion.setCookie = function( name, value ){
	
	var defaultExpDate = new Date();
	defaultExpDate.setTime(defaultExpDate.getTime() + 1000*60*60*1);
	
     var argv = arguments;
     var argc = arguments.length;
     var expires = (argc > 2) ? argv[2] : defaultExpDate;
     var path = (argc > 3) ? argv[3] : '/';
     var domain = (argc > 4) ? argv[4] : null;
     var secure = (argc > 5) ? argv[5] : false;
     
     document.cookie = name + "=" + escape (value) +
       ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
       ((path == null) ? "" : ("; path=" + path)) +
       ((domain == null) ? "" : ("; domain=" + domain)) +
       ((secure == true) ? "; secure" : "");
};


slion.toggle = function( el ) {

	if ( el.style.display != 'none' ) {
        el.style.display = 'none';
    }
    else {
        el.style.display = '';
    }

}


slion.setListPage = function( catid ){
	var argv = arguments;
    var argc = arguments.length;
    
    if(argc == 1)
    	this.setCookie("slion_" + catid, document.location);
    else if(argc == 2)
    	this.setCookie("slion_" + catid, argv[1]);
}



slion.getListPage = function( catid, defaulturl ){
	var url = this.getCookie( "slion_"+catid );
	document.location = url ? url : defaulturl;
}


//need prototype
slion.setCount = function( url, catid, artid, catname, subject, writer){
	
	var pars = "catid=" + catid + "&artid=" + artid + "&catname=" + encodeURIComponent(catname) + "&subject=" + encodeURIComponent(subject) + "&writer=" + encodeURIComponent(writer);
	
	new Ajax.Request(url, {

		  method: 'get',
		  parameters : pars,
		  onSuccess: function(transport) {
			var rtn = transport.responseText;
		  }
		});	
}


