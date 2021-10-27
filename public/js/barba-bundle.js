import barba from '@barba/core';
import barbaCss from '@barba/css';

export default function () {    
    const mainTag = document.querySelector("main")
    const checkMain = () => {
      
    }
    barba.use(barbaCss)


    barba.init({
        
        prevent: ({ el }) => el.classList && el.classList.contains('prevent'),

        transitions: [

            {
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
                sync: true,
                leave() {},
                enter() {}
            }

        ],

        views: [

            {
                namespace: 'index',

                leave() {
                    navBrand.classList.add("navBrand_light")
                    navBrandLink.forEach(i => {
                        i.classList.add("navBrand_light")
                    });

                },
                enter() {
                    navBrand.classList.remove("navBrand_light")
                    navBrandLink.forEach(i => {
                        i.classList.remove("navBrand_light")
                    });

                }
            }
        ]

    })
}