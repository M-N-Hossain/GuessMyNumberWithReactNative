import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
// import { useFonts } from "expo-font";

import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setGameOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  // useFonts({
  //   "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  //   "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  // });

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  function gameOverHandler(numberOfROunds) {
    setGameOver(true);
    setGuessRounds(numberOfROunds);
  }
  function startNewGameHandler() {
    setUserNumber(null);
    setGameOver(false);
    setGuessRounds(0);
  }

  let screens = <StartGameScreen onPickeNumber={pickedNumberHandler} />;

  if (userNumber) {
    screens = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (isGameOver && userNumber) {
    screens = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onSartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient colors={["#5e1c36", "#c79322"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screens}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
