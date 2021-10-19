/*
1) L’utente indica un livello di difficoltà in base al quale viene 
    generata una griglia di gioco quadrata, in cui ogni cella contiene 
    un numero tra quelli compresi in un range:
    - con difficoltà 1 => tra 1 e 100
    - con difficoltà 2 => tra 1 e 81
    - con difficoltà 3 => tra 1 e 49
2) Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

// Prendo l'elemento html -> select (easy, medium, hard)
const difficoltà = document.getElementById("difficoltà");
console.log(difficoltà);
// Prendo l'elemento html -> button
const iniziaGioco = document.getElementById("inizia-gioco");
console.log(iniziaGioco);
// Prendo l'elemento html -> container griglia
const griglia = document.getElementById("griglia");
console.log(griglia);