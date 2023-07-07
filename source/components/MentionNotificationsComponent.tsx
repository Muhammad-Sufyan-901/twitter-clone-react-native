import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MentionNotificationsComponent(): JSX.Element {
  return (
    <View style={mentionNotificationsComponentStyles.container}>
      <Text style={mentionNotificationsComponentStyles.mentionNotificationTitle}>Join the conversation</Text>
      <Text style={mentionNotificationsComponentStyles.mentionNotificationDescription}>When someone on twitter mentions you in a Tweet or reply, you'll find it here.</Text>
    </View>
  );
}

const mentionNotificationsComponentStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  mentionNotificationTitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 30,
  },
  mentionNotificationDescription: {
    color: "white",
    opacity: 0.7,
    fontSize: 16,
    marginTop: 5,
  },
});
