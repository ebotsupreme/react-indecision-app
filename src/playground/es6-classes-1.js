
class Person {
    constructor(name = 'John Snow') {
        this.name = name;
    }

    getGreeting() {
        // return 'Hi. I am ' + this.name + '!';

        // template strings
        return `Hi. I am ${ this.name }!`;
    }

}

const me = new Person('Eddie Jung');
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());