(function(){

    const bars = document.querySelector('.bars');
    const navbarItem = document.querySelectorAll('.page-nav__navbar__item');
    const navbar = document.querySelector('.page-nav__navbar');
    let navActive = false;

    const toggleNav = () =>{
        if(window.innerWidth > 700 ) return;
        bars.classList.toggle('bars--active');
        navbar.classList.toggle('page-nav__navbar--active');
        
        if(!navActive){

            const tl = gsap.timeline();
            tl.fromTo('.page-nav__navbar__item',{
                opacity:0,
                x:-30,
            },{
                duration:0.3,
                opacity:1,
                x:0,
                stagger:0.1,
                delay:0.8
            })
        }

        navActive = !navActive;
    }

    bars.addEventListener('click',toggleNav);
}());

