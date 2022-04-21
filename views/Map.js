import { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";
import { useMedia } from "../hooks/ApiHooks";

// Return list of countries
const Map = () => {
  const { mediaArray } = useMedia();
  const [markers, setMarkers] = useState([]);
  const [markerActive, setMarkerActive] = useState([]);

  // Getting marker data only once
  useEffect(
    () => {
      setMarkers(mediaArray.data);
    },
    markers,
    []
  );

  const initialRegion = {
    latitude: 85.72825,
    longitude: 10.23,
    latitudeDelta: 5.45,
    longitudeDelta: 5.45,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView style={styles.map} initialRegion={initialRegion}>
          {markers &&
            markers.map((marker, index) => (
              <Marker
                key={index}
                pinColor={markerActive == marker.iso2 ? "#1EA689" : "#000000"}
                coordinate={{
                  latitude: Number(marker.lat),
                  longitude: Number(marker.long),
                }}
                onPress={() => setMarkerActive(marker.iso2)}
                title={marker.name}
              ></Marker>
            ))}
        </MapView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  mapContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default Map;
