import { ExpandingDot } from "react-native-animated-pagination-dots";
import {View, Text, StyleSheet, FlatList, ImageBackground, Dimensions, Easing} from "react-native"
import { Animated } from "react-native";
import {useRef, useState } from "react";
import Pagination from "./pagination";
import SlideItem from "./slideItem";

const {width} = Dimensions.get("window");


const Dev = ({data}) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const [index, setIndex] = useState(0)
    const handleViewabilityConfg = useRef({
        itemVisiblePercentThreshold:50 // percentage for next slide to be visible
    }).current;
    const handleViewAbleItemChange = useRef(({viewableItems}) => {
        setIndex(viewableItems[0].index)
    }).current;

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

    return(
        <View >
         <FlatList   data={data}
          pagingEnabled 
           horizontal  renderItem={({item}) => <SlideItem item={item}/>}
           snapToAlignment="center"
           showsHorizontalScrollIndicator = {false}
           onScroll={handleOnscroll}
           onViewableItemsChanged={handleViewAbleItemChange}
           viewabilityConfig={handleViewabilityConfg}
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