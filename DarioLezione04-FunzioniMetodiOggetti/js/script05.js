function Utente(nome, cognome, matricola, email) {
    
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
    this.email = email;

    this.toString = function() {
        return `Nome: ${this.nome} - Cognome: ${this.cognome} - Matricola: ${this.matricola} - Email: ${this.email}`;
    }

}

function recuperaInfo() {

    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var matricola = document.getElementById("matricola").value;
    var email = document.getElementById("email").value;

    if(controllaCampi(nome, cognome, matricola, email)) {
        
        var mioUtente = new Utente(nome, cognome, matricola, email)
        console.log(mioUtente.toString());
    
        utenti.push(mioUtente);
        console.log(utenti);
    
        stampaLista();
        pulisciCampi();

    }

}

function stampaLista() {

    demo.innerHTML = "";

    utenti.forEach(utente => {
        demo.innerHTML += "<p>" + utente.toString() + "</p>";
    }); 

    /*
    Array.forEach(function(element){
        demo.innerHTML += "<p>" + utente.toString() + "</p>";
    })
    */

    /*
    for(var i=0; i<utenti.length; i++) {
        demo.innerHTML += "<p>" + utenti[i].toString() + "</p>";
    }
    */

}

function pulisciCampi() {
    document.getElementById("nome").value = "";
    document.getElementById("cognome").value = "";
    document.getElementById("matricola").value = "";
    document.getElementById("email").value = "";   
}

function controllaCampi(nome, cognome, matricola, email) {

    var feed = document.getElementById("feed");
    feed.innerHTML = '';

    /*
    if (nome == "" || cognome == "" || matricola == "" || email == "") {
        feed.innerHTML = "Mi dispiace, hai dimenticato qualcosa.";
        return false;
    } else {
        return true;
    }
    */

    if (nome != "" && cognome != "" && matricola != "" && email != "") {
        feed.innerHTML += "Dati salvati";
        return true;
    } else {
        feed.innerHTML += "Hai dimenticato uno o più campi:";
        if (nome == "") {
            feed.innerHTML += " Nome"
        }
        if (cognome == "") {
            feed.innerHTML += " Cognome";
        }
        if (matricola == "") {
            feed.innerHTML += " Matricola";
        }
        if (email == "") {
            feed.innerHTML += " Email";
        }
        return false;
    }
}

var demo = document.getElementById("demo");

var utenti = [];

document.getElementById("btn").onclick = recuperaInfo;