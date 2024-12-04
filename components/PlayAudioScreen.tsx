import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function PlayAudioScreen() {
  return (
    <View style={styles.container}>
      
      <ImageBackground
        source={require('../assets/PlayanAudio/Image58.png')} 
        style={styles.backgroundImage}
        blurRadius={5}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <MaterialIcons name="keyboard-arrow-down" size={28} color="white" />
          </TouchableOpacity>
          <Text style={styles.playText}>Play</Text>
        </View>

        
        <View style={styles.songInfo}>
          <Text style={styles.songTitle}>FLOWER</Text>
          <Text style={styles.artistName}>Jessica Gonzalez</Text>
        </View>

       
        <Image
          source={require('../assets/PlayanAudio/Group4.png')} 
          style={styles.waveform}
        />

        
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>0:06</Text>
          <Text style={styles.timeText}>3:08</Text>
        </View>

        
        <View style={styles.controls}>
          <TouchableOpacity>
            <FontAwesome name="random" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="step-backward" size={32} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton}>
            <FontAwesome name="play" size={32} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="step-forward" size={32} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="playlist-play" size={24} color="white" />
          </TouchableOpacity>
        </View>

        
        <View style={styles.actions}>
          <TouchableOpacity>
            <FontAwesome name="heart" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.actionText}>12K</Text>
          <TouchableOpacity>
            <FontAwesome name="comment" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.actionText}>450</Text>
          <TouchableOpacity>
            <FontAwesome name="share-alt" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  playText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  songInfo: {
    alignItems: 'center',
    marginTop: 80, // Điều chỉnh khoảng cách từ trên xuống
    marginBottom: 20, // Điều chỉnh khoảng cách với waveform
  },
  songTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  artistName: {
    color: 'white',
    fontSize: 16,
    marginTop: 4,
  },
  waveform: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 10,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  timeText: {
    color: 'white',
    fontSize: 14,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '80%',
    alignSelf: 'center',
    marginVertical: 20,
  },
  playButton: {
    width: 64,
    height: 64,
    backgroundColor: 'white',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '70%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  actionText: {
    color: 'white',
    fontSize: 14,
    marginHorizontal: 10,
  },
});
