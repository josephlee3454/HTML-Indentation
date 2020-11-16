for(var num = 0; num < 15; num++){
    console.log(num);
}


///                        Varibles    |    Values
///                        ___________________________
///                in for loop var     |  starts at 0 and iterates 1 every iteration as long as the num is less than 15
///                console.log(num);   | in the console print (1,2,3,4,5,6,7,8,9,10,11,12,13,14) will stop at 14 since 14 is less than 15
///                                    |
///                                    |
///                                    |
///                                    |
///                                    | 



for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}
///                        Varibles    |    Values
///                        ___________________________
///             in for loop i = 1      | i starts at 1 and will iterate 2 every iteration as long as i is less than 10
//              if the remainder of i  | 
///                has a value of 0    |        then it will run the console log
///                 1st iteration      |     "i = 3"
///                  2nd iteration     |    has a remainder so it wont print the value 5 in the console
///                  3rd iteration     |    has a remainder so it wont print the value 7 in the console
///                  4th iteration     |   "i = 9"
///                                    | 



for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}

///                        Varibles    |    Values
///                        ___________________________
//          j = 1 and as long as j is  |  it will iterate up 1
///               <= to 10             | 
///          if conditional            | if the remainder of j by %2 is 0 then you will  add 2 to j 
///         else if conditional        | if the remainder of j by %3  is 0 then you will iterate j up by 1   
///                         console log|  (j) = (4,5,7,10,11,12,13,16)
///                                    |
///                                    | 


