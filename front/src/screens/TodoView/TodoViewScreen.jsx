import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import DayNavigator from "./DayNavigator";
import TodoList from "../../components/TodoList";
import AddButton from "../../components/AddButton";
import { get } from "../../utils/API";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRecoilValue } from 'recoil';
import { userState } from "../../RecoilState";

const TodoViewScreen = () => {
  const user = useRecoilValue(userState);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTodayTasks();
    console.log(tasks);
  }, []);

  // 사용자 정보 가져오기
  const getUserInfo = async () => {
    try {
      const userInfoString = await AsyncStorage.getItem('userInfo');
      if (userInfoString !== null) {
        const userInfo = JSON.parse(userInfoString);
        return userInfo;
      }
    } catch (error) {
      console.error('Error retrieving user info:', error);
    }
  };

  const fetchTodayTasks = async () => {
    try {
        // const userInfo = await getUserInfo();
        // console.log(userInfo.unq_id);
        // const user_id = userInfo.unq_id;
        const user_id = user.unq_id;
        console.log(user_id);
        const data = await get(`/tasks/${user_id}/today`);
        console.log(data);
        setTasks(data);
    } catch (error) {
        console.error(error);
    }
}
  return (
    <View>
      <DayNavigator />
      <TodoList tasks={tasks}/>
    </View>
  );
};

export default TodoViewScreen;
