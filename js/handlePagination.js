(function(){

    const homePagination = document.querySelector('.page-hero__pagination');
    let timeout = false;
    let currentSlid;

    const delay = (n = 1000) =>{
        setTimeout(()=>{
            timeout = false;
        },n);
    }
    const handlePagination = (e) =>{
        if(timeout) return;
        timeout = true;
        delay(900);

        const target = e.target;
        if(!target.classList.contains('page-hero__pagination__item')) return;
        if(target.classList.contains('page-hero__pagination__item--active')) return;

        const prevActiveSlidIdx = document.querySelector('.page-hero__pagination__item--active').dataset.slid;
        const prevActiveSlid = document.querySelector(`.page-hero__content__right__img-${prevActiveSlidIdx}`);
        const currentSlidIdx = target.dataset.slid;
        currentSlid = document.querySelector(`.page-hero__content__right__img-${currentSlidIdx}`);
        
        [...homePagination.children].forEach(item => {
            item.classList.remove('page-hero__pagination__item--active');
        });
        target.classList.add('page-hero__pagination__item--active');

        const tl = gsap.timeline();
        tl.to(prevActiveSlid,{
            duration:0.40,
            opacity:0,
            rotate:'+=360',
            scale:0,
        })
        .set(prevActiveSlid, {display:'none', visibility:'hidden'})
        .set(currentSlid,{display:'block', visibility:'visible'})
        .to(currentSlid,{
            duration:0.5,
            opacity:1,
            scale:1,
            rotate:'+=360'
        });

    }

    homePagination.addEventListener('click',handlePagination);

}());
