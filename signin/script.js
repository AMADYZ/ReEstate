const signupButton=document.getElementById("signup");
const signinButton=document.getElementById("signin");
const container =document.getElementById("container");
signupButton.addEventListener('click',()=>{
    container.classList.add("right1-pannel-active");
})
signinButton.addEventListener('click',()=>{
    container.classList.remove("right1-pannel-active");
})