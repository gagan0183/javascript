"use strict";

var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var object = {
  name: "test"
};
console.log("The object name is ".concat(object.name));
console.log("\uD83D\uDC4D");
var truth = "JavaScript is a really fun language!";
console.log(truth.includes('J')); //true
console.log(truth.includes('J', 10)); //false

console.log(truth.endsWith('language!')); //true
console.log(truth.endsWith('JavaScript')); //false

console.log("Man I really love 🚀, they are the best!".match(/(?:\uD83D\uDE80)/));

// tag templates
function myTaggedLiteral(strings, value1, value2) {
  console.log("strings", strings);
  console.log("value1", value1);
  console.log("value2", value2);
}
myTaggedLiteral(_templateObject || (_templateObject = _taggedTemplateLiteral(["Hello ", " ", "!"])), object.name, 9);