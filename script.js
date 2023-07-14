import Square from './square.js'

const square = new Square(document.getElementById("square"));

document.getRootNode().addEventListener('click', () => {
    square.reset();
});

let oldTime;
function update(time) {
    if (oldTime != null) {
        const delta = time - oldTime;
        square.update(delta);
    }
    oldTime = time;
    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);
