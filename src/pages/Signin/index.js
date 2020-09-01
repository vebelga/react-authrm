import React, { useContext } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import AuthContext from '../../contexts/auth'

export default function SignIn() {
    const { signed, signIn, user } = useContext(AuthContext)
    console.log(signed)
    console.log(user)

    function handleSignIn() {
        signIn()
    }

    return (
        <View style={styles.container}>
            <Button title="Sign In" onPress={handleSignIn} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})