const title=document.querySelector(".example.title");
const content=document.querySelector(".example.content");
const title1=document.querySelector(".example1.title1");
const content1=document.querySelector(".example1.content1");
const img1=document.querySelector(".inRsection6");

title.addEventListener("click",()=>{
    content.classList.toggle("toggle");
    
})
title1.addEventListener("click",()=>{
    content1.classList.toggle("toggle");
})
