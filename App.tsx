// import React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
// import HomeScreen from './components/HomeScreen'
// import SearchScreen from './components/SearchScreen'
// import FeedScreen from './components/FeedScreen'
// import LibraryScreen from './components/LibraryScreen'

// const Tab = createBottomTabNavigator();

// // const HomeScreen = () => <View><Text>Home Screen</Text></View>;
// // const SearchScreen = () => <View><Text>Search Screen</Text></View>;
// // const FeedScreen = () => <View><Text>Feed Screen</Text></View>;
// // const LibraryScreen = () => <View><Text>Library Screen</Text></View>;

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName: string = '';

//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'Search') {
//             iconName = focused ? 'search' : 'search-outline';
//           } else if (route.name === 'Feed') {
//             iconName = focused ? 'newspaper' : 'newspaper-outline';
//           } else if (route.name === 'Library') {
//             iconName = focused ? 'library' : 'library-outline';
//           }

//           return <Icon name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: '#000',
//         tabBarInactiveTintColor: 'gray',
//         tabBarStyle: {
//           paddingBottom: 10,
//           height: 60,
//         },
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen}  />
//       <Tab.Screen name="Search" component={SearchScreen}/>
//       <Tab.Screen name="Feed" component={FeedScreen}  />
//       <Tab.Screen name="Library" component={LibraryScreen} options={{ title: 'Library' }} />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }

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

