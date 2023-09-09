var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        // <img id="rock" src="rock.png">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    you = this.id;
    yourChoice = document.getElementById("your-choice")
    yourChoice.src = you + ".png";

    //random for oppponent
    opponent = choices[Math.floor(Math.random() * 3)]; //0- .999999 * 3 = 0-2.999994
    opponentChoice = document.getElementById("opponent-choice")
    opponentChoice.src = opponent + ".png";

    //check for winner
    if (you == opponent) {
        selectChoice()
    }
    
    
    else {
        if (you == "rock") {
            if (opponent == "scissors") {
                yourScore += 1;
            }
            else if (opponent == "paper") {
                opponentScore += 1;
            }
        }
        else if (you == "scissors") {
            if (opponent == "paper") {
                yourScore += 1;
            }
            else if (opponent == "rock") {
                opponentScore += 1;
            }
        }
        else if (you == "paper") {
            if (opponent == "rock") {
                yourScore += 1;
            }
            else if (opponent == "scissors") {
                opponentScore += 1;
            }
        }
    }

    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;
}
function checkScore(){
     if(yourScore==3 && opponentScore<3){
        document.getElementById("your-score").innerHTML = "You Win &#128526;, Congrats &#129321; "
        document.getElementById("opponent-score").innerText= ""
        yourScore=opponentScore=0
    }
    else if(opponentScore==3 && yourScore<3){
        document.getElementById("your-score").innerHTML = "Opponent Win, Try Again &#128577;"
        document.getElementById("opponent-score").innerText= ""
        yourScore=opponentScore=0
    }
}