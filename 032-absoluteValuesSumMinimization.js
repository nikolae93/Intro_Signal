/*

Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a.
 In other words, find the element x in a, which minimizes the following sum:

abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
(where abs denotes the absolute value)

If there are several possible answers, output the smallest one.

Example

For a = [2, 4, 7], the output should be absoluteValuesSumMinimization(a) = 4.

for x = 2, the value will be abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7.
for x = 4, the value will be abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5.
for x = 7, the value will be abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8.
The lowest possible value is when x = 4, so the answer is 4.

For a = [2, 3], the output should be absoluteValuesSumMinimization(a) = 2.

for x = 2, the value will be abs(2 - 2) + abs(3 - 2) = 1.
for x = 3, the value will be abs(2 - 3) + abs(3 - 3) = 1.
Because there is a tie, the smallest x between x = 2 and x = 3 is the answer.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

A non-empty array of integers, sorted in ascending order.

Guaranteed constraints:
1 ≤ a.length ≤ 1000,
-106 ≤ a[i] ≤ 106.

[output] integer

An integer representing the element from a that minimizes the sum of its absolute differences with all other elements.

*/

function absoluteValuesSumMinimization(a) {
    let min =Infinity;
    var suma=0; 
    var brojac=-1;
    
    for(let i=0;i<a.length;i++){
       
          for(var j=0;j<a.length;j++){
               suma = suma + Math.abs(a[i]-a[j]);   
          }
          if(suma<min){min = suma; brojac=a[i]}
          suma=0;
    }
    
    return brojac;
    
}