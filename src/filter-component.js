const typeFilterNode = document.getElementById('type-filter');

export const types = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock',
    'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic',
    'ice', 'dragon', 'dark', 'fairy'
];

export function getTypeOptions(type) {
    const html = /*html*/`
        <option name="type" value="${type}">${type}</option> 
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

export default function buildTypeFilter(types) {
    types.forEach(type => {
        //create dom for the node
        const dom = getTypeOptions(type);
        //append to typeFilterNode
        typeFilterNode.appendChild(dom);
    });
    //event Listener is only for the node, not each item. Looking for select change
    typeFilterNode.addEventListener('change', () => {
        const chosenType = {
            type_1: typeFilterNode.value
        };
        console.log(chosenType);
    });
}

//I can grab the user's choice of type to filter by
//I need to take that data and 
    //filter the array for matches
        //a new file. filter-compenent just builds and registers choices
            //this file will do the sorting and will call the loadCard functon to render
        //render matching card to dom