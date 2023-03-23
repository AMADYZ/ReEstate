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
    num=7;
    }
    else{
        num=7.8;
    }

}






var x = window.matchMedia("(max-width: 350px)");
myFunction(x);
x.addListener(myFunction);