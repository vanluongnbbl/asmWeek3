import { Dimensions } from "react-native";

export default {
    SCREEN_WIDTH: Dimensions.get('window').width,
    SCREEN_HEIGHT: Dimensions.get('window').height,
    RANDOM_CHOICES: Math.floor(Math.random() * 3),
    RESULT: {
        DEFAULT: {
            TEXT: 'CLICK YOUR CHOICE',
            COLOR: 'black'
        },
        VICTORY: {
            TEXT: 'VICTORY',
            COLOR: 'green'
        },
        DEFEATED: {
            TEXT: 'DEFEATED',
            COLOR: 'red'
        },
        DRAW: {
            TEXT: 'DRAW',
            COLOR: 'yellow'
        }
    },
    CHOICE: {
        ROCK: {
            NAME: 'rock',
            URL: 'http://pngimg.com/uploads/stone/stone_PNG13622.png'
        },
        PAPER: {
            NAME: 'paper',
            URL: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png'
        },
        SCISSOR: {
            NAME: 'scissors',
            URL: 'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png'
        }
    }
}
