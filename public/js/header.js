import barba from '@barba/core';
import menuDark from './menu-dark';
import menuLight from './menu-light';
import pageScroll from './pageScroll';

export default function () {
 
    const headerLight = function () {
        headerTag.classList.remove("headerScrolledBGWhite")
        navBrand.classList.remove("headerScolledTextDark")
        navBrand.classList.add("headerScrolledTextLight")
        navLink.forEach(i => {
            i.classList.remove("headerScolledTextDark")
            i.classList.add("headerScrolledTextLight")
        });

        navButton.classList.remove("btn-tertiary")
        navButton.classList.add("btn-secondary")

        const socialImagesWhite = () => {
            socialImgGithub.src = githubWhite
            socialImgLinkedin.src = linkedInWhite

            socialLinkGithub.addEventListener("mouseover", function (i) {
                socialImgGithub.src = githubGradient
            })

            socialLinkGithub.addEventListener("mouseout", function (i) {
                socialImgGithub.src = githubWhite
            })

            socialLinkLinkedin.addEventListener("mouseover", function (i) {
                socialImgLinkedin.src = linkedInGradient
            })

            socialLinkLinkedin.addEventListener("mouseout", function (i) {
                socialImgLinkedin.src = linkedInWhite
            })
        }
        socialImagesWhite()
    }

    const headerDark = function () {
        const scrollClassDark = () => {
            headerTag.classList.add("headerScrolledBGWhite")
            navBrand.classList.remove("headerScrolledTextLight")
            navBrand.classList.add("headerScolledTextDark")
            navLink.forEach(i => {
                i.classList.remove("headerScrolledTextLight")
                i.classList.add("headerScolledTextDark")
            });
            navButton.classList.remove("btn-secondary")
            navButton.classList.add("btn-tertiary")
        }
        const socialImagesWhite = () => {
            socialImgGithub.src = githubBlack
            socialImgLinkedin.src = linkedInBlack

            socialLinkGithub.addEventListener("mouseover", function (i) {
                socialImgGithub.src = githubGradient
            })

            socialLinkGithub.addEventListener("mouseout", function (i) {
                socialImgGithub.src = githubBlack
            })

            socialLinkLinkedin.addEventListener("mouseover", function (i) {
                socialImgLinkedin.src = linkedInGradient
            })

            socialLinkLinkedin.addEventListener("mouseout", function (i) {
                socialImgLinkedin.src = linkedInBlack
            })
        }
        scrollClassDark()
        socialImagesWhite()
    }

    const darkScroll = function () {
        headerLight()
        document.addEventListener("scroll", function () {
            fadeBox()
        })
        window.onscroll = myScroll
        let counter = 0

        function myScroll() {
            if (counter == 0) {
                if (window.pageYOffset > 68) {
                    headerDark()
                    counter++
                }
            }
            if (counter == 1) {
                if (window.pageYOffset < 68) {
                    headerLight()
                    counter--
                }
            }
        }
    }

    const lightScroll = function () {
        headerDark()
        document.addEventListener("scroll", function () {
            fadeBox()
        })
        window.onscroll = myScroll
        let counter = 0

        function myScroll() {
            if (counter == 0) {
                if (window.pageYOffset > 68) {
                    headerDark()
                    counter++
                }
            }
            if (counter == 1) {
                if (window.pageYOffset < 68) {
                    headerDark()
                    counter--
                }
            }
        }
    }

    const fadeBox = function () {
        const pixels = window.pageYOffset
        const alpha = Math.min(pixels / 200, 0.25)

        headerTag.style.boxShadow = `0 0 10px rgba(0, 0, 0, ${alpha})`
    }

    barba.hooks.enter((data) => {
        console.log('enter')
        if (data.next.namespace == "index") {
            darkScroll()
            menuDark()
            pageScroll()
        } else {
            lightScroll()
            menuLight()
            pageScroll()
        } 
    })

    barba.hooks.before((data) => {
        console.log('before')
        if (data.next.namespace == "index") {
            darkScroll()
            menuDark()
            pageScroll()
        } else {
            lightScroll()
            menuLight()
            pageScroll()
        }
    })

    barba.hooks.beforeOnce((data) => {
        console.log('before once')
        if (data.next.namespace == "index") {
            darkScroll()
            menuDark()
            pageScroll()
        } else {
            lightScroll()
            menuLight()
            pageScroll()
        }
    })
}