// Given an arr and a separator, output a string of 
// every item in the array separated by the separator.
// The separator should only be between two elements.

a
//function tht passes in a a arr and a seperator var
//for loop to go through each index of the array 
//assign a string var 
// store or "add" each strign off of the index and add the seperator 
// loop in reverse and put items every other in their places 
// 

function arr_string(arr, seperator){
    temp = ""
    for (let i=0;i<arr.length;i++){
        temp += arr[i] + seperator
        }
    console.log(temp)
}
seperator = "*"
arr = [1 ,2, 3, 4, 5] 
arr_string(arr,seperator)


/* 
Array: Second-Largest
Return the second-largest element of an array. 
Given [42,1,4,Math.PI,7] , return 7 . If the array 
is too short, return null.
*/

