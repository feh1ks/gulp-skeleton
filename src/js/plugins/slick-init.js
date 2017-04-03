$('.slick-slider').slick({
    infinite: true,
    slidesToShow: 3,
    dots: true,
    speed: 300,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '60px',
    arrows: false,
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 2000,
    fade: false,
    cssEase: 'linear',
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    }]
});

// Synced Sliders
/*$('.slider-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});

$('.slider-bot').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
});*/
