function Person(name, email){
    // console.log('I have constructed...');
    this.name = name;
    this.email = email;
}

var p1 = new Person('Shakil Ahmed', 'shakilatrai5@gmail.com');
var p2 = new Person('Sinbad Ahmed', 'sinbadatrai5@gmail.com');
var p3 = new Person('Sumon Ahmed', 'sumonatrai5@gmail.com');
var p4 = new Person('Akash Ahmed', 'akashatrai5@gmail.com');

var people = [p1, p2, p3, p4];
console.log(people);

people.map(person =>{
    console.log(person.email);
})

