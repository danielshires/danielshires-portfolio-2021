export const headerLight = function () {
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

export const headerDark = function () {
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
    const socialImagesBlack = () => {
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
    socialImagesBlack()
}

export const darkScroll = function () {
    let counter = 0
    headerLight()
    window.onscroll = myScroll

    function myScroll() {
        fadeBox()
        if (counter == 0) {
            if (window.scrollY > 68) {
                headerDark()
                counter++
            }
        }
        if (counter == 1) {
            if (window.scrollY < 68) {
                headerLight()
                counter--
            }
        }
    }

}

export const lightScroll = function () {
    let counter = 0
    headerDark()
    window.onscroll = myScroll

    function myScroll() {
        fadeBox()
        if (counter == 0) {
            if (window.scrollY > 68) {
                headerDark()
                counter++
            }
        }
        if (counter == 1) {
            if (window.scrollY < 68) {
                headerDark()
                counter--
            }
        }
    }

}

export const fadeBox = function () {
    const pixels = window.pageYOffset
    const alpha = Math.min(pixels / 200, 0.25)

    headerTag.style.boxShadow = `0 0 10px rgba(0, 0, 0, ${alpha})`
}