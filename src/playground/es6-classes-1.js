
class Person {
    constructor(name = 'John Snow') {
        this.name = name;
    }

    getGreeting() {
        return 'Hi!';
    }

}

const me = new Person('Eddie Jung');
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());