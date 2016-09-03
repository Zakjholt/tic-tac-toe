var topRow = [null, null, null];
var midRow = [null, null, null];
var botRow = [null, null, null];
$(document).ready(function() {
    var currentTurn = "x";

    $(".row").on("click", ".empty", function() {
        $(this).removeClass("empty");
        if (currentTurn === "x") {
            $(this).addClass("x");
            if ($(this).hasClass("top")) {
                topRow[$(this).index()] = currentTurn;
                winCheck(topRow);
            } else if ($(this).hasClass("mid")) {
                midRow[$(this).index()] = currentTurn;
                winCheck(midRow);
            } else if ($(this).hasClass("bot")) {
                botRow[$(this).index()] = currentTurn;
                winCheck(botRow);
            }
            currentTurn = "o";
        } else {
            $(this).addClass("o");
            if ($(this).hasClass("top")) {
                topRow[$(this).index()] = currentTurn;
                winCheck(topRow);
            } else if ($(this).hasClass("mid")) {
                midRow[$(this).index()] = currentTurn;
                winCheck(midRow);
            } else if ($(this).hasClass("bot")) {
                botRow[$(this).index()] = currentTurn;
                winCheck(botRow);
            }

            currentTurn = "x";
        }
    });

});

function winCheck(arr) {
    var xCount = 0;
    var oCount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "x") {
            xCount++;
        } else if (arr[i] === "o") {
            oCount++;
        }
    }

    if (xCount === 3 || xCount === 3) {
        $('.board').empty();
        $('.board').html("<h2>X Wins!</h2>");
    } else if (oCount === 3 || oCount === 3) {
        $('.board').empty();
        $('.board').html("<h2>O Wins!</h2>");
    }
}
