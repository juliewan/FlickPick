import React, {useState} from 'react';
import 'react-native-gesture-handler';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';

import WelcomeScreen from './app/screens/WelcomeScreen';
import SignUp from './app/screens/SignUp';
import Login from './app/screens/Login';
import LookUpMovies from './app/screens/LookUpMovies';

const getFonts = () => Font.loadAsync({
    'BebasNeue' : require('./assets/fonts/BebasNeue-Regular.otf'),
});

const Stack = createStackNavigator();

export default function App() {
  const [ fontsLoaded, setFontsLoaded ] = useState(false);
  if( fontsLoaded ){
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTitleStyle: {
            fontFamily: "BebasNeue",
            fontSize: 18,
          },
          headerTintColor: "#fff",
        }}>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ title: 'FlickPick Home'
          }}/>
        <Stack.Screen name="Login" component={Login} options={{ title: 'User Login' }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Account Sign Up' }} />
        <Stack.Screen name="LookUpMovies" component={LookUpMovies} options={{ title: 'FlickPick' }} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
  else {
    return (
      <AppLoading
        startAsync = { getFonts }
        onFinish = { () => setFontsLoaded(true) }/>
    );
  }
}