import { StyleSheet, View } from "react-native";
import TodoScreen from "./src/screen/TodoScreen";

export default function App() {
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <TodoScreen></TodoScreen>
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});
