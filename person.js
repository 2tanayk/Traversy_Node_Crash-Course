const person = {
    name: 'John Doe',
    age: 30
}

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greeting() {
        console.log(`My name is ${this.name}`)
    }
}
module.exports = Person