// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const hiHat = new Audio('sounds/hi-hat.mp3');
const kickDrum = new Audio('sounds/kick-drum.mp3');
const snareDrum = new Audio('sounds/snare-drum.mp3');



//needed to make tock sound on fourth beat
let fourthBeat = 0;

// This function is called every 600ms
function update() {

    let counter = document.querySelector('#counter');
    let metronomeCounter = (fourthBeat % 4) + 1;

    //sounds for checkboxes
    let metronome = document.querySelector('#metronome');
    let hiHatCheck = document.querySelector('#hi-hat');
    let kickDrumCheck = document.querySelector('#kick-drum');
    let snareDrumCheck = document.querySelector('#snare-drum');
    
    //timing count for the textbox inputs
    let hiHatTiming = document.querySelector('#userInput-hat');
    let kickDrumTiming = document.querySelector('#userInput-kick');
    let snareDrumTiming = document.querySelector('#userInput-snare');
    

    // if(hiHatcheck.checked === true){
    //     hiHat.play();
    // }
    fourthBeat++;
   
    if(metronome.checked === true){
    
    counter.innerText = fourthBeat;
    
    //plays 'tock' on fourth beat 
        if(fourthBeat % 4 === 0){
            tock.play();
        }
        else{
            // Play the 'tick' sound for three beats
        tick.play();
        }
    }
    if(kickDrumCheck.checked === true){

            if(Number(kickDrumTiming.value) === fourthBeat){
                kickDrum.play();
            }
       
    }
    if(snareDrumCheck.checked === true){
            if(Number(snareDrumTiming.value) === fourthBeat){
                snareDrum.play();
            }
       
    }
    if(hiHatCheck.checked === true){
        if(Number(hiHatTiming.value) === fourthBeat){
            hiHat.play();
        }
        
    }
            if(fourthBeat >= 12){
                fourthBeat = 0;
            }
}  

    

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
