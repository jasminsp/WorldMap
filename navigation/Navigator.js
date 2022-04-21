import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon } from "react-native-elements";
import MainView from "../views/MainView";
import Map from "../views/Map";
import CountryDetail from "../views/CountryDetail";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case "Countries":
              iconName = "public";
              break;
            case "Map":
              iconName = "map";
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Countries" component={MainView}></Tab.Screen>
      <Tab.Screen name="Map" component={Map}></Tab.Screen>
    </Tab.Navigator>
  );
};

const StackScreen = () => {
  return (
    <Stack.Navigator>
      <>
        <Stack.Screen
          name="Main"
          component={TabScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="Map" component={Map}></Stack.Screen>
        <Stack.Screen
          name="CountryDetail"
          component={CountryDetail}
          options={{ title: "Details" }}
        ></Stack.Screen>
      </>
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
};

export default Navigator;
