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
let speed = 80;
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
    let menutoggle = document.querySelector('.toggle');
    let sideBar = document.querySelector('.side-menu');
    menutoggle.onclick = function(){
          menutoggle.classList.toggle('active'); 
          sideBar.classList.toggle('active');

    }

}
{
  let linkList = document.querySelectorAll('.link');
  let a1 = linkList[0];
  let a2 = linkList[1];
  let a3 = linkList[2];
  let a4 = linkList[3];
a1.onclick = function(){
    let current = document.getElementsByClassName('actives')
    let now = current[0];  
    now.classList.remove('actives');
   a1.classList.add('actives');
 }
a2.onclick = function(){
    let current = document.getElementsByClassName('actives')
    let now = current[0];
  
    now.classList.remove('actives');
   a2.classList.add('actives');
 }
a3.onclick = function(){
    let current = document.getElementsByClassName('actives')
    let now = current[0];
  
    now.classList.remove('actives');
   a3.classList.add('actives');
 }
a4.onclick = function(){
    let current = document.getElementsByClassName('actives')
    let now = current[0];
  
    now.classList.remove('actives');
   a4.classList.add('actives');
 }
}
{
    let icOne = document.getElementById("iconOne");
    let icTwo = document.getElementById("iconTwo")
    let icThree = document.getElementById("iconThree")

    icOne.onclick = function(){
        
        window.open("https://www.facebook.com/M.R.H.R.71");

    }
    icTwo.onclick = function(){
        
        window.open("https://github.com/Mr-devloper");

    }
    icThree.onclick = function(){
        
        window.open("https://twitter.com/Mizanur14720321");
    }

}
{
    const observer = new IntersectionObserver((entries) =>{
        entries.forEach((entry) =>{
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');

            }
        });
    });
    const hiddenElements = document.querySelectorAll('.hiddens')
    hiddenElements.forEach((e1) => observer.observe(e1));
}