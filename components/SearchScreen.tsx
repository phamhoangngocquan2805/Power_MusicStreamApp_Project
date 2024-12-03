import React, { useState } from 'react';
import {View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const data = [
    { id: '1', title: 'Me', artist: 'Jessica Gonzalez', plays: '2.1M', duration: '3:36', image: 'https://via.placeholder.com/50' },
    { id: '2', title: 'Me Inc', artist: 'Anthony Taylor', plays: '600K', duration: '3:35', image: 'https://via.placeholder.com/50' },
    { id: '3', title: 'Dozz Me', artist: 'Brian Bailey', plays: '93M', duration: '4:39', image: 'https://via.placeholder.com/50' },
    { id: '4', title: 'Eastss Me', artist: 'Anthony Taylor', plays: '9M', duration: '7:48', image: 'https://via.placeholder.com/50' },
    { id: '5', title: 'Me Ali', artist: 'Pedro Moreno', plays: '23M', duration: '3:36', image: 'https://via.placeholder.com/50' },
    { id: '6', title: 'Me Quis A', artist: 'Elena Jimenez', plays: '10M', duration: '6:22', image: 'https://via.placeholder.com/50' },
    { id: '7', title: 'Me Light', artist: 'John Smith', plays: '81M', duration: '5:15', image: 'https://via.placeholder.com/50' },
  ];

  const renderItem = ({ item }: { item: { id: string; title: string; artist: string; plays: string; duration: string; image: string } }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.artist} • {item.plays}</Text>
      </View>
      <Text style={styles.duration}>{item.duration}</Text>
      <TouchableOpacity>
        <Icon name="ellipsis-horizontal" size={20} color="gray" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
      </View>
      <View style={styles.tabContainer}>
        <Text style={[styles.tab, styles.activeTab]}>All</Text>
        <Text style={styles.tab}>Tracks</Text>
        <Text style={styles.tab}>Albums</Text>
        <Text style={styles.tab}>Artists</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    paddingVertical: 8,
  },
  searchIcon: {
    marginLeft: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tab: {
    color: 'gray',
    fontSize: 16,
  },
  activeTab: {
    color: 'blue',
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'gray',
    marginTop: 4,
  },
  duration: {
    color: 'gray',
    marginRight: 10,
  },
});

export default SearchScreen;
