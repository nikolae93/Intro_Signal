/*

Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string inputArray

A non-empty array.

Guaranteed constraints:
1 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 10.

[output] array.string

Array of the longest strings, stored in the same order as in the inputArray.

*/

function allLongestStrings(niz) {
    var max = -250; var rez=[];

     for (var i =0; i<niz.length;i++){
          if (niz[i].length>=max){max=niz[i].length;}
     }
    for (var j=0;j<niz.length;j++){
        if (niz[j].length===max){rez.push(niz[j]); }
    }
    return rez ;   
}