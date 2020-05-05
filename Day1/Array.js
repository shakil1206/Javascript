const array1 =['Shakil',"Sinbad", "Selim"];
const array2 = ['Abdul Halim', "Sultan", "Sheikh Selim", "Akash"];

const margeArray = array1.concat(array2);
console.log(margeArray);

const isBelowThreshold = (currentValue) => currentValue < 40;
const array3= [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));

const Filter = array2.filter(words=>words.length>=5);
console.log(Filter);

const found = array3.find(fo=>fo>10);
console.log(found);

const findIndex = array3.findIndex(fo=>fo>1);
console.log(findIndex);

array2.forEach(element=>console.log(element));

const Join = array2.join(' ');
console.log(Join);

const lastIndex = array2.lastIndexOf("Akash");
console.log(lastIndex);


const Output = array2.reverse();
console.log(Output);

const Output1 =array2.sort();
console.log(Output1);

const Output2=array2.toString();
console.log(Output2);

const Numbers= [10,20,15,30,50,45,100,75,90,89,46];

const minNumber = Math.min(...Numbers);
console.log(minNumber);

const maxNumber = Math.max(...Numbers);
console.log(maxNumber);

const number = 650.45;
console.log(Math.round(number));

const string = "I love Programming. This is a best practice for increase knowladge";
const changeString = string.replace("Programming", "Car driving"); 
console.log(changeString);