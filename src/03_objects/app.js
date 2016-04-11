//ASSIGNMENT: Follow me:


var emptyObject = {}; //check prototype in debuger - there is a method hasOwnProperty()

console.dir(emptyObject.hasOwnProperty("myProperty")); //see the "dir" in console

/*
var myObject = {  //Object is a map
    property1 : "something",
    property2 : "something else"
};

//we can add property to an existing object:
myObject.property3 = "third property";
myObject["property4"] = "fourth property";

console.log(myObject.hasOwnProperty("property1"));

//constructor function
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.name = function() {
        return this.firstName + " " + this.lastName;
    }
}

var pallavi = new Person("Pallavi", "Chinchkhede");
var petr = new Person("Petr", "Smid");


//add new function to a prototype
Person.prototype.introduceMyself = function() {
    return "Hello, my name is "+this.firstName + " " + this.lastName;
};

console.log(pallavi.name());
console.log(petr.name());

//redefine prototype of Object, Array, ... - NEVER DO THAT!!! Useful for polyfils - e.g. in IE8 there is no hasOwnProperty => polyfill: https://gist.github.com/jonfalcon/4715325
Object.prototype.hasOwnProperty = function(propName) {
    return false;
};

console.log(myObject.hasOwnProperty("property1"));

//preferred way over "new" - we don't want to write Person.prototype.myFunction = ...
var personPrototype = {

};



*/

