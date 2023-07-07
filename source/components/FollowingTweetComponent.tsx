import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { TweetCard } from "../fragments";
import { followingTweetList } from "../constants";

export default function FollowingTweetComponent(): JSX.Element {
  return (
    <ScrollView
      style={followingTweetComponentStyles.container}
      contentContainerStyle={followingTweetComponentStyles.containerLayout}
      showsVerticalScrollIndicator={false}
    >
      {followingTweetList.map(
        ({ user, tweet, tweetImage, like, retweet, replayed, uploadedAt }): React.ReactNode => (
          <TweetCard
            key={`${user.username}'s tweet`}
            user={user}
            tweet={tweet}
            tweetImage={tweetImage}
            like={like}
            retweet={retweet}
            replayed={replayed}
            uploadedAt={uploadedAt}
          />
        )
      )}
    </ScrollView>
  );
}

const followingTweetComponentStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingVertical: 10,
  },
  containerLayout: {
    rowGap: 15,
  },
});
