import BottomSheet from "../../components/BottomSheet";
import { StyleSheet, View, Text, Dimensions, Pressable } from "react-native";
import { useState } from "react";
import TextField from "../../components/TextField";
import { theme } from "../../colors";
import Chip from "../../components/Chip";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Calendar } from "react-native-calendars";
import DatePickerModal from "../../components/DatePickerModal";

const AddTodoModal = ({isVisible, onClose}) => {

     const [newTodo, setNewTodo] = useState('');
     const [dueDate, setDueDate] = useState(null);
     const [isDueDateCalendarVisible, setIsDueDateCalendarVisible] = useState(false);
     const [executeDate, setExecuteDate] = useState(null);
     const [isExecuteDateCalendarVisible, setIsExecuteDateCalendarVisible] = useState(false);

    const handleAddTodo = async () => {

    }

    const AddTodoContent = () => {
        return(
            <View style={styles.container}>
                <TextField 
                    onChangeText={setNewTodo}
                    value={newTodo}
                    placeholder="새로운 할 일..."
                />
                <View style={styles.options}>
                    <View style={styles.option}>
                        <Text style={styles.label}>카테고리</Text>
                        <View style={styles.contents}>
                            <Chip text="카테고리"/>
                            <Chip text="카테고리"/>
                            <Chip text="카테고리"/>
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