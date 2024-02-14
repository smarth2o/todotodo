import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions, Pressable } from "react-native";
import { theme } from "../colors";

const windowWidth = Dimensions.get('window').width;

const TextField = ({textInputRef, onChangeText, value, placeholder, type='plain', btnText='', handleBtn, warning=''}) => {

    return (
        <View>
            <View style={styles.textContainer}>
                <TextInput
                    ref={textInputRef}
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeholder}
                    enterKeyHint='next'
                    secureTextEntry={type==='password' ? true : false}
                />
                {btnText && <Pressable style={styles.btn} onPress={handleBtn}>
                    <Text style={styles.btnText}>{btnText}</Text>
                </Pressable>
                }
            </View>
            {warning && <Text style={styles.warningText}>{warning}</Text>}
        </View>
    )
}

export default TextField;

const styles = StyleSheet.create({
    textContainer: {
        backgroundColor: theme.cardBackground,
        borderRadius: 10,
        height: 50,
        width: windowWidth * 0.85,
        marginVertical: 4,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        color: theme.text,
        // fontSize: 13,
        fontFamily: 'NanumSquareNeoOTF-Rg'
    },
    btn: {

    },
    btnText: {
        color: theme.btnText,
        fontFamily: "NanumSquareNeoOTF-Rg",
        fontSize: 13
    },
    warningText: {
        color: theme.warningText,
        fontFamily: "NanumSquareNeoOTF-Rg",
        fontSize: 11,
        padding: 10,
        marginBottom: 16
    }
})