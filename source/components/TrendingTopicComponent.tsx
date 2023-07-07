import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { trendingTopicList } from "../constants";
import { TrendingTopicCard } from "../fragments";

export default function TrendingTopicComponent(): JSX.Element {
  return (
    <View style={trendingTopicComponentStyles.container}>
      <Text style={trendingTopicComponentStyles.trendingTitle}>Trends for you</Text>

      <View style={trendingTopicComponentStyles.trendingCardContainer}>
        {trendingTopicList.map(
          ({ category, topic, tweets }): React.ReactNode => (
            <TrendingTopicCard
              key={`${category} - ${topic}`}
              category={category}
              topic={topic}
              tweets={tweets}
            />
          )
        )}
      </View>

      <TouchableOpacity>
        <Text style={trendingTopicComponentStyles.trendingShowMoreButton}>Show more</Text>
      </TouchableOpacity>
    </View>
  );
}

const trendingTopicComponentStyles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderColor: "gray",
    paddingBottom: 15,
  },
  trendingTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    marginBottom: 25,
  },
  trendingCardContainer: {
    rowGap: 10,
  },
  trendingShowMoreButton: {
    color: "#00acee",
    fontSize: 15,
    marginTop: 25,
  },
});
