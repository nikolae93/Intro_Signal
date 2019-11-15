/*

Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 50.

[output] boolean

true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

*/

function palindromeRearranging(stringic) {
        var brojac=0;
        niz = stringic.split("");
         for (var i=0; i<niz.length;i++){
             for(var j=i+1;j<niz.length;j++){
                 if(niz[i]===niz[j]){niz[i]=9; niz[j]=9; break;}
             }
         }
        
          for(var g=0;g<niz.length;g++){
              if(!isNaN(parseInt(niz[g]))){brojac+=1;}
          }

        var faktor = niz.length-brojac;

    if(faktor<=1){return true;}else {return false ;}
          
    }