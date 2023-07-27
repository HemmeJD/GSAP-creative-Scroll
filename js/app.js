gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


if (ScrollTrigger.isTouch !==1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    })

    gsap.fromTo('.hero-section', { opactiy: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    })

    let itemsLeft = gsap.utils.toArray('.gallery-left .gallery-item')

    itemsLeft.forEach(item => {
        gsap.fromTo(item, { x: -500, opacity: 0 }, { 
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: 500,
                end: 0,
                scrub: true,
        }

        })
    })

    let itemsRight = gsap.utils.toArray('.gallery-right .gallery-item')

    itemsRight.forEach(item => {
        gsap.fromTo(item, { x: 100, opactiy: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: 500,
                end: 0,
                scrub: true,
        }

        })
    })
}

