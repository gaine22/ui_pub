/*
 * @(#) sui_config.js
 * 
 * Copyright ⓒ LG CNS, Inc. All rights reserved.
 * 
 * Do Not Erase This Comment!!!
 * 
 * 본 프로그램의 모든 내용은 LG CNS 'SmartChannelPlatform' 이하 SCP의 자산이므로 어떤한 경우라도 허락없이 재배포
 * 하거나 LG CNS 외부로의 유출이 금지되어 있습니다.
 * 
 * 프로젝트에서 SCP를 사용하거나 SCP를 변경한 경우 프로젝트 정보와 변경된 내용을 SCP 팀에 알려야 한다.
 */

// 라이센스 식별자 정의
//127.0.0.1;localhost;10.25.3.3;10.25.15.12;203.251.132.208;192.168.112.74;211.115.67.86;www.inglife.co.kr
sui__license = "4b84b15bff6ee5796152495a230e45e3d7e947d9;334389048b872a533002b34d73f8c29fd09efc50;352dae855b8889318cb0d13666c897692565e84d;f05102caca585013c91549f94010aa49c0547697;4b88895eae739977ac991986ea504170b3039e68;dcf12844a51e65f353805e1f244dd1748609a9f5;b840c9cd65ac71ef6805dd62a9e2934f0748a89c;08521efa85edd0d91df0ae9b9ecaa18fe4d9bc14";

// 모듈 환경설정 정의
envData = {
    // //////////////////////////////////////////////////////////////////////////
    // SUI 환경설정
    // //////////////////////////////////////////////////////////////////////////
    "config" : {
        "env" : {
            "viewType" : "PC",
            "deviceType" : "PC",
            "scriptContainer" : "scriptContainerId",
            "homeDir" : "/",
            "webRootDir" : "{#homeDir}",
            "docRootDir" : "{#webRootDir}", 
            "cssDir" : "{#webRootDir}",
            "scriptDir" : "{#webRootDir}",
            "imageDir" : "{#webRootDir}/images",
            "suiDocRootDir" : "{#webRootDir}/smartui",
            "suiCssDir" : "{#suiDocRootDir}/component/{compnm}/css/{viewtp}",
            "suiScriptDir" : "{#suiDocRootDir}/component/{compnm}/js/{viewtp}",
            "suiI18nDir" : "{#suiDocRootDir}/component/{compnm}/js/i18n",
            "suiImageDir" : "{#suiDocRootDir}/component/{compnm}/images/{viewtp}",
            "defaultLocale" : "ko-KR",
            "resCharset" : "utf-8",
            "useLocaleCss" : false,
            log : {
                log : false,
                debug : false,
                info : false,
                warn : false,
                error : false
            },
            mlog : {
                log : false,
                debug : false,
                info : false,
                warn : false,
                error : false
            }
        },

        "ucb" : {
            "uicMetas" : {
                "ScrollBar" : {
                    "i18n" : "jquery.sui.ScrollBar.locale-{lang}.js",
                    "name" : "jquery.sui.ScrollBar_min.js",
                    "defaultOption" : {
                        skin : 'default',
                        height : '300px',
                        axis : 'y',
                        wheel : 40,
                        scroll : true,
                        lockscroll : true,
                        size : 'auto',
                        sizethumb : 'auto',
                        invertscroll : false
                    }
                },
                "PageSlide" : {
                    "i18n" : "jquery.sui.PageSlide.locale-{lang}.js",
                    "name" : "jquery.sui.PageSlide_min.js",
                    "defaultOption" : {
                        /**
                         * PageSlide에 사용할 스킨 지정 
                         * defaultValue : "default"
                         * @property skin
                         * @type String
                         */
                        skin : 'default',
                        /**
                         * 화면전환 속도
                         * defaultValue : 500
                         * @property speed
                         * @type Int
                         */
                        speed : 75,
                        /**
                         * 드래그 전환 임계 범위(0.15 == 15%)
                         * defaultValue : 0.25
                         * @property range
                         * @type Float
                         */
                        range : 0.25,
                        /**
                         * 화면 롤링여부
                         * defaultValue : true
                         * @property rolling
                         * @type Boolean
                         */
                        rolling : true,
                        /**
                         * 페이저 연동속성
                         * defaultValue : null
                         * @property pager
                         * @type Object
                         */
                        pager : null,
                        /**
                         * Pager '이전'버튼 기능구현함수
                         * defaultValue : null
                         * @property prevPagerHandler
                         * @type Function
                         */
                        prevPagerHandler : null,
                        /**
                         * Pager 'Pager '다음'버튼 기능구현함수
                         * defaultValue : null
                         * @property nextPagerHandler
                         * @type Function
                         */
                        nextPagerHandler : null,
                        /**
                         * PageSlide가 초기화 된 후의 실행 함수 지정 핸들러
                         * initHandler(pageSlide, items) 
                         * defaultValue : null
                         * @property initHandler
                         * @type Function
                         */
                        initHandler : null,
                        /**
                         * Page Number 클릭 시, 이전 페이지 사라지는 효과 지정
                         * jquery ui effect 옵션 참조
                         * @property hideEffect
                         * @type Object
                         **/
                        hideEffect : {
                            effect : "fade"
                        },
                        /**
                         * Page Number 클릭 시, 클릭한 페이지 나타나는 효과 지정
                         * jquery ui effect 옵션 참조
                         * @property hideEffect
                         * @type Object
                         **/
                        showEffect : {
                            effect : "fade"
                        },
                        /**
                         * 컴포넌트 생성 효과 지정
                         * jquery ui effect 옵션 참고
                         *
                         * defaultValue : {
                         *   effect : "slideDown"
                         *    }
                         * @property initEffect
                         * @type object
                         */
                        initEffect : {
                            effect : "slideDown"
                        }
                    }
                },
                "Calendar" : {
                    "i18n" : "jquery.sui.Calendar.locale-{lang}.js",
                    "name" : "jquery.sui.Calendar_min.js",
                    "defaultOption" : {
                        /**
                         * 달력에 사용할 스킨 지정 
                         * defaultValue : "default"
                         * @property skin
                         * @type String
                         */
                        skin : "efsd",
                        /**
                         * 새창의 너비
                         * defaultValue : 630
                         * @property width
                         * @type Integer
                         */
                        width : "auto",
                        /**
                         * 창크기를 %로 할것인지 px로 할것인지 결정하는 단위
                         * defaultValue : 'px'
                         * @property unit
                         * @type Integer
                         */
                        unit : 'px',
                        /**
                         * 달력표시할때 trigger 
                         * 속성구분 : {both, self, button}
                         * defaultValue : "both"
                         * @property showOn
                         * @type String
                         */
                        showOn : "button",
                        /**
                         * 기본적으로 선택될 날짜 
                         * defaultValue : null
                         * @property defaultDate
                         * @type String
                         */
                        defaultDate : null,
                        /**
                         * 날짜 표시 포맷
                         * defaultValue : "yy-mm-dd"
                         * @property dateFormat
                         * @type String
                         */
                        dateFormat : "yy-mm-dd",
                        /**
                         * 년도 변경 여부
                         * defaultValue : false
                         * @property changeYear
                         * @type Boolean
                         */
                        changeYear : true,
                        /**
                         * 달 변경 여부
                         * defaultValue : false
                         * @property changeMonth
                         * @type Boolean
                         */
                        changeMonth : true,
                        /**
                         * 날짜를 선택했을때 실행될 Handler
                         * defaultValue : null
                         * @property onSelect
                         * @type Function
                         */
                        onSelect : null,
                        /**
                         * 날짜 선택시 선택된 날짜를 적용할 element기술
                         * defaultValue : null
                         * @property altField
                         * @type String
                         */
                        altField : null,
                        /**
                         * specialDay 처리후 리턴되는 값의 형태는 다음과 같아야 한다. [[년도,월,일,속성구분,메시지],[],...]
                        *            속성구분 : {0:휴일, 1:스케줄}
                         * defaultValue : null
                         * @property specialDay
                         * @type Function
                         */
                        specialDay : null,
                        /**
                         * 월, 년 순의 셀렉트 박스를 년,월 순으로 바꿔준다. 
                         * defaultValue : false
                         * @property showMonthAfterYear
                         * @type Function
                         */
                        showMonthAfterYear : false,
                        /**
                         * 최소 선택 가능 일자
                         * defaultValue : null
                         * @property minDate
                         * @type String
                         */
                        minDate : null,
                        /**
                         * 최대 선택 가능 일자
                         * defaultValue : null
                         * @property maxDate
                         * @type String
                         */
                        maxDate : null,
                        /**
                         * 년도 선택 셀렉트박스를 현재 년도에서 이전, 이후로 얼마의 범위를 표시할것인지를 기술
                         * defaultValue : 'c-10:c+10'
                         * @property yearRange
                         * @type String
                         */
                        yearRange : 'c-10:c+10',
                        /**
                         * 오늘 날짜로 가기 버튼을 활성화 시킬 것인지 여부를 기술
                         * defaultValue : true
                         * @property todayBtn
                         * @type Boolean
                         */
                        todayBtn : true,
                        /**
                         * 인라인 달력을 제외하고 하나의 달력만 노출할 것인지 여부를 기술
                         * defaultValue : true
                         * @property onlyOneShow
                         * @type Boolean
                         */
                        onlyOneShow : true,
                        /**
                         * 테이블 제목(접근성 준수사항)
                         * defaultValue : ""
                         * @property caption
                         * @type String
                         */
                        caption : "날짜 선택",
                        /**
                         * 테이블 설명(접근성 준수사항)
                         * defaultValue : ""
                         * @property summary
                         * @type String
                         */
                        summary : "",
                        /**
                         * 화면전환 속도
                         * defaultValue : 500
                         * @property speed
                         * @type Int
                         */
                        speed : 500,
                        /**
                         * 드래그 전환 임계 범위(0.15 == 15%)
                         * defaultValue : 0.5
                         * @property range
                         * @type Float
                         */
                        range : 0.3,
                        /**
                         * 대체 오픈 버튼을 등록
                         * altOpenBtn의 값 유형 
                         * defaultValue : null
                         * @property altOpenBtn
                         * @type Object
                         */
                        altOpenBtn : null,
                        /**
                         * 대체 닫기 버튼을 등록
                         * defaultValue : null
                         * @property altCloseBtn
                         * @type Object
                         */
                        altCloseBtn : null,
                        /**
                         * 닫기 기능 대신에 PopupLayer를 제외한 영역 클릭 시 팝업이 닫힌는 기능 활성 여부
                         * defaultValue : false
                         * @property altClose
                         * @type Boolean
                         */
                        altClose : false,
                        /**
                         * 팝업 형식 결정 (false 일반형식으로 띄운다, true 모달형식으로 띄운다.), fullScreen일때는 지원안함
                         * defaultValue : false
                         * @property doModal
                         * @type Boolean
                         */
                        doModal : false,
                        /**
                         * 새창을 띄울 왼쪽좌표 (새창의 위치가 클릭한 곳 기준으로 몇px 왼쪽으로 보여줄지 설정)
                         * defaultValue : 0
                         * @property top
                         * @type Integer
                         */
                        left : 0,
                        /**
                         * 새창을 띄울 위쪽좌표 (새창의 위치가 클릭한 곳 기준으로 몇px 위로 보여줄지 설정)
                         * defaultValue : 0
                         * @property top
                         * @type Integer
                         */
                        top : 0,
                        /**
                        * 컴포넌트의 z-index 설정
                        * defaultValue : 100001
                        * @property zIndex
                        * @type Integer
                        */
                        zIndex : 100001,
                        /**
                         * Position 속성이 "click" 혹은 "magnet:버튼옆에" 일 경우, 오픈 버튼 기준으로 왼쪽 혹은 오른쪽으로 팝업 오픈
                         * defaultValue : right
                         * @property showDirection
                         * @type String
                         */
                        showDirection : "right",
                        /**
                         * 팝업이 초기화 된 후의 실행 함수 지정 핸들러
                         * initHandler(content, overlay) 
                         * defaultValue : null
                         * @property initHandler
                         * @type Function
                         */
                        initHandler : null,
                        /**
                         * 팝업이 열리기 전에 전처리 핸들러
                         * openPreHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property openPreHandler
                         * @type Function
                         */
                        openPreHandler : null,
                        /**
                         * 팝업이 열리기 후에 후처리 핸들러
                         * openPostHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property openPostHandler
                         * @type Function
                         */
                        openPostHandler : null,
                        /**
                         * 팝업이 닫히기 전에 전처리 핸들러
                         * closePreHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property closePreHandler
                         * @type Function
                         */
                        closePreHandler : null,
                        /**
                         * 팝업이 닫힌 후에 후처리 핸들러
                         * closePostHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property closePostHandler
                         * @type Function
                         */
                        closePostHandler : null,
                        /**
                         * 팝업 생성시 body하위로 마크업 생성 여부
                         * (true이면 body태그 최하단에 위치, false이면 버튼(대상) 태그 다음에 위치)
                         * defaultValue : false
                         * @property bodyAppend
                         * @type Boolean
                         */
                        bodyAppend : true,
                        /**
                         * 팝업 띄울 위치
                         * (
                         *    magnet : 버튼옆에 띄움, 
                         *    click : 클릭한 곳기준 플로팅, 
                         *    center : 화면중앙 플로팅, 
                         *    fullScreen : 화면을 꽉 채운 스타일로 플로팅
                         *    fullScreenW : 가로화면을 꽉 채운 스타일로 플로팅
                         *    fullScreenH : 세로화면을 꽉 채운 스타일로 플로팅 
                         * )
                         * defaultValue : "click"
                         * @property position
                         * @type String
                         */
                        position : {
                            PC : "click",
                            SM : "fullScreenW",
                            TP : "click"
                        },
                        /**
                         * 달력 오픈 버튼 텍스트
                         * defaultValue : ""
                         * @property openText
                         * @type String
                         */
                        openText : null,
                        /**
                         * 달력 오픈 버튼 타이틀
                         * defaultValue : ""
                         * @property openTitle
                         * @type String
                         */
                        openTitle : null,
                        /**
                         * 팝업을 닫을 키코드를 설정한다.
                         * defaultValue : 27
                         * @property closeKeyCode
                         * @type Number
                         */
                        closeKeyCode : 27,
                        /**
                         * Page Number 클릭 시, 이전 페이지 사라지는 효과 지정
                         * @property hideEffect
                         * @type Object
                         **/
                        hideEffect : {
                            effect : "fade"
                        },
                        /**
                         * Page Number 클릭 시, 클릭한 페이지 나타나는 효과 지정
                         * @property hideEffect
                         * @type Object
                         **/
                        showEffect : {
                            effect : "fade"
                        },
                        /**
                         * 월 변경 시, 에니메이션 효과 사용 여부
                         * defaultValue : true
                         * @property isAnimate
                         * @type Boolean
                         */
                        isAnimate : true
                    }
                },
                "Dialog" : {
                    "i18n" : "jquery.sui.Dialog.locale-{lang}.js",
                    "name" : "jquery.sui.Dialog_min.js",
                    "defaultOption" : {
                        /**
                         * url앞에 붙을 pre문자열(contextRoot)
                         * defaultValue : ""
                         * @property contextRoot
                         * @type String
                         */
                        contextRoot : "",
                        /**
                         * 팝업화면에 띄울 URL
                         * defaultValue : ""
                         * @property url
                         * @type String
                         */
                        url : "",
                        /**
                         * url으로 페이지를 여는게 아니라 html태그를 받는다.
                         * defaultValue : ""
                         * @property url
                         * @type String
                         */
                        source : null,
                        /**
                         * 팝업이름(웹 접근성 필수사항)
                         * defaultValue : ""
                         * @property windowName
                         * @type String
                         */
                        windowName : "",
                        /**
                         * Dialog에 사용할 스킨(css class) 지정
                         * defaultValue : "default"
                         * @property skin
                         * @type String
                         */
                        skin : "default",
                        /**
                         * 새창의 너비
                         * defaultValue : 630
                         * @property width
                         * @type Integer
                         */
                        width : "auto",
                        /**
                         * 새창의 높이
                         * defaultValue : 450
                         * @property height
                         * @type Integer
                         */
                        height : "auto",
                        /**
                         * 창크기를 %로 할것인지 px로 할것인지 결정하는 단위
                         * defaultValue : 'px'
                         * @property unit
                         * @type Integer
                         */
                        unit : 'px',
                        /**
                         * 제목(heading) 보여줄것인가의 여부 결정(false 안보여준다, true 보여준다)
                         * defaultValue : true
                         * @property visibleTitle
                         * @type Boolean
                         */
                        visibleTitle : true,
                        /**
                         * 하단(bottom) 보여줄것인가의 여부 결정(false 안보여준다, true 보여준다)
                         * defaultValue : true
                         * @property visibleFoot
                         * @type Boolean
                         */
                        visibleFoot : true,
                        /**
                         * 하단(bottom) 추가할 콘텐츠
                         * defaultValue : ""
                         * @property footContent
                         * @type Boolean
                         */
                        footContent : "",
                        /**
                         * 대체 오픈 버튼을 등록
                         * altOpenBtn의 값 유형 
                         * defaultValue : null
                         * @property altOpenBtn
                         * @type Object
                         */
                        altOpenBtn : null,
                        /**
                         * 대체 닫기 버튼을 등록
                         * defaultValue : null
                         * @property altCloseBtn
                         * @type Object
                         */
                        altCloseBtn : null,
                        /**
                         * 닫기 기능 대신에 PopupLayer를 제외한 영역 클릭 시 팝업이 닫힌는 기능 활성 여부
                         * defaultValue : false
                         * @property altClose
                         * @type Boolean
                         */
                        altClose : false,
                        /**
                         * 팝업 형식 결정 (false 일반형식으로 띄운다, true 모달형식으로 띄운다.), fullScreen일때는 지원안함
                         * defaultValue : false
                         * @property doModal
                         * @type Boolean
                         */
                        doModal : false,
                        /**
                         * 하나의 팝업만 노출할 것인지 여부
                         * defaultValue : true
                         * @property onlyOneShow
                         * @type Boolean
                         */
                        onlyOneShow : true,
                        /**
                         * 새창을 띄울 왼쪽좌표 (새창의 위치가 클릭한 곳 기준으로 몇px 왼쪽으로 보여줄지 설정)
                         * defaultValue : 0
                         * @property top
                         * @type Integer
                         */
                        left : 0,
                        /**
                         * 새창을 띄울 위쪽좌표 (새창의 위치가 클릭한 곳 기준으로 몇px 위로 보여줄지 설정)
                         * defaultValue : 0
                         * @property top
                         * @type Integer
                         */
                        top : 0,
                        /**
                        * 컴포넌트의 z-index 설정
                        * defaultValue : 100001
                        * @property zIndex
                        * @type Integer
                        */
                        zIndex : 100001,
                        /**
                         * Position 속성이 "click" 혹은 "magnet:버튼옆에" 일 경우, 오픈 버튼 기준으로 왼쪽 혹은 오른쪽으로 팝업 오픈
                         * defaultValue : right
                         * @property showDirection
                         * @type String
                         */
                        showDirection : "right",
                        /**
                         * 팝업이 초기화 된 후의 실행 함수 지정 핸들러
                         * initHandler(content, overlay) 
                         * defaultValue : null
                         * @property initHandler
                         * @type Function
                         */
                        initHandler : null,
                        /**
                         * 팝업이 열리기 전에 전처리 핸들러
                         * openPreHandler(event, content, overlay) 
                         * defaultValue : null
                         * @property openPreHandler
                         * @type Function
                         */
                        openPreHandler : null,
                        /**
                         * 팝업이 열리기 후에 후처리 핸들러
                         * openPostHandler(event, content, overlay) 
                         * defaultValue : null
                         * @property openPostHandler
                         * @type Function
                         */
                        openPostHandler : null,
                        /**
                         * 팝업이 닫히기 전에 전처리 핸들러
                         * closePreHandler(event, content, overlay) 
                         * defaultValue : null
                         * @property closePreHandler
                         * @type Function
                         */
                        closePreHandler : null,
                        /**
                         * 팝업이 닫힌 후에 후처리 핸들러
                         * closePostHandler(event, content, overlay) 
                         * defaultValue : null
                         * @property closePostHandler
                         * @type Function
                         */
                        closePostHandler : null,
                        /**
                         * 팝업 생성시 body하위로 마크업 생성 여부
                         * (true이면 body태그 최하단에 위치, false이면 버튼(대상) 태그 다음에 위치)
                         * defaultValue : false
                         * @property bodyAppend
                         * @type Boolean
                         */
                        bodyAppend : true,
                        /**
                         * 팝업 띄울 위치
                         * (
                         *    magnet : 버튼옆에 띄움, 
                         *    click : 클릭한 곳기준 플로팅, 
                         *    center : 화면중앙 플로팅, 
                         *    fullScreen : 화면을 꽉 채운 스타일로 플로팅
                         *    fullScreenW : 가로화면을 꽉 채운 스타일로 플로팅
                         *    fullScreenH : 세로화면을 꽉 채운 스타일로 플로팅 
                         * )
                         * defaultValue : "magnet"
                         * @property position
                         * @type String
                         */
                        position : {
                            PC : "magnet",
                            SM : "fullScreen",
                            TP : "magnet"
                        },
                        /**
                         * 팝업을 닫을 키코드를 설정한다.
                         * defaultValue : 27
                         * @property closeKeyCode
                         * @type Number
                         */
                        closeKeyCode : 27,
                        /**
                         * Page Number 클릭 시, 이전 페이지 사라지는 효과 지정
                         * @property hideEffect
                         * @type Object
                         **/
                        hideEffect : {
                            effect : "fade"
                        },
                        /**
                         * Page Number 클릭 시, 클릭한 페이지 나타나는 효과 지정
                         * @property hideEffect
                         * @type Object
                         **/
                        showEffect : {
                            effect : "fade"
                        }
                    }
                },
                "Pager" : {
                    "i18n" : "jquery.sui.Pager.locale-{lang}.js",
                    "name" : "jquery.sui.Pager_min.js",
                    "defaultOption" : {
                        /**
                         * 사용할 스킨버전
                         * defaultValue : "default"
                         * @property skin
                         * @type String
                         */
                        skin : "default",
                        /**
                         * 페이지당 레코드수만큼만 보여지고 그안에서 순환할지 다음블록전환할지 여부
                         * defaultValue : false
                         * @property rotation
                         * @type Boolean
                         */
                        rotation : false,
                        /**
                         * 페이지당 레코드 수
                         * defaultValue : 5
                         * @property devonRowSize
                         * @type Integer
                         */
                        devonRowSize : 5,
                        /**
                         * 현재 페이지 번호
                         * defaultValue : 1
                         * @property curPage
                         * @type Integer
                         */
                        curPage : 1,
                        /**
                         * 블록당 페이지 수
                         * defaultValue : 5
                         * @property blockSize
                         * @type Integer
                         */
                        blockSize : 5,
                        /**
                         * 전체 리스트수
                         * defaultValue : 1
                         * @property totalRowSize
                         * @type Integer
                         */
                        totalRowSize : 1,
                        /**
                         * 번호나 네비게이션 버튼을 클릭 했을때 실행할 기능구현함수
                         * aguments : (요청할페이지번호, 요청할레코드번호, 페이지당 레코드수)
                         * defaultValue : null
                         * @property pagerHandler
                         * @type Function
                         */
                        pagerHandler : null,
                        /**
                         * 이전, 다음페이지 버튼 사용 유무
                         * defaultValue : true
                         * @property preNextPageBtn
                         * @type Boolean
                         */
                        preNextPageBtn : true,
                        /**
                         * 이전, 다음페이지블럭 버튼 사용 유무
                         * defaultValue : true
                         * @property preNextBlockBtn
                         * @type Boolean
                         */
                        preNextBlockBtn : true,
                        /**
                         * 첫, 끝페이지 버튼 사용 유무
                         * defaultValue : false
                         * @property firstLastPageBtn
                         * @type Boolean
                         */
                        firstLastPageBtn : false,
                        /**
                         * Pager 초기화 된 후의 실행 함수 지정 핸들러
                         * initHandler(pager, prevBtn, nextBtn, preBlockpage, nextBlockpage, firstPageBtn, lastPageBtn, totPage, totBlock, curPage);
                         * defaultValue : null
                         * @property initHandler
                         * @type Function
                         */
                        initHandler : null
                    }
                },
                "Tab" : {
                    "i18n" : "jquery.sui.Tab.locale-{lang}.js",
                    "name" : "jquery.sui.Tab_min.js",
                    "defaultOption" : {
                        /**
                         * 탭 갯수만큼 제목 설정
                         * @property tabTitle 
                         * @type Array
                         **/
                        tabTitle : [],
                        /**
                         * 동적으로 가져올 컨텐츠 정보
                         * 	{
                         * 		url : 동적으로 가져올 컨텐츠를 가져올 http request 주소
                         * 		data : request 요청 시, 던져줄 파라메터
                         * 		errorHandler : 에러 시, 실행될 함수 기술 function(index, title, content)
                         * 	}
                         * @property tabTitle 
                         * @type Array
                         **/
                        tabLink : null,
                        /**
                         * 탭이 생성될때 디폴트로 선택될 탭을 선택
                         * @property defaultFocus 
                         * @type String
                         **/
                        defaultFocus : 0,
                        /**
                         * 사용할 스킨버전
                         * @property skin 
                         * @type String
                         **/
                        skin : 'default',
                        /**
                         * 탭을 눌렀을때 화면이 보이기 전 처리 함수 기술
                         * function(index, title, content)
                         * @property eventHandler 
                         * @type Function
                         **/
                        showPreHandler : null,
                        /**
                         * 탭을 눌렀을때 화면이 보이기 후 처리 함수 기술
                         * function(index, title, content)
                         * @property eventHandler 
                         * @type Function
                         **/
                        showPostHandler : null,
                        /**
                         * 탭 초기화 시, 실행될 함수 기술
                         * function(tab, contents, currentIndex)
                         * @property eventHandler 
                         * @type Function
                         **/
                        initHandler : null,
                        /**
                         * 제목을 표시하는 부분 한개의 너비
                         * @property tabWidth 
                         * @type Integer
                         **/
                        tabWidth : 0,
                        /**
                         * 탭사이 간격
                         * @property tabPadding 
                         * @type Integer
                         **/
                        tabPadding : 0,
                        /**
                         * 탭너비, 탭사이간격의 단위 (px, %)
                         * @property unit 
                         * @type String
                         **/
                        unit : '%',
                        /**
                         * 아코디언 형태일 경우에 한해서 선택한 탭 외에 다른 탭을 닫을 것인지 여부
                         * @property anotherCloseTab 
                         * @type Boolean
                         **/
                        anotherCloseTab : true,
                        /**
                         * Tab Open시 Tab의 Contents Animation 효과 설정 사용안하는경우에는 false를 사용 'SM'은 Effect가 SlideDown으로 고정
                         * @property showEffect
                         * @type Object
                         **/
                        showEffect : {
                            PC : {
                                effect : "fade",
                                duration : 500
                            },
                            SM : {
                                duration : 500
                            },
                            TP : {
                                effect : "fade",
                                duration : 500
                            }
                        },
                        /**
                         * Tab Close시 Tab의 Contents Animation 효과 설정 사용안하는경우에는 false를 사용 'SM'은 Effect가 SlideUp으로 고정
                         * @property hideEffect
                         * @type Object
                         **/
                        hideEffect : {
                            PC : {
                                effect : "fade",
                                duration : 500
                            },
                            SM : {
                                duration : 500
                            },
                            TP : {
                                effect : "fade",
                                duration : 500
                            }
                        },
                        /**
                         * Tab 초기화시 Tab의 Contents Animation 효과 설정 사용안하는경우에는 false를 사용
                         * @property initEffect
                         * @type Object
                         **/
                        initEffect : {
                            PC : {
                                effect : 'blind',
                                duration : 500
                            },
                            SM : {
                                effect : 'blind',
                                duration : 500
                            },
                            TP : {
                                effect : 'blind',
                                duration : 500
                            }
                        }
                    }
                },
                "Tree" : {
                    "i18n" : "jquery.sui.Tree.locale-{lang}.js",
                    "name" : "jquery.sui.Tree_min.js",
                    "defaultOption" : {
                        skin : 'default'
                    }
                },
                "Table" : {
                    "i18n" : "jquery.sui.Table.locale-{lang}.js",
                    "name" : "jquery.sui.Table_min.js",
                    "defaultOption" : {
                        /**
                         * 테이블 전체 너비 지정
                         * @property width 
                         * @type Integer
                         **/
                        width : 100,
                        /**
                         * 테이블 전체 높이 지정
                         * @property height 
                         * @type Integer
                         **/
                        height : 190,
                        /**
                         * 전체너비를 %로 표현할지 px로 표현할지 여부
                         * @property unit 
                         * @type String
                         **/
                        unit : '%',
                        /**
                         * 페이저와 연동 되었을때 테이블 높이를 devonRowSize 갯수만큼 고정 시켜준다.
                         * 테이블이 devonRowSize갯수 이하로 조회 되었을때 페이저가 왔다갔다 하는걸 막아준다.
                         * @property fixedHeight 
                         * @type Boolean
                         */
                        fixedHeight : false,
                        /**
                         * 테이블 제목(접근성 준수사항)
                         * @property caption 
                         * @type String
                         */
                        caption : "",
                        /**
                         * 테이블 설명(접근성 준수사항) : 테이블의 목적과 내용을 설명
                         * @property summary 
                         * @type String
                         */
                        summary : "",
                        /**
                         * 아코디언으로 보여질때 왼쪽은 제목줄, 오른쪽은 본문줄으로 표현될때 왼쪽 제목줄의 크기를 %로 표현
                         * @property summary 
                         * @type String
                         */
                        thAccodianWidth : 40,
                        /**
                         * 테이블이 사용할 스킨 지정 
                         * defaultValue : default
                         * @property summary
                         * @type String
                         */
                        skin : "efsd01",
                        /**
                         * 
                         * pager 페이저 연동속성 {devonRowSize:"5", totalRowSize: "22", curPage: "1", rows:"rows" }
                         * Pager 속성 참조
                         * {
                         *      devonRowSize : 페이지당 레코드 수
                         *      totalRowSize : 전체 리스트수
                         *      curPage : 현재 페이지 번호
                         *      rows : 테이블에 표현할 내용 리스트
                         * }
                         * @property pager
                         * @type Object
                         */
                        pager : null,
                        /**
                         * 멀티컬럼 생성(2라고 설정하면 2개의 헤더와 2개의 데이터컬럼이 생성)
                         * defaultValue : 1 
                         * @property multiLength
                         * @type Integer
                         */
                        multiLength : 1,
                        /**
                         * 테이블 컨텐츠 제목 목록
                         * @property colNames
                         * @type Array
                         */
                        colNames : [],
                        /**
                         * 테이블 내용 속성
                         *    {
                         *       id : 컬럼의 식별자 (DOM 식별자)
                         *       width : 컬럼 너비
                         *       key :  키 컬럼 ( 스마트폰일때는 아코디언 타이틀이 된다.)
                         *       align : 데이터의 정렬속성(left, center, right)
                         *       className : 
                         *       onclick : 컬럼의 데이터를 클릭했을때 이벤트 처리
                         *                 onclick( 셀 데이타, 행번호, 열번호, 셀ID, 테이블전체데이터 )
                         *       style : 셀에 Inner Style 지정
                         *       formatter : 그리드에 표현할 데이터의 포맷터 지정
                         *                   기본 포맷터 사용방법 : 포맷터 옵션만 설정한다. {mask : "date", option : "*"}
                         *                   외부 포맷터나 사용자 커스텀포맷터 사용방법 :formatterFunction(originadataSet){return conveterData;} 
                         *       renderer : data를 테이블에 표현할때 특정한 포맷에 맞춰 나타내거나 html태그를 추가 할 수 있게 해준다. 
                         *                  renderer(출력될 행 데이터들 , 행번호, 열번호)
                         *       sortable : 셀의 데이터 정렬 (true, false)
                         *       editable : 수정가능 여부 (CRUD 그리드 옵션 현버전은 미지원 파라메터)
                         *       control : radio, checkbox, CRUDFlag, button등 을 그려주는 컨트롤
                         *       {type:"checkbox", title:"선택", label:"", eventHandler: controlHandle }
                         *       {type:"CRUDFlag"}
                         *       {type:"button",  title:"송금", dialog {} }
                         *       {type:"actionButtons",  actions : [ "editMode", "save", "cancel", "addFirstRow", "addLastRow", "moveUpCursor", "moveDownCursor", "changeCursor", "moveUpRow", "moveDownRow", "resetRow", "resetAll", "removeRow" ] }
                         *       editor : 입력 가능 필드 여부를 지정
                         *       {type : select}
                         *                  
                         *       //<td class="cellText-Center " headers="NEW_DATE"><input type="radio" id="radio1" /><label for="radio1">2011-03-01</label></td>
                         *       //<input type="radio" id="radio1" title="선택" />
                         *    }
                         * @property colModel
                         * @type Array
                         */
                        colModel : [],
                        /**
                         * 입력데이터 (json Object나 혹은 json Object를 리턴하는 함수를 입력 받을수 있다.)
                         * @property data
                         * @type Array
                         */
                        data : null,
                        /**
                         * 테이블이 형성될 동안 blocking처리하고 Progress를 보여줄지 안 보여줄지 여부
                         * @property block
                         * @type Boolean
                         */
                        block : false,

                        // 내부에서 사용하는
                        // Properties==============================================
                        // 멀티헤더일때 rowspan정보등을 저장
                        rowSpanInfo : [],
                        // 키 인덱스의 배열값을 저장
                        keyIndex : false,
                        /**
                         * 컴포넌트가 렌더링 되기 전처리 핸들러
                         * renderPreHandler(table, data, prop) 
                         * @type function
                         */
                        renderPreHandler : null,
                        /**
                         * 컴포넌트가 렌더링 된 후처리 핸들러
                         * renderPreHandler(table, data, prop)  
                         * @property renderPostHandler
                         * @type function
                         */
                        renderPostHandler : null,
                        /**
                         * 삭제된 데이터를 보여줄 것인지 여부
                         * @property fixedHeight 
                         * @type Boolean
                         */
                        hideDeleteRows : false,
                        /**
                         * Table 생성시 초기화 핸들러
                         * initHandler(table, data, prop, records)
                         * @property initHandler
                         * @type function
                         */
                        initHandler : null,
                        /**
                         * 테이블의 DataSet에 맵핑될 Paging 정보 ColumnName
                         * @property pageColumnNames 
                         * @type Object
                         */
                        pageColumnNames : {
                            totalRowSize : "totalRowSize", // 전체 리스트수
                            curPage : "curPage", // 페이지 로딩시 현재 페이지
                            devonRowSize : "devonRowSize", // 페이지당 레코드 수
                            devonTargetRow : "devonTargetRow", // 데이터의 페이지 조회시 시작점이 될 첫 레코드 Target
                            rows : "rows" // 데이터 레코드 집합                   
                        }
                    }
                },
                "AppendTable" : {
                    "i18n" : "jquery.sui.AppendTable.locale-{lang}.js",
                    "name" : "jquery.sui.AppendTable_min.js",
                    "defaultOption" : {
                        /**
                         * 테이블 전체 너비 지정
                         * @property width 
                         * @type Integer
                         **/
                        width : 100,
                        /**
                         * 전체너비를 %로 표현할지 px로 표현할지 여부
                         * @property unit 
                         * @type String
                         **/
                        unit : '%',
                        /**
                         * 테이블 제목(접근성 준수사항)
                         * @property caption 
                         * @type String
                         */
                        caption : "",
                        /**
                         * 테이블 설명(접근성 준수사항) : 테이블의 목적과 내용을 설명
                         * @property summary 
                         * @type String
                         */
                        summary : "",
                        /**
                         * 테이블이 사용할 스킨 지정 
                         * defaultValue : default
                         * @property summary
                         * @type String
                         */
                        skin : "default",
                        /**
                         * 멀티컬럼 생성(2라고 설정하면 2개의 헤더와 2개의 데이터컬럼이 생성)
                         * defaultValue : 1 
                         * @property multiLength
                         * @type Integer
                         */
                        multiLength : 1,
                        /**
                         * 테이블 컨텐츠 제목 목록
                         * @property colNames
                         * @type Array
                         */
                        colNames : [],
                        /**
                         * 테이블 내용 속성
                         *    {
                         *       id : 컬럼의 식별자 (DOM 식별자)
                         *       width : 컬럼 너비
                         *       align : 데이터의 정렬속성(left, center, right)
                         *       className : td에 임의의 클래스 추가
                         *       onclick : 컬럼의 데이터를 클릭했을때 이벤트 처리
                         *                 onclick(행 데이타, 전체 행 데이타, 행 인덱스, Table Div, Table Object, Table Tbody, Table option)
                         *       formatter : 그리드에 표현할 데이터의 포맷터 지정
                         *                   기본 포맷터 사용방법 : 포맷터 옵션만 설정한다. {mask : "date", option : "*"}
                         *                   외부 포맷터나 사용자 커스텀포맷터 사용방법 :formatterFunction(originadataSet){return conveterData;} 
                         *       renderer : data를 테이블에 표현할때 특정한 포맷에 맞춰 나타내거나 html태그를 추가 할 수 있게 해준다. 
                         *                  renderer(출력될 행 데이터들 , 행번호, 열번호)
                         *    }
                         * @property colModel
                         * @type Array
                         */
                        colModel : [],
                        /**
                         * 테이블 생성시, row를 생성하기 위한 데이터로써 배열 형식이나 데이터를 받아올 수 있는 함수를 지정
                         * @property data
                         * @type function
                         */
                        data : null,
                        /**
                         * 추가 입력 데이타를 입력받기 위한 함수 지정
                         * @property appendHandler
                         * @type function
                         */
                        appendHandler : null,
                        /**
                         * 자동 스크롤 더보기 기능 사용 여부
                         * @property addRowsByScroll
                         * @type boolean
                         */
                        addRowsByScroll : false,
                        /**
                         * 자동 컬럼 개수 조절 기능 사용 여부
                         * @property autoColSkip
                         * @type boolean
                         */
                        autoColSkip : false,
                        /**
                         * 컬럼 실시간 숨김/표시 기능 설정
                         * @property colControl
                         * @type boolean
                         */
                        colControl : false,
                        /**
                         * autoColSkip 기능 설정 시, 표시할 컬럼의 우선 순위를 배열 형식으로 지정
                         * @property importanceIdx
                         * @type array
                         */
                        importanceIdx : false
                    }
                },
                "Hnav" : {
                    "i18n" : "jquery.sui.Hnav.locale-{lang}.js",
                    "name" : "jquery.sui.Hnav_min.js",
                    "defaultOption" : {
                        deepLevel : null,
                        skin : "default",
                        navHandler : null,
                        data : {//네비게이션을 마크업으로 구성할 Data 정보
                            source : null, //Json 형식의 소스 Data
                            hierarchy : true, //데이터소스 구조가 계층구조인지 여부
                            rootLevel : 1
                        //데이터의 루트 레벨
                        },
                        /**
                         * 메뉴 오픈 효과(slideDown) 지정, 아래와 같이 설정
                         * showEffect {duration : 지속 시간}
                         *
                         * defaultValue : {}
                         * @property showEffect
                         * @type object
                         */
                        showEffect : {},
                        /**
                         * 메뉴 숨김 효과 지정(slideUp) 지정, 아래와 같이 설정
                         * hideEffect {duration : 지속 시간}
                         * defaultValue : {}
                         * @property hideEffect
                         * @type object
                         */
                        hideEffect : {},
                        /**
                         * 이전 메뉴 이동 효과 지정, jquery ui effect 옵션 참고
                         *
                         * defaultValue : {
                         *   effect : "drop",
                         *   options : {
                         *       direction : "right",
                         *       distance : 100
                         *   }
                         * }
                         * @property leftMoveEffect
                         * @type object
                         */
                        leftMoveEffect : {
                            effect : "drop",
                            options : {
                                direction : "right",
                                distance : 100
                            }
                        },
                        /**
                         * 다음 메뉴 이동 효과 지정, jquery ui effect 옵션 참고
                         *  {
                         *   effect : "drop",
                         *   options : {
                         *       direction : "left",
                         *       distance : 100
                         *   }
                         * @property rightMoveEffect
                         * @type object
                         */
                        rightMoveEffect : {
                            effect : "drop",
                            options : {
                                direction : "left",
                                distance : 100
                            }
                        },
                        /**
                         * 상위 메뉴 이동 효과 지정, jquery ui effect 옵션 참고
                         *  {
                         *   effect : "drop",
                         *   options : {
                         *       direction : "up",
                         *       distance : 100
                         *   }
                         * @property topMoveEffect
                         * @type object
                         */
                        topMoveEffect : {
                            effect : "drop",
                            options : {
                                direction : "down",
                                distance : 100
                            }
                        },
                        /**
                         * 하위 메뉴 이동 효과 지정, jquery ui effect 옵션 참고
                         *  {
                         *   effect : "fade"
                         *   }
                         * @property topMoveEffect
                         * @type object
                         */
                        lowMenuMoveEffect : {
                            effect : "fade"
                        },
                        /**
                         * 컴포넌트 생성 효과 지정, jquery ui effect 옵션 참고
                         *
                         * defaultValue : {
                         *   effect : "slideDown"
                         *    }
                         * @property initEffect
                         * @type object
                         */
                        initEffect : {
                            effect : "slideDown"
                        },
                        /**
                         * 메뉴데이터를 구성할 데이터 맵핑 정보
                         * defaultValue : 'level : "menuLevel",
                                                     menuId : "menuId",
                                                     upperId : "upprMenuId",
                                                     linkUrl : "linkUrl",
                                                     order : "menuOrd",
                                                     menuNm : "menuNm",
                                                     lowMenus : "lowMenus",
                                                     menuClass : "menuClass",
                                                     addAttr : "addAttr"
                         * @property level
                         * @type String
                         * @property menuId
                         * @type String
                         * @property upperId
                         * @type String
                         * @property linkUrl
                         * @type String
                         * @property order
                         * @type String
                         * @property menuNm
                         * @type String
                         * @property lowMenus
                         * @type String
                         * @property menuClass
                         * @type String
                         * @property addAttr
                         * @type String
                         */
                        columnNames : {
                            level : "menuLevel", // 메뉴 LEVEL
                            menuId : "menuId", // 메뉴식별자
                            upperId : "upprMenuId", // 상위메뉴식별자
                            linkUrl : "linkUrl", // 메뉴클릭시 수행할 URL
                            order : "menuOrd", // 동일레벨에서의 메뉴 순서
                            menuNm : "menuNm", // 메뉴명칭
                            lowMenus : "lowMenus", // 하위메뉴 데이터
                            menuClass : "menuClass", // 메뉴 <a>의 부여할 Class 명
                            addAttr : "addAttr" // <a> 의 attribute 추가시에 사용
                        },
                        /**
                         * Hnav 초기화 된 후의 실행 함수 지정 핸들러
                         * initHandler(hnav, RootUl, menuList, prop);
                         * defaultValue : null
                         * @property initHandler
                         * @type Function
                         */
                        initHandler : null
                    }
                },
                "Vnav" : {
                    "i18n" : "jquery.sui.Vnav.locale-{lang}.js",
                    "name" : "jquery.sui.Vnav_min.js",
                    "defaultOption" : {
                        title : "",
                        defaultFocus : null,
                        navHandler : null,
                        skin : "default",
                        data : {
                            source : null,
                            hierarchy : true,
                            rootLevel : 1
                        },
                        /**
                         * 메뉴 토글 기능 사용 여부 & 메뉴클릭시 Toggle처리
                         *
                         * defaultValue : { useYn : false , clickMenuClose : false , showEffect, hideEffect}
                         * @property toggle
                         * @type String
                         */
                        toggle : {
                            PC : false,
                            SM : {
                                /**
                                 * 해당 메뉴 클릭 시, 전체 메뉴 닫힘 여부
                                 *
                                 * defaultValue : true
                                 * @property clickMenuClose
                                 * @type Boolean
                                 */
                                clickMenuClose : true,
                                /**
                                 * toggle 메뉴  클릭 시, 전체 메뉴 나타나는 효과 지정
                                 * @property hideEffect
                                 * @type Object
                                 **/
                                showEffect : {
                                    effect : 'slide',
                                    options : {
                                        direction : 'left'
                                    }
                                },
                                /**
                                 * toggle 메뉴  클릭 시, 전체 메뉴 사라지는 효과 지정
                                 * @property hideEffect
                                 * @type Object
                                 **/
                                hideEffect : {
                                    effect : 'slide',
                                    options : {
                                        direction : 'left'
                                    }
                                }
                            },
                            TP : {
                                /**
                                 * 해당 메뉴 클릭 시, 전체 메뉴 닫힘 여부
                                 *
                                 * defaultValue : true
                                 * @property clickMenuClose
                                 * @type Boolean
                                 */
                                clickMenuClose : true,
                                /**
                                 * toggle 메뉴  클릭 시, 전체 메뉴 나타나는 효과 지정
                                 * @property hideEffect
                                 * @type Object
                                 **/
                                showEffect : {
                                    effect : 'slide',
                                    options : {
                                        direction : 'left'
                                    }
                                },
                                /**
                                 * toggle 메뉴  클릭 시, 전체 메뉴 사라지는 효과 지정
                                 * @property hideEffect
                                 * @type Object
                                 **/
                                hideEffect : {
                                    effect : 'slide',
                                    options : {
                                        direction : 'left'
                                    }
                                }
                            }
                        },
                        /**
                         * VNav 초기화시 VNav의 Contents Animation 효과 설정 사용안하는경우에는 false를 사용
                         * @property initEffect
                         * @type Object
                         **/
                        initEffect : {
                            PC : {
                                effect : 'slideDown',
                                duration : 500
                            },
                            SM : false,
                            TP : false
                        },
                        /**
                         * 메뉴데이터를 구성할 데이터 맵핑 정보
                         * defaultValue : 'level : "menuLevel",
                                                     menuId : "menuId",
                                                     upperId : "upprMenuId",
                                                     linkUrl : "linkUrl",
                                                     order : "menuOrd",
                                                     menuNm : "menuNm",
                                                     lowMenus : "lowMenus",
                                                     menuClass : "menuClass",
                                                     addAttr : "addAttr"
                         * @property level
                         * @type String
                         * @property menuId
                         * @type String
                         * @property upperId
                         * @type String
                         * @property linkUrl
                         * @type String
                         * @property order
                         * @type String
                         * @property menuNm
                         * @type String
                         * @property lowMenus
                         * @type String
                         * @property menuClass
                         * @type String
                         * @property addAttr
                         * @type String
                         */
                        columnNames : {
                            level : "menuLevel", // 메뉴 LEVEL
                            menuId : "menuId", // 메뉴식별자
                            upperId : "upprMenuId", // 상위메뉴식별자
                            linkUrl : "linkUrl", // 메뉴클릭시 수행할 URL
                            order : "menuOrd", // 동일레벨에서의 메뉴 순서
                            menuNm : "menuNm", // 메뉴명칭
                            lowMenus : "lowMenus", // 하위메뉴 데이터
                            menuClass : "menuClass", // 메뉴 <a>의 부여할 Class 명
                            addAttr : "addAttr" // <a> 의 attribute 추가시에 사용
                        },
                        /**
                         * Vnav 초기화 된 후의 실행 함수 지정 핸들러
                         * initHandler(vnav);
                         * defaultValue : null
                         * @property initHandler
                         * @type Function
                         */
                        initHandler : null
                    }
                },
                "HeaderBar" : {
                    "i18n" : "jquery.sui.HeaderBar.locale-{lang}.js",
                    "name" : "jquery.sui.HeaderBar_min.js",
                    "defaultOption" : {
                        /**
                         * Header가 사용할 스킨 지정 
                         * defaultValue : default
                         * @property skin
                         * @type String
                         */
                        skin : 'default',
                        /**
                         * HeaderBar의 위치를 고정시킬 것인지 여부 지정 
                         * defaultValue : true
                         * @property fixed
                         * @type Boolean
                         */
                        fixed : true,
                        /**
                         * HeaderBar의 z-index 지정 
                         * defaultValue : 100001
                         * @property zIndex
                         * @type Integer
                         */
                        zIndex : 100001,
                        /**
                         * HeaderBar의 left 내용 속성 
                         * 	{
                         * 		url : left 영역 클릭 시 수행할 href 속성
                         * 		content : 생성한 기본 좌측영역을 대체할 HTML 마크업
                         * 		clickHandler : headerBar-left 영역 클릭 시 수행 함수
                         * 	}
                         * defaultValue : null
                         * @property left
                         * @type Object
                         */
                        left : null,
                        /**
                         * HeaderBar의 center 내용 속성 
                         * 	{
                         * 		url : center 영역 클릭 시 수행할 href 속성
                         * 		content : 생성한 기본 center 영역을 대체할 HTML 마크업
                         * 		clickHandler : headerBar-center 영역 클릭 시 수행 함수
                         * 	}
                         * defaultValue : null
                         * @property center
                         * @type Object
                         */
                        center : null,
                        /**
                         * HeaderBar의 right 내용 속성 
                         * 	{
                         * 		url : right 영역 클릭 시 수행할 href 속성
                         * 		content : 생성한 기본 우측영역을 대체할 HTML 마크업
                         * 		clickHandler : headerBar-right 영역 클릭 시 수행 함수
                         * 	}
                         * defaultValue : null
                         * @property right
                         * @type Object
                         */
                        right : null
                    }
                },
                "FooterBar" : {
                    "i18n" : "jquery.sui.FooterBar.locale-{lang}.js",
                    "name" : "jquery.sui.FooterBar_min.js",
                    "defaultOption" : {
                        /**
                         * footerBar가 사용할 스킨 지정 
                         * defaultValue : default
                         * @property skin
                         * @type String
                         */
                        skin : 'default',
                        /**
                         * footerBar가 위치를 고정시킬 것인지 여부 지정 
                         * defaultValue : true
                         * @property fixed
                         * @type Boolean
                         */
                        fixed : true,
                        /**
                         * footerBar가 z-index 지정 
                         * defaultValue : 100001
                         * @property zIndex
                         * @type Integer
                         */
                        zIndex : 100001,
                        /**
                         * footerBar에 위치할 button 목록
                         * defaultValue : null
                         * @property buttons
                         * @type Array
                         */
                        buttons : null
                    }
                },
                "TimePicker" : {
                    "i18n" : "jquery.sui.TimePicker.locale-{lang}.js",
                    "name" : "jquery.sui.TimePicker_min.js",
                    "defaultOption" : {
                        /**
                         * TimePicker에 사용할 스킨 지정 
                         * defaultValue : "default"
                         * @property skin
                         * @type String
                         */
                        skin : "default",
                        /**
                         * TimePicker 표시할때 trigger 
                         * 속성구분 : {both, self, button}
                         * defaultValue : "both"
                         * @property showOn
                         * @type String
                         */
                        showOn : "button",
                        /**
                         * 기본적으로 선택될 시간 
                         * defaultValue : null
                         * @property defaultTime
                         * @type String
                         */
                        defaultTime : null,
                        /**
                         * 시간 표시 포맷
                         * defaultValue : "hh:mm:ss TT"
                         * @property timeFormat
                         * @type String
                         */
                        timeFormat : "hh:mm:ss TT",
                        /**
                         * 시간을 선택했을때 실행될 Handler
                         * defaultValue : null
                         * @property onSelect
                         * @type Function
                         */
                        onSelect : null,
                        /**
                         * 시간 선택시 선택된 시간을 적용할 element기술
                         * defaultValue : null
                         * @property altField
                         * @type String
                         */
                        altField : null,
                        /**
                         * 인라인 TimePicker를 제외하고 하나의 TimePicker만 노출할 것인지 여부를 기술
                         * defaultValue : true
                         * @property onlyOneShow
                         * @type Boolean
                         */
                        onlyOneShow : true,
                        /**
                         * 시간 가속도 설정
                         * (예를 들어 defaultValue의 경우, 값이 0.5초마다 1씩 증가하며 3배수 때마다 1.5배로 msec가 0.1초가 될 때까지 그 값이 증가하는 시간(msec)이 빨라진다.) 
                         * defaultValue : {increment : 1, msec : 500, minMsec : 100, accCount : 3, accMultiple : 1.5}
                        *					hourSet buttons 내용 속성
                        *					{
                        *						increment : 값이 증가하는 크기
                        *						msec : 값이 증가하는 시간(밀리 세컨드)
                        *						minMsec : msec의 최소 시간(밀리 세컨드)
                        *						accCount : msec가 줄어들때 걸리는 증가 횟수
                        *						accMultiple : msec가 줄어드는 배수
                        *					}
                         * @property hourSet
                         * @type Objeck
                         */
                        hourSet : {
                            increment : 1,
                            msec : 500,
                            minMsec : 100,
                            accCount : 3,
                            accMultiple : 1.5
                        },
                        /**
                         * 분 가속도 설정
                         * (예를 들어 defaultValue의 경우, 값이 0.5초마다 1씩 증가하며 3배수 때마다 1.5배로 msec가 0.1초가 될 때까지 그 값이 증가하는 시간(msec)이 빨라진다.) 
                         * defaultValue : {increment : 1, msec : 500, minMsec : 100, accCount : 3, accMultiple : 1.5}
                        *					minuteSet buttons 내용 속성
                        *					{
                        *						increment : 값이 증가하는 크기
                        *						msec : 값이 증가하는 시간(밀리 세컨드)
                        *						minMsec : msec의 최소 시간(밀리 세컨드)
                        *						accCount : msec가 줄어들때 걸리는 증가 횟수
                        *						accMultiple : msec가 줄어드는 배수
                        *					}
                         * @property minuteSet
                         * @type Objeck
                         */
                        minuteSet : {
                            increment : 1,
                            msec : 500,
                            minMsec : 100,
                            accCount : 3,
                            accMultiple : 1.5
                        },
                        /**
                         * 초 가속도 설정
                         * (예를 들어 defaultValue의 경우, 값이 0.5초마다 1씩 증가하며 3배수 때마다 1.5배로 msec가 0.1초가 될 때까지 그 값이 증가하는 시간(msec)이 빨라진다.) 
                         * defaultValue : {increment : 1, msec : 500, minMsec : 100, accCount : 3, accMultiple : 1.5}
                        *					secondSet buttons 내용 속성
                        *					{
                        *						increment : 값이 증가하는 크기
                        *						msec : 값이 증가하는 시간(밀리 세컨드)
                        *						minMsec : msec의 최소 시간(밀리 세컨드)
                        *						accCount : msec가 줄어들때 걸리는 증가 횟수
                        *						accMultiple : msec가 줄어드는 배수
                        *					}
                         * @property secondSet
                         * @type Objeck
                         */
                        secondSet : {
                            increment : 1,
                            msec : 500,
                            minMsec : 100,
                            accCount : 3,
                            accMultiple : 1.5
                        },
                        /**
                         * 대체 오픈 버튼을 등록
                         * altOpenBtn의 값 유형 
                         * defaultValue : null
                         * @property altOpenBtn
                         * @type Object
                         */
                        altOpenBtn : null,
                        /**
                         * 대체 닫기 버튼을 등록
                         * defaultValue : null
                         * @property altCloseBtn
                         * @type Object
                         */
                        altCloseBtn : null,
                        /**
                         * 닫기 기능 대신에 PopupLayer를 제외한 영역 클릭 시 팝업이 닫힌는 기능 활성 여부
                         * defaultValue : false
                         * @property altClose
                         * @type Boolean
                         */
                        altClose : false,
                        /**
                         * 팝업 형식 결정 (false 일반형식으로 띄운다, true 모달형식으로 띄운다.), fullScreen일때는 지원안함
                         * defaultValue : false
                         * @property doModal
                         * @type Boolean
                         */
                        doModal : false,
                        /**
                         * 새창을 띄울 왼쪽좌표 (새창의 위치가 클릭한 곳 기준으로 몇px 왼쪽으로 보여줄지 설정)
                         * defaultValue : 0
                         * @property top
                         * @type Integer
                         */
                        left : 0,
                        /**
                         * 새창을 띄울 위쪽좌표 (새창의 위치가 클릭한 곳 기준으로 몇px 위로 보여줄지 설정)
                         * defaultValue : 0
                         * @property top
                         * @type Integer
                         */
                        top : 0,
                        /**
                        * 컴포넌트의 z-index 설정
                        * defaultValue : 100001
                        * @property zIndex
                        * @type Integer
                        */
                        zIndex : 100001,
                        /**
                         * Position 속성이 "click" 혹은 "magnet:버튼옆에" 일 경우, 오픈 버튼 기준으로 왼쪽 혹은 오른쪽으로 팝업 오픈
                         * defaultValue : right
                         * @property showDirection
                         * @type String
                         */
                        showDirection : "right",
                        /**
                         * 팝업이 초기화 된 후의 실행 함수 지정 핸들러
                         * initHandler(content, overlay) 
                         * defaultValue : null
                         * @property initHandler
                         * @type Function
                         */
                        initHandler : null,
                        /**
                         * 팝업이 열리기 전에 전처리 핸들러
                         * openPreHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property openPreHandler
                         * @type Function
                         */
                        openPreHandler : null,
                        /**
                         * 팝업이 열리기 후에 후처리 핸들러
                         * openPostHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property openPostHandler
                         * @type Function
                         */
                        openPostHandler : null,
                        /**
                         * 팝업이 닫히기 전에 전처리 핸들러
                         * closePreHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property closePreHandler
                         * @type Function
                         */
                        closePreHandler : null,
                        /**
                         * 팝업이 닫힌 후에 후처리 핸들러
                         * closePostHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property closePostHandler
                         * @type Function
                         */
                        closePostHandler : null,
                        /**
                         * 팝업 생성시 body하위로 마크업 생성 여부
                         * (true이면 body태그 최하단에 위치, false이면 버튼(대상) 태그 다음에 위치)
                         * defaultValue : false
                         * @property bodyAppend
                         * @type Boolean
                         */
                        bodyAppend : true,
                        /**
                         * 팝업 띄울 위치
                         * (
                         *    magnet : 버튼옆에 띄움, 
                         *    click : 클릭한 곳기준 플로팅, 
                         *    center : 화면중앙 플로팅, 
                         *    fullScreen : 화면을 꽉 채운 스타일로 플로팅
                         *    fullScreenW : 가로화면을 꽉 채운 스타일로 플로팅
                         *    fullScreenH : 세로화면을 꽉 채운 스타일로 플로팅 
                         * )
                         * defaultValue : "click"
                         * @property position
                         * @type String
                         */
                        position : {
                            PC : "click",
                            SM : "fullScreenW",
                            TP : "click"
                        },
                        /**
                         * 달력 오픈 버튼 텍스트
                         * defaultValue : ""
                         * @property openText
                         * @type String
                         */
                        openText : null,
                        /**
                         * 달력 오픈 버튼 타이틀
                         * defaultValue : ""
                         * @property openTitle
                         * @type String
                         */
                        openTitle : null,
                        /**
                         * 팝업을 닫을 키코드를 설정한다.
                         * defaultValue : 27
                         * @property closeKeyCode
                         * @type Number
                         */
                        closeKeyCode : 27,
                        /**
                         * Page Number 클릭 시, 이전 페이지 사라지는 효과 지정
                         * @property hideEffect
                         * @type Object
                         **/
                        hideEffect : {
                            effect : "fade"
                        },
                        /**
                         * Page Number 클릭 시, 클릭한 페이지 나타나는 효과 지정
                         * @property hideEffect
                         * @type Object
                         **/
                        showEffect : {
                            effect : "fade"
                        }
                    }
                },
                "DatePicker" : {
                    "i18n" : "jquery.sui.DatePicker.locale-{lang}.js",
                    "name" : "jquery.sui.DatePicker_min.js",
                    "defaultOption" : {
                        /**
                         * DatePicker에 사용할 스킨 지정 
                         * defaultValue : "default"
                         * @property skin
                         * @type String
                         */
                        skin : "default",
                        /**
                         * DatePicker 표시할때 trigger 
                         * 속성구분 : {both, self, button}
                         * defaultValue : "both"
                         * @property showOn
                         * @type String
                         */
                        showOn : "button",
                        /**
                         * 기본적으로 선택될 날짜 
                         * defaultValue : null
                         * @property defaultDate
                         * @type String
                         */
                        defaultDate : null,
                        /**
                         * 날짜 표시 포맷
                         * defaultValue : "yy-mm-dd"
                         * @property dateFormat
                         * @type String
                         */
                        dateFormat : "yy-mm-dd",
                        /**
                         * 날짜를 선택했을때 실행될 Handler
                         * defaultValue : null
                         * @property onSelect
                         * @type Function
                         */
                        onSelect : null,
                        /**
                         * 날짜 선택시 선택된 날짜를 적용할 element기술
                         * defaultValue : null
                         * @property altField
                         * @type String
                         */
                        altField : null,
                        /**
                         * 인라인 DatePicker를 제외하고 하나의 DatePicker만 노출할 것인지 여부를 기술
                         * defaultValue : true
                         * @property onlyOneShow
                         * @type Boolean
                         */
                        onlyOneShow : true,
                        /**
                         * 연도 가속도 설정
                         * (예를 들어 defaultValue의 경우, 값이 0.5초마다 1씩 증가하며 3배수 때마다 1.5배로 msec가 0.1초가 될 때까지 그 값이 증가하는 시간(msec)이 빨라진다.) 
                         * defaultValue : {msec : 500, minMsec : 100, accCount : 3, accMultiple : 1.5}
                        *					yearSet buttons 내용 속성
                        *					{
                        *						msec : 값이 증가하는 시간(밀리 세컨드)
                        *						minMsec : msec의 최소 시간(밀리 세컨드)
                        *						accCount : msec가 줄어들때 걸리는 증가 횟수
                        *						accMultiple : msec가 줄어드는 배수
                        *					}
                         * @property yearSet
                         * @type Objeck
                         */
                        yearSet : {
                            msec : 500,
                            minMsec : 100,
                            accCount : 3,
                            accMultiple : 1.5
                        },
                        /**
                         * 월 가속도 설정
                         * (예를 들어 defaultValue의 경우, 값이 0.5초마다 1씩 증가하며 3배수 때마다 1.5배로 msec가 0.1초가 될 때까지 그 값이 증가하는 시간(msec)이 빨라진다.) 
                         * defaultValue : {msec : 500, minMsec : 100, accCount : 3, accMultiple : 1.5}
                        *					monthSet buttons 내용 속성
                        *					{
                        *						msec : 값이 증가하는 시간(밀리 세컨드)
                        *						minMsec : msec의 최소 시간(밀리 세컨드)
                        *						accCount : msec가 줄어들때 걸리는 증가 횟수
                        *						accMultiple : msec가 줄어드는 배수
                        *					}
                         * @property monthSet
                         * @type Objeck
                         */
                        monthSet : {
                            msec : 500,
                            minMsec : 100,
                            accCount : 3,
                            accMultiple : 1.5
                        },
                        /**
                         * 일 가속도 설정
                         * (예를 들어 defaultValue의 경우, 값이 0.5초마다 1씩 증가하며 3배수 때마다 1.5배로 msec가 0.1초가 될 때까지 그 값이 증가하는 시간(msec)이 빨라진다.) 
                         * defaultValue : {msec : 500, minMsec : 100, accCount : 3, accMultiple : 1.5}
                        *					dateSet buttons 내용 속성
                        *					{
                        *						msec : 값이 증가하는 시간(밀리 세컨드)
                        *						minMsec : msec의 최소 시간(밀리 세컨드)
                        *						accCount : msec가 줄어들때 걸리는 증가 횟수
                        *						accMultiple : msec가 줄어드는 배수
                        *					}
                         * @property dateSet
                         * @type Objeck
                         */
                        dateSet : {
                            msec : 500,
                            minMsec : 100,
                            accCount : 3,
                            accMultiple : 1.5
                        },
                        /**
                        * 년도를 나타내는 박스를 현재 년도에서 이전, 이후로 얼마의 범위를 표시할것인지를 기술
                        * defaultValue : 'c-10:c+10'
                        * @property yearRange
                        * @type String
                        */
                        yearRange : 'c-10:c+10',
                        /**
                        * 포맷에 년도가 빠졌을 경우 일자를 표시할 때 기준이 되는 년도('c' : 현재 년도, 숫자값 : 해당 숫자에 해당하는 년도 기준) 
                        * defaultValue : 'c'
                        * @property altYear
                        * @type String or Number
                        */
                        altYear : 'c',
                        /**
                        * 포맷에 월이 빠졌을 경우 일자를 표시할 때 기준이 되는 월('c' : 현재 월, 숫자값 : 해당 숫자에 해당하는 월 기준) 
                        * defaultValue : 'c'
                        * @property altMonth
                        * @type String or Number
                        */
                        altMonth : 'c',
                        /**
                         * 대체 오픈 버튼을 등록
                         * altOpenBtn의 값 유형 
                         * defaultValue : null
                         * @property altOpenBtn
                         * @type Object
                         */
                        altOpenBtn : null,
                        /**
                         * 대체 닫기 버튼을 등록
                         * defaultValue : null
                         * @property altCloseBtn
                         * @type Object
                         */
                        altCloseBtn : null,
                        /**
                         * 닫기 기능 대신에 PopupLayer를 제외한 영역 클릭 시 팝업이 닫힌는 기능 활성 여부
                         * defaultValue : false
                         * @property altClose
                         * @type Boolean
                         */
                        altClose : false,
                        /**
                         * 팝업 형식 결정 (false 일반형식으로 띄운다, true 모달형식으로 띄운다.), fullScreen일때는 지원안함
                         * defaultValue : false
                         * @property doModal
                         * @type Boolean
                         */
                        doModal : false,
                        /**
                         * 새창을 띄울 왼쪽좌표 (새창의 위치가 클릭한 곳 기준으로 몇px 왼쪽으로 보여줄지 설정)
                         * defaultValue : 0
                         * @property top
                         * @type Integer
                         */
                        left : 0,
                        /**
                         * 새창을 띄울 위쪽좌표 (새창의 위치가 클릭한 곳 기준으로 몇px 위로 보여줄지 설정)
                         * defaultValue : 0
                         * @property top
                         * @type Integer
                         */
                        top : 0,
                        /**
                        * 컴포넌트의 z-index 설정
                        * defaultValue : 100001
                        * @property zIndex
                        * @type Integer
                        */
                        zIndex : 100001,
                        /**
                         * Position 속성이 "click" 혹은 "magnet:버튼옆에" 일 경우, 오픈 버튼 기준으로 왼쪽 혹은 오른쪽으로 팝업 오픈
                         * defaultValue : right
                         * @property showDirection
                         * @type String
                         */
                        showDirection : "right",
                        /**
                         * 팝업이 초기화 된 후의 실행 함수 지정 핸들러
                         * initHandler(content, overlay) 
                         * defaultValue : null
                         * @property initHandler
                         * @type Function
                         */
                        initHandler : null,
                        /**
                         * 팝업이 열리기 전에 전처리 핸들러
                         * openPreHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property openPreHandler
                         * @type Function
                         */
                        openPreHandler : null,
                        /**
                         * 팝업이 열리기 후에 후처리 핸들러
                         * openPostHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property openPostHandler
                         * @type Function
                         */
                        openPostHandler : null,
                        /**
                         * 팝업이 닫히기 전에 전처리 핸들러
                         * closePreHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property closePreHandler
                         * @type Function
                         */
                        closePreHandler : null,
                        /**
                         * 팝업이 닫힌 후에 후처리 핸들러
                         * closePostHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property closePostHandler
                         * @type Function
                         */
                        closePostHandler : null,
                        /**
                         * 팝업 생성시 body하위로 마크업 생성 여부
                         * (true이면 body태그 최하단에 위치, false이면 버튼(대상) 태그 다음에 위치)
                         * defaultValue : false
                         * @property bodyAppend
                         * @type Boolean
                         */
                        bodyAppend : true,
                        /**
                         * 팝업 띄울 위치
                         * (
                         *    magnet : 버튼옆에 띄움, 
                         *    click : 클릭한 곳기준 플로팅, 
                         *    center : 화면중앙 플로팅, 
                         *    fullScreen : 화면을 꽉 채운 스타일로 플로팅
                         *    fullScreenW : 가로화면을 꽉 채운 스타일로 플로팅
                         *    fullScreenH : 세로화면을 꽉 채운 스타일로 플로팅 
                         * )
                         * defaultValue : "click"
                         * @property position
                         * @type String
                         */
                        position : {
                            PC : "click",
                            SM : "fullScreenW",
                            TP : "click"
                        },
                        /**
                         * 달력 오픈 버튼 텍스트
                         * defaultValue : ""
                         * @property openText
                         * @type String
                         */
                        openText : null,
                        /**
                         * 달력 오픈 버튼 타이틀
                         * defaultValue : ""
                         * @property openTitle
                         * @type String
                         */
                        openTitle : null,
                        /**
                         * 팝업을 닫을 키코드를 설정한다.
                         * defaultValue : 27
                         * @property closeKeyCode
                         * @type Number
                         */
                        closeKeyCode : 27,
                        /**
                         * Page Number 클릭 시, 이전 페이지 사라지는 효과 지정
                         * @property hideEffect
                         * @type Object
                         **/
                        hideEffect : {
                            effect : "fade"
                        },
                        /**
                         * Page Number 클릭 시, 클릭한 페이지 나타나는 효과 지정
                         * @property hideEffect
                         * @type Object
                         **/
                        showEffect : {
                            effect : "fade"
                        }
                    }
                },
                "Joystick" : {
                    "i18n" : "jquery.sui.Joystick.locale-{lang}.js",
                    "name" : "jquery.sui.Joystick_min.js",
                    "defaultOption" : {
                        skin : 'default'
                    }
                },
                "PopupLayer" : {
                    "i18n" : "jquery.sui.PopupLayer.locale-{lang}.js",
                    "name" : "jquery.sui.PopupLayer_min.js",
                    "defaultOption" : {
                        /**
                         * PopupLayer 사용할 스킨(css class) 지정
                         * defaultValue : "default"
                         * @property skin
                         * @type String
                         */
                        skin : 'default',
                        /**
                         * popupLayer를 구성할 source
                         * defaultValue : null
                         * @property source
                         * @type Object
                         */
                        source : null,
                        /**
                         * 대체 오픈 버튼을 등록
                         * altOpenBtn의 값 유형 
                         * defaultValue : null
                         * @property altOpenBtn
                         * @type Object
                         */
                        altOpenBtn : null,
                        /**
                         * 대체 닫기 버튼을 등록
                         * defaultValue : null
                         * @property altCloseBtn
                         * @type Object
                         */
                        altCloseBtn : null,
                        /**
                         * 닫기 기능 대신에 PopupLayer를 제외한 영역 클릭 시 팝업이 닫힌는 기능 활성 여부
                         * defaultValue : false
                         * @property altClose
                         * @type Boolean
                         */
                        altClose : false,
                        /**
                         * 팝업 형식 결정 (false 일반형식으로 띄운다, true 모달형식으로 띄운다.), fullScreen일때는 지원안함
                         * defaultValue : false
                         * @property doModal
                         * @type Boolean
                         */
                        doModal : false,
                        /**
                         * 하나의 팝업만 노출할 것인지 여부
                         * defaultValue : true
                         * @property onlyOneShow
                         * @type Boolean
                         */
                        onlyOneShow : true,
                        /**
                         * 새창을 띄울 왼쪽좌표 (새창의 위치가 클릭한 곳 기준으로 몇px 왼쪽으로 보여줄지 설정)
                         * defaultValue : 0
                         * @property top
                         * @type Integer
                         */
                        left : 0,
                        /**
                         * 새창을 띄울 위쪽좌표 (새창의 위치가 클릭한 곳 기준으로 몇px 위로 보여줄지 설정)
                         * defaultValue : 0
                         * @property top
                         * @type Integer
                         */
                        top : 0,
                        /**
                        * 컴포넌트의 z-index 설정
                        * defaultValue : 100001
                        * @property zIndex
                        * @type Integer
                        */
                        zIndex : 100001,
                        /**
                         * Position 속성이 "click" 혹은 "magnet:버튼옆에" 일 경우, 오픈 버튼 기준으로 왼쪽 혹은 오른쪽으로 팝업 오픈
                         * defaultValue : right
                         * @property showDirection
                         * @type String
                         */
                        showDirection : "right",
                        /**
                         * 팝업이 초기화 된 후의 실행 함수 지정 핸들러
                         * initHandler(content, overlay) 
                         * defaultValue : null
                         * @property initHandler
                         * @type Function
                         */
                        initHandler : null,
                        /**
                         * 팝업이 열리기 전에 전처리 핸들러
                         * openPreHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property openPreHandler
                         * @type Function
                         */
                        openPreHandler : null,
                        /**
                         * 팝업이 열리기 후에 후처리 핸들러
                         * openPostHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property openPostHandler
                         * @type Function
                         */
                        openPostHandler : null,
                        /**
                         * 팝업이 닫히기 전에 전처리 핸들러
                         * closePreHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property closePreHandler
                         * @type Function
                         */
                        closePreHandler : null,
                        /**
                         * 팝업이 닫힌 후에 후처리 핸들러
                         * closePostHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property closePostHandler
                         * @type Function
                         */
                        closePostHandler : null,
                        /**
                         * 팝업 생성시 body하위로 마크업 생성 여부
                         * (true이면 body태그 최하단에 위치, false이면 버튼(대상) 태그 다음에 위치)
                         * defaultValue : false
                         * @property bodyAppend
                         * @type Boolean
                         */
                        bodyAppend : true,
                        /**
                         * 팝업 띄울 위치
                         * (
                         *    magnet : 버튼옆에 띄움, 
                         *    click : 클릭한 곳기준 플로팅, 
                         *    center : 화면중앙 플로팅, 
                         *    fullScreen : 화면을 꽉 채운 스타일로 플로팅
                         *    fullScreenW : 가로화면을 꽉 채운 스타일로 플로팅
                         *    fullScreenH : 세로화면을 꽉 채운 스타일로 플로팅 
                         * )
                         * defaultValue : "magnet"
                         * @property position
                         * @type String
                         */
                        position : {
                            PC : "magnet",
                            SM : "fullScreen",
                            TP : "magnet"
                        },
                        /**
                         * 팝업을 닫을 키코드를 설정한다.
                         * defaultValue : 27
                         * @property closeKeyCode
                         * @type Number
                         */
                        closeKeyCode : 27,
                        /**
                         * Page Number 클릭 시, 이전 페이지 사라지는 효과 지정
                         * @property hideEffect
                         * @type Object
                         **/
                        hideEffect : {
                            effect : "fade"
                        },
                        /**
                         * Page Number 클릭 시, 클릭한 페이지 나타나는 효과 지정
                         * @property hideEffect
                         * @type Object
                         **/
                        showEffect : {
                            effect : "fade"
                        }
                    }
                },
                "SAlert" : {
                    "i18n" : "jquery.sui.SAlert.locale-{lang}.js",
                    "name" : "jquery.sui.SAlert_min.js",
                    "defaultOption" : {
                        /**
                         * PopupLayer 사용할 스킨(css class) 지정
                         * defaultValue : "default"
                         * @property skin
                         * @type String
                         */
                        skin : 'default',
                        /**
                         * 대체 오픈 버튼을 등록
                         * altOpenBtn의 값 유형 
                         * defaultValue : null
                         * @property altOpenBtn
                         * @type Object
                         */
                        altOpenBtn : null,
                        /**
                         * 대체 닫기 버튼을 등록
                         * defaultValue : null
                         * @property altCloseBtn
                         * @type Object
                         */
                        altCloseBtn : null,
                        /**
                         * 닫기 기능 대신에 PopupLayer를 제외한 영역 클릭 시 팝업이 닫힌는 기능 활성 여부
                         * defaultValue : false
                         * @property altClose
                         * @type Boolean
                         */
                        altClose : false,
                        /**
                         * 팝업 형식 결정 (false 일반형식으로 띄운다, true 모달형식으로 띄운다.), fullScreen일때는 지원안함
                         * defaultValue : false
                         * @property doModal
                         * @type Boolean
                         */
                        doModal : true,
                        /**
                         * 하나의 팝업만 노출할 것인지 여부
                         * defaultValue : true
                         * @property onlyOneShow
                         * @type Boolean
                         */
                        onlyOneShow : false,
                        /**
                         * 새창을 띄울 왼쪽좌표 (새창의 위치가 클릭한 곳 기준으로 몇px 왼쪽으로 보여줄지 설정)
                         * defaultValue : 0
                         * @property top
                         * @type Integer
                         */
                        left : 0,
                        /**
                         * 새창을 띄울 위쪽좌표 (새창의 위치가 클릭한 곳 기준으로 몇px 위로 보여줄지 설정)
                         * defaultValue : 0
                         * @property top
                         * @type Integer
                         */
                        top : 0,
                        /**
                        * 컴포넌트의 z-index 설정
                        * defaultValue : 100001
                        * @property zIndex
                        * @type Integer
                        */
                        zIndex : 100001,
                        /**
                         * Position 속성이 "click" 혹은 "magnet:버튼옆에" 일 경우, 오픈 버튼 기준으로 왼쪽 혹은 오른쪽으로 팝업 오픈
                         * defaultValue : right
                         * @property showDirection
                         * @type String
                         */
                        showDirection : "right",
                        /**
                         * 팝업이 초기화 된 후의 실행 함수 지정 핸들러
                         * initHandler(content, overlay) 
                         * defaultValue : null
                         * @property initHandler
                         * @type Function
                         */
                        initHandler : null,
                        /**
                         * 팝업이 열리기 전에 전처리 핸들러
                         * openPreHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property openPreHandler
                         * @type Function
                         */
                        openPreHandler : null,
                        /**
                         * 팝업이 열리기 후에 후처리 핸들러
                         * openPostHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property openPostHandler
                         * @type Function
                         */
                        openPostHandler : null,
                        /**
                         * 팝업이 닫히기 전에 전처리 핸들러
                         * closePreHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property closePreHandler
                         * @type Function
                         */
                        closePreHandler : null,
                        /**
                         * 팝업이 닫힌 후에 후처리 핸들러
                         * closePostHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property closePostHandler
                         * @type Function
                         */
                        closePostHandler : null,
                        /**
                         * 팝업 생성시 body하위로 마크업 생성 여부
                         * (true이면 body태그 최하단에 위치, false이면 버튼(대상) 태그 다음에 위치)
                         * defaultValue : false
                         * @property bodyAppend
                         * @type Boolean
                         */
                        bodyAppend : true,
                        /**
                         * SAlert의 확인버튼 명칭
                         * defaultValue : ''
                         * @property okBtnName
                         * @type String
                         */
                        okBtnName : null,
                        /**
                         * SAlert의 확인버튼 Title
                         * defaultValue : ''
                         * @property okBtnTitle
                         * @type String
                         */
                        okBtnTitle : null,
                        /**
                         * 팝업 띄울 위치
                         * ( 
                         *    center : 화면중앙 플로팅, 
                         * )
                         * defaultValue : "center"
                         * @property position
                         * @type String
                         */
                        position : "center",
                        /**
                         * 팝업을 닫을 키코드를 설정한다.
                         * defaultValue : 27
                         * @property closeKeyCode
                         * @type Number
                         */
                        closeKeyCode : 27,
                        /**
                         * Page Number 클릭 시, 이전 페이지 사라지는 효과 지정
                         * @property hideEffect
                         * @type Object
                         **/
                        hideEffect : {
                            effect : "fade"
                        },
                        /**
                         * Page Number 클릭 시, 클릭한 페이지 나타나는 효과 지정
                         * @property hideEffect
                         * @type Object
                         **/
                        showEffect : {
                            effect : "fade"
                        }
                    }
                },
                "SConfirm" : {
                    "i18n" : "jquery.sui.SConfirm.locale-{lang}.js",
                    "name" : "jquery.sui.SConfirm_min.js",
                    "defaultOption" : {
                        /**
                         * PopupLayer 사용할 스킨(css class) 지정
                         * defaultValue : "default"
                         * @property skin
                         * @type String
                         */
                        skin : 'default',
                        /**
                         * popupLayer를 구성할 source
                         * defaultValue : null
                         * @property source
                         * @type Object
                         */
                        source : null,
                        /**
                         * 대체 오픈 버튼을 등록
                         * altOpenBtn의 값 유형 
                         * defaultValue : null
                         * @property altOpenBtn
                         * @type Object
                         */
                        altOpenBtn : null,
                        /**
                         * 대체 닫기 버튼을 등록
                         * defaultValue : null
                         * @property altCloseBtn
                         * @type Object
                         */
                        altCloseBtn : null,
                        /**
                         * 닫기 기능 대신에 PopupLayer를 제외한 영역 클릭 시 팝업이 닫힌는 기능 활성 여부
                         * defaultValue : false
                         * @property altClose
                         * @type Boolean
                         */
                        altClose : false,
                        /**
                         * 팝업 형식 결정 (false 일반형식으로 띄운다, true 모달형식으로 띄운다.), fullScreen일때는 지원안함
                         * defaultValue : false
                         * @property doModal
                         * @type Boolean
                         */
                        doModal : true,
                        /**
                         * 하나의 팝업만 노출할 것인지 여부
                         * defaultValue : true
                         * @property onlyOneShow
                         * @type Boolean
                         */
                        onlyOneShow : false,
                        /**
                         * 새창을 띄울 왼쪽좌표 (새창의 위치가 클릭한 곳 기준으로 몇px 왼쪽으로 보여줄지 설정)
                         * defaultValue : 0
                         * @property top
                         * @type Integer
                         */
                        left : 0,
                        /**
                         * 새창을 띄울 위쪽좌표 (새창의 위치가 클릭한 곳 기준으로 몇px 위로 보여줄지 설정)
                         * defaultValue : 0
                         * @property top
                         * @type Integer
                         */
                        top : 0,
                        /**
                        * 컴포넌트의 z-index 설정
                        * defaultValue : 100001
                        * @property zIndex
                        * @type Integer
                        */
                        zIndex : 100001,
                        /**
                         * Position 속성이 "click" 혹은 "magnet:버튼옆에" 일 경우, 오픈 버튼 기준으로 왼쪽 혹은 오른쪽으로 팝업 오픈
                         * defaultValue : right
                         * @property showDirection
                         * @type String
                         */
                        showDirection : "right",
                        /**
                         * 팝업이 초기화 된 후의 실행 함수 지정 핸들러
                         * initHandler(content, overlay) 
                         * defaultValue : null
                         * @property initHandler
                         * @type Function
                         */
                        initHandler : null,
                        /**
                         * 팝업이 열리기 전에 전처리 핸들러
                         * openPreHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property openPreHandler
                         * @type Function
                         */
                        openPreHandler : null,
                        /**
                         * 팝업이 열리기 후에 후처리 핸들러
                         * openPostHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property openPostHandler
                         * @type Function
                         */
                        openPostHandler : null,
                        /**
                         * 팝업이 닫히기 전에 전처리 핸들러
                         * closePreHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property closePreHandler
                         * @type Function
                         */
                        closePreHandler : null,
                        /**
                         * 팝업이 닫힌 후에 후처리 핸들러
                         * closePostHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property closePostHandler
                         * @type Function
                         */
                        closePostHandler : null,
                        /**
                         * 팝업 생성시 body하위로 마크업 생성 여부
                         * (true이면 body태그 최하단에 위치, false이면 버튼(대상) 태그 다음에 위치)
                         * defaultValue : false
                         * @property bodyAppend
                         * @type Boolean
                         */
                        bodyAppend : true,
                        /**
                         * SConfirm의 확인버튼 명칭
                         * defaultValue : ''
                         * @property okBtnName
                         * @type String
                         */
                        okBtnName : '',
                        /**
                         * SConfirm의 확인버튼 Title
                         * defaultValue : ''
                         * @property okBtnTitle
                         * @type String
                         */
                        okBtnTitle : '',
                        /**
                         * SConfirm의 취소버튼 명칭
                         * defaultValue : ''
                         * @property cancelBtnName
                         * @type String
                         */
                        cancelBtnName : '',
                        /**
                         * SConfirm의 취소버튼 Title
                         * defaultValue : ''
                         * @property cancelBtnTitle
                         * @type String
                         */
                        cancelBtnTitle : '',
                        /**
                         * 팝업 띄울 위치
                         * ( 
                         *    center : 화면중앙 플로팅, 
                         * )
                         * defaultValue : "center"
                         * @property position
                         * @type String
                         */
                        position : "center",
                        /**
                         * 팝업을 닫을 키코드를 설정한다.
                         * defaultValue : 27
                         * @property closeKeyCode
                         * @type Number
                         */
                        closeKeyCode : 27,
                        /**
                         * Page Number 클릭 시, 이전 페이지 사라지는 효과 지정
                         * @property hideEffect
                         * @type Object
                         **/
                        hideEffect : {
                            effect : "fade"
                        },
                        /**
                         * Page Number 클릭 시, 클릭한 페이지 나타나는 효과 지정
                         * @property hideEffect
                         * @type Object
                         **/
                        showEffect : {
                            effect : "fade"
                        }
                    }
                },
                "SPrompt" : {
                    "i18n" : "jquery.sui.SPrompt.locale-{lang}.js",
                    "name" : "jquery.sui.SPrompt_min.js",
                    "defaultOption" : {
                        /**
                         * PopupLayer 사용할 스킨(css class) 지정
                         * defaultValue : "default"
                         * @property skin
                         * @type String
                         */
                        skin : 'default',
                        /**
                         * popupLayer를 구성할 source
                         * defaultValue : null
                         * @property source
                         * @type Object
                         */
                        source : null,
                        /**
                         * 대체 오픈 버튼을 등록
                         * altOpenBtn의 값 유형 
                         * defaultValue : null
                         * @property altOpenBtn
                         * @type Object
                         */
                        altOpenBtn : null,
                        /**
                         * 대체 닫기 버튼을 등록
                         * defaultValue : null
                         * @property altCloseBtn
                         * @type Object
                         */
                        altCloseBtn : null,
                        /**
                         * 닫기 기능 대신에 PopupLayer를 제외한 영역 클릭 시 팝업이 닫힌는 기능 활성 여부
                         * defaultValue : false
                         * @property altClose
                         * @type Boolean
                         */
                        altClose : false,
                        /**
                         * 팝업 형식 결정 (false 일반형식으로 띄운다, true 모달형식으로 띄운다.), fullScreen일때는 지원안함
                         * defaultValue : false
                         * @property doModal
                         * @type Boolean
                         */
                        doModal : true,
                        /**
                         * 하나의 팝업만 노출할 것인지 여부
                         * defaultValue : true
                         * @property onlyOneShow
                         * @type Boolean
                         */
                        onlyOneShow : false,
                        /**
                         * 새창을 띄울 왼쪽좌표 (새창의 위치가 클릭한 곳 기준으로 몇px 왼쪽으로 보여줄지 설정)
                         * defaultValue : 0
                         * @property top
                         * @type Integer
                         */
                        left : 0,
                        /**
                         * 새창을 띄울 위쪽좌표 (새창의 위치가 클릭한 곳 기준으로 몇px 위로 보여줄지 설정)
                         * defaultValue : 0
                         * @property top
                         * @type Integer
                         */
                        top : 0,
                        /**
                        * 컴포넌트의 z-index 설정
                        * defaultValue : 100001
                        * @property zIndex
                        * @type Integer
                        */
                        zIndex : 100001,
                        /**
                         * Position 속성이 "click" 혹은 "magnet:버튼옆에" 일 경우, 오픈 버튼 기준으로 왼쪽 혹은 오른쪽으로 팝업 오픈
                         * defaultValue : right
                         * @property showDirection
                         * @type String
                         */
                        showDirection : "right",
                        /**
                         * 팝업이 초기화 된 후의 실행 함수 지정 핸들러
                         * initHandler(content, overlay) 
                         * defaultValue : null
                         * @property initHandler
                         * @type Function
                         */
                        initHandler : null,
                        /**
                         * 팝업이 열리기 전에 전처리 핸들러
                         * openPreHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property openPreHandler
                         * @type Function
                         */
                        openPreHandler : null,
                        /**
                         * 팝업이 열리기 후에 후처리 핸들러
                         * openPostHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property openPostHandler
                         * @type Function
                         */
                        openPostHandler : null,
                        /**
                         * 팝업이 닫히기 전에 전처리 핸들러
                         * closePreHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property closePreHandler
                         * @type Function
                         */
                        closePreHandler : null,
                        /**
                         * 팝업이 닫힌 후에 후처리 핸들러
                         * closePostHandler(content, overlay, event) 
                         * defaultValue : null
                         * @property closePostHandler
                         * @type Function
                         */
                        closePostHandler : null,
                        /**
                         * 팝업 생성시 body하위로 마크업 생성 여부
                         * (true이면 body태그 최하단에 위치, false이면 버튼(대상) 태그 다음에 위치)
                         * defaultValue : false
                         * @property bodyAppend
                         * @type Boolean
                         */
                        bodyAppend : true,
                        /**
                         * SPrompt의 확인버튼 명칭
                         * defaultValue : ''
                         * @property okBtnName
                         * @type String
                         */
                        okBtnName : '',
                        /**
                         * SPrompt의 확인버튼 Title
                         * defaultValue : ''
                         * @property okBtnTitle
                         * @type String
                         */
                        okBtnTitle : '',
                        /**
                         * SPrompt의 취소버튼 명칭
                         * defaultValue : ''
                         * @property cancelBtnName
                         * @type String
                         */
                        cancelBtnName : '',
                        /**
                         * SPrompt의 취소버튼 Title
                         * defaultValue : ''
                         * @property cancelBtnTitle
                         * @type String
                         */
                        cancelBtnTitle : '',
                        /**
                         * 팝업 띄울 위치
                         * ( 
                         *    center : 화면중앙 플로팅, 
                         * )
                         * defaultValue : "center"
                         * @property position
                         * @type String
                         */
                        position : "center",
                        /**
                         * 팝업을 닫을 키코드를 설정한다.
                         * defaultValue : 27
                         * @property closeKeyCode
                         * @type Number
                         */
                        closeKeyCode : 27,
                        /**
                         * Page Number 클릭 시, 이전 페이지 사라지는 효과 지정
                         * @property hideEffect
                         * @type Object
                         **/
                        hideEffect : {
                            effect : "fade"
                        },
                        /**
                         * Page Number 클릭 시, 클릭한 페이지 나타나는 효과 지정
                         * @property hideEffect
                         * @type Object
                         **/
                        showEffect : {
                            effect : "fade"
                        }
                    }
                },
                "Dropdown" : {
                    "i18n" : "jquery.sui.Dropdown.locale-{lang}.js",
                    "name" : "jquery.sui.Dropdown_min.js",
                    "defaultOption" : {
                        /**
                         * 메뉴를 구성하는 Data 정보
                         * defaultValue : 'source : null ,  hierachy : false'
                         * @property source
                         * @type Object
                         * @property hierarchy
                         * @type boolean
                         */
                        data : {
                            source : null, //Json 형식의 소스 Data
                            hierarchy : true, //데이터소스 구조가 계층구조인지 여부
                            /**
                             * 메뉴의 Root및 Depth 설정(rootLevel이 Null 일 경우 해당)
                             * defaultValue : 'upperId : null ,  level : 1, depth : 3'
                             * @property upperId
                             * @type String
                             * @property level
                             * @type Integer
                             * @property depth
                             * @type Integer
                             */
                            target : {
                                type : 'upper', // target의 Type 설정 : root(upperId사용안함), upper(upperId사용함)
                                upperId : null, // 부모의 메뉴ID
                                level : 1, // Root의 Target Level
                                depth : 3
                            // 메뉴에 보여줄 Depth 
                            },
                            /**
                             * a Tag내의 메뉴명칭 부분을 사용자정의형으로 구성할 수 있는 렌더러
                             * defaultValue : 'renderer : null'
                             * @property renderer
                             * @type function(menu, columnNames)
                             */
                            renderer : null
                        },
                        /**
                         * 메뉴데이터를 구성할 데이터 맵핑 정보
                         * defaultValue : 'level : "menuLevel",
                                                     menuId : "menuId",
                                                     upperId : "upprMenuId",
                                                     linkUrl : "linkUrl",
                                                     order : "menuOrd",
                                                     menuNm : "menuNm",
                                                     lowMenus : "lowMenus",
                                                     menuClass : "menuClass",
                                                     addAttr : "addAttr"
                         * @property level
                         * @type String
                         * @property menuId
                         * @type String
                         * @property upperId
                         * @type String
                         * @property linkUrl
                         * @type String
                         * @property order
                         * @type String
                         * @property menuNm
                         * @type String
                         * @property lowMenus
                         * @type String
                         * @property menuClass
                         * @type String
                         * @property addAttr
                         * @type String
                         */
                        columnNames : {
                            level : "menuLevel", // 메뉴 LEVEL
                            menuId : "menuId", // 메뉴식별자
                            upperId : "upprMenuId", // 상위메뉴식별자
                            linkUrl : "linkUrl", // 메뉴클릭시 수행할 URL
                            order : "menuOrd", // 동일레벨에서의 메뉴 순서
                            menuNm : "menuNm", // 메뉴명칭
                            lowMenus : "lowMenus", // 하위메뉴 데이터
                            menuClass : "menuClass", // 메뉴 <a>의 부여할 Class 명
                            addAttr : "addAttr" // <a> 의 attribute 추가시에 사용
                        },
                        /**
                         * Menu Open & Close 시 Animation 관리 jQuery의 animate함수의 옵션과 동일하다. .animate(properties, options) 의 option에 해당함
                         * defaultValue : 'useYn : true'
                         * @property useYn
                         * @type boolean
                         * @property duration
                         * @type Integer
                         * @property easing
                         * @type String
                         * @property queue
                         * @type boolean
                         * @property complete
                         * @type function
                         */
                        animate : {
                            // jQuery animate의 사용여부
                            open : {
                                duration : 500, // milliseconds, "slow", "fast"
                                easing : null, // "swing" - moves slower at the beginning/end, but faster in the middle, "linear" - moves in a constant speed
                                queue : true, //a Boolean value specifying whether or not to place the animation in the effects queue false일 경우 animate를 동시에 실행
                                complete : null
                            // specifies a function to be executed after the animation completes Callback Function
                            },
                            close : {
                                duration : 500, // milliseconds, "slow", "fast"
                                easing : null, // "swing" - moves slower at the beginning/end, but faster in the middle, "linear" - moves in a constant speed
                                queue : true, //a Boolean value specifying whether or not to place the animation in the effects queue false일 경우 animate를 동시에 실행
                                complete : null
                            // specifies a function to be executed after the animation completes Callback Function
                            }
                        },
                        /**
                         * 메뉴 디자인 CSS
                         * defaultValue : 'skin : default'
                         * @property skin
                         * @type String
                         */
                        skin : 'default', // 메뉴 디자인 CSS
                        /**
                         * 메뉴가 생성되고 난후 초기화할수 있는 핸들러
                         * defaultValue : 'initHandler : null'
                         * @property initHandler
                         * @type function(menuObj)
                         */
                        initHandler : null,
                        /**
                         * 메뉴를 클릭했을때의 사용할 핸들러
                         * defaultValue : 'clickHandler : null'
                         * @property clickHandler
                         * @type function(linkUrl, menuNm, targetTag, targetMenuData, event)
                         */
                        clickHandler : null,
                        /**
                         * 메뉴의 표시타입
                         * defaultValue : 'menuType : wholeMenu' //wholeMenu : 전체메뉴 , subMenu : 하위레벨 표시메뉴
                         * @property menuType
                         * @type String
                         */
                        menuType : 'wholeMenu',
                        /**
                         * subMenu의 Oepn범위영역에 대한 옵션처리 (PC, TP 전용)
                         * defaultValue : 'isFlexibleHeight : true' //true (메뉴의 높이가 유동적으로 변함) , false(메뉴의 높이가 최대값으로 고정)
                         * @property isFlexibleHeight
                         * @type String
                         */
                        isFlexibleHeight : true,
                        /**
                         * subMenu의 아코디언의 Open부분에 대한 처리 (SM 전용)
                         * defaultValue : 'isClosePreMenu : true' //true(메뉴의 아코디언 클릭시 이전에 열린메뉴가 있으면 닫는다.) , false(메뉴의 아코디언이 계속 열린다.)
                         * @property isClosePreMenu
                         * @type String
                         */
                        isClosePreMenu : true,
                        /**
                         * Menu의 Open Event 유형
                         * defaultValue : 'openType : click' //click
                         * @property openType
                         * @type String
                         */
                        openType : 'click'
                    }
                }
            }
        }
    },
    // //////////////////////////////////////////////////////////////////////////
    // 보안 설정
    // //////////////////////////////////////////////////////////////////////////
    "security" : {
    	"enabled" : false 
    },
    
    "solution" : {
    	// 키보드 보안
    	"mTransKey" : {
    	},
    	//구간암호화및 전자서명
    	"ksHybrid" : {
    	}
    },
    // //////////////////////////////////////////////////////////////////////////
    // 네트워크 환경 설정
    // //////////////////////////////////////////////////////////////////////////
    "net" : {
    	"hostip" : "http://localhost:8080/",
        "pool" : {
            "enabled" : true,
            "maxsize" : 10
        },
        "asyncExecute" : {
            "timeout" : 8000
        },
    	"cache" : {
    		"enabled" : false
    	}
    },
    // //////////////////////////////////////////////////////////////////////////
    // 화면구성 정보
    // //////////////////////////////////////////////////////////////////////////
    "nsn" : {
        "url" : "http://localhost:8080/",
        "screenId" : "_screenId",
        "kind" : "ajax",
        "method" : "POST",
        "extension" : ".scp",
        "containerId" : "#_containerArea",
        "default" : {
            "main" : "/biz/common/cb/ma/scwcbma010m.jsp",
            "sessionOut" : "/biz/common/cb/et/scwcbet090m.jsp",
            "login" : "/biz/common/cb/ll/scwcbll010m.jsp",
            "ssologin" : "/biz/common/cb/et/scwcbet110m.jsp",
            "error" : "/biz/common/cb/et/scwcbet030m.jsp"
        },
        "paremeter" : {
            "encoding" : true
        },
        "error" : {
            "url" : 8000
        }
    },

    // //////////////////////////////////////////////////////////////////////////
    // 모듈 메세지 정의
    // //////////////////////////////////////////////////////////////////////////
    /**
     * 다국어 메시지 코드
     *
     * Object message
     * @memberOf envData
     * @since SmartChannelPlatform 1.0 Smart-UI. Edition
     */
    "message" : {
        "ko" : {
            // Table Component Message
            "sui_uic_table_001" : "데이터를 가져 오는데 실패 했습니다.",
            "sui_uic_table_002" : "컬럼과 모델 정의는 동일해야 합니다.",
            // validator
            "sui_uic_validator_required_001" : "필수 입력 요소입니다.",
            "sui_uic_validator_required_002" : "필수 체크 요소입니다..",
            "sui_uic_validator_required_003" : "필수 선택 요소입니다.",
            "sui_uic_validator_required_004" : "필수 입력 영역입니다.",
            "sui_uic_validator_required_005" : "필수 체크 요소입니다. 하나 이상 체크해 주세요.",
            "sui_uic_validator_001" : "Input is required.",
            "sui_uic_validator_002" : "유효한 값이 아닙니다. 다시 입력해 주세요.",
            "sui_uic_validator_003" : "올바른 주민번호가 아닙니다. 주민번호를 확인해 주세요.",
            "sui_uic_validator_004" : "올바른 사업자 번호가 아닙니다. 사업자 번호를 확인해 주세요.",
            "sui_uic_validator_005" : "값이 일치하지 않습니다. 다시한번더 확인해 주세요.",
            "sui_uic_validator_006" : "약관의 동의해 해주세요.",
            "sui_uic_validator_007" : "개 이상 선택 하셔야 합니다.",
            "sui_uic_validator_008" : "원하는 값이 아닙니다. 다시 입력해 주세요.",
            "sui_uic_validator_009" : "숫자형식으로만 입력이 가능 합니다.",
            "sui_uic_validator_010" : "금액형식으로만 입력이 가능 합니다.",
            "sui_uic_validator_011" : "이메일 형식으로 작성해 주세요.",
            "sui_uic_validator_012" : "한글만 입력 가능합니다.(띄어쓰기불가능)",
            "sui_uic_validator_013" : "한글만 입력 가능합니다.",
            "sui_uic_validator_014" : "대소문자 영문만 입력 가능합니다.(띄어쓰기불가능)",
            "sui_uic_validator_015" : "대소문자 영문만 입력 가능합니다.",
            "sui_uic_validator_016" : "전화번호 형태로 작성해 주세요. ex) 000-0000-0000",
            "sui_uic_validator_017" : "날짜 형식과 범위를 정확히 작성해 주세요. ex) 20140101",
            "sui_uic_validator_018" : "도메인 형식으로 작성해 주세요.",
            "sui_uic_validator_019" : "도메인 형식으로 작성해 주세요. http:// 또는 https:// 를 포함한 도메인 주소를 입력해 주세요.",
            "sui_uic_validator_020" : "도메인 형식으로 작성해 주세요. http:// 또는 https://의 빼고 입력해 주세요.",
            "sui_uic_validator_021" : "한글과 영문만으로 작성하실수 있습니다.",
            "sui_uic_validator_022" : "숫자와 영문만으로 작성하실수 있습니다.",
            "sui_uic_validator_023" : "daum.net과 hanmail.net은 이메일로 사용할수가 없습니다. 다른 이메일을 입력해주세요.",
            "sui_uic_validator_024" : "@보다 크거나 같고 @보다 작거나 같은 값이어야 합니다.",
            "sui_uic_validator_025" : "@이거나 작은 값이어야 합니다.",
            "sui_uic_validator_026" : "@보다 큰 값이어야 합니다.",
            "sui_uic_validator_027" : "@자리를 입력하셔야 합니다.",
            "sui_uic_validator_028" : "@~@사이로 입력해주세요.",
            "sui_uic_validator_029" : "@자리 이하로 입력해 주세요.",
            "sui_uic_validator_030" : "@자리 이상 입력해 주세요.",
            "sui_uic_validator_031" : "날짜 형식과 범위를 정확히 작성해 주세요. ex) 2014.01.01" 
        },

        "en" : {}
    },

    // //////////////////////////////////////////////////////////////////////////
    // 입력값 마스킹
    // //////////////////////////////////////////////////////////////////////////
    /**
     * 입력값마스킹 정의
     *
     * Object formatter
     * @memberOf envData
     * @since SmartChannelPlatform 1.0 Smart-UI. Edition
     */
    "formatter" : {
        "rule" : {
            // *
            // =================================================================
            // * function 마스킹 처리
            // * 작성예시)
            // * 함수이름 : function(입력값, 마스킹정의, 이벤트) {
            // * ... 구현 ...
            // * return 마스킹된값;
            // * }
            // *
            // =================================================================

            /**
             * 주어진 값을 금액 표시형식화하여 반환한다.
             * ex) 29,000,000 or +29,000,000 or -29,000,000
             * 
             * @method amt
             * @param value {Object} 입력값
             * @param option {Object} 마스킹 정의
             * @param [event] {Object} 이벤트 객체
             * @return {String} 마스킹된값
             */
            "amt" : function(value, option, event) {
                var flag = '';
                               
                try {
                    flag = (value+"").substring(0, 1).replace(/[^+-]/gi, '');
                } catch (e) {
                }

                function amtToInteger(value) {
                    // 기존 콤마 제거
                    value = value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi, "");
                    value = value.replace(/[^0-9]/gi, '') + "";
                    var reg = /(^[+-]?\d+)(\d{3})/;
                    while (reg.test(value)) {
                        value = value.replace(reg, "$1,$2");
                    }                   
                    return value;
                }
                
                if(typeof(value) === 'number') {
                    value = value.toString();
                }
                
                value =  new Number(value).toString();
                var values = value.split('.');
                var valueList = [];

                for ( var i = 0; i < values.length; i++) {
                    valueList.push(amtToInteger(values[i]));
                }

                return flag + valueList.join('.');
            },
            
            
            /**
 			 * 주어진 값을 금액 표시형식화하여 반환한다.
             * ex) 29,000,000원 or +29,000,000원 or -29,000,000원
             * 
             * @method amtWon
             * @param value {Object} 입력값
             * @param option {Object} 마스킹 정의
             * @param [event] {Object} 이벤트 객체
             * @return {String} 마스킹된값
             */
            "amtWon" : function(value, option, event) {
                var flag = '';
                try {
                    flag = (value+"").substring(0, 1).replace(/[^+-]/gi, '');
                } catch (e) {
                }

                function amtToInteger(value) {
                    // 기존 콤마 제거
                    value = value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi, "");
                    value = value.replace(/[^0-9]/gi, '') + "";
                    var reg = /(^[+-]?\d+)(\d{3})/;
                    while (reg.test(value)) {
                        value = value.replace(reg, "$1,$2");
                    }
                    return value;
                }
                if(typeof(value) === 'number') {
                    value = value.toString();
                }
                value =  new Number(value).toString();
                var values = value.split('.');
                var valueList = [];

                for ( var i = 0; i < values.length; i++) {
                    valueList.push(amtToInteger(values[i]));
                }

                return flag + valueList.join('.')+"원";
            },
            
            /**
 			 * 주어진 값을 금액 표시형식화하여 반환한다.
             * ex) 29,000,000$ or +29,000,000$ or -29,000,000$
             * 
             * @method amtWon
             * @param value {Object} 입력값
             * @param option {Object} 마스킹 정의
             * @param [event] {Object} 이벤트 객체
             * @return {String} 마스킹된값
             */
            "amtDollar" : function(value, option, event) {
                var flag = '';
                try {
                    flag = (value+"").substring(0, 1).replace(/[^+-]/gi, '');
                } catch (e) {
                }
                function amtToInteger(value) {
                    // 기존 콤마 제거
                    value = value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi, "");
                    value = value.replace(/[^0-9]/gi, '') + "";
                    var reg = /(^[+-]?\d+)(\d{3})/;
                    while (reg.test(value)) {
                        value = value.replace(reg, "$1,$2");
                    }                                      
                    return value;
                }
                
                value = parseFloat(value).toFixed(2);
                
                var values = value.toString();
                
                var valueList = [];

                for ( var i = 0; i < values.length; i++) {
                    valueList.push(amtToInteger(values[i]));
                }
                
                return flag + valueList.join('.') + "$";
            },
            
            /**
 			 * 주어진 값을 금액 표시형식화하여 반환한다.
             * ex) 29,000,000€ or +29,000,000€ or -29,000,000€
             * 
             * @method amtEuroDollar
             * @param value {Object} 입력값
             * @param option {Object} 마스킹 정의
             * @param [event] {Object} 이벤트 객체
             * @return {String} 마스킹된값
             */
            "amtEuroDollar" : function(value, option, event) {
                var flag = '';
                try {
                    flag = (value+"").substring(0, 1).replace(/[^+-]/gi, '');
                } catch (e) {
                }

                function amtToInteger(value) {
                    // 기존 콤마 제거
                    value = value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi, "");
                    value = value.replace(/[^0-9]/gi, '') + "";
                    var reg = /(^[+-]?\d+)(\d{3})/;
                    while (reg.test(value)) {
                        value = value.replace(reg, "$1,$2");
                    }                                       
                    return value;
                }
                if(typeof(value) === 'number') {
                    value = value.toString();
                }
                value =  new Number(value).toString();
                var values = value.split('.');
                var valueList = [];

                for ( var i = 0; i < values.length; i++) {
                    valueList.push(amtToInteger(values[i]));
                }

                return flag + valueList.join('.') +"€";
            },
            
            
            /**
             * 주어진 값을 년월일 표시형식화하여 반환한다.
             * ex) 2011-06-07
             * 
             * @method date
             * @param value {Object} 입력값
             * @param option {Object} 마스킹 정의
             * @param [event] {Object} 이벤트 객체
             * @return {String} 마스킹된값
             */
            "date" : function(value, option, event) {
                value = value || "";
                option = option || "-";

                // 숫자만을 구한다.
                value = value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi, "");
                value = value.replace(/[^0-9]/gi, "") + "";
                if (8 === value.length) {
                    value = value.substring(0, 4) + option + value.substring(4, 6) + option + value.substring(6, 8);
                }
                return value;
            },
            
            /**
             * 주어진 값을 년월일 표시형식화하여 반환한다.
             * ex) 2011년06월07일
             * 
             * @method dateKoreanType
             * @param value {Object} 입력값
             * @param option {Object} 마스킹 정의
             * @param [event] {Object} 이벤트 객체
             * @return {String} 마스킹된값
             */
            "dateKoreanType" : function(value, option, event) {
                value = value || "";
                 
                // 숫자만을 구한다.
                value = value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi, "");
                value = value.replace(/[^0-9]/gi, "") + "";
                if (8 === value.length) {
                    value = value.substring(0, 4) + "년 " + value.substring(4, 6) +"월 " + value.substring(6, 8)+"일";
                }
                return value;
            },
            
            /**
             * 주어진 값을 년월일 표시형식화하여 반환한다.
             * ex) 2011.06.07
             * 
             * @method dateDot
             * @param value {Object} 입력값
             * @param option {Object} 마스킹 정의
             * @param [event] {Object} 이벤트 객체
             * @return {String} 마스킹된값
             */
            "dateDot" : function(value, option, event) {
                value = value || "";
                option = option || ".";

                // 숫자만을 구한다.
                value = value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi, "");
                value = value.replace(/[^0-9]/gi, "") + "";
                if (8 === value.length) {
                    value = value.substring(0, 4) + option + value.substring(4, 6) + option + value.substring(6, 8);
                }
                return value;
            },
            
            /**
             * 주어진 값을 시분초 표시형식화하여 반환한다.
             * ex) 11:20:30
             * 
             * @method time
             * @param value {Object} 입력값
             * @param option {Object} 마스킹 정의
             * @param [event] {Object} 이벤트 객체
             * @return {String} 마스킹된값
             */
            "time" : function(value, option, event) {
                value = value || "";
                option = option || ":";

                // 숫자만을 구한다.
                value = value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi, "");
                value = value.replace(/[^0-9]/gi, "") + "";
                if (6 === value.length) {
                    value = value.substring(0, 2) + option + value.substring(2, 4) + option + value.substring(4, 6);
                }
                return value;
            },
            
            /**
             * 주어진 값을 숫자 표시형식화하여 반환한다.
             * ex) 1234
             * 
             * @method toNumber
             * @param value {Object} 입력값
             * @param option {Object} 마스킹 정의
             * @param [event] {Object} 이벤트 객체
             * @return {String} 마스킹된값
             */
            "toNumber" : function(value, option, event) {
                value = value || "";

                // 숫자만을 구한다.
                value = value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi, "");
                value = value.replace(/[^0-9]/gi, "") + "";
                if (value) {
                    value = new Number(value);
                }
                return value;
            },
            
            /**
             * 주어진 값을 우편번호 표시형식화하여 반환한다.
             * ex) 321-123
             * 
             * @method postno
             * @param value {Object} 입력값
             * @param option {Object} 마스킹 정의
             * @param [event] {Object} 이벤트 객체
             * @return {String} 마스킹된값
             */
            "postno" : function(value, option, event) {
                value = value || "";
                option = option || "-";

                // 숫자만을 구한다.
                value = value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi, "");
                value = value.replace(/[^0-9]/gi, "") + "";
                if (6 === value.length) {
                    value = value.substring(0, 3) + option + value.substring(3, 6);
                }
                return value;
            },
            
            /**
             * 주어진 값을 전화번호 표시형식화하여 반환한다.
             * ex) 00-000-0000 or 00-0000-0000 or 000-000-0000 or 000-0000-0000
             * 
             * @method telno
             * @param value {Object} 입력값
             * @param option {Object} 마스킹 정의
             * @param [event] {Object} 이벤트 객체
             * @return {String} 마스킹된값
             */
            "telno" : function(value, option, event) {
                value = value || "";
                option = option || "-";

                // 숫자만을 구한다.
                value = value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi, "");
                value = value.replace(/[^0-9]/gi, "") + "";
                if (9 === value.length) {
                    value = value.substring(0, 2) + option + value.substring(2, 5) + option + value.substring(5, 9);
                } else if (10 === value.length) {
                    if ("02" === value.substring(0, 2)) {
                        value = value.substring(0, 2) + option + value.substring(2, 6) + option + value.substring(6, 10);
                    } else {
                        value = value.substring(0, 3) + option + value.substring(3, 6) + option + value.substring(6, 10);
                    }
                } else if (11 === value.length) {
                    value = value.substring(0, 3) + option + value.substring(3, 7) + option + value.substring(7, 11);
                } else if (8 === value.length) {
                    value = value.substring(0, 4) + option + value.substring(4, 8);
                }

                return value;
            },
            
            
            /**
             * 주어진 소수값의 자리수와 반올림, 내림, 버림을 구함
             * ex) 3.1415923231232 -> 3.14
             * 
             * @method numberDigit
             * @param value {Object} 입력값
             * @param type {Object} 올림,버림,반올림 선택(ceil,floor,round)
             * @param digit {Object} 자르고 싶은 자릿수
             * @return {String} 마스킹된값
             */
            "numberDigit" : function(value, option, event) {
            	var returnValue = 0;
            	var checkValue = 0;
            	var digit = option.digit;
            	var type = option.type;
            	
            	var squre = Math.pow(10,digit);
            	                
                if(typeof(value) === 'number') {
                    value = value.toString();
                }
                
                if(type === "ceil"){
                	checkValue = ((Math.ceil(Math.abs(value)*squre))/squre).toFixed(digit);

                }else if(type === "floor"){
                	//20151117 : Javascript 부동소수점 오류로 parseFloat, toFixed 처리 추가
                	//           => 4.6*100 = 459.9999999999 로 나오는 오류
                	checkValue = ((Math.floor(parseFloat(Math.abs(value)*squre).toFixed(digit)))/squre);
                
                }else if(type === "round"){
                	checkValue = ((Math.round(Math.abs(value)*squre))/squre).toFixed(digit);
                	
                }
                                
                if(value < 0 ){
                	returnValue = (checkValue*-1);
                }else{
                	returnValue = checkValue;
                }
                
                return Number(returnValue).toFixed(digit);
            },
            
            /**
             * 주어진 값을 주민등록번호 표시형식화하여 반환한다.
             * ex) 800402-1641810
             * 
             * @method ssn
             * @param value {Object} 입력값
             * @param option {Object} 마스킹 정의
             * @param [event] {Object} 이벤트 객체
             * @return {String} 마스킹된값
             */
            "ssn" : function(value, option, event) {
                value = value || "";
                option = option || "-";

                // 숫자만을 구한다.
                value = value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi, "");
                value = value.replace(/[^0-9]/gi, "") + "";
                if (13 === value.length) {
                    value = value.substring(0, 6) + option + value.substring(6, 13);
                }
                return value;
            },
            /**
             * 주어진 값에 + 단위를 표시하여 준다
             * ex)10%
             * 
             * @method unit
             * @param value {Object} 입력값
             * @param option {Object} 마스킹 정의
             * @param [event] {Object} 이벤트 객체
             * @return {String} 마스킹된값
             */
            "unit" : function(value, option, event) {
            	value = value || "";
            	option = option || "";
            	return (value + " " + option);
            }

        }
    },

    "unformatter" : {
        "rule" : {
            // *
            // =================================================================
            // * function 마스킹 처리
            // * 작성예시)
            // * 함수이름 : function(입력값, 마스킹정의, 이벤트) {
            // * ... 구현 ...
            // * return 마스킹된값;
            // * }
            // *
            // =================================================================

            /**
             * 주어진 값을 금액 표시형식화하여 반환한다.
             * ex) 29,000,000 or +29,000,000 or -29,000,000
             * 
             * @method amt
             * @param value {Object} 입력값
             * @param option {Object} 마스킹 정의
             * @param [event] {Object} 이벤트 객체
             * @return {String} 마스킹된값
             */
            "amt" : function(value, option, event) {
                value = value || "";
                value = value.replace(/,/gi, "");

                return value;
            },

            /**
             * 주어진 값을 년월일 표시형식화하여 반환한다.
             * ex) 2011:06:07
             * 
             * @method date
             * @param value {Object} 입력값
             * @param option {Object} 마스킹 정의
             * @param [event] {Object} 이벤트 객체
             * @return {String} 마스킹된값
             */
            "date" : function(value, option, event) {
                value = value || "";
                option = option || "-";

                var regExp = new RegExp(option, "gi");

                return value.replace(regExp, "");
            },
            
            /**
             * 주어진 값을 년월일 표시형식화하여 반환한다.
             * ex) 2011:06:07
             * 
             * @method date
             * @param value {Object} 입력값
             * @param option {Object} 마스킹 정의
             * @param [event] {Object} 이벤트 객체
             * @return {String} 마스킹된값
             */
            "dateDot" : function(value, option, event) {
                value = value || "";
                option = option || ".";

                var regExp = new RegExp(option, "gi");

                return value.replace(regExp, "");
            },

            /**
             * 주어진 값을 시분초 표시형식화하여 반환한다.
             * ex) 11:20:30
             * 
             * @method time
             * @param value {Object} 입력값
             * @param option {Object} 마스킹 정의
             * @param [event] {Object} 이벤트 객체
             * @return {String} 마스킹된값
             */
            "time" : function(value, option, event) {
                value = value || "";
                option = option || ":";

                var regExp = new RegExp(option, "gi");

                return value.replace(regExp, "");
            },

            /**
             * 주어진 값을 숫자 표시형식화하여 반환한다.
             * ex) 1234
             * 
             * @method toNumber
             * @param value {Object} 입력값
             * @param option {Object} 마스킹 정의
             * @param [event] {Object} 이벤트 객체
             * @return {String} 마스킹된값
             */
            "toNumber" : function(value, option, event) {
                value = value || "";

                return value;
            },

            /**
             * 주어진 값을 우편번호 표시형식화하여 반환한다.
             * ex) 321-123
             * 
             * @method postno
             * @param value {Object} 입력값
             * @param option {Object} 마스킹 정의
             * @param [event] {Object} 이벤트 객체
             * @return {String} 마스킹된값
             */
            "postno" : function(value, option, event) {
                value = value || "";
                option = option || "-";

                var regExp = new RegExp(option, "gi");

                return value.replace(regExp, "");
            },

            /**
             * 주어진 값을 전화번호 표시형식화하여 반환한다.
             * ex) 00-000-0000 or 00-0000-0000 or 000-000-0000 or 000-0000-0000
             * 
             * @method telno
             * @param value {Object} 입력값
             * @param option {Object} 마스킹 정의
             * @param [event] {Object} 이벤트 객체
             * @return {String} 마스킹된값
             */
            "telno" : function(value, option, event) {
                value = value || "";
                option = option || "-";

                var regExp = new RegExp(option, "gi");

                return value.replace(regExp, "");
            },

            /**
             * 주어진 값을 주민등록번호 표시형식화하여 반환한다.
             * ex) 800402-1641810
             * 
             * @method ssn
             * @param value {Object} 입력값
             * @param option {Object} 마스킹 정의
             * @param [event] {Object} 이벤트 객체
             * @return {String} 마스킹된값
             */
            "ssn" : function(value, option, event) {
                value = value || "";
                option = option || "-";

                var regExp = new RegExp(option, "gi");

                return value.replace(regExp, "");
            }
        }
    },

    // //////////////////////////////////////////////////////////////////////////
    // 유효값 검증
    // //////////////////////////////////////////////////////////////////////////
    /**
     * 유효값 검증 정의
     *
     * Object validator
     * @memberOf envData
     * @since SmartChannelPlatform 1.0 Smart-UI. Edition
     */
    "validator" : {
        "rule" : {

            // *
            // =================================================================
            // * 정규식 룰 체크
            // * 작성예시)
            // * "정규식 이름" : {
            // * "message" : "메시지",
            // * "regExp" : 정규표현식
            // * }
            // *
            // * 사용자 옵션으로 직접 받아서 정규식을 처리 할수 있습니다.
            // * regexp [ 정규표현식으로 폼체크를 사용하실수 있습니다. ]
            // * ex) rules : ["regexp:경고문구:정규표현식"]
            // *
            // =================================================================
            regularExp : {
                /**
                 * 숫자만 가능[ 0 ~ 9 ] 
                 * 주의 : 띄어쓰기 불가능
                 * ex) rules : ["numeral:경고문구"]
                 *
                 * @property numeral
                 * @type Object
                 */
                "numeral" : {
                    "message" : "sui_uic_validator_009",
                    "regExp" : /^[0-9]+$/
                },
                /**
                 * 금액형식만 가능
                 * ex) rules : ["amt:경고문구"]
                 *
                 * @property amt
                 * @type Object
                 */
                "amt" : {
                    "message" : "sui_uic_validator_010",
                    "regExp" : /^[0-9,]+$/
                },
                /**
                 * 이메일 도메인 형식만 가능[ nate.com ]
                 * ex) rules : ["email:경고문구"]
                 *
                 * @property emailDomain
                 * @type Object
                 */
                "emailDomain" : {
                    "message" : "sui_uic_validator_011",
                    "regExp" : /^((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
                },
                /**
                 * 이메일 형식만 가능[ test@nate.com ]
                 * ex) rules : ["email:경고문구"]
                 *
                 * @property email
                 * @type Object
                 */
                "email" : {
                    "message" : "sui_uic_validator_011",
                    "regExp" : /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
                },
                /**
                 * 한글만 가능[ 가나다라 ... ] 
                 * 주의 : ㄱㄴㄷ... 형식으로는 입력 불가능 , 띄어쓰기 불가능
                 * ex) rules : ["kor:경고문구"]
                 *
                 * @property kor
                 * @type Object
                 */
                "kor" : {
                    "message" : "sui_uic_validator_012",
                    "regExp" : /^[가-힝]+$/
                },
                /**
                 * 한글만 가능[ 가나다라 ... ] 
                 * 주의 : ㄱㄴㄷ... 형식으로는 입력 불가능 , 띄어쓰기 가능
                 * ex) rules : ["kor:경고문구"]
                 *
                 * @property kors
                 * @type Object
                 */
                "kors" : {
                    "message" : "sui_uic_validator_013",
                    "regExp" : /^[가-힝\s]+$/
                },
                /**
                 * 영문만 가능
                 *
                 * @property eng
                 * @type Object
                 */
                "eng" : {
                    "message" : "sui_uic_validator_014",
                    "regExp" : /^[a-zA-Z]+$/
                },
                /**
                 * 영문, 띄어쓰기만 가능
                 *
                 * @property engs
                 * @type Object
                 */
                "engs" : {
                    "message" : "sui_uic_validator_015",
                    "regExp" : /^[a-zA-Z\s]+$/
                },
                /**
                 * 전화번호 형태 000-0000-0000 만 받는다.
                 *
                 * @property phone
                 * @type Object
                 */
                "phone" : {
                    "message" : "sui_uic_validator_016",
                    "regExp" : /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/
                },
                /**
                 * 날짜 형태 20140101 만 받는다.
                 *
                 * @property date
                 * @type Object
                 */
                "date" : {
                    "message" : "sui_uic_validator_017",
                    "regExp" : /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/
                },
                
                /**
                 * 날짜 형태 2014.01.01 만 받는다.
                 *
                 * @property date
                 * @type Object
                 */
                "dateDot" : {
                    "message" : "sui_uic_validator_031",
                    "regExp" : /^(19[7-9][0-9]|20\d{2}).(0[0-9]|1[0-2]).(0[1-9]|[1-2][0-9]|3[0-1])$/
                },
                
                /**
                 * 도메인 형태 : http:// https:// 포함해도 되고 안되도 된다.
                 *
                 * @property domain
                 * @type Object
                 */
                "domain" : {
                    "message" : "sui_uic_validator_018",
                    "regExp" : /^(((http(s?))\:\/\/)?)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?$/
                },
                /**
                 * 도메인 형태 : http:// https:// 꼭 포함
                 *
                 * @property domain1
                 * @type Object
                 */
                "domain1" : {
                    "message" : "sui_uic_validator_019",
                    "regExp" : /^((http(s?))\:\/\/)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?$/
                },
                /**
                 * 도메인 형태 : http:// https:// 포함하면 안됨
                 *
                 * @property domain2
                 * @type Object
                 */
                "domain2" : {
                    "message" : "sui_uic_validator_020",
                    "regExp" : /^[^((https?)\:\/\/)]([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?$/
                },
                /**
                 * 한글과 영문만 가능함
                 *
                 * @property kor_eng
                 * @type Object
                 */
                "kor_eng" : {
                    "message" : "sui_uic_validator_021",
                    "regExp" : /^[가-힝a-zA-Z]+$/
                },
                /**
                 * 숫자와 알파벳만 가능함
                 *
                 * @property numeral_eng
                 * @type Object
                 */
                "numeral_eng" : {
                    "message" : "sui_uic_validator_022",
                    "regExp" : /^[a-zA-Z0-9]+$/
                },
                /**
                 * daum.net 과 , hanmail.net 은 사용할수 없음
                 *
                 * @property emailx
                 * @type Object
                 */
                "emailx" : {
                    "message" : "sui_uic_validator_023",
                    "regExp" : /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
                }
            },

            // *
            // =================================================================
            // * function 룰 체크
            // * 작성예시)
            // * 함수이름 : function(대상오브젝트, 검증룰) {
            // * ... 구현 ...
            // * return true 또는 검증실패메시지;
            // * }
            // *
            // =================================================================

            /**
             * 주민번호 체크
             *
             * @method ssn
             * @param $object {Object} 대상 오브젝트
             * @param rules {Object} 유효성검증 정의
             * @return {Boolean}||{String} true 또는 응답메시지
             */
            "ssn" : function($object, rules) {
                // 주민번호 마스킹 제거
                value = $object.val().replace("-", "");
                // 룰 옵션 분리
                var rule = rules.split(":");
                var message = rule[1];

                var ssnCheck = 0;
                for ( var i = 0; i < 12; i++) {
                    ssnCheck += (i % 8 + 2) * value.charAt(i);
                }
                ssnCheck = (11 - ssnCheck % 11) % 10;

                if (ssnCheck != value.charAt(12)) {
                    return (message ? message : sui.env.getMessage("sui_uic_validator_003"));
                }

                return true;
            },

            /**
             * 사업자 등록번호
             *
             * @method bssn
             * @param $object {Object} 대상 오브젝트
             * @param rules {Object} 유효성검증 정의
             * @return {Boolean}||{String} true 또는 응답메시지
             */
            "bssn" : function($object, rules) {
                value = $object.val().replace(/-/g, "");
                // 룰 옵션 분리
                var rule = rules.split(":");
                var message = rule[1];

                var sum = 0;
                var getlist = new Array(10);
                var chkvalue = new Array("1", "3", "7", "1", "3", "7", "1", "3", "5");
                for ( var i = 0; i < 10; i++) {
                    getlist[i] = value.substring(i, i + 1);
                }
                for ( var i = 0; i < 9; i++) {
                    sum += getlist[i] * chkvalue[i];
                }
                sum = sum + parseInt((getlist[8] * 5) / 10);
                sidliy = sum % 10;
                sidchk = 0;
                if (sidliy != 0) {
                    sidchk = 10 - sidliy;
                } else {
                    sidchk = 0;
                }

                if (sidchk != getlist[9]) {
                    return (message ? message : sui.env.getMessage("sui_uic_validator_004"));
                }

                return true;
            },

            /**
             * 숫자의 값의 최소와 최대를 정하여 조건을 설정합니다.
             * [ numeral small big 의 약자 ]
             * ex] rules : ["nsb:min:max:message"]
             *
             * @method nsb
             * @param $object {Object} 대상 오브젝트
             * @param rules {Object} 유효성검증 정의
             * @return {Boolean}||{String} true 또는 응답메시지
             */
            "nsb" : function($object, rules) {
                // 룰 옵션 분리
                var rule = rules.split(":");

                var min = parseInt(rule[1]);
                var max = parseInt(rule[2]);
                var message = rule[3];

                // 금액필드라면 ,제거된값으로 검증
                value = ($object.val()).replace(/,/g, "");
                value = parseInt(value);

                if (min != 0 && max != 0) {
                    if (value < min || value > max) {
                        return (message ? message : sui.env.getMessage("sui_uic_validator_024", [min, max]));
                    }
                } else if (min == 0 && max != 0) {
                    if (value > max) {
                        return (message ? message : sui.env.getMessage("sui_uic_validator_025", max));
                    }
                } else if (min != 0 && max == 0) {
                    if (value <= min) {
                        return (message ? message : sui.env.getMessage("sui_uic_validator_026", min));
                    }
                }

                return true;
            },

            /**
             * 문자열 길이 최소와 최대를 정하여 조건을 설정합니다.
             * ex] rules : ["gap:min:max:message"]
             *
             * @method gap
             * @param $object {Object} 대상 오브젝트
             * @param rules {Object} 유효성검증 정의
             * @return {Boolean}||{String} true 또는 응답메시지
             */
            "gap" : function($object, rules) {
                // 룰 옵션 분리
                var rule = rules.split(":");

                var min = parseInt(rule[1]);
                var max = parseInt(rule[2]);
                var message = rule[3];

                var valueLength = $object.val().length;
                if (min != 0 && max != 0) {
                    if (min == max) {
                        if (valueLength != max) {
                            return (message ? message : sui.env.getMessage("sui_uic_validator_027", max));
                        }
                    } else if (valueLength < min || valueLength > max) {
                        return (message ? message : sui.env.getMessage("sui_uic_validator_028", [min, max]));
                    }
                } else if (min == 0 && max != 0) {
                    if (valueLength > max) {
                        return (message ? message : sui.env.getMessage("sui_uic_validator_029", max));
                    }
                } else if (min != 0 && max == 0) {
                    if (valueLength < min) {
                        return (message ? message : sui.env.getMessage("sui_uic_validator_030", min));
                    }
                }

                return true;
            },

            /**
             * 지금 현재 값과 비교하려는 정보의 값이 일치한지를 비교 합니다.
             * ex] rules : ["equals:비교할object name:message"]
             * 
             * @method equals
             * @param $object {Object} 대상 오브젝트
             * @param rules {Object} 유효성검증 정의
             * @return {Boolean}||{String} true 또는 응답메시지
             */
            "equals" : function($object, rules) {
                var value = $object.val();

                // 룰 옵션 분리
                var rule = rules.split(":");

                var marchName = parseInt(rule[1]);
                var message = parseInt(rule[2]);

                var marchText = $("input[name=" + marchName + "]").val();

                if (marchText != value) {
                    return (message ? message : sui.env.getMessage("sui_uic_validator_005"));
                }

                return true;
            },
            
            /**
             * 지금 현재 값과 비교하려는 정보의 값이 일치한지를 비교 합니다.
             * ex] rules : ["equals:비교할object name:message"]
             * 
             * @method equals
             * @param $object {Object} 대상 오브젝트
             * @param rules {Object} 유효성검증 정의
             * @return {Boolean}||{String} true 또는 응답메시지
             */
            "equalsObj" : function($object, rules) {
                var value = $object.val();

                // 룰 옵션 분리
                var rule = rules.split(":");

                var marchName = parseInt(rule[1]);
                var message = parseInt(rule[2]);

                var marchText = marchName;

                if (marchText != value) {
                    return (message ? message : sui.env.getMessage("sui_uic_validator_005"));
                }

                return true;
            },

            /**
             * 선택된 라디오 버튼의 값이 들어와야 합니다.
             *
             * @method thisRadio
             * @param $object {Object} 대상 오브젝트
             * @param rules {Object} 유효성검증 정의
             * @return {Boolean}||{String} true 또는 응답메시지
             */
            "thisRadio" : function($object, rules) {
                // 룰 옵션 분리
                var rule = rules.split(":");
                var message = parseInt(rule[1]);

                if ($object.attr("checked") === false) {
                    return (message ? message : sui.env.getMessage("sui_uic_validator_006"));
                }

                return true;
            },

            /**
             * 체크박스의 값이 하나도 업으면 안되고 몇게 이상으로 선택 가능합니다.
             *
             * @method emptyCheck
             * @param $object {Object} 대상 오브젝트
             * @param rules {Object} 유효성검증 정의
             *                       ["emptyCheck:체크되어야할 갯수:nameSelector(group):message"]
             * @return {Boolean}||{String} true 또는 응답메시지
             */
            "emptyCheck" : function($object, rules) {
                // var value = $object.val();
                // 룰 옵션 분리
                var rule = rules.split(":");

                var completeNum = rule[1];
                var chkName = rule[2];
                var message = rule[3];
                var helloNum = 0;
                
                //그룹속성(name)을 입력하지 않았을때는 셀렉트된 오브젝트의 이름속성을 사용
                if (chkName === null || chkName === "" || chkName == undefined) {
                    chkName = $object.attr("name");
                }
                //그룹에 체크되어 있는 갯수를 구한다.
                $("input[name='"+chkName+"']:checkbox").each(function() {
                    if ($(this).is(":checked") == true) {
                        helloNum++;
                    }
                });
                //체크되어야 할 갯수보다 체크된값이 작으면 에러 발생
                if (helloNum < completeNum) {
                    return (message ? message : (completeNum + sui.env.getMessage("sui_uic_validator_007")));
                }

                return true;
            },

            /**
             * 선택된 라디오 버튼의 값이 들어와야 합니다.
             *
             * @method same
             * @param $object {Object} 대상 오브젝트
             * @param rules {Object} 유효성검증 정의
             * @return {Boolean}||{String} true 또는 응답메시지
             */
            "same" : function($object, rules) {
                var value = $object.val();
                // 룰 옵션 분리
                var rule = rules.split(":");
                var sameText = rule[1];
                var message = rule[2];

                if (value != sameText) {
                    return (message ? message : sui.env.getMessage("sui_uic_validator_008"));
                }

                return true;
            },
            /**
             * 필수 값 공백 체크한다
             *
             * @method null
             * @param $object {Object} 대상 오브젝트
             * @param rules {Object} 유효성검증 정의
             * @return {Boolean}||{String} true 또는 응답메시지
             */
            "null" : function($object, rules) {
            	var value = $object.val();
            	
            	if (null == value
            		|| "" == value) {
            		return (message ? message : sui.env.getMessage("sui_uic_validator_031"));
            	}
            	
            	return true;
            }
        }
    }

};