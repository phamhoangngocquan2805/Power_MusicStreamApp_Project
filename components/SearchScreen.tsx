import React from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

const searchResults = [
  { id: 1, title: "Me", artist: "Jessica Gonzalez", plays: "2M", duration: "3:36" },
  { id: 2, title: "Me Inc", artist: "Anthony Taylor", plays: "68M", duration: "3:35" },
  { id: 3, title: "Dozz me", artist: "Brian Bailey", plays: "93M", duration: "4:39" },
  { id: 4, title: "Eastss me", artist: "Anthony Taylor", plays: "9M", duration: "7:48" },
  { id: 5, title: "Me Ali", artist: "Pedro Moreno", plays: "23M", duration: "3:36" },
  { id: 6, title: "Me quis a", artist: "Elena Jimenez", plays: "10M", duration: "6:22" },
  { id: 7, title: "Me light", artist: "John Smith", plays: "81M", duration: "5:15" },
];

const SearchResults = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput style={styles.searchInput} placeholder="Search..." />
      </View>
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Image source={{ uri: "placeholder-image-url" }} style={styles.thumbnail} />
            <View style={styles.details}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.artist}>{item.artist}</Text>
              <Text style={styles.meta}>
                {item.plays} • {item.duration}
              </Text>
            </View>
            <TouchableOpacity style={styles.moreButton}>
              <Text>...</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { padding: 16, backgroundColor: "#f8f8f8" },
  searchInput: { backgroundColor: "#eaeaea", padding: 10, borderRadius: 8 },
  resultItem: { flexDirection: "row", padding: 16, alignItems: "center" },
  thumbnail: { width: 50, height: 50, borderRadius: 8, backgroundColor: "#ddd" },
  details: { flex: 1, marginLeft: 10 },
  title: { fontSize: 16, fontWeight: "bold" },
  artist: { fontSize: 14, color: "#555" },
  meta: { fontSize: 12, color: "#888" },
  moreButton: { padding: 10 },
});

export default SearchResults;
