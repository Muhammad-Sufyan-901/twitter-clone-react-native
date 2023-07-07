import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { allNotificationList } from "../constants";
import { NotificationCard } from "../fragments";

export default function AllNotificationsComponent(): JSX.Element {
  return (
    <ScrollView
      style={allNotificationsComponentStyles.container}
      contentContainerStyle={allNotificationsComponentStyles.containerLayout}
      showsVerticalScrollIndicator={false}
    >
      {allNotificationList.map(
        ({ profileImage, name, tweet }): React.ReactNode => (
          <NotificationCard
            key={`${name} - ${tweet}`}
            profileImage={profileImage}
            name={name}
            tweet={tweet}
          />
        )
      )}
    </ScrollView>
  );
}

const allNotificationsComponentStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingVertical: 10,
  },
  containerLayout: {
    rowGap: 15,
  },
});
