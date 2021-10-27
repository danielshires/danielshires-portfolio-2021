import Swiper from 'swiper/bundle';

export default function () {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        dynamicBullets: true,
        dynamicMainBullets: 3,
        clickable: true,
        // effect: 'fade',
        // fadeEffect: {
        //     crossFade: true
        // },
        mousewheel: {
            invert: false,
            forceToAxis: true,
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

    });
}