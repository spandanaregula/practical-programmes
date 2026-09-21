class Animal41 {
    constructor(name) {
        this.name = name;
    }

    sound() {
        return "sound";
    }
}

class Dog41 extends Animal41 {
    sound() {
        return this.name + " says woof";
    }
}

const dog = new Dog41("Rex");

console.log(dog.sound());