let $ = document

let btnCreateCapcha = $.querySelector('.btn-new')
let codeText = $.querySelector('.code')
let rightMessage = $.querySelector('.right')
let errorMessage = $.querySelector('.error')
let checkCapchaButton = $.querySelector('.check-btn')
let inputElem = $.querySelector('input')

let capchaText = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'

let capchaArray = capchaText.split('').sort(() => {
    return Math.random() - 0.5
})

function generateCapchaCode() {
    let wordsCapcha = ''
    let randomGenerate = 0

    for (let i = 0; i < 5; i++) {
        randomGenerate = Math.floor(Math.random() * capchaArray.length)
        wordsCapcha += capchaArray[randomGenerate]
    }
    codeText.innerHTML = wordsCapcha
}

function checkCapchaCode(capcha, value) {
    console.log(capcha)
    console.log(value)
    if (capcha === value) {
        rightMessage.classList.add('show-massage')
        $.body.classList.add('right-code')
    } else {
        errorMessage.classList.add('show-massage')
        $.body.classList.add('pointer')
        $.body.classList.add('error-code')
    }
    setTimeout(() => {
        resetCapchaCode()
    }, 3000)
}

function resetCapchaCode() {
    $.body.classList.remove('pointer')
    $.body.classList.remove('right-code')
    $.body.classList.remove('error-code')
    inputElem.value = ''
    errorMessage.classList.remove('show-massage')
    rightMessage.classList.remove('show-massage')
    generateCapchaCode()
}

checkCapchaButton.addEventListener('click', function () {
    let inputValue = inputElem.value
    checkCapchaCode(codeText.innerHTML, inputValue)
})

window.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault()
        let inputValue = inputElem.value
        checkCapchaCode(codeText.innerHTML, inputValue)
    }
})

btnCreateCapcha.addEventListener('click', generateCapchaCode)
generateCapchaCode()