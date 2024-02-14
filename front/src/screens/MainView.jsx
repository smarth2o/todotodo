import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState, useRef } from "react";
import { theme } from "../colors";
import TodoViewScreen from "./TodoView/TodoViewScreen";
import CategoryViewScreen from "./CategoryView/CategoryViewScreen";
import AddButton from "../components/AddButton";

const MainView = () => {
  const [title, setTitle] = useState("todo");
  return (
    <View style={styles.container}>
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
      <View style={styles.body}>
        {title === "todo" ? <TodoViewScreen /> : <CategoryViewScreen />}
      </View>
      <AddButton />
    </View>
  );
};

export default MainView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 38,
    flexDirection: "row",
  },
  title: {
    fontSize: 38,
    fontFamily: "NanumSquareNeoOTF-Hv",
    paddingHorizontal: 10,
  },
  body: {
    paddingTop: 50,
  },
});
