

function generatorRandomCards(card) {
    let cardAlias = card[Math.floor(Math.random() * card.length)];

    // let deletIndex = card.indexOf(aliasCard.word);
    // card.splice(deletIndex, 1);

    if (cardAlias == undefined) {

       
    };

    return cardAlias;
    
};

export default generatorRandomCards;