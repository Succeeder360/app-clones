import {View,StyleSheet, FlatList,Dimensions} from "react-native"
import { Animated } from "react-native";
import {useRef, useState, useEffect } from "react";
import Pagination from "./pagination";
import SlideItem from "./slideItem";
import { scrollFunction } from "./onscroll";


const {width} = Dimensions.get("window");

const Dev = ({data}) => {
 
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef:any = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
  
    useEffect(() => {
      if (data && data.length > 0) {
        const intervalId = setInterval(() => {
          const nextPage = (currentPage + 1) %  data.length;
          flatListRef.current.scrollToIndex({ animated: true, index: nextPage });
          setCurrentPage(nextPage);
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
    const handleViewAbleItemChange = useRef(({viewableItems}) => {
        setIndex(viewableItems[0].index)
    }).current;

    return(
        <View>
         <FlatList data={data}
          pagingEnabled 
          ref={flatListRef}
           horizontal  renderItem={({item}) => <SlideItem item={item} />}
           snapToAlignment="center"
           showsHorizontalScrollIndicator = {false}
           keyExtractor={(item, index) => index.toString()}
           onScroll={handleOnscroll}
           onViewableItemsChanged={handleViewAbleItemChange}
           viewabilityConfig={handleViewabilityConfg}
           onScrollToIndexFailed={({index}) => {
            scrollFunction({index}, flatListRef);
        }}
           />
           <Pagination data={data} scrollX={scrollX} index={index}/>
        </View>
    )
}



export default Dev;

const styles = StyleSheet.create({
    container:{
      flex:1,    
    },
    content:{
        
    },
    img:{
       height:400,
       width,
       justifyContent:"center"  
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