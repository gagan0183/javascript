const object = {
    name: "test"
};

console.log(`The object name is ${object.name}`); 

console.log('\u{1F44D}');

const truth = "JavaScript is a really fun language!";

console.log(truth.includes('J')); //true
console.log(truth.includes('J', 10)); //false

console.log(truth.endsWith('language!')); //true
console.log(truth.endsWith('JavaScript')); //false

console.log("Man I really love 🚀, they are the best!".match(/🚀/u))


// tag templates
function myTaggedLiteral(strings, value1, value2) {
    console.log("strings", strings);
    console.log("value1", value1);
    console.log("value2", value2);
}

myTaggedLiteral`Hello ${object.name} ${9}!`;
