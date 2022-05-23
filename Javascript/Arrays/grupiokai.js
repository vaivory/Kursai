const grupiokai = [
    {
        name: 'Rokas',
        surname: 'Skinderis',
        age: 28,
        gender: 'male',
        hobby: 'programming',
        heigt: 198,

    },
    {
        name: 'Simona',
        surname: 'Sleviene',
        age: 23,
        gender: 'female',
        hobby: 'cookin',
        heigt: 164,

    },
    {
        name: 'Zilvinas',
        surname: 'Pusnys',
        age: 24,
        gender: 'male',
        hobby: 'fottball',
        heigt: 176,

    },
    {
        name: 'Roman',
        surname: 'Laskov',
        age: 36,
        gender: 'male',
        hobby: 'reading',
        heigt: 180,

    },
    {
        name: 'Margarita',
        surname: 'Budryte',
        age: 30,
        gender: 'female',
        hobby: 'dancing',
        heigt: 168,

    },
    {
        name: 'Mantas',
        surname: 'Dargis',
        age: 27,
        gender: 'male',
        hobby: 'programming',
        heigt: 176,

    },
    {
        name: 'Giedre',
        surname: 'Lukosiuniene',
        age: 30,
        gender: 'female',
        hobby: 'dreaming',
        heigt: 172,

    }
];

const tableBody = document.getElementById('table');
//const keys = ['name', 'surname', 'age', 'gender', 'hobby', 'heigt'];


function renderTableData() {
    grupiokai.map((grupiokas) => {
        const rowElement = document.createElement('tr');
        const keys = Object.keys(grupiokas);
        for (let key of keys) {
            const dataCellElement = document.createElement('td');
            dataCellElement.textContent = grupiokas[key];
            rowElement.appendChild(dataCellElement);
        }
        tableBody.appendChild(rowElement);
    })
    //buildTotalRow();

}
renderTableData();

const sortbyAlphabet = (property) => renderTableData(grupiokai.sort((a, b) => a[property].localeCompare(b[property])));

// function buildTotalRow() {
//     const rowElement=document.createElement('tr');
//     for (let key of keys) {
//         const dataCellElement=document.createElement('td');

//     }
// }

