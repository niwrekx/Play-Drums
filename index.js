//detection of button press//

var numberOfDrumButtons = document.querySelectorAll(".drum").length;//set var to know the number of drums//


for (var i = 0; i < numberOfDrumButtons; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;
        
// switch key here was before //    
        
        makeSound(buttonInnerHTML);//pass switch key//
        buttonAnimation(buttonInnerHTML); //call the button animation function//    

    });
}

//detection of button press//
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);//call the button animation function//
    
});


function makeSound(key){
            //switch key start//
            switch (key){
            case "w":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
            break;
                
            case "a":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
            break;
            
            case "s":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
            break;
                
            case "d":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
            break;
                
            case "j":
                var crash = new Audio("./sounds/crash.mp3");
                crash.play();
            break;
                
            case "k":
                var kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();
            break;
            
            case "l":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
            break;
            default: console.log(buttonInnerHTML);
                
            }
            //switch key end// 
}


//---------To Animate Button when press---------//
function buttonAnimation(currentkey){
    //var activebutton -- is assigned to the press button with the concatenate css class query selector//
    var activeButton = document.querySelector("." + currentkey); //concatenate css class of button ex ".w"//
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");//setTimeout(xxxx, no. secs)//
    },100)//delay in millisecond//
}







//var audio = new Audio("./sounds/tom-1.mp3");
//audio.play();