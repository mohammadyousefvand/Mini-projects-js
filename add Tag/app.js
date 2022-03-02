let $ = document

let main = $.querySelector('.main')
let removeAll = $.querySelector('.remove')
let inputElem = $.querySelector('input')
let counter = $.querySelector('.count')

let tags = ['برنامه نویسی' , 'جاوا اسکریپت']
let maxTag = 8
countHandler()
generatorTags()

console.log(counter)

function countHandler () {
    inputElem.focus()
    counter.innerHTML = maxTag - tags.length
}

function generatorTags () {
    main.querySelectorAll('li').forEach((li) => li.remove())
    let tagsTemplate
    tags.reverse().forEach( (tag) => {
        tagsTemplate = `<li><span class="fa fa-remove" onclick="removeItem(this , '${tag}')"></span>${tag}</li>`
        main.insertAdjacentHTML('afterbegin' , tagsTemplate)
    })
}

function removeItem (elem , tag) {
    let tagRemove = tags.findIndex((tag) => {
        return tag
    })
    tags.splice(tagRemove , 1)
    elem.parentElement.remove()
    countHandler()
}

function removeAllHandler () {
    tags = []
    generatorTags(tags)
    countHandler()
}

function addTagHandler (e) {
    if (e.key === 'Enter'){
        let tagItem = e.target.value.replace(/\s+/g , ' ')
        if (tagItem.length > 1 && !tags.includes(tagItem)) {
            if(tags.length < 8) {
                tags.push(tagItem)
                generatorTags()
                countHandler()
            }
        }
        e.target.value = ''
    }
}

inputElem.addEventListener('keyup' , addTagHandler)
removeAll.addEventListener('click' , removeAllHandler)


