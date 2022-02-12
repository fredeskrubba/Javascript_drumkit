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
        case "q":
        case "Q":
            let sound1 = new Audio("air.mp3");
                sound1.play;
                break;
        case "W":
            let sound2 = new Audio("clap.wav");
            sound2.play;
            break;
        case "E":
            let sound3 = new Audio("hihat.wav");
            sound3.play;
            break;
    }   
}

