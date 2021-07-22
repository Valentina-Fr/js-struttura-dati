const card = {
    id: 1,
    name: "Bloodfire Colossus",
    launchCost: ["6", "R", "R"],
    combinedManaCost: 8,
    cardType: "Creature",
    subType: "Giant",
    expansion: {
        name: "9th Expansion",
        reissueId: 9,
        rarity: "Golden",
        collectionNr: 4,
        totalCards: 42
    },
    flavorText: {
        quote: "Occorse tutta la sua forza per contenere le fiamme che ardevano dentro di lui.",
        author: "Greg Staples"
    },
    abilities: [
        {
            launchCost: ["R", "B"],
            description: "Il Colosso Sangue di Fuoco infligge 6 danni a ogni creatura e a ogni giocatore."
        },
        {
            launchCost: ["W", "B"],
            description: "Bloodfire Colossus deals 6 damage to each creature and each player."
        }
    ],
    illustrattion: {
        author: {
        id: 1,
        name: "John Smith" 
        },
        source: "img/picture.png"
    },
    collectionNr: "14/23",
    constitution: 6,
    strength: 6,
    borderColor: "#000",
    background: {
        color: "red",
        source: "img/image.png"
    }
};

console.log(card);