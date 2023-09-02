document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.body.classList.remove("preload");
    }, 500);

    const btnRules = document.querySelector(".rules-btn");
    const modalRules = document.querySelector(".modal");
    const playAgainBtn = document.querySelector(".play-again");

    // Show/Hide Rules
    btnRules.addEventListener("click", () => {
        modalRules.classList.toggle("show-modal");
    });

    document.querySelector(".close-btn").addEventListener("click", () => {
        modalRules.classList.toggle("show-modal");
    });

    // Play Again
    playAgainBtn.addEventListener("click", () => {
        document.querySelector(".game").classList.toggle("hidden");
        document.querySelector(".results").classList.toggle("hidden");

        document.querySelectorAll(".results__result").forEach((resultDiv) => {
            resultDiv.innerHTML = "";
            resultDiv.classList.remove("winner");
        });

        document.querySelector(".results__text").innerText = "";
        document.querySelector(".results__winner").classList.toggle("hidden");
        document.querySelector(".results").classList.toggle("show-winner");
    });
});
