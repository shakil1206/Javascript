// var obj = {};
// var obj1 = new Object();

// console.log(obj);
// console.log(obj1);

var book ={
    name: 'Functional Javascript',
    author:"Shakil Ahmed",
    publisher:"O/Reilly",
    Page:250,
    
    print: function(){
        console.log(this.name, this.author);
    }

}
book.print();
book.price = 300;
book.sells = 400;

console.log(book);

for(var s in book){
    console.log(`${s} = ${book[s]}`);
}