function miaFunzione() {
    console.log("Ciao dalla funzione!");
}

miaFunzione();

function salutaUtente(nome, cognome) {
    var demo = document.getElementById("demo");
    console.log("Ciao " + nome + " " + cognome + "!");      
    demo.innerHTML = "Ciao " + nome + " " + cognome + "!";  
}

// salutaUtente("Davide");              // Ciao Davide undefined! - stampa cognome anche se non è definito senza dare errori
// salutaUtente("Davide", 56);          // Ciao Davide 56!
salutaUtente("Davide", "Valerio");      // Ciao Davide Valerio!

var miaVariabile = 0;   // variabile globale, visibile anche all'interno delle funzioni

function calcolaDimensioni() {
    var misura = miaVariabile + 10; // variabile locale, vive solo nella funzione
    console.log("La misura vale " + misura + ".");
}

// console.log(misura)      // errore - misura non è visibile all'esterno della funziona calcolaDimensioni

calcolaDimensioni();        // La misura vale 10.

