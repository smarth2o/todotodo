import { StyleSheet, View, Text, Modal, Dimensions } from "react-native";
import { theme } from "../colors";
import ModalButtons from "./ModalButtons";
import { del } from "../utils/API";

const ConfirmModal = ({isVisible, onClose, text, id}) => {

    const handleDelete = async () => {
        try {
            const res = await del(`/tasks/${id}`);
            console.log(res);
            onClose();
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <Modal
            animationType="none"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                <View style={styles.sheet}>
                    <Text style={styles.title}>{text}</Text>
                    <ModalButtons 
                        primaryText="삭제하기" onPrimaryPress={handleDelete}
                        secondaryText="취소하기" onSecondaryPress={onClose}
                    />
                </View>
            </View>
        </Modal>
    )
}

const windowWidth = Dimensions.get('window').width;

export default ConfirmModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        
    },
    sheet: {
        width: windowWidth * 0.65,
        backgroundColor: theme.background,
        borderRadius: 30,
        padding: 16,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    title: {
        fontFamily: "NanumSquareNeoOTF-Bd",
        fontSize: 14,
        color: theme.modalTitle,
        paddingVertical: 30
    }
})