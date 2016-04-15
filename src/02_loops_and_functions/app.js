/*var factorial = function(n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};

console.log(factorial(5));



*/
var sumNumbersWithEach = function(arrayOfNumbers) {
    var sum = 0;
    arrayOfNumbers.forEach(function(o, idx) {
        sum += o;
    });
    return sum;
};

console.log(sumNumbersWithEach([1,2,3,4,5]));




/*
//function is variable as well
var myFunction = sumNumbersWithEach;

console.log(myFunction([1,2,3,4,5]));

*/


//EXERCISE 1: Write a function with one argument: array of strings, concatenate the array and return it.

//EXERCISE 2: Make the function more generic: accept additional parameter - a function which does the the operation - e.g. concatenation, multiplication etc.

