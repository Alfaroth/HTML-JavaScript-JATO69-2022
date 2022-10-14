var stringa = "Le nostre lezioni sono a blocchi di 4 ore";

console.log(stringa.length);
console.log(stringa.indexOf("sono"));   // 41 - prima occorrenza della stringa tra parentesi
console.log(stringa.indexOf("1"));      // 18
console.log(stringa.lastIndexOf("1"));  // -1
console.log(stringa.indexOf("f"));      // -1

var mioArr = ["ciao", "come", "stai"];

console.log(mioArr.indexOf("pippo"));   // -1

console.log(stringa.charAt(30));        // -1
console.log(stringa.charAt(0));         //  h
console.log(stringa.charAt(stringa.length - 1));    // L

console.log(stringa.charCodeAt(0));                 // e

// metodi taglio

var stringa2 = "Provo a tagliare la mia stringa";
var taglio = stringa2.slice(2, 15);

console.log(taglio);    // ovo a tagliar
console.log(stringa2.substring(2,15));

// upp low

console.log(stringa2.toLowerCase());                // provo a tagliare la mia stringa
console.log(stringa2.toUpperCase());                // PROVO A TAGLIARE LA MIA STRINGA

// sostituzione

console.log(stringa2.replace("stringa", "frase"));  // Provo a tagliare la mia frase - sostituisce il pattern o la stringa esistente

// str -> arr

var stringa3 = "Mi chiamo Davide";
var array = stringa3.split("");

console.log(array);                 // ["Mi","i","","c" ... "i","d","e"]

var arrayTest = ["D","a","v","i","d","e"];

console.log(arrayTest.join(""));    // Davide

// concatenazione di più metodi o proprietà

var mioNome = "Davide";
var mioNomeContrario = mioNome.split("").reverse().join("");

console.log(mioNomeContrario);      // edivaD
