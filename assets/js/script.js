const buttons = document.querySelectorAll("button");
const buttonArray = Array.from(buttons);

buttonArray.forEach(button =>{
    button.addEventListener("click", ()=>{
        sound(button.innerHTML);
    });
});

document.addEventListener("keypress", (e)=>{
    sound(e.key);
});

function sound(key){
    switch(key){
        // switch fallthrough cause || doesn't work in a switch
        case "q":
        case "Q":
            let sound1 = new Audio("assets/sounds/boom.wav");
            sound1.play();
            break;
        case "w":
        case "W":
            let sound2 = new Audio("assets/sounds/clap.wav");
            sound2.play();
            break;
        case "e":
        case "E":
            let sound3 = new Audio("assets/sounds/hihat.wav");
            sound3.play();
            break;
        case "r":
        case "R":
            let sound4 = new Audio("assets/sounds/kick.wav");
            sound4.play();
            break;
        case "t":
        case "T":
            let sound5 = new Audio("assets/sounds/openhat.wav");
            sound5.play();
            break;
        case "y":
        case "Y":
            let sound6 = new Audio("assets/sounds/ride.wav");
            sound6.play();
            break;
        case "a":
        case "A":
            let sound7 = new Audio("assets/sounds/snare.wav");
            sound7.play();
            break;
        case "s":
        case "S":
            let sound8 = new Audio("assets/sounds/tink.wav");
            sound8.play();
            break;
    }   
}

