// 스크롤 이벤트생성
$(window).scroll(function(){

    // 현재창의 높이값 설정
    let $w_h = $(window).height(); 
    
    //스크롤위치값 저장
    let $s_dist = $(window).scrollTop();
    
    // h1요소 가져오기
    let $title = $('h2');
    
    $title.each(function(){
        // 오브젝트의 offset().top가져오기
        let $top = $(this).offset().top;
        let $outer_h = $(this).outerHeight();  // 바닥에서 만들어지는 시점에 애니진행
        console.log($top);
        if ($w_h + $s_dist > $top + $outer_h ) {
            $(this).addClass('ani');
        }
    });
});


$(function(){
    $('.sec03_card_wrapper').slick({
        slide: '.sec03_card',        //슬라이드 되어야 할 태그
        infinite : true,     //무한 반복 옵션     
        slidesToShow : 6,        // 한 화면에 보여질 컨텐츠 개수
        autoplay : true,            // 자동 스크롤 사용 여부
        autoplaySpeed : 2000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover : true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
        vertical : false,        // 세로 방향 슬라이드 옵션
        arrows: false,
        
        responsive: [ // 반응형 웹 구현 옵션
        {
            breakpoint: 960, //화면 사이즈 960px
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 768, //화면 사이즈 768px
            settings: {
                slidesToShow: 5
            }
        }
      ]
    });
})