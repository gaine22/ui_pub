// JavaScript Document
$(document).ready(function () {
	var $table = $('table#table1');
	var $tableBody = $table.find('tbody');
	var $SelDepth1 = $table.find('#depth1');
	var $SelDepth2 = $table.find('#depth2');
	var $tableTr = $tableBody.find('tr');
	var depth1Str = undefined;
	var depth1Seq = undefined;
	var depth2Str = undefined;
	var depth2Seq = undefined;

	var menuObj = {};

	// 넘버링을 위한 태그 추가
	$table.find('colgroup').prepend('<col style="width:40px" />');
	$table.find('thead').find('tr').eq(0).prepend('<th scope="col">No</th>');

	// 대메뉴 메뉴 데이터 생성
	$tableTr.each(function (idx) {
		var $depth1 = $(this).find('td').eq(0);
		var $depth2 = $(this).find('td').eq(1);
		if ($depth1.text().trim() != '') {
			depth1Str = $depth1.text();
			depth1Seq = idx;
			if (!menuObj[idx]) { menuObj[idx] = {}; }
			menuObj[idx].menuNm = $depth1.text();
		}
		if ($depth2.text().trim() != '') {
			depth2Str = $depth2.text();
			depth2Seq = idx;
		}
		$(this).attr('data-seq1', depth1Seq).attr('data-depth1', depth1Str).attr('data-depth2', depth2Str).attr('data-seq2', depth2Seq);

		// 넘버링
		$(this).prepend('<td class="no">'+ (idx + 1)+ '</td>');
	});

	// 대메뉴 메뉴 데이터 생성
	$tableTr.each(function (idx) {
		if (!menuObj[$(this).attr('data-seq1')].lowerMenu) {
			menuObj[$(this).attr('data-seq1')].lowerMenu = {};
		}
		menuObj[$(this).attr('data-seq1')].lowerMenu[$(this).attr('data-seq2')] = $(this).attr('data-depth2');
	});

	// 대메뉴 Option 태그 생성
	var arrHtmlStr = new Array();
	arrHtmlStr.push('<option value=""> 전체</option>');
	for (var name in menuObj) {
		arrHtmlStr.push('<option value="' + name + '">' + menuObj[name].menuNm + '</option>');
	}
	$SelDepth1.html(arrHtmlStr.join(''));

	// 대메뉴 이벤트 바인딩
	$SelDepth1.on('change', function () {
		$owner.val(0);
		$stDate.val(0);
		$finishDate.val(0);
		$edDate.val(0);

		if($SelDepth1.val()){
			$tableTr.hide();
			$tableTr.filter('[data-seq1="' + $SelDepth1.val() + '"]').show();
		} else {
			$tableTr.show();
		}

		// 중메뉴 Option 태그 생성
		if(menuObj[$SelDepth1.val()]){
			var lowerMenu = menuObj[$SelDepth1.val()].lowerMenu;
			arrHtmlStr.length = 0;
			arrHtmlStr.push('<option value="">전체</option>');
			for (var name2 in lowerMenu) {
				if (lowerMenu[name2]) {
					arrHtmlStr.push('<option value="' + name2 + '">' + lowerMenu[name2] + '</option>');
				}
			}
			$SelDepth2.html(arrHtmlStr.join(''));
		}
	});

	// 중메뉴 이벤트 바인딩
	$SelDepth2.on('change', function () {
		$owner.val(0);
		$stDate.val(0);
		$finishDate.val(0);
		$edDate.val(0);

		if($SelDepth2.val()){
			$tableTr.hide();
			$tableTr.filter('[data-seq2="' + $SelDepth2.val() + '"]').show();
		} else {
			$SelDepth1.trigger('change');
		}
	});

	// 작업자 셀렉트 박스 생성을 위한 데이터 생성
	var $owner = $table.find('#owner');
	var arrOwnerList = new Array();
	$tableTr.each(function (idx) {
		var owner = $(this).find('td[class=owner]').text().trim();
		var flag = true;
		for(var i=0; i<arrOwnerList.length;i++){
			if(arrOwnerList[i] == owner){ flag = false; }
		}
		if(flag){ arrOwnerList.push(owner); }
		$(this).attr('data-owner', owner);
	});
	// 작업자 셀렉트 박스 Option태그 생성
	arrOwnerList = arrOwnerList.sort();
	arrHtmlStr.length = 0;
	arrHtmlStr.push('<option value="0">전체 </option>');
	for (var i=1; i<arrOwnerList.length;i++) {
		arrHtmlStr.push('<option value="' + arrOwnerList[i] + '">' + arrOwnerList[i] + '</option>');
	}
	$owner.html(arrHtmlStr.join(''));
	// 작업자 셀렉트 박스 이벤트 바인딩
	$owner.on('change', function(){
		$SelDepth1.val('');
		$SelDepth2.val('');
		$stDate.val(0);
		$finishDate.val(0);
		$edDate.val(0);

		if($owner.val() == '0'){
			$tableTr.show();
		} else {
			$tableTr.hide();
			$tableTr.filter('[data-owner="' + $owner.val() +'"]').show();
			$tableTr.filter('[class="depth1Tr"]').show();
		}
		return false;
	});

	// 배포일 셀렉트 박스 생성을 위한 데이터 생성
	var $stDate = $table.find('#deliveryDate');
	var arrStDateList = new Array();
	$tableTr.each(function (idx) {
		var stDate = $(this).find('td[class=deliveryD]').text().trim();
		var flag = true;
		for(var i=0; i<arrStDateList.length;i++){
			if(arrStDateList[i] == stDate){ flag = false; }
		}
		if(flag){ arrStDateList.push(stDate); }
		$(this).attr('data-stDate', stDate);
	});
	// 배포일 셀렉트 박스 Option태그 생성
	arrStDateList = arrStDateList.sort();
	arrHtmlStr.length = 0;
	arrHtmlStr.push('<option value="0">전체</option>');
	for (var i=1; i<arrStDateList.length;i++) {
		arrHtmlStr.push('<option value="' + arrStDateList[i] + '">' + arrStDateList[i] + '</option>');
	}
	$stDate.html(arrHtmlStr.join(''));
	// 배포일 셀렉트 박스 이벤트 바인딩
	$stDate.on('change', function(){
		$SelDepth1.val('');
		$SelDepth2.val('');
		$owner.val(0);
		$finishDate.val(0);
		$edDate.val(0);

		if($stDate.val() == '0'){
			$tableTr.show();
		} else {
			$tableTr.hide();
			$tableTr.filter('[data-stDate="' + $stDate.val() +'"]').show();
			$tableTr.filter('[class="depth1Tr"]').show();
		}
	});

	// 완료일 셀렉트 박스 생성을 위한 데이터 생성
	var $finishDate = $table.find('#finishDate');
	var arrFinishDateList = new Array();
	$tableTr.each(function (idx) {
		var finishDate = $(this).find('td[class=finishD]').text().trim();
		var flag = true;
		for(var i=0; i<arrFinishDateList.length;i++){
			if(arrFinishDateList[i] == finishDate){ flag = false; }
		}
		if(flag){ arrFinishDateList.push(finishDate); }
		$(this).attr('data-finishDate', finishDate);
	});
	// 완료일 셀렉트 박스 Option태그 생성
	arrFinishDateList = arrFinishDateList.sort();
	arrHtmlStr.length = 0;
	arrHtmlStr.push('<option value="0">전체</option>');
	for (var i=1; i<arrFinishDateList.length;i++) {
		arrHtmlStr.push('<option value="' + arrFinishDateList[i] + '">' + arrFinishDateList[i] + '</option>');
	}
	$finishDate.html(arrHtmlStr.join(''));
	// 완료일 셀렉트 박스 이벤트 바인딩
	$finishDate.on('change', function(){
		$SelDepth1.val('');
		$SelDepth2.val('');
		$owner.val(0);
		$stDate.val(0);
		$edDate.val(0);

		if($finishDate.val() == '0'){
			$tableTr.show();
		} else {
			$tableTr.hide();
			$tableTr.filter('[data-finishDate="' + $finishDate.val() +'"]').show();
			$tableTr.filter('[class="depth1Tr"]').show();
		}
	});

	// 수정일 셀렉트 박스 생성을 위한 데이터 생성
	var $edDate = $table.find('#editDate');
	var arrEdDateList = new Array();
	$tableTr.each(function (idx) {
		var edDate = $(this).find('td[class=editD]').text().trim();
		var flag = true;
		for(var i=0; i<arrEdDateList.length;i++){
			if(arrEdDateList[i] == edDate){ flag = false; }
		}
		if(flag){ arrEdDateList.push(edDate); }
		$(this).attr('data-edDate', edDate);
	});
	// 수정일 셀렉트 박스 Option태그 생성
	arrEdDateList = arrEdDateList.sort();
	arrHtmlStr.length = 0;
	arrHtmlStr.push('<option value="0">전체</option>');
	for (var i=1; i<arrEdDateList.length;i++) {
		arrHtmlStr.push('<option value="' + arrEdDateList[i] + '">' + arrEdDateList[i] + '</option>');
	}
	$edDate.html(arrHtmlStr.join(''));
	// 수정일 셀렉트 박스 이벤트 바인딩
	$edDate.on('change', function(){
		$SelDepth1.val('');
		$SelDepth2.val('');
		$owner.val(0);
		$stDate.val(0);
		$finishDate.val(0);

		if($edDate.val() == '0'){
			$tableTr.show();
		} else {
			$tableTr.hide();
			$tableTr.filter('[data-edDate="' + $edDate.val() +'"]').show();
			$tableTr.filter('[class="depth1Tr"]').show();
		}
	});




});


$(function($){
	var asisNum = $('#table1 .asisCont').length;
	var migNum = $('#table1 .migCont').length;
	var outNum = $('#table1 .outCont').length;
	var totalNum = ($('#table1 .deliveryD').length-asisNum-migNum-outNum);



	var ingNum = $('#table1 .ing').length;
	var doneNum = $('#table1 .done').length;
	var doneNum2 = $('#table1 tr.asisCont .done').length;
	var finishNum = $('#table1 .finish').length;
	var editNum = $('#table1 .edit').length;

	$('.siteInfo .total').text(totalNum);
	$('.siteInfo .asis').text(asisNum);
	$('.siteInfo .mig').text(migNum);
	$('.siteInfo .ing').text(ingNum);
	$('.siteInfo .done').text(doneNum-doneNum2);
	$('.siteInfo .finish').text(finishNum);
	$('.siteInfo .edit').text(editNum);

	$('#ingRate').text(Math.round(((ingNum/totalNum)*100)) + '%');
	$('#doneRate').text(Math.round((((doneNum-doneNum2)/totalNum)*100)) + '%');
	$('#finishRate').text(Math.round(((finishNum/totalNum)*100)) + '%');
	$('#editRate').text(Math.round(((editNum/totalNum)*100)) + '%');

	//논리적인 탭 세팅 부분
	$('#tabCont1, #tabCont2, #tabCont3').css('display','none');

	tabSetting();
	function tabSetting(){
		$('.tabDepth1 li').each(function(){
			var clickHref = $(this).find('a').attr("href");

			if($(this).hasClass('on') == true){
				$('' + clickHref + '').show();
			}else{
				$('' + clickHref + '').hide();
			}
		});
	}

	$('.tabDepth1 li').find('a').click(function() {
		$('.tabDepth1 li').removeClass('on');
		$(this).parent().addClass('on');
		tabSetting();
		return false;
	});



	$('.notice li').append('<span class="bul"></span>');


	// to top
	var scrollDiv = document.createElement('div');
	$(scrollDiv).attr('id', 'toTop').html('<a href="#nohref">↑ 처음으로 이동</a>').appendTo('body');
	$(window).scroll(function(){
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function(){
		$('body,html').animate({scrollTop: 0}, 'fast');
		return false;
	});

});