let skaicius;
function spausk() {
    skaicius = Math.floor(Math.random() * 3) + 1;
    console.log(skaicius);
    if (skaicius === 1) {
        console.log('Paper')
    }
    else if (skaicius === 2) {
        console.log('Scissors')
    } else { console.log('Stone') }

}


