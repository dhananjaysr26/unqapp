import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors'

const ListItem = ({ title, subtitle, image, ImageComponent, settingComponent }) => {
    return (
        <View style={styles.container}>
            {ImageComponent}
            {image && <Image source={image} style={styles.image} />}
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
            {settingComponent}

        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        color: colors.white,
        width: "100%",
        borderRadius: 25,
    },
    icon: {
        marginRight: 10
    },
    details: {
        marginLeft: 10,
        justifyContent: "center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,

    },
    title: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: 20
    },
    subtitle: {
        color: colors.medium

    }
})
