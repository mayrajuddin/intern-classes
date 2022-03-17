$(function(){
    'use strict'
    $(window).on('scroll', function(){
        var navHeight =$('#navbar').height();
        var scrollSize =$(window).scrollTop();
        if(scrollSize > navHeight){
            $('#navbar').addClass('navfix');
        }else{
            $('#navbar').removeClass('navfix');
        }
    })
    $('.main_banner').slick({
        prevArrow:'<i class="fa-solid fa-angle-left icons bnricon"></i>',
        nextArrow : '<i class="fa-solid fa-angle-right icons bnricon"></i>'
    })
    $('.counter').counterUp({
        delay: 30,
        time: 1000
    });
    $('.course_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
})