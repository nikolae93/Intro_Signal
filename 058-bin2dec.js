/*

You are taking part in an Escape Room challenge designed specifically for programmers. In your efforts to find a clue,
 you've found a binary code written on the wall behind a vase, and realized that it must be an encrypted message.
  After some thought, your first guess is that each consecutive 8 bits of the code stand for the character with
   the corresponding extended ASCII code.

Assuming that your hunch is correct, decode the message.

Example

For code = "010010000110010101101100011011000110111100100001", the output should be
messageFromBinaryCode(code) = "Hello!".

The first 8 characters of the code are 01001000, which is 72 in the binary numeral system. 72 stands for H in
 the ASCII-table, so the first letter is H.
Other letters can be obtained in the same manner.

Input/Output

[execution time limit] 4 seconds (js)

[input] string code

A string, the encrypted message consisting of characters '0' and '1'.

Guaranteed constraints:
0 < code.length < 800.

[output] string

The decrypted message.

*/

function bin2dec(num){
    return num.split('').reverse().reduce(function(x, y, i){
      return (y === '1') ? x + Math.pow(2, i) : x;
    }, 0);
  }


function messageFromBinaryCode(c) {

    var count=0;
    var t="";
    var nz=[];
    
    for(var i=0;i<c.length;i++){
        
        if(count !== 8){
            t+=c[i]; 
            count++;
        }else{
            nz.push(t);
            t='';
            t+=c[i]; 
            count=1;
        }
        
      if(i===c.length-1){nz.push(t);}  
        
    }

    var nz2=[];
    
    for(var j=0;j<nz.length;j++){
        
        nz2.push(bin2dec(nz[j]));
        
    }
    
    var s; 
    t="";
    
    for(var x=0;x<nz2.length;x++){
        
        s=String.fromCharCode(nz2[x]);
        t+=s;
        
    }
    
    return t;
}