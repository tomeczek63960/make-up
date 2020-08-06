(function(){

// about
const titleAfter = CSSRulePlugin.getRule(".page-about__hero__title::after");
const titleBefore = CSSRulePlugin.getRule(".page-about__hero__title::before");

// services
const discountAfter = CSSRulePlugin.getRule(".page-services__hero__discount::after");
const rectAfter =  CSSRulePlugin.getRule(".page-services__hero__service__item-wrapper::after");
const rectBefore =  CSSRulePlugin.getRule(".page-services__hero__service__item-wrapper::before");
const servicesTitleAfter = CSSRulePlugin.getRule(".page-services__hero__title::after");

// blog
const blogTitleAfter = CSSRulePlugin.getRule(".page-blog__hero__title::after");
const blogBtnAfter = CSSRulePlugin.getRule(".page-blog__hero__btn::after");

const delay = (n) =>{
    n = n || 2000;
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve();
        },n);
    })
}
const fadeOut = () =>{
  
    const tl = gsap.timeline()
    .to('.page',{
        duration:1,
        opacity:0
    })

}

// helpers for animations
const baseAnimationProperty = (rest, stagger, duration) => ({
    duration: duration || 0.5,
    opacity:0,
    stagger: stagger || 0,
    ...rest,
});
const fadeInNavbar = (tl, page) =>{

    tl.to('.page',{ opacity:1 } )
    .from(page, baseAnimationProperty( {delay: 0.5, y: -30 } ,null, 1.2) )
    .addLabel('start')
    .from('.page-logo, .bars', baseAnimationProperty( { x: -100 }, .15 ),'start')

    if(window.innerWidth > 699){

        tl.from('.page-nav__navbar',baseAnimationProperty( {visibility:'hidden', y: 10 } ),'start')
        .from('.page-nav__navbar__item', baseAnimationProperty( { x: -30 } , 0.1 , 0.2 ) )
    }
    
    return tl;
}

// fadeIn page-animations
const homeAnimation = () =>{
    
    const tl = gsap.timeline();
    fadeInNavbar(tl, '.page-home');
    
    tl.from('.page-home__hero__subtitle, .page-home__hero__title, .page-home__hero__text', baseAnimationProperty( { y: 30 }, 0.2 ))
    .from('.page-home__hero__btn', baseAnimationProperty( { scale: 0 }) ,'-=0.5')
    .from('.page-home__hero__pagination__item', baseAnimationProperty( { scale: 0 }, 0.2, 0.3 ) )
    .from('.page-home__hero__img-1', baseAnimationProperty( { scale: 0, rotate: -300 },null, 0.7 ),'-=0.5')
    .set('body',{
        overflow:'initial',
        height:'initial'
    })
}
const aboutAnimation = () =>{
    
    const tl = gsap.timeline();
    fadeInNavbar(tl,'.page-about');
   
    tl.from('.page-about__hero__subtitle, .page-about__hero__title, .page-about__hero__text', baseAnimationProperty( { y: 30 }, 0.3, 1 ) )
    .from([titleBefore, titleAfter],{
        duration:0.3,
        width:'0%',
        stagger:.2
    })
    .from('.page-about__hero__btn, .page-about__hero__social-media a, .page-about__hero__pagination__item', baseAnimationProperty( { scale:0 }, 0.1 ),'-=0.5')
    .from('.page-about__hero__img-1', baseAnimationProperty( { scale:0, rotate:-300 } ) ,'-=0.5')
}
const servicesAnimation = () =>{

    const tl = gsap.timeline();
    fadeInNavbar(tl, '.page-services' );

    tl.from(discountAfter,baseAnimationProperty( { transform:'scale(0)' } ) )
    .from('.page-services__hero__discount__bg,  .page-services__hero__discount__text', baseAnimationProperty( { transform:'scale(0)' }, -.2 ))
    .from('.page-services__hero__service__item__img ', baseAnimationProperty( { transform:'scale(0)'}, 0.3))
    .from('.page-services__hero__service__item__text', baseAnimationProperty( { x: -30 }, .2 ) )

    if(window.innerWidth > 700){

        tl.from(rectAfter, baseAnimationProperty( { transform: "rotate(360deg)"} ))
        .from(rectBefore, baseAnimationProperty())
    }
    
    tl.from('.page-services__hero__contact__info', baseAnimationProperty( { x: -60 } ) )
    .from('.page-services__hero__contact__info__item', baseAnimationProperty( { y: 15 }, 0.2 ))

    if(window.innerWidth < 1100 && window.innerHeight > 800){
        tl.to('.page-services__hero__subtitle, .page-services__hero__title', baseAnimationProperty( { y: 0, opacity:1 }, .1 ) )
        .to(servicesTitleAfter,{
            duration:0.7,
            width:"90%",
            delay:0.4
        })
    }
  
}
const blogAnimation = () =>{
 
    const tl = gsap.timeline();
    fadeInNavbar(tl,'.page-blog');
   
    tl.from('.page-blog__hero__subtitle, .page-blog__hero__title', baseAnimationProperty( { y:30 }, 0.2, 0.7 ) )
    .from(blogTitleAfter,{
        duration:0.4,
        width:'0%'
    },'-=.2')
    .from('.page-blog__hero__social-media a, .page-blog__hero__img-wrapper', baseAnimationProperty( { scale:0 }, 0.2 ))
    .from('.page-blog__hero__link, .page-blog__hero__line', baseAnimationProperty( { x:-200 }, -.2 ))
    .from('.page-blog__hero__btn', baseAnimationProperty( { scale:0 }) )
    .from(blogBtnAfter, baseAnimationProperty())
    .from('.page-blog__hero__text', baseAnimationProperty( { y: 30 } ))
    
}

const createScript = (next, path) =>{
    let script = document.createElement('script');
    script.src = path;
    next.container.appendChild(script);
}

const assignAnimationsForPages = (next) =>{
    if(next.namespace === 'home'){
        homeAnimation(); 
    }else if(next.namespace === 'about'){
        aboutAnimation();
    }else if(next.namespace === 'services'){
        servicesAnimation();
    }else if(next.namespace === 'blog'){
       blogAnimation();
    }
}

barba.init({
    sync:true,

    transitions:[{
        async beforeEnter({next}){

            createScript(next, './js/toggleNav.js');
            
            if(next.namespace === 'home' || next.namespace === 'event'){
                createScript(next, './js/paginationSchema.js');
                createScript(next, './js/home/handlePagination.js');
            }else if(next.namespace === 'about'){
                createScript(next, './js/paginationSchema.js');
                createScript(next, './js/about/handlePagination.js');
            }else if(next.namespace === 'services'){
                createScript(next, 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/ScrollTrigger.min.js');
                createScript(next, './js/services/scroll.js');
            }
        
        },
        async leave(){
            const done = this.async()
            fadeOut();
            await delay(1500);
            await done();
        },
        async enter({next}){
            assignAnimationsForPages(next);
        },
        async once({next}){
            assignAnimationsForPages(next);
        }
    }]
});

}());
