import React, { useState } from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { theme } from "../colors";

const Chip = ({text}) => {
    const [selected, setSelected] = useState(false);
    const toggleSelected = () => {
        setSelected(!selected);
    }

    return(
        <Pressable 
            onPress={toggleSelected}
            style={[styles.container, selected && styles.containerSelected]}
        >
            <Text style={[styles.text, selected && styles.textSelected]}>{text}</Text>
        </Pressable>
    )
}

export default Chip;

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.chipBackground,
        borderRadius: 20,
        paddingVertical: 7,
        paddingHorizontal: 10,
        marginRight: 4,
        borderWidth: 2, // borderColor이 보이기 위해 테두리 추가
        borderColor: 'transparent' // 초기 테두리 색
    },
    containerSelected: {
        borderColor: theme.chipSelected
    },
    text: {
        fontFamily: "NanumSquareNeoOTF-Bd",
        fontSize: 11,
        color: theme.chipText
    },
    textSelected: {
        color: theme.selectedText
    }
})