// function Person(name, age){
//     this.name = name;
//     this.age=age;

//     this.hello = function(){
//         console.log('Hello',+this.name);
//     }
// }


function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function () {
    console.log('Hello '+this.name);
    
}


var p1 = new Person('Shakil Ahmed', 22);
var p2 = new Person('Akash', 22);

console.log(p1);
console.log(p2);