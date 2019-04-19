
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

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }

}

const me = new Student('Eddie Jung', 34, 'Computer Science');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());