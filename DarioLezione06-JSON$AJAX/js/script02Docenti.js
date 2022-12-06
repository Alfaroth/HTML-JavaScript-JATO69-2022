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
