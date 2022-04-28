let skaicius;
let stone = 1;
let scissors = 2;
let paper = 3;
let playerWins = false;
function spausk(myChoice) {
    skaicius = Math.floor(Math.random() * 3) + 1;
    console.log(skaicius);

    if (myChoice == skaicius) {
        console.log('lygiosios')
        //   else if (myChoice == stone && skaicius == paper || myChoice == scissors && skaicius)
        document.getElementById("ats").innerHTML = skaicius;
    }

}


//-----------------------Kitas pratimas-----------

const input = document.getElementById('text');
const lorem = document.getElementById('lorem');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

function big() {
    console.log(input.value.toUpperCase()); //sita matom consolej
    input.value = input.value.toUpperCase(); //sita pakeiciam musu laukelyje
}

function ieskokZodi() {
    console.log(lorem.textContent.includes(input.value))  //textContent reikia kiekviena karta nurodyti jei norim kad is ten ieskotu
    return lorem.textContent.includes(input.value)
}

function pariskink() {
    if (ieskokZodi()) {
        lorem.innerHTML = lorem.textContent.replace(input.value, input.value.bold());
    }
}



function sujungti() {  //kodel neveikia? nieko neraso console
    console.log(input1);
    console.log(input2);
    console.log(input1.value.concat(' ', input2.value));
}

function ilgis() {
    console.log(input.value.length);
}

