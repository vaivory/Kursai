const toDoArray = document.getElementById('toDo');
const DoneArray = document.getElementById('Done');
const inputElement = document.getElementById('input');
const addButton = document.getElementById('addButton');

let firstArray = ['Learn Html', 'Learn Css', 'Learn JavaScript']; //darbu sarasas kuriuos turiu padaryti
let secondArray = ['Rest']; //jau padarytu darbu sarasas

toDoArray.innerHTML = firstArray.join('<br>'); //join tai sujungia visus elementus i eilute och br kiekvien elemneta perkele i nauja eilute

//function transformDone() {
//  secondArray = firstArray.slice(0, 2);
// firstArray = firstArray.splice(2, 1);
// atvaizduotiHTML();

//}

function addToDo() {
    const value = inputElement.value;
    const isValueEmptyorExisting = value == '' || firstArray.includes(value);

    if (!isValueEmptyorExisting) { //jei input ne tuscias ir jame ivestas zodis nesikartoja tuomet 
        firstArray.push(inputElement.value); //tuomet papildom savo array
        inputElement.value = '';
        atvaizduotiHTML()
        addButton.classList.remove('btn-danger');
        addButton.classList.add('btn-primary');
    } else {
        addButton.classList.remove('btn-primary');
        addButton.classList.add('btn-danger');
    }
}

// function atvaizduotiHTML() { //updatina musus abu sarasus kur pridedam darba ir kur jau padarytas darba
//     //  DoneArray.innerHTML = secondArray.join('<br>');
//     //  toDoArray.innerHTML = firstArray.join('<br>');
//     toDoArray.innerHTML = '';
//     DoneArray.innerHTML = '';

//     for (let index = 0; index < firstArray.length; index++) {
//         const listElement = document.createElement('li'); //sukuriam lisst elementua <li>
//         listElement.textContent = firstArray[index];
//         listElement.onclick = () => {
//             secondArray.push(firstArray.splice(index, 1));
//             atvaizduotiHTML();
//         }
//         toDoArray.appendChild(listElement);
//         //  toDoArray.innerHTML += `<li>${firstArray[index]}</li>`;
//         //   toDoArray.innerHTML+='<li>'+firstArray[index]+'</li>'  cia tas pats kas eiluteje pries tai, tiesiog labiau atsilykes kodas
//     }
//     for (let index = 0; index < secondArray.length; index++) {
//         const listElement = document.createElement('li');
//         listElement.textContent = secondArray[index];
//         // DoneArray.innerHTML += `<li>${secondArray[index]}</li>`;
//         listElement.onclick = () => {
//             firstArray.push(secondArray.splice(index, 1));
//             atvaizduotiHTML();
//         }
//         DoneArray.appendChild(listElement);
//     }
// }


//----------antras bandymas---------------

function atvaizduotiHTML() {
    toDoArray.innerHTML = '';
    DoneArray.innerHTML = '';

    for (let i = 0; i < firstArray.length; i++) {
        const listElement = document.createElement('li'); //cia padeklaruojam <li> elementa
        listElement.textContent = firstArray[i];
        listElement.onclick = () => {
            secondArray.push(firstArray.splice(i, 1)[0]);
            atvaizduotiHTML()
        }
        toDoArray.appendChild(listElement); //butent cia pridedam <li> elementa i html

    }

    for (let i = 0; i < firstArray.length; i++) {
        const listElement = document.createElement('li');
        listElement.textContent = secondArray[i];
        listElement.onclick = () => {
            firstArray.push(secondArray.splice(i, 1)[0]);
            atvaizduotiHTML()
        }
        DoneArray.appendChild(listElement);

    }

}

atvaizduotiHTML();

//-----------------kita uzduotys---------------------

const array = [];
//Primitiviausias ciklas
for (let i = 0; i < 10; i++) {
    array.push(Math.random());
}

console.log(array);

const filteredArray = [];

function filterArray() {
    //ciklas kuris leidzia is kart naudoti reikmes
    for (let value of array) {
        if (value <= 0.5) {
            filteredArray.push(value);
            if (value == 5) {
                break;
            }
        }
    }
}

filterArray();

// Dar vienas budas sukti cikla

array.forEach((value, index) => { console.log('For each', index, value) })

//----Tikriausiai geriausiai budas

array.map((value, index) => { console.log('map', index, value) });

//---Metodas Filter--------------

const filteredArray2 = array.filter((value) => value <= 0.5);

console.log(filteredArray);
console.log(filteredArray2);

//------Metodas reduce-----------
const reduceArray = filteredArray2.reduce((sum, current) => sum + current);
console.log(reduceArray);


//-------------Metodas Some-----------
//grazina array su salyga atitinkancia item
const someArray = filteredArray2.some((number) => 0.7);
console.log(someArray);

//------While (kol salyga yra true)

let i = 1;

while (i) {
    i++;
    console.log(i);
    if (i == 10) {
        break;
    }
}