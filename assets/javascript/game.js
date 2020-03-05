// Used YouTube videos, Book "JavaScript for dummies" and GitPages to help with this project.
// Shout out to Kortnie Heidel and Brooke Guarienti for their help on this project.

// 90s movie guessing game
// Movies to use - ["heat", "se7en", "goodfellas", "misery", "philadelphia", "aladdin", "clerks"];

var movieGuessingGame = {
  // The objects to choose from in the game
  moviesToGuess: {
    heat: {
      picture: "Heat.jpg",
      preview: "https://youtu.be/FjJotKwr4M4?t=152"
    },
    seven: {
      picture: "seven.jpg",
      preview: "https://youtu.be/h8m69o_1PoQ?t=115"
    },
    goodfellas: {
      picture: "goodfellas.jpg",
      preview: "https://youtu.be/ZwWCxIV6-GQ?t=222"
    },
    misery: {
      picture: "1990-misery-poster1.jpg",
      preview: "https://youtu.be/mGGwDmCTha8"
    },
    philadelphia: {
      picture: "philadelphia.jpg",
      preview: "https://youtu.be/wHSH-NpCQOw?t=108"
    },
    aladdin: {
      picture: "aladdin.jpg",
      preview: "https://youtu.be/s94HmtQwX7o?t=180"
    },
    clerks: {
      picture: "clerksposter_1.jpg",
      preview: "https://youtu.be/WTw51Ynkn7A"
    }
  },
  // Set variables for the guessing game
  movieInPlay: null,
  lettersOfTheMovie: [],
  lettersMatched: [],
  lettersGuessed: [],
  guessesLeft: 0,
  totalGuesses: 0,
  guessedLetter: null,
  wins: 0,

  // This is the game setup that is called when loading the page
  setupGame: function () {
    var objKeys = Object.keys(this.moviesToGuess);
    this.movieInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

    this.lettersOfTheMovie = this.movieInPlay.split("");

    this.rebuildMovieView();

    this.processUpdateTotalGuesses();
  },

  updatePage: function (letter) {
    if (this.guessesLeft === 0) {
      this.restartGame();
    } else {
      this.updateGuesses(letter);

      this.updateLettersMatched(letter);

      this.rebuildMovieView();

      if (this.updateWins() === true) {
        this.restartGame();
      }
    }
  },

  // Incorrect guess function
  updateGuesses: function (letter) {
    // forLoop of the incorrect guesses
    if (
      this.lettersGuessed.indexOf(letter) === -1 &&
      this.lettersOfTheMovie.indexOf(letter) === -1
    ) {
      this.lettersGuessed.push(letter);

      this.guessesLeft--;

      document.querySelector("#guesses-left").innerHTML = this.guessesLeft;
      document.querySelector(
        "#letters-guessed"
      ).innerHTML = this.lettersGuessed.join(", ");
    }
  },
  // Correct guess function
  updateLettersMatched: function (letter) {
    // forLoop for correct guesses
    for (var i = 0; i < this.lettersOfTheMovie.length; i++) {
      if (
        letter === this.lettersOfTheMovie[i] &&
        this.lettersMatched.indexOf(letter) === -1
      ) {
        this.lettersMatched.push(letter);
      }
    }
  },

  // Function for user guess amount
  processUpdateTotalGuesses: function () {
    this.totalGuesses = this.lettersOfTheMovie.length + 8;
    this.guessesLeft = this.totalGuesses;

    document.querySelector("#guesses-left").innerHTML = this.guessesLeft;
  },

  // Shows movies being guessed.
  rebuildMovieView: function () {
    var movieView = "";

    for (var i = 0; i < this.lettersOfTheMovie.length; i++) {
      // If the letter guessed matches, then it will display (I hope)
      if (this.lettersMatched.indexOf(this.lettersOfTheMovie[i]) !== -1) {
        movieView += this.lettersOfTheMovie[i];
      }
      // Will show blanks if there's an incorrect guess.
      else {
        movieView += "&nbsp;_&nbsp;";
      }
    }

    document.querySelector("#current-movie").innerHTML = movieView;
  },

  //   Restart function that resets all of the variables
  restartGame: function () {
    document.querySelector("#letters-guessed").innerHTML = "";
    this.movieInPlay = null;
    this.lettersOfTheMovie = [];
    this.lettersMatched = [];
    this.lettersGuessed = [];
    this.guessesLeft = 0;
    this.totalGuesses = 0;
    this.guessedLetter = null;
    this.setupGame();
    this.rebuildMovieView();
  },

  updateWins: function () {
    var win;

    // if the letter guessed is incorrect in the movie title, win is set to false.
    if (this.lettersMatched.length === 0) {
      win = false;
    }
    // on the other hand, we set win to true.
    else {
      win = true;
    }

    for (var i = 0; i < this.lettersOfTheMovie.length; i++) {
      if (this.lettersMatched.indexOf(this.lettersOfTheMovie[i]) === -1) {
        win = false;
      }
    }
    // If the win is true...
    if (win) {
      this.wins = this.wins + 1;

      document.querySelector("#wins").innerHTML = this.wins;

      // document.querySelector("#game-box").innerHTML =
      //   this.moviesToGuess[this.movieInPlay].picture + this.movieInPlay;

      var img = document.querySelector("#poster-div");
      console.log(img)
          img.innerHTML = `<img class='movie-poster' src='../images/${this.moviesToGuess[this.movieInPlay].picture}>`;
         
      return true;
    }
    return false;
  }
};

movieGuessingGame.setupGame();

document.onkeyup = function (event) {
  if (event.keyCode >= 49 && event.keyCode <= 90) {
    movieGuessingGame.guessedLetter = event.key.toLowerCase();

    movieGuessingGame.updatePage(movieGuessingGame.guessedLetter);
  }
};
