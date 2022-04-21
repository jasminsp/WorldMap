// Import from react
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import MapView, { Marker } from "react-native-maps";

const CountryDetail = ({ route }) => {
  const { file } = route.params;

  return (
    <View style={styles.mapContainer}>
      <View></View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: file.lat,
          longitude: file.long,
          latitudeDelta: 0.0,
          longitudeDelta: 0.0,
        }}
      >
        <Marker
          key={file.name}
          pinColor={"black"}
          coordinate={{
            latitude: Number(file.lat),
            longitude: Number(file.long),
          }}
          title={file.name}
        ></Marker>
      </MapView>
      <Text style={styles.title}>{file.name}</Text>
      <Text style={styles.location}>
        Latitude: {file.lat}, Longitude: {file.long}
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
