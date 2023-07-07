import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { CalendarEvent as CalendarEventCardProps } from "../types/data";
import { dateFormatter } from "../utils";

export default function CalendarEventCard({ date, title, host: { profileImage, name }, description }: CalendarEventCardProps): JSX.Element {
  return (
    <View style={calendarEventCardStyles.container}>
      <View style={calendarEventCardStyles.contentContainer}>
        <View style={calendarEventCardStyles.calendarEventCardHeader}>
          <View style={calendarEventCardStyles.calendarEventCardLiveIndicator}>
            <MaterialCommunityIcons
              name="calendar-month-outline"
              size={25}
              color="white"
            />

            <Text style={calendarEventCardStyles.calendarEventCardLiveText}>Soon at {dateFormatter(date)}</Text>
          </View>

          <TouchableOpacity>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={20}
              color="white"
            />
          </TouchableOpacity>
        </View>

        <View style={calendarEventCardStyles.calendarEventCardContent}>
          <Text
            style={calendarEventCardStyles.calendarEventCardTitle}
            numberOfLines={3}
          >
            {title}
          </Text>
        </View>
      </View>

      <View style={calendarEventCardStyles.calendarEventCardDescriptionContent}>
        <TouchableOpacity style={calendarEventCardStyles.calendarEventCardHost}>
          <Image
            source={{ uri: profileImage }}
            style={calendarEventCardStyles.calendarEventCardHostProfile}
          />

          <Text style={calendarEventCardStyles.calendarEventCardHostName}>{name}</Text>

          <Text style={calendarEventCardStyles.calendarEventCardHostBadge}>Host</Text>
        </TouchableOpacity>

        <Text
          style={calendarEventCardStyles.calendarEventCardDescriptionText}
          numberOfLines={2}
        >
          {description}
        </Text>
      </View>
    </View>
  );
}

const calendarEventCardStyles = StyleSheet.create({
  container: {
    backgroundColor: "#A66CFF",
    borderRadius: 10,
  },
  contentContainer: {
    padding: 12.5,
  },
  calendarEventCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  calendarEventCardLiveIndicator: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 7.5,
  },
  calendarEventCardLiveText: {
    color: "white",
    fontWeight: "700",
  },
  calendarEventCardContent: {
    rowGap: 7.5,
    marginTop: 7.5,
  },
  calendarEventCardTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    maxWidth: "90%",
    textTransform: "capitalize",
    paddingBottom: 15,
  },
  calendarEventCardDescriptionContent: {
    backgroundColor: "#7149C6",
    flex: 1,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    padding: 12.5,
  },
  calendarEventCardHost: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    marginBottom: 10,
  },
  calendarEventCardHostProfile: {
    height: 20,
    width: 20,
    borderRadius: 50,
  },
  calendarEventCardHostName: {
    color: "white",
    fontWeight: "700",
    fontSize: 15,
  },
  calendarEventCardHostBadge: {
    color: "white",
    paddingHorizontal: 2.5,
    backgroundColor: "#A66CFF",
    borderRadius: 2.5,
    fontSize: 15,
  },
  calendarEventCardDescriptionText: {
    color: "white",
    maxWidth: "95%",
    fontSize: 15,
  },
});
