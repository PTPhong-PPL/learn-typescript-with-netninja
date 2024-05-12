// let greet: Function;

// example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

// example 3
let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (ninja: {name: string, age: number}) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}

/*
 Cái này là để khai báo function nhưng chưa ghi rõ function làm gì
let greet: (a: string, b: string) => void;
 Cái này là để khai báo function làm gì dựa trên cái trước
greet = (name: string, greeting: string) => { ... }

Cái này là để khai báo function rồi ghi rõ để làm gì luôn
const greet = (name: string, greeting: string): string => { ... }

*/