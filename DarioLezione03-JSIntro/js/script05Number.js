var primoNumero = 34.657788;

console.log(primoNumero.toFixed(2));       // toFixed()         quante cifre decimali mostrare
console.log(primoNumero.toPrecision(5));   // toPrecision()     quante cifre significative

// utilizzo di Number()
// cast a tipo number

var x1 = 42;
console.log(Number(x1));    // 42
                            
var x2 = true;              
var x3 = false;             
var x4 = "123";             
var x5 = new Date();        
var x6 = "123 456";         

console.log(Number(x2));    // 1
console.log(Number(x3));    // 0
console.log(Number(x4));    // 123
console.log(Number(x5));    // 1665499469019
console.log(Number(x6));    // NaN (not a number)

// utilizzo di isNaN()
// restituisce true se la variabile non è un numero

var p1 = "Pippo";
var p2 = 56;

console.log(isNaN(p1));     // true
console.log(isNaN(p2));     // false

// utilizzo di parseInt()
// parseInt() converte una stringa in un numero intero (se possibile)

var a = 10.45;
var b = 12;
var c = "10.99";
var d = "Ciao";

console.log(parseInt(a));   // 10
console.log(parseInt(b));   // 12
console.log(parseInt(c));   // 10
console.log(parseInt(d));   // NaN

// si può anche utilizzare per convertire un numero in base 2-36 in intero decimale
console.log(parseInt("0111010110", 2));     // 470

// utilizzo di parseFloat()
// parseFloat() converte una stringa in un numero con virgola (se possibile)

var e = 5;
var f = 4.67;
var g = "3.45";
var h = "Arrivederci";

console.log(parseFloat(e));   // 5
console.log(parseFloat(f));   // 4.67
console.log(parseFloat(g));   // 3.45
console.log(parseFloat(h));   // NaN

// eval()
// permette di valutare direttamente una stringa
// SCONSIGLIATO

var num1 = 6;
var num2 = 5;

console.log(eval("num1 * num2"));   // 30
console.log(eval("num1 + num2"));   // 11