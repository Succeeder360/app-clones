import { View, Text, ImageBackground, FlatList, Image, StyleSheet, ScrollView, Dimensions, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useRef } from "react";
import SlideItem from "../containers/reuseable";
import { dummy } from "./dummy";
import Pagination from "./pagination";

const {width, height} = Dimensions.get("screen")

const  Home = () => {

  const [index, setIndex] = useState(0)
 const viewabilityConfig = useRef({
  itemVisiblePercentThreshold:50  // visible slide percent
 }).current


  const handleOnviewAbleItemChange = useRef(({viewableItems})=> {
    setIndex(viewableItems[0].index)
  }).current
  const scrollX = useRef(new Animated.Value(0)).current;

   const handleOnscroll = event => {
    Animated.event([
      {
        nativeEvent: {
          contentOffset:{
            x:scrollX,
          }
        }
      }
    ],
    {useNativeDriver:false}
    
    )(event)
   }

  const renderItem = ({item, index}) => (
    <SafeAreaView style = {{flex:1}}>
    <View style = {{backgroundColor:"blue",  justifyContent:"center", alignItems:"center"}}>
      <ImageBackground source={{uri:item.img}}  resizeMode="cover" style = {styles.img}>
      <Text style = {styles.title}>{item.title}</Text>
      <Text style = {styles.desc}>{item.desc}</Text>
      </ImageBackground>
     
    </View>
    </SafeAreaView>
  )

    return(
      <SafeAreaView style = {{flex:1, backgroundColor:"red"}}>
      <FlatList data={dummy}
       renderItem={ ({item}) => <SlideItem item={item}/>} 
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator = {false}
         onScroll={handleOnscroll} 
       onViewableItemsChanged={handleOnviewAbleItemChange}
       viewabilityConfig={viewabilityConfig}
         />

          <Pagination data={dummy} scrollX={scrollX} index={index}/>
    </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
  container:{
    height,
    width, 
    alignItems:"center"
  },
  img:{
    flex:0.6,
    width:"100%",
    

  },
  title:{
   color:"#fff",

  },
  desc:{
   
color:"#fff"
  },
  content:{
    alignItems:"center"
  },
  dot:{
   
   height:5,
   borderRadius:17,
   backgroundColor:"#fff",
   opacity:0.5,
   marginHorizontal:3
 
  },
  activeDot:{
  backgroundColor:"#fff",
  opacity:1,
  width:8,
  height:8,
 
  
  
 
  },
  pageCont:{
  width:"100%",
  flexDirection:"row",
 position:"absolute",
 bottom:200,
justifyContent:"center",
alignItems:"center"
  },
})