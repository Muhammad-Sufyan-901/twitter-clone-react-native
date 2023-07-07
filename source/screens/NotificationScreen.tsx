import * as React from "react";
import { Image, TouchableOpacity } from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import IonIcons from "react-native-vector-icons/Ionicons";
import { images } from "../constants";
import { AllNotificationsComponent, VerifiedNotificationsComponent, MentionNotificationsComponent } from "../components";

const TopTab = createMaterialTopTabNavigator();

export default function NotificationScreen(): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  React.useLayoutEffect(() => {
    const options: Partial<NativeStackNavigationOptions> = {
      headerTitle: "Notifications",
      headerStyle: {
        backgroundColor: "black",
      },
      headerTitleStyle: {
        color: "white",
      },
      headerLeft: (): React.ReactNode => (
        <TouchableOpacity style={{ paddingHorizontal: 15 }}>
          <Image
            source={images.UserProfile}
            style={{ height: 30, width: 30, borderRadius: 50 }}
          />
        </TouchableOpacity>
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
    <TopTab.Navigator
      initialRouteName="AllNotifications"
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
        name="AllNotifications"
        component={AllNotificationsComponent}
        options={{
          title: "All",
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontWeight: "700",
            fontSize: 15,
          },
        }}
      />
      <TopTab.Screen
        name="VerifiedNotifications"
        component={VerifiedNotificationsComponent}
        options={{
          title: "Verified",
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontWeight: "700",
            fontSize: 15,
          },
        }}
      />
      <TopTab.Screen
        name="MentionNotifications"
        component={MentionNotificationsComponent}
        options={{
          title: "Mentions",
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
