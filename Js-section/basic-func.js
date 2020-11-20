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
//             |
//             |
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
console.log(a()+a());



/// 3rd function

function a(b){
    return b;
}

console.log(a(2)+a(4));

// 4th function 
function a(b){
    console.log(b);
    return b*3;
}




// 5th function
console.log(a(3));
function a(b){
   return b*4;
   console.log(b);
}



// 6th function 
console.log(a(10));
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

// 7th function
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );


//8th function 
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);



//9th function 
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();


//10th function 
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));


//11th function 
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}



//12th function 
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
var z = 10;




//13th function 
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
var z = 10;


//14th function 
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
var z = 10;


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


function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);


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


