// var obj={
//     name:'Shakil Ahmed',
//     print: function(){
//         console.log(this);
//     }
// }

// function myFucn(){
//    function inner(){
//        console.log(this);
//    }
//    new inner();
// }
// myFucn();

// obj.print();

// var Person ={
//     name:'Shakil Ahmed',

//     print: function(){
//         console.log(this);
//         console.log("Hello "+this.name);
//     }
// }

// var myPrint = Person.print.bind(Person);
// console.log(myPrint);
// myPrint();

// function add(num){
//     return this.value + num;
// }

// var obj={
//     value:10
// }

// var obj2={
//     value:50
// }

// var binded = add.bind(obj2);
// var result = binded(60);
// result;

// console.log(result);

var People ={
    name: 'Shakil Ahmed',
    print: function(){
        // var name = this.name;
        setTimeout(function(){
            console.log(this);
            console.log("Hello "+this.name);
        }.bind(this),2000)
    }
}