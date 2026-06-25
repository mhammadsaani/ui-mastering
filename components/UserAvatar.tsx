import React from "react";
import { Image, StyleSheet } from "react-native";
import { s } from "react-native-size-matters";

export default function UserAvatar() {
  return (
    <Image
      style={styles.userAvater}
      source={{
        uri: "https://9story.com/wp-content/uploads/2018/05/9story-Garfiled-And-Friends-001.jpg",
      }}
    />
  );
}

const styles = StyleSheet.create({
  userAvater: {
    width: s(32),
    height: s(32),
    borderRadius: s(32),
  },
});
