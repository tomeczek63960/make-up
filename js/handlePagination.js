const homePagination = document.querySelector('.page-hero__pagination');

const handlePagination = (e) =>{
    const target = e.target;
    if(!target.classList.contains('page-hero__pagination__item')) return;
    if(target.classList.contains('page-hero__pagination__item--active')) return;

    const prevActiveSlidIdx = document.querySelector('.page-hero__pagination__item--active').dataset.slid;
    const prevActiveSlid = document.querySelector(`.page-hero__content__right__img-${prevActiveSlidIdx}`);
    const currentSlidIdx = target.dataset.slid;
    const currentSlid = document.querySelector(`.page-hero__content__right__img-${currentSlidIdx}`);
    
    [...homePagination.children].forEach(item => {
        item.classList.remove('page-hero__pagination__item--active');
    });
    target.classList.add('page-hero__pagination__item--active');
    console.log(target)
    

    const tl = gsap.timeline();
    tl.to(prevActiveSlid,{
        duration:0.6,
        opacity:0,
        rotate:'+=360',
        scale:0,
    })
    .set(prevActiveSlid,{visibility:'hidden',width:0,height:0})
    .set(currentSlid,{visibility:'visible',width:'230px',height:'230px'})
    .to(currentSlid,{
        duration:1,
        opacity:1,
        scale:1,
        rotate:'+=360'
    })
    // .to(currentSlid,{

    // })
    prevActiveSlid.classList.remove('page-hero__content__right__img--active');
    currentSlid.classList.add('page-hero__content__right__img--active');


}

homePagination.addEventListener('click',handlePagination);