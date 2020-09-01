import React, { useContext } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import AuthContext from '../../contexts/auth'


export default function Dashboard() {
    const { signOut } = useContext(AuthContext)

    function handleSignOut() {
        signOut()
    }

    return (
        <View style={styles.container}>
            <Button title="Sign Out" onPress={handleSignOut} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})