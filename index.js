let age = 25;
age = 13;
// static typing, mentioning type before declaring variable
let hobby = "Soccer";
let isAdult = true;
let fruit = "apple";
//Arrays
let fruits = ["Apple", "Orange"];
let arr = [22, "a", true];
let numArr;
//Tuples
let employee = [1, "Tim-Othy"];
let employees = [
    [2, "Saria"],
    [3, "Impa"],
    [4, "Ganon"]
];
//Objects
let profile = { id: 1, name: "Saria" };
// Interface Example
let newCar = {
    brand: "Lexus",
    year: 2020
};
// Union
// Can be string or number
let x = 33;
let jackOccupation = "student";
//Type Assertion
let y = "a";
y = 22;
//Functions
// errors if you use incorrect data type
function add(x, y) {
    return x + y;
}
add(2, 3);
function sayHi() {
    console.log("Hi");
}
// taking an array and returning a copy of array
// using generics in example too
// T is a placeholder
//Generics
function copyArr(arr) {
    return [...arr];
}
let numCopy = copyArr([1, 2, 3]);
let strCopy = copyArr(["1", "2", "3"]);
//Enums
// Basically a bunch of options and make the value = to a string
var EyeColor;
(function (EyeColor) {
    EyeColor["brown"] = "Common eye color";
    EyeColor["blue"] = "Rare eye color";
    EyeColor["green"] = "Very rare eye color";
})(EyeColor || (EyeColor = {}));
function displayStudent(student) {
    const info = student.name + "\n" + student.age + "\n" + student.eyeColor;
    document.body.innerText = info;
}
displayStudent({
    name: "Jack",
    age: 33,
    eyeColor: EyeColor.brown
});
export {};
//# sourceMappingURL=index.js.map