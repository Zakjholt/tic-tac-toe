var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
$(document).ready(function() {
    var currentTurn = "x";

    $("body").on("click", ".empty", function() {
        $(this).removeClass("empty");
        board[$(this).parent().index()][$(this).index()] = currentTurn;
        winCheck(board);
        if (currentTurn === "x") {
            $(this).addClass("x");
            currentTurn = "o";
        } else {
            $(this).addClass("o");
            currentTurn = "x";
        }
    });

});

function newGame() {
    var newBoard = $(".template").clone();
    newBoard.removeClass("template");
    $("body").append(newBoard);
}

function winCheck(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            var xCount = 0;
            var oCount = 0;
            if (arr[i][j] === "x") {
                xCount++;
            } else if (arr[i][j] === "o") {
                oCount++;
            }
            if (xCount === 3) {
                $(this).closest('.board').empty();
                $(this).closest('.board').html("<h2> X Wins! </h2>");
            }
        }
    }
}
