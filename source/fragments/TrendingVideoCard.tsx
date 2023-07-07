import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TrendingVideo as TrendingVideoCardProps } from "../types/data";

export default function TrendingVideoCard({ video, views }: TrendingVideoCardProps): JSX.Element {
  return (
    <TouchableOpacity style={trendingVideoCardStyles.container}>
      <ImageBackground
        source={{ uri: video }}
        style={trendingVideoCardStyles.trendingCardBackground}
        resizeMode="cover"
      />

      <TouchableOpacity style={trendingVideoCardStyles.trendingCardPlayButton}>
        <MaterialCommunityIcons
          name="play-circle"
          size={50}
          color="#00acee"
        />
      </TouchableOpacity>

      <View style={trendingVideoCardStyles.trendingCardViews}>
        <MaterialCommunityIcons
          name="eye"
          size={15}
          color="white"
        />
        <Text style={trendingVideoCardStyles.trendingCardViewText}>{views}</Text>
      </View>
    </TouchableOpacity>
  );
}

const trendingVideoCardStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 215,
    width: 160,
    borderRadius: 10,
    position: "relative",
    overflow: "hidden",
  },
  trendingCardBackground: {
    flex: 1,
  },
  trendingCardPlayButton: {
    position: "absolute",
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  trendingCardViews: {
    position: "absolute",
    bottom: 7.5,
    left: 7.5,
    backgroundColor: "rgba(0,0,0,0.4)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 2.5,
    borderRadius: 5,
    columnGap: 7.5,
  },
  trendingCardViewText: {
    color: "white",
  },
});
