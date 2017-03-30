$(".owl-carousel").owlCarousel({

    // Options
    loop:           false, // Inifnity loop. Duplicate last and first items to get loop illusion
    items:          3,     // The number of items you want to see on the screen
    margin:         10,    // margin-right(px) on item
    slideBy:        1,     // Navigation slide by x. 'page' string can be set to slide by page

    nav:            true,  // Show next/prev buttons
    dots:           true,  // Show dots navigation
    navText:        ["лево","право"], // HTML allowed

    merge:          false, // Merge items. Looking for data-merge='{number}' inside item
    mergeFit:       true,  // Fit merged items if screen is smaller than items value


    pullDrag:       true,  // Stage pull to edge
    freeDrag:       false, // Item pull to edge.
    mouseDrag:      true,  // Mouse drag enabled
    touchDrag:      true,  // Touch drag enabled

    dotsEach:       false, // Show dots each x item
    autoWidth:      false, // Set non grid content. Try using width style on divs
    navRewind:      true,  // Go to first/last
    stagePadding:   0,     // Padding left and right on stage (can see neighbours)

    autoplay:       false, // Autoplay.
    autoplayTimeout: 5000, // Autoplay interval timeout

    navContainer: false,   // Set your own container for nav
    dotsContainer: false,  // Set your own container for nav

    responsive:{
        480:{  // Phone
            items:2,
            nav:true
        },
        768:{  // Tablet
            items:2,
            nav:false
        },
        992:{  // Desktop
            items:3,
            nav:false
        },
        1200:{ // Desktop-lg
            items:4,
            nav:true,
            loop:false
        }
    }

});
