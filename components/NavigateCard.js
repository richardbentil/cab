import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-native-safe-area-context";
import { NEXT_APP_GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavorites from "./NavFavourites";
import { Icon } from "react-native-elements";

import tw from "tailwind-react-native-classnames";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center font-semibold py-1 -mt-6`}>Good morning, Richard</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            styles={inputBoxStyles}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            fetchDetails={true}
            returnKeyType={"search"}
            minLength={2}
            query={{
              key: NEXT_APP_GOOGLE_MAPS_API_KEY,
              language: "en",
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>
        <NavFavorites />
      </View>
      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("RiderOptionsCard")}
          style={tw`flex flex-row justify-between bg-black w-24 px-5 py-2 rounded-full`}>
          <Icon name="car" type="font-awesome" size={12} color="white" />
          <Text style={tw`text-white text-center text-xs`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-5 py-2 rounded-full`}>
          <Icon name="fast-food-outline" type="ionicon" size={16} color="black" />
          <Text style={tw`text-center text-xs`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const inputBoxStyles = StyleSheet.create({
  container: { flex: 0 },
  textInput: {
    height: 38,
    color: "#000",
    backgroundColor: "#d3d3d3",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    fontSize: 13,
  },
});
