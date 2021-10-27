export default function () {
    let i = 0

    menuTag.addEventListener("click", function () {
        // If menu counter is 0
        if (i === 0) {
            // Position
            navCenter.style.display = "flex"
            navRight.style.display = "flex"
            // Header
            headerTag.style.height = "100vh"

            // Nav
            navBar.style.height = "100%"
            navBar.classList.add("bgDark")
            navBrand.classList.add("prevent")
            navBrand.classList.add("textLight")
            navLink.forEach(i => {
                i.classList.add("prevent")
                i.classList.add("textLight")
            });
            // Menu Icons
            menuIconI.classList.add("gg-close")
            menuIconI.classList.remove("gg-menu-right")

            // Social Icons
            socialImgGithub.src = githubWhite
            socialImgLinkedin.src = linkedInWhite
            socialImgEmail.src = emailWhite
            // Variable
            i = 1
        } else {
            console.log("Menu click is off")
            // Position
            // bodyTag.style.position = "relative"
            navCenter.style.display = "none"
            navRight.style.display = "none"
            navBar.style.height = "auto"
            // Header
            headerTag.style.height = "auto"
            // Nav
            navBrand.classList.remove("prevent")
            navBar.classList.remove("bgDark")
            navBrand.classList.remove("textLight")
            navBrand.classList.add("textDark")

            navLink.forEach(i => {
                i.classList.remove("prevent")
                i.classList.remove("textLight")
            });
            // Menu Icons
            menuIconI.classList.remove("gg-close")
            menuIconI.classList.add("gg-menu-right")
            // Social Icons
            socialImgGithub.src = githubBlack
            socialImgLinkedin.src = linkedInBlack
            socialImgEmail.src = emailBlack
            // Variable
            i = 0
        }
    })
}