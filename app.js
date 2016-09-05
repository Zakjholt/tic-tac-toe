var currentTurn = "X";
var cells = ['', '', '', '', '', '', '', '', ''];
var gameOver = false;
$(document).ready(function() {

    $("body").on("click", ".empty", function() {
            $(this).removeClass("empty");
            cells[$(this).data("cell")] = currentTurn;
            if (currentTurn === "X") {
                $(this).addClass("X");
                currentTurn = "O";
            } else {
                $(this).addClass("O");
                currentTurn = "X";
            }
        winCheck();
    });



});

function winCheck() {
    var winner = '';

    var wins = [
        // Horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal
        [0, 4, 8],
        [6, 4, 2]
    ];


    var gameCells = cells;
    $.each(wins, function(key, value) {
        var i1 = wins[key][0];
        var i2 = wins[key][1];
        var i3 = wins[key][2];


        if (cells[i1] === cells[i2] && cells[i2] === cells[i3] && cells[i1] !== "") {
            winner = cells[i1];
            $("body").html("<h1>" + winner + " is the winner!</h1>");
            return;
        }

    });

    if (winner !== "") {
        gameOver = true;
    }
}
