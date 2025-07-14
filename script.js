let count = 0;

const countElement = document.getElementById("count");
const button = document.getElementById("clickButton");

button.addEventListener("click", () => {
    count++;
    countElement.textContent = count;
});
