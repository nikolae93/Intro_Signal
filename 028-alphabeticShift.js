/*

Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e.
 replace a with b, replace b with c, etc (z would be replaced by a).

Example

For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A non-empty string consisting of lowercase English characters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 1000.

[output] string

The resulting string after replacing each of its characters.

*/

function alphabeticShift(str) {
   var niz1 = str.split("");
   var  al = "abcdefghijklmnopqrstuvwxyz".split("");  var index=0;
     for (var i=0;i<niz1.length;i++){
         index= al.indexOf(niz1[i]);
        
         index++;
         if(index===26){index=0;}
         niz1[i]= al[index];
      
     }
     niz1 =   niz1.join("");
     
      return niz1;
  }