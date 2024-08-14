let antwoorden = JSON.parse(localStorage.getItem('antwoorden')) || {};

export function addAntwoord(vraag, antwoord) {
    antwoorden[vraag] = antwoord;
    localStorage.setItem('antwoorden', JSON.stringify(antwoorden));
}

export function getAntwoord(vraag) {
    return antwoorden[vraag] || null;
}

export function getAntwoorden() {
    return antwoorden;
}

export function removeAntwoord(vraag) {
    delete antwoorden[vraag];
    localStorage.setItem('antwoorden', JSON.stringify(antwoorden));
}