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
 *  @version      : v1.1
 *  @fileName     : sui.uti.validator.js
 *  @description  : SmartUI JavaScript Library 
 *  @author       : LG CNS SCP
 *  @dateCreated  : 2011.12.10
 * ----------------------------------------------------------------------------
 *  [ 변경내역 ]
 *  <ul>
 *    <li>2011.12.10 : 최초작성</li>
 *    <li>2012.05.03 : 파일분리</li>
 *    <li>2012.11.28 : 배포버전 최초 작성</li>    
 *    <li>2014.02.06 : 복수 필드 조합형 추가</li>    
 *  </ul>
 **/
(function(){var a=function(b,c){var d=sui.env;var e={};e.validateInputData=function(f,h){var g=[];if(f.attr("disabled")){return true}if(h.required){g=g.concat(e.required(f,h.required,h.required.message))}else{if(h.optional){g=g.concat(e.optional(f,h.optional,h.optional.message))}else{if(h.combination){g=g.concat(e.combination(f,h.combination,h.combination.message))}}}return g};e.required=function(h,k,j){var g=[];var i=false;var f="";if($.isPlainObject(h)){i=h.val().trim();f="sui_uic_validator_001"}else{switch(h.prop("tagName")){case"INPUT":switch(h.prop("type")){case"checkbox":case"radio":i=h.is(":checked");f="sui_uic_validator_required_002";break;default:i=h.val();f="sui_uic_validator_required_001";break}break;case"SELECT":i=h.val();f="sui_uic_validator_required_003";break;case"TEXTAREA":i=h.val();f="sui_uic_validator_required_004";break;default:i=h.val();f="sui_uic_validator_required_001";break}}if(!i){g=[(j?j:d.getMessage(f))]}else{if(k.rules){if(k.rules.length>0){g=e.validate(h,k.rules)}}}return g};e.optional=function(g,j,i){var f=[];var h=false;if($.isPlainObject(g)){h=g.val().trim()}else{switch(g.prop("tagName")){case"INPUT":switch(g.prop("type")){case"checkbox":case"radio":h=g.is(":checked");break;default:h=g.val();break}break;case"SELECT":h=g.val();break;case"TEXTAREA":h=g.val();break;default:h=g.val();break}}if(h){if(j.rules){if(j.rules.length>0){f=e.validate(g,j.rules)}}}return f};e.combination=function(j,l,k){var h=[];var i=false;for(var g=0,f=j.size();g<f;g++){if(j.eq(g).val()){i=true;continue}}if(i){h=e.validate(j,l.rules)}return h};e.validate=function(h,l){var i=[];if(Object.prototype.toString.call(l)!=="[object Array]"){l=[l]}for(var g=0,m=l.length;g<m;g+=1){var k=l[g].split(":");var j=k[0];if(j=="regexp"){$.extend(d.get("validator.rule.regularExp"),{regexp:{message:(k[2]||d.getMessage("sui_uic_validator_002")),regExp:new RegExp(k[1])}})}if(d.get("validator.rule.regularExp")[j]){if(d.get("validator.rule.regularExp")[j]["regExp"].test(h.val())===false){i.push(sui.env.getMessage(d.get("validator.rule.regularExp")[j]["message"])||k[2])}}else{var f=d.get("validator.rule")[j](h,l[g]);if(true!==f){i.push(f)}}}return i};e.dataSetPath=function(j,h){var f;var g;try{g=j[0];j=j.remove(0);f=h.get(g);if(f.type==="DataSet"){f=h.get(g)}else{if(f.type==="RecordSet"){f=this.dataSetPath(j,f.getDataSet(0))}}}catch(i){return null}return f};return function(){var h=[false];var g=arguments[0];var k=g[0],l=g[1],j=null;if(Object.prototype.toString.call(k)!=="[object Array]"){k=[k]}for(var f=0;f<k.length;f+=1){(function(m){if(k[m].id){j=$("#"+k[m].id);k[m]._findType="id"}else{if(k[m].name){j=$('[name="'+k[m].name+'"]');k[m]._findType="name"}else{if(k[m].className){j=$("."+k[m].className);k[m]._findType="className"}else{if(k[m].selector){j=$(k[m].selector);k[m]._findType="selector"}else{if(k[m].obj){j={val:function(){return e.dataSetPath(k[m].obj.split("/"),l)},attr:function(o){var n;switch(o){case"type":n="object";break;case"disabled":n="";break}return n}};j[0]=j.val();k[m]._findType="obj"}}}}}if(!j[0]){alert(k[m]._findType+" : ["+k[m][k[m]._findType]+"] does not exist.");return false}var i=e.validateInputData(j,k[m]);if(0<i.length){h.push({title:(k[m].title||k[m][k[m]._findType]),object:j,result:i})}}(f))}if(1>=h.length){h[0]=true}return h}(arguments)};sui.addModule("sui.uti.validator",a)}());