let result = 0
let memory = '';
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


// Number Functions

// Get number when button clicked 
let number = function() {
    const numbers = document.querySelectorAll(".show")
    numbers.forEach((number) => {
        number.addEventListener("click", () => {
            alert(number.textContent)
        })
        
    })

}

number()

const clearButton = document.querySelector(".clear")
clearButton.onclick = () => clearBoth()

const zeroButton = document.querySelector(".zero")
zeroButton.onclick = () => clearBoth()

const oneButton = document.querySelector(".one")
oneButton.onclick = () => clearBoth()

const twoButton = document.querySelector(".two")
twoButton.onclick = () => clearBoth()

const threeButton = document.querySelector(".three")
threeButton.onclick = () => clearBoth()

const fourButton = document.querySelector(".four")
fourButton.onclick = () => clearBoth()

const fiveButton = document.querySelector(".five")
fiveButton.onclick = () => clearBoth()

const sixButton = document.querySelector(".six")
sixButton.onclick = () => clearBoth()

const sevenButton = document.querySelector(".seven")
sevenButton.onclick = () => clearBoth()

const eightButton = document.querySelector(".eight")
eightButton.onclick = () => clearBoth()

const nineButton = document.querySelector(".nine")
nineButton.onclick = () => clearBoth()

const plusButton = document.querySelector(".add")
plusButton.onclick = () => clearBoth()


const subractButton = document.querySelector(".subtract")
subractButton.onclick = () => clearBoth()


const multiplyButton = document.querySelector(".multiply")
multiplyButton.onclick = () => clearBoth()


const divideButton = document.querySelector(".divide")
divideButton.onclick = () => clearBoth()


const decimalButton = document.querySelector(".decimal")
decimalButton.onclick = () => clearBoth()

const equalsButton = document.querySelector(".equals")
equalsButton.onclick = () => clearBoth()


const onButton = document.querySelector(".on")
onButton.onclick = () => clearBoth()


const offButton = document.querySelector(".off")
offButton.onclick = () => clearBoth()


// const testButtons = document.querySelectorAll("button")
// testButtons.forEach((button) => {
    
//     button.addEventListener("click", () => {
//         alert(button.textContent)
//     })

// })