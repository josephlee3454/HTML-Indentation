// Biggie Size - Given an array, write a function that changes 
// all positive numbers in the array to the string "big".  Example: 
// makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function  biggie(arr){
    for (let i = 0; i<arr.length; i++){
        if (arr[i]>0){
            arr[i] = "big"
        }
    }    
    console.log(arr)
}
arr = [ 1,-4,7,-8,9]
biggie(arr)


// Print Low, Return High - Create a function that takes in an array of numbers.  
// The function should
//  print the lowest value in the array, and return the highest value in the array.
function highlow(arr){
    high = 0
    low = 0
    for (let i = 0; i<arr.length; i++)
    {
        if (arr[i] < low || low == 0){
            low = arr[i]
        }
        if (arr[i]>high){
            high = arr[i]
        }
    }
    
    console.log(high , low)
    return high , low
}
arr=[4,6,10,3,6,4,6,13]
highlow(arr)



// Print One, Return Another - Build a function that takes in an 
// array of numbers.  The function should print the second-to-last value in 
// the array, and return the first odd value in the array.

function odd(arr){
    evenArr = []
    oddArr = []
    secondlast = arr[arr.length - 2]
    for (let i = 0; i<arr.length; i++){
       if (i%2){
          evenArr.push(arr[i])
       } 
       else{
          oddArr.push(arr[i])
       }
       
    }
//     return newArr[0]

    console.log(oddArr[0])
    return oddArr[0]
}
arr = [3,4,9,6,2,4,6,1]
odd(arr)



// Double Vision - Given an array (similar to saying 'takes in an array'), 
// create a function that returns a new array where each 
// value in the original array has been doubled.  
// Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function double(arr){
    for (let i =0; i < arr.length; i++){
        arr[i] = arr[i]*2
        console.log(arr[i])
    }
    console.log(arr)
    return arr
}
arr = [1,2,3]
double(arr)

// Count Positives - Given an array of numbers, create a function
//  to replace the last value with the number of positive values 
//  found in the array.  Example,
//  countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
function countPositives(arr){
    sum = 0
    for (let i = 0; i<arr.length; i++)
       {
           if (i>0){
               sum = sum + arr[i]
               console.log(sum)
           }
       }   
   arr[arr.length-1] = sum
   console.log(arr)
   return arr
}
arr = [-1,1,1,1]
countPositives(arr)


//  Evens and Odds - Create a function that accepts an array. 
//  Every time that array has three odd values in a row, print . "This is odd!"
//  Every time the array has three evens in a row, print "Even more so!".

function evenodd(arr){
    odds = 0 
    evens = 0 
    for (let i = 0; i <arr.length; i ++)
        if (arr[i]%2 == 1){
            odds ++
        }
}








// Increment the Seconds - Given an array of numbers arr, 
// add 1 to every other element, specifically those whose 
// index is odd (arr[1], arr[3], arr[5], etc). 
//  Afterward, console.log each array value and return arr.

function increment(arr){

    for (let i = 0; i <arr.length; i++)
    {
        if (arr[i]%2){
            arr[i] = arr[i] + 1
        }
     
    }
     console.log(arr)
    return arr
}
arr = [1,2,3,4,5,6]
increment(arr)







// Previous Lengths - You are passed an array (similar to saying 'takes in an array' 
// or 'given an array') containing strings.  Working within that 
// same array, replace each string with a number - the length of the 
// string at the previous array index - 
// and return the array.  For example, 
// previousLengths(["hello", "dojo", "awesome"]) 
// should return ["hello", 5, 4]. Hint: Can for loops only go forward?
function prevlengths(arr){
    for (let i = 1 ; i<arr.length; i++)
    {
       arr[i] =  arr[i-1].length
       console.log(arr)
    }
    console.log(arr)
    return arr
}
arr = ["hello", "dojo", "awesome"]
prevlengths(arr)











// Add Seven - Build a function that accepts an array. 
// Return a new array with all the values of the original, 
// but add 7 to each. Do not alter the original array.  
// Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function seven(arr){
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i]+7 
    }
    console.log(arr)
    return arr
}
arr = [1,2,3]
seven(arr)




// Reverse Array - Given an array, write a function that reverses its values,
//  in-place.  Example: reverse([3,1,6,4,2]) returns the same array,
//   but now contains values reversed like so... [2,4,6,1,3].  Do this without  
// creating an empty temporary array.  (Hint: you'll need to swap values).


function reverse(arr){
    arrswap = arr.length-1
    for (let i = 0 ; i<length; i++){
      arr[i] = arrswap
      arrswap = arr[i]
      arrswap = arrswap + 1
      console.log(arr)
    }
    console.log(arr)
    return arr
}
arr = [1,2,3,4,5,6]
reverse(arr)


// Outlook: Negative - Given an array, create and return a new one 
// containing all the values of the original array, but make them all 
// negative (not simply multiplied by -1). 
// Given [1,-3,5], return [-1,-3,-5].
function negative(arr){
    for (let i = 0 ;i<arr.length;i++ ){
        if (arr[i]>0){
        x = arr[i]
        arr[i] = (-x)
        }
  
    }
    console.log(arr)
    return arr
}
arr = [1,-3,5]
negative(arr)


// Always Hungry - Create a function that accepts an array, 
// and prints "yummy" each time one of the values is 
// equal to "food".  If no array values are "food", then print "I'm hungry" once.

function hungry(arr){
    for (let i = 0; i < arr.length; i++)
    {
        if (i == "food"){
            console.log("yummy")
        }
        else{
            
        }
    }

}



// Swap Toward the Center - Given an array, swap the first and last values,
//  third and third-to-last values, etc.  
//  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) 
//  turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) 
// turns the array into [6,2,4,3,5,1].  No need to return the array this time.
function center_swap(arr){
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    [arr[2], arr[arr.length - 3]] = [arr[arr.length - 3], arr[2]];
    console.log(arr)
    return arr
}

arr=[6,2,4,3,5,1]
center_swap(arr)





// Scale the Array - Given an array arr and a number num, multiply all values in 
// the array arr by the number num, and return the changed array arr.  
// For example, scaleArray([1,2,3], 3) should return [3,6,9].

function num_arr_mutiply(arr,num){
    for (let i =0; i<arr.length; i ++){
        x = (arr[i] * num)
        arr[i] = x
        // console.log(arr)
    }
    console.log(arr)
    return arr
}
num  = 2
arr = [2,3,4,5]
num_arr_mutiply(arr,num)