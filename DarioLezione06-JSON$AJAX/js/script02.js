//fetch per prendere dati da una API esterna
//per prendere i dati utilizzo il metodo GET

const URLEndPoint = "http://localhost:3000/utenti";

fetch(URLEndPoint)
    .then(data => {
        return data.json()
    })
    .then(response => {

        console.log(response);
        mostraDati(response);
    });

var demo = document.querySelector('#demo');

function mostraDati(response) { //dato che la response è un array lo tratto come tale
    response.forEach(docente => {
        var id = docente.id;
        var nome = docente.nome;
        var tipo = docente.tipologia;

        demo.innerHTML += "<li> Docente: " + id + " " + nome + " " + tipo + "</li>";
    });
}


var urlDoc = "http://localhost:3000/creator";

fetch(urlDoc)
    .then(data => {
        return data.json()
    })
    .then(response => {

        console.log(response);

    });


//fetch con metodo POST
var URLStudenti = "http://localhost:3000/studenti";

function aggiungiNuovoStudente() {

    var nome = document.querySelector('#nome').value;
    var tipologia = document.querySelector('#tipologia').value;
    
    var nuovoStudente = {
        nome: nome,
        tipologia: tipologia
    };

    fetch(URLStudenti, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(nuovoStudente)
        })
        .then(data => {
            data.json()
        })
        .then(response =>{

            console.log("Ok, registrazione avvenuta");
        }
        )

        return false;
}

var form = document.querySelector('#formRegistrazione');
form.addEventListener('submit', aggiungiNuovoStudente);

// var btn = document.querySelector('#btn');
// btn.addEventListener('click', aggiungiNuovoStudente);

fetch(URLStudenti)
    .then(data => {
        return data.json()
    })
    .then(response => {

        console.log(response);
        mostraStudenti(response);
    });

var elencoStudenti = document.querySelector('#listaStudenti');

function mostraStudenti(listaStudenti){
    listaStudenti.forEach(studente => {
        var id = studente.id;
        var nome = studente.nome;
        var tipo = studente.tipologia;

        elencoStudenti.innerHTML += "<li>Studente: " + id + " " + nome + " " + tipo + "</li>";
    });
}