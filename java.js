
var crsr = document.querySelector("#cursor")

var blr = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
crsr.style.left=dets.x-10+"px"
crsr.style.top=dets.y-10+"px"
blr.style.left=dets.x - 250+"px"
blr.style.top=dets.y -250+"px"
});
gsap.to("#navi",{
    backgroundColor:"green",
    duration:0.5,
    height:"90px",
  
    scrollTrigger:{
        trigger:"#navi",scroller:"body",
        start:"top -10%",end:"top -11%",scrub:1
    }
   
});
gsap.to(".cards", {
  y: 30,
  opacity: 1,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".cards-container", 
    scroller: "body", 
    // markers: true, 
    start: "top 60%", 
    end: "top 90%", 
    scrub: 2, 
  },
});
gsap.to(".doctor-cards", {
  x: 30,
  opacity: 1,
  duration: 1,
  stagger: 1,
  scrollTrigger: {
    trigger: ".doctors-section", 
    scroller: "body", 
    // markers: true, 
    start: "top 60%", 
    end: "top 10%", 
    scrub: 3, 
  },
});
gsap.from("#h11",{
  scale:1.2,
  duration: 1,
  scrub: 3,
  scrollTrigger: {
    trigger: ".container", 
    scroller: "body",
    
    start: "top 60%", 
    end: "top 80%", 
    scrub: 3, 
  },
})
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
