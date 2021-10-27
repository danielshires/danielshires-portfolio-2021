export default function () {
    let i = 0

    menuTag.addEventListener("click", function () {
        // If menu counter is 0
        console.log("Menu Light Click")
        if (i === 0) {
            console.log("Menu click is on")
            // Position
            // bodyTag.style.position = "fixed"
            navCenter.style.display = "flex"
            navRight.style.display = "flex"
            // Header
            headerTag.style.height = "100vh"
            headerTag.classList.add("headerScrolledBGDark")

            // Nav
            navBar.style.height = "75%"
            navBrand.classList.add("prevent")
            navBrand.classList.remove("headerScolledTextDark")
            navBrand.classList.add("headerScrolledTextLight")
            navLink.forEach(i => {
                i.classList.add("prevent")
                i.classList.remove("headerScolledTextDark")
                i.classList.add("headerScrolledTextLight")
            });
            // Menu Icons
            menuIconI.classList.add("gg-close")
            menuIconI.classList.remove("gg-menu-right")
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
            headerTag.classList.remove("headerScrolledBGDark")
            // Nav
            navBrand.classList.remove("prevent")
            navBrand.classList.remove("headerScolledTextDark")
            navBrand.classList.add("headerScrolledTextLight")
            navLink.forEach(i => {
                i.classList.remove("prevent")
                i.classList.remove("headerScolledTextDark")
                i.classList.add("headerScrolledTextLight")
            });
            // Menu Icons
            menuIconI.classList.remove("gg-close")
            menuIconI.classList.add("gg-menu-right")
            // Variable
            i = 0
        }
    })
}