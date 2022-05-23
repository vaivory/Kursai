const basicURL = 'https://randomuser.me/api/';
const zmones100 = '?results=100';
const person = document.getElementById('person');
const image = document.getElementById('image');
const vardas = document.getElementById('vardas');
const salis = document.getElementById('salis');
const miestas = document.getElementById('miestas');
const feed = document.getElementById('feed');
const activityURL = 'https://www.boredapi.com/api/activity';


let zmones;
let activities;
//darom pagrindine zmogaus koortele
function getZmones() {
    fetch(basicURL + zmones100)
        .then((response) => response.json()
            .then((data) => {
                zmones = data.results;
                console.log('Data zmones', data);
                console.log('zmones', zmones);

                // person.innerHTML = `<img src='${zmones[0].picture.medium}'></img>
                // <>${zmones[0].name.first}<li>
                //  <div>${zmones[0].name.last}</div>
                //  <div>${zmones[0].location.country}</div>
                //  <div>${zmones[0].location.state}</div>
                // `
                image.src = zmones[8].picture.medium;
                vardas.textContent = zmones[8].name.first + ' ' + zmones[8].name.last;
                salis.textContent = zmones[8].location.country;
                miestas.textContent = zmones[8].location.state;

                Zmones6();
                //  veikla();
            }
            )
        )
}

getZmones();

// function Zmones6() {
//     for (let i = 0; i < 6; i++) {
//         feed.innerHTML += `<img src='${zmones[i].picture.medium}'></img>
//                 <div>${zmones[i].name.first}</div>
//                  <div>${zmones[i].name.last}</div>
//                  <div>${zmones[i].location.country}</div>
//                  <div>${zmones[i].location.state}</div>`
//     }

// }

//daro dar 6 korteles su skirtingais zmonem
function Zmones6() {

    for (let i = 0; i < 6; i++) {
        fetch(activityURL)
            .then((response) => response.json()
                .then((data) => {
                    // activities = data;
                    //  console.log('Data', data);
                    console.log('Activity', data.type);
                    feed.innerHTML += `<img src='${zmones[i].picture.medium}' style='width: 100px'>
                     <div>${zmones[i].name.first} ${zmones[i].name.last}</div>  
                   
                      <div>Activity: ${data.activity}</div>  
                      <div>Type: ${data.type}</div>
                      <div>Participatns: ${data.participants}</div>`
                }
                )
            )
    }



}

//---mygtukas su "create activity" + as ir nauji dalyviai kas 1 sekunde

const act = document.getElementById('act');
const veik = document.getElementById('veik');

veik.onclick = () => veikla();
act.style.display = 'none';

function veikla() {

    fetch(activityURL)
        .then((response) => response.json()
            .then((data) => {

                act.style.display = 'block';
                act.innerHTML += `
                    <div>Veikla ir dalyviai</div>
                                  
                      <div>Activity: ${data.activity}</div>  
                      <div>Type: ${data.type}</div>
                      <img src='${zmones[8].picture.medium}' style='width: 100px'>
                     <span>${zmones[8].name.first} ${zmones[8].name.last}</span> `

                setInterval(myTimer, 1000);  //kas sekunde prasuka funkcija ir prideda nauda random zmogu
                function myTimer() {
                    const person = zmones[Math.floor((Math.random() * 99) + 1)];
                    act.innerHTML += `
                            <div></div>
                             <img src='${person.picture.medium}' style='width: 100px'>
                             <span>${person.name.first} ${person.name.last}</span> 
                             `

                }
            }
            )
        )
}

//-----------search input

const search = document.getElementById('search');
const searchList = document.getElementById('searchList');

search.addEventListener("keyup", function (event) {
    const inputText = event.target.value; // Paimam teksta kur ji parasom

    console.log(inputText);
    //darom paieska pagal ivesta teksta
    const filteredPeople = zmones.filter((zmogus) => zmogus.name.first.toLowerCase().includes(inputText.toLowerCase()) || zmogus.name.last.toLowerCase().includes(inputText.toLowerCase()));
    // const filteredSurname = zmones.filter((zmones) => zmones.name.last.toLowerCase().includes(inputText.toLowerCase()));
    searchList.innerHTML = '';
    console.log('Pagal varda filtruoja', filteredPeople);
    //console.log('Pagal pavarde', filteredSurname);
    if (filteredPeople.length) {

        //parodom ekrane
        filteredPeople.map((zmogus) => {
            searchList.innerHTML += `<li class="d-flex"><img width="50" src='${zmogus.picture.medium}' >
        <span>${zmogus.name.first} ${zmogus.name.last}</span></li>`

        })


    } else { searchList.innerHTML = 'Not Found'; }

});

function trinam() {
    searchList.innerHTML = ''; //istrina musu surasta informacija
    document.getElementById('search').value = ''; //istrina tai kas buvo irasyta inpute
}

