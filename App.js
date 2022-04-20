import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MainProvider } from "./contexts/MainContext";
import MainView from "./views/MainView";

export default function App() {
  return (
    <>
      <MainProvider>
        <MainView />
      </MainProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
