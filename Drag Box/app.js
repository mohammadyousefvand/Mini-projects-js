let $ = document

let container = $.querySelector('.container')
let header = $.querySelector('header')


function dragHandler ({movementX , movementY}){
    let boxStyle = getComputedStyle(container)
    let boxTop = parseInt(boxStyle.top)
    let boxLeft = parseInt(boxStyle.left)

    container.style.top = `${boxTop + movementY}px`
    container.style.left = `${boxLeft + movementX}px`
}


header.onmousedown = (e) => {
    header.classList.add('click')
    header.addEventListener('mousemove' , dragHandler)
}

document.onmouseup = () => {
    header.classList.remove('click')
    header.removeEventListener('mousemove' , dragHandler)
}