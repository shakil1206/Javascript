const loveProgramming = "I love programming.";
const index = 4;
const singleCharacter = loveProgramming.charAt(index);
console.log(singleCharacter);

//Concat Practice

const sentence1 = "I love programming..";
const sentence2 = "You should practice more for learning...!"
//Marge two sentence into single sentence.
const addAll = sentence1.concat(sentence2);
console.log(addAll);

//IndexOf practice.

const sentence = "This is our programming practice...";
const index1 = sentence.indexOf("programming");
console.log(index1);

//lastIndex of practice.

const love ="Love with programming.";

const lastIndex = love.lastIndexOf("programming");
const i = love.indexOf("programming");
console.log(lastIndex, i);

//SatarWith, EndsWith, includes practice.

const start = love.startsWith("Love");
console.log("Start With",start);

const ends = love.endsWith(".");
console.log("Ends With", ends);

const Includes = love.includes("h");
console.log("Includs String: ", Includes);

const array = love.split(" ");
console.log(array);

const array2 = love.slice(1,10);
console.log(array2);

const subStr = love.substring(2,10);

console.log(subStr);

const Match = love.match("with");
console.log(Match.index);

const MatchAll = love.matchAll();
console.log(MatchAll);

const Repleace = love.replace("with","Shakil");
console.log(Repleace);

const lowerCase = love.toLocaleLowerCase();
console.log(lowerCase);
const upperCase = love.toUpperCase();
console.log(upperCase);


const normal = upperCase.normalize();
console.log(normal);

const Repeat = love.repeat(20);
console.log(Repeat);

const Trim = love.trim();
console.log(Trim);