// Import from react
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

// Single country
const ListItem = ({ singleItem }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{ flex: 8, fontSize: 24, padding: 6 }}>
        {singleItem.name}
      </Text>
      <Text style={{ flex: 1, fontSize: 38, fontWeight: "100" }}>
        {singleItem.unicodeFlag}
      </Text>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleItem: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ListItem;
