

const sec2 = document.querySelectorAll(".phoneImg");
const sec4 = document.querySelectorAll(".phone");
const clip = document.querySelectorAll(".clip");

for (let i=0;i<sec2.length;i++){
    sec2[i].addEventListener('mouseenter',function(e){
        clip[i].play()
    })
    sec2[i].addEventListener('mouseout',function(e){
        clip[i].pause()
    })
}


for (let i=0;i<sec4.length;i++){
    sec4[i].addEventListener('mouseenter',function(e){
        clip[i].play()
    })
    sec4[i].addEventListener('mouseout',function(e){
        clip[i].pause()
    })
}

for (let i=0;i<clip.length;i++){
    clip[i].addEventListener('mouseenter',function(e){
        clip[i].play()
    })
    clip[i].addEventListener('mouseout',function(e){
        clip[i].pause()
    })
}

// const race = document.querySelector(".section2");
// let racewidth = race.offsetWidth;
// let amtToScroll = racewidth - window.innerWidth; 


gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".section2",
        start : "bottom 100%",
        end : "bottom 0%",
        scrub: 4,
        pin : ".section2"
        
    }
});

tl.to(".flyingBird",{x:0,y:80})
  .to(".flyingBird",{x:100,y:90})
  .to(".flyingBird",{x:120,y:200})
  .to(".flyingBird",{x:300,y:40})
  .to(".flyingBird",{x:400,y:10})
  .to(".flyingBird",{x:550,y:150})
  .to(".flyingBird",{x:740,y:-30})
  .to(".flyingBird",{x:980,y:90})
  .to(".flyingBird",{x:1200,y:-10})
  .to(".flyingBird",{x:1500,y:100})



gsap.to(".section3",{
  scrollTrigger:{
      trigger: ".section3",
      start:"top 0%",
      end :"bottom 0%",
      scrub: 2,
      pin: ".section2"
  }
})  