import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CashIcon from "../assets/CashIcon";
import { s, vs } from "react-native-size-matters";
import CheckIcon from "../assets/CheckIcon";
export default function PaymentType({ isSelected, icon, label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={[styles.subContainer, isSelected && styles.isSelectedStyles]}
      >
        {icon}
        {isSelected && (
          <View style={styles.checkIcon}>
            <CheckIcon />
          </View>
        )}
      </View>
      <Text style={{ textAlign: "center", color: "#464E57" }}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
  },
  subContainer: {
    backgroundColor: "#F0F5FA",
    justifyContent: "center",
    alignItems: "center",
    // padding: s(30),
    width: s(85),
    height: vs(72),
    borderRadius: s(9),
  },
  isSelectedStyles: {
    borderWidth: s(2),
    borderColor: "#FF7622",
    backgroundColor: "#FFFFFF",
  },
  checkIcon: {
    position: "absolute",
    right: s(-5),
    top: vs(-5),
    backgroundColor: "#FF7622",
    padding: s(4),
    borderRadius: s(10),
    borderWidth: s(2),
    borderColor: "#fff",
  },
});
