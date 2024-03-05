const cx = document.querySelector("canvas").getContext("2d");
const patternImg = new Image();

const canvasWidth = 800;
const canvasHeight = 600;


cx.canvas.width = canvasWidth;
cx.canvas.height = canvasHeight;

// console.log(canvas.clientWidth);

const repetitions = 25;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

fetch("https://api.github.com/emojis")
    .then(emojiData => {
        return emojiData.json();
    })
    .then(emojiData => {
        patternImg.src = emojiData.smiley_cat;
        console.log(patternImg);
        patternImg.onload = function () {
            for ( let i = 0; i < repetitions; i++)
            {
                let dx = getRandomInt(canvasWidth)-i;
                let dy = getRandomInt(canvasHeight)-i;
                cx.drawImage(patternImg, dx, dy);
            }
                   
        }
    });