import { StatusBar } from "expo-status-bar";
import { MainProvider } from "./contexts/MainContext";
import Navigator from "./navigation/Navigator";

export default function App() {
  return (
    <>
      <MainProvider>
        <Navigator />
        <StatusBar style="light" />
      </MainProvider>
    </>
  );
}
