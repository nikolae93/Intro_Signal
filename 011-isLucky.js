/*

Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum
 of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A ticket number represented as a positive integer with an even number of digits.

Guaranteed constraints:
10 ≤ n < 106.

[output] boolean

true if n is a lucky ticket number, false otherwise.
[JavaScript (ES6)] Syntax Tips

*/

function isLucky(br) {

    var str = br.toString();
    var niz = str.split("");
 
   var ite = niz.length ;
   var ite2 = ite/2 ;
   var max1=0 ;
   var max2 =0;

      for (var i=0;i<ite2;i++){
           max1 += parseInt(niz[i]);  
      }
      
      for (var j=ite2;j<niz.length;j++){
          max2 += parseInt(niz[j]);
     }
 
 if (max1===max2){return true ; }else {
     return false ;
 }
}