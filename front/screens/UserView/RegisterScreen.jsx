import { StyleSheet, View, Text } from "react-native";
import { theme } from "../../colors.js"
import BottomButtons from "../../components/BottomButtons";
import TextField from "../../components/TextField.jsx";
import SimpleHeader from "../../components/SimpleHeader.jsx";

const RegisterScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.centerContents}>
                <SimpleHeader text="회원가입" func={()=>navigation.goBack()}/>
                <View style={styles.mainContents}>
                    <TextField placeholder={"이름"}/>
                    <TextField placeholder={"아이디"} btnText="중복확인"handleBtn={() => {}} warning="4-12자 영문, 숫자로 입력해 주세요"/>
                    <TextField placeholder={"비밀번호"} type="password"/>
                    <TextField placeholder={"비밀번호 확인"} type="password" warning="4-20자 영문, 숫자, 특수문자로 입력해 주세요" />    
                </View>
            </View>
            <BottomButtons primaryText={"가입하기"} secondaryText={"취소하기"} 
                        onPrimaryPress={() => {}} onSecondaryPress={() => navigation.goBack()}/>
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
