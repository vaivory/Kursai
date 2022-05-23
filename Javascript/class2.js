class Animal {
    constructor({ _age, _name }) {
        this.age = _age;
        this.name = _name
    }
    speak() {
        console.log('Generic animal sound')
    }
}

class Cat extends Animal {
    constructor({ _age, _name }) {
        super({ _age, _name })
        this.type = 'cat';
        this.sound = 'Miau Miau'
    }
    speak() {
        console.log(this.sound)
    }
}

class Melyna extends Animal {
    constructor({ _age, _name, _sound, veisle }) {
        super({ _age, _name, _sound })
        this.veisle = 'Melynoji';
        this.sounds = _sound;
    }
}

const animal1 = new Animal({ _age: 2, _name: 'Roki' })
const cat1 = new Cat({ _age: 2, _name: 'Roki' })
const veisle = new Melyna({ _age: 3, _name: 'suo', _sound: 'woof woof', veisle: 'terier' });

console.log(animal1);
console.log(cat1);
console.log(veisle);

veisle.speak();
animal1.speak();
cat1.speak();