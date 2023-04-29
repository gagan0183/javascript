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

// find and findIndex
const students = [
    {
        name: 'Steve',
        course: 'History'
    },
    {
        name: 'Mary',
        course: 'Science'
    },
    {
        name: 'Lisa',
        course: 'Physics'
    },
    {
        name: 'Michelle',
        course: 'Physics'
    }
];

const physicsStudent = students.find(student => student.course === 'Physics');
console.log(physicsStudent);

const physicsStudentIndex = students.findIndex(student => student.course === 'Physics');
console.log(physicsStudentIndex);

// values
const studentValues = students.values();
console.log(studentValues.next());
console.log(studentValues.next());

// keys
const studentKeys = students.keys();
console.log(studentKeys.next());
console.log(studentKeys.next());

// entries
const studentEntries = students.entries();
console.log(studentEntries.next());
console.log(studentEntries.next());

// copyWithin
let copyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
copyArray.copyWithin(0, 3, 6);
console.log(copyArray);