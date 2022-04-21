import { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { useMedia } from "../hooks/ApiHooks";

// Return list of countries
const Map = () => {
  const { mediaArray } = useMedia();
  const [markers, setMarkers] = useState(null);

  // Getting marker data only once
  useEffect(
    () => {
      setMarkers(mediaArray.data);
    },
    markers,
    []
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView style={styles.map}>
          {markers &&
            markers.map((marker, index) => (
              <Marker
                key={index}
                pinColor={"black"}
                coordinate={{
                  latitude: marker.lat,
                  longitude: marker.long,
                }}
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
