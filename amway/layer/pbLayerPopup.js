//jQuery UI 1.9.1 Original Source Start
function focusable(element, isTabIndexNotNaN){ var map, mapName, img, nodeName = element.nodeName.toLowerCase(); if ( "area" === nodeName ) { map = element.parentNode; mapName = map.name; if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) { return false; } img = $( "img[usemap=#" + mapName + "]" )[0]; return !!img && visible( img ); } return ( /input|select|textarea|button|object/.test( nodeName ) ? !element.disabled : "a" === nodeName ? element.href || isTabIndexNotNaN : isTabIndexNotNaN) && visible( element ); }
function visible( element ) { return $.expr.filters.visible( element ) && !$( element ).parents().addBack().filter(function() { return $.css( this, "visibility" ) === "hidden"; }).length; }
jQuery.extend( $.expr[ ":" ],{ data: $.expr.createPseudo ? $.expr.createPseudo(function( dataName ) {return function( elem ) { return !!$.data( elem, dataName ); }; }) : function( elem, i, match ) { return !!$.data( elem, match[ 3 ] ); }, focusable: function( element ) { return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) ); }, tabbable: function( element ) { var tabIndex = $.attr( element, "tabindex" ), isTabIndexNaN = isNaN( tabIndex ); return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN ); } });
//jQuery UI 1.9.1 Original Source End




jQuery(function($){

  $('div[id^="uiLayerPop"]').hide(); // all layer popup hide
  var $layerPop = $('div[id^="uiLayerPop_"]');
  // $('a[href^="#uiLayerPop_"]').click(layerPopupOpen);

  var bodyW = $(document).width();
  var bodyH = $(document).height();
  var windowW = $(window).width();
  var windowH = $(window).height();

  //가로모드일때 레이어 팝업 사이즈 처리
  $(window).bind("orientationchange",function(event){

    if(!window.orientation==0){
      //alert("가로방향9");
      //alert('windowW : '+windowW);

      var scrollT = $(document).scrollTop();
      var targetH = $target.outerHeight();
      var resultTop= ((windowW - targetH)/2)+scrollT;


      if(targetH >windowW ){
        $target.css({ 'display':'block','top':scrollT+30});
      }else{
        $target.css({ 'display':'block','top':resultTop});
      }


    } else {
      //alert("세로방향9");
      //alert('windowW : '+windowW);
    }
  });

});


function layerPopupOpen(e){
  var $this = e;
  var $target = $($($this).attr('href'));
  var target = $($this).attr('href');

  $target.show();
  $target.attr('tabindex','0');

  var tabbables = $(target + ' :tabbable'),
  //첫번째 탭요소
  first = tabbables.filter(':first'),
  //마지막 탭요소
  last  = tabbables.filter(':last');

  //키 이벤트 등록
  $target.live('keydown',function(event){
    if(event.keyCode !== 9){ return; }
    if((event.target == last[0]) && !event.shiftKey){
      if((event.target.tagName=='INPUT') && (event.target.type=='text')){
        if (document.selection){ document.selection.empty();}
        else if (window.getSelection){ window.getSelection().collapseToStart();}
      }
      first.focus();//첫번째 탭 요소로 포커스 이동
      event.preventDefault();//상위 이벤트 핸들러로 전달되지 않도록 이벤트 해제
    } else if((event.target == first[0]) && event.shiftKey){
      last.focus();//마지막 탭 요소로 포커스 이동
      event.preventDefault();//상위 이벤트 핸들러로 전달되지 않도록 이벤트 해제
    }
  })

  // 암막
  var layerM =$('<div class="layerMask" id="layerMask" style="display:block"><img src="/_ui/mobile/images/common/bg_mask.png" alt=""></div>');
  $target.before(layerM);

  // 170905_추가
  if(target == '#uiLayerPop_comonPopupContent') {
    $target.css('z-index', 20001);
    $target.prev('.layerMask').css('z-index', 19999);
  }
  // // 170905_추가

  var scrollT = $(document).scrollTop();
  var targetH = $target.outerHeight();
  var targetTop = Math.round($($this).offset().top);

  var $layerPop = $('div[id^="uiLayerPop_"]');
    var bodyW = $(document).width();
  var bodyH = $(document).height();
  var windowW = $(window).width();
  var windowH = $(window).height();

  if(targetH < windowH ){
    //레이어 팝업이 windowH보다 작을때는 세로의 중앙에 띄움
    var resultTop= Math.round(((windowH - targetH)/2)+scrollT);
    $target.css({ 'display':'block','top':resultTop});
  }else{
    //레이어 팝업이 windowH보다 클때는 위에서 15px띄운 위치에 뜸
    var resultTop= Math.round(scrollT+15);
    $target.css({ 'display':'block','top':resultTop});
  }
  
  //풀사이즈 고정 레이어(SOP 2016.05.19 추가)
  if( $target.is('.fixedFullsize')){
    $target.css({'display':'block','top':'0'});//'height':windowH 삭제 2018.08.18
    $target.find('.pbLayerContent').css({ height:windowH-74, overflow:'auto'});
    $('body').css('overflow','hidden');
    $('window').css('overflow','hidden');
    
    //iframe 높이값 제어
    if($('.achieveIframe').length){
      var selHeight = $('.monthlyBoxTop').height();
      $('.pbLayerContent').css('overflow','hidden');
      var userAgent = navigator.userAgent.toLowerCase();
      
      if (userAgent.search("android") > -1){
        $('.achieveIframe').css('height',windowH-selHeight-89);
        $(".achieveIframe").contents().find('body').css('margin','0');
      } else if ((userAgent.search("iphone") > -1) || (userAgent.search("ipod") > -1) || (userAgent.search("ipad") > -1)){
        $('.achieveIframe').parent().addClass('iframeScroll');
        $('.achieveIframe').parent().css('height',windowH-selHeight-89);
        $(".achieveIframe").contents().find('body').css({ width:windowW-24, margin:'0'});
      }
      
    }
  }

  // layerPop center align - Close button
  //$layerPop.find('.btnPopClose, .layerPopClose').bind('click',function(){closeLayerPopup($target);return false;});
  //return false;
  if($target.find('.btnPopClose').hasClass('orderNotice') == true){ // 개발팀 요청
    $target.find('.btnPopClose').bind('click',function(){
      $.order.closeOrderRestrictionPopup();
      closeLayerPopup($target);
      return false;
    });
  }else{
    $target.find('.btnPopClose').bind('click',function(){closeLayerPopup($target);return false;});
    return false;
  }


}

function closeLayerPopup($target){

  var $layerPop = $('div[id^="uiLayerPop_"]');

  //170905_수정
  $target.find('.btnPopClose, .layerPopClose').unbind('click');
  // //170905_수정

  $target.unbind('keydown');
  $target.fadeOut(200);
  var targetId=$target.attr('id');

  //170905_수정 (해당 레이어 마스크(검은색 막)만 사라지도록)
  $('.layerMask').each(function(index,element) {
    if ($(element).next().is('.layerMask')||$(element).next().is('#'+targetId) ) {
      $(element).fadeOut(200).remove();
    }
  })
  // //170905_수정

  //$('a[href="#'+targetId+'').focus();
  $target.attr('aria-hidden','true');
  //풀사이즈 고정 레이어(SOP 2016.05.19 추가)
  if( $target.is('.fixedFullsize')){$('body').css('overflow','')}
  
  //유튜브 동영상 있는경우(OAD 2016.08.29 수정)
  if($target.find('iframe.youtubePlayer').length){
    $target.find('iframe.youtubePlayer')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  } 
  
  return false;
};


function loadingLayerS(oldVersion){
  var loadImg =$('<div class="loadingS" id="loadingS"' + (oldVersion ? 'style="z-index:10000"' : '') + '><img src="/_ui/mobile/images/common/loading.gif" alt="로딩중"></div>');
  var layerM =$('<div class="loadMask" id="loadMask" style="display:block;' + (oldVersion ? 'z-index:9999"' : '') + '"><img src="/_ui/mobile/images/common/bg_loading.png" alt=""></div>');
  if (loadImg.length){
    $('#loadingS').remove();
    $('#loadMask').remove();
  }
  $('body').append(loadImg);
  loadImg.before(layerM);
}
function loadingLayerSClose(){
  $('#loadingS').remove();
  $('#loadMask').remove();
  return false;
}