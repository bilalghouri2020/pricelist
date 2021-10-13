import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, Button, Alert } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Screens
import HomePage from './Screen/Home';
import LoginPage from './Screen/Login';
import SignUpPage from './Screen/SignUp';

const Stack = createNativeStackNavigator();



const App = () => {

  useEffect(() => {
    getData()
  }, [])


  const getData = () => {
    axios.get('http:/10.0.2.2:3000/').then((res) => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    });
    // console.log(res.data);
  }
  console.log('update');
  return (
    <NavigationContainer>
      {/* <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Button title="enter" onPress={() => Alert.alert('hello world')} />
        </View>
        <Text>helloasdasd world</Text>
      </SafeAreaView> */}
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'Overview' }} />
        <Stack.Screen name="Login">
          {props => <LoginPage {...props} />}
        </Stack.Screen>
        <Stack.Screen name="SignUp">
          {props => <SignUpPage {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default App;