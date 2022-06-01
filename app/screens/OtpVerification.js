import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'


const OtpVerification = () => {
    const [isContinue, setIsContinue] = useState(false)
    const [otp, setOtp] = useState("")

    const verifyOtp = ({ navigation }) => {
        navigation.navigate('Home')

    }
    return (
        <View style={styles.container}>
            <AppTextInput
                placeholder="Enter Six Digit OTP"
                autoCorrect={false}
                autoCapitalize="none"
                icon="cellphone-android"
                keyboardType="numeric"
                maxLength={6}
                onChangeText={num => { setOtp(num); setIsContinue(num.length == 6) }}
            />
            <AppButton title="Verify" onPress={verifyOtp} dis={isContinue} />
        </View>
    )
}

export default OtpVerification

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})