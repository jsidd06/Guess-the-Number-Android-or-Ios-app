import React, { useState } from "react";
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
export default function App() {
  const [selectedUserNumber, setSelectedUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setSelectedUserNumber(selectedNumber);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (selectedUserNumber) {
    content = <GameScreen userChoice={selectedUserNumber} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess the Number" />
    {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
  }
});
