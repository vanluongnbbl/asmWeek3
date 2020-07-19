import CONSTANT from '../../constant'

const { ROCK, PAPER, SCISSOR } = CONSTANT.CHOICE
const { DEFAULT, VICTORY, DEFEATED, DRAW } = CONSTANT.RESULT

export const getGameResult = (userChoice, randomComputerChoice) => {
    if (userChoice === ROCK.NAME)
        return randomComputerChoice === PAPER.NAME ? DEFEATED.TEXT : VICTORY.TEXT
    if (userChoice === PAPER.NAME)
        return randomComputerChoice === SCISSOR.NAME ? DEFEATED.TEXT : VICTORY.TEXT
    if (userChoice === SCISSOR.NAME)
        return randomComputerChoice === ROCK.NAME ? DEFEATED.TEXT : VICTORY.TEXT

    if (userChoice === randomComputerChoice)
        return DRAW.TEXT
}

export const getTitleColor = (text) => {
    switch (text) {
        case VICTORY.TEXT:
            return VICTORY.COLOR
        case DEFEATED.TEXT:
            return DEFEATED.COLOR
        case DRAW.TEXT:
            return DRAW.COLOR
        default:
            return DEFAULT.COLOR
    }
}