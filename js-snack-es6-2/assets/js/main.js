// COMMENTO NORMALE
// ! COMMENTO ERRORE
// ? COMMENTO DOMANDA
// * COMMENTO HIGHLIGHT
// # COMMENTO WARNING
// - COMMENTO TEXT
// todo COMMENTO TODO


const footballTeams = [
    {
        nome: "Fiorentina",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Bagno a Ripoli",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Sales",
        puntiFatti: 0,
        falliSubiti: 0
    }
];
const newArray = [];

for (team of footballTeams) {
    team.puntiFatti = generateRandomNumber(0, 12);
    team.falliSubiti =  generateRandomNumber(0, 50);

    const teamForNewArray = {
        nome: team.nome,
        falliSubiti: team.falliSubiti
    };
    newArray.push(teamForNewArray);
};

console.table(footballTeams);
console.table(newArray);






/**
 * Funzione che genera un numero casuale in un range, COMPRESI il numero massimo e il numero minimo indicati
 * @param {number} max Numero massimo che si può generare (COMPRESO)
 * @param {number} min Numero minimo che si può generare (COMPRESO)
 * @returns {number} Numero randomico generato
 */
function generateRandomNumber (max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};