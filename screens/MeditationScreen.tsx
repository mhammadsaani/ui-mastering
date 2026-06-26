import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { s, vs } from "react-native-size-matters";
import TopTabs from "../src/components/TopTabs";
export default function MeditationScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.mainText}>Meditations</Text>
        <Text style={styles.subText}>Lorem ipsum dolor sit amet,</Text>
        <TopTabs />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: s(16),
  },
  mainText: {
    paddingTop: vs(20),
    fontWeight: "bold",
    fontSize: vs(20),
    fontFamily: "Montserrat",
    color: "#1D150F",
    marginBottom: vs(6),
  },
  subText: {
    fontFamily: "Montserrat",
    fontSize: 14,
    marginBottom: vs(16),
  },
});
