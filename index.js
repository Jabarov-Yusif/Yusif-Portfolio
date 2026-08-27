// 1. Owl Carousel Initialization
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

// 2. Mobile Menu Toggle & Scroll Fix
$(".nav-bars").click(function () {
    $(".nav-menu").toggleClass("active");
    $("body").toggleClass("menu-open");
    
    // Scroll vəziyyətini yoxlayıb tənzimləyirik
    if ($("body").hasClass("menu-open")) {
        $("body").css("overflow", "hidden");
    } else {
        $("body").css("overflow", "auto");
    }
});

// Menyudakı linklərə və ya bağlama düyməsinə kliklədikdə menyu bağlanır və scroll bərpa olunur
$(".close-menu, .nav-menu a").click(function () {
    $(".nav-menu").removeClass("active");
    $("body").removeClass("menu-open");
    $("body").css("overflow", "auto"); // Scroll-u birbaşa aktivləşdiririk
});

// 3. Dark Mode Toggle & Icon Switch
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

// 4. Header Shrink on Scroll
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
