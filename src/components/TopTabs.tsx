import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { s, vs } from "react-native-size-matters";

const ACTIVE_BG = "#75563B";
const ACTIVE_COLOR = "#fff";
const INACTIVE_BG = "#F5F5F4";
const INACTIVE_COLOR = "#2C2016";
const tabsArr = ["Live", "Recorded"];
export default function TopTabs() {
  const [isActive, setActive] = useState("Live");
  return (
    <View style={styles.container}>
      {tabsArr.map((tab) => (
        <TouchableOpacity
          onPress={() => setActive(tab)}
          style={[
            styles.tabButtons,
            tab === isActive ? styles.activeButton : styles.inActiveButton,
          ]}
          key={tab}
        >
          <Text
            style={[tab === isActive ? styles.activeText : styles.inActiveText]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F4",
    borderRadius: s(12),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: s(4),
    paddingVertical: vs(8),
  },
  tabButtons: {
    height: vs(32),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: vs(8),
  },
  activeButton: {
    backgroundColor: ACTIVE_BG,
  },
  inActiveButton: {
    backgroundColor: INACTIVE_BG,
  },
  activeText: {
    color: ACTIVE_COLOR,
    fontWeight: "bold",
  },
  inActiveText: {
    color: INACTIVE_COLOR,
    fontWeight: "normal",
  },
});
