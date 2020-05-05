// function Person(){
//     this.name = 'Shakil Ahmed';
// }

// function Teacher(){
//     Person.call(this);
//     this.subject = 'Javascript';
// }

// var teacher = new Teacher();

// var name = teacher.name;
// console.log(name);

function Person(name){
    this.name=name;
}
Person.prototype.printName = function(){
    console.log('Name', this.name);
}

function Student(name, id){
    Person.call(this, name);
    this.id =id;
}

Student.prototype =Object.create(Person.prototype);
Student.prototype.constructor = Student;

var student = new Student("Shakil Ahmed", 1206);