/// 1st function 
//         var | val
//         ----------
//        a()  | returns 35 only evrytime its called
// console.log |  the return value which is 35

function a(){
    return 35;
}
console.log(a()) // out put will be 35 in the console.log()


/// 2nd function 
//         var | val
//         ----------
//        a()  | sum of 4 + 4 because your add it to results of each function
//             | to each other and it eqauls 8
//             |
//             |
//             |
//             |
//             |
//             |
//             |

function a(){
    return 4; 
}
console.log(a()+a());//goin to return the sum of 4 + 4



//         var | val
//         ----------
//     return b| what ever you pas in to be b 
//        log  | add the two functions one with 2 the other four so the result 6
//             |
//             |
//             |
//             |
//             |
//             |
//             |




/// 3rd function

function a(b){  //function a you pass in b 
    return b; //  return b 
}

console.log(a(2)+a(4));// console log the the result value of adding the two functions together 



//         var | val
//         ----------
//function a(b)| passing in whatever you set b to be 
//        log  | b wihch in theis case is 3 because you passed 3 in 
//     return  | the value after mutiply b to 3 wich is  9
//             |
//             |
//             | 
//             |
//             |
//             |

// 4th function 
function a(b){
    console.log(b);
    return b*3;
}

console.log(a(3));

//            var | val
//           ----------
//  function(a(b))| function a pass in a 
//    return      | b the var passed in mutiply it by 4 
//     log (b)    | nothing because its after the return statement 
//     log(a(10)) | 
//                |
//                |
//                |
//                |
//                |


// 5th function

function a(b){ // function pass in a and b 
   return b*4; // return b * 4 
   console.log(b);// log b but it is 
//    nothing right now but if we put the console log above the return stament it would be 10 in side the other console log 
}
console.log(a(10));// uses 10 as 
//the b that gets passed in and console logs the result which in this case sense the log is after the return it wil print out 40

// 6th function 

//15th function  

//         var | val
//         ----------
//function a(b)| function a that is passing in b 
//  conditon   | checks if b is greter than 10
//   return    | 2
//  else       | only if the above condition isnt met in this function with 15 being passed in it is met 
//             | but in the off chance that we pass somthing else it would return 4 
//             |
//             |
//             |
//             |



function a(b){// name function a and pass in b 
    if(b<10) { // condition that asks if b is greater than ten 
        return 2;// return 2
    }
    else     { // else conditional that basically does this every time the if conditional isnt met 
        return 4;// and what it does is return 4 
    }
    console.log(b);// and then we console.log b but like before it wont do anything because it is after the return statement 
    // but if it was before the reurn statement it log 15
}
console.log(a(15));// so this will log 2 becuase it passes 15 in place of the passable varible b and in our function we have a 
//conditional  statement that checks if b is greater than ten   




//            var | val
//           ----------
//function a(a,b) | function a gets a and b passed in "oh boy what a treat" 
//    return b*c  | we return the value of b * c "snapples things are happening now "
//    first log   | well it is only going to print the exact values 10 and 3 "things arnt happening but whatever i guess you have to try to be tricky" 
//    second log  | so finally 
//                |instead of being weird like the first log we actually pass 3 and 10 as the values to be worked with so the value that is logged is 30
//                |the reason why this actually did what the function was intended for was because we actually called the function
//                | "i guess im ok with wierd that makes things interesting"
//                |
//                |


// 7th function
function a(b,c){// function a and we pass in b and c 
    return b*c; // return the value of b* c 
}
console.log(10,3);// well again this is ten 
console.log( a(3,10) );// this is the good stuff we actualy pass 3 and 10 in the function 


//8th function 
function a(b){ // function a we pass in b "ok lets think of some more clever names really function a for the 5000 time you should be ashamed  "
    for(var i=0; i<10; i++){// so we make a for loop that starts at 0 and goes tille it is greater than 10 and we add to i to keep the array going 
        console.log(i)// i guess we log 1 -10  "really i am missing rick and morty for this jabvascript "
    }
    return i;// lets return i its 10 because thats the last var that the for loop goes through 
}
console.log(3);
console.log(4);



//9th function 
function a(){// names function (a) nothing passed in
    for(var i=0; i<10; i++){// loops until i is 10
        i = i +2; // add 2 to i 
        console.log(i);// 2,5,8,11
    }
}
a();


//10th function 
function a(b,c){ // names function a "what a surprise" passes in b and c  in the function
    for(var i=b; i<c; i++) {// i = b whatever is passed in as b will go until i <c and will iterte up 1 every ime 
       console.log(i);// will console log the val of i 
   }
   return b*c; //will return the val of b * c
}
a(0,10);// call function a and pass in 0 10
console.log(a(0,10));// will log the value that function returns 


//11th function 
function a(){// name function a 
    for(var i=0; i<10; i++){
    // loop until the end of i which is 10
       for(var j=0; j<10; j++){//loop until the cindition of j is met
           console.log(j);// log j 
       }
       console.log(i);// lool iterations
    }
}



//12th function 
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);// will log every val of j and i 
        }
        console.log(j,i);// same thing but different order 
    }
}
var z = 10; // apprently z == 10




//13th function 
function a(){ // name function a
    var z = 15; // make z 15  z 
    console.log(z);// log 15 
}
console.log(z);// still log 15
var z = 10; // assaign z to 10


//14th function 
function a(){// name function a 
    var z = 15;// aasaign z to 15 
    console.log(z);// log 15
}
a();
console.log(z);// console log z
var z = 10;// assaign 0 to z


//15th function  

//         var | val
//         ----------
//             |
//             |
//             |
//             |
//             |
//             |
//             |
//             |
//             |


function a(){ // name function a 
    var z = 15;// assaign z to 15
    console.log(z);// log z 
    return z;// return z 
}
z = a();// z eqauls function call
console.log(z);// console the results 


//            var | val
//           ----------
//                |
//                |
//                |
//                |
//                |
//                |
//                |
//                |
//                |


