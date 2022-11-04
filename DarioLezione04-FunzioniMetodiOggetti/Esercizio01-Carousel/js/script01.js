var immagini = [
    "./img/pkmn01.png",
    "./img/pkmn02.png",
    "./img/pkmn03.png",
    "./img/pkmn04.png",
    "./img/pkmn05.png",
    "./img/pkmn06.png",
    "./img/pkmn07.png",
    "./img/pkmn08.png",
    "./img/pkmn09.png",
    "./img/pkmn10.png"
];

var elImmagine = document.getElementById("immagine");

var i = 0;
// console.log(i);

function mostraFoto(i) {    // richiamata in <body onload="mostraFoto(0)"> in index.html
    elImmagine.innerHTML = "<img id='immaginePkmn' src='" + immagini[i] + "'>";
}

function ruotaFoto() {
    if (i<(immagini.length-1)) {
        elImmagine.innerHTML = "<img id='immaginePkmn' src='" + immagini[++i] + "'>";
        // console.log(i);
    } else {
        i=0;
        elImmagine.innerHTML = "<img id='immaginePkmn' src='" + immagini[i] + "'>";
        // console.log(i);
    }
}

/*
function ruotaFoto() {
    i++;
    if (i == immagini.length) {
        i = 0;
    }
    mostraFoto(i);
}
*/