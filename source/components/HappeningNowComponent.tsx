import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { happeningNowList } from "../constants";
import { HappeningNowCard } from "../fragments";

export default function HappeningNowComponent(): JSX.Element {
  return (
    <View style={happeningNowComponentStyles.container}>
      <Text style={happeningNowComponentStyles.happeningNowTitle}>Happening Now</Text>
      <Text style={happeningNowComponentStyles.happeningNowSubtitle}>Spaces going on right now</Text>

      <View style={happeningNowComponentStyles.happeningNowCardContainer}>
        {happeningNowList.map(
          ({ title, viewers, description, host }): React.ReactNode => (
            <HappeningNowCard
              key={`${title} - ${host}`}
              title={title}
              viewers={viewers}
              description={description}
              host={host}
            />
          )
        )}
      </View>
    </View>
  );
}

const happeningNowComponentStyles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  happeningNowTitle: {
    color: "white",
    fontSize: 25,
    fontWeight: "600",
    marginBottom: 5,
  },
  happeningNowSubtitle: {
    color: "white",
    opacity: 0.7,
    fontSize: 15,
  },
  happeningNowCardContainer: {
    rowGap: 15,
    marginTop: 25,
  },
});
