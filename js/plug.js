$(function(){
    'use strict';
// start slider

        var winH   = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH   = $('.navbar').innerHeight();
    $('.slider , .carousel-item').height(winH - (upperH + navH));

    // start work
    $('.work .botn button').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class')==='.all'){
            $('.box .col-md').css('opacity' , 1);
        }else{
            $('.box .col-md').css('opacity' , '.08');
            $($(this).data('class')).parent().css('opacity' , 1)
        }
    })
})

$('.carousel').carousel({
    interval: 3000
  })