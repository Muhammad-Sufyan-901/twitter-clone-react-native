import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { calendarEventList } from "../constants";
import { CalendarEventCard } from "../fragments";

export default function CalendarEventComponent(): JSX.Element {
  return (
    <View style={calendarEventComponentStyles.container}>
      <Text style={calendarEventComponentStyles.calendarEventTitle}>Get these in your calendar</Text>
      <Text style={calendarEventComponentStyles.calendarEventSubtitle}>People you follow will be tuning in</Text>

      <View style={calendarEventComponentStyles.calendarEventCardContainer}>
        {calendarEventList.map(
          ({ title, date, description, host }): React.ReactNode => (
            <CalendarEventCard
              key={`${title} - ${host}`}
              title={title}
              date={date}
              description={description}
              host={host}
            />
          )
        )}
      </View>
    </View>
  );
}

const calendarEventComponentStyles = StyleSheet.create({
  container: {
    paddingVertical: 25,
  },
  calendarEventTitle: {
    color: "white",
    fontSize: 25,
    fontWeight: "600",
    marginBottom: 5,
  },
  calendarEventSubtitle: {
    color: "white",
    opacity: 0.7,
    fontSize: 15,
  },
  calendarEventCardContainer: {
    rowGap: 15,
    marginTop: 25,
  },
});
