// COMMENTO NORMALE
// ! COMMENTO ERRORE
// ? COMMENTO DOMANDA
// * COMMENTO HIGHLIGHT
// # COMMENTO WARNING
// - COMMENTO TEXT
// todo COMMENTO TODO

const bikes = [
    {
        nome: "Pinarello F5 105 Di2 MOST Ultrafast 40",
        peso: 8.8,
    },
    {
        nome: "Scott Addict RC eRIDE 10",
        peso: 3.2,
    },
    {
        nome: "Cannondale SuperSix EVO Hi-MOD 2",
        peso: 0.77,
    },
    {
        nome: "Specialized Tarmac SL7 Sport",
        peso: 8.1,
    }
];
const lightestBikeElement = document.getElementById('lightestBikeElement');

let lightestBike;
for (bike of bikes) {
    if (lightestBike === undefined || bike.peso < lightestBike.peso) lightestBike = bike;
};
// console.debug(lightestBike);

const lightestBikeName = document.createElement('h3');
lightestBikeName.innerText = lightestBike.nome;
const lightestBikeWeight = document.createElement('p');
lightestBikeWeight.innerText = lightestBike.peso + "kg";

lightestBikeElement.appendChild(lightestBikeName);
lightestBikeElement.appendChild(lightestBikeWeight);

lightestBikeElement.classList.remove('d-none');