import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import OnBoarding from "./app/screens/OnBoarding";
import OtpVerification from './app/screens/OtpVerification';
import TabNavigation from './app/navigation/TabNavigation';


const Stack = createNativeStackNavigator()
export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen component={OnBoarding} name="OnBoarding" options={{ headerShown: false }} />
    //     <Stack.Screen component={OtpVerification} name="OtpVerification" />
    //     <Stack.Screen component={Home} name="Home" />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>


  );
}
