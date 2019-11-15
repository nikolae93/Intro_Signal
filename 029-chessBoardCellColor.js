/*

Given two cells on the standard chess board, determine whether they have the same color or not.

Example

For cell1 = "A1" and cell2 = "C3", the output should be
chessBoardCellColor(cell1, cell2) = true.

Input/Output

[execution time limit] 4 seconds (js)

[input] string cell1

Guaranteed constraints:
cell1.length = 2,
'A' ≤ cell1[0] ≤ 'H',
1 ≤ cell1[1] ≤ 8.

[input] string cell2

Guaranteed constraints:
cell2.length = 2,
'A' ≤ cell2[0] ≤ 'H',
1 ≤ cell2[1] ≤ 8.

[output] boolean

true if both cells have the same color, false otherwise.

*/

function chessBoardCellColor(c1, c2) {
    var crne = ["A1","A3","A5","A7","B2","B4","B6","B8","C1","C3","C5","C7",
       "D2","D4","D6","D8","E1","E3","E5","E7","F2","F4","F6","F8",
       "G1","G3","G5","G7","H2","H4","H6","H8"
      ];
      if (crne.indexOf(c1) !== -1) {c1=1;} else {c1=2;}
      if (crne.indexOf(c2) !== -1) {c2=1;}  else {c2=2;}
  
      if (c1===c2){return true;}else {return false;}
  }