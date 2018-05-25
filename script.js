$(document).ready(function(){
    
    $('.thumb1').click(function(){
        $('.thumb').removeClass('on').addClass('off');
        $(this).removeClass('off').addClass('on');
        $('.img1').animate({'opacity':'1'}, 250);
        $('.img2').animate({'opacity':'0'}, 250);
        $('.img3').animate({'opacity':'0'}, 250);
    });

    $('.thumb2').click(function(){
        $('.thumb').removeClass('on').addClass('off');
        $(this).removeClass('off').addClass('on');
        $('.img1').animate({'opacity':'0'}, 250);
        $('.img2').animate({'opacity':'1'}, 250);
        $('.img3').animate({'opacity':'0'}, 250);
    });

    $('.thumb3').click(function(){
        $('.thumb').removeClass('on').addClass('off');
        $(this).removeClass('off').addClass('on');
        $('.img1').animate({'opacity':'0'}, 250);
        $('.img2').animate({'opacity':'0'}, 250);
        $('.img3').animate({'opacity':'1'}, 250);
    });







});