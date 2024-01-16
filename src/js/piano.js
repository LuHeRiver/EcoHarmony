let pianoKeys = [
    ["q", "../public/assets/audio/1.mp3"],
    ["w", "../public/assets/audio/2.mp3"],
    ["e", "../public/assets/audio/3.mp3"],
    ["r", "../public/assets/audio/4.mp3"],
    ["t", "../public/assets/audio/5.mp3"],
    ["y", "../public/assets/audio/6.mp3"],
    ["u", "../public/assets/audio/7.mp3"],
    ["2", "../public/assets/audio/a.mp3"],
    ["3", "../public/assets/audio/b.mp3"],
    ["5", "../public/assets/audio/c.mp3"],
    ["6", "../public/assets/audio/d.mp3"],
    ["7", "../public/assets/audio/e.mp3"]]


/* keys.forEach(key =>{
    key.addEventListener('click', () => playNote(key))
}) */

/* function playNote(key){
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.play()
}
*/

const keys = document.querySelectorAll('.key');

for(let i=0; i<keys.length; i++){
    keys[i].addEventListener('click', () => {
        let audio = new Audio(pianoKeys[i][1]);
        audio.play();
    })
}

document.addEventListener('keydown', (event) => {
    for(let i=0; i<keys.length; i++){
        if(event.key === pianoKeys[i][0]){
            let audio = new Audio(pianoKeys[i][1]);
            audio.play();
            return 0;
        }
    }
})



