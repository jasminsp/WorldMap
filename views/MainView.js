import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CountryList from "../components/CountryList";

// Return list of countries
const MainView = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Countries</Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "200",
          paddingHorizontal: 20,
          paddingBottom: 30,
          marginTop: -10,
        }}
      >
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
  },

  title: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignSelf: "flex-start",
    fontSize: 40,
    fontWeight: "600",
  },
});

export default MainView;
