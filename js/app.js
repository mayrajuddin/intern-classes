$(function () {
   'use strict'
   $(window).on("load", function () {
      $('#loding').fadeOut(300);
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
})