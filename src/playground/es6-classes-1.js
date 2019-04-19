
class Person {
    constructor(name = 'John Snow', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        // template strings
        return `Hi. I am ${ this.name }!`;
    }

    getDescription() {
        return `${ this.name } is ${ this.age } year(s) old.`;
    }

}

class Student extends Person {
    constructor(name, age, major) {
        // super refers to the parent class;
        super(name, age);
        this.major = major;
    }
}

const me = new Student('Eddie Jung', 34, 'Computer Science');
console.log(me);

const other = new Student();
console.log(other);