import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TomatoScreen from "../screens/TomatoScreen";
import PurpleScreen from "../screens/PurpleScreen";
import GoldScreen from "../screens/GoldScreen";
import MyTabs from "./BottomNavigation";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Tomato", // which screen to display first
  screenOptions: {
    // headerStyle: { backgroundColor: "red" },
    headerShown: false,
  },
  screens: {
    Purple: {
      screen: PurpleScreen,
      options: {
        title: "PurpleHammad",
        headerStyle: { backgroundColor: "purple" },
      },
    },
    Tomato: TomatoScreen,
    Gold: GoldScreen,
    Tabs: MyTabs,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
