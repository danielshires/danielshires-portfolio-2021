barba.use(barbaCss)

barba.init({


    transitions: [{
 
            name: "fade",
            beforeEnter({
                current,
                next,
                trigger
            }) {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })

            },



        }

    ],

    views: [

        {
            namespace: 'index',

            beforeEnter() {
                console.log("before enter")

            },
            afterLeave() {
                console.log(indexStyle())

            }
        }
    ]

})