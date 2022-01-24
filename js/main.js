$('.cap-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    animateIn: 'flipInX'
});
$('.base-carousel-3').owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    items: 3,
    responsive: {
        0: {
            items: 1
        },
        550: {
            items: 2
        },
        1024: {
            items: 3
        }
    }
});
$('.base-carousel-6').owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    items: 6,
    responsive: {
        0: {
            items: 2
        },
        500: {
            items: 3
        },
        870: {
            items: 4
        },
        1024: {
            items: 5
        }
    }
});

$('.gallery-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    items: 3,
    responsive: {
        0: {
            items: 1
        },
        550: {
            items: 2
        },
        650: {
            items: 3
        }
    }
});