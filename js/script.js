const keyElems = document.querySelectorAll(".button");
const display = document.querySelector(".results");

for (let i = 0; i < keyElems.length; i++) {
    const curElem = keyElems[i];

    curElem.addEventListener('click', function() {
        const valore = curElem.textContent;

        
        if (!isNaN(valore) || valore === "0") {
            if (display.innerHTML === "0") {
                display.innerHTML = valore;
            } else {
                display.innerHTML += valore;
            }
        }
    });
}





let primoOperando = '';
let operatoreScelto = '';

const operatori = document.querySelectorAll('.blue');

for(let i = 0; i < operatori.length; i++) {
    operatori[i].addEventListener('click', function() {
        primoOperando = display.innerHTML;
        operatoreScelto = operatori[i].innerHTML;
        display.innerHTML = '';
    })

}