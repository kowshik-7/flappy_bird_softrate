// // window.alert("hi")

const sec1 = document.querySelectorAll(".section3");
const sec2 = document.querySelectorAll(".phoneImg");
const sec3 = document.querySelectorAll(".description");
const sec4 = document.querySelectorAll(".phone");
const sec5 = document.querySelectorAll(".descriptionHead");
const sec6 = document.querySelectorAll(".details");
const sec7 = document.querySelectorAll(".sec3Container");
const clip = document.querySelectorAll(".clip");

for (let i=0;i<sec1.length;i++){
    sec1[i].addEventListener('mouseenter',function(e){
        clip[i].play()
    })
    sec1[i].addEventListener('mouseout',function(e){
        clip[i].pause()
    })
}

for (let i=0;i<sec2.length;i++){
    sec2[i].addEventListener('mouseenter',function(e){
        clip[i].play()
    })
    sec2[i].addEventListener('mouseout',function(e){
        clip[i].pause()
    })
}

for (let i=0;i<sec3.length;i++){
    sec3[i].addEventListener('mouseenter',function(e){
        clip[i].play()
    })
    sec3[i].addEventListener('mouseout',function(e){
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

for (let i=0;i<sec5.length;i++){
    sec5[i].addEventListener('mouseenter',function(e){
        clip[i].play()
    })
    sec5[i].addEventListener('mouseout',function(e){
        clip[i].pause()
    })
}

for (let i=0;i<sec6.length;i++){
    sec6[i].addEventListener('mouseenter',function(e){
        clip[i].play()
    })
    sec6[i].addEventListener('mouseout',function(e){
        clip[i].pause()
    })
}

for (let i=0;i<sec7.length;i++){
    sec7[i].addEventListener('mouseenter',function(e){
        clip[i].play()
    })
    sec7[i].addEventListener('mouseout',function(e){
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

// const sec = document.querySelectorAll(".section3");
// const clip = document.querySelectorAll(".clip");

// sec.addEventListener("mouseenter",function(e){
//     clip.play()
// })





