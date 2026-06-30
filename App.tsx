import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import ContactUs from "./src/screens/ContactUs";
import MeditationScreen from "./src/screens/MeditationScreen";
import { s, vs } from "react-native-size-matters";
import GoldScreen from "./src/screens/GoldScreen";
import TomatoScreen from "./src/screens/TomatoScreen";
import PurpleScreen from "./src/screens/PurpleScreen";
import Navigation from "./src/navigation/MainNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { Link } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import MyTabs from "./src/navigation/BottomNavigation";
import TabNavigation from "./src/navigation/BottomNavigation";

export default function App() {
  return (
    <>
      <Navigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
