if (!Object.create) {
	Object.create = function (o) {
		if (arguments.length > 1) {
			throw new Error('Sorry the polyfill Object.create only accepts the first parameter.');
		}
		function F() {}
		F.prototype = o;
		return new F();
	};
}
if(!Array.indexOf){ 
	Array.prototype.indexOf = function(obj){ 
		for(var i=0; i<this.length; i++){ 
			if(this[i]==obj){ return i; } 
		} 
		return -1; 
	}
}
if(!Array.prototype.forEach) {
	Array.prototype.forEach = function(callback,thisArg) {
		var T,k;
		if(this === null) {
			throw new TypeError('error');
		}
		var O = Object(this);
		var len = O.length >>> 0;
		if(typeof callback !== "function"){
			throw new TypeError('error');
		}
		if(arguments.length > 1){
			T = thisArg;
		}
		k = 0;
		while(k < len){
			var kValue;
			if(k in O) {
				kValue = O[k];
				callback.call(T, kValue, k, O);
			}
			k++;
		}
	};
}
if(!Array.isArray) {
	Array.isArray = function(arg){
		return Object.prototype.toString.call(arg) === '[object Array]';
	}
}
if(!Object.keys){
	Object.keys = (function() {
		'use strict';
		var hasOwnProperty = Object.prototype.hasOwnProperty,
			hasDontEnumBug = !({ toDtring : null }).propertyIsEnumerable('toString'),
			dontEnums = [
				'toString',
				'toLocaleString',
				'valueOf',
				'hasOwnProperty',
				'isPrototypeOf',
				'propertyIsEnumerable',
				'constructor'
			],
			dontEnumsLength = dontEnums.length;
		
		return function(obj) {
			if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
				throw new TypeError('Object.keys called on non=object');
			}
			var result = [], prop, i;
			for (prop in obj) {
				if (hasOwnProperty.call(obj, prop)) {
					result.push(prop);
				}
			}
			if (hasDontEnumBug) {
				for (i=0; i < dontEnumsLength; i++) {
					if (hasOwnProperty.call(obj, dontEnums[i])) {
						result.push(dontEnums[i]);
					}
				}
			}
			return result;
		};
	}()); 
}

var mConsole = (function(){
	var html = [
			'<div id="uiConsole" class="ui-console">',
				'<button type="button" id="uiConsoleOpen" class="ui-console-open">열고닫기</button>',
				'<div id="uiConsoleTab" class="ui-console-tab">',
					'<button type="button" id="uiConsoleTabConsole" class="ui-console-btn">Console</button>',
					'<button type="button" id="uiConsoleTabElement" class="ui-console-btn">Element</button>',
				'</div>',
				'<button type="button" id="uiConsoleClear" class="ui-console-clear">clear</button>',
				'<div id="uiConsoleView" class="ui-console-view">',
					'<div id="uiConsoleViewConsole">',
						
						'<div id="uiConsoleViewConsoleText">',
						'</div>',
					'</div>',
					'<div id="uiConsoleViewElement" style="display:none"></div>',
				'</div>',
			'</div>'
			],
		temp = document.createElement('div'),
		init = function(){
			if(document.getElementById('uiConsole')) return;
				temp.innerHTML = html.join('');
				document.body.appendChild(temp.childNodes[0]);
				document.getElementById('uiConsole').onclick = function(e){
				switch(e.target.id){
				case'uiConsoleClear':
					document.getElementById('uiConsoleViewConsoleText').innerHTML = '';
					break;
				case'uiConsoleOpen':
					document.getElementById('uiConsole').classList.toggle('on');
					break;
				case'uiConsoleTab':
					e.target.style.height = e.target.style.height == '200px' ? '20px' : '200px';
					break;
				case'uiConsoleTabElement':
					document.getElementById('uiConsoleClear').style.display = 'none';
					document.getElementById('uiConsoleViewConsole').style.display = 'none';
					document.getElementById('uiConsoleViewElement').style.display = 'block';
					document.getElementById('uiConsoleViewElement').innerHTML = '<pre>' +
						('<html>\n' + document.getElementsByTagName('html')[0].innerHTML + '\n</html>').replace(/[<]/g, '&lt;') +
						'</pre>';
					break;
				case'uiConsoleTabConsole':
					document.getElementById('uiConsoleViewConsole').style.display = 'block';
					document.getElementById('uiConsoleViewElement').style.display = 'none';
					document.getElementById('uiConsoleClear').style.display = 'block';
				}
			}
		};
	
	return {
		log:function(){
			var a = arguments, i = 0, j = a.length, item, v;
			init();
		item = ['<div class="ui-console-wrap">'];
			while(i < j){
				v = a[i++];
				if(v && typeof v == 'object') v = JSON.stringify(v);
				item.push('<div class="ui-console_item">' + v + '</div>');
			}
		item.push('</div>');
			temp.innerHTML = item.join('');
			document.getElementById('uiConsoleViewConsoleText').appendChild(temp.childNodes[0]);
		}
	};
})();

;(function(){
	var width = document.documentElement.offsetWidth,
		devsize = [1400, 1023, 767],
		sizeMode = width > devsize[0] ? 4 : width > devsize[1] ? 3 : width > devsize[2] ? 2 : 1,
		html5tags = ['article', 'aside', 'details', 'figcaption', 'figure', 'footer', 'header', 'hgroup', 'nav', 'main', 'section', 'summary'],
		i = 0, 
		max = html5tags.length;

	for (i = 0; i < max; i++) {
		document.createElement(html5tags[i]);
	}
	
	document.documentElement.className += (' s'+ sizeMode +' s'+ (3 > sizeMode ? 12 : 34) + (360 > width ? ' s0' : ''));
})();