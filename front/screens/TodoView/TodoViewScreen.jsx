import { View, Text } from "react-native";
import DayNavigator from "./DayNavigator";
import TodoList from "../../components/TodoList";

const TodoViewScreen = () => {
  return (
    <View>
      <DayNavigator />
      <TodoList />
    </View>
  );
};

export default TodoViewScreen;
