$(function (){
    'use strict'
    $(window).on('scroll', function(){
        var menuHeight = $('.navBar').height();
        var scrollSize = $(window).scrollTop();
        if( scrollSize > menuHeight){
            $('.navBar').addClass('navMenu');

        }else{
            $('.navBar').removeClass('navMenu');
        }
    })
    $(window).on('load', function(){
        $('#loding').fadeOut(300);
    })
    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        
        if (scrollTop > 400) {
            $('#top').fadeIn(300)
        } else {
            $('#top').fadeOut(300)
        }
    })
    $('#top').on('click', function(){
        $('html,body').animate({
            scrollTop:0
        },500)
    })
})