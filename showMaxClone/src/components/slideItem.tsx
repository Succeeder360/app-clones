import {StyleSheet,Dimensions,Image, FlatList, Animated} from "react-native"
import { MovieDBImageRetrieval } from "../services/retrivaImg";
import Pagination from "./pagination";
import { scrollFunction } from "./onscroll";
import { useState, useEffect, useRef } from "react";




const {width} = Dimensions.get("window");

const SlideItem = ({data}) => {

    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef:any = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
  
    useEffect(() => {
      if (data && data.length > 0) {
        const intervalId = setInterval(() => {
          const nextPage = (currentPage + 1) %  data.length;
          if (nextPage === 0) {
            setCurrentPage(0);
          } else {
            setCurrentPage(nextPage);
          }
          flatListRef.current.scrollToIndex({ animated: true, index: nextPage });
        }, 5000);
  
        return () => clearInterval(intervalId);
      }
    }, [currentPage, data]);

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

    const handleViewAbleItemChange = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
          setIndex(viewableItems[0].index);
        }
      }).current;

    return(
        <>
      <FlatList data={data} renderItem={({item}) => (
        <Image source={{uri:`${MovieDBImageRetrieval}${item.poster_path}`}} style = {styles.img}/>
      )}
      horizontal 
      pagingEnabled 
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
     backgroundColor: 'rgba(0,0,0,0.5)'

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