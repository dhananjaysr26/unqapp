import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../config/colors'

const ListItemSeparator = () => {
    return (

        <View style={styles.seperate} />
    )
}

export default ListItemSeparator

const styles = StyleSheet.create({
    seperate: {
        width: "100%",
        height: 1,
        backgroundColor: colors.black
    }
})
