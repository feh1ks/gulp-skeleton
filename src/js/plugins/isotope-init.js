$(function(){
    var $container = $('#posts');

    $container.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('#filters').on( 'click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $('#filters a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({ filter: filterValue });
    });
});
