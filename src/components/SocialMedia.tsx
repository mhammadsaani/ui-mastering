import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { s, vs } from "react-native-size-matters";
import WhatsApp from "../assets/WhatsApp";
import SendIcon from "../assets/SendIcon";

export default function SocialMedia({ leftIcon, text }) {
  const IconComponent = leftIcon;
  return (
    <View style={styles.container}>
      <View style={styles.leftPart}>
        <View style={styles.leftIcon}>
          <IconComponent />
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>
      <TouchableOpacity style={styles.rightIcon}>
        <SendIcon />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#E4E6E8",
    paddingVertical: vs(16),
  },
  leftPart: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  leftIcon: {
    width: s(46),
    height: s(46),
    borderRadius: s(23),
    borderColor: "#e4e6e8",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E4E6E8",
  },
  text: {
    color: "#8083A3",
    paddingLeft: s(14),
    fontSize: s(12),
  },
  rightIcon: {
    backgroundColor: "#1077AF",
    width: s(46),
    height: s(46),
    borderRadius: s(23),
    justifyContent: "center",
    alignItems: "center",
  },
});
