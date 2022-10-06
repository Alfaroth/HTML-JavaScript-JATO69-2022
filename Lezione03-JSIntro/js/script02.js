// metodo prompt
var nomeUser = prompt("Come ti chiami?");    // la risposta al prompt può essere salvata in una variabile
var etaUser = prompt("Quanti anni hai?"); 
var cittaUser = prompt("Dove vivi?");

console.log("Ciao, " + nomeUser + "!");
console.log("Hai " + etaUser + " anni.");
console.log("Tra 5 anni avrai " + (etaUser + 5) + " anni.");    // anche usando le parentesi stampa 295
var nuovaEta = etaUser + 5;
console.log("Tra 5 anni avrai " + nuovaEta + " anni.");         // stampa nuovamente 295 anche usando una nuova variabile
// utilizzando il prompt il sistema si aspetta una stringa quindi i valori verranno sempre concatenati invece che sommati
nuovaEta = Number(etaUser) + 5;     // mi serve quindi il cast a tipo number
console.log("Tra 5 anni avrai " + nuovaEta + " anni.");         // stampa 34
console.log("Vivi a " + cittaUser + ".");

// stampa il testo nella pagina html
// document.write("<p>Ciao, " + nomeUser + "!</p>");
// document.write("<p>Hai " + etaUser + " anni.</p>");
// document.write("<p>Tra 5 anni avrai " + (etaUser + 5) + " anni.</p>");
// document.write("<p>Vivi a " + cittaUser + ".</p>");

// voglio stampare esattamente all'interno del <ul id="infoUser"> in 02-variabili.html
var elInfoUser = document.getElementById("infoUser");  
// getElementById(string) è un metodo del DOM che riceve una stringa e restituisce quell'html
console.log(elInfoUser);

// modifico la sua proprietà innerHTML
elInfoUser.innerHTML = "<li>Ciao, " + nomeUser + "!</li>" + 
                       "<li>Hai " + etaUser + " anni.</li>" + 
                       "<li>Tra 5 anni avrai " + nuovaEta + " anni." + 
                       "<li>Vivi a " + cittaUser + ".</li>";