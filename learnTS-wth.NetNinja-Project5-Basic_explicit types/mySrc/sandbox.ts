// union types
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(false);
mixed.push(20);

console.log(mixed);

type myType = string|number;
let mixed2: myType[] = [];
mixed2.push('hey!!! this is myType');
mixed2.push('69');

console.log(mixed2);