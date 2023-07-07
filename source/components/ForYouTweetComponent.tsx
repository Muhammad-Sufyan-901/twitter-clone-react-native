import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { TweetCard } from "../fragments";
import { tweetList } from "../constants";

export default function ForYouTweetComponent(): JSX.Element {
  return (
    <ScrollView
      style={forYouTweetComponentStyles.container}
      contentContainerStyle={forYouTweetComponentStyles.containerLayout}
      showsVerticalScrollIndicator={false}
    >
      {tweetList.map(
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

const forYouTweetComponentStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingVertical: 10,
  },
  containerLayout: {
    rowGap: 15,
  },
});
