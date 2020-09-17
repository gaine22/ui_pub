/*
 * Copyright ⓒ LG CNS, Inc. All rights reserved.
 * 
 * Do Not Erase This Comment!!!
 * 
 * 본 프로그램의 모든 내용은 LG CNS "SmartChannelPlatform" 이하 SCP의 자산이므로 어떤한 경우라도 허락없이 재배포
 * 하거나 LG CNS 외부로의 유출이 금지되어 있습니다.
 * 
 * 프로젝트에서 SCP를 사용하거나 SCP를 변경한 경우 프로젝트 정보와 변경된 내용을 SCP 팀에 알려야 한다.
 */

/**
 * ****************************************************************************
 *  @module       : sui
 *  @version      : v1.2
 *  @fileName     : sui.ucb.js
 *  @description  : SmartUI JavaScript Library 
 *  @author       : LG CNS SCP
 *  @dateCreated  : 2011.12.10
 * ----------------------------------------------------------------------------
 *  [ 변경내역 ]
 *  <ul>
 *    <li>2011.12.10 : 최초작성</li>
 *    <li>2012.05.03 : sui.js에 정의된 컴포넌트 빌드 함수를 이관해옴</li>
 *    <li>2012.11.28 : 배포버전 최초 작성</li>
 *    <li>2013.02.25 : 스크립트 파일 로드 시, 상위 컴포넌트가 있을 경우 상위 컴포넌트의 스크립트 파일을 먼저 로드하도록 수정</li>
 *    <li>2014.01.18 : callBack 함수 추가, 콤포넌트 API 호출 시, 빌드 완료 후 호출 되도록 수정</li>        
 *  </ul>
 **/
(function(){var a=function(){var c=sui.env,b=sui.res;var d={_extends:{Dialog:"PopupLayer",Calendar:"PopupLayer",DatePicker:"PopupLayer",TimePicker:"PopupLayer",SAlert:"PopupLayer",SConfirm:"PopupLayer",SPrompt:"PopupLayer"},apis:{AppendTable:["reload","addRows","getData","getSelectRecords"],Calendar:["setMinDate","setMaxDate","open","close"],DatePicker:["open","close"],Dialog:["open","close","openPreChangeURL","resetPosition"],Dropdown:[],FooterBar:[],HeaderBar:[],Hnav:[],Joystick:[],Pager:["pagerPrev","pagerNext"],PageSlide:[],PopupLayer:["open","close"],SAlert:["open","close","changeMessage"],SConfirm:["open","close","changeMessage"],ScrollBar:[],SPrompt:["open","close","changeMessage"],Tab:["selectedTabIndex"],Table:["reload","getSelectRecords","getSelectIndexs","save","editMode","cancel","addFirstRow","addFirstRow","removeRow","moveUpCursor","moveDownCursor","changeCursor","moveUpRow","moveDownRow"],TimePicker:["open","close"],Tree:[],Vnav:[]}};d.build=function(p,k,r,l,n,h){var f=$(p);if(!f[0]){throw {at:"sui.res.includeUic",name:"ResError",message:k+" doesn't exist"}}var i=c.get("config.ucb.uicMetas",{});if(!i[k]){throw {at:"sui.res.includeUic",name:"ResError",message:"Can not find "+k+" metadata definitions."}}if(f[0]["isCreate_"+k]){return}f[0]["isCreate_"+k]=true;l=(l?l:c.getViewType()).toLowerCase();if($.isFunction(n)){n(f,k,r,l)}var q=$.Deferred();q.promise().done(function(){f.queue(function(){if($.isFunction(h)){h(f,k,r,l)}f[0]["isCreate_"+k]=false;f.dequeue()})});f.each(function(){this.suiRun=function(v,w){var x=this;q.promise().done(function(){x[v].apply(x,w)})};var u=d.apis[k];if(u){for(var t=0,s=u.length;t<s;t++){this[u[t]]=function(v){return function(){this.suiRun(v,arguments)}}(u[t])}}});i=i[k];var g=function(s){var t;for(prop in s){t=s[prop];if(t){if(t.hasOwnProperty("pc")||t.hasOwnProperty("sm")||t.hasOwnProperty("tp")||t.hasOwnProperty("PC")||t.hasOwnProperty("SM")||t.hasOwnProperty("TP")){if(t.hasOwnProperty(l)){s[prop]=s[prop][l]}else{if(t.hasOwnProperty(l.toUpperCase())){s[prop]=s[prop][l.toUpperCase()]}else{delete s[prop]}}}}}return s};var m=sui.env.get("config.ucb.uicMetas."+k+".defaultOption","");r=$.extend(true,{},g(m),g(r)||{});if(r.skin){if(-1===r.skin.indexOf("skin-")){r.skin="skin-"+r.skin}}else{if(!!i.defaultOption.skin){if(-1===i.defaultOption.skin.indexOf("skin-")){r.skin="skin-"+i.defaultOption.skin}else{r.skin=i.defaultOption.skin}}else{r.skin="skin-default"}}var j=[];var e=d._extends[k];var o=null;if(!!e){o=c.get("config.ucb.uicMetas",{});if(!o[e]){throw {at:"sui.res.includeUic",name:"ResError",message:"Can not find "+k+" metadata definitions."}}o=o[e];j=[{id:k+"i18n_js",url:c.getI18nDir(i.i18n,k)},{id:l+"_"+e+"_js",url:c.getScriptDir(o.name,e,l)},{id:l+"_"+k+"_js",url:c.getScriptDir(i.name,k,l)}]}else{j=[{id:k+"i18n_js",url:c.getI18nDir(i.i18n,k)},{id:l+"_"+k+"_js",url:c.getScriptDir(i.name,k,l)}]}if(!!r.skin){if(!!sui.env.get("config.env.useLocaleCss")){if(-1===r.skin.indexOf(".locale-"+c.getLocale().getLanguage())){r.skin=r.skin+".locale-"+c.getLocale().getLanguage()}}b.includeCss(null,[{id:l+"_"+k+"_"+r.skin+"_skin_css",url:c.getCssDir(k+"-"+r.skin+".css",k,l)}],null,function(){b.includeJs(document.getElementById(c.getScriptContainerId()),j,null,function(){f["sui"+l+k].apply(f,[r])},q)})}else{b.includeJs(document.getElementById(c.getScriptContainerId()),j,null,function(){f["sui"+l+k].apply(f,[r])},q)}return f};return d};sui.addModule("sui.ucb",a())})();