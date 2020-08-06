(function(){
    gsap.registerPlugin(ScrollTrigger);

    const titleAfter = CSSRulePlugin.getRule(".page-services__hero__title::after");
    
    const headingGroupAnimation = () =>{
        gsap.to( ".page-services__hero__subtitle",{
            scrollTrigger:{
                trigger: ".page-services__hero__subtitle",
                start:"top 70%",
            },
            duration:1,
            y:0,
            opacity:1
        })
        gsap.to( ".page-services__hero__title",{
            scrollTrigger:{
                trigger: ".page-services__hero__title",
                start:"top 80%",
            },
            duration:1,
            y:0,
            opacity:1
        })

        gsap.to(titleAfter,{
            scrollTrigger:{
                trigger: ".page-services__hero__title",
                start:"top 80%",
            },
            duration:0.7,
            width:"90%",
            delay:1
        })
    }

    ScrollTrigger.matchMedia({
        "":function(){

            gsap.to( ".page-services__hero__text",{
                scrollTrigger:{
                    trigger: ".page-services__hero__text",
                    start:"top 80%",
                },
                duration:0.8,
                y:0,
                opacity:1
            })
        
            gsap.to( ".page-services__hero__social-media a",{
                scrollTrigger:{
                    trigger: ".page-services__hero__social-media",
                    start:"top 90%",
                },
                duration:1,
                scale:1,
                opacity:1,
                stagger:0.2
            })
        
            gsap.to( ".page-services__hero__img",{
                scrollTrigger:{
                    trigger: ".page-services__hero__img",
                    start:"top 100%",
                },
                duration:1.2,
                scale:1,
                rotate:-30,
                opacity:1,
            })
        },
        "(max-height: 800px) and (max-width:1100px)": headingGroupAnimation,
        "(min-width: 1100px)":headingGroupAnimation,
    })
   
}());
