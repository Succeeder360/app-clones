import {View, Text, FlatList, Image,ImageBackground, StyleSheet, SectionList, TouchableOpacity} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef, useState } from "react";
import SlideItem from "../containers/reuseable";
import { movieType } from "../types/movieTypes";
import Pagination from "./pagination";
import { Dimensions } from "react-native";
import Header from "./homeHeader";
import FlatListHeader from "../containers/reuseable";
import Section from "./section";
import { FA5Style } from "@expo/vector-icons/build/FontAwesome5";
import HorizontalScrollWithDots from "./pagination";
import HeaderComp from "./flatlistHeader";

const img =  "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
export const dummy = [
    {
    img: "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Biograpghy",
    desc: "watch now and enjoy",
    id:"1"
  },
  {
    img: "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Horror",
    desc: "happ treats",
    id:"2"
  },
  {
    img: "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"School",
    desc: "hsve fun you all",
    id:"3"
  },
  {
    img: "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Biograpghy",
    desc: "watch now and enjoy",
    id:"4"
  },
  ]
  
  const sec = [
    {
     
      title:"Top 20 Movies",
      data:[img, img, img, img]
    },
    {
     
      title:"Trending",
      data:[img, img, img, img]
    },
    {
     
      title:"Top Local Movies",
      data:[img, img, img, img]
    },
    {
   
      title:"Must Watch Match",
      data:[img, img, img, img]
    },
    {
   
      title:"Movies AtoZ",
      data:[img, img, img, img]
    },
    {
   
      title:"Comedy",
      data:[img, img, img, img]
    },
    {
   
      title:"Top African Movies",
      data:[img, img, img, img]
    },
 
    {
   
      title:"Award-Winnig Films",
      data:[img, img, img, img]
    },
    {
   
      title:"Horror",
      data:[img, img, img, img]
    },
    {
   
      title:"Browse By Genre",
      data:[img, img, img, img]
    }
  ]


  const image1 = "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const image2 = "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const image3 = "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const image4 = "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


  const HeaderComps = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const renderDot = (index) => {
    return (
      <TouchableOpacity
        key={index}
        style={[styles.dot, currentPage === index && styles.activeDot]}
        onPress={() => setCurrentPage(index)}
      />
    );
  };

  const renderItem = ({item}) => (
   
    <View style = {{backgroundColor:"blue",  }}>
      <ImageBackground source={{uri:item.img}}  resizeMode="cover" style = {styles.img}>
      <Text style = {styles.title}>{item.title}</Text>
      <Text style = {styles.desc}>{item.desc}</Text>
      </ImageBackground>
    </View>
  )
  return (
    <View>
      <FlatList
        data={dummy}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const page = Math.round(
            event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
          );
          setCurrentPage(page);
        }}
      />
      <View style={styles.pagination}>{dummy.map((_, index) => renderDot(index))}</View>
    </View>
  );
}

  





const FooterComps = () => {

  const [newi, setNewi] = useState(0);
  
  const renderSectionItem = ({ item, section}) => {
    let imageStyle = {
      width: section.title === 'Browse By Genre' ? 100 : 250,
      height: section.title === 'Browse By Genre' ? 100 : 120,
      borderRadius: section.title === 'Browse By Genre' ? 5 : 10,
    };

    return (
      <View style={{ margin: 5 }}>
        <Image source={{ uri: item }} style={imageStyle} />
      </View>
    );
  };

  const renderSectionHeader = ({ section: {title, data } }) => (
    <View>
      <Text style={{ color: '#fff' }}>{title}</Text>
      <FlatList
        data={data}
        renderItem={({item}) => renderSectionItem({item, section:{title}})}
        horizontal
        showsHorizontalScrollIndicator={false}
       
      />
    </View>
  );

  return (
    <View>
      <View style={{ margin: 10 }}>
     
      </View>
      <SectionList
        sections={sec}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={() => null}
      />
    </View>
  );
};




const TrialCom = () => {

    return(
    <SafeAreaView>
     
      <SectionList  ListHeaderComponent={() => <HeaderComp data={dummy}/>} sections={sec}  renderItem={() => null
      }
      ListFooterComponent={FooterComps} 
      />
    </SafeAreaView>
    )
}

export default TrialCom;



const styles = StyleSheet.create({
  container:{
      alignItems:"center",
    backgroundColor:"red"
     
  },
  content:{
      alignItems:"center",
      marginTop:"50%"
  },
  img:{
       flex:1,
      height:300,
      width:430
     
  },
  title:{
      color:"#fff",
      fontWeight:"900"
  },
  desc:{
      color:"#fff",
      fontWeight:"300"
  },

    itemContainer: {
      backgroundColor: 'blue',
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
  })
  

