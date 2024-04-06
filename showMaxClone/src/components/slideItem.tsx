import {StyleSheet,Dimensions,Image, FlatList, Animated} from "react-native"
import { MovieDBImageRetrieval } from "../services/retrivaImg";
import Pagination from "./pagination";
import { scrollFunction } from "./onscroll";
import { useState, useEffect, useRef, memo } from "react";
import {View} from "react-native"
import React from "react";

const {width} = Dimensions.get("window");

const SlideItem = ({data}) => {

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


      const renderItem = (({item}) => (
        <View>
      <Image source={{uri:`${MovieDBImageRetrieval}${item.poster_path}`}} style = {styles.img}/>
        </View>
      ))


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

    const [index, setIndex] = useState(0)
    const handleViewabilityConfg = useRef({
        itemVisiblePercentThreshold:50 // percentage for next slide to be visible
    }).current;

    const handleViewAbleItemChange = useRef(({viewableItems}) => {
        if (viewableItems.length > 0) {
          setIndex(viewableItems[0].index);
        }
      }).current;

      const handleScrollEnd = () => {
        setIsScrolling(false); // Set scrolling flag to false when manual scrolling ends
      };    

    return(
        <>
      <FlatList data={data} renderItem={renderItem}
      horizontal 
      pagingEnabled 
      onScrollEndDrag={handleScrollEnd}
      ref={flatListRef}
      showsHorizontalScrollIndicator = {false}
      onScroll={handleOnscroll}
      onViewableItemsChanged={handleViewAbleItemChange}
      viewabilityConfig={handleViewabilityConfg}
      onScrollToIndexFailed={({index}) => {
       scrollFunction({index}, flatListRef);
   }}
      />
   <Pagination data={data} scrollX={scrollX} index={index}/>
      </>
    )
  }


   export default SlideItem;

   const styles = StyleSheet.create({
    container:{
      flex:1,  
    },
    img:{
       height:400,
       width,
       backgroundColor: 'rgba(52, 52, 52, 0.8)'

    },
    title:{
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    desc:{
        color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', 
    },
   
})