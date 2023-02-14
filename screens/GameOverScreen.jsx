import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onSartNewGame,
}) {
  const { width, height } = useWindowDimensions();

  const margin = width < 480 ? 36 : 5;

  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={[styles.imaegeContainer, {margin: margin}]}>
        <Image source={require("../assets/success.png")} style={styles.image} />
      </View>
      <Text style={styles.summeryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>

      <PrimaryButton onPress={onSartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imaegeContainer: {
    width: deviceWidth < 380 ? 150 : 200,
    height: deviceWidth < 380 ? 150 : 200,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",

  },
  image: {
    width: "100%",
    height: "100%",
  },
  summeryText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontWeight: "bold",
    color: Colors.primary500,
  },
});
