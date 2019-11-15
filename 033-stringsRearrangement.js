/*

Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in
 such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible,
  and false if not.

Note: You're only rearranging the order of the strings, not the order of the letters within the strings!

Example

For inputArray = ["aba", "bbb", "bab"], the output should be
stringsRearrangement(inputArray) = false.

There are 6 possible arrangements for these strings:

["aba", "bbb", "bab"]
["aba", "bab", "bbb"]
["bbb", "aba", "bab"]
["bbb", "bab", "aba"]
["bab", "bbb", "aba"]
["bab", "aba", "bbb"]
None of these satisfy the condition of consecutive strings differing by 1 character, so the answer is false.

For inputArray = ["ab", "bb", "aa"], the output should be
stringsRearrangement(inputArray) = true.

It's possible to arrange these strings in a way that
 each consecutive pair of strings differ by 1 character (eg: "aa", "ab", "bb" or "bb", "ab", "aa"), so return true.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string inputArray

A non-empty array of strings of lowercase letters.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 15.

[output] boolean

Return true if the strings can be reordered in such a way that each neighbouring pair of strings differ
 by exactly one character (false otherwise).

*/

function perm(xs) {
    let ret = [];
  
    for (let i = 0; i < xs.length; i = i + 1) {
      let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));
  
      if(!rest.length) {
        ret.push([xs[i]])
      } else {
        for(let j = 0; j < rest.length; j = j + 1) {
          ret.push([xs[i]].concat(rest[j]))
        }
      }
    }
    return ret;
  }
  
  function howMany (a,b){
    
       var sum=0;
    
    for(var g=0;g<a.length;g++){
      if(a[g]!==b[g]){sum++}
    }
    
    return sum;
    
  }
  
  //Main
  
  function stringsRearrangement(inputArray) {
            let comb = perm(inputArray);
      
    for(var i =0;i<comb.length;i++){
      
      for(var j=0;j<=comb[i].length-1;j++){
     if(j===comb[i].length-1){return true;}
      
        if(howMany(comb[i][j],comb[i][j+1]) !== 1){break;}
      }
    }
    return false;
  }