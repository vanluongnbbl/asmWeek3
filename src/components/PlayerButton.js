import React from 'react'
import {
    Text,
    TouchableOpacity
} from 'react-native'

import { ButtonStyle as styles } from '../../public/style'

export default function PlayerButton(props) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.setChoice(props.name)}>
            <Text style={styles.text}>{props.name}</Text>
        </TouchableOpacity>
    )
}
