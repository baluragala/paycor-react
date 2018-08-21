class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get Age() {
    return this.age + " years";
  }

  set Age(value) {
    if (value < 0) {
      throw new Error("invalid age");
    }

    this.age = value;
  }

  describe() {
    console.log(`Perons age is ${this.age}`);
  }
}

// let p = new Person("jim", 23);
// console.log(p);
// p.Age = 0;
// p.Age;

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  describe() {
    console.log(
      `Name:${this.name} and Age:${this.age} with grade:${this.grade}`
    );
  }
}

let s = new Student("kim", 24, "A");
