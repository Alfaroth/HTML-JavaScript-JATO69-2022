// creo un array con i numeri da 1 a 90
var num = [];
for (var i=0; i<90; i++) {
    num[i]=i+1;
}
console.log("Array: " + num);

// estraggo un numero casuale dall'array
var x = Math.ceil(Math.random()*num.length)

// rimuovo il numero estratto dall'array
num.splice(x, 1);
console.log(num);

// ripeto per 6 volte
for (var i=0; i<6; i++) {
    var x = Math.ceil(Math.random()*num.length)
    console.log("Numero estratto: " + num[x-1]);
    document.getElementById("estratti").innerHTML += "<div id=\"numeri\">" + num[x-1] + "</div>";
    num.splice(x-1, 1);
    console.log("Array dopo estrazione: " + num) 
}