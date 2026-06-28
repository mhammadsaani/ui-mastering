import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import PlusIcon from "../assets/PlusIcon";

const AddNewButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <PlusIcon />
      <Text style={styles.text}>Add New</Text>
    </TouchableOpacity>
  );
};

export default AddNewButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: s(2),
    borderColor: "#F0F5FA",
    borderRadius: s(5),
    paddingVertical: vs(10),
    marginTop: vs(10),
  },
  icon: {
    color: "#FF7622",
    paddingRight: s(10),
    fontWeight: 300,
    fontSize: s(20),
  },
  text: {
    color: "#FF7622",
    fontSize: s(16),
    paddingLeft: s(10),
    fontWeight: "bold",
    fontFamily: "Sen",
  },
});
