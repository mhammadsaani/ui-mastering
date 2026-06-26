import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { s, vs } from "react-native-size-matters";
import TopTabs from "../components/TopTabs";
import MeditationCard from "../components/MeditationCard";
import { dummyData } from "../data/data";

export default function MeditationScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.mainText}>Meditations</Text>
        <Text style={styles.subText}>Lorem ipsum dolor sit amet,</Text>
        <TopTabs />
        {/* <View style={styles.meditationCard}>
          <MeditationCard />
          <MeditationCard />
          <MeditationCard />
          <MeditationCard />
          <MeditationCard />
        </View> */}
        <FlatList
          data={dummyData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MeditationCard item={item} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={{
            marginBottom: vs(5),
            justifyContent: "space-between",
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: s(16),
  },
  mainText: {
    paddingTop: vs(20),
    fontWeight: "bold",
    fontSize: vs(20),
    fontFamily: "Montserrat",
    color: "#1D150F",
    marginBottom: vs(6),
  },
  subText: {
    fontFamily: "Montserrat",
    fontSize: 14,
    marginBottom: vs(16),
  },
  meditationCard: {},
});
