import * as React from "react";
import { StyleSheet, Image, TouchableOpacity, TextInput, Dimensions, ScrollView } from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import IonIcons from "react-native-vector-icons/Ionicons";
import { TrendingTopicComponent, TrendingVideoComponent } from "../components";
import { images } from "../constants";

export default function SearchScreen(): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const screenWidth = Dimensions.get("screen").width;

  React.useLayoutEffect(() => {
    const options: Partial<NativeStackNavigationOptions> = {
      headerStyle: {
        backgroundColor: "black",
      },
      headerTitle: (): React.ReactNode => (
        <TextInput
          placeholder="Search Twitter"
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
      headerLeft: (): React.ReactNode => (
        <TouchableOpacity style={{ paddingLeft: 15 }}>
          <Image
            source={images.UserProfile}
            style={{ height: 30, width: 30, borderRadius: 50 }}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={{ paddingRight: 15 }}>
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
    <ScrollView
      style={searchScreenStyles.container}
      showsVerticalScrollIndicator={false}
    >
      <TrendingTopicComponent />

      <TrendingVideoComponent />
    </ScrollView>
  );
}

const searchScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});
