import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './.expo/components/pages/LoginPage/login';
import Register from './.expo/components/pages/RegisterPage/register';
import Recover from './.expo/components/pages/RecoverPage/recover';
import Reset from './.expo/components/pages/ResetPage/reset';
import Set from './.expo/components/pages/SetPage/set';
import Complete from './.expo/components/pages/CompletePage/complete';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Recover" 
          component={Recover} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Register" 
          component={Register} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ResetPage" 
          component={Reset} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SetPage" 
          component={Set} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="CompletePage" 
          component={Complete} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

