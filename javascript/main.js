{
    const status = "connected"
    console.log(status);
}
var splashScreen = document.querySelector('.splash');
splashScreen.addEventListener('click',()=>{
    splashScreen.style.opacity = 0;
    setTimeout(()=>{
        splashScreen.classList.add('hidden')
    }, 610)
})
{
    // Type writer animation 
let i = 0;
let txt = 'Welcome,  Click to explore!!';
let speed = 60;
function typeWriter(){
    if (i < txt.length) {
        document.getElementById("tdata").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed)
    }
}
setTimeout( typeWriter, 1000);
}
/*{
    
    let x = document.getElementsByClassName("side-menu")
    let i = 0;
    function toggle(){
       if (i === 0) {
        x[0].style.display = 'block';
        
        
        i = 1;
       } else {
        x[0].style.display = 'none';

        i = 0;
       }
      
    } 
    function cls(){
        x[0].style.display = 'none';
        e.innerHTML = "☰";
        e.style.fontSize = "x-large"
        i = 0;
       }
}*/
{
    let menutoggle = document.querySelector('.toggle');
    let sideBar = document.querySelector('.side-menu');
    menutoggle.onclick = function(){
          menutoggle.classList.toggle('active'); 
          sideBar.classList.toggle('active');

    }

}