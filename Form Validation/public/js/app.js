let $ = document

let eye_icon = $.querySelector('.eye_icon')
let submitButtun = $.querySelector('.submit')
let passwordInput = $.querySelector('.inputPass')
let nameInput = $.querySelector('.name')
let familyInput = $.querySelector('.family')
let numberPhone = $.querySelector('.numberPhone')
let emailInput = $.querySelector('.email')
let userNameInput = $.querySelector('.userName')
let dayInput = $.querySelector('.dayinput')
let monthInput = $.querySelector('.monthinput')
let yearInput = $.querySelector('.yearinput')

let showPassword = false

eye_icon.addEventListener('click', function () {
    if (!showPassword) {
        eye_icon.className = 'fa fa-eye'
        passwordInput.type = 'text'
        showPassword = true
    } else {
        eye_icon.className = 'fa fa-eye-slash'
        passwordInput.type = 'password'
        showPassword = false
    }
})

nameInput.addEventListener('input', function () {
    let regexName = /[ا-ی ]{2,10}/g
    let messageName = $.querySelector('.eror-name')
    checkInput(regexName, nameInput, messageName)
})

familyInput.addEventListener('input', function () {
    let regexFamily = /^[ا-ی ]{3,15}$/g
    let messageFamily = $.querySelector('.eror-family')
    checkInput(regexFamily, familyInput, messageFamily)
})

numberPhone.addEventListener('input', function () {
    let regexNumber = /^09(1[0-9]|9[0-4]|3[0-9]|0[1-5]|4[1]|2[0-2])\d{3}\d{4}$/g
    let messageNumber = $.querySelector('.eror-number')
    checkInput(regexNumber, numberPhone, messageNumber)
})

emailInput.addEventListener('input', function () {
    let regexEmail = /[\w\.]+@\w+\.\w{2,3}/g
    let messageEmail = $.querySelector('.eror-mail')
    checkInput(regexEmail, emailInput, messageEmail)
})

userNameInput.addEventListener('input', function () {
    let regexUserName = /^[\w\.]{8,20}$/g
    let messageUserName = $.querySelector('.eror-username')
    checkInput(regexUserName, userNameInput, messageUserName)
})

passwordInput.addEventListener('input', function () {
    let regexPassword = /^[\w.!@#$%^&*_+}{|=\-`!٬٫٪×،*)(ـ؛:؟</>~<"';\]\[]{8,50}$/g
    let messagePassword = $.querySelector('.eror-password')
    checkInput(regexPassword, passwordInput, messagePassword)
})

dayInput.addEventListener('input', function () {
    let regexDay = /^(0[1-9]|[12][0-9]|3[01])$/g
    let messageDay = $.querySelector('.eror-day')
    checkInput(regexDay, dayInput, messageDay)
})


monthInput.addEventListener('input', function () {
    let regexMonth = /^(0[1-9]|1[012])$/g
    let messageMonth = $.querySelector('.eror-mouth')
    checkInput(regexMonth, monthInput, messageMonth)
})

yearInput.addEventListener('input', function () {
    let regexYear = /^1[234]\d{2}$/g
    let messageYear = $.querySelector('.eror-year')
    checkInput(regexYear, yearInput, messageYear)
})

function checkInput(reg, inputElem, message) {

    let inputValue = inputElem.value
    let checkNameInput = reg.test(inputValue)
    if (checkNameInput && inputValue.length > 1) {
        inputElem.classList.add('curectInput')
        message.classList.remove('show-massage')
        inputElem.classList.remove('errorInput')
    } else {
        inputElem.classList.remove('curectInput')
        inputElem.classList.add('errorInput')
        message.classList.add('show-massage')
    }
}

submitButtun.addEventListener('click', function (e) {
    e.preventDefault()
})