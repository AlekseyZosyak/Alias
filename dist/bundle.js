/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/card.js":
/*!********************!*\
  !*** ./js/card.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const card = [
    { word : 'Cat', img : 'img/Cat.svg' },
    { word : 'Dog', img : 'img/Dog.svg' },
    { word : 'Frog', img : 'img/Frog.svg'},
    { word : 'Horse', img : 'img/Horse.svg' },
    { word : 'Wolf', img : 'img/Wolf.svg' },
    { word : 'Duck', img : 'img/Duck.svg' },
    { word : 'Fox', img : 'img/Fox.svg' },
    { word : 'Lion', img : 'img/Lion.svg' },
    { word : 'Fish', img : 'img/Fish.svg' },
    { word : 'Tiger', img : 'img/Tiger.svg' },
    { word : 'Pig', img : 'img/Pig.svg' },
    { word : 'Mouse', img : 'img/Mouse.svg' },
    { word : 'Ant', img : 'img/Ant.svg' },
    { word : 'Bear', img : 'img/Bear.svg' },
    { word : 'Rabbit', img : 'img/Rabbit.svg' },
    { word : 'Snake', img : 'img/Snake.svg' },
    { word : 'Apple', img : 'img/Apple.svg' },
    { word : 'Pear', img : 'img/Pear.svg' },
    { word : 'Bee', img : 'img/Bee.svg' },
    { word : 'Ice cream', img : 'img/IceCream.svg' },
    { word : 'Egg', img : 'img/Egg.svg' },
    { word : 'Cupcake', img : 'img/Cupcake.svg' },
    { word : 'Banana', img : 'img/Banana.svg' },
    { word : 'Ball', img : 'img/Ball.svg' },
    { word : 'Car', img : 'img/Car.svg' },
    { word : 'Ice', img : 'img/Ice.svg' },
    { word : 'Key', img : 'img/Key.svg' },
    { word : 'Mushroom', img : 'img/Mushroom.svg' },
    { word : 'Umbrella', img : 'img/Umbrella.svg' },
    { word : 'Train', img : 'img/Train.svg' },
    { word : 'Leg', img : 'img/Leg.svg' },
    { word : 'Hand', img : 'img/Hand.svg' }
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (card);


/***/ }),

/***/ "./js/db-cloud.js":
/*!************************!*\
  !*** ./js/db-cloud.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const elementImg = [
    { name: 'ball', src: 'fon/ball.svg', selector: ['ball', 'mode'] },
    { name: 'cloud1', src: 'fon/left1.svg', selector: ['cloud1', 'mode'] },
    { name: 'cloud2', src: 'fon/left2.svg', selector: ['cloud2', 'mode'] },
    { name: 'cloud3', src: 'fon/right3.svg', selector: ['cloud3', 'mode'] },
    { name: 'cloud4', src: 'fon/right4.svg', selector: ['cloud4', 'mode'] },
    { name: 'cloud5', src: 'fon/right5.svg', selector: ['cloud5', 'mode'] },
    { name: 'floor1', src: 'fon/floor1.svg', selector: ['floor1', 'mode', 'mode-floor'] },
    { name: 'floor2', src: 'fon/floor2.svg', selector: ['floor2', 'mode', 'mode-floor'] },
    { name: 'floor3', src: 'fon/floor3.svg', selector: ['floor3', 'mode', 'mode-floor'] }
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elementImg);

/***/ }),

/***/ "./js/fon.js":
/*!*******************!*\
  !*** ./js/fon.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function createCloudAnimation(teg, src, arraySelectorClass) {
    const bg = document.querySelector('body');
    bg.style.backgroundColor = '#C1EFFF';

    const element = document.createElement(teg);

    arraySelectorClass.forEach((item) => {
        element.classList.add(item);
    });

    element.src = src;
    bg.append(element);
    console.log(element);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCloudAnimation);





// const ball = document.createElement('img');
// const ballIndex = element[0]['src'];
//     ball.src = ballIndex;
//     ball.className = 'ball mode';
//     FON.append(ball);

// const cloud1 = document.createElement('img');
// const cloud1Index = element[1]['src'];
//     cloud1.src = cloud1Index;
//     cloud1.className = 'cloud1 mode';
//     FON.append(cloud1);

// const cloud2 = document.createElement('img');
// const cloud2Index = element[2]['src'];
//     cloud2.src = cloud2Index;
//     cloud2.className = 'cloud2 mode';
//     FON.append(cloud2);

// const cloud3 = document.createElement('img');
// const cloud3Index = element[3]['src'];
//     cloud3.src = cloud3Index;
//     cloud3.className = 'cloud3 mode';
//     FON.append(cloud3);

// const cloud4 = document.createElement('img');
// const cloud4Index = element[4]['src'];
//     cloud4.src = cloud4Index;
//     cloud4.className = 'cloud4 mode';
//     FON.append(cloud4);

// const cloud5 = document.createElement('img');
// const cloud5Index = element[5]['src'];
//     cloud5.src = cloud5Index;
//     cloud5.className = 'cloud5 mode';
//         FON.append(cloud5);

// const floor1 = document.createElement('img');
// const floor1Index = element[6]['src'];
//     floor1.src = floor1Index;
//     floor1.className = 'floor1 mode mode-floor';
//     FON.append(floor1);

// const floor2 = document.createElement('img');
// const floor2Index = element[7]['src'];
//     floor2.src = floor2Index;
//     floor2.className = 'floor2 mode mode-floor';
//     FON.append(floor2);

// const floor3 = document.createElement('img');
// const floor3Index = element[8]['src'];
//     floor3.src = floor3Index;
//     floor3.className = 'floor3 mode mode-floor';
//     FON.append(floor3);


/***/ }),

/***/ "./js/modules/generatorRandomCards.js":
/*!********************************************!*\
  !*** ./js/modules/generatorRandomCards.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function generatorRandomCards(card) {
    let cardAlias = card[Math.floor(Math.random() * card.length)];

    if (cardAlias == undefined) {

        return oops();
    };

    return cardAlias;
    
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generatorRandomCards);

/***/ }),

/***/ "./js/modules/startField.js":
/*!**********************************!*\
  !*** ./js/modules/startField.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../card */ "./js/card.js");
/* harmony import */ var _generatorRandomCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generatorRandomCards */ "./js/modules/generatorRandomCards.js");




class GameField {
    constructor(parendSelector, tegElement) {
        this.container = document.querySelector(parendSelector);
        this.element = document.createElement(tegElement);
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
        const aliasCard = (0,_generatorRandomCards__WEBPACK_IMPORTED_MODULE_1__["default"])(_card__WEBPACK_IMPORTED_MODULE_0__["default"]);
        this.element.classList.add('main-block', 'field');
        this.element.innerHTML = `
            <span class="field_time" data-time>60</span>
            <img src="${aliasCard.img}" class="img">
           
            <div>
                <button class="answer-button wrong" id="card-false">No</button>
                <button class="answer-button right" id="card-true">Yes</button>
            </div>`;
        container.append(this.element);
    }

    removeElement() {
        this.element.remove();
    }
}




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameField);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.js */ "./js/card.js");
/* harmony import */ var _db_cloud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db-cloud.js */ "./js/db-cloud.js");
/* harmony import */ var _fon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fon.js */ "./js/fon.js");
/* harmony import */ var _modules_generatorRandomCards_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/generatorRandomCards.js */ "./js/modules/generatorRandomCards.js");
/* harmony import */ var _modules_startField_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/startField.js */ "./js/modules/startField.js");






window.addEventListener('DOMContentLoaded', () => {

    new _modules_startField_js__WEBPACK_IMPORTED_MODULE_4__["default"]('.container', 'div').startMenu();
    
    _db_cloud_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach((item, i) => {
        (0,_fon_js__WEBPACK_IMPORTED_MODULE_2__["default"])('img', _db_cloud_js__WEBPACK_IMPORTED_MODULE_1__["default"][i].src, _db_cloud_js__WEBPACK_IMPORTED_MODULE_1__["default"][i].selector);
    })

   
    
})

    
    
    // const mainBlock = document.querySelector('.main-block');
    // const sectionContainer = document.querySelector('.container');
    
    // const btnStart = document.querySelector('#start-game');
    // btnStart.addEventListener('click', startGame);
    
    // let rightAnswer = [];
    // let wrongAnswer = [];
    // let pointsGame = null;
    // let word = null;
    // var cardAlias = null;
    // let timerID = null;
    // let second = 20;
    
    
    
    
    
    // // Start game!
    // function startGame() {  
    
    //     gameInfo.remove();
    //     goBackMenu.remove();
    //     mainBlock.remove();
    
    //     gameField();
    //     timerID = setInterval(timer, 1000);
    //     clear();
    // };
    
    // // Random image generation.
    // function randomImg() {
        
    //     cardAlias = card[Math.floor(Math.random() * card.length)];
    //     if (cardAlias == undefined) {
    //         field.remove();
    //         return oops();
    //     };
    //     img.src = cardAlias.img;
    //     word = cardAlias;
        
    // };
    
    // const time = document.createElement('div');
    // const img = document.createElement('img');
    // const field = document.createElement('div');
    // const flexBtn = document.createElement('div');
    // const btnNo = document.createElement('button');
    // const btnYes = document.createElement('button');
    
    // function gameField() {
        
    //     field.className = 'main-block field';
    //     time.className = 'field_time';
    //     time.innerHTML = '<span data-time>60</span>';
    //     field.append(time);
        
    //         randomImg();
    //         img.className = "img";
    //         field.append(img);   
    
    //         flexBtn.className = 'field_flexBtn';
    //         field.append(flexBtn);
        
    //         btnNo.className = 'answer-button wrong';
    //         btnNo.id = 'card-false';
    //         btnNo.textContent = 'No';
    //         flexBtn.append(btnNo);
        
    //         btnYes.className = 'answer-button right';
    //         btnYes.id = 'card-true';
    //         btnYes.textContent = 'Yes';
    //         flexBtn.append(btnYes);
    //         sectionContainer.append(field);
    
    //     const throwOutBTN = document.querySelector('#card-false');
    //     throwOutBTN.addEventListener('click', throwOutCard);
    //     const nextBTN = document.querySelector('#card-true');
    //     nextBTN.addEventListener('click', nextCard); 
    
    // };
    
    // // Сorrect answer and new card. guessed right
    // function nextCard() {
        
    //     pointsGame += 1;
    //     rightAnswer.push(word.word);  
    
    //         let deletIndex = card.indexOf(word);
    //         card.splice(deletIndex, 1);
    
    //     if( second === 0 ) {
    //         stopGame();
    //     };
        
    //     randomImg();
        
    // }; 
    
    // // Wrong answer and new card.
    // function throwOutCard() {
        
    //     wrongAnswer.push(word.word);
    
    //         let deletIndex = card.indexOf(word);
    //         card.splice(deletIndex, 1);
            
    
    //     if( second === 0 ) {
    //         stopGame();
    //     };
    
    //     randomImg();
    // };
    
    
    // // stop game and result output.
    // const gameInfo = document.createElement('div');
    
    // function stopGame() {
        
    //     stopTimer();
    //     field.remove();
    
    //     const rightAnswerResult = rightAnswer.join(', ');
    //     const wrongAnswerResult = wrongAnswer.join(', ');
    
    //         gameInfo.className = 'answer_block';
    //         gameInfo.innerHTML = '<h2 class="answer_title">Общий бал :&nbsp&nbsp&nbsp<span class="answer_points"></span></h2>';
    //         sectionContainer.append(gameInfo);
        
    //     let points = document.querySelector('.answer_points');
    //         points.innerText = `${pointsGame}`;
       
    //     const answerElementYes = document.createElement('div');
    //         answerElementYes.className = 'answer_part';
    //         answerElementYes.innerText = 'Отгаданние слова : ';
    //         gameInfo.append(answerElementYes);
    //         const elementYes = document.createElement('span');
    //             elementYes.className = 'answer_out-right';
    //             elementYes.innerText = `${rightAnswerResult}`;
    //             answerElementYes.append(elementYes);
    
    //     const answerElementNo = document.createElement('div');
    //         answerElementNo.className = 'answer_part';
    //         answerElementNo.innerText = 'Не отгаданные слова : ';
    //         gameInfo.append(answerElementNo);
    //         const elementNo = document.createElement('span');
    //             elementNo.className = 'answer_out-wrong';
    //             elementNo.innerText = `${wrongAnswerResult}`;
    //             answerElementNo.append(elementNo);
        
    //     const flexBtn2 = document.createElement('div');
    //         flexBtn2.className = 'answer_flexBtn';
    //         gameInfo.append(flexBtn2);
    
    //     const btnNewGame = document.createElement('button');
    //         btnNewGame.id = 'NewGame';
    //         btnNewGame.className = 'main-button utilit-btn1';
    //         btnNewGame.innerText = 'New game';
    //         flexBtn2.append(btnNewGame);
    //             const newGame = document.querySelector('#NewGame');
    //             newGame.addEventListener('click', startGame);
    
    //     const btnBackMenu = document.createElement('button');
    //         btnBackMenu.id = 'BackMenu';
    //         btnBackMenu.className = 'main-button utilit-btn2';
    //         btnBackMenu.innerText = 'Back menu';
    //         flexBtn2.append(btnBackMenu);
    //             const BackMenu = document.querySelector('#BackMenu');
    //             BackMenu.addEventListener('click', back);
    // };
    
    // const goBackMenu = document.createElement('div');
    // function back() {
    
    //     error.remove();
    //     gameInfo.remove();
        
    
    //     goBackMenu.className = 'main-block';
    //     goBackMenu.innerHTML = '<h1 class="main-block_title">Alias</h1><button class="main-button utilit-btn1" id="start-game">Start game</button><button class="main-button utilit-btn2" data-open>Rules of game</button>';
    //     sectionContainer.append(goBackMenu);
    
    //     const btnStart = document.querySelector('#start-game');
    //         btnStart.addEventListener('click', startGame);
    
    //     const btnRules = document.querySelector('button[data-open]');
    //         btnRules.addEventListener("click", openRules);
    
    // }; 
    // export default goBackMenu;
    
    
    // // Start timer in the game.
    // function timer() {
    //     const outTime = document.querySelector('span[data-time]');
    
    //     if ( second > 0 ) {
    //         second -= 1;
    //         outTime.textContent = second;
    //     } else {
    //         outTime.textContent = "finish";
    //     };
    // };
    // // Resetting timer.
    // function stopTimer() {
    //    clearInterval(timerID);
    //    second = 15;
    // };
    
    // function clear() {
    //     pointsGame = 0;
    //     rightAnswer = [];
    //     wrongAnswer = [];
    // };
    




    // const error = document.createElement('div');
    // const oops = function () {
    //     stopTimer();
    //         error.className = 'error';
    //         error.innerHTML = '<h1 class="error_title">ERROR!</h1><p class="error_text">Эй, зачем ты со сной так? зачем так клацать? Я начинающий программис и все баги пофиксить не успел </p>';
    //         sectionContainer.append(error)
    //     const errorBtn = document.createElement('button');
    //         errorBtn.className = 'error_button main-button';
    //         errorBtn.textContent = 'Давай начнем все с начала'
    //         error.append(errorBtn);
    //     errorBtn.addEventListener('click', function() {
    //         back();
    //         gameInfo.remove();
    //         location.reload();
    //     });
    // };
    





})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map