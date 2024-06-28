const balloon = document.getElementById('balloon');
let size = 200;
const max_size = 420;
const min_size = 200;
const sizeIncrement = 10;
const sizeDecrement = 5;
let colors = ['red', 'green', 'blue'];
let colorIndex = 0;

function changeColor() {
    colorIndex = (colorIndex + 1) % colors.length;
    return colors[colorIndex];
}

function reverseColor() {
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    return colors[colorIndex];
}

balloon.addEventListener('click', () => {
    size += sizeIncrement;
    if (size > max_size) {
        size = min_size;
        colorIndex = 0;
    } else {
        balloon.style.backgroundColor = changeColor();
    }
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
});

balloon.addEventListener('mouseleave', () => {
    size = Math.max(size - sizeDecrement, min_size);
    balloon.style.backgroundColor = reverseColor();
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
});