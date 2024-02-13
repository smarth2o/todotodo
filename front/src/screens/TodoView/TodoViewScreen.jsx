import { StyleSheet, View, Text } from "react-native";
import DayNavigator from "./DayNavigator";
import TodoList from "../../components/TodoList";
import AddButton from "../../components/AddButton";

const TodoViewScreen = () => {
  return (
    <View>
      <DayNavigator />
      <TodoList />
    </View>
  );
};

export default TodoViewScreen;
