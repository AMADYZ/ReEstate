let check=localStorage.getItem('check');
if(check)
{
    document.getElementById("searchnav").style="display:inline";
    document.getElementById("Signupnav").style="display:none";
}
let intro=document.querySelector('.intro');
setTimeout(()=>
        {
            setTimeout(() => {
                intro.style.top='-100vh';
                
            }, 600);
        })