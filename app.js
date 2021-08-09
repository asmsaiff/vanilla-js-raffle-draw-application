const inputNames        = document.getElementById('names')
const form              = document.getElementById('form')
const nameList          = document.getElementById('nameList')
const spinBtn           = document.getElementById('spin-a-try')

const participants = []

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let newNames = inputNames.value.split(', ')

    if(newNames[0] !== '') {
        newNames.forEach(name => {
            participants.push(name)
            let item = createListItem(name)
            nameList.appendChild(item)
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

spinBtn.addEventListener('click', () => {
    if(participants.length === 0) {
        alert('No participants!')
    }
})

function shuffle(args) {
    let shuffledArr = [...args]

    for(let i = shuffledArr.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1))

        let temp = shuffledArr[rand]
        shuffledArr[rand] = shuffledArr[i]
        shuffledArr[i] = temp
    }

    return shuffledArr
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));