const crsr = document.querySelector("#cursor")
const blurCursor = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x-+12.5+"px"
    crsr.style.top = dets.y-12.5+ "px"
    blurCursor.style.left = dets.x-250+"px"
    blurCursor.style.top = dets.y-250+"px"
})

gsap.to("#nav",{
    backgroundColor: "#000",
    height:"100px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers: true,
        start:"top -9%",
        end:"top -10%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start:"top -20%",
        end: "top -70%",
        scrub:3
    }
})

const h4all=document.querySelectorAll("#nav h4");

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=2
        crsr.style.border=".5px solid #fff"
        crsr.stly.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #95C11E"
        crsr.stly.backgroundColor="#95C11E"
    })
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 58%",
        scrub: 2
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
})

gsap.from("#colon1",{
        y:-70,
        x:-70,
        duration:0.5,
        scrollTrigger:{
            trigger:"#colon1",
            scroller: "body",
            start:"top 50%",
            end: "top 47%",
            scrub: 1
        }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller: "body",
        start:"top 50%",
        end: "top 47%",
        scrub: 1
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller: "body",
        start:"top 75%",
        end: "top 70%",
        scrub: 3
    }
})

