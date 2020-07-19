import React, { useState } from 'react'
import {
  Text,
  View
} from 'react-native'

import PlayerCard from './src/components/PlayerCard'
import PlayerButton from './src/components/PlayerButton'

import { CHOICES } from './src/data/index'

import { AppStyle as styles } from './public/style'
import CONSTANT from './constant'

import {
  getGameResult,
  getTitleColor
} from './src/utils'

export default function App() {
  const [choice, setChoice] = useState(CONSTANT.CHOICE.ROCK.NAME)
  const [computerChoice, setComputerChoice] = useState(CONSTANT.CHOICE.ROCK.NAME)
  const [gameResult, setGameResult] = useState(CONSTANT.RESULT.DEFAULT.TEXT)

  const handleOnPress = (userChoice) => {
    setChoice(userChoice)
    const randomComputerChoice = CHOICES[CONSTANT.RANDOM_CHOICES]
    setComputerChoice(randomComputerChoice.name)

    setGameResult(
      getGameResult(userChoice, randomComputerChoice.name)
    )
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, {
        color: getTitleColor(gameResult)
      }]}>
        {gameResult}
      </Text>

      <View style={styles.cardContainer}>
        <PlayerCard choice={CHOICES.find(({ name }) => name === choice)} />
        <Text>vs</Text>
        <PlayerCard choice={CHOICES.find(({ name }) => name === computerChoice)} />
      </View>

      <View style={styles.buttonContainer}>
        {CHOICES.map((e, i) => (
          <PlayerButton key={i} name={e.name} setChoice={handleOnPress} />
        ))}
      </View>
    </View>
  )
}
