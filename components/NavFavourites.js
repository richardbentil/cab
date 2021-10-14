import React from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const locations = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, Uk",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, Uk",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={locations}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, {height: 0.5}]} />
      )}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-4`}>
          <Icon
            style={tw`mr-3 bg-gray-300 rounded-full p-2`}
            name={icon}
            color="white"
            type="ionicon"
            size={12}
          />
          <View>
            <Text style={tw`font-semibold text-sm`}>{location}</Text>
            <Text style={tw`text-gray-500 text-xs`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
