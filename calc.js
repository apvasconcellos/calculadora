const dataCalcForm = document.querySelector(".data-calc-form")
let currentNumberWrapper = document.getElementById("currentNumber");
let currentNumber = Number(currentNumberWrapper.innerText);
let number = document.querySelector(".number1");
const somar = (numero1, numero2) => numero1 + numero2;
const subtrair = (numero1, numero2) => numero1 - numero2;
const multiplicar = (numero1, numero2) => numero1 * numero2;
const dividir = (numero1, numero2) => numero1 / numero2;
const calcular = (numero1, numero2, operacao) => operacao(numero1, numero2);

window.addEventListener('keydown', (e)=> {
    if (e.key == "Enter"){
        let btn = document.querySelector(".button-igual")
        btn.click()};
    if (e.key == "Backspace"){
        let btn = document.querySelector(".buttonAC")
        btn.click()};
    let number = e.key
    if(e.key == number){
        let number = e.key
        let btn = document.getElementById(`${number}`)
        btn.click()};
});

const operator = (value) => {
    let operadorSpanValid = document.querySelector(".operadorSpan")
    if(operadorSpanValid != null){
        let btn = document.querySelector(".button-igual")
        btn.click();
    }
    const numberSpan = document.createElement("span")
    numberSpan.classList.add("numberSpan")
    numberSpan.innerText = currentNumber
    numberSpan.style.color = "white"
    number.appendChild(numberSpan)
    const operadorSpan = document.createElement("span")
    operadorSpan.classList.add("operadorSpan")
    operadorSpan.innerText = value
    operadorSpan.style.color = "red"
    number.appendChild(operadorSpan)
    currentNumberWrapper.innerHTML = 0
    currentNumber = 0
}

function calculadora(value){
    if(value == "AC"){
        currentNumber = 0    
        clearElement(number)  
    } else {
        if(currentNumber == 0){
            currentNumber = value
        } else {  
            currentNumber = currentNumber + value
        }
    }
    currentNumberWrapper.innerHTML = currentNumber
}

function resultado (){
    let numeroSpan = document.querySelector(".numberSpan")
    let operadorSpan = document.querySelector(".operadorSpan")
    let numero1 = Number(numeroSpan.innerText)
    let numero2 = Number(currentNumber)
    let operador = operadorSpan.innerText

    if (operador == "+"){
    let resultado = calcular(numero1, numero2, somar)
    clearElement(number)  
    currentNumber = resultado
    currentNumberWrapper.innerHTML = currentNumber};
    if (operador == "-"){
    let resultado = calcular(numero1, numero2, subtrair)
    clearElement(number)  
    currentNumber = resultado
    currentNumberWrapper.innerHTML = currentNumber };
    if (operador == "/"){
    let resultado = calcular(numero1, numero2, dividir)
    clearElement(number)  
    currentNumber = resultado
    currentNumberWrapper.innerHTML = currentNumber};
    if (operador == "*"){
    let resultado = calcular(numero1, numero2,multiplicar)
    clearElement(number)  
    currentNumber = resultado
    currentNumberWrapper.innerHTML = currentNumber};
};

function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}

