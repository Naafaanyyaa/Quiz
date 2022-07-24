$('.footer__localization').click(function(){
    $('.language-hidden').removeClass('language-hidden').addClass('language-active');
    $('.overlay_popup-hidden').removeClass('overlay_popup-hidden').addClass('overlay_popup-active');
});
$('#overlay_popup-hidden').click(function(){
    $('.language-active').removeClass('language-active').addClass('language-hidden');
    $('.overlay_popup-active').removeClass('overlay_popup-active').addClass('overlay_popup-hidden');
});