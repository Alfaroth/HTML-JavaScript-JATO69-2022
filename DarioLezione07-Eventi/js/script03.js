var user = {
    nome: "Dario",
    ruolo: "Amministratore",
    password: "12345",
    token:"DarioAmm123jd9812uje98hoijaw9euj"
}

const REGEX = /^[A-Z]{9}[0-9]{3}[A-Z][a-z]{3} *$/;

function login() {
    mioUserJSON = JSON.stringify(user);
    localStorage.setItem("utenteLoggato", mioUserJSON) // setItem(chiave, valore)
    verificaConnessione();
}

// login();

function logout() {
    verificaTipoConnessione();
    localStorage.removeItem("utenteLoggato");
    sessionStorage.removeItem("utenteLoggato");
    verificaConnessione();
}

// logout();

function validate() {
    if(user.token.match(REGEX)) {
        login();
    } else {
        registrati();
    }
}

function verificaTipoConnessione() {
    var checkbox = document.querySelector("#checkbox");
    if (checkbox.checked) {
        localStorage.setItem("nome", user.nome);
    } else {
        sessionStorage.setItem("nome", user.nome);
    }
}

function verificaConnessione() {
    if (localStorage.getItem("utenteLoggato")) {
        // var nomeUtente = (JSON.parse(localStorage.getItem("utenteLoggato"))).nome;
        var mioUtente = JSON.parse(localStorage.getItem("utenteLoggato"));
        var nomeUtente = mioUtente.nome;
        document.querySelector("#demo").innerHTML = "Ciao Utente: " + nomeUtente;
    } else {
        document.querySelector("#demo").innerHTML = "Effettua le operazioni di Login";
    }
}

var btnLogin = document.querySelector("#btnLogin");
var btnLogout = document.querySelector("#btnLogout");

btnLogin.addEventListener("click", login);
btnLogout.addEventListener("click", logout);

verificaConnessione();