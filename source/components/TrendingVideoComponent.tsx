import * as React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { trendingVideoList } from "../constants";
import { TrendingVideoCard } from "../fragments";

export default function TrendingVideoComponent(): JSX.Element {
  return (
    <View style={trendingVideoComponentStyle.container}>
      <Text style={trendingVideoComponentStyle.trendingTitle}>Videos for you</Text>
      <Text style={trendingVideoComponentStyle.trendingSubtitle}>Check out these popular and trending videos for you</Text>

      <ScrollView
        contentContainerStyle={trendingVideoComponentStyle.trendingCardContainer}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {trendingVideoList.map(
          ({ video, views }): React.ReactElement => (
            <TrendingVideoCard
              key={video + views}
              video={video}
              views={views}
            />
          )
        )}
      </ScrollView>
    </View>
  );
}

const trendingVideoComponentStyle = StyleSheet.create({
  container: {
    paddingVertical: 17.5,
  },
  trendingTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    marginBottom: 5,
  },
  trendingSubtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "white",
    opacity: 0.7,
    marginBottom: 25,
  },
  trendingCardContainer: {
    columnGap: 10,
  },
});
