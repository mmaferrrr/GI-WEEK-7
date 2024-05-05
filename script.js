const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";

}

function calculate() {
    let result;
    try {
        result = eval(display.value);
        display.value = eval(display.value);
        if (isNaN(result)) {
            throw new Error("Invalid expression");
        } else if (!isFinite(result)) {
            throw new Error("Division by zero");
        }
        display.value = result;
    } catch (error) {
        display.value = "Error: " + error.message;
    }
}


function handleKeyPress(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        calculate();
    }
}

document.addEventListener("keydown", handleKeyPress);
