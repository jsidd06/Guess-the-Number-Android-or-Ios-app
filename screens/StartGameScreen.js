import React from 'react';
import {View,StyleSheet,Text,TextInput,Button} from 'react-native';
import Card from '../components/Card';
import Color from "../constants/Color"
const StartGameScreen = props => {
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Start Game Screen!</Text>
            <Card style={styles.inputContainer}>
                <Text >Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                    <Button title="Reset" onPress={() => {}} color={Color.primary} /></View>
                    <View style={styles.button}><Button title="Confirm" onPress={() => {}} color={Color.accent} /></View>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button:{
        width: 100,
    },
})

export default StartGameScreen;