import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import React from "react";
import VideIcon from "../assets/VideoIcon";

export default function MeditationCard({ item }) {
  const { image, date, title } = item;
  return (
    <View>
      <ImageBackground
        style={styles.imageContainer}
        source={{ uri: image }}
        imageStyle={styles.image}
      >
        <View style={styles.overlay} />
        <Text style={styles.topText}>Meditation</Text>
        <View style={styles.bottomContainer}>
          <VideIcon />
          <Text style={styles.bottonText}>31st Jan - 09:00 am</Text>
        </View>
        <Text style={styles.liveText}>Live</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: s(150),
    height: vs(145),
    borderRadius: s(12),
  },
  image: {
    borderRadius: s(12),
    opacity: 0.7,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  topText: {
    bottom: vs(28),
    position: "absolute",
    left: s(10),
    fontSize: s(12),
    fontWeight: "semibold",
    color: "#fff",
  },
  bottomContainer: {
    position: "absolute",
    bottom: vs(12),
    left: s(10),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bottonText: {
    color: "#fff",
    marginStart: s(5),
    fontSize: s(12),
  },
  overlay: {
    // position: "absolute",
    // top: 0,
    // bottom: 0,
    // right: 0,
    // left: 0,
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: s(12),
  },
  liveText: {
    color: "white",
    position: "absolute",
    right: s(10),
    backgroundColor: "red",
    paddingHorizontal: s(8),
    paddingVertical: vs(4),
    borderRadius: s(20),
    top: vs(5),
    fontWeight: "semibold",
  },
});
