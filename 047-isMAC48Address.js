/*

A media access control address (MAC address) is a unique identifier assigned to network interfaces for
 communications on the physical network segment.

The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal
 digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).

Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.

Example

For inputString = "00-1B-63-84-45-E6", the output should be
isMAC48Address(inputString) = true;
For inputString = "Z1-1B-63-84-45-E6", the output should be
isMAC48Address(inputString) = false;
For inputString = "not a MAC-48 address", the output should be
isMAC48Address(inputString) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

Guaranteed constraints:
15 ≤ inputString.length ≤ 20.

[output] boolean

true if inputString corresponds to MAC-48 address naming rules, false otherwise.

*/

function isMAC48Address(st) {
    var niz=st.split("");  var nums =["A","B","C","D","E","F"];
      var br=0;
      
      if(st.length !== 17){return false;}
      
      for(var i=0;i<niz.length;i++){
          
         if(br !== 2 ) {
      if(  !isNaN(parseInt(niz[i])) || nums.indexOf(niz[i]) !==-1  ){br++;}else{
          return false;
      }       
         } else{
             if(niz[i]==="-"){br=0;}else {return false;}
         }
          
      }
      
      return true;
  }