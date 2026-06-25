import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import LogoComponent from "./src/assets/LogoComponent";
import SunImage from "./src/assets/SunImage";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <LogoComponent />
        <SunImage style={styles.sunImage} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  sunImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
