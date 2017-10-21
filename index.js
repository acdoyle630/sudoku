/*jshint esversion: 6*/

const sudokoSolve = function(matrix, iterations){
  let rotatedMatrix = rotateMatrix(matrix);
  for(var i = 0; i<matrix.length; i++){
    for(var j=0; j<matrix[i].length; j++){
      if(matrix[i][j] === 0){
        console.log("HELPER");
        newArray = compareArrays(matrix[i], rotatedMatrix[j]);
      }
      console.log(newArray);
    }
  }
};

function rotateMatrix(matrix){
  let rotatedMatrix = [[],[],[],[],[],[],[],[],[]];
  for(i = 0; i<matrix.length; i++){
    for(j = 0; j<matrix[i].length; j++){
      rotatedMatrix[j][matrix.length - 1 - i] = matrix[i][j];
    }
  }
  return(rotatedMatrix);
}

function compareArrays(arr1, arr2){
  let combinedArray = [];
  for(var k = 0; k<arr1.length; k++){
    if(combinedArray.indexOf(arr1[k]) < 0){
      combinedArray.push(arr1[k]);
    }
    if(combinedArray.indexOf(arr2[k]) < 0){
      combinedArray.push(arr2[k]);
    }
  }
  return combinedArray;
}

sudokoSolve(
[
[0, 6, 0, 3, 0, 0, 8, 0, 4],
[5, 3, 7, 0, 9, 0, 0, 0, 0],
[0, 4, 0, 0, 0, 6, 3, 0, 7],
[0, 9, 0, 0, 5, 1, 2, 3, 8],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[7, 1, 3, 6, 2, 0, 0, 4, 0],
[3, 0, 6, 4, 0, 0, 0, 1, 0],
[0, 0, 0, 0, 6, 0, 5, 2, 3],
[1, 0, 2, 0, 0, 9, 0, 8, 0]
], 0);
