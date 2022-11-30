// funzione costruttore
function Utente2(nome, cognome, eta, email, materieStudiate) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.email = email;
    this.materieStudiate = materieStudiate;
}

var mioUtente = new Utente2("Davide", "Valerio", 29, "davide.valerio@gmail.com", ["Java", "JavaScript", "HTML & CSS", "Database"]);

// notazione letterale, creo l'oggetto specifico
var utente = {
    nome: "Pippo",
    cognome: "Rossi",
    eta: 30,
    email: "pipporossi@gmail.com",
    materieStudiate: ["Java", "JavaScript", "HTML & CSS"]
}

console.log(utente.nome);   // Pippo

var utenteFormatoJSON = '{"nome": "Pippo", "cognome": "Rossi", "eta": 30, "email": "pippo.rossi@mail.com", "materieStudiate": ["Java", "Javascript", "HTML & CSS"]}';

console.log(utenteFormatoJSON);         // stringas {"nome": "Pippo", ...}
console.log(utenteFormatoJSON.nome);    // undefined perché un oggetto JSON non formattato è solo una stringa

// trasformo l'utenteFormatoJSON in un utente formato JavaScript
var mioUtenteFormatoJS = JSON.parse(utenteFormatoJSON);

console.log(mioUtenteFormatoJS);            // Object {nome: 'Pippo', ...}
console.log(mioUtenteFormatoJS.cognome);    // Rossi

// costruisco il mio oggetto con la notazione JS che voglio e lo trasformo in JSON, cioè una stringa
var studente = {
    nome: "Valentina",
    cognome: "De Iaco",
    scopo: "interrompere la connessione al docente",
    materieStudiate: ["Java", "JavaScript", "HTML & CSS", "Database"],

    dossaConnessione: function() {
        var connessione = true;
        if (connessione) {
            console.log("Attacca connessione");
        } else {
            console.log("Connessione down");
        }
    }
};

console.log(studente);          // Object {nome: 'Valentina', ...}
console.log(typeof studente);   // object
console.log(studente.nome);     // Valentina

// per poter trasferire l'oggetto studente ad un'altra tecnologia lo devo trasformare in un JSON -> String
// quando trasformo lo studente in string, i metodi non vengono conteggiati
var studenteJSON = JSON.stringify(studente);

console.log(studenteJSON);          // stringa {"nome": "Valentina", ...}
console.log(typeof studenteJSON);   // string
console.log(studenteJSON.nome);     // undefined

// rendo stringa l'oggetto utente costruito con la notazione costruttore
var utenteJSON = JSON.stringify(mioUtente);
console.log(utenteJSON);          // stringa {"nome": "Davide", ...}

// cerchiamo di capire come aggiungere un metodo ad un oggetto una volta che lo abbiamo ricevuto in formato JSON e tradotto in formato JS
var objRicevuto = '{"nome": "Paola", "cognome": "Rossi", "presenza": true}';
var obj = JSON.parse(objRicevuto);
console.log(obj); // Object {nome: 'Paola', ...}

// voglio aggiungere un metodo a obj
function ObjCostruttore(nome, cognome, presenza) {
    this.nome = nome;
    this.cognome = cognome;
    this.presenza = presenza;
    // this.annullaPresenza = function(){
    //     !this.presenza;
    // }
}
var objVero = new ObjCostruttore(obj.nome, obj.cognome, obj.presenza);

ObjCostruttore.prototype.annullaPresenza = function() {
    this.presenza = false;
}

objVero.annullaPresenza();

console.log(objVero); // object ObjCostruttore{nome: 'Paola', ...}
