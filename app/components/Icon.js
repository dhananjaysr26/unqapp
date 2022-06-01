import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import colors from '../config/colors';


const Icon = ({
    iconLib,
    name,
    size = 50,
    iconColor = colors.primary
}) => {
    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            justifyContent: "center",
            alignItems: "center"
        }}>
            {iconLib ? <Ionicons name={name} color={iconColor} size={size * 0.5} /> :
                <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />

            }

        </View>
    )
}

export default Icon

const styles = StyleSheet.create({})
