console.log(gsap);

gsap.registerPlugin(MotionPathPlugin);

gsap.set(".circle-path-back", {scale: 1, autoAlpha: 1});

gsap.to(".circle-path-back", {
  duration: 3, 
  delay:0.3,
  ease: "power1.inOut",
  immediateRender: true,
  motionPath: {
    path: "#line-back",
    align: "#line-back",
    alignOrigin: [0.25, 0.7],
    autoRotate: 90
  }
});

gsap.set(".circle-path-front", {scale: 1, autoAlpha: 1});

gsap.to(".circle-path-front", {
  duration: 3, 
  delay:0.3,
  ease: "power1.inOut",
  immediateRender: true,
  motionPath: {
    path: "#line-front",
    align: "#line-front",
    alignOrigin: [0.25, 0.7],
    autoRotate: 90
  }
});