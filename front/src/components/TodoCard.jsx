import { StyleSheet, View, Text } from "react-native";
import { theme } from "../colors";

const TodoCard = ({task}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.content}>{task.content}</Text>
      <View style={styles.info}>
        <Text style={styles.category}>{task.category_id}</Text>
        <Text style={styles.dueDate}>{task.dueDate}</Text>
      </View>
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.cardBackground,
    borderRadius: 10,
    marginVertical: 7,
    padding: 15,
    flexDirection: "column",
    // justifyContent: "space-around",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 6,
  },
  content: {
    fontFamily: "NanumSquareNeoOTF-Rg",
    fontSize: 15,
  },
  category: {
    fontFamily: "NanumSquareNeoOTF-Bd",
    fontSize: 10,
    color: theme.categoryName,
  },
  dueDate: {
    fontFamily: "NanumSquareNeoOTF-Bd",
    fontSize: 10,
    color: theme.dueDate,
    paddingLeft: 8,
  },
});
