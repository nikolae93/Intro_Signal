/*

Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
Input/Output

[execution time limit] 4 seconds (js)

[input] array.string picture

A non-empty array of non-empty equal-length strings.

Guaranteed constraints:
1 ≤ picture.length ≤ 100,
1 ≤ picture[i].length ≤ 100.

[output] array.string

The same matrix of characters, framed with a border of asterisks of width 1.

*/

function addBorder(niz) {
    var broj = niz[0].length;
    broj +=2 ;

    for(var i=0;i<niz.length; i++){
        niz[i]="*"+niz[i]+"*" ;
    }

    var zvezde = "";

    for(var j=0;j<broj;j++){
        zvezde = zvezde+"*"
    }
    
    niz.push(zvezde);
    niz.unshift(zvezde);
    
    return niz ;
}