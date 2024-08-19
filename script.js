document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded and ready!');
});
const texts = ["Software Engineer", "Matcha Lover", "Interested in AI", "Harry Potter Enthusiast"];
let index = 0;
let textElement = document.getElementById("typewriter-text");
let typingSpeed = 100; // Speed of typing in milliseconds

function typeText(text, callback) {
    let i = 0;
    textElement.textContent = "";
    let typingInterval = setInterval(() => {
        textElement.textContent += text.charAt(i);
        i++;
        if (i > text.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
                textElement.textContent = "";
                callback();
            }, 1000); // Delay before starting next text
        }
    }, typingSpeed);
}

function startTyping() {
    if (index < texts.length) {
        typeText(texts[index], () => {
            index++;
            startTyping();
        });
    } else {
        index = 0; // Restart the animation
        startTyping();
    }
}

window.onload = startTyping;