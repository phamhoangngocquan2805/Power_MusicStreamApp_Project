import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([
    "Me",
    "me illum id aliquip",
    "me lorem",
    "Me Gonzalez",
    "Me irure esse",
    "Me Exercitation",
    "Me Sint aliquip duis deseru"
  ]);

  const handleSearch = (text) => {
    setQuery(text);
    // Đây là phần filter cho gợi ý
    const filteredResults = results.filter(item =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    setResults(filteredResults);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([
      "Me",
      "me illum id aliquip",
      "me lorem",
      "Me Gonzalez",
      "Me irure esse",
      "Me Exercitation",
      "Me Sint aliquip duis deseru"
    ]);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.resultItem}>
      <Text style={styles.resultText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={query}
          onChangeText={handleSearch}
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
            <Icon name="close-circle" size={20} color="#000" />
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#00BFFF',
    borderRadius: 25,
    height: 40,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  clearButton: {
    marginRight: 5,
  },
  resultItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  resultText: {
    fontSize: 16,
  },
});

export default SearchScreen;
