import React, { useState, useRef, useEffect } from 'react';
import { View, Text, FlatList, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const HeaderComp = ({ data }:any) => {
  const flatListRef:any = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (data && data.length > 0) {
      const intervalId = setInterval(() => {
        const nextPage = (currentPage + 1) % data.length;
        flatListRef.current.scrollToIndex({ animated: true, index: nextPage });
        setCurrentPage(nextPage);
      }, 3000); 
      
      return () => clearInterval(intervalId);
    }
  }, [currentPage, data]);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <ImageBackground source={{uri:item.img}} resizeMode="cover" style={styles.img}>
        
      </ImageBackground>
    </View>
  );

  const renderDot = (index) => {
    return (
      <TouchableOpacity
        key={index}
        style={[styles.dot, currentPage === index && styles.activeDot]}
        onPress={ () => {
          flatListRef.current.scrollToIndex({ animated: true, index });
          setCurrentPage(index);
        }}
      />
    );
  };

  if (!data || data.length === 0) {
    return null; 
  }

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        onScrollToIndexFailed={(info) => {
          const wait = new Promise((resolve) => setTimeout(resolve, 500));
          wait.then(() => {
            flatListRef.current?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          });
        }}
        onViewableItemsChanged={({ viewableItems } : any) => {
          if (viewableItems.length > 0) {
            setCurrentPage(viewableItems[0].index);
          }
        }}
      />
      <View style={styles.pagination}>{data.map((_ : any, index : number) => renderDot(index))}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'blue',
  },
  img:{
    flex:1,
   height:300,
   width:430
  
},
  
  title: {
    color: '#fff',
    fontWeight: '900',
  },
  desc: {
    color: '#fff',
    fontWeight: '300',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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

export default HeaderComp;




