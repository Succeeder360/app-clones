import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@/src/components/Home';
import Profile from '@/src/components/Profile';
import Search from '@/src/components/Search';
import Download from '@/src/components/Download';
import {Feather, Octicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {StyleSheet, Text} from "react-native"
import { tabBarColors, tabBarIconStyles } from '@/src/styles/colors';
import { tabBarLabel, inactiveLabel } from '@/src/components/tabBarLabel';

const Tab = createBottomTabNavigator();

export default function TabLayout(){
   return(
<Tab.Navigator  screenOptions={{headerShown:false, tabBarStyle:{borderRadius:50,  position: "absolute", backgroundColor:"#403d39", marginBottom:20, opacity:0.8, width:"95%",height:70 } }}>
<Tab.Screen name = "Home" component={Home}   options={{
tabBarIcon: ({ focused }) => <MaterialCommunityIcons name= { focused ? "home" : "home-outline"}   color = {focused ? "#fff" : "gray"} style = { styles.iconStyles}/>,

tabBarLabel: ({ focused }) => {
   return focused ? <Text style = {[styles.label, {fontWeight:"bold", }]}>{tabBarLabel}</Text> : <Text>{inactiveLabel}</Text>;
 },
 }}/>
<Tab.Screen  name='Search' component={Search} options={{
tabBarIcon: ({focused}) =><Feather name="search"   color = { focused ? "#fff" : "gray"}  style = {styles.iconStyles} />,
tabBarLabel: ({ focused }) => {
   return focused ? <Text style = {styles.label}>{tabBarLabel}</Text> : <Text>{inactiveLabel}</Text>;
 },
}}/>
<Tab.Screen  name='Download' component={Download} options={{
tabBarIcon: ({focused}) => <Octicons name='download'   color = { focused ? "#fff" : "gray"} style = {styles.iconStyles}/>,
tabBarLabel: ({ focused }) => {
   return focused ? <Text style = {[styles.label]}>{tabBarLabel}</Text> : <Text>{inactiveLabel}</Text>;
 },
}}
/>
<Tab.Screen  name='Profile' component={Profile} options={{
tabBarIcon: ({ focused }) => <MaterialCommunityIcons name='account'  color = { focused ? "#fff" : "gray"} style = {styles.iconStyles}/>,
tabBarActiveTintColor:"red",

tabBarLabel: ({ focused }) => {
   return focused ? <Text style = {styles.label}>{tabBarLabel}</Text> : <Text>{inactiveLabel}</Text>;
 },
}}/>
</Tab.Navigator>
   )
}


const styles = StyleSheet.create({
   label:{
      color:tabBarColors.labelColor,
      fontSize:tabBarColors.labelSize,
    top:23,
    fontWeight:"bold",
  
    borderRadius:10

      
   
      
   },
   iconStyles:{
 
  fontSize:tabBarIconStyles.iconSize,
   position:"absolute",

   top:20
   },
   unfocusedIcon:{
      color:"#66635b",
      fontSize:24
   }
});