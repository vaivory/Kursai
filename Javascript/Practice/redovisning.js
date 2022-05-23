const pav = document.getElementById('name');
const amount = document.getElementById('amount');

const table = document.getElementById('table');
const prideti = document.getElementById('add');
const tableList = document.getElementById('tableList');

prideti.onclick = () => addValue();

//tableList.style.display = 'none';


let duomenys = JSON.parse(localStorage.getItem('duomenys')) || [];  //is localStorage paduoda mum info
const keys = ['#', 'name', 'amount', 'date'];

function addValue() {
    const inputName = pav.value;
    const inputAmount = amount.value;

    console.log(inputName);
    console.log(inputAmount);

    let object = {
        name: inputName,
        amount: inputAmount,
        date: getDate(),
    }
    console.log('Mano objektas', object);
    duomenys.push(object);
    setItem('duomenys', duomenys);
    console.log('Mano array', duomenys);

    //tableList.style.display = 'block';

    //uzpildom lentele musu duomenimis
    paintTable();


}


//piesiam lentele
function paintTable() {
    table.innerHTML = '';
    let pages = duomenys.filter((row, index) => {
        let start = (curPage - 1) * pageSize;
        let end = curPage * pageSize;
        if (index >= start && index < end) return true;
    })
    pages.map((duom, index) => {


        const rowElement = document.createElement('tr');
        console.log('keys', keys);
        for (let key of keys) {
            const dataCell = document.createElement('td');
            dataCell.textContent = duom[key];
            console.log('Objekto duomenys', duom[key]);

            if (key === '#') dataCell.textContent = index + 1; //prededu numeracija stulpelyje #
            //console.log('numeris', dataCell);

            rowElement.appendChild(dataCell);

        }
        const button1Element = document.createElement('button');
        button1Element.textContent = 'Edit';
        button1Element.onclick = () => keisti(duom);
        rowElement.appendChild(button1Element);

        const button2Element = document.createElement('button');
        button2Element.textContent = 'Delete';
        button2Element.onclick = () => trinti(duom);
        rowElement.appendChild(button2Element);

        table.appendChild(rowElement);
    }

    )
}


function trinti(duom) {
    duomenys = duomenys.filter(item => item != duom);
    paintTable();
    setItem('duomenys', duomenys);
}


// gaunam data
function getDate() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let date = `${year}.${month}.${day} / ${hour}:${minutes}:${seconds}`;
    let dateString = date.toString();
    console.log(dateString); //cia tik parasom savo data consoleje
    return dateString;  //cia grazinam datos reiksme, kad poto galima butu ja naudoti kitur

}

//---the stored data is saved across browser sessions
function setItem(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
}

function keisti(duom) {

    //sukuriam pop-up langa
    const langas = document.createElement('dialog');
    langas.open = true;

    const inputName = document.createElement('input');
    inputName.value = duom.name;
    console.log(inputName.value);

    const inputAmount = document.createElement('input');
    inputAmount.classList.add('mx-3');
    inputAmount.value = duom.amount;
    console.log(inputAmount.value);

    langas.appendChild(inputName); //atvaizduojam sita
    langas.appendChild(inputAmount);

    const saveButton = document.createElement('button');
    saveButton.innerText = "Save";
    saveButton.classList.add('btn', 'btn-info', 'mx-3');  //bootstrap stylius per js
    langas.appendChild(saveButton);
    saveButton.onclick = () => {
        console.log('Keiciam duomenys');
        duom.name = inputName.value;
        duom.amount = inputAmount.value;
        duom.date = getDate();

        setItem('duomenys', keys);
        addValue();



    }

    const cancelButton = document.createElement('button');
    cancelButton.innerText = "Cancel";
    cancelButton.classList.add('btn', 'btn-secondary');
    langas.appendChild(cancelButton);
    document.body.appendChild(langas);
    cancelButton.onclick = () => {
        document.body.removeChild(langas);
    }


}


// isfiltruojam pagal abecele
const abc = document.getElementById('abc');  //pagal id paimu ta elementa
abc.onclick = () => sortbyAlphabet('name'); //tuomet paspaudus ten ma ndarys mano funkcija.
const sortbyAlphabet = (name) => paintTable(duomenys.sort((a, b) => a[name].localeCompare(b[name])));


//isfiltruojam pagal accending ir deccending kieki
const num123 = document.getElementById('num123');
num123.onclick = () => sortByNumber('amount');
let order = true;
const sortByNumber = (amount) => {
    order = !order; //sitas pastoviai kaitaliojasi
    if (order) {
        paintTable(duomenys.sort((a, b) => a[amount] - b[amount]));
    } else {
        paintTable(duomenys.sort((a, b) => b[amount] - a[amount]));
    }
}


//paintTable(duomenys.sort((a, b) => a[amount] - b[amount]));


const pageSize = 10; //tiek eiluciu rodys per viena puslapi
let curPage = 1;  //dabar esamas puslapis

document.querySelector('#next').addEventListener('click', nextPage, false); //paspaudus ant mygtuko su ID next daris funkcija nextPage
document.querySelector('#prev').addEventListener('click', previousPage, false);

function previousPage() {
    if (curPage > 1) curPage--;
    paintTable();
}

function nextPage() {
    if ((curPage * pageSize) < duomenys.length) curPage++;
    paintTable();
}

let paginationData= {
    page:1,
    resultsPerPage:10,
}

//pastrigau ant pagination






