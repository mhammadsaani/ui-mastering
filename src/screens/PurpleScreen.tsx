import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, useRoute } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";

const PurpleScreen = () => {
  const { name, params } = useRoute();
  console.log(name);
  console.log(params);
  return (
    <View style={styles.container}>
      <Text>Purple Screen</Text>
      <Button screen="Gold">Go to Gold</Button>
    </View>
  );
};

export default PurpleScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
