import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Màn hình Welcome
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  MainScreen: undefined;
  HomeTabs: undefined;
};

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MainScreen'>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <ImageBackground
      source={require('../assets/LaunchScreen/Image112.png')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.logo}>🎵</Text>
        <Text style={styles.title}>Welcome to Premium</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('HomeTabs')} 
        >
          <Text style={styles.buttonText}>Start listening</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};




const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 40,
    color: 'white',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    color: 'black',
  },
});

export default WelcomeScreen;
