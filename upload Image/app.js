let $ = document

let inputFile = $.querySelector('input')
let dropBox = $.querySelector('.dropBox')
let buttunFile = $.querySelector('button')
let title = $.querySelector('h3')
let file

function readFileHandler() {
    let typeFile = file.type
    let validType = ['image/jpg', 'image/jpeg', 'image/png']
    if (validType.includes(typeFile)) {
        let fileReader = new FileReader()
        fileReader.onload = () => {
            let imgUrl = fileReader.result
            let imgTag = `<img src="${imgUrl}">`

            dropBox.innerHTML = imgTag
        }
        fileReader.readAsDataURL(file)
    } else {
        Swal.fire(
            'Not Valid',
            'Suppoeted formats jpeg / jpg / png',
            'error'
          )
        dropBox.classList.remove('active')
        title.innerHTML = 'Drag & Drop to Upload File'
    }
}

buttunFile.addEventListener('click', function () {
    inputFile.click()
})

inputFile.addEventListener('change', function () {
    file = this.files[0]
    dropBox.classList.add('active')
    title.innerHTML = 'Release to Upload File'
    readFileHandler()
})

dropBox.addEventListener('dragover', function (e) {
    e.preventDefault()
    dropBox.classList.add('active')
    title.innerHTML = 'Release to Upload File'
})

dropBox.addEventListener('dragleave', function () {
    dropBox.classList.remove('active')
    title.innerHTML = 'Drag & Drop to Upload File'
})

dropBox.addEventListener('drop', function (e) {
    e.preventDefault()
    file = e.dataTransfer.files[0]
    readFileHandler()
})