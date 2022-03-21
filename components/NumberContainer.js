import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Color";

const NumberContainer = props => {
    return (
      <View style={styles.container}>
        <Text style={styles.numbers}>{props.children}</Text>
      </View>
    );
}


const styles = StyleSheet.create({
    container : {
        borderWidth : 2,
        borderColor : Colors.accent,
        padding : 10,
        borderRadius : 10,
        marginVertical : 10,
        alignItems : 'center',
        justifyContent : 'center'
    },
    numbers: {
        color : Colors.accents,
        fontSize : 20,
    }
})

export default NumberContainer;