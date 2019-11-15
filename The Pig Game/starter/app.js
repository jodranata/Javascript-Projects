/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let totalScores, currentScore, activePlayer, gameState;


function start() { //create the function start so we can reset the whole thing with new game button
    //Keep track of the score;
    totalScores = [0,0];
    currentScore = 0;
    gameState = 1;
    //keep track of the current player/active player
    //set to 0 because we use it to select scores variable
    //0 for player 1, 1 for player 2.
    activePlayer = 0; 
    
    
    //hide the dice img when the game just starting;
    hideDice();
    //Text in the current and total score is 0;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    resetCurrentScore();
    //Chage the WINNER text to initial text of player 1 and player 2
    document.getElementById('name-0').innerHTML = 'PLAYER 1';
    document.getElementById('name-1').innerHTML = 'PLAYER 2';
    //Remove the CSS active class from both player (it's a new game)
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    //remove the CSS winner class from both player, no matter who wins 
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    //add css active class to player 1 >> reset
    document.querySelector('.player-0-panel').classList.add('active');
    
    }

start();

function hideDice() {
    document.getElementById('dice').style.display = 'none';
}

function resetCurrentScore() {
    document.getElementById('current-0').textContent = '0'; 
    document.getElementById('current-1').textContent = '0';
}

function displayTotalScore() {
    document.getElementById('score-'+ activePlayer).textContent = totalScores[activePlayer];
}

let nextPlayer = function() { // created to change the player;
    // the action when a player hits 1 and click hold button.
        //next player if it hits one
        activePlayer = activePlayer === 0? 1 : 0;
        //reset the current score to 0 and display it to the HTML
        currentScore = 0; // this is for our javascript calculation.
        //the next one for displaying it to our HTML
        resetCurrentScore();
        
        //It will change the 'active' class of HTML element to next;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //hide the dice again;
        document.getElementById('dice').style.display = 'none';
};


//event listener 'click' the roll dice button HTML
document.querySelector(".btn-roll").addEventListener('click', function() {
    if (gameState === 1) {
    //1. generate random number 1-6 for diceRoll;
    const diceRoll = Math.floor(Math.random() * 6) + 1;

    //2. display the result;
    let diceImgDOM = document.getElementById('dice') ;
    diceImgDOM.style.display = 'block';
    diceImgDOM.src = 'dice-' + diceRoll + '.png';

    //3. add to the current score if the dice roll > 1 and display it.
    if (diceRoll !== 1) {
        currentScore += diceRoll;
        document.getElementById('current-' + activePlayer).textContent = currentScore;        
    }
    else  nextPlayer();

    }
});

//event listener the HOLD button
document.querySelector('.btn-hold').addEventListener('click', function() {
    //add current score to total Score
    totalScores[activePlayer] += currentScore;
    //display the total score;
    displayTotalScore();
    
    //if total score >= 100 game is won;
    if (totalScores[activePlayer] >= 10) {
        totalScores[activePlayer] = 10;
        document.getElementById('name-' + activePlayer).innerHTML = 'WINNER';   
        displayTotalScore();
        hideDice();
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gameState = 0;
    }
    else nextPlayer();
});


document.querySelector('.btn-new').addEventListener('click',start);



// update the value to HTML element with current- activePlayer(0/1)
//document.getElementById('current-' + activePlayer).textContent = diceRoll;