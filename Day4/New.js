function Animal(name){
    this.name = name;
}

Animal.prototype.printName = function(){
    console.log(this.name);
}

function myNew(constructor){
    var obj={

    };
    Object.setPrototypeOf(obj, constructor.prototype);
    var argsArray = Array.prototype.slice.apply(arguments);
    constructor.apply(obj,argsArray.slice(1));
    return obj;
}

var cat = myNew(Animal, 'Cat', 'Dog');
cat.printName();
// var cat = new Animal('Cat');
// var dog = new Animal('Dog');

// cat.printName();