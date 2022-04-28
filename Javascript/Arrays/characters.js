let characters = [];



const tableBody = document.getElementById('table');
const keys = ['name', 'height', 'mass', 'eye_color', 'gender', 'homeworld'];

function renderTableData(parametras) {
    tableBody.innerHTML = '';
    parametras.map((char) => {
        const rowElement = document.createElement('tr');

        console.log(keys);
        for (let key of keys) {
            const dataCell = document.createElement('td');
            if (key === 'homeworld') {
                const buttonElement = document.createElement('button');
                buttonElement.textContent = 'Homeworld';
                buttonElement.onclick = () => getHomeworld(char[key]);
                rowElement.appendChild(buttonElement);
            } else {
                dataCell.textContent = char[key];
            }

            rowElement.appendChild(dataCell);
        }
        tableBody.appendChild(rowElement);

    })
    totalRow()
}


function getHomeworld(url, kazkas) {
    fetch(url).then((response) => {
        response.json().then((data) => {
            if (kazkas) {
                console.log('Home World', data);
            } else {
                renderHomewordlData(data);
            }
        })
    })
}

const planetList = document.getElementById('planetList');

function renderHomewordlData(data) {
    planetList.innerHTML = '';
    const keys = ['name', 'population', 'terrain', 'climate', 'gravity'];

    for (let key of keys) {
        const listItem = document.createElement('li');
        listItem.textContent = data[key];

        planetList.appendChild(listItem);
    }
}

function getAllFirstNames() {
    const names = characters.map((char) => {
        return char.name.split(' ')[0]  //cia splitinom i masyva ir is ten paemem [0]
    })
    return names;
}

console.log(getAllFirstNames());

function getAllEyes() {
    const eye = characters.map((char) => {
        return char.eye_color; //cia paemem tiesiog objecto reiksme eye_color
    })
    return eye;
}

console.log(getAllEyes());

function buildTotalRow() {

}

function getAllHeightSum(property) {
    return characters
        .map((char) => Number(char[property]))
        .reduce((sum, current) => sum + current);
}






function totalRow() {
    const rowElement = document.createElement('tr');
    for (let key of keys) {
        const dataCellsElement = document.createElement('td');
        dataCellsElement.classList.add('fw-bold'); //paryskina teksta eiluteje
        if (key == 'height' || key == 'mass') {
            dataCellsElement.textContent = getAllHeightSum(key);
        }
        if (key === 'name') {
            //  dataCellsElement.textContent = nameSum();
            dataCellsElement.textContent = `Simboliu suma ${nameSum()}`
        }

        rowElement.appendChild(dataCellsElement);
    }
    tableBody.appendChild(rowElement);
}

function nameSum() {
    return characters
        .map((char) => Number(char.name.length))
        .reduce((sum, current) => sum + current);

}
console.log(nameSum);

const filteredMass = () => characters.filter((char) => char.mass > 80);
console.log(filteredMass());

const filteredHeight = () => characters.filter((char) => char.height < 180);
console.log(filteredHeight());

const filteredGender = () => characters.filter((char) => char.gender === 'male');
console.log(filteredGender());

const filteredEye = () => characters.filter((char) => char.eye_color === 'blue');
console.log(filteredEye());

const arVyras = () => characters.some((char) => char.gender === 'male' && char.height > 200);
console.log(arVyras());

const arMot = () => characters.some((char) => char.height > 170 && char.eye_color !== 'brown');
console.log(arMot());

const sortByNumber = (property) => renderTableData(characters.sort((a, b) => a[property] - b[property]));
//const sortByHeigt = () => renderTableData(characters.sort((a,b) => a.height-b.height));

const sortbyAlphabet = (property) => renderTableData(characters.sort((a, b) => a[property].localeCompare(b[property])));




//nameSum();
//console.log(nameSum());


//renderTableData(characters);  nereikia kviesti, nes kitiap paraso mum ta array prie musu traukiamo saraso is puslapio


let urlFetch = 'https://swapi.dev/api/people/';
let previousPage;
let nextPage;

function getCharacters(url, wasNextClicked) {
    tableBody.textContent = 'Loading...';
    setTimeout(() => {
        fetch(url).then((response) => {
            response.json().then((data) => {
                if (wasNextClicked) {
                    characters = characters.concat(data.results);
                } else {
                    characters = data.results;
                }

                previousPage = data.previous;
                nextPage = data.next;
                renderTableData(characters);
            })
        })
    }, 2000)

}

getCharacters(urlFetch);

