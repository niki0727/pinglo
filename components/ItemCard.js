import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ItemCard = ({ item }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.imageUrl }} style={styles.image} />
    <Text style={styles.title}>{item.title}</Text>
    <Text>{item.description}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 6
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 5
  }
});

export default ItemCard;