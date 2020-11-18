// Sigma - Implement function sigma(num) that, given a number,
// returns the sum of all positive integers up to the given number (inclusive). 
// Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).


function sigma(sigma_val)
{
    
    all_together = 0 
    num_maker = 0 
    for (let i = 0;i < sigma_val; i++){
        num_maker = num_maker + 1
        all_together = all_together + num_maker
        console.log(num_maker, all_together)
    }
    console.log(all_together)
    return all_together
}
sigma_val = 5
sigma(sigma_val)



// Factorial - Write a function factorial(num) that, given a number, returns the product
//  (multiplication) of all positive integers from 1 up to the given number (inclusive).  
// For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).





//Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence,
// each number is the sum of the previous two, starting with values 0 and 1.  Your function should 
// accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds 
// to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 
//(fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), 
//fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  
//If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

