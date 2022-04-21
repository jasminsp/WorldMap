import { SafeAreaView, StyleSheet, Text, View } from "react-native";

// Return list of countries
const CountryDetail = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the detailed view</Text>
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
});

export default CountryDetail;
