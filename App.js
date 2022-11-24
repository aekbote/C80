import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SpaceCraftsScreen from './screens/SpaceCraft';
import DailyPicScreen from './screens/DailyPic';
import StarMapScreen from './screens/StarMap';
import HomeScreen from './screens/Home'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName= "Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="SpaceCraft" component={SpaceCraftsScreen}/>
        <Stack.Screen name="StarMap" component={StarMapScreen}/>
        <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


