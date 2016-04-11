//Scope:
//1)
//Q: Does this work? What would fail? What happens?

function counterLoop() {

    console.log('counter before declaration = ' + i);   //WOW?!

    for (var i = 0; i < 3 ; i++) {
        console.log('counter = ' + i);
    }

    console.log('counter after loop = ' + i);    //WOW?!
}

counterLoop();


//EXERCISE: Rewrite to EC6. Use "let" instead of "var"

//2)
//Q: What does the following code do?

(function () {
    var foo = function () { return 2; };
    console.log(foo() === 2);
})();






//Solution in ES6:
{  //Block scope is enough
    var foo = function () { return 2; };
    console.log(foo() === 2);
}




//3)

//ECMAScript 6 Function Definition with arrow function:

let myFunction = (param1, param2) => {
    //do something
};

//Q: Why it does not work?
//ECMAScript 5:
var oddNumberFinder = {
    numbers: [1, 2, 3, 4],
    oddNumbers : [],
    findOddNumbers : function() {
        this.numbers.forEach(function(number) {
            if (number % 2 === 0) {
                this.oddNumbers.push(number);
            }
        });
    }
};

oddNumberFinder.findOddNumbers();
console.log(oddNumberFinder.oddNumbers);

//EXERCISE: try to fix it



//ECMAScript 6:
let oddNumberFinder2 = {
    numbers: [1, 2, 3, 4],
    oddNumbers : [],
    findOddNumbers : function() {
        this.numbers.forEach((number) => {
            if (number % 2 === 0) {
                this.oddNumbers.push(number);
            }
        });
    }
};
oddNumberFinder2.findOddNumbers();
console.log(oddNumberFinder2.oddNumbers);
