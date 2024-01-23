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

var image = document.querySelectorAll(".image")
var tl = gsap.timeline();
tl.from("imageContainer",{
    width:"0vw",
    duration:1,
    delay:1.2,
    ease:"cubic-bezier(1,-0.01,0,1)"
})
tl.to(".image",{
    width:"100%",
    duration:0.5,
    stagger:0.08,
    ease:"cubic-bezier(1,-0.01,0,1)"
})

// tl.to(".image",{
//     width:"0%",
//     duration:0.5,
//     stagger:-0.08,
//     ease:"cubic-bezier(1,-0.01,0,1)",
//     delay:2
// })

// gsap.to("#loader",{
//     y:"-100%",
//     duration:2,
//     delay:20,
//     ease:"expo.inOut"
// })


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
