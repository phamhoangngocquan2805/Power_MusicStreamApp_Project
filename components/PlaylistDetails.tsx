import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const playlistData = {
  title: 'Top 50 - Canada',
  subtitle: 'Daily chart-toppers update',
  likes: '1,234',
  duration: '05:10:18',
  coverImage: 'https://via.placeholder.com/150', // Replace with the actual image URL
  songs: [
    {
      id: '1',
      title: 'FLOWER',
      artist: 'Jessica Gonzalez',
      plays: '2.1M',
      duration: '3:36',
      coverImage: 'https://via.placeholder.com/50', // Replace with actual image
    },
    {
      id: '2',
      title: 'Shape of You',
      artist: 'Anthony Taylor',
      plays: '68M',
      duration: '3:35',
      coverImage: 'https://via.placeholder.com/50', // Replace with actual image
    },
    // Add more songs here...
  ],
};

const PlaylistDetails = () => {
  const renderSong = ({ item }: { item: { id: string; title: string; artist: string; plays: string; duration: string; coverImage: string; } }) => (
    <View style={styles.songContainer}>
      <Image source={{ uri: item.coverImage }} style={styles.songImage} />
      <View style={styles.songDetails}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songSubtitle}>
          {item.artist} • {item.plays}
        </Text>
      </View>
      <Text style={styles.songDuration}>{item.duration}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={{ uri: playlistData.coverImage }} style={styles.coverImage} />
        <View style={styles.headerDetails}>
          <Text style={styles.playlistTitle}>{playlistData.title}</Text>
          <Text style={styles.playlistSubtitle}>{playlistData.subtitle}</Text>
          <Text style={styles.playlistStats}>
            {playlistData.likes} • {playlistData.duration}
          </Text>
        </View>
      </View>

      {/* Songs List */}
      <FlatList
        data={playlistData.songs}
        renderItem={renderSong}
        keyExtractor={(item) => item.id}
        style={styles.songList}
      />

      {/* Now Playing Footer */}
      <View style={styles.footer}>
        <Image
          source={{ uri: playlistData.songs[0].coverImage }}
          style={styles.footerImage}
        />
        <View style={styles.footerDetails}>
          <Text style={styles.footerSongTitle}>{playlistData.songs[0].title}</Text>
          <Text style={styles.footerSongArtist}>{playlistData.songs[0].artist}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.footerPlay}>▶</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  coverImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  headerDetails: {
    marginLeft: 16,
    flex: 1,
  },
  playlistTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  playlistSubtitle: {
    fontSize: 14,
    color: '#777',
  },
  playlistStats: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
  },
  songList: {
    flex: 1,
  },
  songContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  songDetails: {
    marginLeft: 16,
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  songSubtitle: {
    fontSize: 14,
    color: '#777',
  },
  songDuration: {
    fontSize: 14,
    color: '#555',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  footerImage: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  footerDetails: {
    marginLeft: 16,
    flex: 1,
  },
  footerSongTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerSongArtist: {
    fontSize: 14,
    color: '#777',
  },
  footerPlay: {
    fontSize: 24,
    color: '#000',
  },
});

export default PlaylistDetails;
