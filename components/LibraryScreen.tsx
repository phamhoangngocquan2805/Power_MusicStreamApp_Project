// import React from "react";
// import { View, Text, FlatList, Image, TouchableOpacity, TextInput, StyleSheet } from "react-native";

// const libraryData = [
//   {
//     id: "1",
//     title: "FLOWER",
//     artist: "Jessica Gonzalez",
//     plays: "2M",
//     duration: "3:36",
//     liked: true,
//     image: "placeholder-image-url",
//   },
//   {
//     id: "2",
//     title: "Shape of You",
//     artist: "Anthony Taylor",
//     plays: "68M",
//     duration: "3:35",
//     liked: true,
//     image: "placeholder-image-url",
//   },
//   {
//     id: "3",
//     title: "Blinding Lights",
//     artist: "Ashley Scott",
//     songsCount: "4 songs",
//     liked: false,
//     image: "placeholder-image-url",
//   },
//   {
//     id: "4",
//     title: "Levitating",
//     artist: "Anthony Taylor",
//     plays: "9M",
//     duration: "7:48",
//     liked: true,
//     image: "placeholder-image-url",
//   },
//   {
//     id: "5",
//     title: "Astronaut in the Ocean",
//     artist: "Pedro Moreno",
//     plays: "23M",
//     duration: "3:36",
//     liked: true,
//     image: "placeholder-image-url",
//   },
//   {
//     id: "6",
//     title: "Dynamite",
//     artist: "Elena Jimenez",
//     plays: "10M",
//     duration: "6:22",
//     liked: true,
//     image: "placeholder-image-url",
//   },
// ];

// const LibraryScreen = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Your Library</Text>
//         <TextInput style={styles.searchInput} placeholder="Search..." />
//       </View>
//       <FlatList
//         data={libraryData}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.listItem}>
//             <Image source={{ uri: item.image }} style={styles.thumbnail} />
//             <View style={styles.details}>
//               <Text style={styles.songTitle}>{item.title}</Text>
//               <Text style={styles.artist}>{item.artist}</Text>
//               {item.songsCount && <Text style={styles.meta}>{item.songsCount}</Text>}
//               {!item.songsCount && (
//                 <Text style={styles.meta}>
//                   {item.plays} • {item.duration}
//                 </Text>
//               )}
//             </View>
//             {item.liked && (
//               <TouchableOpacity>
//                 <Text style={styles.likeIcon}>💙</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff" },
//   header: { padding: 16, backgroundColor: "#f8f8f8", borderBottomWidth: 1, borderBottomColor: "#ddd" },
//   title: { fontSize: 20, fontWeight: "bold", marginBottom: 8 },
//   searchInput: { backgroundColor: "#eaeaea", padding: 10, borderRadius: 8 },
//   listItem: { flexDirection: "row", padding: 16, alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#f1f1f1" },
//   thumbnail: { width: 50, height: 50, borderRadius: 8, backgroundColor: "#ddd" },
//   details: { flex: 1, marginLeft: 10 },
//   songTitle: { fontSize: 16, fontWeight: "bold" },
//   artist: { fontSize: 14, color: "#555" },
//   meta: { fontSize: 12, color: "#888" },
//   likeIcon: { fontSize: 20, color: "#1DB954" },
// });

// export default LibraryScreen;
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const data = [
  {
    id: "1",
    title: "FLOWER",
    artist: "Jessica Gonzalez",
    plays: "2,1M",
    duration: "3:36",
    cover: "https://via.placeholder.com/50",
    liked: true,
  },
  {
    id: "2",
    title: "Shape of You",
    artist: "Anthony Taylor",
    plays: "68M",
    duration: "3:35",
    cover: "https://via.placeholder.com/50",
    liked: true,
  },
  {
    id: "3",
    title: "Blinding Lights",
    artist: "Ashley Scott",
    plays: "",
    duration: "",
    cover: "https://via.placeholder.com/50",
    liked: false,
  },
  {
    id: "4",
    title: "Levitating",
    artist: "Anthony Taylor",
    plays: "9M",
    duration: "7:48",
    cover: "https://via.placeholder.com/50",
    liked: true,
  },
  {
    id: "5",
    title: "Astronaut in the Ocean",
    artist: "Pedro Moreno",
    plays: "23M",
    duration: "3:36",
    cover: "https://via.placeholder.com/50",
    liked: true,
  },
  {
    id: "6",
    title: "Dynamite",
    artist: "Elena Jimenez",
    plays: "10M",
    duration: "6:22",
    cover: "https://via.placeholder.com/50",
    liked: true,
  },
];

const LibraryScreen = () => {
  const renderItem = ({ item }: { item: typeof data[0] }) => (
    <View style={styles.songRow}>
      <Image source={{ uri: item.cover }} style={styles.coverImage} />
      <View style={styles.songDetails}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songMeta}>
          {item.artist} {item.plays && `\u2022 ${item.plays}`}{" "}
          {item.duration && `\u2022 ${item.duration}`}
        </Text>
      </View>
      {item.liked ? (
        <Ionicons name="heart" size={20} color="dodgerblue" />
      ) : (
        <Ionicons name="chevron-forward" size={20} color="gray" />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Library</Text>
        <Ionicons name="search" size={24} color="black" />
      </View>

      <View style={styles.filterRow}>
        {["Playlists", "New tag", "Songs", "Albums", "Artists"].map(
          (filter) => (
            <TouchableOpacity key={filter} style={styles.filterButton}>
              <Text style={styles.filterText}>{filter}</Text>
            </TouchableOpacity>
          )
        )}
      </View>

      <View style={styles.userRow}>
        <Image
          source={{ uri: "https://via.placeholder.com/50" }}
          style={styles.userAvatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Mer Watson</Text>
          <Text style={styles.userMeta}>1.234K Followers</Text>
        </View>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.songList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  filterRow: {
    flexDirection: "row",
    marginBottom: 16,
  },
  filterButton: {
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
  },
  filterText: {
    fontSize: 14,
    color: "#333",
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userMeta: {
    fontSize: 12,
    color: "gray",
  },
  followButton: {
    backgroundColor: "black",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  followButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  songList: {
    marginTop: 8,
  },
  songRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  coverImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  songDetails: {
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  songMeta: {
    fontSize: 12,
    color: "gray",
  },
});

export default LibraryScreen;
