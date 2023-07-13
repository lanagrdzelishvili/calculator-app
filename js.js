class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch(this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case 'x':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if(isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0 })
        }
        if(decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = 
        this.getDisplayNumber(this.currentOperand)
        if(this.operation != null) {
            this.previousOperandTextElement.innerText = 
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const deletenButtons = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButtons.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButtons.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deletenButtons.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})


const themeNumbers = document.querySelectorAll('.theme-numbers p');

function changeTheme(theme) {
    const root = document.documentElement;

    if (theme === '1') {
        root.style.setProperty('--first-bg', 'hsl(222, 26%, 31%)');
        root.style.setProperty('--kaypad-bg', 'hsl(223, 31%, 20%)');
        root.style.setProperty('--screen-bg', 'hsl(224, 36%, 15%)');
        root.style.setProperty('--key-bg', 'hsl(225, 21%, 49%)');
        root.style.setProperty('--key-shadow', 'hsl(224, 28%, 35%)');
        root.style.setProperty('--key-toggle', 'hsl(6, 63%, 50%)');
        root.style.setProperty('--key-shadow-red', 'hsl(6, 70%, 34%)');
        root.style.setProperty('--key-bg-light', 'hsl(30, 25%, 89%)');
        root.style.setProperty('--key-Grayish-orange', 'hsl(28, 16%, 65%)');
        root.style.setProperty('--Very-dark-grayish-blue', 'hsl(221, 14%, 31%)');
        root.style.setProperty('--White', 'hsl(0, 0%, 100%)');
        document.getElementById('calc').style.color = 'white'
        document.getElementById('th').style.color = 'white'
        document.getElementById('current-operand').style.color = 'white'
        document.querySelectorAll('.theme-numbers p').forEach(element => {
            element.style.color = 'white'
        });
    } else if (theme === '2') {
        root.style.setProperty('--first-bg', 'hsl(0, 0%, 90%)');
        root.style.setProperty('--kaypad-bg', 'hsl(0, 5%, 81%)');
        root.style.setProperty('--screen-bg', 'hsl(35, 11%, 81%)');
        root.style.setProperty('--key-bg', 'hsl(185, 42%, 37%)');
        root.style.setProperty('--key-shadow', 'hsl(185, 58%, 25%)');
        root.style.setProperty('--key-toggle', 'hsl(25, 98%, 40%)');
        root.style.setProperty('--key-shadow-red', 'hsl(25, 99%, 27%)');
        root.style.setProperty('--key-bg-light', 'hsl(45, 7%, 89%)');
        root.style.setProperty('--key-Grayish-orange', 'hsl(35, 11%, 61%)');
        root.style.setProperty('--Very-dark-grayish-blue', 'hsl(60, 10%, 19%)');
        root.style.setProperty('--White', 'hsl(0, 0%, 100%)');
        document.getElementById('calc').style.color = 'black'
        document.getElementById('th').style.color = 'black'
        document.getElementById('current-operand').style.color = 'black'
        document.querySelectorAll('.theme-numbers p').forEach(element => {
            element.style.color = 'black'
        });
    } else if (theme === '3') {
        root.style.setProperty('--first-bg', 'hsl(268, 75%, 9%)');
        root.style.setProperty('--kaypad-bg', 'hsl(268, 71%, 12%)');
        root.style.setProperty('--screen-bg', 'hsl(268, 71%, 12%)');
        root.style.setProperty('--key-bg', 'hsl(281, 89%, 26%)');
        root.style.setProperty('--key-shadow', 'hsl(285, 91%, 52%)');
        root.style.setProperty('--key-toggle', 'hsl(177, 92%, 70%)');
        root.style.setProperty('--key-shadow-red', 'hsl(268, 47%, 21%)');
        root.style.setProperty('--key-bg-light', 'hsl(268, 47%, 21%)');
        root.style.setProperty('--key-Grayish-orange', 'hsl(290, 70%, 36%)');
        root.style.setProperty('--Very-dark-grayish-blue', 'hsl(52, 100%, 62%)');
        root.style.setProperty('--White', 'hsl(0, 0%, 100%)');
        document.getElementById('calc').style.color = 'hsl(52, 100%, 62%)'
        document.getElementById('th').style.color = 'hsl(52, 100%, 62%)'
        document.getElementById('current-operand').style.color = 'hsl(52, 100%, 62%)'
        document.querySelectorAll('.theme-numbers p').forEach(element => {
            element.style.color = 'hsl(52, 100%, 62%)'
        });
    }
}

themeNumbers.forEach((themeNumber, index) => {
    themeNumber.addEventListener('click', () => {
        const selectedTheme = index + 1;
        changeTheme(selectedTheme.toString());
    });
});

const rangeInput = document.getElementById('rangeInput');

rangeInput.addEventListener('input', () => {
    const selectedTheme = rangeInput.value;
    changeTheme(selectedTheme);
});
