
//Inheritance and prototype chain
// we have only objects - no classes


var a = {
    a: 1
};
// a ---> Object.prototype ---> null
console.dir(a);

var b = {
    b:2
};
b.__proto__ = a;
// b ---> a ---> Object.prototype ---> null
console.dir(b);

var c = {
    c:3
};
c.__proto__ = b;
// c ---> b ---> a ---> Object.prototype ---> null
console.dir(c);

console.log("c.a: "+ c.a); //inherited
console.log("c.b: "+ c.b); //inherited
console.log("c.c: "+ c.c);


//using __proto__ is deprecated but supported across browsers. We should rather use prototype to build __proto__ or use Object.create.  Or better, use ES6

var x = {x: 1};
// x ---> Object.prototype ---> null
console.dir(x);

var y = Object.create(x);
y.y = 2;
// y ---> x ---> Object.prototype ---> null
console.dir(y);

var z = Object.create(y);
z.z = 3;
// z ---> y ---> x ---> Object.prototype ---> null
console.dir(z);

var o = Object.create(null);
// o ---> null
console.dir(o);
console.log(o.hasOwnProperty); // undefined, because o doesn't inherit from Object.prototype


var o1 = {};
// is equivalent to:
var o2 = Object.create(Object.prototype);


//EXERCISE: create type hierarchy of vehicles using Object.create():  Save your code somewhere, we will use it later

//  Vehicle
//     - Car
//         - PassengerCar
//         - RacingCar
//     - Bike
//         - Motorbike
//         - Bicycle

