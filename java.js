let result = ''
let currentValue = ''
const displayContainer = document.querySelector(".displayContainer")
const display = document.querySelector(".display")
const numbers = document.querySelectorAll(".show")
let numbersAfter = ''
let numbersBefore = ''
let operator = ''
let displayValue = result 



// Operations
const add = (a,b) => result = a + b ; 
const subtract = (a,b) => result = a - b ; 
const multiply = (a,b) => result = a * b ;
const divide = (a,b) => result = a / b ;


//Operation function
const operation = function(a, operator, b) {
    
    if (operator == "+") {
        add(a,b)
        displayValue = result
        return displayValue


    }
    else if (operator == "-") {
        subtract(a,b)
        displayValue = result
        return displayValue
    }
    else if (operator == "*") {
        multiply(a,b)
        displayValue = result
        return displayValue
    }
    else if (operator == "/") {
        divide(a,b)
        displayValue = result
        return displayValue
    } else {
        return "INVALID OPERATOR"
    }

}


// Clear functions
let clearDisplay = function(){
    display.textContent = 0
    displayValue = ""
}



let clearBoth = function(){
    clearDisplay()
}

//Update display

let newDisplayValue = function(){
    display.textContent = displayValue
}



let refresh = function(){
    newDisplayValue()
}


//Add to display string 

let continueString = function() {
    displayValue = displayValue + currentValue
    refresh()
}

// Split up string to operate
let splitUpString = function(x) {    
    

    if (x.includes("+")) {
    let split = x.split("+")
    console.log(split)
    numbersBefore = parseFloat(split[0])
    numbersAfter = parseFloat(split[1])
    operator = "+" 
    
    } else if (x.includes("-")) {
        let split = x.split("-")
        console.log(split)
        numbersBefore = parseInt(split[0])
        numbersAfter = parseInt(split[1])        
        operator = "-"
    } else if (x.includes("*")) {
            let split = x.split("*")
            console.log(split)
            numbersBefore = parseInt(split[0])
            numbersAfter = parseInt(split[1])            
            operator = "*"
    } else if (x.includes("/")) {
                let split = x.split("/")
                console.log(split)
                numbersBefore = parseInt(split[0])
                numbersAfter = parseInt(split[1])
                if (numbersAfter == 0) {
                    alert("NO! NO DIVING BY ZERO!")
                    return numbersAfter = 1
                } 
                operator = "/"

}

}

//Go back (delete last digit)

const back = function () {
    let input = display.textContent
    displayValue = input.slice(0, -1)
    return displayValue
}







//Button events 

const button = document.querySelectorAll("button")
button.forEach((butt) => {
    butt.addEventListener("mouseover", function handleMouseOver() {
        butt.style.background = "#885292"
    })

    butt.addEventListener("mouseout", function handleMouseOut() {
        butt.style.background = ""
    })
})





const clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", () => { 
    clearBoth()
    decimalButton.disabled = false

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
    if (displayValue.includes("+") || displayValue.includes("-")|| displayValue.includes("*")|| displayValue.includes("/")){
        splitUpString(displayValue)
        operation(numbersBefore, operator, numbersAfter)
        refresh()
    }
    continueString()
    decimalButton.disabled = false

})


const subractButton = document.querySelector(".subtract")
subractButton.addEventListener("click", () => { 
    currentValue = "-"
    continueString()
    decimalButton.disabled = false

})


const multiplyButton = document.querySelector(".multiply")
multiplyButton.addEventListener("click", () => { 
    currentValue = "*"
    continueString()
    decimalButton.disabled = false

})


const divideButton = document.querySelector(".divide")
divideButton.addEventListener("click", () => { 
    currentValue = "/"
    continueString()
    decimalButton.disabled = false


})


const decimalButton = document.querySelector(".decimal")
decimalButton.addEventListener("click", () => { 
    currentValue = "."
    continueString()
    //disable point button if number already has decimal
    decimalButton.disabled = true
    

})

const equalsButton = document.querySelector(".equals")
equalsButton.addEventListener("click", () => {
                            splitUpString(displayValue)
                            operation(numbersBefore, operator, numbersAfter)
                            refresh()
                        })   
                          

const onButton = document.querySelector(".on")
onButton.addEventListener("click", () => { 
})


const backButton = document.querySelector(".back")
backButton.addEventListener("click", () => {
    back()
    refresh()
})



