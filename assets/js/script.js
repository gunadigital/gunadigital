$(document).ready(function () {
    // Navbar Toggle
    $(".nav-toggle").click(function () {
        $(this).toggleClass("active");
        $(".navbar-nav").slideToggle("hidden");
    });

    // Swiper
    const swiper = new Swiper(".swiper", {
        speed: 300,
        loop: true,
        centeredSlides: true,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            // when window width is >= 640px
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },
        autoplay: {
            pauseOnMouseEnter: true,
        },
    });
});
