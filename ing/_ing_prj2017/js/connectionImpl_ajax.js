/*****************************************************************************
*  File Name      : connectionImpl.js
*  Description    : AJAX JS 
*  Author         : jskim_m
*  Date Created   : 2014.01.09
*--------------------------------------------------------------
*  [변경 내역]
*  [YY.MM.DD] [변경자] [변경내역]
******************************************************************************/

/**
 * 기본 AJAX HTTP 네트워크 연결객체 함수를 등록한다.
 *
 * @class registerConnectionKind
 * @namespace sui.net
 * @constructor
 * @date 2014-01-18
 * @author jskim_m
 */
sui.net.registerConnectionKind("ajax", function () {
	//의존관계 정의
	//var mlog = sui.mlog;
	
	var me = this;
	this.xhr = null;

	/**
	 * 실행을 취소하고 성공여부를 반환한다.
	 * 
	 * @method abortExecuteImple
	 * @return {Boolean} 취소 성공여부
	 */
	this.abortExecuteImple = function() {
		if (this.xhr) {
			this.xhr.abort();
		}
		return true;
	};

	/**
	 * 동기화 모드로 연결을 실행하고 응답데이터를 반환한다.
	 * 
	 * @method syncExecuteImple
     * @param {String} method 전송방식
     * @param {String} contentType 데이터유형
     * @param {String} url 전송할 주소
     * @param {Object} data 전송 데이터
     * @param {Function} successFunc 성공콜백함수
     * @param {Function} errorFunc 실패콜백함수
     * @param {Long} timeout 타임아웃(1000/1초 단위)
	 * @return {Object} 응답데이터
	 */
	this.syncExecuteImple = function (method, contentType, url, data, successFunc, errorFunc, timeout) {
		this.xhr = jQuery.ajax({
			async: false,
			type: method,
			url: url,
			data: data,
			dataType: contentType || "text",
			//TODO xhr: _private.xhr,
			beforeSend: function (xhr) {
				//xhr 에 헤더항목 목록를 설정한다.
				var hdnms = me.getHeaderNames();
				for (var hdx = 0, len = hdnms.length; hdx < len; hdx += 1) {
					xhr.setRequestHeader(hdnms[hdx], me.getHeader(hdnms[hdx]));
				}
			},
			//timeout: timeout,
            success: function (rData, statusTxt, xhr) {
				//성공시 인자를 받아서... (응답데이터, 상태)로 전달
                successFunc(rData, statusTxt);
            },
            error: function (xhr, statusTxt, thrownErr) {
                me.abortExecute();
				//실패시 인자를 받아서... (오류내용, 상태)로 전달
                errorFunc(thrownErr, statusTxt);
            }
		});
        
		return this.xhr.responseText;
	};

	/**
	 * 비동기 모드로 연결하고 콜백함수를 실행한다.
	 * 
	 * @method asyncExecuteImple
     * @param {String} method 전송방식
     * @param {String} contentType 데이터유형
     * @param {String} url 전송할 주소
     * @param {Object} data 전송할 데이터
     * @param {Function} successFunc 성공콜백함수
     * @param {Function} errorFunc 실패콜백함수
     * @param {Long} timeout 타임아웃(1000/1초 단위)
	 */
	this.asyncExecuteImple = function (method, contentType, url, data, successFunc, errorFunc, timeout) {
		this.xhr = $.ajax({
			async: true,
			type: method,
			url: url,
			data: data,
			dataType: contentType || "text",
			//TODO xhr: _private.xhr,
            beforeSend: function (xhr) {
                //xhr 에 헤더항목 목록를 설정한다.
                var hdnms = me.getHeaderNames();
                for (var hdx = 0, len = hdnms.length; hdx < len; hdx += 1) {
                    xhr.setRequestHeader(hdnms[hdx], me.getHeader(hdnms[hdx]));
                }
            },
			//timeout: timeout,
			success: function (rData, statusTxt, xhr) {
                successFunc(rData, statusTxt);
			},
			error: function (xhr, statusTxt, thrownErr) {
				me.abortExecute();
                errorFunc(thrownErr, statusTxt);
			}
		});
	};
});