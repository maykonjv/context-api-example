import { useContext } from "react";
import { Button } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { MyContext } from "../../App";

export const Screen2 = ({ navigation }) => {
  const { myState, setMyState } = useContext(MyContext);
  const goToScreen1 = () => {
    // navigation.push("route 1");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>Screen 2</Text>
      <Button
        color="#0fa36b"
        title="Navigate to screen 1"
        onPress={goToScreen1}
      ></Button>
      <Text style={styles.description}>myState: {JSON.stringify(myState)}</Text>
      <Button
        color="#0fa36b"
        title="Set myState to { name: 'John', age: 30 }"
        onPress={() => setMyState({ name: "John", age: 30 })}
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
