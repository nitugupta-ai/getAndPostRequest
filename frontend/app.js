// this is factory function

function PersonMaker(name, age) {
    const Person = { 
    name: name,
    age : age,
    talk() {
        console.log("Hey There1 I can able to talk")
    },
    
    }
    console.log(this);
    return Person;
};
// New operator with prototype
function Person(name,age) {
    this.name = name;
    this.age = age;
    console.log(this);
}

Person.prototype.talk = function() {
    console.log(`Hello This is me ${this.name}`);
}

let p1 = new Person("Nitu", 22);

// using class keywords
class PersonClass {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi, this is me ${this.name}`);
    }
}

let p2 = new PersonClass("Ankit", 25);

// Inheritance

class PersonM {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hello! there this is me ${this.name}`);
    }
}

class student extends PersonM{
    constructor(name, age,marks) {
        super(name,age);
        this.marks = marks;
    }

}

class Teacher extends PersonM {
    constructor(name,age,subject) {
        super(name,age);
        this.subject = subject;
    }
    
}
let stu1 = new student("Niu",13,89);
console.log(stu1);
stu1.talk()

// class student {
//     constructor(name, age,marks) {
//         this.name = name;
//         this.age = age;
//         this.marks = marks;
//     }

//     talk() {
//         console.log(`This is me ${this.name}`);
//     }
// }

// class Teacher {
//     constructor(name,age,subject) {
//         this.name = name;
//         this.age = age;
//         this.subject = subject;
//     }
//     talk() {
//         console.log(`This is me ${this.name}`);
//     }
// }

// one more example with constructor

class Mammal {
    constructor(name){
        this.name = name;
        this.type = "warm-blooded"
    }

    eat() {
        console.log("I'm eating");
    }
}

class dog extends Mammal{
    constructor(name){
        super(name);

    }
    bark() {
        console.log("Im barking like woof!")
    }
}

class cats extends Mammal{
    constructor(name){
        super(name);

    }
    meow() {
        console.log("Im barking like meow!!")
    }
}

