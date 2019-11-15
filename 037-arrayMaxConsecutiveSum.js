/*

Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
arrayMaxConsecutiveSum(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:

2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8.
Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Array of positive integers.

Guaranteed constraints:
3 ≤ inputArray.length ≤ 105,
1 ≤ inputArray[i] ≤ 1000.

[input] integer k

An integer (not greater than the length of inputArray).

Guaranteed constraints:
1 ≤ k ≤ inputArray.length.

[output] integer

The maximal possible sum.

*/

function arrayMaxConsecutiveSum(niz, br) {
    var maxsum =-Infinity;    
    var tempmax=0;

              for( var i=0;i<br ; i++){
                  tempmax+=niz[i];
              }

             maxsum=tempmax; var k=0;

              for (var j=br;j<=niz.length;j++){
                tempmax=tempmax-niz[k] +niz[j] ;
                k++;
                if (tempmax> maxsum){maxsum=tempmax;}
              }
         
          if(isNaN(maxsum)){return null;}
          return maxsum;
   }