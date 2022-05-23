class Rectangle {
    constructor(_width, _height) {
        this.width = _width;
        this.height = _height;
        // this.color = _color;
    }
    //clases vidine funckija ,cia galima nerasyti zodzio funkcija
    getArea() {
        return this.width * this.height;
    }

    
}


const rectangle1 = new Rectangle(15, 15);
const rectangle2 = new Rectangle(3, 5);

console.log(rectangle1);
console.log(rectangle2);
console.log('Plotis', rectangle1.getArea());
console.log('Plotis', rectangle2.getArea());



class Person {
    constructor(_name, _lastname) {
        this.name = _name;
        this.lastname = _lastname;
    }
}

const person1 = new Person('John', 'Smoth');

console.log(person1);
