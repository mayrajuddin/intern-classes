$(function () {
   'use strict'
   $(window).on("load", function () {
      $('#loding').fadeOut(300);
  })
  $('.banner-slider').slick({
      prevArrow : '<i class="fa-solid fa-arrow-left icons"></i>',
      nextArrow: '<i class="fa-solid fa-arrow-right icons"></i>'
  })
  $(window).on('scroll', function(){
      var menuHeight = $('#header').height();
      var scrollSize = $(window).scrollTop();
      if(scrollSize > menuHeight){
          $('#header').addClass('animate');
      }else{
          $('#header').removeClass('animate');
      }
  })
  $(window).on('scroll', function () {
      var scrollTop = $(this).scrollTop();
      
      if (scrollTop > 400) {
          $('.top').fadeIn(300)
      } else {
          $('.top').fadeOut(300)
      }
  })
      
  $('.top').on('click', function () {
      $("html, body").animate({
          scrollTop:0
      },500)
  })

  $('.filter_catagory').filterizr();
  $('.gallary-menu li').on('click', function(){
      $(this).addClass('active');
      $(this).siblings('.active').removeClass('active');
  })

  $('.count_down').countdown('2022/04/10', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<div class="count_down_item"><span>%D</span><span>days</span> </div>'
      + '<div class="count_down_item"><span>%H</span><span>hours</span></div>'
      + '<div class="count_down_item"><span>%M</span><span>mins</span></div>'
      + '<div class="count_down_item"><span>%S</span><span>secs</span></div>'));
  });

  $('.counter').spincrement({
    duration: 10000
})

})