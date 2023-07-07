import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { images } from "../constants";

export default function VerifiedNotificationsComponent(): JSX.Element {
  return (
    <View style={verifiedNotificationsComponentStyles.container}>
      <Image
        source={images.VerificationBanner}
        style={verifiedNotificationsComponentStyles.verifiedNotificationImageBanner}
      />

      <View style={verifiedNotificationsComponentStyles.verifiedNotificationTitleContainer}>
        <Text style={verifiedNotificationsComponentStyles.verifiedNotificationTitleText}>Nothing to see here</Text>
        <View style={verifiedNotificationsComponentStyles.verifiedNotificationTitleLine} />
        <Text style={verifiedNotificationsComponentStyles.verifiedNotificationTitleText}>yet</Text>
      </View>

      <View style={verifiedNotificationsComponentStyles.verifiedNotificationDescriptionContainer}>
        <Text style={verifiedNotificationsComponentStyles.verifiedNotificationDescriptionText}>
          Likes, mentions, Retweets, and a whole lot more when it comes from a verified account, you'll find it here. <Text style={verifiedNotificationsComponentStyles.verifiedNotificationDescriptionLearnMore}>Learn more</Text>
        </Text>

        <Text style={verifiedNotificationsComponentStyles.verifiedNotificationDescriptionText}>Not verified? Subscribe now to get a verified account and join other people in quality conversations.</Text>
      </View>

      <TouchableOpacity style={verifiedNotificationsComponentStyles.verifiedNotificationSubscribeButton}>
        <Text style={verifiedNotificationsComponentStyles.verifiedNotificationSubscribeButtonText}>Subscribe</Text>
      </TouchableOpacity>

      <Text style={verifiedNotificationsComponentStyles.verifiedNotificationPrice}>IDR 165,000.00/month</Text>
    </View>
  );
}

const verifiedNotificationsComponentStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  verifiedNotificationImageBanner: {
    height: 175,
    width: "auto",
    alignItems: "center",
    marginBottom: 40,
  },
  verifiedNotificationTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
    flexWrap: "wrap",
  },
  verifiedNotificationTitleText: {
    color: "white",
    fontSize: 35,
    fontWeight: "600",
  },
  verifiedNotificationTitleLine: {
    width: 30,
    height: 4,
    backgroundColor: "white",
  },
  verifiedNotificationDescriptionContainer: {
    marginTop: 7.5,
    rowGap: 15,
    maxWidth: "95%",
    paddingBottom: 25,
  },
  verifiedNotificationDescriptionText: {
    color: "white",
    opacity: 0.7,
    fontSize: 15,
  },
  verifiedNotificationDescriptionLearnMore: {
    color: "#00acee",
  },
  verifiedNotificationSubscribeButton: {
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 25,
    alignItems: "center",
  },
  verifiedNotificationSubscribeButtonText: {
    fontWeight: "600",
    fontSize: 17.5,
  },
  verifiedNotificationPrice: {
    color: "white",
    fontWeight: "600",
    fontSize: 17.5,
    textAlign: "center",
    marginTop: 20,
  },
});
