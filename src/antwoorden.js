let antwoorden = JSON.parse(localStorage.getItem('antwoorden')) || [];

export function addAntwoord(antwoord) {
  const existingAnswerIndex = antwoorden.findIndex(a => a.question === antwoord.question);
  if (existingAnswerIndex !== -1) {
    antwoorden[existingAnswerIndex] = antwoord;
  } else {
    antwoorden.push(antwoord);
  }
  localStorage.setItem('antwoorden', JSON.stringify(antwoorden));
}

export function getAntwoorden() {
  return JSON.parse(localStorage.getItem('antwoorden')) || [];
}
