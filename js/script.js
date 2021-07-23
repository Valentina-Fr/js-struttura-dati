const fullDeck = [
    {
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
    illustration: {
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
    },
    {
    id: 2,
    name: "Grizzly Bears",
    launchCost: ["1", "G"],
    combinedManaCost: 2,
    cardType: "Creature",
    subType: "Bear",
    expansion: {
        name: "7th Expansion",
        reissueId: 7,
        rarity: "Silver",
        collectionNr: 5,
        totalCards: 52
    },
    flavorText: {
        quote: "They've got claws as long as your arm. And they're grouchy. Really, really grouchy.",
        author: "Greg Staples"
    },
    abilities: [
        {
            launchCost: ["W", "B"],
            description: "Il Colosso Sangue di Fuoco infligge 6 danni a ogni creatura e a ogni giocatore."
        },
        {
            launchCost: ["W", "B"],
            description: "Bloodfire Colossus deals 6 damage to each creature and each player."
        }
    ],
    illustration: {
        author: {
        id: 1,
        name: "John Smith" 
        },
        source: "img/bears.png"
    },
    collectionNr: "14/23",
    constitution: 4,
    strength: 4,
    borderColor: "#000",
    background: {
        color: "black",
        source: "img/grizzly.png"
    }
    },
    {
    id: 3,
    name: "Anaba Shaman",
    launchCost: ["3", "R"],
    combinedManaCost: 4,
    cardType: "Creature",
    subType: "Minotaur",
    expansion: {
        name: "9th Expansion",
        reissueId: 9,
        rarity: "Golden",
        collectionNr: 48,
        totalCards: 142
    },
    flavorText: {
        quote: "Prova a prendere questo toro per le corna.",
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
    illustration: {
        author: {
        id: 1,
        name: "John Smith" 
        },
        source: "img/shaman.png"
    },
    collectionNr: "48/142",
    constitution: 3,
    strength: 5,
    borderColor: "#000",
    background: {
        color: "red",
        source: "img/minotaur.png"
    }
    }
];

//Funzioni

//Funzione per stampare una card
const createCardTemplate = (card) => {
    //Verifico se il sottotipo è presente
    const subType = card.subType ? `- ${card.subType}` : "";
    
    //Verifico se sono presenti abilità
    let abilitiesContent = `<em>Nessuna abilità</em>`;
    if (card.abilities.length) {
        abilitiesContent = `<ul>`;
        for (let i = 0; i < card.abilities.length; i++) {
            const currentAbility = card.abilities[i];
            abilitiesContent += `<li><em>Descrizione</em>: ${currentAbility.description}</li>`
            abilitiesContent += `<li><em>Costo di lancio</em>: ${currentAbility.launchCost.join(", ")}</li>`
        }
        abilitiesContent += `</ul>`;
    }
    
    const cardTemplate = `
    <li><strong>ID</strong>: ${card.id}</li>
    <li><strong>Nome</strong>: ${card.name}</li>
    <li><strong>Costo di lancio</strong>: ${card.launchCost.join(", ")}</li>
    <li><strong>Costo mana convertito</strong>: ${card.combinedManaCost}</li>
    <li><strong>Tipo</strong>: ${card.cardType} ${subType}</li>
    <li><strong>Espansione</strong>: 
    <ul>
    <li><em>Ristampa</em>: ${card.expansion.reissueId}</li>
    <li><em>Nome</em>: ${card.expansion.name}</li>
    <li><em>Rarità</em>: ${card.expansion.rarity}</li>
    <li><em>Numero collezione</em>: ${card.expansion.collectionNr}/${card.expansion.totalCards}</li>
    </ul>
    </li>
    <li><strong>Testo di colore</strong>: ${card.flavorText.quote} - ${card.flavorText.author}</li>
    <li><strong>Abilità</strong>: ${abilitiesContent}</li>
    <li><strong>Illustrazione</strong>: 
    <ul>
    <li><em>Autore</em>: ${card.illustration.author.name} (id: ${card.illustration.author.id}) </li>
    <li><em>Link illustrazione</em>: ${card.illustration.source}</li>
    </ul>
    </li>
    <li><strong>Numero collezione</strong>: ${card.collectionNr}</li>
    <li><strong>Costituzione</strong>: ${card.constitution}</li>
    <li><strong>Forza</strong>: ${card.strength}</li>
    <li><strong>Colore bordo</strong>: ${card.borderColor}</li>
    <li><strong>Sfondo</strong>: 
    <ul>
    <li><em>Colore</em>: ${card.background.color}</li>
    <li><em>Link sfondo</em>: ${card.background.source}</li>
    </ul>
    </li>
    `;
    return cardTemplate;
};

//Funzione per stampare card deck
const renderDeck = (deck, targetElement) => {
    let deckTemplate = "";
    for (let i = 0; i < deck.length; i++){
        const currentCard = deck[i];
        deckTemplate += createCardTemplate(currentCard);
    }
    targetElement.innerHTML = deckTemplate;
};

//Stampo in pagina
const cardSection = document.getElementById("cards");
renderDeck(fullDeck, cardSection);

//Filtro

const inputField = document.getElementById("search");
const selectField = document.getElementById("filter");
const button = document.getElementById("button");

//Nascondi/mostra input
selectField.addEventListener("change", () => {
    const currentValue = selectField.value;
    if (currentValue !== "all") {
        inputField.classList.remove("hidden");
    } else {
        inputField.classList.add("hidden");
    }
});
