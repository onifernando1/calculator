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


let displayValue = result;
console.log({displayValue})


// let clear = function(){
//     const display = document.querySelector(".display")
//     display.remove()
// }

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

let newDisplayValue = function(){
    display.textContent = displayValue
    const div = document.createElement("div")
    div.classList.add("display")
    displayContainer.appendChild(display)
}

// let newDisplayValue = function(){
//     const displayContainer = document.querySelector(".displayContainer")
//     const display = document.createElement("div")
//     display.classList.add("display")
//     display.textContent = displayValue
//     displayContainer.appendChild(display)
// }

let refresh = function(){
    clearDisplay()
    newDisplayValue()
}

refresh()


const clearButton = document.querySelector(".clear")
clearButton.onclick = () => clearBoth()
