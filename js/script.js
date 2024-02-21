
import elementImg from './db-cloud.js';
import createCloudAnimation from './fon.js';
import GameField from './modules/startField.js';

window.addEventListener('DOMContentLoaded', () => {

    new GameField('.container', 'div').startMenu();
    
    elementImg.forEach((item, i) => {
        createCloudAnimation('img', elementImg[i].src, elementImg[i].selector);
    })
})

  