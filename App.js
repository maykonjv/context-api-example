import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Screen1 } from "./screens/Screen1";
import { Screen2 } from "./screens/Screen2";

const Stack = createStackNavigator();
export const MyContext = React.createContext();

export default function App() {
  const [myState, setMyState] = useState({});

  return (
    <MyContext.Provider value={{ myState, setMyState }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="route 1" component={Screen1} />
          <Stack.Screen name="route 2" component={Screen2} />
        </Stack.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
  );
}
