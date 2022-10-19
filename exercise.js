function computerSelection() {
    const CpPick = Math.floor(Math.random() * 3)
    if (CpPick === 0) {
        return "Rock";
    } else if (CpPick === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerchoise, computerchoise) {
    if (playerchoise === "Rock") {
        if (computerchoise === "Rock") {
            return "Tie Game!"
        } else if (computerchoise === "Paper") {
            CpScore = CpScore + 1
            return "You Lose! Paper beats Rock"
        } else if (computerchoise === "Scissors") {
            pScore = pScore + 1
            return "You Win! Rock beats Scissors" 
        }
    } else if (playerchoise === "Paper") {
        if (computerchoise === "Paper") {
            return "Tie Game!"
        } else if (computerchoise === "Scissors") {
            CpScore = CpScore + 1
            return "You Lose! Scissors beats Paper"
        } else if (computerchoise === "Rock") {
            pScore = pScore + 1
            return "You Win! Paper beats Rock" 
        }
    } else if (playerchoise === "Scissors") {
        if (computerchoise === "Scissors") {
            return "Tie Game!"
        } else if (computerchoise === "Rock") {
            CpScore = CpScore + 1
            return "You Lose! Rock beats Scissors"
        } else if (computerchoise === "Paper") {
            pScore = pScore + 1
            return "You Win! Scissors beats Paper" 
        }
    }
}

function play(playerChoise) {
    if (pScore === 5 || CpScore === 5) {
        player.textContent = "0"
        Cpu.textContent = "0"
        
        pScore = 0
        CpScore = 0

    }
    const results = document.querySelector('.result')
    results.textContent = playRound(playerChoise, computerSelection())
    const finalPt = document.querySelector('.final')
    Cpu.textContent = CpScore
    player.textContent = pScore
    finalPt.textContent = ""

    if (pScore === 5) {
        finalPt.textContent = "You Are WINNER! :))"
    } else if (CpScore === 5) {
        finalPt.textContent = "You lost the game! :(("
    }
}

const rock = document.querySelector('.rock')
rock.addEventListener('click', () => {
    play("Rock")
})
const paper = document.querySelector('.paper')
paper.addEventListener('click', () => {
    play("Paper")
})
const scissors = document.querySelector('.scissors')
scissors.addEventListener('click', () => {
    play("Scissors")
})

const Cpu = document.querySelector('.CpScore')
const player = document.querySelector('.pScore')
let pScore = 0
let CpScore = 0
