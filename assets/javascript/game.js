


// 90s movie guessing game
// var movies = ["heat", "se7en", "goodfellas", "misery", "philadelphia", "aladdin", "clerks"];

var movieGuessingGame = {
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
        },
    },

    movieInPlay: null,
    lettersOfTheMovie: [],
    lettersMatched: [],
    lettersGuessed: [],
    guessesLeft: 0,
    totalGuesses: 0,
    guessedLetter: null,
    wins: 0,

// This is the game setup that is called when loading the page
    setupGame: function() {
        var objKeys = Object.keys(this.moviesToPick);
        this.moviesInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

        this.lettersOfTheMovie = this.movieInPlay.split("");

        this.rebuildMoviewView();

        this.processUpdateTotalGuesses ();
    },

    updatePage: function(letter) {
        if (this.guessesLeft === 0) {
            this.restartGame();
        }
        else {
            this.updateGuesses(letter);

            this.updateMatchedLetters(letter);

            this.rebuildMovieView();

            if (this.updateWins() === true) {
                this.restartGame();
            }
        }
    },

    // Incorrect guess function
    updateGuesses: function(letter) {
        if ((this.lettersGuessed.indexOf(letter) === -1) && (this.lettersOfTheMovie.indexOf(letter) === -1)) {
            
            this.lettersGuessed.push(letter);

            this.guessesLeft--;

            document.querySelector("#guesses-left").innerHTML = this.guessesLeft;
            document.querySelector("#letters-guessed").innerHTML = this.lettersGuessed.join(", ");
        }
    },

    updateMatchedLetters: function(letter) {

    }

}
   
