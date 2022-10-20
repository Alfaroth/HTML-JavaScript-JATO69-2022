var demo = document.getElementById("demo");

function miaFunzione() {
    // recupero quello che scrive l'utente
    var nomeUtente = document.getElementById("nomeUtente").value;   // assegno alla variabile numeUtente il valore dell'input nomeUtente
    var mailUtente = document.getElementById("mailUtente").value;

    // impedisco che l'utente possa cliccare lasciando un campo vuoto
    if(nomeUtente.trim() == "" && mailUtente.trim() == "") {   // con trim() copro il caso in cui ci sono solo spazi vuoti
        demo.innerHTML = "Non hai scritto niente.";
    } else if (nomeUtente.trim() == "" && mailUtente.trim() != ""){
        demo.innerHTML = "Inserisci il nome.";
    } else if (nomeUtente.trim() != "" && mailUtente.trim() == ""){
        demo.innerHTML = "Inserisci l'indirizzo email.";
    } else {
        demo.innerHTML = "Ciao " + nomeUtente + "!<br>Il tuo indirizzo email è " + mailUtente + "."
        // pulisco il campo input
        document.getElementById("nomeUtente").value = "";
        document.getElementById("mailUtente").value = "";
    }
}