import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import NavFavourites from "../components/NavFavourites";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { NEXT_APP_GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setOrigin, setDestination } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <View style={tw`p-3`}>
        <Image
          style={{
            width: 80,
            height: 80,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          styles={{
            container: { flex: 0 },
            textInput: {
              height: 38,
              color: "#000",
              fontSize: 16,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          minLength={2}
          query={{
            key: NEXT_APP_GOOGLE_MAPS_API_KEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavOptions />
      </View>
      <NavFavourites />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
