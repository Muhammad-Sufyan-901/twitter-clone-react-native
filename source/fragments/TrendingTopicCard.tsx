import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TrendingTopic as TrendingTopicCardProps } from "../types/data";

export default function TrendingTopicCard({ category, topic, tweets }: TrendingTopicCardProps): JSX.Element {
  return (
    <TouchableOpacity style={trendingTopicCardStyles.container}>
      <View style={trendingTopicCardStyles.trendingCardContent}>
        <Text
          style={trendingTopicCardStyles.trendingCardCategory}
          numberOfLines={1}
        >
          {category} · Trending
        </Text>
        <Text
          style={trendingTopicCardStyles.trendingCardTopic}
          numberOfLines={1}
        >
          {topic}
        </Text>
        <Text
          style={trendingTopicCardStyles.trendingCardTweets}
          numberOfLines={1}
        >
          {tweets}K Tweets
        </Text>
      </View>

      <TouchableOpacity>
        <MaterialCommunityIcons
          name="dots-vertical"
          size={15}
          color="white"
          style={{ opacity: 0.7 }}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const trendingTopicCardStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
  },
  trendingCardContent: {
    flex: 1,
    rowGap: 5,
  },
  trendingCardCategory: {
    fontWeight: "700",
    fontSize: 13,
    color: "white",
    opacity: 0.7,
  },
  trendingCardTopic: {
    fontWeight: "700",
    fontSize: 17,
    color: "white",
    textTransform: "uppercase",
  },
  trendingCardTweets: {
    fontWeight: "500",
    fontSize: 13,
    color: "white",
    opacity: 0.7,
  },
});
