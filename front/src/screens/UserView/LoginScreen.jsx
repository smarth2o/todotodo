import { useState } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { theme } from "../../colors.js"
import BottomButtons from "../../components/BottomButtons";
import TextField from "../../components/TextField.jsx";
import SimpleHeader from "../../components/SimpleHeader.jsx";
import { get } from "../../utils/API.js";

const LoginScreen = ({navigation}) => {
    const [secureText, setSecureText] = useState(true);
    const toggleSecureText = () => setSecureText(!secureText);

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            console.log(id, password);
            const params = { id: id, password: password };
            const data = await get('/users/login', params);
            console.log(data);
            navigation.navigate("Main");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.centerContents}>
                <SimpleHeader text="로그인" func={()=>navigation.goBack()}/>
                <View style={styles.mainContents}>
                    <TextField placeholder={"아이디"}
                        onChangeText={setId} value={id}
                    />
                    <TextField placeholder={"비밀번호"} type={secureText ? "password" : "plain"}
                        onChangeText={setPassword} value={password}
                        btnText={secureText ? "보기" : "숨기기"} handleBtn={toggleSecureText}/>
                </View>
            </View>
            <BottomButtons primaryText={"로그인하기"} secondaryText={"가입하기"} 
                        onPrimaryPress={handleLogin} onSecondaryPress={() => navigation.navigate("Register")}/>
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
