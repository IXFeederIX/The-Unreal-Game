////elementos del menu

const about = document.querySelector(".about");
const option = document.querySelector(".option");
const start = document.querySelector(".start");
const ui = document.querySelector(".wrapper");
const returnbtn = document.querySelector(".returnbtn");
const config = document.querySelector(".config");
const intro = document.querySelector(".intro");
const element = document.querySelector(".opening");
const gameMenu = document.querySelector(".game-menu")
const gameOpening = document.querySelector(".opening")
const footer = document.querySelector("footer");

//// Opening

function introduction(){
    document.body.classList.add("blink");
    setTimeout(function() {
        document.body.classList.remove("blink");
      }, 3000);
}

////


///Audio
introduction();
  var audio = new Audio('ui/intro.wav');
  
  function playAudio() {
    audio.play();
 audio.loop = true;
  }

  function sound(){
    var snd = new Audio('ui/button.wav')
    snd.play()
}
///

///Muestra el menu cuando la animacion termina
element.addEventListener('animationend', () => {
    gameOpening.style.display ="none"
    gameMenu.style.display = "flex";
    footer.style.display = "block"
    document.body.classList.add("rflx");
});
///

////devuelve elementos del menu
function goBack(){
    ui.style.display = "block";
    let goBackElements = document.querySelectorAll(".goBack");
  for (let i = 0; i < goBackElements.length; i++) {
    goBackElements[i].style.display = "none";
    sound();
}
document.body.classList.add("gobackFX"); 
setTimeout(function() {
  document.body.classList.remove("gobackFX"); 
}, 500);
}
////

///botones del menu
function options(){
    ui.style.display = "none";
    config.style.display = "flex";
}
function aboutGame(){
    ui.style.display = "none";
    about.style.display = "flex";
  }



function startBtn(){
    ui.style.display ="none";
    intro.style.display ="block";
    footer.style.display ="none"
    document.body.style.background = '#fff';
    document.body.classList.add("blink2");
    document.body.classList.remove("rflx");
}

///