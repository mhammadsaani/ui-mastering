import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import ContactUs from "./src/screens/ContactUs";
import MeditationScreen from "./src/screens/MeditationScreen";
import { s, vs } from "react-native-size-matters";
import PaymentScreen from "./src/screens/PaymentScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <PaymentScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
