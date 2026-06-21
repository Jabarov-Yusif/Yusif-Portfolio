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
        1000: {
            items: 2,
            nav: false
        }
    }
});

$(".nav-bars").click(function () {
    $(".nav-menu").slideToggle();
});

$(".nav-menu a").click(function () {
    $(".nav-menu").slideUp();
});

$(".theme-btn").click(function () {

    $("body").toggleClass("dark");

    if ($("body").hasClass("dark")) {
        $(".theme-btn i")
            .removeClass("fa-moon")
            .addClass("fa-sun");
    } else {
        $(".theme-btn i")
            .removeClass("fa-sun")
            .addClass("fa-moon");
    }

});

$(window).scroll(function () {

    if ($(window).scrollTop() > 50) {
        $("header").css({
            padding: "10px 20px"
        });
    } else {
        $("header").css({
            padding: "20px"
        });
    }

});





$(".nav-bars").click(function(){

    $(".nav-menu").addClass("active");
    $("body").addClass("menu-open");

});

$(".close-menu").click(function(){

    $(".nav-menu").removeClass("active");
    $("body").removeClass("menu-open");

});

$(".nav-menu a").click(function(){

    $(".nav-menu").removeClass("active");
    $("body").removeClass("menu-open");

});
