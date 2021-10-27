export const headerSocialHover = function () {
    const socialImagesBlack = () => {
        socialImgGithub.src = githubBlack
        socialImgLinkedin.src = linkedInBlack
        socialImgEmail.src = emailBlack

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

        socialLinkEmail.addEventListener("mouseover", function (i) {
            socialImgEmail.src = emailGradient
        })

        socialLinkEmail.addEventListener("mouseout", function (i) {
            socialImgEmail.src = emailBlack
        })
    }
    const fadeBox = function () {
        const pixels = window.pageYOffset
        const alpha = Math.min(pixels / 200, 0.25)
        headerTag.style.boxShadow = `0 0 10px rgba(0, 0, 0, ${alpha})`
    }

    socialImagesBlack()
    fadeBox()
}