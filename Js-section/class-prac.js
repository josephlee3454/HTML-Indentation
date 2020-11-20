/* 
  Array: Min to Front
  Given an array of comparable values, move the lowest 
  element to array’s front, shifting backward any elements 
  previously ahead of it. Do not otherwise change the array’s 
  order. Given [4,2,1,3,5] , change it to [1,4,2,3,5] and 
  return min. As always, do this without using built-in functions.
*/

// name a function that will find low val and put it to the front and return the min val
//create for loop ** 
// make a if conditional that checks for the min val 
// assign a min val that starts at arr[0]
// so ove a the val to front 
// use another for loop that will shift 

function minToFront(arr) {
    let min = arr[0]
    for (let i = 0 ; i<arr.length; i++){

        if(arr[i]<min){
            min = arr[i];         
        }

    }

 
}

console.log(minToFront([4, 2, 1, 3, 5])); 











/* 
  Array: Remove At
  Given array and an index, remove and return the array value at 
  that index. Do this without using built-in array methods except pop().
*/




/* BONUS CHALLENGE

flatten2DArray
  Input:
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
  Output:
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/




// function minToFront(arr) {
//     var min = arr[0]
//     var temp = arr[0]
//     for (var i = 0 ; i<arr.length; i++){
// //         console.log(i)
//         if(arr[i]<min){

//             min = arr[i];
// //             console.log(min)
          
//         }
//     } 
// //     min = 1
// //     temp = 1 -> 2 -> 1
// //     [4,2, 1, 3, 5] -> [1, 2, 1, 3, 5]
  
//     for (var j = 0; j < arr.length; j++){
//       console.log(i)
//       if (j == arr.length){
//       temp = arr[j+1];
//       }
//       if(j == 0){
//         arr[j] = min;
//         console.log(arr[j])
//       };
//       if(j > 0 && j!=null){
//         arr[j] = temp;
//         temp = arr[j+1];
//         console.log(arr[j])
//       };
//     }
//       console.log(min)
//       console.log(temp)
//       return arr
// }

// console.log(minToFront([4,2, 1, 3, 5])); 
