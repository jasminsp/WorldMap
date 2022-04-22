// Contributor: Jasmin Partanen
// Single country in the country list

// Imports
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const ListItem = ({ navigation, singleItem }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("CountryDetail", { country: singleItem });
      }}
    >
      <Text
        style={{
          flex: 8,
          fontSize: 24,
          padding: 6,
          color: "#738AA8",
        }}
      >
        {singleItem.name}
      </Text>
      <Text
        style={{
          flex: 1,
          fontSize: 20,
          fontWeight: "400",
          color: "#738AA8",
          opacity: 0.5,
        }}
      >
        {singleItem.iso2}
      </Text>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  navigation: PropTypes.object,
  singleItem: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    backgroundColor: "#FCFCFC",
  },
});

export default ListItem;
