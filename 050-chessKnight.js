/*

Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically
 and one square horizontally away from it. The complete move therefore looks like the letter L. 
 Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

 Input/Output

[execution time limit] 4 seconds (js)

[input] string cell

String consisting of 2 letters - coordinates of the knight on an 8 × 8 chessboard in chess notation.

Guaranteed constraints:
cell.length = 2,
'a' ≤ cell[0] ≤ 'h',
1 ≤ cell[1] ≤ 8.

[output] integer
*/

function chessKnight(cell) {
    cell=cell.split("");
    var vertik= parseInt(cell[1]);
    var hor = cell[0];
    switch(hor){
        case "a": hor=1; break;
        case "b": hor=2; break;  
        case "c": hor=3; break;
        case "d": hor=4; break;        
        case "e": hor=5; break;  
        case "f": hor=6; break;
        case "g": hor=7; break;
        case "h": hor=8; break;
           } 
   var potezi = 0 ;
   
    if( hor+2<=8 && vertik+1<=8 ){potezi++}
    if( hor+2<=8 && vertik-1>=1 ){potezi++}
    
    if( hor+1<=8 && vertik+2<=8 ){potezi++}
    if( hor-1>=1 && vertik+2<=8 ){potezi++}
    
    if( hor-2>=1 && vertik+1<=8 ){potezi++}
    if( hor-2>=1 && vertik-1>=1 ){potezi++}
    
    if( hor+1<=8 && vertik-2>=1 ){potezi++}
    if( hor-1>=1 && vertik-2>=1 ){potezi++}
 
 return potezi;
 
}