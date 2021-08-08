const inputNames = document.getElementById('names')
const form = document.getElementById('form')
const nameList = document.getElementById('nameList')

const participants = []

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let newNames = inputNames.value.split(', ')

    if(newNames[0] !== '') {
        newNames.forEach(name => {
            participants.push(name)
            let item = createListItem(name)
            nameList.appendChild(item)
            console.log(participants);
            inputNames.value = ''
        })
    }
})

function createListItem(name) {
    const listItem = document.createElement('span')
    listItem.classList = 'px-2 py-1 border rounded-sm bg-gray-50'
    listItem.innerHTML = name

    return listItem
}