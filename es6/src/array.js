// for of loop

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let value of arr) {
    console.log(value);
}

//typed arrays

let newTypeArray = new Int16Array(9);
newTypeArray[0] = 9;

console.log(newTypeArray);

// array.from()

function add() {
    args = Array.from(arguments);
    return args.reduce((num1, num2) => num1 + num2, 0);
}

let result = add (1, 2, 6);
console.log(result);

// array.of()

let newArray = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(newArray);
