/*

Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

Example

For text = "Ready, steady, go!", the output should be
longestWord(text) = "steady".

Input/Output

[execution time limit] 4 seconds (js)

[input] string text

Guaranteed constraints:
4 ≤ text.length ≤ 50.

[output] string

The longest word from text. It's guaranteed that there is a unique output.

*/

function longestWord(text) {
    var niz =[];
    var slova = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var temp ="";

    for(var i=0;i<text.length;i++){
      if(slova.includes(text[i].toLowerCase())){temp+=text[i]}else{
        niz.push(temp); temp="";
      }
      if(i===text.length-1){niz.push(temp);}
    }
    var max="";
    
    for(var j=0;j<niz.length;j++){
      if(niz[j].length>max.length){max=niz[j]}
    }
    
    return max;
  }