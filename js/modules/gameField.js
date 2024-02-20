import startField from "./startField";


class GameField extends startField {
    constructor(data) {
        super();
        this.data = data;
    }

    createGameField() {

        const img = document.createElement('img');
        img.style.classList.add('img');
        const field = document.createElement('div');
        field.style.classList.add('main-block field');

        const time = document.createElement('div');
        time.style.classList.add('field_time');
        time.innerHTML = '<span data-time>60</span>';
        field.append(time);
    }
    createGameFieldButtons() {
        const flexBtn = document.createElement('div');
        const btnNo = document.createElement('button');
        const btnYes = document.createElement('button');
        
    }

}



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