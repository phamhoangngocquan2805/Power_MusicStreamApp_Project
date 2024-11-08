import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const FeedScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/feed_screen/Avatar_4.png')} 
          style={styles.profilePic}
        />
        <View style={styles.headerText}>
          <Text style={styles.username}>Jessica Gonzalez</Text>
          <Text style={styles.postedTime}>Posted a track • 3d</Text>
        </View>
      </View>
      <Image
        source={require('../assets/feed_screen/Image_93.png')} // 
        style={styles.postImage}
      />
      <View style={styles.trackInfo}>
        <Text style={styles.trackTitle}>FLOWER</Text>
        <Text style={styles.trackArtist}>Jessica Gonzalez</Text>
        <View style={styles.trackStats}>
          <Text style={styles.trackPlays}>125 plays</Text>
          <Text style={styles.trackDuration}>05:15</Text>
        </View>
      </View>
      <View style={styles.postActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>20</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>1</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Image
          source={require('../assets/feed_screen/Avatar_5.png')} 
          style={styles.profilePic}
        />
        <View style={styles.headerText}>
          <Text style={styles.username}>Jessica Gonzalez</Text>
          <Text style={styles.postedTime}>Posted a track • 3d</Text>
        </View>
      </View>
      <Image
        source={require('../assets/feed_screen/Image_94.png')} // 
        style={styles.postImage}
      />
      <View style={styles.trackInfo}>
        <Text style={styles.trackTitle}>FLOWER</Text>
        <Text style={styles.trackArtist}>Jessica Gonzalez</Text>
        <View style={styles.trackStats}>
          <Text style={styles.trackPlays}>125 plays</Text>
          <Text style={styles.trackDuration}>05:15</Text>
        </View>
      </View>
      <View style={styles.postActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>20</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>1</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

    
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerText: {
    marginLeft: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  postedTime: {
    color: '#888',
  },
  postImage: {
    width: '100%',
    height: 200,
    marginTop: 10,
  },
  trackInfo: {
    marginTop: 10,
  },
  trackTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  trackArtist: {
    color: '#888',
  },
  trackStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  trackPlays: {
    color: '#888',
  },
  trackDuration: {
    color: '#888',
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 5,
  },
});

export default FeedScreen;
