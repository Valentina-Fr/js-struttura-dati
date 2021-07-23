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
};

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
}

//Stampo in pagina
const cardSection = document.getElementById("cards");
cardSection.innerHTML = createCardTemplate(card);