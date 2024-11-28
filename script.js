var currentPlayer = 'X';
var board = Array(9).fill(null);

function handleClick(index) {
    if (!board[index]) {
        board[index] = currentPlayer;
        document.getElementById('cell-' + index).classList.add(currentPlayer.toLowerCase());
        if (checkWin()) {
            document.getElementById('message').textContent = currentPlayer + ' Wins!';
        } else if (board.every(function(cell) { return cell; })) {
            document.getElementById('message').textContent = 'Draw!';
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('message').textContent = currentPlayer + "'s Turn";
        }
    }
}

function checkWin() {
    var winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winPatterns.some(function(pattern) {
        var a = pattern[0];
        var b = pattern[1];
        var c = pattern[2];
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}