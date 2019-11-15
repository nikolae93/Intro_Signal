/*

Some people are standing in a row in a park. There are trees between them which cannot be moved.
 Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
  People can be very tall!

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in
 the ith position.

Guaranteed constraints:
1 ≤ a.length ≤ 1000,
-1 ≤ a[i] ≤ 1000.

[output] array.integer

Sorted array a with all the trees untouched.

*/

function sortByHeight(niz) {
    var  niz2 = niz ;
 niz2 = niz2.filter(function(x){if (x>-1){return x}});
 niz2.sort(function(a,b){ return a-b;});
  
     var indeksi =0 ;
     for(var i=0;i<niz.length;i++){
         if(niz[i] != -1){
             niz[i] = niz2[indeksi];
             indeksi += 1 ;
         }
     }
  
   return niz ;
}
