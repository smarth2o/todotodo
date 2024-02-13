import { StyleSheet, View, Text, Pressable } from 'react-native';
import { theme } from '../colors';
import { MaterialIcons } from '@expo/vector-icons';

const SimpleHeader = ({text, func}) => {
    return (
        <View style={styles.header}>
            <Pressable onPress={func}>
                <MaterialIcons name="arrow-back-ios-new" size={18} color={theme.icon} />
            </Pressable> 
            <Text style={styles.title}>{text}</Text>
        </View>
    )
}

export default SimpleHeader;

const styles = StyleSheet.create({
    header: {
        flex: 0.1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "baseline",
    },
    title: {
        color: theme.simpleTitle,
        fontFamily: 'NanumSquareNeoOTF-Bd',
        fontSize: 20
    }
})