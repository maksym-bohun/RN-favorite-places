import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AllPlacesScreen from "./screens/AllPlacesScreen";
import AddPlaceScreen from "./screens/AddPlaceScreen";
import IconButton from "./components/ui/IconButton";
import { Colors } from "./constants/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary500,
            },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlacesScreen}
            options={({ navigation }) => ({
              title: "Your favorite places",
              headerRight: ({ tintColor }) => {
                return (
                  <IconButton
                    name="add"
                    size={28}
                    color={"#000"}
                    onPress={() => navigation.navigate("AddPlace")}
                  />
                );
              },
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlaceScreen}
            options={{ title: "Add a new place", headerBackTitle: "Back" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
