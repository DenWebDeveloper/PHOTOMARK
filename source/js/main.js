let swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    width: "1170",
    slidesPerGroup: 3,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let reviewsSlider = new Swiper('.reviews-slider', {
    slidesPerView: 2,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});