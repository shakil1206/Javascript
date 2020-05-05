//call blind, apply

// function printMe(){
//     console.log('Hello ',this.name);
// }

// var obj1={
//     name:'Shakil',
//     age:22
// }
// var obj2={
//     name:'Akash Uddin',
//     email:'akash@gmail.com'
// }
// var test = printMe.bind(obj2);
// test();


// printMe.call(obj1);


function add(a,b){
    return (a+b) + this.c;
}


var obj1={
    c:5
}

var obj2={
    c:10
}

var res = add.call(obj1,10,50);
res;

var res2 = add.apply(obj2,[10,3]);
res2;