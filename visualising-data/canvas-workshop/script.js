const cx = document.querySelector("canvas").getContext("2d");
const patternImg = new Image();

const repetitions = 25

fetch("https://api.github.com/emojis")
    .then(data => {
        return data.json();
    })
    .then(emojiData => {
        patternImg.src = emojiData.smiley_cat;
        patternImg.onload = function () {
            let pattern = cx.createPattern(patternImg, 'repeat');
        
        }
    });