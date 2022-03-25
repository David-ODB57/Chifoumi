class Chifoumi {
  constructor() {
    // super();
    this.buttons = document.querySelectorAll(".selection button");
    this.restart = document.querySelector("#restart");
    this.container = document.querySelector(".container");
    this.cScore = document.querySelector("#computerScore");
    this.pScore = document.querySelector("#playerScore");
    this.computerShowIcon = document.querySelector(".computer i");
    this.playerShowIcon = document.querySelector('.show i');
    this.choices = [
      "fas fa-hand-rock",
      "fas fa-hand-paper",
      "fas fa-hand-scissors"
    ];
    this.count = 0;
    this.text1 = document.querySelector("#text1");
    this.text2 = document.querySelector("#text2");
    this.computerScore = 0;
    this.playerScore = 0;
    this.boundListener = this.showContainer.bind(this);
    this.game();
  }

  showContainer() {
    this.container.style.setProperty("--container-display", "flex");
    this.buttons.forEach((btn) => {
      btn.removeEventListener("click", this.boundListener);
    });
  }

  game() {
    this.buttons.forEach((btn) => {
      btn.addEventListener("click", this.boundListener);
      btn.addEventListener("click", (e) => {
        let playerChoice = e.target.className;
        this.playerShowIcon.className = playerChoice;
        let randomNum = Math.floor(Math.random() * this.choices.length);
        let computerChoice = this.choices[randomNum];
        this.computerShowIcon.className = computerChoice;
        this.selectWinner(computerChoice, playerChoice);
      });
    });

    this.restart.addEventListener('click', () => {
      this.container.style.setProperty("--container-display", "none");
      this.restartGame();
    });
  }

  redefineChoicesArray(pChoice) {
    let pChoicePos = this.choices.indexOf(pChoice);
    let len = this.choices.length;

    if( pChoicePos > 1) {
      let newChoices = [...this.choices.slice(pChoicePos - 1, len), ...this.choices.slice(0,1)];
      return newChoices;
    } else if (pChoicePos < 1) {
      let newChoices = [...this.choices.slice(2, len), ...this.choices.slice(pChoicePos, 2)];
      return newChoices;
    } else {
      return this.choices;
    }
  }
  
  selectWinner(cChoice, pChoice) {
    const arr = this.redefineChoicesArray(pChoice)
    let win;
    arr.indexOf(pChoice) === arr.indexOf(cChoice) ? win = null : arr.indexOf(pChoice) > arr.indexOf(cChoice) ? win = true : win = false;

    switch (win) {
      case true:
        this.playerScore++;
        this.pScore.innerHTML = this.playerScore;
        this.text1.innerHTML = "Gagné ! ";
        this.text1.style.color = 'rgb(1, 146, 1)';
        this.text2.innerHTML = this.text1.innerHTML;
        this.text2.style.color = 'rgb(1, 146, 1)';
        break;
      
      case false:
        this.computerScore++;
        this.cScore.innerHTML = this.computerScore;
        this.text1.innerHTML = "Perdu ! ";
        this.text1.style.color = 'red';
        this.text2.innerHTML = text1.innerHTML;
        this.text2.style.color = 'red';
        break;
    
      case null:
        this.pScore.innerHTML = this.pScore.innerHTML;
        this.cScore.innerHTML = this.cScore.innerHTML;
        this.text1.innerHTML = "Match nul ! ";
        this.text1.style.color = 'orange';
        this.text2.innerHTML = this.text1.innerHTML;
        this.text2.style.color = 'orange';
        break;
      
      default:
        break;
    }
  }

  restartGame() {
    this.cScore = 0;
    this.pScore = 0;
    this.text1.innerText = "";
    this.text2.innerText = "Choississez !";
    let newGame = new Chifoumi();
  }
}

(function initGame() {
  let game = new Chifoumi();
})();