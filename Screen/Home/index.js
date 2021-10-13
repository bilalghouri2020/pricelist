import React from 'react'
import { View, Text, Button } from 'react-native'

export default function index({ navigation }) {
    // console.log(navigation.navigate);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Chemistry is the branch of science that deals with the proper composition and structure of matter.</Text>
            <Button
                title="Go to Login Page"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}
