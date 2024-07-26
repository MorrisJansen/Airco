// Object om de antwoorden op te slaan
let antwoorden = {
  vraag1: null,
  vraag2: null,
  vraag3: null,
};

// Functie om een antwoord toe te voegen
export function addAntwoord(vraag, antwoordId) {
  antwoorden[vraag] = antwoordId;
}

// Functie om alle antwoorden op te halen
export function getAntwoorden() {
  return antwoorden;
}