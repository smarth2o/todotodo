import { StyleSheet, View, Text } from "react-native";
import { theme } from "../../colors.js"
import BottomButtons from "../../components/BottomButtons";
import TextField from "../../components/TextField.jsx";
import SimpleHeader from "../../components/SimpleHeader.jsx";
// import { registerUser } from "../../services/UserService.js";
import { useState } from "react";
// import axios from 'axios';
import { post } from "../../utils/API.js";

const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        // 비밀번호 일치하는지 확인
        const registerData = {
            name,
            id,
            password
        }
        try {
            const res = await post('/users/register', registerData);
            console.log(res);
            navigation.navigate("Login");
        } catch (error) {
            console.error(error);
        }
    };

    const handleIdCheck = () => {

    }

    return(
        <View style={styles.container}>
            <View style={styles.centerContents}>
                <SimpleHeader text="회원가입" func={()=>navigation.goBack()}/>
                <View style={styles.mainContents}>
                    <TextField 
                        placeholder={"이름"} 
                        onChangeText={setName} value={name}
                    />
                    <TextField 
                        placeholder={"아이디"} 
                        onChangeText={setId} value={id} 
                        btnText="중복확인"handleBtn={handleIdCheck} 
                        warning="4-12자 영문, 숫자로 입력해 주세요"
                    />
                    <TextField 
                        placeholder={"비밀번호"} type="password"
                        onChangeText={setPassword} value={password}
                    />
                    <TextField 
                        placeholder={"비밀번호 확인"} type="password" 
                        onChangeText={setConfirmPassword} value={confirmPassword}
                        warning="4-20자 영문, 숫자, 특수문자로 입력해 주세요" 
                    />    
                </View>
            </View>
            <BottomButtons primaryText={"가입하기"} secondaryText={"로그인하기"} 
                        onPrimaryPress={handleRegister} onSecondaryPress={() => navigation.navigate("Login")}/>
        </View>
    )
}

export default RegisterScreen;

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
