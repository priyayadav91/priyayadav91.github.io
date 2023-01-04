element=document.getElementById("contact-container")
var skillcontainer=document.getElementById("skills-container")
var progressBar=document.querySelectorAll (".skill-progress > div");
console.log(progressBar)
y_value=element.getBoundingClientRect()['y'] 
var current=0;
var target=y_value;
var animationDone=false;

// function for smooth scrolling the page 
// var scroll=setInterval(function (){
// if (current>=target){
// clearInterval(scroll);
// return;
// }
// current+=50;
// window.scrollBy(0,50);},100);
// //function to initiallize the bar
// function initializebar(){
//     for (let bar of progressBar){
//         bar.style.width=0+'%';
//     }
// }

//function to fillbar
function fillBars(){
    for (let bar of progressBar){
        let targetWidth=bar.getAttribute("data-bar-width");
        let currentWidth=0;
        let interval=setInterval(function(){
            if (currentWidth>targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width=currentWidth+'%';
        },3)
    }
}
// fillBars();
//function to check skillbar container
function checkscroll(){
    var skillCoordinates=skillcontainer.getBoundingClientRect().top;
    if (!animationDone && skillCoordinates<=window.innerHeight){
        animationDone=true;
        console.log("skill section visible")
        fillBars();
    }
    else if(skillCoordinates>window.innerHeight){
        animationDone=false;
        initializebar();
    }
    
}
// checkscroll();
window.addEventListener('scroll',checkscroll)