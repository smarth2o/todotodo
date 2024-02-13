import { useState } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { theme } from "../../colors.js"
import BottomButtons from "../../components/BottomButtons";
import TextField from "../../components/TextField.jsx";
import SimpleHeader from "../../components/SimpleHeader.jsx";

const LoginScreen = ({navigation}) => {
    const [secureText, setSecureText] = useState(true);
    const toggleSecureText = () => setSecureText(!secureText);

    return (
        <View style={styles.container}>
            <View style={styles.centerContents}>
                <SimpleHeader text="로그인" func={()=>navigation.goBack()}/>
                <View style={styles.mainContents}>
                    <TextField placeholder={"아이디"}/>
                    <TextField placeholder={"비밀번호"} type={secureText ? "password" : "plain"} 
                        btnText={secureText ? "보기" : "숨기기"} handleBtn={toggleSecureText}/>
                </View>
            </View>
            <BottomButtons primaryText={"로그인하기"} secondaryText={"취소하기"} 
                        onPrimaryPress={() => {}} onSecondaryPress={() => navigation.goBack()}/>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background,
        flexDirection: "column",
        alignItems: "center",
        // paddingHorizontal: 20
    },
    centerContents: {           
        flex: 1,
        justifyContent: "space-around"
    },
    mainContents: {
        flex: 0.6
    }
});
