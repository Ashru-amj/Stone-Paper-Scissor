const playAgainButton = document.getElementById("playAgainButton");

playAgainButton.addEventListener("click", () => {
    window.location.href = "index.html"; // Replace with the actual URL of your first page
});


const openButton = document.getElementById("openButton");
const rulesContainer = document.getElementById("rulesContainer");
const closeButton = document.getElementById("closeButton");

openButton.addEventListener("click", () => {
    rulesContainer.classList.remove("hidden");
});

closeButton.addEventListener("click", () => {
    rulesContainer.classList.add("hidden");
});