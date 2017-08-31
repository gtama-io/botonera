const sounds = document.querySelectorAll('[data-mp3]');
let audio = undefined;

console.log(sounds);
console.log(audios);

for (var i = 0; i < sounds.length; i++) {
    var element = sounds[i];
    const mp3Path = 'assets/audio/' + element.dataset.mp3;
    console.log(mp3Path);

    element.addEventListener('click', () => {
        debugger;
        if (!audio) {
            audio = new Audio(mp3Path);
            audio.addEventListener('ended', () => {
                audio = null;
                console.log('audio ended');
            });
            audio.play();
        }
    });
}


