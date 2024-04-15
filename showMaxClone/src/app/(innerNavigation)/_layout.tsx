import { createStackNavigator } from '@react-navigation/stack';
import PickerScreen from '@/src/app/(innerNavigation)';
import {View,Text,Pressable, Image} from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState} from 'react';
import { Picker } from '@react-native-picker/picker';
import { Modal } from 'react-native';
import { useNavigation } from 'expo-router';
import HeaderLeftComp from './head';
import TvDetails from './tv';
import Movie from './movies';
import Sport from './sport';
import MySTuff from './mystuff';
import InnerHome from '@/src/app/(innerNavigation)';





const Stack = createStackNavigator()

  const  _layout = () => {
  return(
  <Stack.Navigator screenOptions={{ headerTitle:""}}>
    <Stack.Screen name = "index"  component={InnerHome} options={{
      headerLeft: () => <HeaderLeftComp title={"index"}/>,
    }}/>
    <Stack.Screen name='tv' component={TvDetails}  options={{presentation:"transparentModal",
     headerLeft: () => <HeaderLeftComp title={"Tv"}/>,
    }}/> 
    <Stack.Screen name='mystuff' component={MySTuff}  options={{presentation:"transparentModal", 
       headerLeft: () => <HeaderLeftComp title={"My Stuff"}/>,
    }}/> 
    <Stack.Screen name='sport' component={Sport}  options={{presentation:"transparentModal", 
       headerLeft: () => <HeaderLeftComp title={ "Sport"}/>,
    }}/> 
    <Stack.Screen name='movies' component={Movie}  options={{presentation:"transparentModal",
       headerLeft: () => <HeaderLeftComp title={"Movies"}/>,
    }}/> 
  </Stack.Navigator>
  )
}

export default _layout;
