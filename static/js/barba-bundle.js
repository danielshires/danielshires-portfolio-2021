import barba from '@barba/core';
import barbaCss from '@barba/css';

export default function () {
    const mainTag = document.querySelector("main")

    barba.use(barbaCss)

    barba.init({

        prevent: ({
            el
        }) => el.classList && el.classList.contains('prevent'),

        debug: true,
        transitions: [

            {
                name: "fade",

                leave() {

                },
                enter() {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    })
                },
                beforeEnter() {
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

                },
                afterLeave() {

                }
            }
        ]

    })
}