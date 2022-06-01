import { StyleSheet, Text, View, FlatList, Animated, Linking, Alert, Image, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import Axios from 'axios'
import * as Google from 'expo-google-app-auth'

import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import slides from '../components/onboard/OnBoardSlide'
import OnBoardItems from '../components/onboard/OnBoardItems'
import Paginator from '../components/onboard/Paginator'

const OnBoarding = ({ navigation }) => {
    const [currentIndex, setCurrrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current
    const slidesRef = useRef(null)
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrrentIndex(viewableItems[0].index)
    }).current
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

    // Login
    const [mobNumber, setMobNumber] = useState("");
    const [isContinue, setIsContinue] = useState(false)
    const [accessToken, setAccesstoken] = useState();
    const [userInfo, setUserInfo] = useState();

    const signInWithGoogle = async () => {
        try {
            const result = await Google.logInAsync({
                androidClientId: "1035635793697-3cvtd181q6pjhnb47e2jmnnfbjj0ufap.apps.googleusercontent.com",
                iosClientId: "1035635793697-jn6250jjogv4smm9pmjmvnjqcg9kjifb.apps.googleusercontent.com",
                scopes: ["profile", "email"]
            })
            if (result.type === "success") {
                setAccesstoken(result.accessToken)
            } else {
                console.log("Permission denied!")
            }
        } catch (err) {
            console.log(err)

        }
    }
    const getUserData = async () => {
        let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
        userInfoResponse.json().then(data => {
            setUserInfo(data)
            console.log(data)
        })
    }
    const sendOtp = () => {
        try {
            // Axios.get('https://bhiwandi-server.herokuapp.com/sendotp', {
            //     params: {
            //         phone: mobNumber
            //     }
            // }).then((res) => {
            //     console.log(res.data)
            // })
            navigation.navigate('OtpVerification')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.5 }}>
                <FlatList
                    data={slides}
                    renderItem={({ item }) => <OnBoardItems item={item} />}
                    horizontal
                    pagingEnabled
                    bounces={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        {
                            useNativeDriver: false,
                        }
                    )}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={{ flex: 0.01 }}>
                <Paginator data={slides} scrollX={scrollX} />
            </View>
            <View style={styles.loginContainer}>
                <Text style={styles.loginHeading}>Log in OR sign up</Text>
                <AppTextInput
                    placeholder="Enter Phone Number"
                    autoCorrect={false}
                    autoCapitalize="none"
                    icon="cellphone-android"
                    keyboardType="numeric"
                    maxLength={10}
                    onChangeText={num => { setMobNumber(num); setIsContinue(num.length == 10) }}
                />
                <AppButton title="Continue" onPress={sendOtp} dis={isContinue} />
                <Text>or</Text>
                <View >
                    <TouchableOpacity onPress={signInWithGoogle}>
                        <Image style={{ height: 50, width: 50, marginTop: 15 }} source={require("../assets/google.png")} />
                    </TouchableOpacity>
                </View>
                <Text style={{ position: "absolute", bottom: 5 }}>Powered By <Text style={{ color: 'blue' }}
                    onPress={() => Linking.openURL('https://google.com/')}>
                    unqueue App
                </Text>
                </Text>

            </View>
        </View>
    )
}

export default OnBoarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    loginContainer: {
        flex: 0.49,
        justifyContent: "center",
        alignItems: "center"
    },
    loginHeading: {
        borderBottomColor: "#5b5c5b",
        borderBottomWidth: 1,
        paddingBottom: 2,
        fontSize: 13,
        fontWeight: "bold",
        color: "#5b5c5b"
    }
})