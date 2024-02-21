
import card from "../card";
import generatorRandomCards from "./generatorRandomCards";
import timer from "./timer";


class GameField {
    constructor(parendSelector, tegElement) {
        this.container = document.querySelector(parendSelector);
        this.element = document.createElement(tegElement);
        this.rightAnswer = [];
        this.wrongAnswer = [];
        this.pointsGame = 0;
    }

    startMenu() {
        this.element.classList.add('main-block');
        this.element.innerHTML = `
                    <h1 class="main-block_title">Alias</h1>
                    <button class="main-button utilit-btn1" data-start-game>Start game</button>
                    <button class="main-button utilit-btn2" data-open>Rules of game</button>`;
        container.append(this.element);

        document.querySelector('button[data-start-game]').addEventListener('click', () => {
            this.removeElement();
            this.startGame();
        })
        document.querySelector('button[data-open]').addEventListener('click', () => {
            this.removeElement();
            this.openRules();
        })
    }

    openRules() {
        this.element.classList.add('main-block');
        this.element.innerHTML = `<h2 class="rules_title">Правила игры:</h2> 
            <p class="rules_text">Игрок за 60секунд должен на английском обьяснить другому игроку слово указанное на карточке. Если смог тогда жми кнопку "YES", если нет тогда нажимай "NO". За каждое отгаданное слово игрок получит 1 балл!!!</p> 
            <button class="main-button utilit-btn1" data-back>back</button>`;
        container.append(this.element);

        document.querySelector('button[data-back]').addEventListener('click', () => {
            this.removeElement();
            this.startMenu();
        })
    }

    startGame() {
        this.clear();

        let aliasCard = generatorRandomCards(card);

        this.element.classList.add('main-block', 'field');
        this.element.innerHTML = `
            <span class="field_time" data-time>60</span>
            <img class="img">
            <div>
                <button class="answer-button wrong" id="card-false">No</button>
                <button class="answer-button right" id="card-true">Yes</button>
            </div>`;
        container.append(this.element);

        const img = document.querySelector('.img');
        img.src = aliasCard.img;

        this.time();
        
        document.querySelectorAll('button').forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target.classList.contains('wrong')) {
                    
                  

                    this.wrongAnswer.push(aliasCard.word);

                    aliasCard = generatorRandomCards(card)
                    img.src = aliasCard.img;

                    if (document.querySelector('span[data-time]').textContent === 'finish') {
                        this.removeElement();
                        this.stopGame();
                      }
                    
                }
                if(e.target.classList.contains('right')) {

                   

                    this.pointsGame += 1;
                    this.rightAnswer.push(aliasCard.word);  

                    aliasCard = generatorRandomCards(card)
                    img.src = aliasCard.img;
                    
                    console.log(this.rightAnswer);

                    if (document.querySelector('span[data-time]').textContent === 'finish') {
                      this.removeElement();
                      this.stopGame();
                    }
                
                }
            })
        })

       
    }

    stopGame() {

        const rightAnswerResult = this.rightAnswer.join(', ');
        const wrongAnswerResult = this.wrongAnswer.join(', ');

        this.element = document.createElement('div');
        this.element.classList.add('answer_block');
        this.element.innerHTML = `
        <h2 class="answer_title">Общий бал :&nbsp&nbsp&nbsp<span class="answer_points">${this.pointsGame}</span></h2>
        <div class="answer_part">Отгаданние слова : <span class="answer_out-right">${rightAnswerResult}</span></div>
        <div class="answer_part">Не отгадание слова : <span class="answer_out-wrong">${wrongAnswerResult}</span></div>
            <div class="answer_flexBtn">
                <button class="main-button utilit-btn1" id="NewGame">New game</button>
                <button class="main-button utilit-btn2" id="BackMenu">Back Menu</button>
            </div>
        `
        container.append(this.element);

        document.querySelectorAll('button').forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target.id === "NewGame") {
                    this.removeElement();
                    this.startGame();
                }
                if (e.target.id === "BackMenu") {
                    this.removeElement();
                    this.startMenu();
                }
            })
        })
        
    }

    time() {

    const time = document.querySelector('span[data-time]');

    let second = 3;

    const timer = setInterval(() => {
        if (second > 0) {
            second -= 1;
            time.textContent = second;
        } else {
            time.textContent = "finish";
            clearInterval(timer);
        };
    }, 1000);
    }

    clear() {
        this.pointsGame = 0;
        this.rightAnswer = [];
        this.wrongAnswer = [];
    }
    removeElement() {
        this.element.remove();
    }
}




export default GameField;

