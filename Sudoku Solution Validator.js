// This code is in Javascipt..

// Question : Create a function : that accepts a 2D array representing a 
// Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku 
// board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

let dupCheck = function(arr){
    // this function is for checking unique elements in an array..
    for (i = 0; i < arr.length; i++){
        if (arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i])) return false;
        else continue;
    }
    return true;
}

function validSolution(board){
  let verArr = [], temp = [], sArr = [];
  let i = 0;
  for (let row = 0; row < board.length; row++){

      // first checking if in horizontal arrays if elements are same..
      if (!dupCheck(board[row])) return false;

      for (let col = 0; col < board[row].length; col++){
          verArr.push(board[col][row]);
      }
      // Now here making vertical array to check unique values...
      if (!dupCheck(verArr)) return false;
      verArr = [];
      
    while(i < board[row].length){
        temp = board[row].slice(i, i +=3);
        sArr.push(temp);
    } 
  }
  temp = [];
  for (let row = 0; row < sArr.length; row++){
    temp = temp.concat(sArr[row], sArr[row + 3], sArr[row + 6]);
    if (!dupCheck(temp)) return false;
    temp = [];
    if (row == 2) row = 8;
    if (row == 11) row = 17;
    if (row == 20) break;
  }
  return true;
}
