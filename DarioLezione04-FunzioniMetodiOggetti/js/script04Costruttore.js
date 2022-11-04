// funzione costruttore
function Studente(nome, cognome, matricola, anno) {
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
    this.anno = anno;

    this.toString = function() {
        var msg = this.nome + " " + this.cognome + " " + this.matricola + " " + this.anno;
        return msg;
    }
} 

// var studente1 = new Studente("Pippo", "Rossi", 1, 2022);
// console.log(studente1.toString());

var classe = [
    new Studente("Dalila", "Di Paolo", 1, 2022),
    new Studente("Lorenzo", "Zeppegno", 2, 2022),
    new Studente("Davide", "Valerio", 3, 2022),
    new Studente("Alessia", "Marton", 4, 2022)
];

var demo = document.getElementById("demo");

classe.forEach(studente => {
    console.log(studente.toString());
    demo.innerHTML += studente.toString() + "<br>"
});