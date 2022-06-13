let result = ''
let memory = '';
let currentValue = ''
const displayContainer = document.querySelector(".displayContainer")
const display = document.querySelector(".display")
const memoryDisplay = document.querySelector(".memory")
const memoryValue = document.querySelector(".memory")
const numbers = document.querySelectorAll(".show")




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
    display.textContent = 0
    displayValue = "0"
}

let clearMemory = function() {
    memoryValue.textContent = 0
}

let clearBoth = function(){
    clearDisplay()
    clearMemory()

}

//Update display

let newDisplayValue = function(){
    display.textContent = displayValue
}

//Update memory

let newMemoryValue = function() {
    memoryValue.textContent = memory
    
}


let refresh = function(){
    newDisplayValue()
    newMemoryValue()
}


// Number Functions

// Get number when button clicked 

// let number = function() {
//     const numbers = document.querySelectorAll(".show")
//     numbers.forEach((number) => {
//         number.addEventListener("click", () => {
//             currentValue = number.textContent
//             alert(currentValue)
//         })
        
//     })

// }

// let number = function() {
//     numbers.forEach((number) => {
//             x = number.textContent
//         })
        
// }


//Add to display string 

let continueString = function() {
    displayValue = displayValue + currentValue
    refresh()
}


//Button events 


const clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", () => { clearBoth()
})

const zeroButton = document.querySelector(".zero")
zeroButton.addEventListener("click", () => { 
    currentValue = "0"
    continueString()
})

const oneButton = document.querySelector(".one")
oneButton.addEventListener("click", () => { 
    currentValue = "1" 
    continueString()


})

const twoButton = document.querySelector(".two")
twoButton.addEventListener("click", () => { 
    currentValue = "2"
    continueString()
})

const threeButton = document.querySelector(".three")
threeButton.addEventListener("click", () => { 
    currentValue = "3"
    continueString()

})

const fourButton = document.querySelector(".four")
fourButton.addEventListener("click", () => { 
    currentValue = "4"
    continueString()

})

const fiveButton = document.querySelector(".five")
fiveButton.addEventListener("click", () => { 
    currentValue = "5"
    continueString()

})

const sixButton = document.querySelector(".six")
sixButton.addEventListener("click", () => { 
    currentValue = "6"
    continueString()

})

const sevenButton = document.querySelector(".seven")
sevenButton.addEventListener("click", () => { 
    currentValue = "7"
    continueString()

})

const eightButton = document.querySelector(".eight")
eightButton.addEventListener("click", () => { 
    currentValue = "8"
    continueString()

})

const nineButton = document.querySelector(".nine")
nineButton.addEventListener("click", () => { 
    currentValue = "9"
    continueString()

})

const plusButton = document.querySelector(".add")
plusButton.addEventListener("click", () => { 
    currentValue = "+"
    continueString()

})


const subractButton = document.querySelector(".subtract")
subractButton.addEventListener("click", () => { 
    currentValue = "-"
    continueString()

})


const multiplyButton = document.querySelector(".multiply")
multiplyButton.addEventListener("click", () => { 
    currentValue = "*"
    continueString()
})


const divideButton = document.querySelector(".divide")
divideButton.addEventListener("click", () => { 
    currentValue = "/"
    continueString()

})


const decimalButton = document.querySelector(".decimal")
decimalButton.addEventListener("click", () => { 
    currentValue = "."
    continueString()

})

const equalsButton = document.querySelector(".equals")
equalsButton.addEventListener("click", () => {newDisplayValue()
                             newMemoryValue()   
                             memory = result
})

const onButton = document.querySelector(".on")
onButton.addEventListener("click", () => { 
    continueString()

})


const offButton = document.querySelector(".off")
offButton.addEventListener("click", () => { 
    continueString()

})


// const testButtons = document.querySelectorAll("button")
// testButtons.forEach((button) => {
    
//     button.addEventListener("click", () => {
//         alert(button.textContent)
//     })

// })




/*
1. click a button (1)
2. store what they clicked (1)
3. display what they clicked (1)
3. click another button (2)
4. store what they clicked + what they clicked  (12)
5. display (12)



*/ 