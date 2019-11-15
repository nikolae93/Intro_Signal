/*

Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral!
 You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.

The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way:
 Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that
  has its center at x, including x itself. All the pixels on the border of x are then removed.

Return the blurred image as an integer, with the fractions rounded down.

Example

For

image = [[1, 1, 1], 
         [1, 7, 1], 
         [1, 1, 1]]
the output should be boxBlur(image) = [[1]].

To get the value of the middle pixel in 
the input 3 × 3 square: (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1.
 The border pixels are cropped from the final result.

For

image = [[7, 4, 0, 1], 
         [5, 6, 2, 2], 
         [6, 10, 7, 8], 
         [1, 4, 2, 0]]
the output should be

boxBlur(image) = [[5, 4], 
                  [4, 4]]
There are four 3 × 3 squares in the input image, so there should be four integers in the blurred output. 
To get the first value: (7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5.
 The other three integers are obtained the same way, then the surrounding integers are cropped from the final result.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer image

An image, stored as a rectangular matrix of non-negative integers.

Guaranteed constraints:
3 ≤ image.length ≤ 100,
3 ≤ image[0].length ≤ 100,
0 ≤ image[i][j] ≤ 255.

[output] array.array.integer

A blurred image represented as integers, obtained through the process in the description.

*/

function boxBlur(img) {
    var res =[];   
    var el = 0;
  
           for (var i = 0 ; i < img.length; i++){
  
               for (var j=0 ; j<img[i].length;j++){
                if (i===0 || j===0 || i===img.length-1 || j===img[0].length-1 ){continue;}
                if ( img[i-1][j-1] ===undefined || img[i+1][j+1] ===undefined || img[i-1][j+1] ===undefined ||
                img[i+1][j-1] ===undefined ){continue;}
             
             else { el = img[i-1][j-1]+img[i-1][j]+img[i-1][j+1]+
                  img[i][j-1] +img[i][j]+img[i][j+1]+img[i+1][j-1]+img[i+1][j]+img[i+1][j+1];
                  el= el/9;   res.push(Math.trunc(el));
              }
  
               }
           }
          
          var fin ;    
          var br =0;     
          var puta = img.length-2;  
          var kol = img[0].length-2;
          
          fin =    res.reduce((resultArray, item, index) => { 
              const chunkIndex = Math.floor(index/kol)
            
              if(!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [] 
              }
            
              resultArray[chunkIndex].push(item)
            
              return resultArray
            }, [])
            
         return fin;  

      }
  