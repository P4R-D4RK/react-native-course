import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Image
        source={{ uri: "https://picsum.photos/200/200" }}
        style={styles.image}
      ></Image>
      <TouchableOpacity
        onPress={() => Alert.alert("Hello")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Press me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292929",
  },
  title: { fontSize: 30, color: "white" },
  image: { height: 200, width: 200, borderRadius: 100 },
  button: { backgroundColor: "deepskyblue", padding: 7, marginTop: 10 },
  buttonText: { color: "white", fontSize: 20 },
});

export default App;
