document.addEventListener("scroll", function () {

    const topViewport = window.pageYOffset
    const midViewport = topViewport + (window.innerHeight / 2)

    sections.forEach(section => {

        const topSection = section.offsetTop
        const midSection = topSection + (section.offsetHeight / 2)

        const distanceToSection = midViewport - midSection
        // console.log(topSection)
        // console.log(midSection)
        // console.log(distanceToSection)

        const parralaxTags = section.querySelectorAll(`[data-parallax]`)

        // Loop over each parallax tax
        parralaxTags.forEach(tag => {

            const speed = parseFloat(tag.getAttribute(`data-parallax`))

            // If you're turning something into a number, use parsefloat to turn it into a decimal
            // Converts a string into a floating point number

            tag.style.transform = `translate(0, ${distanceToSection * speed}px)`

        })



    })
})