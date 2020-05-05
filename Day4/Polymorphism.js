class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
information(){
        console.log(this.name,this.age);
    }
}
class People extends Person{
    information(){
        console.log(this.name, this.age);
    }
}

const info = new People("Shakil Ahmed",22);
info.information();
const info1 = new Person("Akash Islam",21);
info1.information();