// function calculate() {
    
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);

  
//     let result = num1 + num2;

    
//     document.getElementById("result").innerText = "Result: " + result;
// }



const firstInput = document.getElementById("input");
const secondInput = document.getElementById("input2");
const output = document.getElementById("output");
let number = 0;

const plusValues = () => {
    number = +secondInput.value + +firstInput.value;
    output.innerHTML = ""
    displayValue();
}


const displayValue = () => {
    let outputText = document.createTextNode(number);
    output.appendChild(outputText);
}

