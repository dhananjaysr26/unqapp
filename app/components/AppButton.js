import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../config/colors'

export default function AppButton({ title, onPress, color = "primary", dis }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: dis ? colors[color] : "#57529c" }]} onPress={onPress} disabled={!dis}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontSize: 15,
        // letterSpacing: 1,
        textTransform: "uppercase",
        fontWeight: "bold",
    }

})
