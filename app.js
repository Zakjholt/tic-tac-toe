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
    $(".newGame").click(function() {
        newGame();
    });

});

function newGame() {
    var newBoard = $(".template").clone();
    newBoard.removeClass("template");
    $(".playingSpace").prepend(newBoard);
}

function winCheck(arr) {
    var left = 0;
    var center = 1;
    var right = 2;

    if (arr[0] === arr[1] && arr[1] === arr[2]) {
        $(".board").empty();
    }
}
