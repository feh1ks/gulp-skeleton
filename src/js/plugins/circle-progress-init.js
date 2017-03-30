// Circle progress bar
var el = $('.circle'),
    inited = false;

el.appear({ force_process: true });

el.on('appear', function() {
    if (!inited) {
        el.circleProgress({
            size: 160,
            startAngle: -Math.PI/2,
            thickness: 16,
        });
        inited = true;
    }
});

$('#circle-1').circleProgress({
    value: 0.9,
    fill: {
        color: "#30bae7"
    }
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
});

$('#circle-2').circleProgress({
    value: 0.75,
    fill: {
        color: "#d74680"
    }
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(75 * progress) + '<i>%</i>');
});

$('#circle-3').circleProgress({
    value: 0.7,
    fill: {
        color: "#15c7a8"
    }
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(70 * progress) + '<i>%</i>');
});

$('#circle-4').circleProgress({
    value: 0.85,
    fill: {
        color: "#eb7d4b"
    }
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(85 * progress) + '<i>%</i>');
});
