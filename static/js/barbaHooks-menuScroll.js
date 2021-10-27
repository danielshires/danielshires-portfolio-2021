import barba from '@barba/core';
import {
    darkScroll,
    lightScroll
} from "./header"
import menu from './menu'
import menuLight from './menuLight'
import menuDark from './menuDark'
import pageScroll from "./pageScroll"
import swiper from './swiper'


export const barbaFunction = function () {

    barba.hooks.enter((data) => {
        console.log('enter')


        const checkPage = function () {
            console.log("Check page runs")
            const checkIndex = function () {
                if (data.next.namespace == "index") {
                    console.log("Before once I'm home")
                    // Header and Menu
                    darkScroll()
                    // Functionality
                    pageScroll()
                    swiper()

                    // Page Position
                    const indexPagePos = () => {
                        console.log("Index and scrolling")
                        const pixels = window.pageYOffset
                        console.log(pixels)
                        if (pixels < 68) {
                            console.log("I'm below 68")
                            return new Promise(resolve => {
                                menuLight()
                                resolve()
                            })

                        } else {
                            console.log("I'm above 68")
                            return new Promise(resolve => {
                                menuDark()
                                resolve()
                            })
                        }
                    }

                    document.addEventListener("scroll", indexPagePos)
                    indexPagePos()
                }
                // If we're not on the homepage
                else {
                    console.log("Before once I'm not home")
                    // Header and Menu
                    lightScroll()
                    menu()
                    // Functionality
                    pageScroll()
                    swiper()

                    // Page Position
                    const otherPagePos = () => {
                        console.log("Not index and scrolling")
                        const pixels = window.pageYOffset
                        console.log(pixels)
                        if (pixels < 68) {
                            console.log("I'm below 68")
                            return new Promise(resolve => {
                                menuDark()
                                resolve()
                            })
                        } else {
                            console.log("I'm above 68")
                            return new Promise(resolve => {
                                menuDark()
                                resolve()
                            })
                        }
                    }

                    document.addEventListener("scroll", otherPagePos)
                    otherPagePos()
                }
            }
            checkIndex()
        }
        checkPage()
    })

    barba.hooks.beforeOnce((data) => {
        console.log('before once')

        const checkPage = function () {
            console.log("Check page runs")
            const checkIndex = function () {
                if (data.next.namespace == "index") {
                    console.log("Before once I'm home")
                    // Header and Menu
                    darkScroll()
                    // Functionality
                    pageScroll()
                    swiper()

                    // Page Position
                    const indexPagePos = () => {
                        console.log("Index and scrolling")
                        const pixels = window.pageYOffset
                        console.log(pixels)
                        if (pixels < 68) {
                            console.log("I'm below 68")
                            menuLight()
                        } else {
                            console.log("I'm above 68")
                            menuDark()
                        }
                    }

                    document.addEventListener("scroll", indexPagePos)
                    indexPagePos()
                }
                // If we're not on the homepage
                else {
                    console.log("Before once I'm not home")
                    // Header and Menu
                    lightScroll()
                    menu()
                    // Functionality
                    pageScroll()
                    swiper()

                    // Page Position
                    const otherPagePos = () => {
                        console.log("Not index and scrolling")
                        const pixels = window.pageYOffset
                        console.log(pixels)
                        if (pixels < 68) {
                            console.log("I'm below 68")
                            menuDark()
                        } else {
                            console.log("I'm above 68")
                            menuDark()
                        }
                    }

                    document.addEventListener("scroll", otherPagePos)
                    otherPagePos()
                }
            }
            checkIndex()
        }
        checkPage()
    })
}