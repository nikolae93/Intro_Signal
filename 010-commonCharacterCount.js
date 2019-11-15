/*


Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

Input/Output

[execution time limit] 4 seconds (js)

[input] string s1

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s1.length < 15.

[input] string s2

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s2.length < 15.

[output] integer

*/

function commonCharacterCount(st1, st2) {
    var brel = 0 ;
          niz1= st1.split("");
          niz2 =st2.split("");
    
        for (var i=0;i<niz1.length;i++){
            for (var j=0;j<niz2.length;j++){
             if (niz1[i]===niz2[j])  {brel+=1; niz2[j]=9; ;  break;}  
            }
        }
         
   return brel;
}