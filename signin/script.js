const signupButton=document.getElementById("signup");
const signinButton=document.getElementById("signin");
const container =document.getElementById("container");
signupButton.addEventListener('click',()=>{
    container.classList.add("right1-pannel-active");
})
signinButton.addEventListener('click',()=>{
    container.classList.remove("right1-pannel-active");
})
function validateUserName(field){
    if(field=='')
    {
        document.getElementById('nameErr').innerHTML='You Must Enter a UserName.';
        document.getElementById('er1').style.opacity='1';
        return false;
    }
    else{
    document.getElementById('nameErr').innerHTML='';
    document.getElementById('er1').style.opacity='0';
    return true;
    }
}
function validateEmail(input) {

    const validRegex = /^(.+)@(.+)$/;
  
    if (!validRegex.test(input) ) {
        document.getElementById('emailErr').innerHTML='Check your email.';
        document.getElementById('er2').style.opacity='1';
        return false;
    }
    else{
    document.getElementById('emailErr').innerHTML='';
    document.getElementById('er2').style.opacity='0';
    return true;
    }
}
