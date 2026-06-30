import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TomatoScreen from "../screens/TomatoScreen";
import GoldScreen from "../screens/GoldScreen";
import { createStaticNavigation } from "@react-navigation/native";

const MyTabs = createBottomTabNavigator({
  screens: {
    Home: TomatoScreen,
    Profile: GoldScreen,
  },
});

// const TabNavigation = createStaticNavigation(MyTabs);

export default MyTabs;
