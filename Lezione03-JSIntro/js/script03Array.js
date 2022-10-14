var colori = ["bianco", "blu", "verde", "viola"];

var colori2 = [];
colori2 = ["rosso", "giallo"];

// array famiglia iterables
var mioArray = ["Davide", "Valerio", 29, true, "Torino"];   // fattibile ma poco senso logico - tipi diversi

var estrazioneLotto = [13, 4, 22, 90, 87, 45, 67];

var presenzeStudenti = [true, false, false, true, true];

console.log(estrazioneLotto.sort());    // ordinare gli elementi dell'array

colori[2] = 'arancione';    // riassegnare il valore di un elemento dell'array
console.log(colori);

var elListaColori = document.getElementById('listaColori');
// elListaColori.innerHTML = colori;

for(var i=0; i<colori.length; i++) {    // ciclo for uguale a Java
    elListaColori.innerHTML += colori[i] + "<br>";
}

// aggiungo un colore alla fine
colori.push("rosso");
console.log(colori);

// ordino alfabeticamente
colori.sort();
console.log(colori);

// inverto l'array
colori.reverse();
console.log(colori);

// rimuovo l'ultimo elemento
colori.pop();
console.log(colori);

// ricerca di un elemento
var posizioneRosso = colori.indexOf("rosso");
console.log("Il colore rosso è in posizione " + posizioneRosso + ".");