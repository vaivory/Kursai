const me = {
    name: "Tatjana",
    eyes: "brown",
    hair: "white",
    greetMe: () => console.log("funkcija"),
    age: 15,
    favcolor: ["red", "blue", "green"],
    "my love": "you"
}

me.greetMe();

console.log(me.name, me.favcolor[2]);
console.log(me["my love"]);

const backendData = me; //prideda nauja reiksme i me
backendData.gender = 'Female';
console.log(backendData);

const me2 = {
    hobby: "learning",
    height: 171
}

const mixMe = Object.assign(me, me2); //apjungia me ir me2
console.log('New me', mixMe);

console.log('Keys', Object.keys(me)); //istraukia visus kyes
console.log('value', Object.values(me)); //istraukia visus kyes reiksmes

//method values
const finance = {
    q1: 200,
    q2: 240,
    q3: 230,
    q4: 300,

}

const financeSum = Object.values(finance).reduce((a, b) => a + b);

console.log('Finansu bendra suma', financeSum);

// Methos entries - sukuria masyva i kuri ieisna keys ir keys reiskems

const entries = Object.entries(me);
console.log('Entries methodas', entries);

// methis from Entries 

const fromEntries = Object.fromEntries(entries);
console.log('From Entries', fromEntries);

