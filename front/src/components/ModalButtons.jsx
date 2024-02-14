import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { theme } from "../colors";

const ModalButtons = ({primaryText, secondaryText, onPrimaryPress, onSecondaryPress}) => {
 return(
    <View style={styles.bottomButtons}>
        <Pressable style={{...styles.btn, backgroundColor: theme.primaryBtn}} onPress={onPrimaryPress}>
            <Text style={{...styles.btnText, color: theme.primaryBtnText}}>{primaryText}</Text>
            </Pressable>
        <Pressable style={{...styles.btn, backgroundColor: theme.secondaryBtn}} onPress={onSecondaryPress}>
            <Text style={{...styles.btnText, color: theme.secondaryBtnText}}>{secondaryText}</Text>
            </Pressable>
    </View>
    )
}

export default ModalButtons;

const windowWidth = Dimensions.get('window').width; // 화면의 너비

const styles = StyleSheet.create({
    bottomButtons: {
        // flex: 0.3,
        flexDirection: "row-reverse",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: 10,
    },
    btn: {
        borderRadius: 10,
        paddingVertical: 12,
        // paddingHorizontal: 24,
        marginHorizontal: 2,
        width: windowWidth * 0.35,
    },
    btnText: {
        fontFamily: "NanumSquareNeoOTF-Bd",
        fontSize: 14,
        textAlign: "center"
    }
})