/*jshint esversion: 6*/

const sudokoSolve = function(matrix){
  let totalZeros = 0;
  let rotatedMatrix = rotateMatrix(matrix);
  let section1 = [matrix[0][0], matrix[0][1], matrix[0][2], matrix[1][0], matrix[1][1], matrix[1][2], matrix[2][0], matrix[2][1], matrix[2][2]];
  let section2 = [matrix[0][3], matrix[0][4], matrix[0][5], matrix[1][3], matrix[1][4], matrix[1][5], matrix[2][3], matrix[2][4], matrix[2][5]];
  let section3 = [matrix[0][6], matrix[0][7], matrix[0][8], matrix[1][6], matrix[1][7], matrix[1][8], matrix[2][6], matrix[2][7], matrix[2][8]];
  let section4 = [matrix[3][0], matrix[3][1], matrix[3][2], matrix[4][0], matrix[4][1], matrix[4][2], matrix[5][0], matrix[5][1], matrix[5][2]];
  let section5 = [matrix[3][3], matrix[3][4], matrix[3][5], matrix[4][3], matrix[4][4], matrix[4][5], matrix[5][3], matrix[5][4], matrix[5][5]];
  let section6 = [matrix[6][3], matrix[6][4], matrix[6][5], matrix[7][3], matrix[7][4], matrix[7][5], matrix[8][3], matrix[8][4], matrix[8][5]];
  let section7 = [matrix[6][0], matrix[6][1], matrix[6][2], matrix[7][0], matrix[7][1], matrix[7][2], matrix[8][0], matrix[8][1], matrix[8][2]];
  let section8 = [matrix[6][3], matrix[6][4], matrix[6][5], matrix[7][3], matrix[7][4], matrix[7][5], matrix[8][3], matrix[8][4], matrix[8][5]];
  let section9 = [matrix[6][6], matrix[6][7], matrix[6][8], matrix[7][6], matrix[7][7], matrix[7][8], matrix[8][6], matrix[8][7], matrix[8][8]];


  for(var i = 0; i<matrix.length; i++){
    for(var j=0; j<matrix[i].length; j++){
      section = [];
      if(matrix[i][j] === 0){
        totalZeros ++;
        if(i >=0 && i <=2 && j>=0 && j <=2){
          section = section1;
        }
        if(i >=0 && i <=2 && j >=3 && j <=5){
          section = section2;
        }
        if(i >=0 && i <=2 && j >=6 && j <=8){
          section = section3;
        }
        if(i >=3 && i <=5 && j >=0 && j <=2){
          section = section4;
        }
        if(i >=3 && i <=5 && j >=3 && j <=5){
          section = section5;
        }
        if(i >=3 && i <=5 && j >=6 && j <=8){
          section = section6;
        }
        if(i >=5 && i <=8 && j >=0 && j <=2){
          section = section7;
        }
        if(i >=5 && i <=8 && j >=3 && j <=5){
          section = section8;
        }
        if(i >=5 && i <=8 && j >=6 && j <=8){
          section = section9;
        }
        newArray = compareArrays(matrix[i], rotatedMatrix[j], section);
        console.log(newArray);
        //console.log(newArray.length);
        // if(newArray.length === 9){
        //   matrix[i][j] === new;
        // }

      }
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

function compareArrays(arr1, arr2, arr3){
  let combinedArray = [];
  let arrayTotal = 0;
  for(var k = 0; k<arr1.length; k++){
    if(combinedArray.indexOf(arr1[k]) < 0){
      combinedArray.push(arr1[k]);
      arrayTotal += arr1[k];
    }
    if(combinedArray.indexOf(arr2[k]) < 0){
      combinedArray.push(arr2[k]);
      arrayTotal += arr2[k];
    }
    if(combinedArray.indexOf(arr3[k]) < 0){
      combinedArray.push(arr3[k]);
      arrayTotal += arr3[k];
    }
  }
  return [arrayTotal, combinedArray];
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
]);
