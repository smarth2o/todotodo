import { StyleSheet, View, Text } from "react-native";
import TodoCard from "./TodoCard";

const TodoList = () => {
  return (
    <View style={styles.container}>
      <TodoCard />
      <TodoCard />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
});
