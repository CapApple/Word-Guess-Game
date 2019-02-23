var library = ["bike", "monster", "question", "fund", "consumer", "monopoly"];
var win = 0;

document.onkeyup = function game() {
    var guess = 0;
    var blanket = [];
    var guessed = [];
    var success = false;
    //reset
    document.querySelector(".msg").innerHTML = null;
    document.querySelector('.number').innerHTML = 15;
    document.querySelector(".placeholder").innerHTML = null;
    document.querySelector(".guessed").innerHTML = null;
    document.querySelector("#audio").innerHTML = null;

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
            // calculate the indexes of letter and replace " _" with letter at the same index
            for (var i = 0; i < word.length; i++) {
                var index = word.indexOf(letter, i);
                if(index != -1){
                    blanket.splice(index, 1, " " + letter);
                }
            }
            document.querySelector(".placeholder").innerHTML = blanket.join('');

            console.log(blanket.indexOf(" _"));
            

            // When there is no more " _" in the blanket Array, success
            if(blanket.indexOf(" _") < 0){
                // document.querySelector(".msg").innerHTML = "You got it! Press space to continue."
                win ++;
                // success = true;
                document.querySelector("#win").innerHTML = win;
              
                document.querySelector("#audio").innerHTML = "<audio control autoplay> <source src = \"assets/audio/happykids.mp3\" type=\"audio/mpeg\"></audio>";
                // game();
                window.setTimeout(game , 3000); 
            }
        }
        
        
      

    }
    console.log("test:" + guess);



}