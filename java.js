let result = 0
let memory = 5;
const displayContainer = document.querySelector(".displayContainer")
const display = document.querySelector(".display")
const memoryDisplay = document.querySelector(".memory")
const memoryValue = document.querySelector(".memory")



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
    display.textContent = displayValue
    const div = document.createElement("div")
    div.classList.add("display")
    displayContainer.appendChild(display)
}

let clearMemory = function() {
    memoryDisplay.remove()
    const memoryContainer = document.querySelector(".memoryContainer")
    const div = document.createElement("div")
    div.classList.add("memory")
    memoryContainer.appendChild(memoryValue)
    memoryValue.textContent = memory
}

let clearBoth = function(){
    clearDisplay()
    clearMemory()

}

//Update display

let newDisplayValue = function(){
    // display.textContent = displayValue
    // const div = document.createElement("div")
    // div.classList.add("display")
    // displayContainer.appendChild(display)
}

//Update memory

let newMemoryValue = function() {
    // const memoryContainer = document.querySelector(".memoryContainer")
    // const div = document.createElement("div")
    // div.classList.add("memory")
    // memoryContainer.appendChild(memoryValue)
    // memoryValue.textContent = memory
}


let refresh = function(){
    clearDisplay()
    newDisplayValue()
    newMemoryValue()
}

refresh()


// Number Functions

// Get number when button clicked 

let number = function() {
    const numbers = document.querySelectorAll(".show")
    numbers.forEach((number) => {
        number.addEventListener("click", () => {
            // alert(number.textContent)
            // alert (parseInt(number.textContent))
            displayValue = number.textContent
            refresh()

        })
        
    })

}

number()

const clearButton = document.querySelector(".clear")
clearButton.onclick = () => clearBoth()

const zeroButton = document.querySelector(".zero")
zeroButton.onclick = () => clearBoth()

const oneButton = document.querySelector(".one")
oneButton.onclick = () => number()

const twoButton = document.querySelector(".two")
twoButton.onclick = () => number()

const threeButton = document.querySelector(".three")
threeButton.onclick = () => number()

const fourButton = document.querySelector(".four")
fourButton.onclick = () => number()

const fiveButton = document.querySelector(".five")
fiveButton.onclick = () => number()

const sixButton = document.querySelector(".six")
sixButton.onclick = () => number()

const sevenButton = document.querySelector(".seven")
sevenButton.onclick = () => number()

const eightButton = document.querySelector(".eight")
eightButton.onclick = () => number()

const nineButton = document.querySelector(".nine")
nineButton.onclick = () => number()

const plusButton = document.querySelector(".add")
plusButton.onclick = () => number()


const subractButton = document.querySelector(".subtract")
subractButton.onclick = () => number()


const multiplyButton = document.querySelector(".multiply")
multiplyButton.onclick = () => number()


const divideButton = document.querySelector(".divide")
divideButton.onclick = () => number()


const decimalButton = document.querySelector(".decimal")
decimalButton.onclick = () => number()

const equalsButton = document.querySelector(".equals")
equalsButton.onclick = () => number()


const onButton = document.querySelector(".on")
onButton.onclick = () => number()


const offButton = document.querySelector(".off")
offButton.onclick = () => number()


// const testButtons = document.querySelectorAll("button")
// testButtons.forEach((button) => {
    
//     button.addEventListener("click", () => {
//         alert(button.textContent)
//     })

// })