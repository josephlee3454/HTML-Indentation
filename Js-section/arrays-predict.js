var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}

///                        Varibles    |    Values
///                        ___________________________
///                       arr          |  the array = [8,6,7,5,3,0,9]
/// i starts off at 0 and then iterates| 
/// up by 1 as long as i is less       | i will iterate till 7
///      than the lenght of the array  |
///                                    |
///          console.log(arr[i])       | 8,6,7,5,3,0,9
///                                    | 




var arr = [7,3,8,4,2,0,1];
    for(var i = 0; i < arr.length; i++){ 
        if(arr[i] % 2 == 0){
            console.log(arr[i]);
        } 
        else{
            console.log("That is odd!");
        }
    }



///                        Varibles    |    Values
///                        ___________________________
///                             arr    |  7,3,8,4,2,0,1
///                                    | 
/// i starts off at 0 and then iterates|
///  /// up by 1 as long as i is less  |
///     than the lenght of the array   |i will iterate till 7
///                                    |
///            both console.log()      | odd,8,4,2,0,odd
                     // if conditional |  8,4,2,0 
                     // else           |   odd,odd
    


var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
    for(var i = 0; i< arr.length; i++){
        if(arr[i] < 0){
            newArr.push(arr[i]);
            arr[i] = arr[i] * -1;
        }
        else if(arr[i] == 0){
            arr[i] = "Zero";
        }
        else{
            arr[i] = arr[i] * -1;
        }
    }
console.log(arr);
console.log(newArr);


///                        Varibles    |    Values
///                        ___________________________
///                            arr     |  1,3,8,-5,0,-2,4,-1
///                            newArr  |  []
/// i starts off at 0 and then iterates|
///   up by 1 as long as i is less     |i will iterate till 8
///     than the lenght of the array   |
///                                    |
///         if arr at index[i] < 0     | push arr[i] in the newArr 
///                       arr[i]       | arr[i] *-1
///    else if arr at index [i] == 0   |  arr[i] = "zero"     
///                           else     |  arr[i] = arr[i] *-1
////                                   |
///                                    |
////              1st    console.log() | -1,-3,-8,5,"zero",2,-4,1 changes the positives into negatives and turns negative into positive
////              2nd    console.log() | -5,-2,-1 returns all negative numbers