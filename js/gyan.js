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
})