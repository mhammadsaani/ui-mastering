import { StyleSheet, Text, View, Image } from "react-native";
import UserAvatar from "../src/components/UserAvatar";
import BackButton from "../src/components/BackButton";
import SocialMedia from "../src/components/SocialMedia";
import { s, vs } from "react-native-size-matters";
import WhatsApp from "../src/assets/WhatsApp";
import Twitter from "../src/assets/Twitter";
import Instagram from "../src/assets/Instagram";
import SnapChat from "../src/assets/SnapChat";
import TikTok from "../src/assets/TikTok";

export default function ContactUs() {
  return (
    <>
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>
      <Text style={styles.contactUs}>Contact Us</Text>
      <View style={styles.socialContainer}>
        <Text style={styles.soicalText}>Social Media Platforms</Text>
        <SocialMedia leftIcon={WhatsApp} text={"WhatsApp"} />
        <SocialMedia leftIcon={Twitter} text={"Twitter"} />
        <SocialMedia leftIcon={Instagram} text={"Instagram"} />
        <SocialMedia leftIcon={SnapChat} text={"SnapChat"} />
        <SocialMedia leftIcon={TikTok} text={"TikTok"} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: s(14),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sunImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  soicalText: {
    lineHeight: vs(24),
    fontWeight: "bold",
    fontSize: vs(16),
    paddingBottom: vs(17),
  },
  contactUs: {
    marginTop: vs(20),
    paddingLeft: s(20),
    fontWeight: "bold",
    fontSize: vs(30),
  },
  socialContainer: {
    borderRadius: 14,
    marginTop: vs(30),
    backgroundColor: "#F5F5FA",
    paddingHorizontal: s(20),
    paddingVertical: vs(21),
  },
});
