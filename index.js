/*jshint esversion: 6*/

// const sudokoSolve = function(arr){
//   let zeros = 0;
//   let zeroIndex = null;

//   //traverse each row, and if missing one number replace

//   for(var i = 0; i<arr.length; i++){
//     zeros = 0;
//     let rowTotal = 0;
//     for(var j = 0; j < arr[i].length; j++){
//       rowTotal += arr[i][j];
//       if(arr[i][j] === 0){
//         zeros ++;
//         zeroIndex = j;
//       }
//     }
//     if(zeros === 1){
//       arr[i].splice(zeroIndex, 1, 45-rowTotal);
//     }
//   }
//   console.log(arr);
// };


// sudokoSolve(
//   [
//   [0, 6, 0, 3, 0, 0, 8, 0, 4],
//   [5, 3, 7, 0, 9, 0, 0, 0, 0],
//   [0, 4, 0, 0, 0, 6, 3, 0, 7],
//   [0, 9, 0, 0, 5, 1, 2, 3, 8],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [7, 1, 3, 6, 2, 5, 8, 4, 0],
//   [3, 0, 6, 4, 0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 6, 0, 5, 2, 3],
//   [1, 0, 2, 0, 0, 9, 0, 8, 0]
//   ]);


function rotateMatrix(matrix){
  let rotatedMatrix = [[],[],[]];
  for(i = 0; i<matrix.length; i++){
    for(j = 0; j<matrix[i].length; j++){
      console.log("i",i);
      console.log("j",j);
      rotatedMatrix[j][matrix.length - 1 - i] = matrix[i][j];
    }
  }
  console.log(rotatedMatrix);
}

rotateMatrix(
  [
  [1,2,3],
  [4,5,6],
  [7,8,9]
  ]);