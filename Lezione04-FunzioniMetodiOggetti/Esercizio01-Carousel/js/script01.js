var immagini = [
    "./img/Dino1.jpg",
    "./img/Dino2.jpg",
    "..."
];

var elImmagine = document.getElementById("immagine");
elImmagine.innerHTML = "<img id='immagineDino' src='" + immagini[0] + "'>";