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


// gsap.from("#title span",{
//     y:500,
//     duration:.6,
//     stagger:.1,
//     ease: "slow(0.7, 0.7, false)",
//     delay:7,
// })
// gsap.from("#nav",{
//     opacity:0,
//     duration:1.2,
//     ease: "slow(0.7, 0.7, false)",
//     delay:8,
// })
// gsap.from("#sub",{
//     opacity:0,
//     duration:1.2,
//     ease: "slow(0.7, 0.7, false)",
//     delay:8,
// })
// gsap.from("#vdo",{
//     scale:3,
//     duration:1.2,
//     ease: "slow(0.7, 0.7, false)",
//     delay:6.5
// })


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
    width:"0%",
    duration:0.5,
    stagger:-0.08,
    ease:"cubic-bezier(1,-0.01,0,1)",
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

// atags.forEach(element => {
//     element.addEventListener("mouseenter",function () {
//         atags.style.filter = "blur(10px)"
//     })
//     element.addEventListener("mouseleave",function () {
//         element.style.filter = "blur(0px)"
//     })
// });

atags.forEach(function (e) {
    splitter(e)
})


