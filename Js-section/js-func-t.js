function greeting(){
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(word);


///                        Varibles    |    Values
///                        ___________________________
///                     greeting()     |  return value is "Hello"
///                     console.log()  |  "World"
///                       word         |   greeting()
///                      console.log   | word = greeting()
///                                    |
///                                    |
///                                    | 


function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);


///                        Varibles    |    Values
///                        ___________________________
///                       result1      | console.log("Summing Numbers!")
///                                    | console.log("num1 is:"+3 ) "num1 is: 3"
///                                    | console.log("num1 is:"+5 ) "num2 is: 5"
///                           var sum  | 3 + 5 
///                           return   |  8
///                                    |
///                       result2      | console.log("Summing Numbers!")
///                                    | console.log("num1 is:"+4) "num1 is: 4"
///                                    | console.log("num1 is:"+7 ) "num2 is: 7"
///                           var sum  | 4 + 7 
///                           return   |  11
///                     console.log()  | 8 
///                     console.log()  | 11



function highFive(num){
    for(var i=0; i<num; i++){
        if(i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
}



///                        Varibles    |    Values
///                        ___________________________
///   as long is i is less than num    |  iterate up by 1
///                if i == 5           | console.log("High Five!") as as i eqauls 5 it will log "High Five!"
///                  else              | console.log(i) if i isnt = to 5 log i 
///                                    |
