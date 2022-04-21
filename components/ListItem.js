// Import from react
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

// Single country
const ListItem = ({ navigation, singleItem }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("CountryDetail", { file: singleItem });
      }}
    >
      <Text style={{ flex: 8, fontSize: 24, padding: 6 }}>
        {singleItem.name}
      </Text>
      <Text style={{ flex: 1, fontSize: 20, fontWeight: "100" }}>
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
  },
});

export default ListItem;
