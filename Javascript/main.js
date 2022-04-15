let d, b, c;

d = "string"; //string
b = 11.2222222; //number
c = true; //boolean

console.log(d, b, c);

let a1, b1, c1;

a1 = 2;
b1 = 3;
c1 = 4;

d1 = a1 + b1 - c1;

console.log(d1);

let a2, b2, c2, d2, f;
a2 = "tekstas";
b2 = 12.43;
c2 = 16;
d2 = true;

f = [a2, b2, c2, d2];
console.log(f);
console.log(f[2]); //turi ismesti c2 reiksme nes jo indeksas yra 2

f = [2, 16.43, "kursai"]; //galima masyva ir paciam surasyti ne per kintamuosius
console.log(f[2]);

let x, y, z;
x = 1;
y = 2;
z = 3;

if (x + y > z) {
    console.log('pirmas teisingas x+y>3')
} else if (x + y == z) {
    console.log('Gavom lygybe')
} else if (x - y < z) {
    console.log('False')
} else { console.log('patikrink salyga') } //jei ne viena salyga nera teisinga

//---------Funkcija1-----------------

const irasytassk = document.getElementById('inputosk');
const a3 = 3;
function skaiciuojam() {
    console.log("veikia");
    const inputValue = Number(irasytassk.value);
    console.log(inputValue);

    //  console.log(a3 + inputValue);
    const b3 = a3 + inputValue;
    console.log(b3);

    if (b3 > 10) {
        console.log(b3, '-Skaicius yra didesnis uz 10');
    } else if (b3 < 10) { console.log(b3, '-Skaicius yra mazesnis uz 10'); }
    else { console.log(b3, 'Skaiciu lygus 10') }
}

//-----------Finkcija2 inputo palyginimas-------------

const sk1 = document.getElementById('input1');
const sk2 = document.getElementById('input2');

function Palyginimas() {
    const skaicius1 = Number(sk1.value);
    const skaicius2 = Number(sk2.value);
    console.log(skaicius1);
    console.log(skaicius2);



    if (skaicius1 > skaicius2) {
        console.log('Pirmas skaicius yra didesnis');
    }
    else if (skaicius1 < skaicius2) { console.log('Pirmas skaicius yra mazesni'); }
    else { console.log('Skaiciai yra lygus'); }

}

