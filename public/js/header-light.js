// When I scroll down the page, at a certain point
// Add a class to make the header white

const navBrandLight = document.querySelector("a.navbar-brand-light")

const toggleHeaderLight = function () {

    const pixels = window.pageYOffset

    if (pixels > 68) {

        headerTag.classList.add("scrolled")
        navBrandLight.classList.add("scrolledColor")

    } else {
        headerTag.classList.remove("scrolled")
        navBrandLight.classList.remove("scrolledColor")
    }

}

toggleHeaderLight()
fadeBox()

document.addEventListener("scroll", function () {

    toggleHeaderLight()
    fadeBox()
})