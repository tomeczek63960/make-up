paginationSchema = (pagination,page,delayTime = 1000 ) =>{

    timeout = true;
    
    const delay = (n) =>{
        timeout = false;
        setTimeout(()=>{
            timeout = true;
        },n);
    }

    const handlePagination = (e) =>{
        if(!timeout) return
        const target = e.target;

        if(!target.classList.contains(`page-${page}__hero__pagination__item`)) return;
        if(target.classList.contains(`page-${page}__hero__pagination__item--active`)) return;
    
        const prevSlidIdx = document.querySelector(`.page-${page}__hero__pagination__item--active`).dataset.slid;
        const currentSlidIdx = target.dataset.slid; 
        const prevSlid = document.querySelector(`.page-${page}__hero__img-${prevSlidIdx}`);
        const currentSlid = document.querySelector(`.page-${page}__hero__img-${currentSlidIdx}`);
        [...pagination.children].forEach(item =>{
            item.classList.remove(`page-${page}__hero__pagination__item--active`);
        })
        target.classList.add(`page-${page}__hero__pagination__item--active`);
    
        const tl = gsap.timeline();
        tl.to(prevSlid,{
            duration:0.4,
            opacity:0,
            scale:0,
            rotate:'+=360'
        })
        .set(prevSlid,{display:'none',visibility:'hidden'})
        .set(currentSlid,{display:'block',visibility:'visible'})
        .to(currentSlid,{
            duration:0.4,
            opacity:1,
            scale:1,
            rotate:'-=360'
        })
    
        delay(delayTime);
    }
    
    pagination.addEventListener('click',handlePagination);
}