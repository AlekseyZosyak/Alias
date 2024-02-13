import goBackMenu from "./script.js";

const btnRules = document.querySelector('button[data-open]');
btnRules.addEventListener("click", openRules);

const sectionContainer = document.querySelector('.container');
const mainBlock = document.querySelector('.main-block');

const newBlock = document.createElement('div');

function openRules() {
    
        newBlock.className = 'main-block';
        newBlock.innerHTML = '<h2 class="rules_title">Правила игры:</h2> <p class="rules_text">Игрок за 60секунд должен на английском обьяснить другому игроку слово указанное на карточке. Если смог тогда жми кнопку "YES", если нет тогда нажимай "NO". За каждое отгаданное слово игрок получит 1 балл!!!</p> <button class="main-button utilit-btn1" data-back>back</button>';
        sectionContainer.append(newBlock);

    deletAlias();

    const btnBack = document.querySelector('button[data-back]');
    btnBack.addEventListener('click', back);
    console.log(btnBack);
};

function deletAlias() {
    mainBlock.remove();
    goBackMenu.remove();
};

function back() {
    newBlock.remove();
    sectionContainer.append(mainBlock);
};

export default openRules;