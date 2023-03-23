let num;
function changeBackground(){
    
    if(window.scrollY>window.innerHeight*num){
        document.body.classList.add('bg-color');

    }
    else{
       document.body.classList.remove('bg-color'); 
    }

}
window.addEventListener('scroll',changeBackground);
function myFunction(x) {
    if (x.matches) {
    num=6;
    }
    else{
        num=7.8;
    }

}
var x = window.matchMedia("(max-width: 351px)");
myFunction(x);


let check=localStorage.getItem('check');
localStorage.clear();
if(check)
{
    document.getElementById("searchnav").style="display:inline";
    document.getElementById("Signupnav").style="display:none";
}