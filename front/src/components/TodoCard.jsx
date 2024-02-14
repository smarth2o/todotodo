import { useState, useEffect} from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { theme } from "../colors";
import { get } from "../utils/API";
import ConfirmModal from "./ConfirmModal";

const TodoCard = ({task}) => {
  const [categoryName, setCategoryName] = useState('');
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);

  const formatLocalDateTime = (localDateTimeString) => {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const dateParts = localDateTimeString.split('T')[0].split('-');
    const day = dateParts[2];
    const month = dateParts[1];
    const formattedDate = `${month}.${day} ${days[new Date(localDateTimeString.replace('T', ' ')).getDay()]}`;
    return formattedDate;
  };

  useEffect(() => {
    // 카테고리 이름 가져오기
    const fetchCategoryName = async (categoryId) => {
      try {
        const res = await get(`/categories/${categoryId}`);
        setCategoryName(res.name);
      } catch (error) {
        console.error('Error fetching category name:', error);
        return ''; // 에러 발생 시 빈 문자열 반환
      }
    };
    fetchCategoryName(task.category_id);
  }, [task.category_id]);

  return (
    <Pressable style={styles.card} onLongPress={() => setIsConfirmModalVisible(true)}>
      <Text style={styles.content}>{task.content}</Text>
      <View style={styles.info}>
        <Text style={styles.category}>{categoryName}</Text>
        <Text style={styles.dueDate}>{formatLocalDateTime(task.due_by)}</Text>
      </View>
      <ConfirmModal 
        isVisible={isConfirmModalVisible}
        onClose={() => setIsConfirmModalVisible(false)}
        text="할 일을 삭제할까요?"
        id={task.unq_id}
      />
    </Pressable>
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
