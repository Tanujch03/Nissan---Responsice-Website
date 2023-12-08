const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});





function loadanimation(){
    gsap.from(".page1 h1",{
        y:40,
        opacity:0,
        delay:0.3,
        duration:0.9,
        stagger:0.1
    })
   
    gsap.from(".page1 .video-container",{
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.3,
       
    })

    gsap.from(".page3 img",{
        y:40,
        opacity:0,
        delay:0.3,
        duration:0.9,
        stagger:0.1
    })

   

    
    
}

loadanimation();