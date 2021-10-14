import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import NavFavourites from "../components/NavFavourites";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`mt-5`}>
      <TouchableOpacity
      onPress={() =>  navigation.navigate("HomeScreen")}
      style={tw`bg-gray-100 absolute left-3 z-50 p-3 rounded-full shadow-lg`}>
        <Icon name="menu" />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
