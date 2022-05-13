$(function(){
    $(window).on('scroll', function(){
        var menuHeight = $('#nav').height();
        var scrollSize = $(window).scrollTop();
        if(scrollSize > menuHeight){
            $('#nav').addClass('fix');
        }else{
            $('#nav').removeClass('fix');
        }
    })
    $('#active_btn').on('click', function(){
        $('#nav_menu ul, #nav .logo').toggleClass('active')
    });
    $('.banner_slider').slick({
        
        arrows:false,
        // prevArrow:'<i class="fa-solid fa-angle-left bIcon"></i>',
        // nextArrow : '<i class="fa-solid fa-angle-right bIcon"></i>'
        
    });
    $('.blog_slider').slick({
        slidesToShow:3,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                arrows:false
              }
            }
        ]
    })
    $('.counter').counterUp({
        delay: 30,
        time: 1000
    });
    $('.tesSlider').slick({
        asNavFor: '.profile_nav',
        arrows:false
    })
    $('.profile_nav').slick({
        slidesToShow:3,
        asNavFor:'.tesSlider',
        centerMode: true,
        arrows:false,
        centerPadding:'10px'
    })
})