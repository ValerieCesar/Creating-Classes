class Cat {
    constructor(color, name, age) {
        this.color = color;
        this.name = name;
        this.age = age;
    }
    getColor() {
        return `The color of the cat is ${this.color}`
    }
    getName() {
        return `The name of the cat is ${this.name}`
    }
    getAge() {
        return `The age of the cat is ${this.age}`
    }
}
const joseCat = new Cat('brown', 'Gizmo', 7)
const rodCat = new Cat('Red', 'Chimy', 4)
// console.log(joseCat, rodCat);
// console.log(joseCat.getAge());
