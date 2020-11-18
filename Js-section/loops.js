// Print odds 1-20
// Print out all odd numbers from 1 to 20
// The expected output will be 1, 3, 5, 7, 9, 11, 13, 15, 17, 19


function odd(){ //// function with a for loop 
  num = 0
  for (i=0;i<20;i++) {
    num = num+1;
    if (num%2)
      console.log(num)
  }
};
odd()


function odd(){ //// function with a while loop 
    num = 0
    while (num<20) {
        num = num+1;
    if (num%2)
        console.log(num)
}
};
odd()



//   Sum and Print 1-5
//   Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way
//   The expected output will be: Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15

function add(){ //done with for loop 
    num = 0;
    for(i=0;i<6;i++){
      num = num + i
      console.log(num)
    }
  };
  add()
  
function add(){ //done with while loop
    counter = 0;
    num = 0;
    while(counter<5){
        counter = counter +1
        num = num + counter
        console.log(num)
    }
  };
  add()
  
