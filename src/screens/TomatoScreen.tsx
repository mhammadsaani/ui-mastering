import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";

const TomatoScreen = () => {
  const navigataion = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Tomato Screen</Text>
      <Button
        onPress={() => navigataion.navigate("Purple", { name: "Hammad" })}
      >
        Go to Purple
      </Button>
    </View>
  );
};

export default TomatoScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "tomato",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
