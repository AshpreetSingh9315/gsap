var tl = gsap.timeline()

tl.from("#nav",{
    opacity :0,
    delay : 0.2,
})


tl.from("#nav h1, #nav h3 , #nav h4",{
    y : -80,
    opacity : 0,
    duration: 0.3,
    stagger : 0.3
})

tl.from(".container .left h1",{
    x: -100,
    opacity: 0,
    duration: 0.3,
    stagger : 0.3,
})

tl.from(".container .right img",{
    opacity: 0,
    duration: 0.5,
    scale : 2, 
})

gsap.from('#page2 .box1',{
    scale : 0,
    opacity : 0,
    duration : 1,
    stagger: 0.3,
    scrollTrigger: {
        scroller : 'body',
        trigger : '#page2 .box1',
        start : 'top 70%',
        end: 'top 50%',
        scrub : 1
    }
})
