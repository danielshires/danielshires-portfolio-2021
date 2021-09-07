if ("ontouchstart" in document.documentElement)
{
    /** skew scroll **/

    const section = document.querySelector(".inner-wrapper");
    let currentPixel = window.pageYOffset

//looper keeps running and keeps track of where the new pixel is
    const looper = function () {
        const newPixel = window.pageYOffset;
        const diff = newPixel - currentPixel
        const speed = diff * 0.20;

        section.style.transform = "skewY(" + speed + "deg)"


        currentPixel = newPixel;

        requestAnimationFrame(looper)
    }

    looper();

    // Animate in
    ;(function($, win) {
    $.fn.inViewport = function(cb) {
        return this.each(function(i,el){
            function visPx(){
                var H = $(this).height(),
                    r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
                return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
            } visPx();
            $(win).on("resize scroll", visPx);
        });
    };
}(jQuery, window));

    $(".animate-in").inViewport(function(px){
        if(px) {
            $(this).addClass("fade-in") ;
        } else {
        }
    });


    /** Intro **/
    TweenLite.set('.intro-line-1, .intro-line-2, .intro-line-3, .intro-line-4',{y:'101%'})
    TweenLite.set('.first-header, .second-header',{opacity:'0'})

    var lines = new TimelineMax()
        .to('.intro-line-1',1.0,{y:'0%', ease: "circ.inOut"}, "+=0.1")
        .to('.intro-line-2',1.0,{y:'0%', ease: "circ.inOut"}, "-=0.7")
        .to('.intro-line-3',1.0,{y:'0%', ease: "circ.inOut"}, "-=0.7")
        .to('.intro-line-4',1.0,{y:'0%', ease: "circ.inOut"}, "-=0.7")
        .to('.first-header, .second-header',1.0,{opacity:'1', ease: "inout"}, "+=0.7")


    /** Smooth scroll **/

    var html = document.documentElement;
    var body = document.body;

    var scroller = {
        target: document.querySelector("#scroll-container"),
        ease: 0.10, // <= scroll speed / lower is slower
        endY: 0,
        y: 0,
        resizeRequest: 1,
        scrollRequest: 0,
    };

    var requestId = null;

    TweenLite.set(scroller.target, {
        rotation: 0.01,
        force3D: true
    });

    window.addEventListener("load", onLoad);

    function onLoad() {
        updateScroller();
        window.focus();
        window.addEventListener("resize", onResize);
        document.addEventListener("scroll", onScroll);
    }

    function updateScroller() {

        var resized = scroller.resizeRequest > 0;

        if (resized) {
            var height = scroller.target.clientHeight;
            body.style.height = height + "px";
            scroller.resizeRequest = 0;
        }

        var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

        scroller.endY = scrollY;
        scroller.y += (scrollY - scroller.y) * scroller.ease;

        if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
            scroller.y = scrollY;
            scroller.scrollRequest = 0;
        }

        TweenLite.set(scroller.target, {
            y: -scroller.y
        });

        requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
    }

    function onScroll() {
        scroller.scrollRequest++;
        if (!requestId) {
            requestId = requestAnimationFrame(updateScroller);
        }
    }

    function onResize() {
        scroller.resizeRequest++;
        if (!requestId) {
            requestId = requestAnimationFrame(updateScroller);
        }
    }

    $(document).ready(function () {

        /** Dribbble hover **/
        $( "a.dribbble" ).mouseover(function() {
            $('body').data('original-color', $(this).css('background-color')).css('background-color','#EA4C89');
        }).mouseleave(function() {
        });

        /** Linkedin hover **/
        $( "a.linkedin" ).mouseover(function() {
            $('body').data('original-color', $(this).css('background-color')).css('background-color','#1DA1F2');
        }).mouseleave(function() {
        });

        /** Instagram hover **/
        $( "a.instagram" ).mouseover(function() {
            $('body').data('original-color', $(this).css('background-color')).css('background-color','#833AB4');
        }).mouseleave(function() {
        });

        /** Twitter hover **/
        $( "a.twitter" ).mouseover(function() {
            $('body').data('original-color', $(this).css('background-color')).css('background-color','#1DA1F2');
        }).mouseleave(function() {
        });

        /** Mosue leave **/
        $("a.dribbble, a.linkedin, a.instagram, a.twitter").mouseleave(function()
        {
            $('body').css("background-color", $('body').data("original-color"));
        });
    });
}
else
    {

// Animate in
    ;(function($, win) {
    $.fn.inViewport = function(cb) {
        return this.each(function(i,el){
            function visPx(){
                var H = $(this).height(),
                    r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
                return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
            } visPx();
            $(win).on("resize scroll", visPx);
        });
    };
}(jQuery, window));

    $(".animate-in").inViewport(function(px){
        if(px) {
            $(this).addClass("fade-in") ;
        } else {
        }
    });


    /** Intro **/
    TweenLite.set('.intro-line-1, .intro-line-2, .intro-line-3, .intro-line-4',{y:'101%'})
    TweenLite.set('.first-header, .second-header',{opacity:'0'})

    var lines = new TimelineMax()
        .to('.intro-line-1',1.0,{y:'0%', ease: "circ.inOut"}, "+=0.1")
        .to('.intro-line-2',1.0,{y:'0%', ease: "circ.inOut"}, "-=0.7")
        .to('.intro-line-3',1.0,{y:'0%', ease: "circ.inOut"}, "-=0.7")
        .to('.intro-line-4',1.0,{y:'0%', ease: "circ.inOut"}, "-=0.7")
        .to('.first-header, .second-header',1.0,{opacity:'1', ease: "inout"}, "+=0.7")



    /** Smooth scroll **/

    var html = document.documentElement;
    var body = document.body;

    var scroller = {
        target: document.querySelector("#scroll-container"),
        ease: 0.10, // <= scroll speed / lower is slower
        endY: 0,
        y: 0,
        resizeRequest: 1,
        scrollRequest: 0,
    };

    var requestId = null;

    TweenLite.set(scroller.target, {
        rotation: 0.01,
        force3D: true
    });

    window.addEventListener("load", onLoad);

    function onLoad() {
        updateScroller();
        window.focus();
        window.addEventListener("resize", onResize);
        document.addEventListener("scroll", onScroll);
    }

    function updateScroller() {

        var resized = scroller.resizeRequest > 0;

        if (resized) {
            var height = scroller.target.clientHeight;
            body.style.height = height + "px";
            scroller.resizeRequest = 0;
        }

        var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

        scroller.endY = scrollY;
        scroller.y += (scrollY - scroller.y) * scroller.ease;

        if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
            scroller.y = scrollY;
            scroller.scrollRequest = 0;
        }

        TweenLite.set(scroller.target, {
            y: -scroller.y
        });

        requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
    }

    function onScroll() {
        scroller.scrollRequest++;
        if (!requestId) {
            requestId = requestAnimationFrame(updateScroller);
        }
    }

    function onResize() {
        scroller.resizeRequest++;
        if (!requestId) {
            requestId = requestAnimationFrame(updateScroller);
        }
    }

    $(document).ready(function () {

        /** Dribbble hover **/
        $( "a.dribbble" ).mouseover(function() {
            $('body').css('background-color','#EA4C89');
        }).mouseleave(function() {
        });

        /** Linkedin hover **/
        $( "a.linkedin" ).mouseover(function() {
            $('body').css('background-color','#1DA1F2');
        }).mouseleave(function() {
        });

        /** Instagram hover **/
        $( "a.instagram" ).mouseover(function() {
            $('body').css('background-color','#833AB4');
        }).mouseleave(function() {
        });

        /** Twitter hover **/
        $( "a.twitter" ).mouseover(function() {
            $('body').css('background-color','#1DA1F2');
        }).mouseleave(function() {
        });

        /** Mosue leave **/
        $("a.dribbble, a.linkedin, a.instagram, a.twitter").mouseleave(function()
        {
            $('body').css('background-color','#FFF076');
        });
    });


    /** skew scroll **/

    const section = document.querySelector(".inner-wrapper");
    let currentPixel = window.pageYOffset

//looper keeps running and keeps track of where the new pixel is
    const looper = function () {
        const newPixel = window.pageYOffset;
        const diff = newPixel - currentPixel
        const speed = diff * 0.03;

        section.style.transform = "skewY(" + speed + "deg)"


        currentPixel = newPixel;

        requestAnimationFrame(looper)
    }

    looper();

    /** Mouse **/

    var circle = document.querySelector(".circle");

    TweenLite.set(circle, {
        xPercent: -50,
        yPercent: -50
    });

    window.addEventListener("mousemove", moveCircle);

    function moveCircle(e) {
        TweenLite.to(circle, 0.3, {
            x: e.clientX,
            y: e.clientY
        });
    }

    $(document).ready(function () {
        $( "a" ).mouseover(function() {
            $( ".circle" ).addClass( "circle-hover" );
        }).mouseleave(function() {
            $( ".circle" ).removeClass( "circle-hover" );
        });

        $( "a.dribbble, a.menu__item-link" ).mouseover(function() {
            $( ".circle" ).addClass( "circle-hover-dribbble" );
        }).mouseleave(function() {
            $( ".circle" ).removeClass( "circle-hover-dribbble" );
        });

        $( "a.linkedin" ).mouseover(function() {
            $( ".circle" ).addClass( "circle-hover-linkedin" );
        }).mouseleave(function() {
            $( ".circle" ).removeClass( "circle-hover-linkedin" );
        });

        $( "a.twitter" ).mouseover(function() {
            $( ".circle" ).addClass( "circle-hover-twitter" );
        }).mouseleave(function() {
            $( ".circle" ).removeClass( "circle-hover-twitter" );
        });

        $( "a.instagram" ).mouseover(function() {
            $( ".circle" ).addClass( "circle-hover-instagram" );
        }).mouseleave(function() {
            $( ".circle" ).removeClass( "circle-hover-instagram" );
        });

        $( "a.mail-link" ).mouseover(function() {
            $( ".circle" ).addClass( "circle-hover-mail" );
        }).mouseleave(function() {
            $( ".circle" ).removeClass( "circle-hover-mail" );
        });
    });

}