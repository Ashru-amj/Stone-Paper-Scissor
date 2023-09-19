

const imageSources = {
    paper: "icon-imga.jpg",
    scissors: "icon-imgb.png",
    rock: "icon-imgc.jpg",
};

const CHOICESITM = [
    {
        name: "paper",
        beats: "rock",
    },
    {
        name: "scissors",
        beats: "paper",
    },
    {
        name: "rock",
        beats: "scissors",
    },
];



const choiceButtons = document.querySelectorAll(".choice-btn");
const gameDiv = document.querySelector(".game");
const resultsDiv = document.querySelector(".results");
const resultDivs = document.querySelectorAll(".results__result");
const resultWinner = document.querySelector(".results__winner");
const resultText = document.querySelector(".results__text");
const playAgainBtn = document.querySelector(".play-again");






// Initialize scores to 0 before reading from localStorage
const scoreNumber = document.querySelectorAll(".score__number");
let scores = [0, 0]; // Index 0 is for computer score, Index 1 is for your score

const openButton = document.getElementById("openButton");
const rulesContainer = document.getElementById("rulesContainer");
const closeButton = document.getElementById("closeButton");

// Check if the local storage values are not already set (e.g., when the user opens a new tab)
if (localStorage.getItem('computerScore') === null || localStorage.getItem('yourScore') === null) {
    localStorage.setItem('computerScore', '0'); // Initialize computer score to 0
    localStorage.setItem('yourScore', '0'); // Initialize your score to 0
}

// Update the scores in the DOM
scoreNumber[0].innerText = scores[0];
scoreNumber[1].innerText = scores[1];

// Add a click event listener to your play buttons (for example)
choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const choiceName = button.dataset.choice;
        const choice = CHOICESITM.find((choice) => choice.name === choiceName);
        const computerChoice = computerChoose();
        displayResults([choice, computerChoice]);
        const result = getGameResult([choice, computerChoice]);
        displayWinner(result);
    });
});



function computerChoose() {
    const rand = Math.floor(Math.random() * CHOICESITM.length);
    return CHOICESITM[rand];
}

function displayResults(results) {
    resultDivs.forEach((resultDiv, idx) => {
        setTimeout(() => {
            resultDiv.innerHTML = `
          <div class="choice ${results[idx].name}">
            <img src="${imageSources[results[idx].name]}" alt="${results[idx].name}" />
          </div>
        `;
        }, idx * 1000);
    });

    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");
}

function getGameResult(results) {
    if (results[0].beats === results[1].name) {
        return "win"; // You win
    } else if (results[1].beats === results[0].name) {
        return "lose"; // You lose
    } else {
        return "tie"; // It's a tie
    }
}



// function displayWinner(result) {
//     // Decreased timeout duration to 500ms (half a second)
//     setTimeout(() => {
//         if (result === "lose") {
//             resultText.innerHTML = "YOU LOSE <h4 style='font-size: small; justify-content:center;text-align:center'> AGAINST PC </h4>";
//             resultDivs[1].classList.toggle("looser");
//             scores[0] += 1; // Increase your score by 1
//             nextButton.classList.add("hidden");
//         } else if (result === "win") {
//             resultText.innerHTML = "YOU WIN <h4 style='font-size: small; justify-content:center;text-align:center'> AGAINST PC </h4>";
//             resultDivs[0].classList.toggle("winner");
//             scores[1] += 1; // Increase computer's score by 1
//             // Show the "Next" button when you win
//             const nextButton = document.getElementById("nextButton");
//             nextButton.classList.remove("hidden");
//         } else {
//             resultText.innerText = " TIE UP ";
//             // const ReplayBtn = document.querySelector(".play-again");
//             // ReplayBtn.classList.remove("hidden"); // Show the "Replay" button
//             const playAgainButton = document.querySelector(".play-again");
//             playAgainButton.classList.remove("hidden"); // Hide the "Play Again" button
            
//         }
//         resultWinner.classList.toggle("hidden");
//         resultsDiv.classList.toggle("show-winner");

//         // Update scores
//         scoreNumber[0].innerText = scores[0]; // Computer score
//         scoreNumber[1].innerText = scores[1]; // Your score

//         // Update the localStorage values
//         localStorage.setItem('computerScore', scores[0]);
//         localStorage.setItem('yourScore', scores[1]);
//     }, 500); // Adjust this timeout duration as needed
// }


const ReplayBtn=document.querySelector(".replay")


function displayWinner(result) {
    // Decreased timeout duration to 500ms (half a second)
    setTimeout(() => {
        if (result === "lose") {
            resultText.innerHTML = "YOU LOSE <h4 style='font-size: small; justify-content:center;text-align:center'> AGAINST PC </h4>";
            resultDivs[1].classList.toggle("looser");
            scores[0] += 1; // Increase your score by 1
            nextButton.classList.add("hidden");
            ReplayBtn.classList.add("hidden"); // Show the "Replay" button
            playAgainBtn.classList.remove("hidden"); // Hide the "Play Again" button
        } else if (result === "win") {
            resultText.innerHTML = "YOU WIN <h4 style='font-size: small; justify-content:center;text-align:center'> AGAINST PC </h4>";
            resultDivs[0].classList.toggle("winner");
            scores[1] += 1; // Increase computer's score by 1
            const nextButton = document.getElementById("nextButton");
            nextButton.classList.remove("hidden");
            ReplayBtn.classList.add("hidden"); // Hide the "Replay" button
            playAgainBtn.classList.remove("hidden"); // Hide the "Play Again" button
        } else {
            resultText.innerText = " TIE UP ";
            ReplayBtn.classList.remove("hidden"); // Show the "Replay" button
            playAgainBtn.classList.add("hidden"); // Hide the "Play Again" button
        }
        resultWinner.classList.toggle("hidden");
        resultsDiv.classList.toggle("show-winner");

        // Update scores
        scoreNumber[0].innerText = scores[0]; // Computer score
        scoreNumber[1].innerText = scores[1]; // Your score

        // Update the localStorage values
        localStorage.setItem('computerScore', scores[0]);
        localStorage.setItem('yourScore', scores[1]);
    }, 500); // Adjust this timeout duration as needed
}



ReplayBtn.addEventListener("click", () => {
    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");

    resultDivs.forEach((resultDiv) => {
        resultDiv.innerHTML = "";
        resultDiv.classList.remove("winner");
    });

    resultText.innerText = "";
    resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");
});






const nextButton = document.getElementById("nextButton");

nextButton.addEventListener("click", () => {
    // Redirect to another page when the "Next" button is clicked
    window.location.href = "end.html"; // Replace with the actual URL
});

// Play Again
playAgainBtn.addEventListener("click", () => {
    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");

    resultDivs.forEach((resultDiv) => {
        resultDiv.innerHTML = "";
        resultDiv.classList.remove("winner");
    });

    resultText.innerText = "";
    resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");
});





// replayBtn.addEventListener("click", () => {
//     gameDiv.classList.toggle("hidden");
//     resultsDiv.classList.toggle("hidden");

//     resultDivs.forEach((resultDiv) => {
//         resultDiv.innerHTML = "";
//         resultDiv.classList.remove("winner");
//     });

//     resultText.innerText = "";
//     resultWinner.classList.toggle("hidden");
//     resultsDiv.classList.toggle("show-winner");
// });



openButton.addEventListener("click", () => {
    rulesContainer.classList.remove("hidden");
});

closeButton.addEventListener("click", () => {
    rulesContainer.classList.add("hidden");
});


document.addEventListener('DOMContentLoaded', () => {
    const computerScore = localStorage.getItem('computerScore');
    const yourScore = localStorage.getItem('yourScore');

    if (computerScore !== null && yourScore !== null) {
        scores = [parseInt(computerScore), parseInt(yourScore)];
        scoreNumber[0].innerText = scores[0]; // Computer score
        scoreNumber[1].innerText = scores[1]; // Your score
    }
});

