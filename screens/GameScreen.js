import React,{ useState} from "react";
import { StyleSheet, View, Text,Button } from "react-native";
import Colors from "../constants/Color";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomNumBetween = (min,max,exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude){
        return generateRandomNumBetween(min,max,exclude);
    }
    return rndNum;
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumBetween(1,100,props.userChoice));
    // const [rounds, setRounds] = useState(0);

    // const nextGuessHandler = direction => {
    //     if((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)){
    //         Alert.alert("Don't lie!", "You know that this is wrong...", [{text: 'Sorry!', style: 'cancel'}]);
    //         return;
    //     }

    //     if(direction === 'lower'){
    //         currentGuess += 1;
    //     } else {
    //         currentGuess -= 1;
    //     }
    //     setRounds(curRounds => curRounds + 1);
    //     setCurrentGuess(currentGuess);
    // };

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER"  />
                <Button title="GREATER"  />
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    }
});

export default GameScreen;