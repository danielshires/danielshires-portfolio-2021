import barba from '@barba/core';

export default function () {

    // Elements
    const bodyTag = document.querySelector("body")
    const headerTag = document.querySelector("header")
    const sections = document.querySelectorAll("section")
    const mainTag = document.querySelector("main")

    // Classes
    const navBar = headerTag.querySelector(".navbar")
    const navBrand = headerTag.querySelector(".navbar-brand")
    const navLink = headerTag.querySelectorAll(".nav-link")
    const navButton = headerTag.querySelector(".btn")
    const socialLink = headerTag.querySelectorAll(".social-link")

    const menuItem = headerTag.querySelector('.menu-item')
    const navCenter = headerTag.querySelector('.nav-center')
    const navRight = headerTag.querySelector('.nav-right')

    // Social Links
    const socialLinkGithub = headerTag.querySelector("a.github")
    const socialLinkLinkedin = headerTag.querySelector("a.linkedin")
    const socialImgGithub = headerTag.querySelector("a.github img")
    const socialImgLinkedin = headerTag.querySelector("a.linkedin img")

    // Images
    const linkedInWhite = "/images/icons/11-linkedin-white.svg"
    const linkedInGradient = "/images/icons/11-linkedin-gradient.svg"
    const linkedInBlack = "/images/icons/11-linkedin.svg"

    const githubWhite = "/images/icons/41-github-rounded-white.svg"
    const githubGradient = "/images/icons/41-github-rounded-gradient.svg"
    const githubBlack = "/images/icons/41-github-rounded.svg"


    barba.hooks.beforeEnter((data) => {

        const currentNamespace = data.next.namespace

        const toggleHeader = function () {
            let pixels = window.pageYOffset

            if (currentNamespace == "index") {
                if (pixels > 68) {
                    indexScrolled()
                } else {
                    indexNotScolled()
                }
            } else {
                console.log("not on homepage")
                if (pixels > 68) {
                    indexScrolled()

                } else {
                    indexScrolled()
                }
            }

        }

        const fadeBox = function () {

            const pixels = window.pageYOffset
            const alpha = Math.min(pixels / 1500, 0.25)
            headerTag.style.boxShadow = `0 0 10px rgba(0, 0, 0, ${alpha})`

        }

        const toggleMenu = function () {
            i = 0
            menuItem.addEventListener("click", function () {
                if (i === 0) {
                    navCenter.style.display = "flex"
                    navRight.style.display = "flex"
                    navBar.style.backgroundColor = "var(--primary-text-color)"
                    console.log("menu open")
                    i = 1
                    console.log(i)
                    headerTag.classList.remove("scrolled")
                    navBrand.classList.remove("scrolledColor")
                    navLink.forEach(i => {
                        i.classList.remove("scrolledColor")
                    });
                    headerTag.style.height = "100vh"
                    bodyTag.style.height = "100vh"
                    navBar.style.height = "100%"

                } else {
                    navCenter.style.display = "none"
                    navRight.style.display = "none"
                    navBar.style.backgroundColor = "transparent"
                    console.log("menu closed")
                    i = 0
                    console.log(i)
                    headerTag.classList.add("scrolled")
                    navBrand.classList.add("scrolledColor")
                    navLink.forEach(i => {
                        i.classList.add("scrolledColor")
                    });
                    headerTag.style.height = "auto"
                    navBar.style.height = "auto"
                    bodyTag.style.height = "auto"

                }
            })
        }

        const indexStyle = function () {
            var executed = false
            if (currentNamespace == "index") {
                navBrand.classList.add("nav-light")
                navLink.forEach(i => {
                    i.classList.add("nav-light")
                });
                headerTag.dataset.home = true;
                socialImgGithub.src = githubWhite
                socialImgLinkedin.src = linkedInWhite
                navButton.classList.remove("btn-tertiary")
                navButton.classList.add("btn-secondary")
                executed = true
                console.log("Index menu runs once")
            } else {
                navBrand.classList.remove("nav-light")
                navLink.forEach(i => {
                    i.classList.remove("nav-light")
                });
                headerTag.dataset.home = false
                socialImgGithub.src = githubBlack
                socialImgLinkedin.src = linkedInBlack
                navButton.classList.remove("btn-secondary")
                navButton.classList.add("btn-tertiary")
                executed = false
                console.log("Index menu doesn't run")
            }
        }

        const indexScrolled = function () {
            headerTag.classList.add("scrolled")
            navBrand.classList.add("scrolledColor")
            navLink.forEach(i => {
                i.classList.add("scrolledColor")
            });
            navButton.classList.add("btn-tertiary")
            navButton.classList.remove("btn-secondary")

            socialImgGithub.src = githubBlack
            socialImgLinkedin.src = linkedInBlack

            socialLinkGithub.addEventListener("mouseover", function () {
                socialImgGithub.src = githubGradient
            })
            socialLinkGithub.addEventListener("mouseout", function () {
                socialImgGithub.src = githubBlack
            })
            socialLinkLinkedin.addEventListener("mouseover", function () {
                socialImgLinkedin.src = linkedInGradient
            })
            socialLinkLinkedin.addEventListener("mouseout", function () {
                socialImgLinkedin.src = linkedInBlack
            })
        }
        const indexNotScolled = function () {
            headerTag.classList.remove("scrolled")
            navBrand.classList.remove("scrolledColor")
            navLink.forEach(i => {
                i.classList.remove("scrolledColor")
            });
            navButton.classList.remove("btn-tertiary")
            navButton.classList.add("btn-secondary")

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

        const pageHeaderScroll = function () {
            window.onscroll = myScroll
            let counter = 0

            function myScroll() {
                if (currentNamespace == "index") {
                    if (counter == 0) {
                        if (window.pageYOffset > 68) {
                            indexScrolled()
                            console.log("change images to light")
                            counter++
                        } else {}
                    }
                    if (counter == 1) {
                        if (window.pageYOffset < 68) {
                            indexNotScolled()
                            console.log("change images to dark")
                            counter--
                        } else {}
                    }
                } else {
                    if (counter == 0) {
                        if (window.pageYOffset > 68) {
                            indexScrolled()
                            console.log("change images to light")
                            counter++
                        } else {}
                    }
                    if (counter == 1) {
                        if (window.pageYOffset < 68) {
                            indexScrolled()
                            console.log("change images to dark")
                            counter--
                        } else {}
                    }
                }

            }
        }

        pageHeaderScroll()
        toggleHeader()
        // fadeBox()
        indexStyle()
        toggleMenu()


        // document.addEventListener("scroll", function () {

        //     function pageScroll() {}
        //     let scrolling = true;
        //     setInterval(() => {
        //         if (scrolling) {
        //             // toggleHeader()
        //             scrolling = false;
        //         }
        //     }, 300);

        // })

    });
}