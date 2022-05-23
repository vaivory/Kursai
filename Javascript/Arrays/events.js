const infoArray = [
    {
        name: 'Panasonic',
        tooltip: 'ausynes',
    },
    {
        name: 'Sony',
        tooltip: 'televizorius',
    },
    {
        name: 'Samsung',
        tooltip: 'telefonas',
    },
    {
        name: 'Asus',
        tooltip: 'kompiuteris',
    },
    {
        name: 'Apple',
        tooltip: 'i-phone',
    },
    {
        name: 'Playstation',
        tooltip: 'konsole',
    },
    {
        name: 'karums',
        tooltip: 'surelis',
    }
]
//itraukiam i savo JS
const listElement = document.getElementById('list');

function renderList() {
    infoArray.map((item) => { //pagal kiekviena item sukuriam li elementa
        const listItem = document.createElement('li');
        listItem.textContent = item.name;

        const tooltipItem = document.createElement('div'); //pradedam kurti savo div ar koki nors kita elementa
        tooltipItem.textContent = item.tooltip;
        tooltipItem.style.display = 'none';  //norim kad pradzioj nerodytu
        listItem.appendChild(tooltipItem);

        listItem.addEventListener('mouseenter', () => {
            tooltipItem.style.display = 'block'; //nustatom styliu
        })

        listItem.addEventListener('mouseleave', () => { //kai patraukiam pele
            tooltipItem.style.display = 'none';
        })

        listElement.appendChild(listItem);
    })
}

renderList();

//-----------norim kad pasikeistu teksta kai pahoverinam mygtuka ir kai paspausim vel pasikei ir kai patrauksim pele tai griz i pradini

const buttonElement = document.getElementById('button')

buttonElement.addEventListener('mouseenter', () => {
    buttonElement.textContent = "You are hovering me";
})

buttonElement.addEventListener('mouseleave', () => {
    buttonElement.textContent = "You are leaving me";
})

buttonElement.addEventListener('click', () => {
    buttonElement.textContent = "You are clicking me";
})

//----------text validation------

const input = document.getElementById('input');
const validationElement = document.getElementById('validation');
//const validationString='Front end';

input.addEventListener('keyup', (event) => {
    if (event.target.value !== 'Front end') {
        validationElement.textContent = "Text should be 'Front end'";  //display 'Block' cia is css

    } else { validationElement.textContent = 'Done' };
})

//---------cookies---------------jei useris prisijungias tuomet sakysim true ir nebarodysim formos-----


//const nameInput = document.getElementById('name');
//const passwordInput = document.getElementById('password');

const loginCook = document.getElementById('cook');
function login() {
    document.cookie = `isLoggedIn=true`;
}

if (document.cookie) {
    loginCook.style.display = 'none';
}



