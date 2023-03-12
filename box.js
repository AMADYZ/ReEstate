const title=document.querySelector(".example.title");
const content=document.querySelector(".example.content");
const title1=document.querySelector(".example1.title1");
const content1=document.querySelector(".example1.content1");
const title2=document.querySelector(".example2.title2");
const content2=document.querySelector(".example2.content2");
let image=document.getElementById("img1");
let img1="Images/DSC06832_3.webp";
let img0="Images/accordion__1_.jpg";
title.addEventListener("click",()=>{
    content.classList.toggle("toggle");
    let counter=0;
    if(counter%2==0)
    {
        image.src=img1;
    }
    else{
        image.src=img0;
    }
})
title1.addEventListener("click",()=>{
    content1.classList.toggle("toggle");
})
title2.addEventListener("click",()=>{
    content2.classList.toggle("toggle");
})