let intro=document.querySelector('.intro');
let logo=document.querySelector('.logo-header');
let logoSpan=document.querySelectorAll('.logo');
let centered=document.querySelector('.centered');
let Rlogo=document.querySelector('.logo-page');
let logodiv=document.querySelectorAll('.Rlogo');

window.addEventListener('DOMContentLoaded',()=>
{
    setTimeout(()=>
        {
            logoSpan.forEach((span,idx)=>{
                setTimeout(() => {
                    span.classList.add('active');
                    
                }, (idx+1)*400);

            });
            setTimeout(() => {
                logoSpan.forEach((span,idx)=>
                {
                    setTimeout(() => {
                        span.classList.remove('active');
                        span.classList.add('fade');
                        
                    }, (idx+1)*50);

                })
                
            }, 2000);
            setTimeout(() => {
                intro.style.top='-100vh';
                
            }, 2600);

            logodiv.forEach((div,idx)=>{
                setTimeout(() => {
                    div.classList.add('active');
                    
                }, (idx+1)*2800);

            });

            




        })
})