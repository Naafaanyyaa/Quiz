
$(document).ready(function(){
    $('.main__slider').slick({
        arrows: true,
        dots:true,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 1000,
        easing: '_linear',
        initialSlide: 0,
        autoplay:false,
        autoplaySpeed: 10000,
        pauseOnHover: false,
        variableWidth:true,
        infinite: false,
        arrows:true,
        appendArrows: $('.main__arrows'),
        responsive:[
            {
                breakpoint: 1150,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 3}
            },{
                breakpoint: 880,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2}
            },{
                breakpoint: 610,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1}
            }
        ]
    });
    
});
