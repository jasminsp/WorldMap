// Import from react
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

// Single country
const ListItem = ({ singleItem }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{ fontSize: 26, padding: 6 }}>{singleItem.name}</Text>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleItem: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default ListItem;
