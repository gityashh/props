gsap.to("#video video", {
    scrollTrigger: {
      trigger: "#main",
      start: "top center", // Adjust the start position
      end: "bottom center", // Adjust the end position
      scrub: 2, // Smoothly animate on scroll
    },
    scale: 1, 
    transformOrigin: "center center", // Zoom from the center of the video
  });