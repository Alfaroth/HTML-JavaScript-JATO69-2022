console.log('Hello, world!');

// dichiaro una variabile - non serve definire il tipo della variabile
var nome;

// valorizzo la variabile
nome = "Davide";

// è indifferente usare "" oppure ''
console.log("Ciao, " + nome + "!");

// dichiaro e valorizzo sulla stessa riga
var cognome = "Valerio";
console.log(typeof cognome);    // > string

var eta = 33;
console.log(typeof eta);        // > number

var altezza = 1.75;
console.log(typeof altezza);    // > number

// let
let materiaInsegnata = "Javascript";
console.log(materiaInsegnata);

var presenza = true;
console.log("Presenza: " + presenza);

// riassegno una variabile
eta = 29;

// calcolo quanti anni avrò tra 5 anni
console.log("Tra cinque anni avrò " + eta + 5 + " anni.");   // > 295 - siccome ho iniziato con una stringa, concatena eta + 5 come stringhe

// alternativa 1 cafonata
console.log("Tra cinque anni avrò " + (eta + 5) + " anni.");
// alternativa 2 cafonata
console.log(eta + 5 + " sarà la mia età tra 5 anni.");
// alternativa 3 preferibile - creare sempre una variabile
var eta5Anni = eta + 5;
console.log("Tra cinque anni avrò " + eta5Anni + " anni.");
