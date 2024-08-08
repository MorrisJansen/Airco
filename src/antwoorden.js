let antwoorden = {};

export function addAntwoord(vraag, antwoord) {
    antwoorden[vraag] = antwoord;
    localStorage.setItem('antwoorden', JSON.stringify(antwoorden));
}

export function getAntwoorden() {
    return JSON.parse(localStorage.getItem('antwoorden')) || {};
}
