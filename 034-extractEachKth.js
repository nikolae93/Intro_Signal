/*

Given array of integers, remove each kth element from it.

Example

For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
extractEachKth(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Guaranteed constraints:
5 ≤ inputArray.length ≤ 15,
-20 ≤ inputArray[i] ≤ 20.

[input] integer k

Guaranteed constraints:
1 ≤ k ≤ 10.

[output] array.integer

inputArray without elements k - 1, 2k - 1, 3k - 1 etc.

*/

function extractEachKth(ia, k) {
    var br=0; 
    var fin=[];
    
    for(var i=0;i<ia.length;i++){
        br++;
        if(br===k){br=0; ia[i]="a"; }
    }
    for(var j=0;j<ia.length;j++){
        if( isNaN(ia[j]) ){}else{fin.push(ia[j]);
    }
    }
    return fin;
}