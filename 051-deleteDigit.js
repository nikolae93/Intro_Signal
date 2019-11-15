/*

Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example

For n = 152, the output should be
deleteDigit(n) = 52;
For n = 1001, the output should be
deleteDigit(n) = 101.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
10 ≤ n ≤ 106.

[output] integer

*/

function deleteDigit(n) {
    
        var br = n.toString().split("");
        var kn=[]; 
        var tn="";
        
        for(var i=0;i<br.length;i++){
            for(var j =0;j<br.length;j++){
                if(i!==j){tn+=br[j]}
            }
            kn.push(parseInt(tn));
            tn="";
        }
       var max =-Infinity;
        for(var k=0;k<kn.length;k++){
            if(kn[k]>=max){max=kn[k]}
        }
        return max;
    }