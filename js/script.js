const notify = () => {
    alert("Looking forward to meeting you ^_^")
}

elusiveButton = document.getElementById("elusive")
elusiveButton.addEventListener('mouseover', () => {
    elusiveButton.style.position = "absolute";
    elusiveButton.style.left = `${random(0, 70)}%`;
    elusiveButton.style.top = `${random(0, 90)}%`;
});

const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}