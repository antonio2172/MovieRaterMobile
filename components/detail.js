import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

export default function Detail({ route, navigation }) {
  const { movie } = route.params;

  return (
    <View>
      <Text>Detail about {movie.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    padding: 10,
    height: 50,
    backgroundColor: '#282C35',
  },
  itemText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  logo: {
    width: '100%',
    height: 135,
    paddingTop: 30,
  },
});
