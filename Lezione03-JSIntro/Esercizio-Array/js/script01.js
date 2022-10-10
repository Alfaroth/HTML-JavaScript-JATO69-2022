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

var prezzo=["16,90", 
            "16,90", 
            "16,90", 
            "12,90", 
            "9,90", 
            "12,90",
            "7,90",
            "14,90", 
            "12,90", 
            "9,90", 
            "9,90", 
            "9,90", 
            "12,90"];

for (var i=0; i<film.length; i++) {
    film[i] += " - " + prezzo[i] + "€";
}

var elListaFilm=document.getElementById("listaFilm");
film.sort();

for(var i=0; i<film.length; i++) {
    elListaFilm.innerHTML += "<li>" + film[i] + "</li>";
};

var elNumFilm=document.getElementById("numFilm");
elNumFilm.innerHTML += "<b>" + film.length + " available movies</b>";