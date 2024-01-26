gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


gsap.to("#video video", {
    scrollTrigger: {
      trigger: "#main",
      start: "top 10%", // Adjust the start position
      end: "top -90%", // Adjust the end position
      scrub: 1, // Smoothly animate on scroll
    },
    scale: 1, 
    transformOrigin: "center center", // Zoom from the center of the video
  });

var percent = document.querySelector("#percent h1") 
splitter(percent)
var title1 = document.querySelector("#title h1")
splitter(title1);
var open = document.querySelector("#open")
splitter(open)
function splitter(title) {
    var clutter = ""
    title.textContent.split("").forEach(function (element) {
    clutter += `<span>${element}</span>`
    });
    title.innerHTML = clutter;
}


gsap.from("#title span",{
    y:500,
    duration:.6,
    stagger:.1,
    ease: "slow(0.7, 0.7, false)",
    delay:7,
})
gsap.from("#nav",{
    opacity:0,
    duration:1.2,
    ease: "slow(0.7, 0.7, false)",
    delay:8,
})
gsap.from("#sub",{
    opacity:0,
    duration:1.2,
    ease: "slow(0.7, 0.7, false)",
    delay:8,
})
gsap.from("#vdo",{
    scale:3,
    duration:1.2,
    ease: "slow(0.7, 0.7, false)",
    delay:6.5
})


var image = document.querySelectorAll(".image")
var tl = gsap.timeline();
tl.from("imageContainer",{
    width:"0vw",
    duration:1,
    delay:2,
    ease:"cubic-bezier(1,-0.01,0,1)"
})
tl.to(".image",{
    width:"100%",
    duration:0.5,
    stagger:0.08,
    ease:"cubic-bezier(1,-0.01,0,1)"
})
tl.to(".image",{
    x:"100%",
    duration:0.5,
    stagger:-0.08,
    ease:"slow(0.7, 1, true)",
    delay:2
})

gsap.to("#loader",{
    opacity:0,
    duration:2,
    delay:6,
    ease:"expo.inOut",
    display:"none"
})

gsap.to("#percent span",{
    y:-500,
    duration:1.2,
    stagger:.1,
    ease:"expo.out" ,
    delay:3,
})
gsap.to("#open span",{
    y:-150,
    duration:1,
    stagger:.1,
    ease: "expo.out",
    delay:2.9
})
gsap.to("#open span",{
    y:-350,
    duration:1,
    stagger:.1,
    ease: "expo.out",
    delay:6,
})



var grow = 0;

var ctr = setInterval(() => {
    if (grow<100) {
        grow++
        document.querySelector("#meter").innerHTML = grow;
        console.log("a");
    }
}, 10);
setTimeout(() => {
    clearInterval(ctr);
    document.querySelector("#grow").style.opacity = 0;
    document.querySelector("#load").style.opacity = 1;
}, 1500);

setTimeout(() => {
    document.body.style.overflow = "visible"
    document.documentElement.style.overflow = "visible"
}, 5000);

var lines = document.querySelector("#lines")
var flag = 0;
 lines.addEventListener("click",function () {
    if (flag == 0) {
        document.body.style.overflow = "hidden"
        document.documentElement.style.overflow = "hidden"
        gsap.to("#one",{
            rotation:45,
            duration:1,
            transformOrigin:"center center"
        })
        gsap.to("#two",{
            rotation:-45,
            duration:1,
            transformOrigin:"center center"
        })
        gsap.to("#rightNav",{
            opacity:0,
            duration:1.5
        })
        gsap.to("#atags span",{
            y:"-100%",
            duration:0.5,
            stagger:0.02,
            delay:0.4,
            ease: "expo.InOut"
        })
        gsap.to("#navToggle",{
            height:"100vh",
            duration:1.5,
            ease:"expo.inOut"
        })
        gsap.to("#options",{
            y:"0%",
            duration:1.5,
            ease:"expo.inOut"
        })
        flag = 1;
    }
    else{
        document.body.style.overflow = "visible"
        document.documentElement.style.overflow = "visible"
        gsap.to("#one",{
            rotation:0,
            duration:1,
            transformOrigin:"center center"
        })
        gsap.to("#two",{
            rotation:0,
            duration:1,
            transformOrigin:"center center"
        })
        gsap.to("#rightNav",{
            opacity:1,
            duration:2
        })
        gsap.to("#atags span",{
            y:0,
            duration:0.4,
            stagger:-0.02,
            ease: "expo.InOut"
        })
        gsap.to("#navToggle",{
            height:"0vh",
            duration:1.5,
            ease:"expo.inOut"
        })
        gsap.to("#options",{
            y:"-100%",
            duration:1.5,
            ease:"expo.inOut"
        })
        flag = 0;
    }
 })
 
var atags = document.querySelectorAll("#atags h1")
console.log(atags);

atags.forEach(element => {
    console.log(element.id);
    element.addEventListener("mouseenter",function () {
        gsap.to("#navImage",{
            opacity:1,
            backgroundImage:`url(./${element.getAttribute("localUrl")})`,
            duration:0.3,
            ease:"expo.in"
        }) 
       gsap.to(".at h1",{
         filter: "blur(5px)",
         color: "rgba(0, 0, 0, 0.401)"
       })
       gsap.to(`.at #${element.id}`,{
        filter: "blur(0px)",
        color: "black"
       })
    })
    element.addEventListener("mouseleave",function () {
        gsap.to(".at h1",{
            filter: "blur(0px)",
            color: "black"
        })
    })
});
var atagOuter = document.querySelector("#atags")
atagOuter.addEventListener("mouseleave",function(){
    gsap.to("#navImage",{
        opacity:0,
        duration:0.4,
        ease:"expo.in"
    })
})

atags.forEach(function (e) {
    splitter(e)
})

document.querySelector("#mid").addEventListener("mouseenter",function(){
    gsap.to("#box",{
        backgroundColor:"#F3F0EA",
        color: "#4C3D30",
        duration:0.4,
    })
    gsap.to("#mid img",{
        scale:"1.1",
        duration:0.4,
    })
})
document.querySelector("#mid").addEventListener("mouseleave",function(){
    gsap.to("#box",{
        backgroundColor:"transparent",
        color: "transparent",
        duration:0.4,
    })
    gsap.to("#mid img",{
        scale:"1",
        duration:0.4,
    })
})

document.querySelector("#button2").addEventListener("mouseenter",function(){
    gsap.to("#outer h4",{
        y:"-100%",
        duration:0.3,
    })
    gsap.to("#arrow2 i",{
        x:"-250%",
        duration:0.2
    })
})

document.querySelector("#button2").addEventListener("mouseleave",function(){
    gsap.to("#outer h4",{
        y:"0%",
        duration:0.3,
    })
    gsap.to("#arrow2 i",{
        x:"0%",
        duration:0.2
    })
})

gsap.to("#caseroll",{
    x:"-203.5%",
    duration:20,
    repeat:-1,
    ease:"linear"
})