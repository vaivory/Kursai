let cookieCount = getCookie('cookieCountMano') || 0;
let grandmaCount = getCookie('grandmaCount') || 1;
const cookieDisplay = document.getElementById('cookieDisplay');
cookieDisplay.textContent = cookieCount;

let base = 0.5;
let upgrade = false;

if (getCookie('grandmaUpgrade')) {
    buyGrandmaUpgrade(true);
}

function increaseCookieCount() {
    cookieCount++;
    cookieDisplay.textContent = cookieCount;
    setCookie('cookieCountMano', cookieCount);
}

function setCookie(name, value) {
    document.cookie = `${name}=${value}`;
}

function getCookie(name) {

    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();

}

const buyGrandma = () => {
    if (cookieCount > 50) {
        cookieCount = Number(cookieCount) - 50;
        //setCookie('cookieCountMano', cookieCount)
        setCookieValues();
        // cookieDisplay.textContent = cookieCount;
        grandmaCount++;
        setCookie('grandmaCount', grandmaCount);
        workingGrandmas();
    }
}

let grandmaInterval;

function workingGrandmas() {
    if (grandmaCount) {
        if (grandmaInterval) {
            clearInterval(grandmaInterval);
        }
        grandmaInterval = setInterval(() => grandmaKazkas(), 1000);
    }
}

function grandmaKazkas() {
    cookieCount = Number(cookieCount) + 0.5 * grandmaCount;
    setCookieValues();
}

function setCookieValues() {
    setCookie('cookieCountMano', cookieCount);
    cookieDisplay.textContent = cookieCount;
}

workingGrandmas();

const grandmaUpgrade = document.getElementById('mociutesKocelas');

function setGrandmaUpdateButtonSate() {
    if (grandmaCount >= 5) {
        grandmaUpgrade.style.Display = 'block';
        if (cookieProduction.upgrade) {
            grandmaUpgrade.disabled = true;
        }
    }
}

function buyGrandmaUpgrade() {
    if (cookieCount > 200 && !grandmaBaseCookieProduction.grandma.upgrade) {
        cookieCount = Number(cookieCount) - 200;
        cookieProduction.base = cookieProduction.base * 1.25;
        cookieProduction.upgrade = true;
        setCookie('grandmaUpgrade', cookieCount);
        setCookieValues();
    }
}

workingGrandmas()
setGrandmaUpdateButtonSate();




