// Print Values and Sum

// Print each array value and the sum so far
// The expected output will be: 
//var testArr = [6,3,5,1,2,4]


var arr = [6,3,5,1,2,4]
function add(){
    sum=0
    for (i=0;i<arr.length; i++){
        sum = sum + arr[i]
        console.log("Num "+arr[i],"Sum " + sum)
} 
}
add()

// Value * Position

// Multiply each value in the array by its array position
// The expected output will be:


function mutiply(){ 
    for (i=0;i<arr.length; i++){ 
        multnum = i * arr[i]
        console.log(multnum)
    }
}
mutiply()