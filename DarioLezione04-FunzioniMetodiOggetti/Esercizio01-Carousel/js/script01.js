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
elImmagine.innerHTML = "<img id='immaginePkmn' src='" + immagini[0] + "'>";

var i = 0;
console.log(i);

function ruotaFoto() {
    if (i<(immagini.length-1)) {
        elImmagine.innerHTML = "<img id='immaginePkmn' src='" + immagini[++i] + "'>";
        console.log(i);
    } else {
        i=0;
        elImmagine.innerHTML = "<img id='immaginePkmn' src='" + immagini[0] + "'>";
        console.log(i);
    }
}