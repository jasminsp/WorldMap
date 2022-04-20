// Import from react
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useMedia } from "../hooks/ApiHooks";
import ListItem from "./ListItem";
import PropTypes from "prop-types";
import { Divider } from "react-native-elements";

// Single country
const CountryList = ({ navigation }) => {
  const { mediaArray } = useMedia();

  return (
    <View style={{ flex: 10 }}>
      <FlatList
        data={mediaArray.data}
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
