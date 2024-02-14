import { StyleSheet, View, Text } from "react-native";
import TodoCard from "./TodoCard";

const TodoList = ({tasks}) => {
  return (
    <View style={styles.container}>
      {tasks.map(task => (
        <TodoCard key={task.unq_id} task={task} />
      ))}
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
});
