const numberButtons = document.querySelectorAll(".number-btn"); // NodeList ~ array di elementi HTML (bottoni)
// console.log(numbesrButtons);

const operatorButtons = document.querySelectorAll(".operator-btn"); // NodeList ~ array di elementi HTML (bottoni)

const calculateButton = document.getElementById("calculate"); // object -> elemento HTML bottone =

const resetButton = document.getElementById("reset"); // object -> elemento HTML

const resultElem = document.getElementById("result"); // object -> element HTML che è il div con lo 0 inizialmente

// Variabili globali di stato del calcolo
let firstOperand = 0;
let operator = "";
let secondOperand = 0;

// MILESTONE 1
for (let i = 0; i < numberButtons.length; i++) {
    const curButton = numberButtons[i]; // object -> singolo nodo (elemento HTML)
    // console.log(curButton);
    curButton.addEventListener("click", handleNumberClick);
}

// MILESTONE 2
for (let i = 0; i < operatorButtons.length; i++) {
    const curButton = operatorButtons[i]; // object -> elemebto HTML del bottone
    console.log(curButton);
    curButton.addEventListener("click", handleOperatorClick);
}

// MILESTONE 3
calculateButton.addEventListener("click", handleCalculateClick);

// MILESTONE 4
resetButton.addEventListener("click", reset);

/////////////
// Non pure functions
function handleNumberClick() {
    console.log(this); // this è l'elemento che è stato cliccato
    const clickedNumber = this.innerText; // string
    console.log(clickedNumber, typeof clickedNumber);
    if (resultElem.innerText === "0") {
        resultElem.innerText = clickedNumber;
    } else {
        resultElem.innerText += clickedNumber;
    }
}

function handleOperatorClick() {
    console.log(this); // this è l'elemento che è stato cliccato
    // Salvare l'operatore
    // operator = this.innerText;
    operator = this.dataset.operator;
    // Salvare il primo operando
    firstOperand = parseInt(resultElem.innerText);
    // Risettare il numero in alto
    resultElem.innerText = 0;

    console.log(operator, firstOperand);
}

function handleCalculateClick() {
    // salvare il secondo operando
    secondOperand = parseInt(resultElem.innerText);
    console.log(firstOperand, secondOperand, operator);
    // Controllo che non sia ladivisione per 0
    if (operator !== "") {
        if (operator === "divisione" && secondOperand === 0) {
            resultElem.innerHTML = "ERRORE: DIVISIONE PER 0";
        } else {
            // effetuare il calcolo
            const result = calculate(firstOperand, secondOperand, operator);
            // visualizzare il risultato in alto
            resultElem.innerText = result;
        }
    }
}

function reset() {
    firstOperand = 0;
    operator = "";
    secondOperand = 0;
    resultElem.innerText = 0;
}
