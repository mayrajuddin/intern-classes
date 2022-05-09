$(function(){
    $('#active_btn').on('click', function(){
        $('#nav_menu ul, #nav .logo').toggleClass('active')
    });
    $('.banner_slider').slick({
        
        arrows:false,
        // prevArrow:'<i class="fa-solid fa-angle-left bIcon"></i>',
        // nextArrow : '<i class="fa-solid fa-angle-right bIcon"></i>'
        
    });
   
    $('.counter').counterUp({
        delay: 30,
        time: 1000
    });
    $('.tesSlider').slick({
        slidesToShow:1,
        slidesToScroll: 1,
        asNavFor: '.profile_nav',
        fade:true,
        arrows:false
    })
    $('.profile_nav').slick({
        slidesToShow:3,
        asNavFor:'.tesSlider',
        centerMode: true,
        centerPadding:'0'
    })
})