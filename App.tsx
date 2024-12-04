
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './components/BottomTabs';
import PlaylistDetails from './components/PlaylistDetails'; 
import ArtistProfileScreen from './components/ArtistProfileScreen';
import PlayAudioScreen from './components/PlayAudioScreen';
import WelcomeScreen from './components/WelcomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ title: 'Welcome Screen'}}
        />
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
         <Stack.Screen
          name="ArtistProfileScreen"
          component={ArtistProfileScreen}
          options={{ title: 'Artist Profile' }}
        />
        <Stack.Screen
          name="PlayAudioScreen"
          component={PlayAudioScreen}
          options={{ title: 'Play An Audio' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

