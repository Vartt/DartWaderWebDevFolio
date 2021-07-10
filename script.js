
// Main button
const track = new Audio("sound/coolsaber.mp3");
const hum2 = new Audio("sound/Hum2.mp3");

const btnLightSaber = document.querySelector(".btn");
const saberOff = new Audio("sound/turnOff.mp3");

// Add event listeners to handle (div => light saber handle)
btnLightSaber.addEventListener("mouseover", handler);

btnLightSaber.addEventListener("mouseout", () => {
    saberOff.play();
});

function handler() {
    track.play();
}

function handler2() {
    hum2.play();
}

// Glowing buttons

// 1 Get glowing items from html page

const listOfItems = document.querySelectorAll(".glowing__item li");

for (let i = 0; i < listOfItems.length; i++) {
    listOfItems[i].addEventListener("mouseover", handler2);
}


