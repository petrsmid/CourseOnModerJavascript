function Cat(name) {
    this.name = name;
}

function Dog(name) {
    this.name = name;
}

var introduceYourself = function() {
    console.log("Hi, I am "+this.name);
};


var cat = new Cat("Buttercup");
var dog = new Dog("Goofy");

var introduceFuncBoundToCat = introduceYourself.bind(cat);
var introduceFuncBoundToDog = introduceYourself.bind(dog);
introduceFuncBoundToCat();
introduceFuncBoundToDog();

//////////////////
// Borrow function of one object and call on another:

function Cat(name) {
    this.name = name;
    this.introduceYourself = function() {
        console.log("Hi, I am "+this.name+", Miaoooow!");
    };
}

function Dog(name) {
    this.name = name;
}


var cat = new Cat("Buttercup");
var dog = new Dog("Goofy");

//bind
var introduceFuncBoundToDog = cat.introduceYourself.bind(dog);
introduceFuncBoundToDog();

//call, apply is the same but uses array for parameters
cat.introduceYourself.call(dog);


//EXERCISE:
// Create two objects with a few properties.
// Create function which uses "this" and print all property names. Hint: use Object.keys().
// Call this function on both objects.
