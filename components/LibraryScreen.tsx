import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, StyleSheet } from "react-native";

const libraryData = [
  {
    id: "1",
    title: "FLOWER",
    artist: "Jessica Gonzalez",
    plays: "2M",
    duration: "3:36",
    liked: true,
    image: "placeholder-image-url",
  },
  {
    id: "2",
    title: "Shape of You",
    artist: "Anthony Taylor",
    plays: "68M",
    duration: "3:35",
    liked: true,
    image: "placeholder-image-url",
  },
  {
    id: "3",
    title: "Blinding Lights",
    artist: "Ashley Scott",
    songsCount: "4 songs",
    liked: false,
    image: "placeholder-image-url",
  },
  {
    id: "4",
    title: "Levitating",
    artist: "Anthony Taylor",
    plays: "9M",
    duration: "7:48",
    liked: true,
    image: "placeholder-image-url",
  },
  {
    id: "5",
    title: "Astronaut in the Ocean",
    artist: "Pedro Moreno",
    plays: "23M",
    duration: "3:36",
    liked: true,
    image: "placeholder-image-url",
  },
  {
    id: "6",
    title: "Dynamite",
    artist: "Elena Jimenez",
    plays: "10M",
    duration: "6:22",
    liked: true,
    image: "placeholder-image-url",
  },
];

const LibraryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Library</Text>
        <TextInput style={styles.searchInput} placeholder="Search..." />
      </View>
      <FlatList
        data={libraryData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image source={{ uri: item.image }} style={styles.thumbnail} />
            <View style={styles.details}>
              <Text style={styles.songTitle}>{item.title}</Text>
              <Text style={styles.artist}>{item.artist}</Text>
              {item.songsCount && <Text style={styles.meta}>{item.songsCount}</Text>}
              {!item.songsCount && (
                <Text style={styles.meta}>
                  {item.plays} • {item.duration}
                </Text>
              )}
            </View>
            {item.liked && (
              <TouchableOpacity>
                <Text style={styles.likeIcon}>💙</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { padding: 16, backgroundColor: "#f8f8f8", borderBottomWidth: 1, borderBottomColor: "#ddd" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 8 },
  searchInput: { backgroundColor: "#eaeaea", padding: 10, borderRadius: 8 },
  listItem: { flexDirection: "row", padding: 16, alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#f1f1f1" },
  thumbnail: { width: 50, height: 50, borderRadius: 8, backgroundColor: "#ddd" },
  details: { flex: 1, marginLeft: 10 },
  songTitle: { fontSize: 16, fontWeight: "bold" },
  artist: { fontSize: 14, color: "#555" },
  meta: { fontSize: 12, color: "#888" },
  likeIcon: { fontSize: 20, color: "#1DB954" },
});

export default LibraryScreen;
