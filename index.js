/*jshint esversion: 6*/

const sudokoSolve = function(arr){
  let zeros = 0;
  let zeroIndex = null;
  for(var i = 0; i<arr.length; i++){
    zeros = 0;
    for(var j = 0; j < arr[i].length; j++){
      if(arr[i][j] === 0){
        zeros ++;
        zeroIndex = j;
      }
    }
    if(zeros === 1){
      arr[i].splice(zeroIndex, 1, 69);
    }
  }
  console.log(arr);
};


sudokoSolve(
  [
  [0, 6, 0, 3, 0, 0, 8, 0, 4],
  [5, 3, 7, 0, 9, 0, 0, 0, 0],
  [0, 4, 0, 0, 0, 6, 3, 0, 7],
  [0, 9, 0, 0, 5, 1, 2, 3, 8],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [7, 1, 3, 6, 2, 5, 8, 4, 0],
  [3, 0, 6, 4, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 6, 0, 5, 2, 3],
  [1, 0, 2, 0, 0, 9, 0, 8, 0]
  ]);