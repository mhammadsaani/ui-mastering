import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";

const PriceComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: s(14), color: "#A0A5BA", paddingRight: s(5) }}>
        TOTAL:
      </Text>
      <Text style={{ fontSize: s(30), color: "#181C2E" }}>$96</Text>
    </View>
  );
};

export default PriceComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: vs(50),
    flexDirection: "row",
    alignItems: "center",
    marginBottom: vs(10),
  },
});
