import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { theme } from "../colors";

const BottomButtons = ({primaryText, secondaryText, onPrimaryPress, onSecondaryPress}) => {
 return(
    <View style={styles.bottomButtons}>
        <Pressable style={{...styles.btn, backgroundColor: theme.primaryBtn}} onPress={onPrimaryPress}>
            <Text style={{...styles.btnText, color: theme.primaryBtnText}}>{primaryText}</Text>
            </Pressable>
        <Pressable style={{...styles.btn, backgroundColor: onSecondaryPress==="로그인하기" ? theme.secondaryBtn : null}} onPress={onSecondaryPress}>
            <Text style={{...styles.btnText, color: theme.secondaryBtnText}}>{secondaryText}</Text>
            </Pressable>
    </View>
    )
}

export default BottomButtons;

const windowWidth = Dimensions.get('window').width; // 화면의 너비

const styles = StyleSheet.create({
    bottomButtons: {
        flex: 0.3,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    btn: {
        borderRadius: 10,
        paddingVertical: 16,
        marginVertical: 4,
        width: windowWidth * 0.85,
    },
    btnText: {
        fontFamily: "NanumSquareNeoOTF-Bd",
        fontSize: 14,
        textAlign: "center"
    }
})