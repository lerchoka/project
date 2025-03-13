let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["камень", "ножницы", "бумага"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    let result = "";

      if (humanChoice === computerChoice) {
          result = `Ничья! Оба выбрали ${humanChoice}.`;
      } else if (
          (humanChoice === "камень" && computerChoice === "ножницы") ||
          (humanChoice === "ножницы" && computerChoice === "бумага") ||
          (humanChoice === "бумага" && computerChoice === "камень")
      ) {
          result = `Вы выиграли! ${humanChoice} побеждает ${computerChoice}.`;
          humanScore++;
      } else {
          result = `Вы проиграли! ${computerChoice} побеждает ${humanChoice}.`;
          computerScore++;
      }
      
      document.getElementById("result").textContent = result;
      document.getElementById("score").textContent = `Счёт: Человек ${humanScore} - ${computerScore} Компьютер`;
  }
