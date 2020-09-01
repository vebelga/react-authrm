import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../pages/Signin'

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="SignIn" component={SignIn} />
        </AuthStack.Navigator>
    )
}