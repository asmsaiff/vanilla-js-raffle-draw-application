const inputNames        = document.getElementById('names')
const form              = document.getElementById('form')
const nameList          = document.getElementById('nameList')
const spinBtn           = document.getElementById('spin-a-try')
const display           = document.getElementById('display')
const firstPosition     = document.getElementById('firstPosition')
const secondPosition    = document.getElementById('secondPosition')
const thirdPosition     = document.getElementById('thirdPosition')

const participants = []

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(inputNames.value === '') {
        alert('Please input names!')
    } else {
        let newNames = inputNames.value.split(', ')

        if(newNames[0] !== '') {
            newNames.forEach(name => {
                participants.push(name)
                let item = createListItem(name)
                nameList.appendChild(item)
                inputNames.value = ''
            })
        }
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
    } else {
        let shuffledNames = shuffle(participants)

        for(let i = 1; i < shuffledNames.length; i++) {
            ((i, count) => {
                setTimeout(() => {
                    let rand = Math.floor(Math.random() * (shuffledNames.length))
                    display.innerHTML = shuffledNames[rand]

                    if(count === shuffledNames.length -1) {
                        if(!firstPosition.innerHTML) {
                            firstPosition.innerHTML = shuffledNames[rand]
                            let index = participants.indexOf(shuffledNames[rand])
                            participants.splice(index, 1)
                        } else if(!secondPosition.innerHTML) {
                            secondPosition.innerHTML = shuffledNames[rand]
                            let index = participants.indexOf(shuffledNames[rand])
                            participants.splice(index, 1)
                        } else if(!thirdPosition.innerHTML) {
                            thirdPosition.innerHTML = shuffledNames[rand]
                            let index = participants.indexOf(shuffledNames[rand])
                            participants.splice(index, 1)

                            alert('Raffle draw is completed')
                        } else {
                            return
                        }
                    }
                }, i)
            })(i * 100, i)
        }
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