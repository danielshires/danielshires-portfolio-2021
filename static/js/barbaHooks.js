import barba from '@barba/core';
import {
    headerSocialHover
} from "./header"
import menu from './menu'
import pageScroll from "./pageScroll"
import swiper from './swiper'


export const barbaFunction = function () {

    barba.hooks.enter((data) => {
        console.log('enter')
        menu()
        headerSocialHover()
        pageScroll()
        swiper()
    })

    barba.hooks.beforeOnce((data) => {
        console.log('before once')
        menu()
        headerSocialHover()
        pageScroll()
        swiper()
    })
}