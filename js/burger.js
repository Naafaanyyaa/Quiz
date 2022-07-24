$(".header__menu-icon").click(function(){
    $(this).toggleClass("active");
    $(".navigation-menu").toggleClass("active");
    $(".header__menu-icon i").toggleClass("fa-times");
});