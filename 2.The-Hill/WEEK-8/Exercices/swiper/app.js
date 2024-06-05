var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.5,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});