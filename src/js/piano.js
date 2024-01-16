let pianoKeys = [
    ["q", "../public/assets/audio/q.mp3"],
    ["w", "../public/assets/audio/w.mp3"],
    ["e", "../public/assets/audio/e.mp3"],
    ["r", "../public/assets/audio/r.mp3"],
    ["t", "../public/assets/audio/t.mp3"],
    ["y", "../public/assets/audio/y.mp3"],
    ["u", "../public/assets/audio/u.mp3"],
    ["2", "../public/assets/audio/2.mp3"],
    ["3", "../public/assets/audio/3.mp3"],
    ["5", "../public/assets/audio/5.mp3"],
    ["6", "../public/assets/audio/6.mp3"],
    ["7", "../public/assets/audio/7.mp3"],
    ["8", "../public/assets/audio/8.mp3"],
];

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
            keys[i].classList.add('playing'); 
            setTimeout(() => {
                keys[i].classList.remove('playing'); 
            }, 500);
            return 0;
        }
    }
})



