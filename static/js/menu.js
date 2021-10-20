export default function () {
    let i = 0
    menuTag.addEventListener("click", function () {
        console.log("click")
        if (i === 0) {
            navCenter.style.display = "flex"
            navRight.style.display = "flex"
            navBar.style.height ="100vh"

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

            console.log("menu open")
            i = 1
            console.log(i)


        } else {
            navCenter.style.display = "none"
            navRight.style.display = "none"
            navBar.style.height ="auto"

            headerTag.classList.remove("headerScrolledBGDark")
            navBrand.classList.remove("headerScolledTextDark")
            navBrand.classList.remove("headerScrolledTextLight")
            navBrand.classList.remove("prevent")
            navLink.forEach(i => {
                i.classList.remove("headerScolledTextDark")
                i.classList.remove("headerScrolledTextLight")
                i.classList.remove("prevent")
            });



            console.log("menu closed")
            i = 0
            console.log(i)
        }
    })
}