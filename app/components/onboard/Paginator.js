import { StyleSheet, Text, View, Animated, useWindowDimensions } from 'react-native'
import React from 'react'

const paginator = ({ data, scrollX }) => {
    const { width } = useWindowDimensions()

    return (
        <View style={{ flexDirection: 'row', height: 64 }}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width]
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: "clamp"
                })
                return (
                    <Animated.View style={[styles.dot, { width: dotWidth }]}
                        key={i.toString()}
                    />
                )
            })}
        </View>
    )
}

export default paginator

const styles = StyleSheet.create({
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#000',
        marginHorizontal: 8
    }
})