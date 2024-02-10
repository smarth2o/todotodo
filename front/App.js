import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "./colors";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    "NanumSquareNeoOTF-Bd": require("./assets/fonts/NanumSquareNeoOTF-Bd.otf"),
    "NanumSquareNeoOTF-Eb": require("./assets/fonts/NanumSquareNeoOTF-Eb.otf"),
    "NanumSquareNeoOTF-Hv": require("./assets/fonts/NanumSquareNeoOTF-Hv.otf"),
  });

  const [title, setTitle] = useState("todo");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Pressable onPress={() => setTitle("todo")}>
          <Text
            style={{
              ...styles.title,
              color:
                title === "todo" ? theme.titleSelected : theme.titleUnselected,
            }}
          >
            투두
          </Text>
        </Pressable>
        <Pressable onPress={() => setTitle("category")}>
          <Text
            style={{
              ...styles.title,
              color:
                title === "category"
                  ? theme.titleSelected
                  : theme.titleUnselected,
            }}
          >
            카테고리
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 100,
    flexDirection: "row",
  },
  title: {
    fontSize: 38,
    fontFamily: "NanumSquareNeoOTF-Hv",
    paddingHorizontal: 10,
  },
});
