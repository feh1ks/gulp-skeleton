$('.fotorama').fotorama({
    width: 700,
    maxwidth: '100%',
    height: 200,
    maxheight: 400,
    ratio: 16/9,
    allowfullscreen: true,
    nav: 'thumbs' or 'dots' or false,
    navposition: 'top' or 'bottom',
    thumbwidth: 120,
    thumbheight: 60,
    loop: true or false,
    allowfullscreen: true or false or 'native',
    fit: 'contain' or 'cover' or 'scaledown' or 'none', // How to fit an image into a fotorama
    transition: 'slide' or 'crossfade' or 'dissolve',
    arrows: true or false or 'always', // Turns on navigation arrows over the frames
    click: true or false, // Moving between frames by clicking
    swipe: true or false // Moving between frames by swiping
});
