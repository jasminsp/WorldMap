// Contributor: Jasmin Partanen
// List of countries fetched from API

// Imports
import { SafeAreaView, StyleSheet, Text } from "react-native";
import CountryList from "../components/CountryList";

const MainView = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Countries</Text>
      <Text style={styles.descriptionLight}>
        Select a country to see more details
      </Text>
      <CountryList navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    height: "100%",
    backgroundColor: "#FCFCFC",
  },
  title: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignSelf: "flex-start",
    fontSize: 40,
    fontWeight: "600",
    color: "#217B8F",
  },
  descriptionLight: {
    fontSize: 16,
    fontWeight: "400",
    opacity: 0.5,
    paddingHorizontal: 20,
    paddingBottom: 30,
    marginTop: -10,
    color: "#217B8F",
  },
});

export default MainView;
