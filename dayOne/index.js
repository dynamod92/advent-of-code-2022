const syncReadFile = require('../utils/filereader')

const calories = syncReadFile('./input.txt');

  const sums = {}
  let count = 0

  calories.map(( amount ) => {
    if(amount == "")
     ++count
    else if (sums[count] != undefined)
     sums[count] += parseInt(amount)
    else 
     sums[count] = parseInt(amount)
   })

  const values =  Object.values(sums).map(entry => entry)
  const [first, second, third] = values.sort().reverse().splice(0,3)

  console.log({ first, second, third})
  console.log({total: first + second + third})

  return calories;


syncReadFile('./input.txt');

