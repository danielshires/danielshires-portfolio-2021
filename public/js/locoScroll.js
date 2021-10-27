import LocomotiveScroll from 'locomotive-scroll';

export default function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        getSpeed: true,
        getDirection: true,
        inertia: 0.5,
        useKeyboard: true
    });
    console.log(scroll)

}