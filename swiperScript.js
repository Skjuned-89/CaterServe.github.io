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
    slidesPerView: 3
});
