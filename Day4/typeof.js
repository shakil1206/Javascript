
console.log(typeof Number('50'));
// output=> number
console.log(typeof String(50));
// output=> string
function Foo() { }
function Bar() { }
Bar.prototype = new Foo();

new Bar() instanceof Bar; // true
new Bar() instanceof Foo; // true

// This just sets Bar.prototype to the function object Foo,
// but not to an actual instance of Foo
Bar.prototype = Foo;
new Bar() instanceof Foo; // false

const Student = {
    name: 'Shakil Ahmed',
    email: 'shakil@gmail.com',
};

delete Student.email;

console.log(Student);
// output=> {name:'Shakil Ahmed'}

console.log("This is sum of String and " + 125 + " Number");
//Output is : This is sum of String and 125 Number

const number = +'35';
console.log(typeof number);
//Output is: number