(function(){

    const tl = gsap.timeline();
    const bars = document.querySelector('.bars');
    const navbarItem = document.querySelectorAll('.page-nav__navbar__item');
    let isNavOpened = false;

// toggle nav animation
    tl.set('body',{
        height:'100vh',
        overflowY:'hidden'
    })
    .to('.page-nav__navbar',{
        duration:0.4,
        opacity: 1,
        visibility: "visible",
        pointerEvents: 'initial',
    })
    .to('.page-nav__navbar__item, .page-nav__navbar .page-logo',{
        duration:0.35,
        opacity:1,
        x:0,
        stagger:0.13
    })
    tl.reverse();
// toggle nav animation ---xxx---

    const toggleNav = () =>{
        if(window.innerWidth > 700 ) return;
        bars.classList.toggle('bars--active');
        isNavOpened = !isNavOpened;

        if(tl.reversed()){
            tl.play();
        }else{
            tl.reverse();
        }
    }
    const handleResize = () =>{
        if(window.innerWidth >= 700 ){

            gsap.set('.page-nav__navbar',{
                opacity:1,
                visibility:'visible',
                pointerEvents:'initial'
            });
            gsap.set('.page-nav__navbar__item',{
                opacity:1,
                x:0
            });
        } else if(window.innerWidth < 700 && !isNavOpened){

            gsap.set('.page-nav__navbar',{
                opacity:0,
                visibility:'hidden',
                pointerEvents:'none'
            });
            gsap.set('.page-nav__navbar__item',{
                opacity:0,
                x:-30
            });
        } 
    }
    const handleLoad = () =>{
        if(window.innerWidth < 700){
            gsap.set('.page-nav__navbar',{
                opacity:0,
                visibility:'hidden',
                pointerEvents:'none'
            })
            gsap.set('.page-nav__navbar__item',{
                opacity:0,
                x:-30
            })
        }else{
            gsap.from('.page-nav__navbar',{
                duration:0.5,
                opacity:0,
                y:10,
                delay:2.5
            })
            gsap.from('.page-nav__navbar__item',{
                duration:0.3,
                opacity:0,
                x:-30,
                stagger:.1,
                delay:2.8
            })
        }
    }

    window.addEventListener('resize',handleResize);
    window.addEventListener('load',handleLoad);

    bars.addEventListener('click',toggleNav);
    navbarItem.forEach(item => {
        item.addEventListener('click',toggleNav)
    });
}());