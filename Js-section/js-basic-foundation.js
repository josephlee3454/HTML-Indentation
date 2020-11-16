// function 1   Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
arr = []
function counter(){ //named function counter
  num = 0 // start num out at 0 that is our counter 
  for (var i=0;i<=255;i++) // iterate up 1 until i is <=  255
  {
    num = num +1 // this is our "counter" varible we will add one 
    arr.push(num) // here we push num at the end of the arr
  }
  console.log(arr) // log the updateted arr to test the function on the surface
  return arr // return the updated array 
}
counter()

//  function 2 Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  
// You may use a modulus operator for this exercise.

function even(){ // named function even
    num =0 // num starts off at 0 
    sum = 0 // sum starts off at 0
    for (var i=0;i<1000;i++){ // iterate i up 1 until 1000
        num = num + 1 // count 1 to num 
        if (num % 2); // if num moudulos 2
            sum = sum + num //  add num to sum
    }
    console.log(num)
    console.log(sum)
    return sum // return sum 
}
even()


// function 3 Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function odd(){
    num =0
    sum = 0 
    for (var i=0;i<5000;i++){
      num = num + 1
      if (num % 2){
          console.log(num)
      }
      else{
        var sum = sum + num
      }
  
    }
    console.log(num)
    console.log(sum)
    return sum
  }
  odd()

// function 4  Iterate an array - Write a function that returns the sum of 
// all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function sumarr(arr)
{
    sum = 0
    for (let i=0;i<arr.length;i++){
        sum = sum + arr[i]

    }
    console.log(sum)
    return sum 
}
arr = [3,7,4,2,4]
sumarr(arr)



// function 5 Find max - Given an array with multiple values, write a function that returns the maximum 
// number in the array. (e.g. for [-3,3,5,7] max is 7)

function maxval(arr){
    comparer = 0
    for (let i=0;i<arr.length;i++){
      if (arr[i] > comparer){
        comparer = arr[i]
        }
          // console.log(comparer)
      }
    console.log(comparer)
    return comparer
  }
  arr = [2,5,6,8,4,2]
  maxval(arr)


// function 6  Find average - Given an array with multiple values, write a function that returns the average of the values 
// in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function average(arr){
    counted = 0
    sum = 0
    for (let i=0;i<arr.length;i++){
        counted = counted + i
        sum = sum + arr[i]
        
    }
    avg = sum/=counted
    console.log(avg)
    return avg
}
arr=[3,5,3,5,2]
average(arr)

// function 7
// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. 
// (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function odd(){
    arr = []
    for (let i=0;i<50;i++){
        if (i%2){
            arr.push(i)
        }
        // console.log(arr)        
    }
    console.log(arr)    
    return arr

}
odd()

// function 8
// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values 
// that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. 
// (There are two values in the array greater than 3, which are 5, 7).

function greater(arr){
    y = 5
    counted = 0
    for (let i=0;i<arr.length;i++){
      if (arr[i] > y){
          counted = counted +1
      }
    
      }
      console.log(counted)
      return counted
  }
  arr = [3,7,8,6,5,3,1]
  greater(arr)

// function 9 
//   Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared 
//   by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])


function sqaures(arr){
    newArr = []
    for (let i=0;i<arr.length;i++){
            sqaure = arr[i] * arr[i]
            newArr.push(sqaure)
        }
    console.log(newArr)
    return newArr
}
arr = [1,5,10,-2]
sqaures(arr)


// function 10 Negatives - Given an array with multiple values, write a function that replaces 
// any negative numbers within the array with the value of 0. 
//When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function negodd(arr){
    for (let i=0;i<arr.length;i++){
        if (arr[i] < 0){
            arr[i] = 0
        }
    }
    console.log(arr)
    return arr
}
arr = [1,5,10,-2]
negodd(arr)


// function 11 Swap Values - Write a function that will swap the first and last values of any given array. The default minimum
//  length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swap(arr){
    counted = -1 
    for (let i=0;i<arr.length;i++){
        counted = counted + 1
        temp = arr[0] 
    }
    arr[0] = arr[counted]
    arr[counted] = temp
    console.log(arr)
    return arr
}
arr= [1,5,10,-2]
swap(arr)



// function 12 Number to String - Write a function that takes an array of numbers and replaces any negative values within 
//the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function numstring(arr){
    for (let i=0;i<arr.length;i++){
        if (arr[i]<0){
            arr[i] = 'dojo'
        }

    }
    console.log(arr)
    return arr
}
arr = [-1,-3,2]
numstring(arr)