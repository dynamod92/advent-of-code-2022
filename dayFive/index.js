const { Console } = require('console');
const syncReadFile = require('../utils/filereader')

const input = syncReadFile('./input.txt');


const getCrateInfo = (rows) => {
    let crates = []

    let foundCrateNumbers = false
    rows.every(row => {
        row = `${row} `
        console.log(row.split("[").join("").split("] ").join("").split("    ").join("?").split(""))

        crates.push(row.split("[").join("").split("] ").join("").split("    ").join("?").split(""))

        if(!foundCrateNumbers){
            const numberRow = row.split(" ").join("").split("  ")
            const isNumberRow = !isNaN(numberRow)

            if(isNumberRow){
                foundCrateNumbers = true

                nums = numberRow
                console.log(crates)
                return false
            }
            
        }
        return true
            
    })

    return [true, true]
}

    const [ crates, directions ] = getCrateInfo(input)
    
