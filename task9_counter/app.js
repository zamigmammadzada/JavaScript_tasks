let counter = document.querySelector("span");

let counterState = Number(counter.innerText);

const increaseButton = document.getElementById("artirmaq");

increaseButton.addEventListener("click", () => {
    counter.innerText = counterState += 1;
});

const decreaseButton = document.getElementById("azaltmaq");

decreaseButton.addEventListener("click", () => {
    counter.innerText = counterState -= 1;
});

const resetButton = document.getElementById("resetlemek");

resetButton.addEventListener("click", () => {
    counter.innerText = counterState = 0;
});