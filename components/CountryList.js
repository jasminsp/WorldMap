// Contributor: Jasmin Partanen
// Creation of country list

// Imports
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useData } from "../hooks/ApiHooks";
import ListItem from "./ListItem";
import PropTypes from "prop-types";
import { Divider } from "react-native-elements";

const CountryList = ({ navigation }) => {
  const { countryArray } = useData();

  // return flatlist with countryData
  return (
    <View style={{ flex: 10 }}>
      <FlatList
        data={countryArray.data}
        contentContainerStyle={styles.container}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={Divider}
        renderItem={({ item }) => (
          <ListItem navigation={navigation} singleItem={item} />
        )}
      ></FlatList>
    </View>
  );
};

CountryList.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
  },
});

export default CountryList;
