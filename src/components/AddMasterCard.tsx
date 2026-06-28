import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import NoMasterCardIcon from "../assets/NoMasterCardIcon";
import LottieView from "lottie-react-native";

const AddMasterCard = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/card.json")}
        style={{ width: s(150), height: vs(150) }}
        autoPlay
        loop
      />
      <Text style={styles.mainText}>No master card added</Text>
      <Text style={styles.subText}>
        You can add a mastercard and save it for later
      </Text>
    </View>
  );
};

export default AddMasterCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: vs(30),
    paddingHorizontal: s(20),
    backgroundColor: "#F7F8F9",
    borderRadius: s(10),
    marginTop: vs(15),
  },
  mainText: {
    fontWeight: "bold",
    fontSize: s(16),
    fontFamily: "Sen",
    color: "#32343E",
    marginVertical: vs(20),
  },
  subText: {
    lineHeight: 24,
    fontSize: s(15),
    color: "#2D2D2D",
    textAlign: "center",
  },
});
