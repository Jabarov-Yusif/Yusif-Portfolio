

$('.carusel').owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        500: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 2,
            nav: false
        },
    }
});


$(".nav-bars").click(function () {
    $(".nav-menu").slideToggle()

})


