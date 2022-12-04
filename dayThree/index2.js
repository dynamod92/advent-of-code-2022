const syncReadFile = require('../utils/filereader')

const inventory = syncReadFile('./input.txt');

const alphabetLowercase = 'abcdefghijklmnopqrstuvwxyz'
const alphabetUppercase = alphabetLowercase.toUpperCase().split("")
const priorityList = [...alphabetLowercase, ...alphabetUppercase]

let prioritySum = 0;

const groups = {}

let batchSize = 3

inventory.map((item) => {
    let count = 0
    if( count = batchSize)
    {
        groups[i + 1] = 'new group'
    }

    const characters = item.split("")

    const groupItemMap = {}
    const inAll = {}

    //split list in half
    characters.slice(0, item.length / 2).map(c => compartmentOneMap[c] = priorityList.indexOf(c) + 1)

    // map over second compartment of characters
    characters.slice(item.length / 2).map(c => {
        // if thing == thingTwo
        const sharedItem = compartmentOneMap[c]

        if (sharedItem && !inBoth[c]) {
            // add that value to the total priority score
            prioritySum += sharedItem
            inBoth[c] = c
        }
    })
})

console.log(prioritySum)