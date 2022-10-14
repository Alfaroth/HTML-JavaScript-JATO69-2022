var film=["The Lord of the Rings: The Fellowship of the Ring (Extended Edition)", 
          "The Lord of the Rings: The Two Towers (Extended Edition)", 
          "The Lord of the Rings: The Return of the King (Extended Edition)", 
          "The Matrix", 
          "The Matrix Reloaded", 
          "The Matrix Revolutions", 
          "Animatrix",
          "Hereditary", 
          "Midsommar", 
          "Spider-Man", 
          "Spider-Man 2", 
          "Spider-Man 3", 
          "Tenacious D in The Pick of Destiny"];

var prezzi=[16.90, 
            16.90, 
            16.90, 
            12.90, 
            9.90, 
            12.90,
            7.90,
            14.90, 
            12.90, 
            9.90, 
            9.90, 
            9.90, 
            12.90];
           
var elListaFilm=document.getElementById("listaFilm");

for (var i=0; i<film.length; i++) {
    film[i] += " - " + prezzi[i].toFixed(2) + "€";
}

film.sort();

for(var i=0; i<film.length; i++) {
    elListaFilm.innerHTML += "<li>" + film[i] + "</li>";
};

var elTotFilm=document.getElementById("totFilm");
var totale=0;

for (var i=0; i<film.length; i++) {
    totale += prezzi[i];
}

elTotFilm.innerHTML += "<b>" + film.length + " available movies</b>"

/*
var nome = "Davide Valerio";
var nomeAutore = document.getElementById("nomeAutore");
nomeAutore.innerHTML = nome;

var img = "./img/avatar.png";
var elImg = document.getElementById("imgAutore");
elImg = img;
*/