var oggi = new Date();
console.log(oggi);

var anno = oggi.getFullYear();
var mese = oggi.getMonth();     // i mesi sono 0-based (es. Novembre = 10)
var data = oggi.getDate();
var giorno = oggi.getDay();     // i giorni della settimana sono 0-based e partono dalla domenica (es. Mercoledì = 3)

var ore = oggi.getHours();
var minuti = oggi.getMinutes();
var secondi = oggi.getSeconds();

console.log(anno, mese, data, giorno, ore, minuti, secondi);

var giorniSettimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];


/* -------------------------------------------------------------------------- */
/*                              Orologio digitale                             */
/* -------------------------------------------------------------------------- */

var info = document.getElementById("info");

// posso chiamare una funzione temporizzata

setInterval( () => {

    var now = new Date();
    var ora = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    info.innerHTML = ora + " : " + min + " : " + sec;
    console.log(ora + " : " + min + " : " + sec);

}, 1000) // ogni 1000 millisecondi


// esempio con funzione già esistente senza =>

function miaFunzione() {
    console.log("Ciao");
}

setInterval(miaFunzione, 1000);