

function generatorRandomCards(card) {
    let cardAlias = card[Math.floor(Math.random() * card.length)];

    if (cardAlias == undefined) {

        return oops();
    };

    return cardAlias;
    
};

export default generatorRandomCards;