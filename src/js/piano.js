let pianoKeys = [
    ["q", "../public/assets/audio/white-keys/q.mp3"],
    ["w", "../public/assets/audio/white-keys/w.mp3"],
    ["e", "../public/assets/audio/white-keys/e.mp3"],
    ["r", "../public/assets/audio/white-keys/r.mp3"],
    ["t", "../public/assets/audio/white-keys/t.mp3"],
    ["y", "../public/assets/audio/white-keys/y.mp3"],
    ["u", "../public/assets/audio/white-keys/u.mp3"],
    ["z", "../public/assets/audio/white-keys/z.mp3"],
    ["x", "../public/assets/audio/white-keys/x.mp3"],
    ["c", "../public/assets/audio/white-keys/c.mp3"],
    ["v", "../public/assets/audio/white-keys/v.mp3"],
    ["b", "../public/assets/audio/white-keys/b.mp3"],
    ["n", "../public/assets/audio/white-keys/n.mp3"],
    ["m", "../public/assets/audio/white-keys/m.mp3"],
    ["2", "../public/assets/audio/black-keys/2.mp3"],
    ["3", "../public/assets/audio/black-keys/3.mp3"],
    ["5", "../public/assets/audio/black-keys/5.mp3"],
    ["6", "../public/assets/audio/black-keys/6.mp3"],
    ["7", "../public/assets/audio/black-keys/7.mp3"],
    ["s", "../public/assets/audio/black-keys/s.mp3"],
    ["d", "../public/assets/audio/black-keys/d.mp3"],
    ["g", "../public/assets/audio/black-keys/g.mp3"],
    ["h", "../public/assets/audio/black-keys/h.mp3"],
    ["j", "../public/assets/audio/black-keys/j.mp3"],
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



