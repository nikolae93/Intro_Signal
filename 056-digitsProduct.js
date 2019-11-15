/*

Given an integer product, find the smallest positive (i.e. greater than 0) integer the product 
of whose digits is equal to product. If there is no such integer, return -1 instead.

Example

For product = 12, the output should be
digitsProduct(product) = 26;
For product = 19, the output should be
digitsProduct(product) = -1.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer product

Guaranteed constraints:
0 ≤ product ≤ 600.

[output] integer

*/

function digitsProduct(p) {

  if(p<10){ if(p>0){return p}else{return 10}  }
    
  var temp="";

  for(var i=9;i>1;i--){
      while(p%i===0){p=p/i;
         temp=String.fromCharCode('0'.charCodeAt() + i)  + temp;           
    }
  }
  if(p)
  return p != 1 ? -1 : parseInt(temp);
  
    
}