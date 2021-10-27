export default function () {
    let i = 0
    menuTag.addEventListener("click", function () {
        if (i === 0) {
            navCenter.style.display = "flex"
            navRight.style.display = "flex"
            bodyTag.style.height = "100vh"
            bodyTag.style.overflow = "hidden"
            headerTag.style.height = "100vh"
            navBar.style.height = "75%"

            headerTag.classList.remove("headerScrolledBGWhite")
            headerTag.classList.add("headerScrolledBGDark")
            navBrand.classList.remove("headerScolledTextDark")
            navBrand.classList.add("headerScrolledTextLight")
            navBrand.classList.add("prevent")
            navLink.forEach(i => {
                i.classList.remove("headerScolledTextDark")
                i.classList.add("headerScrolledTextLight")
                i.classList.add("prevent")
            });

            menuIconI.classList.add("gg-close")
            menuIconI.classList.remove("gg-menu-right")

            console.log("menu open dark")
            i = 1
            console.log(i)


        } else {
            navCenter.style.display = "none"
            navRight.style.display = "none"
            bodyTag.style.height = "auto"
            bodyTag.style.overflow = "initial"
            navBar.style.height ="auto"
            headerTag.style.height = "auto"
            navBrand.classList.remove("headerScolledTextDark")
            navBrand.classList.add("headerScrolledTextLight")
            headerTag.classList.remove("headerScrolledBGDark")
            navBrand.classList.remove("prevent")
            navLink.forEach(i => {
                i.classList.remove("headerScolledTextDark")
                i.classList.remove("headerScrolledTextLight")
                i.classList.remove("prevent")
            });

            menuIconI.classList.remove("gg-close")
            menuIconI.classList.add("gg-menu-right")

            console.log("menu closed dark")
            i = 0
            console.log(i)
        }
    })
}