const tl = gsap.timeline();

tl.set('body',{
    height:'100vh',
    overflow:'hidden'
})
.from('.page-home',{
    duration:2,
    opacity:0,
    delay:0.5,
    y:30
})
tl.from('.page-logo, .bars',{
    duration:0.7,
    x:-100,
    opacity:0,
    stagger:.3,
})
tl.from('.page-hero__subtitle, .page-hero__title, .page-hero__text',{
    duration:0.7,
    y:30,
    opacity:0,
    stagger:0.2,
})
.from('.page-hero__btn',{
    duration:0.3,
    scale:0,
    opacity:0,
},'-=0.5')
.from('.page-hero__pagination__item',{
    duration:0.4,
    scale:0,
    opacity:0,
    stagger:0.1
})
.from('.page-hero__content__right__img-1',{
    duration:0.7,
    scale:0,
    opacity:0,
    rotate:-300
},'-=0.5')
.set('body',{
    overflow:'initial',
    height:'initial'
})