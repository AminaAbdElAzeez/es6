// 1) Arrow Function It defines anonymous functions, is consider simple function for declaration functions ()=>{}
const add = (a, b) => {
    return a + b;
};
console.log("sum : " , add(10,20));
/************************************************************************************************************ */
// 2) Template Literals using back ticks `` for concatenation instead of using traditional way using + operator
const name = "Amina";
console.log(`Hello, ${name}!`);
/************************************************************************************************************ */
// 3) Destructuring => allows you to separate elements of array or object in variable and then using this element without this array or object
const person = { firstName: "Amina", lastName: "AbdElAzeez" };
const { firstName, lastName } = person;
console.log("FirstName : ",firstName);
console.log("LastName : ",lastName);
/************************************************************************************************************ */
// 4) let => It is used to declare variables in JavaScript that are block-scoped ,
//  const => It is used to declare variables with immutable values
let count = 0;
const max = 10;
for(count; count <= max ; count++){
    console.log(count)
}
// max=max + 10; //Assignment to constant variable. xxxxxx
// console.log(max)
/************************************************************************************************************ */
// 5) Regular Expressions => It represents a pattern for searching and verifying texts.
const pattern = /[A-Za-z]+/;
/************************************************************************************************************ */
// 6) Promises => It helps manage asynchronous operations, such as API calls or reading files.
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
/************************************************************************************************************ */
// 7) The … Operator (spread operator) => It allows you to spread the elements of an iterable (such as arrays, strings, or objects) into another iterable or function call.
const fruits = ["Apple", "Banana", "Orange"];
const moreFruits = ["Grape", "Strawberry"];
const allFruits = [...fruits, ...moreFruits];
console.log(allFruits);
/************************************************************************************************************ */
// 8) The … Operator (rest operator) => It allows you to handle an indefinite number of function arguments as an array, making it particularly useful for representing variadic functions.
function myFunction(a, b, ...restArgs) {
    console.log('a:', a);
    console.log('b:', b);
    console.log('restArgs:', restArgs);
}
myFunction('one', 'two', 'three', 'four', 'five', 'six');

/************************************************************************************************************ */
// 9) For/of => Iterates over values in iterable objects like arrays, and strings.
const array = [ 1, 2, 3, 4, 5 ];
for (const item of array) {
    console.log(item);
}
/************************************************************************************************************ */
// 10) Map Objects => It stores key-value pairs, allowing any key type.
let map1 = new Map([
    [1 , 10], [2 , 20] ,
    [3, 30],[4, 40]
    ]);
console.log("Map1: ");
console.log(map1);
/************************************************************************************************************ */
// 11) Set Objects => It stores unique values, preventing duplicates.
let set1 = new Set(["sumit","sumit","amit","anil","anish"]);
let set2 = new Set("fooooooood");
let set3 = new Set([10, 20, 30, 30, 40, 40]);
let set4 = new Set();
console.log(set1);
console.log(set2);
console.log(set3);
console.log(set4);
/************************************************************************************************************ */
// 12) Classes => It is used to define blueprints for creating objects.
class employee {
	constructor(name, age, salary) {
		this.n = name;
		this.a = age;
		this.s = salary;
	}
	decreaseRank() {
		this.s += 500;
	}
}
const employee1 = new employee("Amina", 25, 6000)
employee1.decreaseRank();
console.log(employee1.s); 
/************************************************************************************************************ */
// 13) Symbol => It is unique, immutable, used for private property keys.
let symbol1 = Symbol("Amina") 
let symbol2 = Symbol("Omnia") 
console.log(symbol1 == symbol2); 
/************************************************************************************************************ */
// 14) Default Parameters => Sign values when function arguments are not provided explicitly.
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5, 2)); // 10
console.log(multiply(5));    // 5
/************************************************************************************************************ */
// 15) String.includes() => Checks if substring is present, returning true/false result.
let str = "Welcome to JavaScript.";
let check = str.includes("JavaScript");
console.log(check);
/************************************************************************************************************ */
// 16) String.startsWith() => Checks if string begins with specified substring, returning boolean.
let str2 = 'Welcome to JavaScript';
let value = str2.startsWith('hello');
console.log(value);
/************************************************************************************************************ */
// 17) String.endsWith() => Checks if string ends with provided substring, returning boolean.
function func() {
    let str = 'Welcome to JavaScript';
    let value = str.endsWith('to', 10);
    console.log(value);
}
func();
/************************************************************************************************************ */
// 18) Array.from() => Converts array-like/iterable objects to new array with optional mapping.
const numbers = [1, 2, 3];
const squaredNumbers = Array.from(numbers, (num) => num ** 2);
console.log(squaredNumbers);
/************************************************************************************************************ */
// 19) Array keys() => Iterates over array indices, allowing index-based iteration.
// Taking input as an array A
// containing some elements.
let A = [5, 6, 10];
let iterator = A.keys();
for (let key of iterator) {
    console.log(key);
}
/************************************************************************************************************ */
// 20) Array find() => Locates and returns the first array element satisfying a provided condition.
// Input array contain some elements.
let array2 = [-10, -0.20, 0.30, -40, -50];
let found = array2.find(function (element) {
    return element > 0;
});
console.log(found);
/************************************************************************************************************ */
// 21) Array findIndex() => Retrieves the index of the first array element satisfying a given condition.
const ranks = [1, 5, 7, 8, 10, 7];
const index = ranks.findIndex((rank) => rank === 7);
console.log(index); //2
/************************************************************************************************************ */
// 22) New Number Properties => Methods to perform some numeric functions, that contains the date, integers, and floating points, etc
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;

console.log("Largest number:", biggestNum);
console.log("Smallest positive nonzero number:", smallestNum);
console.log("Positive infinity:", infiniteNum);
console.log("Negative infinity:", negInfiniteNum);
console.log("Not-a-Number (NaN):", notANum);
/************************************************************************************************************ */
// 23) Object entries => Converts object properties to an array of [key, value] pairs
const obj = { 0: 'adam', 1: 'billy', 2: 'chris' };
console.log(Object.entries(obj)[1]);
/************************************************************************************************************ */