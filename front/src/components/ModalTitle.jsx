import {StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from "../colors";

const ModalTitle = ({title, onClose}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Pressable onPress={onClose}>
                <MaterialIcons name="close" size={20} color={theme.icon} />
            </Pressable>
        </View>
    )
}

export default ModalTitle;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 20,
    },
    title: {
        fontFamily: "NanumSquareNeoOTF-Bd",
        fontSize: 14,
        color: theme.modalTitle,
    }
})