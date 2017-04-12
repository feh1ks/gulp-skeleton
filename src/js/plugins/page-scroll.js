// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: 'nav.navbar-default',
    offset: 70
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$('a.page-scroll').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});
