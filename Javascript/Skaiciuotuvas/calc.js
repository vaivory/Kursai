const skaicius = document.getElementById('numberZone');
const rezultatas = document.getElementById('resultArea');
// let firstNumber;
let prevNumber;
let symbol;
let isEqualclicked = false;


function inpnumber(ivestassk) {     //cia nurodom musus parametra t.y. ivestassk kuris gauna reiksme kuri stovi numberZone


    if (Number(numberZone.textContent) == 0 && numberZone.textContent != '0.') {   //jei pirmas skaiciu yra nulis ir ne 0. tuomet ivedus kita jis pasikeicia i ta ivesta skaiciu.
        numberZone.textContent = ivestassk;
    } else { numberZone.textContent += ivestassk } //kitu atveju jei ne nulis tai prideda is paskos sekanti ivesta skaiciu

}

function addDot() {
    numberZone.textContent = numberZone.textContent.trim() + '.'; //pridedam skciaus pabeigoje taska is istrinam whitespce priestaska ir po
}

function round() {
    numberZone.textContent = Math.round(Number(numberZone.textContent));
}

function numberDelete() {
    numberZone.textContent = numberZone.textContent.slice(0, -1); //paima viso ilgio skaiciu
}

//function add() {
//    firstNumber = Number(numberZone.textContent);
//   numberZone.textContent = 0;

//}

function emptyCell() {
    numberZone.textContent = 0;
    resultArea.textContent = 0;
    prevNumber = 0;
}

function mathAction(symbolParam) {
    if (prevNumber && !isEqualclicked) { //jei skaicius tuomet iskveciam f-ja equals
        equals(false);
    }
    prevNumber = Number(numberZone.textContent); //priskyriam skaiciu kuris yra ivestas
    symbol = symbolParam; //priskyriam butent ta vaiksmo zenkla kuriai funkcijai darom +,-,*,/
    console.log('koki veiksma darom', symbol);
    numberZone.textContent = 0; //lygu
    resultArea.textContent = prevNumber;
}

function equals(paspaustas) {
    isEqualclicked = paspaustas;
    if (symbol == '+') { //prilyginam symboliui kuri paspaudem
        numberZone.textContent = prevNumber + Number(numberZone.textContent);
    } else if (symbol == '-') { //prilyginam symboliui kuri paspaudem
        numberZone.textContent = prevNumber - Number(numberZone.textContent);
    } else if (symbol == '*') { //prilyginam symboliui kuri paspaudem
        numberZone.textContent = prevNumber * Number(numberZone.textContent);
    } else if (symbol == '/') { //prilyginam symboliui kuri paspaudem
        numberZone.textContent = prevNumber / Number(numberZone.textContent);
    }

    resultArea.textContent = numberZone.textContent;

}

function getSqrt() {
    if (Number(numberZone.textContent) === 0) {  //=== patikrina ir ar tai vienodas tipas ir ar jie lygus pagal value
        resultArea.textContent = Math.sqrt(Number(resultArea.textContent))
    } else numberZone.textContent = Math.sqrt(Number(numberZone.textContent))
}



