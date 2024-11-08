import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const data = [
  {
    id: '1',
    title: 'FLOWER',
    artist: 'Jessica Gonzalez',
    plays: '2.1M',
    duration: '3:36',
  },
  {
    id: '2',
    title: 'Shape of You',
    artist: 'Anthony Taylor',
    plays: '68M',
    duration: '3:35',
  },
  {
    id: '3',
    title: 'Blinding Lights',
    artist: 'Ashley Scott',
    collection: true,
    count: 4,
  },
  {
    id: '4',
    title: 'Levitating',
    artist: 'Anthony Taylor',
    plays: '9M',
    duration: '7:48',
  },
  {
    id: '5',
    title: 'Astronaut in the Ocean',
    artist: 'Pedro Moreno',
    plays: '23M',
    duration: '3:36',
  },
  {
    id: '6',
    title: 'Dynamite',
    artist: 'Elena Jimenez',
    plays: '10M',
    duration: '6:22',
  },
];

const Library = () => {
  const renderItem = ({ item }) => (
    <View style={styles.trackInfo}>
      <Text style={styles.trackTitle}>{item.title}</Text>
      <Text style={styles.trackArtist}>{item.artist}</Text>
      {item.collection ? (
        <Text style={styles.trackCollection}>{item.count} songs</Text>
      ) : (
        <View style={styles.trackStats}>
          <Text style={styles.trackPlays}>{item.plays} plays</Text>
          <Text style={styles.trackDuration}>{item.duration}</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={require('../assets/library_screen/Image_107.png')} 
          style={styles.profilePic}
        />
        <View style={styles.profileText}>
          <Text style={styles.username}>Mer Watson</Text>
          <Text style={styles.followers}>1.234K followers</Text>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.trackList}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileText: {
    marginLeft: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  followers: {
    color: '#888',
  },
  followButton: {
    marginTop: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#1da1f2',
    borderRadius: 5,
  },
  followButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  trackList: {
    marginBottom: 10,
  },
  trackInfo: {
    marginBottom: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  trackTitle: {
    fontWeight: 'bold',
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
  trackCollection: {
    color: '#888',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  activeNavItem: {
    fontWeight: 'bold',
    color: '#1da1f2',
  },
});

export default Library;
