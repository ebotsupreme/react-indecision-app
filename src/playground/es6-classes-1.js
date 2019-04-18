
// 


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

const me = new Person('Eddie Jung', 34);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());