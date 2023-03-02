const restartBtn = document.getElementById("restartBtn");
console.log(restartBtn);
const tiles = Array.from(document.getElementsByClassName("tiles"));

const statusText = document.getElementById("statusText");
const oText = "O";
const xText = "X";
let currentPlayer = "X";
let spaces = Array(9).fill(null);
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]
// testing stores
console.log(tiles);
console.log(winConditions)
console.log(statusText)
console.log(xText)
console.log(oText)
console.log(spaces)

const startGame = () => {
    // checking and getting the tile/box/cell clicked
    tiles.forEach(tile => tile.addEventListener("click", tileClicked)
    )
    // sta
    statusText.textContent = `${currentPlayer}'s turn`

}

function tileClicked() {
    // get the index of the box/tile/cell clicked
    const cellIndex = this.getAttribute("cellIndex");

    // storing/saving  the cellIndex
    if (!spaces[cellIndex]) {
        spaces[cellIndex] = currentPlayer;
        this.textContent = currentPlayer
        // cellIndex.textContent = currentPlayer;
        currentPlayer = currentPlayer == xText ? oText : xText;
        statusText = `${currentPlayer}'s turn`;
       
    }


    // updateTile(this, cellIndex);

    // checkWinner();
    
}

// updateTile(tiles,index) {
//     spaces[index] = currentPlayer;
//     tile.textContent = currentPlayer;

// }
restartBtn.addEventListener("click", ()=> {
    spaces.fill(null);
    
    tiles.forEach(tile => {
        tile.textContent = ""
    })

    
})




startGame()

// issues left with 
// 1 checking for winner
//  2 players turn
//  2 winner alert


