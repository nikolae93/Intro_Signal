/*

Given the positions of a white bishop and a black pawn on the standard chess board, determine whether
 the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement.
 Check out the example below to see how it can move:

 Input/Output

[execution time limit] 4 seconds (js)

[input] string bishop

Coordinates of the white bishop in the chess notation.

Guaranteed constraints:
bishop.length = 2,
'a' ≤ bishop[0] ≤ 'h',
1 ≤ bishop[1] ≤ 8.

[input] string pawn

Coordinates of the black pawn in the same notation.

Guaranteed constraints:
pawn.length = 2,
'a' ≤ pawn[0] ≤ 'h',
1 ≤ pawn[1] ≤ 8.

[output] boolean

true if the bishop can capture the pawn, false otherwise.
*/

function bishopAndPawn(bishop, pawn) {
return Math.abs((bishop.charCodeAt(0) - 96) - (pawn.charCodeAt(0) - 96)) == (Math.abs(bishop.charAt(1) - pawn.charAt(1)));   
}