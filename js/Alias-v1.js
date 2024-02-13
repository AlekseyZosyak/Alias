import card from './card.js';
import openRules from './RulesOfGame.js';

const mainBlock = document.querySelector('.main-block');
const sectionContainer = document.querySelector('.container');

const btnStart = document.querySelector('#start-game');
btnStart.addEventListener('click', startGame);

let rightAnswer = [];
let wrongAnswer = [];
let pointsGame = null;
let word = null;
var cardAlias = null;
let timerID = null;
let second = 10;





// Start game!
function startGame() {  

    gameInfo.remove();
    goBackMenu.remove();
    mainBlock.remove();

    gameField();
    timerID = setInterval(timer, 1000);
    clear();
};

// Random image generation.
function randomImg() {
    
    cardAlias = card[Math.floor(Math.random() * card.length)];
    if (cardAlias == undefined) {
        field.remove();
        return oops();
    };
    img.src = cardAlias.img;
    word = cardAlias;
    
};

const time = document.createElement('div');
const img = document.createElement('img');
const field = document.createElement('div');
const flexBtn = document.createElement('div');
const btnNo = document.createElement('button');
const btnYes = document.createElement('button');

function gameField() {
    
    field.className = 'main-block field';
    time.className = 'field_time';
    time.innerHTML = '<span data-time>60</span>';
    field.append(time);
    
        randomImg();
        img.className = "img";
        field.append(img);   

        flexBtn.className = 'field_flexBtn';
        field.append(flexBtn);
    
        btnNo.className = 'answer-button wrong';
        btnNo.id = 'card-false';
        btnNo.textContent = 'No';
        flexBtn.append(btnNo);
    
        btnYes.className = 'answer-button right';
        btnYes.id = 'card-true';
        btnYes.textContent = 'Yes';
        flexBtn.append(btnYes);
        sectionContainer.append(field);

    const throwOutBTN = document.querySelector('#card-false');
    throwOutBTN.addEventListener('click', throwOutCard);
    const nextBTN = document.querySelector('#card-true');
    nextBTN.addEventListener('click', nextCard); 

};

// Сorrect answer and new card. guessed right
function nextCard() {
    
    pointsGame += 1;
    rightAnswer.push(word.word);  

        let deletIndex = card.indexOf(word);
        card.splice(deletIndex, 1);

    if( second === 0 ) {
        stopGame();
    };
    
    randomImg();
    
}; 

// Wrong answer and new card.
function throwOutCard() {
    
    wrongAnswer.push(word.word);

        let deletIndex = card.indexOf(word);
        card.splice(deletIndex, 1);
        

    if( second === 0 ) {
        stopGame();
    };

    randomImg();
};


// stop game and result output.
const gameInfo = document.createElement('div');

function stopGame() {
    
    stopTimer();
    field.remove();

    const rightAnswerResult = rightAnswer.join(', ');
    const wrongAnswerResult = wrongAnswer.join(', ');

        gameInfo.className = 'answer_block';
        gameInfo.innerHTML = '<h2 class="answer_title">Общий бал :&nbsp&nbsp&nbsp<span class="answer_points"></span></h2>';
        sectionContainer.append(gameInfo);
    
    let points = document.querySelector('.answer_points');
        points.innerText = `${pointsGame}`;
   
    const answerElementYes = document.createElement('div');
        answerElementYes.className = 'answer_part';
        answerElementYes.innerText = 'Отгаданние слова : ';
        gameInfo.append(answerElementYes);
        const elementYes = document.createElement('span');
            elementYes.className = 'answer_out-right';
            elementYes.innerText = `${rightAnswerResult}`;
            answerElementYes.append(elementYes);

    const answerElementNo = document.createElement('div');
        answerElementNo.className = 'answer_part';
        answerElementNo.innerText = 'Не отгаданные слова : ';
        gameInfo.append(answerElementNo);
        const elementNo = document.createElement('span');
            elementNo.className = 'answer_out-wrong';
            elementNo.innerText = `${wrongAnswerResult}`;
            answerElementNo.append(elementNo);
    
    const flexBtn2 = document.createElement('div');
        flexBtn2.className = 'answer_flexBtn';
        gameInfo.append(flexBtn2);

    const btnNewGame = document.createElement('button');
        btnNewGame.id = 'NewGame';
        btnNewGame.className = 'main-button utilit-btn1';
        btnNewGame.innerText = 'New game';
        flexBtn2.append(btnNewGame);
            const newGame = document.querySelector('#NewGame');
            newGame.addEventListener('click', startGame);

    const btnBackMenu = document.createElement('button');
        btnBackMenu.id = 'BackMenu';
        btnBackMenu.className = 'main-button utilit-btn2';
        btnBackMenu.innerText = 'Back menu';
        flexBtn2.append(btnBackMenu);
            const BackMenu = document.querySelector('#BackMenu');
            BackMenu.addEventListener('click', back);
};

const goBackMenu = document.createElement('div');
function back() {

    error.remove();
    gameInfo.remove();
    

    goBackMenu.className = 'main-block';
    goBackMenu.innerHTML = '<h1 class="main-block_title">Alias</h1><button class="main-button utilit-btn1" id="start-game">Start game</button><button class="main-button utilit-btn2" data-open>Rules of game</button>';
    sectionContainer.append(goBackMenu);

    const btnStart = document.querySelector('#start-game');
        btnStart.addEventListener('click', startGame);

    const btnRules = document.querySelector('button[data-open]');
        btnRules.addEventListener("click", openRules);

}; 
export default goBackMenu;


// Start timer in the game.
function timer() {
    const outTime = document.querySelector('span[data-time]');

    if ( second > 0 ) {
        second -= 1;
        outTime.textContent = second;
    } else {
        outTime.textContent = "finish";
    };
};
// Resetting timer.
function stopTimer() {
   clearInterval(timerID);
   second = 15;
};

function clear() {
    pointsGame = 0;
    rightAnswer = [];
    wrongAnswer = [];
};

const error = document.createElement('div');
const oops = function () {
    stopTimer();
        error.className = 'error';
        error.innerHTML = '<h1 class="error_title">ERROR!</h1><p class="error_text">Эй, зачем ты со сной так? зачем так клацать? Я начинающий программис и все баги пофиксить не успел </p>';
        sectionContainer.append(error)
    const errorBtn = document.createElement('button');
        errorBtn.className = 'error_button main-button';
        errorBtn.textContent = 'Давай начнем все с начала'
        error.append(errorBtn);
    errorBtn.addEventListener('click', function() {
        back();
        gameInfo.remove();
        location.reload();
    });
};
