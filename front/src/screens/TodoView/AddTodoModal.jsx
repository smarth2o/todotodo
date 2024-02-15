import BottomSheet from "../../components/BottomSheet";
import { StyleSheet, View, Text, Dimensions, Pressable } from "react-native";
import { useState, useEffect, useRef } from "react";
import TextField from "../../components/TextField";
import { theme } from "../../colors";
import Chip from "../../components/Chip";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Calendar } from "react-native-calendars";
import DatePickerModal from "../../components/DatePickerModal";
import { get, post } from "../../utils/API";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRecoilValue } from 'recoil';
import { userState } from "../../RecoilState";
import MyDateTimePicker from "../../components/MyDateTimePicker";
import { parse, format } from 'date-fns';

const AddTodoModal = ({isVisible, onClose, setTasks}) => {

    const user = useRecoilValue(userState);
     const textInputRef = useRef(null);
     const [newTodo, setNewTodo] = useState('');
     const [categories, setCategories] = useState([]);
     const [dueDate, setDueDate] = useState(null);
     const [isDueDateCalendarVisible, setIsDueDateCalendarVisible] = useState(false);
     const [executeDate, setExecuteDate] = useState(null);
     const [isExecuteDateCalendarVisible, setIsExecuteDateCalendarVisible] = useState(false);

    useEffect(() => {
        if (isVisible) {
            // 모달이 열릴 때 TextInput에 포커스를 줌
            textInputRef.current.focus();
            fetchCategories();
        } else {
            setNewTodo('');
            setDueDate(null);
            setExecuteDate(null);
        }
    }, [isVisible]);

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
    
    const fetchCategories = async () => {
        try {
            const user_id = user.unq_id;
            console.log(user_id);
            const data = await get(`/categories/${user_id}/all`);
            console.log(data);
            setCategories(data);
        } catch (error) {
            console.error(error);
        }
    }

    // 할일 추가
    const handleAddTodo = async () => {
        // newTodo 비어있을 때 예외처리
        if (!newTodo) {
            console.error('할 일 내용을 입력해주세요.');
            return;
        }
        let taskData = {
            content: newTodo,
            user_id: user.unq_id,
            category_id: 5
        }

        // dueDate가 있을 때만 변환하여 추가
        if (dueDate) {
            const dueDateTime = `${dueDate} 23:59:59`;
            const localDateTimeString = format(parse(dueDateTime, "yyyy-MM-dd HH:mm:ss", new Date()), "yyyy-MM-dd'T'HH:mm:ss");
            taskData.due_by = localDateTimeString;
        }

        // executeDate가 있으면 추가
        if (executeDate) {
            taskData.execute_date = executeDate;
        }

        console.log("Task Data:", taskData);

        try {
            const res = await post('/tasks/add', taskData);
            console.log(res);
            onClose();
            setNewTodo('');
            setDueDate(null);
            setExecuteDate(null);
        } catch (error) {
            // console.error(error);
        }
    };

    const AddTodoContent = () => {
        return(
            <View style={styles.container}>
                <TextField 
                    textInputRef={textInputRef}
                    onChangeText={setNewTodo}
                    value={newTodo}
                    placeholder="새로운 할 일..."
                />
                <View style={styles.options}>
                    <View style={styles.option}>
                        <Text style={styles.label}>카테고리</Text>
                        <View style={styles.contents}>
                            {categories.map(category => (
                                <Chip key={category.unq_id} text={category.name} />
                            ))}
                        </View>
                    </View>
                    <View style={styles.option}>
                        <Text style={styles.label}>기한</Text>
                        <Pressable style={styles.icon} onPress={() => setIsDueDateCalendarVisible(true)}>
                            <MaterialCommunityIcons name="calendar-check" size={16} color={theme.icon} />
                        </Pressable>
                        {isDueDateCalendarVisible &&
                        <DatePickerModal
                            onSelectDate={setDueDate}
                            isVisible={isDueDateCalendarVisible}
                            onClose={() => setIsDueDateCalendarVisible(false)}
                        />}
                        <View style={styles.contents}>
                            {dueDate ? 
                                <Text style={{...styles.text, color: theme.selectedText}}>{dueDate}</Text> : <Text style={{...styles.text, color: theme.emptyText}}>기한 없음</Text>
                            }
                        </View>
                    </View>
                    <View style={styles.option}>
                        <Text style={styles.label}>일정</Text>
                        <Pressable style={styles.icon} onPress={() => setIsExecuteDateCalendarVisible(true)}>
                            <MaterialCommunityIcons name="calendar-clock" size={16} color={theme.icon} />
                        </Pressable>
                        {isExecuteDateCalendarVisible &&
                        <DatePickerModal
                            onSelectDate={setExecuteDate}
                            isVisible={isExecuteDateCalendarVisible}
                            onClose={() => setIsExecuteDateCalendarVisible(false)}
                        />}
                        <View style={styles.contents}>
                            {executeDate ? 
                                <Text style={{...styles.text, color: theme.selectedText}}>{executeDate}</Text> : <Text style={{...styles.text, color: theme.emptyText}}>일정 없음</Text>
                            }
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return(
        <BottomSheet 
        title="할 일 추가"
        isVisible={isVisible} onClose={onClose} 
        contentComponent={<AddTodoContent/>}
        primaryText="추가하기" onPrimaryPress={handleAddTodo}/>
    )
}


export default AddTodoModal;

const windowWidth = Dimensions.get('window').width; // 화면의 너비

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    options: {
        flexDirection: "column",
        justifyContent: "space-evenly",
        // alignItems: "baseline"
    },
    option: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 16,
        width: windowWidth * 0.85
    },
    label: {
        fontFamily: "NanumSquareNeoOTF-Bd",
        fontSize: 12,
        color: theme.modalOptionText
    },
    icon: {
        paddingLeft: 4
    },
    contents: {
        paddingLeft: 20,
        flexDirection: "row",
        // justifyContent: "space-around",
        alignItems: "center"
    },
    text: {
        fontFamily: "NanumSquareNeoOTF-Rg",
        fontSize: 12,
    }
})