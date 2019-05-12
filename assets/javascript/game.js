    // Create an array of words to be guessed

    var hiphopArtist = [
        "run dmc",
        "big daddy kane",
        "krs-one",
        "biggie smalls",
        "nas",
        "snoop dogg",
        "wu tang clan",
        "mc lyte",
        "naughty by nature",
        "a tribe called quest"
    ]; 

    //Global variables

        var wins = 0;
        var currentWord;
        var guessedLetters = "_";
        var remainingGuesses = 0;
        var alreadyGuessed = 0;
        var gameStarted = false;
        var hasFinished = false;
        var maxNum = 10;
       
        //Pick a random workd from the hiphopArtist array

        var words = hiphopArtist[Math.floor(Math.random() * hiphopArtist.length)];

        //Create an empty array for random words
        var answerArray =[];

        for (var i = 0; i < words[currentWord].length; i++){
            guessedLetters.push("_");
        }

    // Create variables that hold references to the places in the HTML where we want to display things.

    var wins = document.getElementById("wins");
    var currentWord = document.getElementById("currentWord");
    var remainingGuesses = document.getElementById("remainingGuesses");
    var alreadyGuessed = document.getElementById("alreadyGuessed");

    // Updates the display in the html pge

    function updateDisplay() {
        document.getElementById("wins").innerText = wins;
        document.getElementById("currentWord").innerText = "";
        for (var i = 0; i < guessedLetters.length; i++){
            document.getElementById("currentWord").innerText += guessedLetters[i];
        }
    }

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

    //Determines which key was pressed.
      currentWord.textContent = event.key;



    //Create a variable to hold the number of remabiningLetters to be guessed
       var remainingGuesses = word.length;

        // ****This is where Game Loop begins ****

     while (remainingGuesses > 0) {
     //Show progress to player
    alert(answerArray.join(" "));
     } 

        // Use Math.floor to round the random number down to the nearest whole.
        currentWordIndex = Math.floor(Math.random() * (hiphopArtist.length));


        function Hangman() {
            this.hiphopArtist = [
                "Run DMC",
                "Big Daddy Kane",
                "KRS-One",
                "Biggie Smalls",
                "NAS",
                "Snoop Dogg",
                "Wu Tang Clan",
                "MC Lyte",
                "Naughty by Nature",
                "A Tribe Called Quest",
            ]
        }