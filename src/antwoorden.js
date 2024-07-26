// In antwoorden.js
let antwoorden = [];

export function addAntwoord(answer) {
  console.log('Adding answer:', answer); // Log de input
  antwoorden.push(answer);
}

export function getAntwoorden() {
  return antwoorden;
}