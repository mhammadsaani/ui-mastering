import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GoldScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Gold Screen</Text>
    </View>
  );
};

export default GoldScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gold",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
