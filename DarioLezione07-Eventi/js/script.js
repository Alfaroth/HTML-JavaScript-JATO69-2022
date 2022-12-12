var URLTwitter = "http://localhost:3000/twitter";
 
var username = document.querySelector('#username');
var tweet = document.querySelector('#tweet');
 
var elencoTweet = document.querySelector('#listaTweet');
 
function stampaOrario() {
 
    var now = new Date();
    var ora = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
 
    var lallero = ora + ': ' + min + ': ' + sec;
 
    console.log(ora + ': ' + min + ': ' + sec);
 
    return lallero;
 
}
 
function writtenTweet(miaListaTweet) {
 
    elencoTweet.innerHTML= '';
 
    miaListaTweet.forEach(bird => {
       // var id = bird.id;
        var username = bird.username;
        var tweet = bird.tweet;
 
 
    elencoTweet.innerHTML = "<li>" + username + ": <p>" + tweet + "</p></li>";
  })
 
}
 
function controllaTweet() {
    var longTweet = tweet.value.length;
    if (longTweet > 50) {
        check.innerHTML = "Il tuo Tweet è troppo lungo! <br>";
        event.preventDefault();
        return false;
    } else {
        check.innerHTML = "";
        return true;
    }
}
 
function addTweet() {
 
    var newTweet = {
        username: username.value,
        tweet: tweet.value,
        ora: stampaOrario()
 
    };
 
    if(controllaTweet()){
 
        fetch(URLTwitter, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newTweet)
    })
    .then(data => {
        data.json()
    })
 
 
}else {
    event.preventDefault();
    console.log("Errore");
}
}
 
 
fetch(URLTwitter)
    .then(data => {
        return data.json()
    })
    .then(response => {
 
        console.log(response);
        writtenTweet(response);
    });
 
var form = document.querySelector('#sendTweet');
form.addEventListener('submit', addTweet);