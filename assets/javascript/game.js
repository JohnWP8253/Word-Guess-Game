


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

    
}
   
