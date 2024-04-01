import {View, Text, ImageBackground, Image, Animated, FlatList, SectionListComponent, SectionList} from "react-native"
import { StyleSheet } from "react-native"
import { Dimensions } from "react-native"
import { movieType } from "../types/movieTypes"
import Pagination from "../components/pagination"
import { useRef, useState} from "react"
import Header from "../components/homeHeader"

export const dummy = [
    {
    img: "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Biograpghy",
    desc: "watch now and enjoy",
    id:1
  },
  {
    img: "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Biograpghy",
    desc: "watch now and enjoy",
    id:2
  },
  {
    img: "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Biograpghy",
    desc: "watch now and enjoy",
    id:3
  },
  {
    img: "https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:"Biograpghy",
    desc: "watch now and enjoy",
    id:4
  },
  ]
  

  
const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];


 const SectionSide = () => {
  return(
    <View>
      <SectionList sections={DATA} renderItem={ ({item}) => (
        <View>
          <Text>{item}</Text>
        </View>
      )}
      
      renderSectionHeader={({section:{title}}) => (
        <View>
         <Text>{title}</Text>
        </View>
      )}/>
    </View>
  )
 }

const {width, height} = Dimensions.get("screen")

const FlatListHeader = () => {
   

   const renderItem = ({item}) => (
    <View style = {styles.container}>
    <ImageBackground source={{uri:item.img || ""}} style = {styles.img} resizeMode="contain">
      <View style = {styles.content}>
    <Text style = {styles.title}>{item.title}</Text>
    <Text style = {styles.desc}>{item.desc}</Text>
    </View>
    </ImageBackground>
    </View>
   )


    return(
      <>
    <FlatList data={dummy} renderItem={renderItem} horizontal  showsHorizontalScrollIndicator = {false}/>
   
    </>
    
    )
    
  }

export default FlatListHeader;
  const styles = StyleSheet.create({
    container:{
        height,
        width, 
        alignItems:"center",
      backgroundColor:"red"
       
    },
    content:{
        alignItems:"center",
        marginTop:"50%"
    },
    img:{
        height:300,
        width:"100%",
        flex:1
    },
    title:{
        color:"#fff",
        fontWeight:"900"
    },
    desc:{
        color:"#fff",
        fontWeight:"300"
    },
  
  })