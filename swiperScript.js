const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 25,
    autoplay: {
        delay:1,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },
    speed: 10000,
    allowTouchMove: true,
    pagination: false,
    slidesPerView: 1,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        575: {
            slidesPerView: 1
        },
        767: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        }
    }
});
