/**
 
In the popular Minesweeper game you have a board with some mines and those cells that don't contain 
a mine have a number in it that indicates the total number of mines in the neighboring cells. 
Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

minesweeper(matrix) = [[1, 2, 1],
                       [2, 1, 1],
                       [1, 1, 1]]
Check out the image below for better understanding:

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.boolean matrix

A non-empty rectangular matrix consisting of boolean values - true if the corresponding cell contains a mine,
 false otherwise.

Guaranteed constraints:
2 ≤ matrix.length ≤ 100,
2 ≤ matrix[0].length ≤ 100.

[output] array.array.integer

Rectangular matrix of the same size as matrix each cell of which contains an integer equal to the number of mines
 in the neighboring cells. Two cells are called neighboring if they share at least one corner.

 */

function minesweeper(niz) {

    var brojevi =[];
 
      for (var i=0;i<niz.length;i++){
            brojevi.push([]);        
            var brojac = [];

            for (var j=0;j<niz[i].length;j++){
 
                 brojevi[i][j]=0;   
                 var br =0;
               // iznad
                     if (niz[i][j-1]===true){brojevi[i][j]++;}
                 
                 // ispod
                 if (niz[i][j+1] != undefined){
                     if (niz[i][j+1]===true){brojevi[i][j]++;}
                 }
                 // levo
                 if (niz[i-1] != undefined){
                     if (niz[i-1][j]===true){brojevi[i][j]++;}
                 }
                 //desno
                 if (niz[i+1] != undefined){
                     if (niz[i+1][j]===true){brojevi[i][j]++;}
                 }
                 // dole desno
                 if (niz[i+1] != undefined){
                     if (niz[i+1][j+1]===true){brojevi[i][j]++;}
                 }
                 // dole levo
                 if (niz[i+1] != undefined){
                     if (niz[i+1][j-1]===true){brojevi[i][j]++;}
                 }
                 // gore desno
                 if (niz[i-1] != undefined){
                     if (niz[i-1][j+1]===true){brojevi[i][j]++;}
                 }
                 // gore levo
                 if (niz[i-1] != undefined){
                     if (niz[i-1][j-1]===true){brojevi[i][j]++;}
                 }
              
            }
 
      }
 return brojevi
 }