import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const HomeScreen = () => {
    return (
        <View>
            <Text>Hello Home</Text>
        </View>
    )
}
const SettingsScreen = () => {
    return (
        <View>
            <Text>Hello Setting</Text>
        </View>
    )
}
const ToFindScreen = () => {
    return (
        <View>
            <Text>Hello Find</Text>
        </View>
    )
}
const JoinScreen = () => {
    return (
        <View>
            <Text>Hello Join</Text>
        </View>
    )
}
const MyQScreen = () => {
    return (
        <View>
            <Text>Hello MY QROOMS</Text>
        </View>
    )
}
const screenOptions = {
    tabBarStyle: {
        position: 'absolute',
        bottom: 5,
        left: 5,
        right: 5,
        elevation: 0,
        backgroundColor: "#ffff",
        borderRadius: 15,
        height: 70,
        color: "#0000"
    },
};
const TabNavigation = () => {
    return (
        <Tab.Navigator {...{ screenOptions }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: (focus) => (
                    <FontAwesome name="home" size={24} />
                ),
            }} />
            <Tab.Screen name="Find" component={ToFindScreen} options={{
                tabBarIcon: (focus) => (
                    <FontAwesome name="search-plus" size={24} color="black" />
                ),
            }} />
            <Tab.Screen name="Join" component={JoinScreen} options={{
                tabBarIcon: (focus) => (
                    <FontAwesome name="plus-circle" size={24} color="black" />
                ),
            }} />
            <Tab.Screen name="Qroom" component={MyQScreen} options={{
                tabBarIcon: (focus) => (
                    <FontAwesome5 name="people-arrows" size={24} color="black" />
                ),
            }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                tabBarIcon: (focus) => (
                    <FontAwesome name="user" size={24} color="black" />
                ),
            }} />
        </Tab.Navigator>
    )
}

export default TabNavigation

const styles = StyleSheet.create({})