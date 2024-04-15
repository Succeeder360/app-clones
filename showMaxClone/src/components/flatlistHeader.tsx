import React, { useState, useRef, useEffect } from 'react';
import { View,  FlatList, Image, Animated, Dimensions} from 'react-native';
import { MovieDBImageRetrieval } from '../services/retrivaImg';
import Pagination from './pagination';
import { scrollFunction } from './onscroll';
import { dataTagSymbol } from '@tanstack/react-query';




const {width} = Dimensions.get("window");

const FlatlistHeader = ({data}) => {
  const [index, setIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef:any = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (data && data.length > 0) {
      const intervalId = setInterval(() => {
        if (!isScrolling) {
          let nextPage = (currentPage + 1) % data.length;
          if (nextPage === 0) {
            setCurrentPage(0); // Reset currentPage to 0 if it's the last index
          } else {
            setCurrentPage(nextPage);
          }
          flatListRef.current.scrollToIndex({ animated: true, index: nextPage });
        }
      }, 4000);

      return () => clearInterval(intervalId);
    }
  }, [currentPage, data, isScrolling]);
  
  const newData = data.slice(0,4)

    const handleOnscroll = event => {
      Animated.event(
          [{
              nativeEvent:{
                  contentOffset:{
                      x:scrollX
                  }
              }
          }
      ],
         
  {
      useNativeDriver:false
  }
         
      )(event)
  }
  
      const handleViewabilityConfg = useRef({
          itemVisiblePercentThreshold:50 
      }).current;
  
      const handleViewAbleItemChange = useRef(({viewableItems}) => {
          if (viewableItems.length > 0) {
            setIndex(viewableItems[0].index);
          }
        }).current;
  
        const handleScrollEnd = () => {
          setIsScrolling(false); // Set scrolling flag to false when manual scrolling ends
        };    


   
 
  const renderItem = ({item}) => (
    <View>
      <Image
          source={{ uri: `${MovieDBImageRetrieval}${item.poster_path}` }}
          style={{ height: 400, width, top:10}}
      />
      </View>
  );

  return (
    <>
      <FlatList
      showsHorizontalScrollIndicator = {false}
      pagingEnabled 
  
      snapToAlignment='center'
          horizontal
        
          ref={flatListRef}
          onScroll={handleOnscroll}
          viewabilityConfig={handleViewabilityConfg}
          onViewableItemsChanged={handleViewAbleItemChange}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          onScrollToIndexFailed={({index}) => {
            scrollFunction({index}, flatListRef);
        }}
      />
      <Pagination data={data} scrollX={scrollX} index={index}/>
      </>
  );
}


export default FlatlistHeader;

