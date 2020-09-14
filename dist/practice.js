"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const person = {
    name: "Simon",
    age: 27,
    gender: "male",
};
const Jack = new Person("Jack", 27, "nothing");
// '?' mark mean 'gender' parameter is optional
const sayHi = (name, age, gender) => {
    return `Hi ~ ${name}, you are ${age}, you are ${gender}`;
};
const sayHello = (person) => {
    return `Hello ~ ${person.name}, you are ${person.age}, you are ${person.gender}`;
};
console.log(sayHi("Simon", 27, "male"));
console.log(sayHello(person));
console.log(sayHello(Jack));
//# sourceMappingURL=practice.js.map