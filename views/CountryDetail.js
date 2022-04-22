// Contributor: Jasmin Partanen
// Detailed country view

// Imports
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import MapView, { Marker } from "react-native-maps";
import { Platform } from "react-native";

// Country details as parameter from route
const CountryDetail = ({ route }) => {
  const { country } = route.params;

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: country.lat,
          longitude: country.long,
          latitudeDelta: Platform.OS == "android" ? 10 : 5,
          longitudeDelta: Platform.OS == "android" ? 5 : 5,
        }}
      >
        <Marker
          key={country.name}
          pinColor={Platform.OS == "android" ? "teal" : "black"}
          coordinate={{
            latitude: Number(country.lat),
            longitude: Number(country.long),
          }}
          title={country.name}
        ></Marker>
      </MapView>
      <Text style={styles.title}>{country.name}</Text>
      <Text style={styles.location}>
        Latitude: {country.lat}, Longitude: {country.long}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  map: {
    flex: 5,
    width: "100%",
    height: "50%",
  },
  title: {
    flex: 0,
    fontSize: 30,
    paddingTop: 30,
    alignSelf: "center",
    fontWeight: "700",
    color: "#217B8F",
  },
  location: {
    flex: 1,
    fontSize: 16,
    paddingTop: 10,
    alignSelf: "center",
    fontWeight: "400",
    opacity: 0.8,
  },
});

CountryDetail.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};

export default CountryDetail;
