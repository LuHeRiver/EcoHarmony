/* const keys = document.querySelectorAll('.key'); */

/* let keys = {
    "1" : "../public/assets/audio/1.mp3",
    "2" : "../public/assets/audio/2.mp3",
    "3" : "../public/assets/audio/3.mp3",
    "4" : "../public/assets/audio/4.mp3",
    "5" : "../public/assets/audio/5.mp3",
    "6" : "../public/assets/audio/6.mp3",
    "7" : "../public/assets/audio/7.mp3",
}
 */


/* keys.forEach(key =>{
    key.addEventListener('click', () => playNote(key))
})
function playNote(key){
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.play()
} */

const keys = document.querySelectorAll('.key');

keys.forEach(key =>{
    key.addEventListener('click', () => {
        let audio = new Audio("../public/assets/audio/1.mp3");
        audio.play();
    })
});



