
function calcola() {

    var num1 = recuperaNumeri()[0];
    var num2 = recuperaNumeri()[1];

    var somma = num1 + num2;
    var sottrazione = num1 - num2;
    var moltiplicazione = num1 * num2;
    var divisione = num1 / num2;

    console.log(somma, sottrazione, moltiplicazione, divisione);

    stampaNellaPagina(somma, sottrazione, moltiplicazione, divisione);

}

function recuperaNumeri() {
    var num1 = Number(document.getElementById("num1").value); 
    var num2 = Number(document.getElementById("num2").value); 
    // mi serve castare a numero altrimenti la somma verrebbe mostrata come concatenazione di stringhe
    return [num1, num2];
}

function stampaNellaPagina(som, sot, mol, div) {
    var demo = document.getElementById("demo");
    demo.innerHTML = "<p> La somma vale " + som + "</p>" +
                     "<p> La sottrazione vale " + sot + "</p>" +
                     "<p> La moltiplicazione vale " + mol + "</p>" +
                     "<p> La divisione vale " + div + "</p>";
}

// recupero il button
var btn = document.getElementById("btn");

// aggancio al pulsante la mia funzione
btn.onclick = calcola;  // nome della funzione richiamato SENZA parentesi tonde ()