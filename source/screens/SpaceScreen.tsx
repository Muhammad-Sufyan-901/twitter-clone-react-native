import * as React from "react";
import { StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { images } from "../constants";
import { CalendarEventComponent, HappeningNowComponent } from "../components";

export default function SpaceScreen(): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  React.useLayoutEffect(() => {
    const options: Partial<NativeStackNavigationOptions> = {
      headerTitle: "Twitter",
      headerTitleStyle: {
        color: "white",
      },
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
    };

    navigation.setOptions(options);
  }, []);

  return (
    <ScrollView
      style={spaceScreenStyles.container}
      showsVerticalScrollIndicator={false}
    >
      <HappeningNowComponent />

      <CalendarEventComponent />
    </ScrollView>
  );
}

const spaceScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});
