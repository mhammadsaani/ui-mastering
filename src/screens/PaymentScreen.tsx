import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React, { use, useState } from "react";
import { vs, s } from "react-native-size-matters";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import PaymentType from "../components/PaymentType";
import CashIcon from "../assets/CashIcon";
import PayPalIcon from "../assets/PayPalIcon";
import VisaIcon from "../assets/VisaIcon";
import MasterCardIcon from "../assets/MasterCardIcon";
import AddMasterCard from "../components/AddMasterCard";
import AddNewButton from "../components/AddNewButton";
import PriceComponent from "../components/PriceComponent";

const data = [
  { id: 1, label: "Cash", icon: <CashIcon /> },
  { id: 3, label: "Visa", icon: <VisaIcon /> },
  { id: 4, label: "MasterCard", icon: <MasterCardIcon /> },
  { id: 2, label: "PayPal", icon: <PayPalIcon /> },
];

export default function PaymentScreen() {
  const [isSelected, setSelected] = useState("");
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.backButton}>
          <FontAwesome5 name="less-than" size={12} color="#181C2E" />
        </TouchableOpacity>
        <Text style={{ color: "#181C2E", paddingLeft: s(10) }}>Payment</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PaymentType
            label={item.label}
            icon={item.icon}
            onPress={() => setSelected(item.label)}
            isSelected={isSelected === item.label}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: vs(16),
          paddingTop: vs(16),
        }}
      />
      <AddMasterCard />
      <AddNewButton />
      <PriceComponent />
      <TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            backgroundColor: "#FF7622",
            color: "#fff",
            paddingVertical: vs(20),
            borderRadius: s(5),
            fontWeight: "900",
          }}
        >
          PRESS AND PAY
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: s(24),
    paddingBottom: vs(50),
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: vs(30),
  },
  backButton: {
    backgroundColor: "#ECF0F4",
    width: vs(25),
    height: s(25),
    borderRadius: s(17),
    justifyContent: "center",
    alignItems: "center",
  },
  paymentTypes: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: s(10),
  },
});
