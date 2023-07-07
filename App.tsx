import * as React from "react";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, InboxScreen, NotificationScreen, SearchScreen, SpaceScreen } from "./source/screens";
import IonIcons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const RootBottomTab = createBottomTabNavigator();

export default function App(): JSX.Element {
  NavigationBar.setBackgroundColorAsync("black");
  NavigationBar.setButtonStyleAsync("light");

  return (
    <NavigationContainer>
      <RootBottomTab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
          tabBarStyle: {
            backgroundColor: "black",
            height: 60,
            borderTopWidth: 0.2,
            borderTopColor: "",
          },
        }}
      >
        <RootBottomTab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color }): React.ReactNode => (
              <MaterialCommunityIcons
                name={focused ? "home" : "home-outline"}
                color={color}
                size={30}
              />
            ),
          }}
        />
        <RootBottomTab.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused, color, size }): React.ReactNode => (
              <IonIcons
                name={focused ? "search" : "search-outline"}
                color={color}
                size={size}
              />
            ),
          }}
        />
        <RootBottomTab.Screen
          name="SpaceScreen"
          component={SpaceScreen}
          options={{
            tabBarIcon: ({ focused, color, size }): React.ReactNode => (
              <IonIcons
                name={focused ? "mic" : "mic-outline"}
                color={color}
                size={size}
              />
            ),
          }}
        />
        <RootBottomTab.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{
            tabBarIcon: ({ focused, color, size }): React.ReactNode => (
              <IonIcons
                name={focused ? "notifications" : "notifications-outline"}
                color={color}
                size={size}
              />
            ),
          }}
        />
        <RootBottomTab.Screen
          name="InboxScreen"
          component={InboxScreen}
          options={{
            tabBarIcon: ({ focused, color, size }): React.ReactNode => (
              <IonIcons
                name={focused ? "mail" : "mail-outline"}
                color={color}
                size={size}
              />
            ),
          }}
        />
      </RootBottomTab.Navigator>
      <StatusBar
        style="light"
        backgroundColor="black"
      />
    </NavigationContainer>
  );
}
