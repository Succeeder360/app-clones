import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/src/components/Home';
import Profile from '@/src/components/Profile';
import Search from '@/src/components/Search';
import Download from '@/src/components/Download';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function TabLayout(){
   return(
<Tab.Navigator >
<Tab.Screen name='Home'  component={Home}   options={{tabBarIcon: () => <MaterialCommunityIcons name='home' color={"#fff"}/>}}/>
<Tab.Screen  name='Profile' component={Profile}/>
<Tab.Screen  name='Download' component={Download}/>
<Tab.Screen  name='Search' component={Search}/>
</Tab.Navigator>
   )



}