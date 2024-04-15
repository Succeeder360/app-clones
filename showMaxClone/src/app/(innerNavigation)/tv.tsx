import { View, Text } from "react-native";
import { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import {Picker} from '@react-native-picker/picker';
import { FlatList } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";


const  TvDetails = () => {
  const data = [
    {
   title:"Home",
  },
  {
    title:"Movies",
   },
   {
    title:"Sport",
   },
   {
    title:"Tv",
   },
   {
    title:"My Stuff",
   },
]

  return (
      <SafeAreaView style = {styles.container
          }>
        
          {data.map((item, idx) => 
            <View  key={idx} style = {styles.itemContainertyle}>
            <Text style = {styles.itemTextStyle}>{item.title}</Text>
           </View> )
         }
         <View style = {styles.iconContainerStyle}>
         <MaterialCommunityIcons name="close" style = {styles.iconStyle} />
         </View>
      </SafeAreaView>

  )
   
}


const styles = StyleSheet.create({
  container:{
 
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"black",
     opacity:0.99,
    
  },
  itemContainertyle:{
    bottom:"20%"
  },
  itemTextStyle:{
    color:"#fff",
    fontWeight:"bold",
     fontSize:29, 
  },
  iconContainerStyle:{

  },
  iconStyle:{
  color:"#fff",
  fontSize:29
  }
})
export default TvDetails;