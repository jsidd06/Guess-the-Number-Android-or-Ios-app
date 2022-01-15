import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Color from "../constants/Color";
const StartGameScreen = (props) => {
  const [enterValue, setEnterValue] = useState("");
  const inputFiledHandler = (inputText) => {
    setEnterValue(inputText.replace(/[^0-9]/g, ""));
  };
  return (
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}} >
    <View style={styles.screen}>
      <Text style={styles.title}>Start Game Screen!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={inputFiledHandler}
          value={enterValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color={Color.primary} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color={Color.accent} />
          </View>
        </View>
      </Card>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
});

export default StartGameScreen;
