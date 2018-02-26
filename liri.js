

var request = require("request");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var fs = require("fs");
var spotify = new Spotify({
  id: "34e84d93de6a4650815e5420e0361fd3",
  secret: "5162cd8b5cf940f48702dffe096c2acb"
});


// GET MOVIE

var getMeMovie = function(movieName) {
  if (movieName === undefined) {
    movieName = "Mr Nobody";
  }
  var urlMovie = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";
  request(urlMovie, function(error, response, body) {
      var jsonData = JSON.parse(body);
      console.log(jsonData.Title);
      console.log(" ");
      console.log(jsonData.Year);
      console.log(" ");
      console.log(jsonData.Rated);
      console.log(" ");
      console.log(jsonData.imdbRating);
      console.log(" ");
      console.log(jsonData.Country);
      console.log(" ");
      console.log(jsonData.Language);
      console.log(" ");
      console.log(jsonData.Plot);
      console.log(" ");
      console.log(jsonData.Actors);
      console.log(" ");
      console.log(jsonData.tomatoURL);    
  });
};




//GET TWITTER

var getTweets = function() {
  var client = new Twitter(keys);
  var params = {
    screen_name: "MN_UCB"
  };
  client.get("statuses/user_timeline", params, function(error, tweets, response) {
    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].created_at);
        console.log(" ");
        console.log(tweets[i].text);
      }
    }
  });
};



//SELECT OPTIONS

var input = function(selection, functionname) {
  switch (selection) {
    case "movie-this":
      getMeMovie(functionname);
      break;
    case "spotify-this-song":
      console.log("Sorry, still working on this feature, check back later");
      break;
    case "my-tweets":
      getTweets();
      break;
    default:
      console.log("Sorry, I don't understand... you want me to call Jayson?");
  }
};

var startCode = function(arg1, arg2) {
  input(arg1, arg2);
};


startCode(process.argv[2], process.argv[3]);
console.log("Fuction selected:"+process.argv[2]);
console.log("Input:"+ process.argv[3]);
