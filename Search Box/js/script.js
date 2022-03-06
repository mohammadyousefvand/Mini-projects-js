let $ = document

let inputElem = $.querySelector('input')
let container = $.querySelector('.search-input')
let itemBox = $.querySelector('.autocom-box')

inputElem.addEventListener('keyup', function () {
    let inputValue = inputElem.value.trim()
    if (inputValue) {
        searchInDataBase(inputValue)
    } else {
        container.classList.remove('active')
    }
})

function searchInDataBase(value) {

    let resultSearch = suggestions.filter((item) => {
        return item.toLowerCase().startsWith(value.toLowerCase())
    })

    container.classList.add('active') 
    if (resultSearch.length) {

        let templateItem
        templateItem = resultSearch.map((item) => {
            return `<li>${item}</li>`
        })
        itemBox.innerHTML = templateItem.join('')

    } else {
        templateItem = `<li>${value}</li>`
        itemBox.innerHTML = templateItem
    }
    clickItemHandler()
}

function clickItemHandler() {
    let liElem = $.querySelectorAll('li')

    liElem.forEach((li) => {
        li.addEventListener('click', function (e) {
            let itemContent = e.target.innerHTML
            inputElem.value = itemContent
            container.classList.remove('active')
            console.log('click')
        })
    })
}