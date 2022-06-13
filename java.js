let result = 0
const displayContainer = document.querySelector(".displayContainer")
const display = document.querySelector(".display")
const memoryDisplay = document.querySelector(".memory")


// Operations
const add = (a,b) => result = a + b ;
const subtract = (a,b) => result = a - b ; 
const multiply = (a,b) => result = a * b ;
const divide = (a,b) => result = a / b ;


//Operation function
const operation = function(a, operator, b) {
    if (operator == "+") {
        add(a,b)
    }
    else if (operator == "-") {
        subtract(a,b)
    }
    else if (operator == "*") {
        multiply(a,b)
    }
    else if (operator == "/") {
        divide(a,b)
    } else {
        return "INVALID OPERATOR"
    }

}

operation(1, "*" , 3)

// Show result of operation on display
let displayValue = result;


// Clear functions
let clearDisplay = function(){
    display.remove()
}

let clearMemory = function() {
    memoryDisplay.remove()
}

let clearBoth = function(){
    clearDisplay()
    clearMemory()

}

//Update display

let newDisplayValue = function(){
    display.textContent = displayValue
    const div = document.createElement("div")
    div.classList.add("display")
    displayContainer.appendChild(display)
}

let refresh = function(){
    clearDisplay()
    newDisplayValue()
}

refresh()

//Buttons

const clearButton = document.querySelector(".clear")
clearButton.onclick = () => clearBoth()
