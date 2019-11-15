/*

Given a string, output its longest prefix which contains only digits.

Example

For inputString = "123aa1", the output should be
longestDigitsPrefix(inputString) = "123".

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

Guaranteed constraints:
3 ≤ inputString.length ≤ 100.

[output] string

*/

function longestDigitsPrefix(s) {
    s = s.split(""); 
      
        var f=""; 
        var con=true; 
        var i=0;
        
        while(con){
            if(isNaN(s[i]) || s[i]===" "){return f}else {
               f+=s[i]; i++; if(i>s.length){con=false;}
            }
        }
        return f;
    }