import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcons from "react-native-vector-icons/Ionicons";
import { HappeningNow as HappeningNowCardProps } from "../types/data";

export default function HappeningNowCard({ title, viewers: { viewerProfile, views }, description, host: { profileImage, name } }: HappeningNowCardProps): JSX.Element {
  return (
    <View style={happeningNowCardStyles.container}>
      <View style={happeningNowCardStyles.contentContainer}>
        <View style={happeningNowCardStyles.happeningNowCardHeader}>
          <View style={happeningNowCardStyles.happeningNowCardLiveIndicator}>
            <IonIcons
              name="barcode-outline"
              size={25}
              color="white"
            />

            <Text style={happeningNowCardStyles.happeningNowCardLiveText}>LIVE</Text>
          </View>

          <TouchableOpacity>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={20}
              color="white"
            />
          </TouchableOpacity>
        </View>

        <View style={happeningNowCardStyles.happeningNowCardContent}>
          <Text
            style={happeningNowCardStyles.happeningNowCardTitle}
            numberOfLines={3}
          >
            {title}
          </Text>

          <View style={happeningNowCardStyles.happeningNowCardViewers}>
            {viewerProfile.map(
              (profile): React.ReactNode => (
                <TouchableOpacity key={profile}>
                  <Image
                    source={{ uri: profile }}
                    style={happeningNowCardStyles.happeningNowCardViewerProfile}
                  />
                </TouchableOpacity>
              )
            )}

            <Text style={happeningNowCardStyles.happeningNowCardViews}>{views} listening</Text>
          </View>
        </View>
      </View>

      <View style={happeningNowCardStyles.happeningNowCardDescriptionContent}>
        <TouchableOpacity style={happeningNowCardStyles.happeningNowCardHost}>
          <Image
            source={{ uri: profileImage }}
            style={happeningNowCardStyles.happeningNowCardHostProfile}
          />

          <Text style={happeningNowCardStyles.happeningNowCardHostName}>{name}</Text>

          <Text style={happeningNowCardStyles.happeningNowCardHostBadge}>Host</Text>
        </TouchableOpacity>

        <Text
          style={happeningNowCardStyles.happeningNowCardDescriptionText}
          numberOfLines={2}
        >
          {description}
        </Text>
      </View>
    </View>
  );
}

const happeningNowCardStyles = StyleSheet.create({
  container: {
    backgroundColor: "#A66CFF",
    borderRadius: 10,
  },
  contentContainer: {
    padding: 12.5,
  },
  happeningNowCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  happeningNowCardLiveIndicator: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 7.5,
  },
  happeningNowCardLiveText: {
    color: "white",
    fontWeight: "700",
  },
  happeningNowCardContent: {
    rowGap: 7.5,
    marginTop: 7.5,
  },
  happeningNowCardTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    maxWidth: "90%",
    textTransform: "capitalize",
  },
  happeningNowCardViewers: {
    flexDirection: "row",
    marginTop: 5,
  },
  happeningNowCardViewerProfile: {
    height: 25,
    width: 25,
    borderRadius: 50,
  },
  happeningNowCardViews: {
    marginLeft: 10,
    color: "white",
    fontSize: 15,
  },
  happeningNowCardDescriptionContent: {
    backgroundColor: "#7149C6",
    flex: 1,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    padding: 12.5,
  },
  happeningNowCardHost: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    marginBottom: 10,
  },
  happeningNowCardHostProfile: {
    height: 20,
    width: 20,
    borderRadius: 50,
  },
  happeningNowCardHostName: {
    color: "white",
    fontWeight: "700",
    fontSize: 15,
  },
  happeningNowCardHostBadge: {
    color: "white",
    paddingHorizontal: 2.5,
    backgroundColor: "#A66CFF",
    borderRadius: 2.5,
    fontSize: 15,
  },
  happeningNowCardDescriptionText: {
    color: "white",
    maxWidth: "95%",
    fontSize: 15,
  },
});
