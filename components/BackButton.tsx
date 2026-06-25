import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { s } from "react-native-size-matters";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function BackButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <AntDesign name="left" size={s(16)} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: s(32),
    height: s(32),
    borderRadius: s(16),
    backgroundColor: "#ECF0F4",
    justifyContent: "center",
    alignItems: "center",
  },
});
