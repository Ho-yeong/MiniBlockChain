class Person {
  public name: string;
  public age: number;
  public gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Simon",
  age: 27,
  gender: "male",
};

const Jack = new Person("Jack", 27, "nothing");

// '?' mark mean 'gender' parameter is optional
const sayHi = (name: string, age: number, gender?: string): string => {
  return `Hi ~ ${name}, you are ${age}, you are ${gender}`;
};
const sayHello = (person: Human): string => {
  return `Hello ~ ${person.name}, you are ${person.age}, you are ${person.gender}`;
};

console.log(sayHi("Simon", 27, "male"));
console.log(sayHello(person));
console.log(sayHello(Jack));

export {};
