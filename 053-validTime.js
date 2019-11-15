/*

Check if the given string is a correct time representation of the 24-hour clock.

Example

For time = "13:58", the output should be
validTime(time) = true;
For time = "25:51", the output should be
validTime(time) = false;
For time = "02:76", the output should be
validTime(time) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] string time

A string representing time in HH:MM format. It is guaranteed that the first two characters, as well as the
 last two characters, are digits.

[output] boolean

true if the given representation is correct, false otherwise.

*/

function validTime(t) {
  
    if(t.length !== 5){return false;}
    let h = t.slice(0,2);
    if(parseInt(h)>=24 || parseInt(h)<0){return false;}
    let m = parseInt(t.slice(3));
    if(m<0 || m>59){return false;}
    
    return true;
  }