
import card from "../card";
import generatorRandomCards from "./generatorRandomCards";
import timer from "./timer";


class GameField {
    constructor(parendSelector, tegElement) {
        this.container = document.querySelector(parendSelector);
        this.element = document.createElement(tegElement);
        this.rightAnswer = [];
        this.wrongAnswer = [];
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

    startGame(card) {
        
        let aliasCard = generatorRandomCards(card);
        let pointsGame = 0;


        // function createElementImg(aliasCard) {
        //     const element = document.createElement('img');
        //     element.classList.add('img');
        //     element.src = aliasCard.img;
        //     container.append(element);
        // }

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
        timer();
        
        document.querySelectorAll('button').forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target.classList.contains('wrong')) {
                  
                    
                }
                if(e.target.classList.contains('right')) {
                    pointsGame += 1;
                    rightAnswer.push(card.word);  
                
                        let deletIndex = card.indexOf(word);
                        card.splice(deletIndex, 1);
                
                    if( second === 0 ) {
                        stopGame();
                    };
                }
            })
        })
       
    }

    removeElement() {
        this.element.remove();
    }
}




export default GameField;

