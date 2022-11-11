console.log("main.js connected");
var splashScreen = document.querySelector('.splash');
splashScreen.addEventListener('click',()=>{
    splashScreen.style.opacity = 0;
    setTimeout(()=>{
        splashScreen.classList.add('hidden')
    }, 610)
})

function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    

if (h == 0) {
    h = 12;
}

if ( h > 12) {

    h = h-12 ;
    session = "PM";
}

h = ( h < 10) ? "0" + h : h;
m = ( m < 10) ? "0" + m : m;
s = ( s < 10) ? "0" + s : s;

var time = h + ":" + m + ":" + s + " " + session;
document.getElementById("MyClockDisplay").innerText = time;
document.getElementById("MyClockDisplay").textContent = time;

setTimeout(showTime, 1000);







}


showTime();

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
{
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
       }
}