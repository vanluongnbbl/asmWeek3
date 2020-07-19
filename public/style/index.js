import { StyleSheet } from 'react-native'
import CONSTANT from '../../constant'

export const AppStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginVertical: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    cardContainer: {
        flexDirection: 'row',
        width: CONSTANT.SCREEN_WIDTH - 20,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 20
    },
    buttonContainer: {
        alignItems: 'center',
        width: '100%',
        marginTop: 20
    }
})

export const PlayerCardStyle = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 15
    },
    name: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        fontSize: 18
    },
    image: {
        width: CONSTANT.SCREEN_WIDTH * 0.4,
        height: 150
    },
    choice: {
        fontSize: 18
    }
})


export const ButtonStyle = StyleSheet.create({
    container: {
        backgroundColor: '#640D13',
        borderRadius: 20,
        padding: 10,
        margin: 5,
        width: CONSTANT.SCREEN_WIDTH * 0.5,
        marginTop: 10
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff'
    }
})