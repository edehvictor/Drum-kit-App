// document.querySelector('drum').addEventListener('click', function()) ---anonymous function
// document.querySelector('drum').addEventListener('click', ()=>{})--->arrow funvction
// document.querySelector('.drum').addEventListener('click', ()=>{---.....>for the first drum
// alert('I was clicked')


// example of the for loop
// const draw = document.querySelectorAll('.drum')
// for (let index = 1; index < draw.length; index++)  {
//     const element = draw[index]
// element.addEventListener('click', () =>{
//    alert('i was clicked')
// })}

// }
// // second example of the for loop
// const buttons = document.querySelectorAll('.drum')
// for (let index = 1; index < buttons.length; index++)  {
//     buttons[index].addEventListener('click', ()=>{
//         alert('I was clicked')
//     })
// }

// example of forEach loop
// const buttonSec = document.querySelectorAll('.drum')

// buttonSec.forEach(buttonsElement =>{
//     buttonsElement.addEventListener('click', ()=>{
//         alert('click me again')
//     })
// })

// referencing a function e.g of forEach
const buttonSec = document.querySelectorAll('.drum')
buttonSec.forEach(buttonElement => {
    buttonElement.addEventListener('click', handleClickEvent)
})
function handleClickEvent() {
    // alert('click once more')
    const drum = this.textContent
    makeSound(drum)
    addAnimation(drum)
    // console.log(drum)
}

document.addEventListener('keydown', handleKeydownEvent);

// HTML DOM events allow JavaScript to register different event handlers on elements in an HTML document.
function handleKeydownEvent(event) {
    // stores key being pressed
    const key = event.key
    makeSound(key)
    addAnimation(key)
    // console.log(event)
    // console.log(key)
}



function makeSound(drumKey) {
    switch (drumKey.toLowerCase()) {
        case 'w':
            //the new keyword creates an empty object of  each button and gives it this property below
            const tom1Sound = new Audio('./assets/sounds/tom-1.mp3')
            tom1Sound.play()
            break;
        case 'a':
            const tom2Sound = new Audio('./assets/sounds/tom-2.mp3')
            tom2Sound.play()
            break;
        case 's':
            const tom3Sound = new Audio('./assets/sounds/tom-3.mp3')
            tom3Sound.play()
            break;
        case 'd':
            const tom4Sound = new Audio('./assets/sounds/tom-4.mp3')
            tom4Sound.play()
            break;
        case 'j':
            const snareSound = new Audio('./assets/sounds/snare.mp3')
            snareSound.play()
            break;
        case 'k':
            const crashSound = new Audio('./assets/sounds/crash.mp3')
            crashSound.play()
            break;
        case 'l':
            const kickSound = new Audio('./assets/sounds/kick-bass.mp3')
            kickSound.play()
            break;

        default:
            console.error('Error playing Sound')
            break;
    }

}

function addAnimation(drumKey) {
    const activeDrum = document.querySelector(`.${drumKey}`)
    activeDrum.classList.add('pressed')


    setTimeout(() => {
        activeDrum.classList.remove('pressed')
    }, 100);
}

//     if (drum ==='w') {
//         const tom1Sound = new Audio('./assets/sounds/tom-1.mp3')
//         tom1Sound.play()
//     }else if (drum === 'a') {
//         const tom2Sound = new Audio('./assets/sounds/tom-2.mp3')
//         tom2Sound.play()
//     }else if (drum === 's') {
//         const tom3Sound = new Audio('./assets/sounds/tom-3.mp3')
//         tom3Sound.play()
//     }else if (drum === 'd') {
//         const tom4Sound = new Audio('./assets/sounds/tom-4.mp3')
//         tom4Sound.play()
// }else if (drum === 'j') {
//     const tom5Sound = new Audio('./assets/sounds/snare.mp3')
//     tom5Sound.play()
// }else if (drum === 'k') {
//     const tom6Sound = new Audio('./assets/sounds/crash.mp3')
//     tom6Sound.play()
// }else if (drum === 'l') {
//     const tom7Sound = new Audio('./assets/sounds/kick-bass.mp3')
//     tom7Sound.play()
// }

























