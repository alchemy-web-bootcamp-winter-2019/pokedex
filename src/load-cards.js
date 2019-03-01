export function makeCardTemplate(card) {
    const html = `<li style="background-color: ${card.color_1}">
    <h2>${card.pokemon}</h2>
    <div class="secondary" style="background-color: ${card.color_2}"></div>
    <div class="image-container">
        <a href="${card.pokedex}">
            <img src="${card.url_image}" alt="${card.pokemon}">
        </a>
    </div>
    <p>
        HP: ${card.hp} A: ${card.attack} D: ${card.defense}
    </p>
    </li>`;    
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadCards(cardData) {
    const parent = document.getElementById('card-list');
    
    cardData.forEach(card => {
        const content = makeCardTemplate(card);
        parent.appendChild(content);
    });

}