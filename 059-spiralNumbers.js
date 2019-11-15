/*

Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order,
 starting from top-left and in clockwise direction.

Example

For n = 3, the output should be

spiralNumbers(n) = [[1, 2, 3],
                    [8, 9, 4],
                    [7, 6, 5]]
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Matrix size, a positive integer.

Guaranteed constraints:
3 ≤ n ≤ 100.

[output] array.array.integer

*/

function spiralNumbers(n) {
    
    let f =[];
    
    for (let i = 0; i < n; i++) {
        f.push([]);
    }
    
    var x=1;
    var y=0;
    
    for (n;n>0;n-=2){
        
        for (let a=0; a<n; a++) {
            f[y][a+y]=x++;}
        
        for (let b=y+1; b<n+y; b++) {
            f[b][n-1+y]=x++;}
        
        for (let c=n-2+y; c>=y; c--) {
            f[n-1+y][c]=x++;}
        
        for (let d=n-2+y; d>y; d--) {
            f[d][y]=x++;}
        
        y++;
    }
    
    return f;
}