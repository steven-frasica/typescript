let age: number = 25;
age = 13;
// static typing, mentioning type before declaring variable
let hobby: string = "Soccer";
let isAdult: boolean = true;
let fruit: string = "apple";

//Arrays
let fruits: string[] = ["Apple", "Orange"]
let arr: any[] = [22, "a", true]
let numArr: number[][]

//Tuples
let employee: [number, string] = [1, "Tim-Othy"]
let employees: [number, string][] = [
  [2, "Saria"],
  [3, "Impa"],
  [4, "Ganon"]
]

//Objects
let profile: {id: number, name: string} = {id: 1, name: "Saria"}

// Can get messy, create custom type
// let car: {
//   brand: string, 
//   year: number
// } = {
//   brand: "Lexus",
//   year: 2020
// }

// Custom Types
type Car = {
  brand: string, 
  year: number
}

// let car1: Car = {
//   brand: "Lexus",
//   year: 2020
// }

//Interface
interface Car1 {
  brand: string,
  year: number
}

// Interface Example
let newCar: Car1 = {
  brand: "Lexus",
  year: 2020
}

// Union

// Can be string or number
let x: string | number = 33

// only "employed" or "student"
type occupation = "employed" | "student"

let jackOccupation: occupation = "student"

//Type Assertion
let y: any = "a"
y = <number> 22

//Functions
// errors if you use incorrect data type
function add(x: number, y: number): number {

  return x + y

}

add(2, 3)

function sayHi(): void {
  console.log("Hi")
}

// taking an array and returning a copy of array
// using generics in example too
// T is a placeholder
//Generics
function copyArr<T>(arr: T[]): T[] {
  return [...arr]
}

let numCopy = copyArr<number>([1, 2, 3])
let strCopy = copyArr<string>(["1", "2", "3"])

//Enums
// Basically a bunch of options and make the value = to a string
enum EyeColor {
  brown = "Common eye color",
  blue = "Rare eye color",
  green = "Very rare eye color"
}

interface Student{
  name: string,
  age: number,
  eyeColor: EyeColor
}

function displayStudent(student: Student): void {
  const info: string = student.name + "\n" + student.age + "\n" + student.eyeColor
  document.body.innerText = info
}

displayStudent({
  name: "Jack",
  age: 33,
  eyeColor: EyeColor.brown
})