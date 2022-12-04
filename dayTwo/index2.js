const { readFileSync } = require('fs');

const possiblePlays = {
    'A': 'ROCK',
    'B': 'PAPER',
    'C': 'SCISSORS'
} 

const playsArray = Object.keys(possiblePlays)
console.log({playsArray})

const loopbackWin = playsArray.length -1

const myStrategies = {
    'X': 'LOSS',
    'Y': 'DRAW',
    'Z': 'WIN'
} 

const outcomes = {
    'LOSS': (theirPlay) => {
        var theirIndex = playsArray.indexOf(theirPlay) 
        let myIndex = theirIndex - 1

        if(myIndex == 3)
            myIndex = 1
        if(myIndex == -1)
            myIndex = 2

            console.log(theirIndex  % loopbackWin)

        const myPlay =  Object.keys(possiblePlays)[myIndex]
        return possiblePlays[myPlay]
    },
    'DRAW': (theirPlay) => possiblePlays[theirPlay],
    'WIN': (theirPlay) => {
        var theirIndex = playsArray.indexOf(theirPlay) 
        let myIndex = theirIndex +1

        if(myIndex == 3)
            myIndex = 0
        if(myIndex == -1)
            myIndex = 0

            console.log(theirIndex % loopbackWin)


        const myPlay =  Object.keys(possiblePlays)[ myIndex]
        return possiblePlays[myPlay]
    }
} 

const points = {
    'ROCK': 1,
    'PAPER': 2,
    'SCISSORS': 3,
    'LOSS': 0,
    'DRAW': 3,
    'WIN': 6,
}



const strategyGuide = readFileSync('input.txt', 'utf-8');

const plays = strategyGuide.split(/\r?\n/);

let myTotalScore = 0;
let theirTotalScore = 0;

plays.map(play => {
    const [ theirs, mine ] = play.split(" ")

    // get their action
    const theirPlayName = possiblePlays[theirs]

    // should I win, lose, or draw?
    const myStrategy = myStrategies[mine]

    // get the correct play item
    const myPlayName = outcomes[myStrategy](theirs)
    console.log({myStrategy, myPlayName, theirPlayName})
    
    // track where the hierarchy resets
    const loopbackWin = Object.keys(possiblePlays).length - 1 
    
    // track my score
    const myScore = points[myPlayName]
    myTotalScore += myScore

    // Track their score
    const theirScore = points[theirPlayName]
    theirTotalScore += theirScore


    if(theirScore - myScore == loopbackWin ) { // I won
        myTotalScore += points['WIN']
        // console.log({theirPlayName, myPlayName, scoreDiff: theirScore - myScore, outcome: 'WIN'   })
    }
    else if(myScore - theirScore == loopbackWin ) { // they won
        theirTotalScore += points['WIN']
        // console.log({theirPlayName, myPlayName, scoreDiff: myScore - theirScore, outcome: 'LOSS'   })
    }
    else if(myScore > theirScore) { // 1 won
        myTotalScore += points['WIN']
        // console.log({theirPlayName, myPlayName, scoreDiff: myScore - theirScore, outcome: 'WIN'   })
    }
    else if(theirScore > myScore ) {// they won
        theirTotalScore += points['WIN']
        // console.log({theirPlayName, myPlayName, scoreDiff: theirScore - myScore, outcome: 'LOSS'   })
    }
    else if( theirScore - myScore == 0) { // draw
        theirTotalScore += points['DRAW']
        myTotalScore += points['DRAW']
        // console.log({theirPlayName, myPlayName, scoreDiff: theirScore - myScore, outcome: 'DRAW'  })
    }

})
console.log({myTotalScore, theirTotalScore})

