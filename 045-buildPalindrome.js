/*

Given a string, find the shortest possible string which can be achieved by adding characters to the end
 of initial string to make it a palindrome.

Example

For st = "abcdc", the output should be
buildPalindrome(st) = "abcdcba".

Input/Output

[execution time limit] 4 seconds (js)

[input] string st

A string consisting of lowercase English letters.

Guaranteed constraints:
3 ≤ st.length ≤ 10.

[output] string

*/

function isPali(str){
   var l=0; 
   var r = str.length-1;
   
   while(l<=r){
     if(str[l]!==str[r]){return false;}else{l++;r--;} 
   }
   return true;
   
  }
  
  function buildPalindrome(st) {
  
   var dod="";
   
   var l=0;
   let r=st.length-1;
   var motaj=true;  
  
   var temp=st;   var i=0;
   
   while(motaj){
    
    if(isPali(temp)){return temp}else{
     
          dod =st[i]+dod;
          temp=st+dod;
     
    }
    i++;
    if(i>15){return temp}
   }

  }
  