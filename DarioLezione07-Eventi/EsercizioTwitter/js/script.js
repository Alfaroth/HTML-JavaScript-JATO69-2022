const TWEET_URL = "http://localhost:3000/tweet";

var username = document.querySelector("#username");
var tweet = document.querySelector("#tweet");
var prevTweet = document.querySelector("#prevTweet");

var twitterForm = document.querySelector("#twitterForm");
twitterForm.addEventListener("submit", addTweet);

fetch(TWEET_URL)
    .then(data => {return data.json()})
    .then(response => {stampaTweet(response);})

function getTime() {
    var now = new Date();
    var ora = (now.getHours() < 10 ? "0": "") + now.getHours();
    var min = (now.getMinutes() < 10 ? "0": "") + now.getMinutes();
    var sec = (now.getSeconds() < 10 ? "0": "") + now.getSeconds();
 
    var orario = ora + ":" + min + ":" + sec;
    return orario;
}

function Tweet(username, tweet, orarioTweet) {
    this.username = username;
    this.tweet = tweet;
    this.orarioTweet = orarioTweet;
}

function addTweet() {
    if (username.value.trim() == "") {
        feed.textContent = "Non hai inserito un username!";
        event.preventDefault();
    } else {
        if (tweet.value.length > 50) {
            feed.textContent = "Il tuo tweet è troppo lungo!";
            event.preventDefault();
        } else if (tweet.value.length == 0) {
            feed.textContent = "Il tuo tweet è vuoto!";
            event.preventDefault();
        } else {
            var newTweet = new Tweet(username.value, tweet.value, getTime());
            fetch(TWEET_URL, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newTweet)
            })
        }
    }
}

function stampaTweet(listaTweet) {
    prevTweet.textContent = "";
    listaTweet.forEach(tweets => {
        var username = tweets.username;
        var tweet = tweets.tweet;
        var orarioTweet = tweets.orarioTweet;
        prevTweet.innerHTML = "[" + orarioTweet + "] @" + username + "<br> " + tweet;
    })
}
