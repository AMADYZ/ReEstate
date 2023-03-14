function changeBackground(){
    if(window.scrollY>window.innerHeight*7.8){
        document.body.classList.add('bg-color');

    }
    else{
       document.body.classList.remove('bg-color'); 
    }

}

window.addEventListener('scroll',changeBackground);