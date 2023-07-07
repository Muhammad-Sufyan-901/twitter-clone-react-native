import * as React from "react";
import { Image, TouchableOpacity } from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import IonIcons from "react-native-vector-icons/Ionicons";
import { images } from "../constants/index";
import { ForYouTweetComponent, FollowingTweetComponent } from "../components";

const TopTab = createMaterialTopTabNavigator();

export default function HomeScreen(): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  React.useLayoutEffect(() => {
    const options: Partial<NativeStackNavigationOptions> = {
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "black",
      },
      headerLeft: (): React.ReactNode => (
        <TouchableOpacity style={{ paddingHorizontal: 15 }}>
          <Image
            source={images.UserProfile}
            style={{ height: 30, width: 30, borderRadius: 50 }}
          />
        </TouchableOpacity>
      ),
      headerTitle: (): React.ReactNode => (
        <IonIcons
          name="logo-twitter"
          size={25}
          color="#00acee"
        />
      ),
    };

    navigation.setOptions(options);
  }, []);

  return (
    <TopTab.Navigator
      initialRouteName="ForYouTweet"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "black",
        },
        tabBarIndicatorStyle: {
          borderBottomWidth: 4.5,
          borderColor: "#00acee",
          borderRadius: 8,
        },
      }}
    >
      <TopTab.Screen
        name="ForYouTweet"
        component={ForYouTweetComponent}
        options={{
          title: "For You",
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontWeight: "700",
            fontSize: 15,
          },
        }}
      />
      <TopTab.Screen
        name="FollowingTweet"
        component={FollowingTweetComponent}
        options={{
          title: "Following",
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontWeight: "700",
            fontSize: 15,
          },
        }}
      />
    </TopTab.Navigator>
  );
}
