import { StyleSheet, View, Text, Pressable } from "react-native";
import { theme } from "../colors";
import BottomButtons from "../components/BottomButtons";

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={styles.onboardingContainer}>
        <View style={styles.centerContents}><Text style={styles.icon}>ㅌㄷ{'\n'}ㅌㄷ</Text></View>
        <BottomButtons primaryText={"시작하기"} secondaryText={"로그인하기"} 
        onPrimaryPress={() => navigation.navigate("Register")}
        onSecondaryPress={() => navigation.navigate("Login")}/>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    onboardingContainer: {
        flex: 1,
        backgroundColor: theme.background,
        flexDirection: "column",
        alignItems: "center",
        // paddingHorizontal: 20
    },
    centerContents: {
        flex: 1,
        justifyContent: "center"
    },
    icon: {
        color: theme.titleSelected,
        fontFamily: "NanumSquareNeoOTF-Hv",
        fontSize: 64,
        lineHeight: 55,
        letterSpacing: 0
    }   
})
