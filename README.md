# World map -application

## App idea

Application to show geolocations and details of different countries on the map.

### Features:

- Main screen to display different countries on the list fetched from API.
- Locations are displayed on the map with map markers
- Pressing a marker displays the name of the country
- Markers are grouped and clicking a specific group generates auto zoom
- Selecting a country opens map screen and zooms to selected location
- Selected location has a different marker
- Runs both on Android and iOS

- Dark mode not implemented, but could be done through React Native Appearance in the following way (gets the system theme prefered by user):

```
- import { useColorScheme } from "react-native";
- const theme = useColorScheme();

Inside styling we could use:
- <Text style={theme == 'light' ? styles.textLight : styles.textDark}>Hello</Text>
```

### Known bugs:

- Android: On the map with all coutries, pin wont change color when active.

### Libraries:

- React Native Maps - [Link to documents](https://github.com/react-native-maps/react-native-maps)

### APIs service:

API service used is [Link to documents](https://documenter.getpostman.com/view/1134062/T1LJjU52#5e9e8c4d-00e6-457b-b400-c9b86eedfeca)

- Apis service are tested with Postman
- App runs on Expo client

## Screenshots
Some of the views

<img src="/assets/screenshots/screenshot1.png" width="250"> <img src="/assets/screenshots/screenshot2.png" width="250"> <img src="/assets/screenshots/screenshot3.png" width="250">

### Installation:

To run this app, install it locally by cloning and use npm:

```
$ cd ../mobile-assignment
$ npm install
$ npm start
```

Open expo client app on mobile device and start using.
