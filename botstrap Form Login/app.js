let $ = document

let userNameInput = $.querySelector('.userNameInput')
let passwordInput = $.querySelector('.passwordInput')
let emailInput = $.querySelector('.emailEnput')
let fileInput = $.querySelector('.fileinput')
let countryInput = $.querySelector('.countryInput')
let cityInput = $.querySelector('.cityInput')
let select_box = $.querySelector('.select-box')

userNameInput.addEventListener('input', function () {
    let regexUserName = /^[\w\.]{8,20}$/g
    checkInput(regexUserName, userNameInput)
})

passwordInput.addEventListener('input', function () {
    let regexPassword = /^[\w.!@#$%^&*_+}{|=\-`!٬٫٪×،*)(ـ؛:؟</>~<"';\]\[]{8,50}$/g
    checkInput(regexPassword, passwordInput)
})

emailInput.addEventListener('input', function () {
    let regexEmail = /[\w\.]+@\w+\.\w{2,3}/g
    checkInput(regexEmail, emailInput)
})

fileInput.addEventListener('change' , function () {
    let regexFile = /(.jpg|.jpeg|.png)$/g
    checkInput(regexFile, fileInput)
})

countryInput.addEventListener('input', function () {
    let regexUserName = /^\w+$/g
    checkInput(regexUserName, countryInput)
})

cityInput.addEventListener('input', function () {
    let regexUserName = /^\w+$/g
    checkInput(regexUserName, cityInput)
})

function checkInput (regex , element){
    let inputValue = element.value
    let checkNameInput = regex.test(inputValue)
    console.log('yes')
    if (checkNameInput && inputValue.length > 1) {
        element.classList.add('is-valid')
        element.classList.remove('is-invalid')
    } else {
        element.classList.add('is-invalid')
        element.classList.remove('is-valid')
    }
}