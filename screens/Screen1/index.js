import { useContext } from "react";
import { Button } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { MyContext } from "../../App";

export const Screen1 = ({ navigation }) => {
  const { myState, setMyState } = useContext(MyContext);
  const goToScreen2 = () => {
    navigation.push("route 2");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>Screen 1</Text>
      <Button
        color="#0fa36b"
        title="Navigate to screen 2"
        onPress={goToScreen2}
      ></Button>
      <Text style={styles.description}>myState: {JSON.stringify(myState)}</Text>
      <Button
        color="#0fa36b"
        title="Set myState to { name: 'Marry', age: 33 }"
        onPress={() => setMyState({ name: "Marry", age: 33 })}
      ></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  description: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
