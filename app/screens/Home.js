import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


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
const Home = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    )
}

export default Home

const styles = StyleSheet.create({})