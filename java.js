
var crsr = document.querySelector("#cursor")

var blr = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
crsr.style.left=dets.x-10+"px"
crsr.style.top=dets.y-10+"px"
blr.style.left=dets.x - 250+"px"
blr.style.top=dets.y -250+"px"
});
gsap.to("#navi",{
    backgroundColor:"#5f5dc9",
    duration:0.5,
    height:"90px",
  
    scrollTrigger:{
        trigger:"#navi",scroller:"body",
        start:"top -10%",end:"top -11%",scrub:1
    }
   
});
