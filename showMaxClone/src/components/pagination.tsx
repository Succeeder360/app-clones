import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';

const data = [
  { id: '1', text: 'Item 1' },
  { id: '2', text: 'Item 2' },
  { id: '3', text: 'Item 3' },
  { id: '4', text: 'Item 4' },
  { id: '5', text: 'Item 5' },
];

const HorizontalScrollWithDots = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.text}</Text>
      </View>
    );
  };

  const renderDot = (index) => {
    return (
      <TouchableOpacity
        key={index}
        style={[styles.dot, currentPage === index && styles.activeDot]}
        onPress={() => setCurrentPage(index)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onScroll={(event) => {
          const page = Math.round(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
          setCurrentPage(page);
        }}
      />
      <View style={styles.pagination}>
        {data.map((_, index) => renderDot(index))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    width: 300, // Adjust width as per your requirement
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'blue',
  },
});

export default HorizontalScrollWithDots;
