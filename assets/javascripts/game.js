var library = ["bike", "monster", "question", "fund", "consumer"];
var win = 0;
document.onkeyup = function game() {
    var guess = 0;
    var blanket = [];
    var guessed = [];
    //reset
    document.querySelector(".msg").innerHTML = null;
    document.querySelector('.number').innerHTML = 15;
    document.querySelector(".placeholder").innerHTML = null;
    document.querySelector(".guessed").innerHTML = null;

    // randomly pick a word from library
    var random = library[Math.floor(Math.random() * library.length)];
    console.log(random);
    // string to array
    var word = random.split('');
    console.log(word);
    // generate space holders and store them in an array
    for (i = 0; i < word.length; i++) {
        blanket.push(' _');
    }
    console.log(blanket);
    console.log(word.length);
    document.querySelector(".placeholder").innerHTML = blanket.join('');

    // Time to guess
    
    document.onkeyup = function (guessletter) {
        guess += 1;
        document.querySelector('.number').innerHTML = 15 - guess;
        var letter = guessletter.key.toLowerCase();
        guessed.push(letter);
        document.querySelector(".guessed").innerHTML = guessed;
        if(guess > 14){
            document.querySelector(".msg").innerHTML = "You have used up your chances. Press any key to start over.";
        }
        if(guess >15){
            game();
        }

        if(word.indexOf(letter) != -1){
            var index = word.indexOf(letter);
            blanket.splice(index,1,letter);
            document.querySelector(".placeholder").innerHTML = blanket.join('');
            console.log(blanket.indexOf(" _"));

            if(blanket.indexOf(" _") < 0){
                // ???????(If I replace <0 with = -1, it wont work, why????)
                document.querySelector(".msg").innerHTML = "You got it! Press space to continue."
                win ++;
                document.querySelector("#win").innerHTML = win;
                // document.onkeyup = game();
            }
        }

        if(letter === " "){
            game();
        }

    }
    console.log("test:" + guess);



}