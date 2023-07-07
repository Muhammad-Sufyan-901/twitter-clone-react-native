import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Notification as NotificationCardProps } from "../types/data";

export default function NotificationCard({ profileImage, name, tweet }: NotificationCardProps): JSX.Element {
  return (
    <View style={notificationCardStyles.container}>
      <MaterialCommunityIcons
        name="star-four-points"
        size={25}
        color="#745cb4"
        style={notificationCardStyles.notificationCardStar}
      />

      <View style={notificationCardStyles.notificationContent}>
        <Image
          source={{ uri: profileImage }}
          style={notificationCardStyles.notificationCardProfileImage}
        />

        <Text style={notificationCardStyles.notificationCardName}>{name}</Text>

        <Text
          style={notificationCardStyles.notificationCardTweet}
          numberOfLines={3}
        >
          {tweet}
        </Text>
      </View>
    </View>
  );
}

const notificationCardStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    columnGap: 7.5,
    borderBottomWidth: 0.5,
    borderColor: "gray",
    paddingTop: 5,
    paddingBottom: 15,
  },
  notificationCardStar: {
    marginLeft: 35,
    marginRight: 5,
  },
  notificationContent: {
    rowGap: 5,
    flex: 1,
  },
  notificationCardProfileImage: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  notificationCardName: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
  },
  notificationCardTweet: {
    color: "white",
    opacity: 0.7,
    maxWidth: "90%",
  },
});
