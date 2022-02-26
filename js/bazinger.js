
$(document).ready(function (){
    
    //pre-lodar
        $(window).on("load", function () {
            $('#loding').fadeOut(300);
        })
    //arrow 
    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        
        if (scrollTop > 400) {
            $('#top').fadeIn(300)
        } else {
            $('#top').fadeOut(300)
        }
    })
        
    $('#top').on('click', function () {
        $("html, body").animate({
            scrollTop:0
        },500)
    })
})