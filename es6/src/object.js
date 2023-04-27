// shorthand property names

let one = 1;
let two = 2;

let value = {
    one,
    two
}

console.log(value);

// computed properties

let computes = {
    [1 + 2 + 3]: "six"
};

console.log(computes);

// object assign

let person = {
    name: "test",
    age: 30,
    blog: "http://test.com",
    printName() {
        console.log(this.name);
    }
};

let assignObject = Object.assign({}, person, {weight: 90});
console.log(assignObject);