import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'

import { PlayerCardStyle as styles } from '../../public/style'

export default function PlayerCard(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>Me</Text>

            {props.choice && <>
                <Image source={{ uri: props.choice.uri }} style={styles.image} />
                <Text style={styles.choice}>{props.choice.name}</Text>
            </>}
        </View>
    )
}
