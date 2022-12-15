// recupero i vari elementi del form
var username = document.querySelector("#username");
var userCheck = document.querySelector("#userCheck"); 

var password = document.querySelector("#password");
var passCheck = document.querySelector("#passCheck"); 

var citta = document.querySelector("#citta");
var cittaCheck = document.querySelector("#cittaCheck"); 

var registraForm = document.querySelector("#registraForm");
registraForm.addEventListener("submit", addUser);

// formati di password e username
const FORMATO_PASS = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{10,}$/;
const FORMATO_USER = /^[a-zA-Z0-9_]{4,15}$/;

function User(username, password, citta) {
    this.username = username;
    this.password = password;
    this.citta = citta;
}

// controllo che l'utente rispetti lunghezza e formato
function checkUser() {
    if (username.value.length < 4) {
        userCheck.textContent = "Il tuo username deve contenere almeno 4 caratteri!";
        return false;
    } else if(username.value.length > 15) {
        userCheck.textContent = "Il tuo username deve contenere meno di 15 caratteri!";
        return false;
    } else if(!username.value.match(FORMATO_USER)) {
        userCheck.textContent = "Il tuo username può contenere soltanto lettere, numeri e underscore!";
        return false;
    } else {
        userCheck.textContent = "";
        return true;
    }
}

// controllo che la password rispetti lunghezza e formato
function checkPass() {
    if (password.value.length < 8 || !password.value.match(FORMATO_PASS)) {
        passCheck.innerHTML = "La tua password deve contenere :" +
                              "<li>Almeno 10 caratteri</li>" +
                              "<li>Almeno una lettera maiuscola</li>" +
                              "<li>Almeno una lettera minuscola</li>" +
                              "<li>Almeno un numero</li>" +
                              "<li>Almeno un carattere speciale (@$!%*?&)</li>";
        return false;
    } else {
        passCheck.textContent = "";
        return true;
    }
}

// controllo che l'utente abbia selezionato una città
function checkCitta() {
    if (citta.value == -1) {
        cittaCheck.textContent = "Devi selezionare una città!";
        return false;
    } else {
        return true;
    }
}

// creo il nuovo utente
function addUser() {
    var userOk = checkUser();
    var passOk = checkPass();
    var cittaOk = checkCitta();
    if (checkUser && passOk && cittaOk) { // creo l'utente soltanto se tutti i controlli su username, password e città sono stati superati
        var newUser = new User(username.value, password.value, citta.value);
        newUser.avatar = "https://pbs.twimg.com/profile_images/1143032401108578305/8IYSjofV_400x400.jpg" // assegno un avatar al nuovo utente
        newUser.tweets = []; // assegno all'utente un array vuoto dove salverò i tweet inviati dall'utente
        localStorage.setItem("log", JSON.stringify(newUser));   // metto l'utente creato in localStorage
    }
    else {
        event.preventDefault(); // blocco il submit se i controlli non vengono superati
    }
}
