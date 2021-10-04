// When I scroll down the page, at a certain point
// Add a class to make the header white

const headerTag = document.querySelector("header")
const navBrand = document.querySelector("a.navbar-brand")
const navBrandLink = document.querySelectorAll("a.nav-link")
const navButtonPrimary = document.querySelector("a.btn-primary")
const sections = document.querySelectorAll("section")

const toggleHeader = function () {

    const pixels = window.pageYOffset

    if (pixels > 68) {

        headerTag.classList.add("scrolled")
        navBrand.classList.add("scrolledColor")
        navBrandLink.forEach(i => {
            i.classList.add("scrolledColor")
        });

    } else {
        headerTag.classList.remove("scrolled")
        navBrand.classList.remove("scrolledColor")
        navBrandLink.forEach(i => {
            i.classList.remove("scrolledColor")
        });

    }
}


const fadeBox = function () {

    const pixels = window.pageYOffset
    const alpha = Math.min(pixels / 1500, 0.25)


    headerTag.style.boxShadow = `0 0 10px rgba(0, 0, 0, ${alpha})`

}

fadeBox()
toggleHeader()

document.addEventListener("scroll", function () {
    toggleHeader()
    fadeBox()
})