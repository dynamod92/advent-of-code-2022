const syncReadFile = require('../utils/filereader')

const theirPlay = {
    'A': 'ROCK',
    'B': 'PAPER',
    'C': 'SCISSORS'
} 

const myPlay = {
    'X': 'ROCK',
    'Y': 'PAPER',
    'Z': 'SCISSORS'
} 

const points = {
    'ROCK': 1,
    'PAPER': 2,
    'SCISSORS': 3,
    'LOSS': 0,
    'DRAW': 3,
    'WIN': 6,
}

const plays = syncReadFile('./input.txt');

let myTotalScore = 0;
let theirTotalScore = 0;

plays.map(play => {
    const [ theirs, mine ] = play.split(" ")

    const theirPlayName = theirPlay[theirs]
    const myPlayName = myPlay[mine]

    const theirScore = points[theirPlayName]
    const myScore = points[myPlayName]

    const loopbackWin = Object.keys(theirPlay).length - 1 

    myTotalScore += myScore
    theirTotalScore += theirScore


    if(theirScore - myScore == loopbackWin ) { // I won
        myTotalScore += points['WIN']
        console.log({theirPlayName, myPlayName, scoreDiff: theirScore - myScore, outcome: '🥳'   })
    }
    else if(myScore - theirScore == loopbackWin ) { // they won
        theirTotalScore += points['WIN']
        console.log({theirPlayName, myPlayName, scoreDiff: myScore - theirScore, outcome: '😭'   })
    }
    else if(myScore > theirScore) { // 1 won
        myTotalScore += points['WIN']
        console.log({theirPlayName, myPlayName, scoreDiff: myScore - theirScore, outcome: '🥳'   })
    }
    else if(theirScore > myScore ) {// they won
        theirTotalScore += points['WIN']
        console.log({theirPlayName, myPlayName, scoreDiff: theirScore - myScore, outcome: '😭'   })
    }
    else if( theirScore - myScore == 0) { // draw
        theirTotalScore += points['DRAW']
        myTotalScore += points['DRAW']
        console.log({theirPlayName, myPlayName, scoreDiff: theirScore - myScore, outcome: '⚖️'  })
    }

})
console.log({myTotalScore, theirTotalScore})

