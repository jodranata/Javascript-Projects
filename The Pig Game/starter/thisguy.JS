
var scores, roundScore, activePlayer, dice, gamePlaying;
init();
//document.querySelector("#current-" + activePlayer).textContent = dice;
//var x = document.querySelector("#score-0").textContent;



function nextPlayer() {
    activePlayer = activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector('.player-0-panel').classList.toggle("active");
    document.querySelector('.player-1-panel').classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
  }
  
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying === 1) {
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png";
    if (dice !== 1) {
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }

});

document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying === 1) {
    // add current score
    scores[activePlayer] += roundScore;
    // update the UI
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    //check if player won the Game
    if (scores[activePlayer] >= 10) {
      document.querySelector('#name-' + activePlayer).textContent = "Winner!";
      document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
      document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
      document.querySelector('.dice').style.display = "none";
      gamePlaying = 0;
    } else {
      nextPlayer();
    }

  }

});







document.querySelector('.btn-new').addEventListener('click', init);


function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = 1;
  document.querySelector('.dice').style.display = "none";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector('.player-0-panel').classList.remove("active");
  document.querySelector('.player-0-panel').classList.add("active");
  document.querySelector('.player-1-panel').classList.remove("active");

}
