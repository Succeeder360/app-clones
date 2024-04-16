import React, { useState, useRef, useEffect } from 'react';
import { View,  FlatList, Image, Animated, Dimensions} from 'react-native';
import { MovieDBImageRetrieval } from '../services/retrivaImg';
import Pagination from './pagination';
import { scrollFunction } from './onscroll';





const {width} = Dimensions.get("window");

const FlatlistHeader = ({data}) => {
  const [index, setIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef:any = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
 const newd = data.slice(3,7)

  useEffect(() => {
    if (newd && newd.length > 0) {
      const intervalId = setInterval(() => {
        if (!isScrolling) {
          let nextPage = (currentPage + 1) % newd.length
         
            setCurrentPage(nextPage);
          
          flatListRef.current.scrollToIndex({ animated: true, index: nextPage });
        }
      }, 4000);

      return () => clearInterval(intervalId);
    }
  }, [currentPage, newd, isScrolling]);
  


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
            const newIndex = viewableItems[0].index;
            setIndex(newIndex);
            setCurrentPage(newIndex)
          }
        }).current;
  
        const handleScrollEnd = () => {
          setIsScrolling(false); 
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
          onScrollEndDrag={handleScrollEnd}
          viewabilityConfig={handleViewabilityConfg}
          onViewableItemsChanged={handleViewAbleItemChange}
          data={newd}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          onScrollToIndexFailed={({index}) => {
            scrollFunction({index}, flatListRef);
        }}
      />
      <Pagination data={newd} scrollX={scrollX} index={index}/>
      </>
  );
}


export default FlatlistHeader;

