gsap.registerPlugin(ScrollTrigger);

animationFunc = function () {
    var ani = gsap.timeline();

    ani.from("nav.nav-animation", {
        scrollTrigger: "nav.nav-animation",
        delay: 1,
        duration: 0.5,
        opacity: 0,
        y: -10,
        ease: "power4.out"
    });

    ani.from(".hero-animation", {
        scrollTrigger: ".hero-animation",
        duration: 0.5,
        delay: 0,
        opacity: 0,
        y: 30,
        ease: "power4.out"
    });

    return animationFunc
}


fadeUpFunction = function () {
    var sectionTitle = gsap.timeline();

    gsap.from(".fade-up", {
        scrollTrigger: {
            trigger: ".fade-up",
            start: "20px 80%",
            end: "",
            toggleActions: "restart none none reset",
            markers: false,
        },
        duration: 3,
        opacity: 0,
        y: 30,
        ease: "power4.out"
    })

    gsap.from(".fade-up-cards", {
        scrollTrigger: {
            trigger: ".fade-up-cards",
            start: "0px 80%",
            end: "",
            toggleActions: "restart none none reset",
            markers: false,
        },
        duration: 3,
        opacity: 0,
        y: 30,
        ease: "power4.out"
    })

    gsap.from(".fade-up-portfolio", {
        scrollTrigger: {
            trigger: ".fade-up-portfolio",
            start: "20px 80%",
            end: "",
            toggleActions: "restart none none reset",
            markers: false,
        },
        duration: 3,
        opacity: 0,
        y: 30,
        ease: "power4.out"
    })

    gsap.from(".fade-up-cta", {
        scrollTrigger: {
            trigger: ".fade-up-cta",
            start: "20px 80%",
            end: "",
            toggleActions: "restart none none reset",
            markers: false,
            scrub: true,
        },
        duration: 3,
        opacity: 0,
        x: -30,
        ease: "power4.out"
    })

    gsap.from(".fade-up-tesimonial", {
        scrollTrigger: {
            trigger: ".fade-up-tesimonial",
            start: "20px 80%",
            end: "",
            toggleActions: "restart none none reset",
            markers: false,
        },
        duration: 3,
        opacity: 0,
        y: 30,
        ease: "power4.out"
    })

    gsap.from(".fade-up-services", {
        scrollTrigger: {
            trigger: ".fade-up-services",
            start: "-300px 80%",
            end: "",
            toggleActions: "restart none none reset",
            markers: false,
        },
        duration: 3,
        opacity: 0,
        y: 30,
        ease: "power4.out"
    })

    gsap.from(".fade-up-testimonial-made", {
        scrollTrigger: {
            trigger: ".fade-up-testimonial-made",
            start: "20px 80%",
            end: "",
            toggleActions: "restart none none reset",
            markers: false,
        },
        duration: 3,
        opacity: 0,
        y: 30,
        ease: "power4.out"
    })

    gsap.from(".fade-up-job-title", {
        scrollTrigger: {
            trigger: ".fade-up-job-title",
            start: "20px 80%",
            end: "",
            toggleActions: "restart none none reset",
            markers: false,
        },
        duration: 3,
        opacity: 0,
        y: 30,
        ease: "power4.out"
    })

    gsap.from(".fade-up-job-list", {
        scrollTrigger: {
            trigger: ".fade-up-job-list",
            start: "20px 80%",
            end: "",
            toggleActions: "restart none none reset",
            markers: false,
        },
        duration: 3,
        opacity: 0,
        y: 30,
        ease: "power4.out"
    })

    gsap.from(".fade-up-footer", {
        scrollTrigger: {
            trigger: ".fade-up-footer",
            start: "20px 80%",
            end: "",
            toggleActions: "restart none none reset",
            markers: false,
        },
        duration: 3,
        opacity: 0,
        y: 30,
        ease: "power4.out"
    })

}


window.onload = animationFunc();

window.onload = fadeUpFunction();