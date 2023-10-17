function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 3) {
        return pin
    }
    else{
        return getPin();
    }
} 

function generatePin() {
    const random = Math.round(Math.random()*100)
    return random;
}

// calculator add
document.getElementById('calculator').addEventListener('click', function (even) {
    // console.log(even.target); full Element show 
    const number = even.target.innerText;
    const typeNumberField = document.getElementById('type-numbers');
    const previousTypeNumber = typeNumberField.value;
    if (isNaN (number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        }
        else if (number === '<') {
            const degits = previousTypeNumber.split('');
            degits.pop();
            const remainingDegits = degits.join('');
            typeNumberField.value = remainingDegits;

        }
    }
    else{
        const newTypeNumber = previousTypeNumber + number
        typeNumberField.value = newTypeNumber;
    }
    
    console.log(); // only element er valu show
})           