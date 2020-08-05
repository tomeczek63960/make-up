const tl = gsap.timeline();
const bars = document.querySelector('.bars');
const navbarItem = document.querySelectorAll('.page-nav__navbar__item');

tl.set('body',{
    height:'100vh',
    overflowY:'hidden'
})
.to('.page-nav__navbar',{
    duration:0.6,
    opacity: 1,
    visibility: "visible",
    pointerEvents: 'initial',
})
.to('.page-nav__navbar__item, .page-nav__navbar .page-logo',{
    duration:0.4,
    opacity:1,
    transform:'translateX(0)',
    stagger:0.15
})

tl.reverse();

const toggleNav = () =>{
    bars.classList.toggle('bars--active');

    if(tl.reversed()){
        tl.play();
    }else{
        tl.reverse();
    }
}

bars.addEventListener('click',toggleNav);
navbarItem.forEach(item => {
    item.addEventListener('click',toggleNav)
})