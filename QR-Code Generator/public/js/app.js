let $ = document

let inputElem = $.getElementById('inputQr')
let qrButton = $.getElementById('qrButton')
let qrImage = $.getElementById('qrImage')
let containerQR = $.getElementById('containerQR')

function getValue () {
    console.log('click')
    let inputValue = inputElem.value
    if (inputValue) {
        generateQrCode(inputValue)
    }
}

function generateQrCode (value) {
    qrImage.setAttribute('src' , `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`)
    qrImage.onload = () => {
        containerQR.classList.remove('hidden')
        qrButton.innerHTML = 'Generating QR Code...'
    }  
}

qrButton.addEventListener('click' , getValue)
window.addEventListener('keydown' , function (e) {
    if (e.keyCode == 13){
        e.preventDefault()
        getValue()
    }
})