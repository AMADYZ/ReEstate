let check=localStorage.getItem('check');
localStorage.clear();
if(check)
{
    document.getElementById("searchnav").style="display:inline";
    document.getElementById("Signupnav").style="display:none";
}