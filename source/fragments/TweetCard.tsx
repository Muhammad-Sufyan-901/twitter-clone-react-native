import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { Tweet as TweetCardProps } from "../types/data";

export default function TweetCard({ user: { username, name, isVerified, profileImage }, tweet, tweetImage, like, retweet, replayed, uploadedAt }: TweetCardProps): JSX.Element {
  return (
    <View style={tweetCardStyles.container}>
      <View style={tweetCardStyles.tweetProfileBanner}>
        <Image
          source={{ uri: profileImage }}
          style={tweetCardStyles.tweetProfileImage}
        />
      </View>

      <View style={tweetCardStyles.tweetContainer}>
        <View style={tweetCardStyles.tweetProfileContent}>
          <TouchableOpacity>
            <Text
              style={tweetCardStyles.tweetProfileName}
              numberOfLines={1}
            >
              {name}
            </Text>
          </TouchableOpacity>

          {isVerified && (
            <MaterialIcons
              name="verified"
              size={15}
              color="#00acee"
            />
          )}

          <TouchableOpacity>
            <Text
              style={tweetCardStyles.tweetProfileUsername}
              numberOfLines={1}
            >
              @{username} · {uploadedAt}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={tweetCardStyles.tweetProfileSetting}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={17.5}
              color="white"
              style={tweetCardStyles.tweetProfileVerified}
            />
          </TouchableOpacity>
        </View>

        <View style={tweetCardStyles.tweetContent}>
          <Text
            style={tweetCardStyles.tweetContentText}
            numberOfLines={5}
          >
            {tweet}
          </Text>

          {tweetImage && (
            <Image
              source={{ uri: tweetImage }}
              style={tweetCardStyles.tweetContentImage}
            />
          )}
        </View>

        <View style={tweetCardStyles.tweetButtonContainer}>
          <TouchableOpacity style={tweetCardStyles.tweetButton}>
            <MaterialCommunityIcons
              name="message-reply-outline"
              size={22.5}
              color="gray"
            />
            <Text style={tweetCardStyles.tweetButtonText}>{replayed}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={tweetCardStyles.tweetButton}>
            <AntDesignIcon
              name="retweet"
              size={22.5}
              color="gray"
            />
            <Text style={tweetCardStyles.tweetButtonText}>{retweet}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={tweetCardStyles.tweetButton}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={22.5}
              color="gray"
            />
            <Text style={tweetCardStyles.tweetButtonText}>{like}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={tweetCardStyles.tweetButton}>
            <MaterialCommunityIcons
              name="share-variant"
              size={22.5}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const tweetCardStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    columnGap: 5,
    borderBottomWidth: 0.5,
    borderColor: "gray",
    paddingBottom: 10,
  },
  tweetProfileBanner: {
    paddingHorizontal: 10,
  },
  tweetProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  tweetContainer: {
    flexDirection: "column",
    position: "relative",
    flex: 1,
    rowGap: 7.5,
  },
  tweetProfileContent: {
    flex: 1,
    flexDirection: "row",
    columnGap: 7.5,
  },
  tweetProfileName: {
    color: "white",
    fontWeight: "800",
    fontSize: 15,
  },
  tweetProfileUsername: {
    color: "gray",
    fontWeight: "400",
  },
  tweetProfileVerified: {
    alignSelf: "flex-end",
  },
  tweetProfileSetting: {
    position: "absolute",
    right: 2.5,
  },
  tweetContent: {
    maxWidth: "95%",
    flex: 1,
    rowGap: 10,
  },
  tweetContentText: {
    color: "white",
    lineHeight: 20,
    opacity: 0.85,
  },
  tweetContentImage: {
    height: 300,
    width: "auto",
    borderRadius: 5,
  },
  tweetButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    paddingTop: 5,
    maxWidth: "95%",
  },
  tweetButton: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
  },
  tweetButtonText: {
    color: "gray",
  },
});
