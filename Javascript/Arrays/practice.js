let a = 'Mano string';
const b = 2;
let c = true;
console.log('Hello World');
console.log(a);

const array = ['string', 5, 16, 18];
const myObj = {
    name: 'kintamasis objektas',
    title: 'kartojimas',
    year: 2022
}

function numB() {
    if (c === true) {
        console.log('Mano skaiciu raso funkcija', b);
    }
    console.log(a);

}

numB();
//-----------7 ir 8---------------
function thirdVariable() {
    return array[2];
}

console.log('Grazina trecia array reiksme', thirdVariable());
//--------------------9------------
array.push('Fourth element');
console.log('Papildytas array', array);
//------------10-----------------
array.shift();
console.log('Array be pirmo elemento', array);
//console.log('kintamasis objektas', myObj);

//----------------11---------------
function skaiciai() {
    for (let n = 1; n < 11; n++) {
        console.log(n);
    }
}
skaiciai();

//---------------------------12----------------
const nauajasArray = array.map((element, index) => element = index);
console.log('Naujas array', nauajasArray);

//-------13-------------------
const filteredArray = nauajasArray.filter((value) => value % 2 !== 0);
console.log('Filtered array', filteredArray);
//------------14-----------
function myParameter(y) {
    console.log('Paduotas parametras', y);
}

myParameter(5);
//----------15-------------
const array2 = [];
for (let i = 0; i < 5; i++) {
    array2.push(Math.floor(Math.random() * 10));
}
console.log('Array is skirtingu skaiciu', array2);

//-----------16----------------
//const array3 = array2.reduce(arraySuma, 0);
function arraySuma() {
    return array2.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}

console.log('Array skaiciu suma', arraySuma());

console.log(array2.reduce((previousValue, currentValue) => previousValue + currentValue, 0)); // 16 uzduotys be funkcijos

//---------17----------------
const sumArray = (previousValue, currentValue) => previousValue + currentValue;
console.log('Naujo array is 12 uzduoties suma', nauajasArray.reduce(sumArray, 0));
console.log('Random skaiciu array suma', array2.reduce(sumArray, 0));

//--------18--------------2 variantai--
// sita radau internete, paprasyti paaiskinti, nes key kaip ir nenurodytas ir nenaudojamas
for (let [key, value] of Object.entries(myObj)) {
    console.log(`${value}`);
}

//destytojo variantas
Object.keys(myObj).map((key) => console.log('Destytojo variantas', myObj[key]));

//bandziau rasyti su for bet nesigavo

// for (let [key] of Object.keys(myObj)) { //sitas eina per raides nes paima stringa
//     console.log(`${key}`);
// }

//------19------?? ar cia turetu atvaizduoti tik keys pavadinimus, be reiksmiu?-------
console.log('19 uzduotis', Object.keys(myObj));
//------20-------------

console.log(Object.assign(myObj, { kintamasis1: b }, { kintamasis2: c }));

//----21  -----------??------
let array4 = [];
for (let i = 0; i < 5; i++) {
    //array4.push(Object.assign(myObj, { kintamasis1: b }, { kintamasis2: c }))
    array4.push(myObj); //destytojo variantas
}
console.log('21 uzduotys', array4);

//---------22---------------
function result() {
    console.log('22 uzduotys', array4);
}
result();

//---------23---------------
const inputElement = document.getElementById('input');
function addInput() {
    const reiksme = inputElement.value;
    console.log('23 uzduotis', reiksme);

}
addInput();

//-------24-----------------
const elementInput = document.getElementById('input');
function addInputElement() {
    let currentVal = elementInput.value;
    document.getElementById("show").innerHTML = currentVal;
}
addInputElement();

//destytojo variantas

// const displayElement = document.getElementById('show')
// const array5 = [];
// function addInputElement() {
//     displayElement.textContent = input.value
// }

//-----------25--------------???------
const displayElement = document.getElementById('show');
const array6 = [];
function newArray() {
    if (!array6.includes(elementInput.value)) {
        array6.push(elementInput.value);
        displayElement.textContent += inputElement.value;
    }
    console.log('25 uzduotis', array6);
}

//---------26 ir 27-----------------

function arrayElement() {
    if (!array6.includes(elementInput.value) && elementInput.value !== '') {
        array6.push(elementInput.value);
        const newEntry = document.createElement('div');
        newEntry.textContent = elementInput.value;
        displayElement.appendChild(newEntry);
    }
    console.log(array6);
}
