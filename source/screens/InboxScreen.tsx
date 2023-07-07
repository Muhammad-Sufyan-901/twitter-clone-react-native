import * as React from "react";
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import IonIcons from "react-native-vector-icons/Ionicons";
import { images } from "../constants";

export default function InboxScreen(): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const screenWidth = Dimensions.get("screen").width;

  React.useLayoutEffect(() => {
    const options: Partial<NativeStackNavigationOptions> = {
      headerStyle: {
        backgroundColor: "black",
      },
      headerLeft: (): React.ReactNode => (
        <TouchableOpacity style={{ paddingLeft: 15 }}>
          <Image
            source={images.UserProfile}
            style={{ height: 30, width: 30, borderRadius: 50 }}
          />
        </TouchableOpacity>
      ),
      headerTitle: (): React.ReactNode => (
        <TextInput
          placeholder="Search Direct Messages"
          placeholderTextColor="#807c7c"
          keyboardAppearance="dark"
          style={{
            backgroundColor: "#262626",
            flex: 1,
            width: screenWidth - 120,
            paddingHorizontal: 15,
            height: "100%",
            borderRadius: 50,
            color: "white",
            marginVertical: 10,
            textAlignVertical: "center",
            borderWidth: 0,
          }}
        />
      ),
      headerRight: (): React.ReactNode => (
        <TouchableOpacity style={{ paddingHorizontal: 15 }}>
          <IonIcons
            name="settings-outline"
            size={25}
            color="white"
          />
        </TouchableOpacity>
      ),
    };

    navigation.setOptions(options);
  }, []);

  return (
    <View style={inboxScreenStyles.container}>
      <Text style={inboxScreenStyles.inboxScreenTitle}>Welcome to your inbox!</Text>

      <Text style={inboxScreenStyles.inboxScreenDescription}>Drop a line, share Tweets and more with private conversations between you and others on Twitter</Text>

      <TouchableOpacity style={inboxScreenStyles.inboxScreenButton}>
        <Text style={inboxScreenStyles.inboxScreenButtonText}>Write a message</Text>
      </TouchableOpacity>
    </View>
  );
}

const inboxScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
    paddingHorizontal: 30,
  },
  inboxScreenTitle: {
    color: "white",
    fontSize: 35,
    fontWeight: "600",
    maxWidth: "85%",
    marginBottom: 10,
  },
  inboxScreenDescription: {
    color: "white",
    opacity: 0.7,
    maxWidth: "85%",
    marginBottom: 20,
  },
  inboxScreenButton: {
    backgroundColor: "#00acee",
    paddingHorizontal: 15,
    paddingVertical: 7.5,
    borderRadius: 25,
    width: "50%",
    alignItems: "center",
  },
  inboxScreenButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 17.5,
  },
});
