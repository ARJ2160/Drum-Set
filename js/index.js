// jshint esversion:6
//Detecting Button Press
for (var i = 0; i< document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        var button = this.innerHTML;
        keyboardPress(button);
        addAnimation(button);
    });
} 
//Detecting KeyBoard Press
document.addEventListener("keypress",function(event){
    keyboardPress(event.key);
    addAnimation(event.key);
});

//Basically adding two parts of code so that sound is audible if user presses button on screen and also if user presses respective button on keyboard.

function keyboardPress(keys){
    switch(keys) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default :console.log(button);
    }
}
function addAnimation(currentKey){
    var activeButton = document.querySelector("."+ currentKey); 
    activeButton.classList.add("pressed");
    setTimeout(function(){ activeButton.classList.remove("pressed");}, 100);
}