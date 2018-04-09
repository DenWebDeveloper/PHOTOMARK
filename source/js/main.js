new Swiper('.main-slider__container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    initialSlide: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

new Swiper('.reviews-slider', {
    slidesPerView: 2,
    freeMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is <= 900px
        900: {
            slidesPerView: 1,
        }
    }
});