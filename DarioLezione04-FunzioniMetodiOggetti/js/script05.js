function Utente(nome, cognome, matricola, email) {

    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
    this.email = email;

    this.stampa = function() {
        var info = "Nome: " + this.nome + " " + this.cognome + " Matricola: " + this.matricola + " Email: " + this.email;
        return info;
    }

}

/* Prendere i dati inseriti nel form e costruire un array di utenti. I campi devono essere obbligatori.
Stampa l'array nel demo ad ogni inserimento e stampa al caricamento della pagina. */

var btn = document.getElementById("btn");

function registraUtente() {
    console.log("Utente registrato");
}

btn.onclick = registraUtente;