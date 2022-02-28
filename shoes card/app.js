let $ = document

let color = $.querySelectorAll('.color')
let addButton = $.querySelector('a')
let image = $.querySelector('img')
let blueitem = $.querySelector('.blueitem')

blueitem.classList.add('active')

color.forEach( (item) => {
    item.addEventListener('click' , function (e) {
        let activeElem = $.querySelector('.active')
        activeElem.classList.remove('active')
    
        item.classList.add('active')
        
        let colorClicked = e.target.dataset.color
        let imageClicked = e.target.dataset.pic
        
        addButton.style.backgroundColor = colorClicked
        document.body.style.backgroundColor = colorClicked

        image.setAttribute('src' , imageClicked)
    })
})