1// 5 parts of this Tic Tac Toe Game
// 1. Initialize States

window.onload = function() {
    //Hold number of canvas 1-9
    var num;
    //hold canvas element that was clicked; Which box was it?
    var box;
    //Hold the context object of each canvas
    var content;
    //Store number of turns; 9 turns.
    var turn = 1;
    //Is the box used or not?
    var filled;
    //This will hold the "X" or "O" per box
    var character;
    //8 Conditions for winner
    var winner;
    //Keep track of if the game is over; default value.
    var gameOver = false;
    //conditions for filled values
    filled = [false, false, false, false, false, false, false, false, false, false];
    character =['', '', '', '', '', '', '', '', ''];
    winner = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

     //2. New Game Button
    //Create new game click event
    var n = document.getElementById("new-game");
    n.addEventListener("click", newGame);

    //New Game Function
    function newGame() {
        document.location.reload();
    }

    //3. Create canvas click event and receive box number.
    //Create canvas click event
    document.getElementById("tic-tac-toe").addEventListener("click", function(event) {
        boxClick(event.target.id);
    })

    //Define boxClick function a.k.a Get assigned box number
    function boxClick(numId) {
        var box = document.getElementById(numId);
        var content = box.getContext("2d");
       
        // switch(numId) {
        //     case "canvas1": num = 1;
        //                     break;
        //     case "canvas2": num = 2;
        //                     break;
        //     case "canvas3": num = 3;
        //                     break;
        //     case "canvas4": num = 4;
        //                     break;
        //     case "canvas5": num = 5;
        //                     break;
        //     case "canvas6": num = 6;
        //                     break;
        //     case "canvas7": num = 7;
        //                     break;
        //     case "canvas8": num = 8;
        //                     break;
        //     case "canvas9": num = 9;
        //                     break;
        // }

        //Instagram Account @kclay15 helped me refactor the code above
        //This will take the last number in the string, convert it into an integer, and assign a number to it.
        num = parseInt(numId.charAt(numId.length - 1 ));
        
        //4. Draw the shapes on the canvas
        if(filled[num-1] == false) {
            if (gameOver == false ) {
                if(turn%2 != 0) {
                    content.beginPath();
                    content.moveTo(15, 15);
                    content.lineTo(85, 85);
                    content.moveTo(85, 15);
                    content.lineTo(15, 85);
                    content.lineWidth = 10;
                    content.strokeStyle = "#3989D4";
                    content.stroke();
                    content.closePath();
                    character[num -1] = 'X';
                }
                else {
                    content.beginPath();
                    content.arc(50, 50, 35, 2 * Math.PI, false);
                    content.strokeStyle = "#39BCD4";
                    content.lineWidth = 10;
                    content.stroke();
                    content.closePath();
                    character[num -1] = 'O';
                }
                turn++;
                filled[num-1] = true;

                //5. Check for winner
                var s = character[num-1];
                for(var j = 0; j < winner.length; j++) {
                    //Example: winner[0] = [0, 1, 2]
                    //We are checking character[0] , character[1], character[2]
                    if((character[winner[j][0]] == s) && (character[winner[j][1]] == s) && (character[winner[j][2]] == s)) {
                        document.getElementById("result").innerText = "Player " + s + " won!";
                        gameover = true;
                    }
                }
            }
            else {

            }
        }
        else {

        }
    }

}