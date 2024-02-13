import { StyleSheet, View, Text } from "react-native";
import { theme } from "../../colors.js"
import BottomButtons from "../../components/BottomButtons";
import TextField from "../../components/TextField.jsx";
import SimpleHeader from "../../components/SimpleHeader.jsx";
import { registerUser } from "../../services/UserService.js";
import { useState } from "react";
import axios from 'axios';

const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    

    const handleRegister = async () => {
        const registerData = {
            name,
            id,
            password
        }
        try {
            // const jsonData = JSON.stringify(registerData, (key, value) => {
            //     if (key === 'self') return;
            //     return value;
            // })
            // 192.168.201.18
            const res = await fetch('http://localhost:8080/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(registerData)
            });
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    // const handleRegister = async () => {
    //     console.log("handleRegister");
    //     const registerData = {
    //         name,
    //         id,
    //         password
    //     }
    //     try {
    //         const res = await registerUser(registerData);
    //         console.log(res);
    //     } catch (error) {
    //         if (error.response) {
    //             // 서버 응답이 있는 경우
    //             console.log('Server responded with status:', error.response.status);
    //             console.log('Response data:', error.response.data);
    //             console.log('Headers:', error.response.headers);
    //           } else if (error.request) {
    //             // 요청이 서버로 전송되었지만 응답이 없는 경우
    //             console.log('Request sent but no response received:', error.request);
    //           } else {
    //             // 요청 전송하기 전에 오류가 발생한 경우
    //             console.error('Error before request was sent:', error.message);
    //           }
    //           console.error('Axios error config:', error.config);
    //     }
        
    // }

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
            <BottomButtons primaryText={"가입하기"} secondaryText={"취소하기"} 
                        onPrimaryPress={handleRegister} onSecondaryPress={() => navigation.goBack()}/>
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
