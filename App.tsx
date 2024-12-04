import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './components/BottomTabs'
import PlaylistDetails from './components/PlaylistDetails'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlaylistDetails"
          component={PlaylistDetails}
          options={{ title: 'Playlist Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

