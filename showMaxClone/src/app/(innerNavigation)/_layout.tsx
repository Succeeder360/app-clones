import { createStackNavigator } from '@react-navigation/stack';
import HeaderLeftComp from './head';
import TvDetails from './tv';
import Movie from './movies';
import Sport from './sport';
import MySTuff from './my stuff';
import InnerHome from '@/src/app/(innerNavigation)';





const Stack = createStackNavigator()

  const  _layout = () => {
  return(
  <Stack.Navigator screenOptions={{ headerTitle:""}}>
    
    <Stack.Screen name = "index"  component={InnerHome} options={{
      presentation:"transparentModal", headerShown:false,
     
      headerLeft: () => <HeaderLeftComp title={"index"}/>,
    }}/>
    <Stack.Screen name='tv' component={TvDetails}  options={{presentation:"transparentModal",
     headerTransparent:true,
     headerLeft: () => <HeaderLeftComp title={"Tv"}/>,
    }}/> 
    <Stack.Screen name='my stuff' component={MySTuff}  options={{presentation:"transparentModal", 
     headerTransparent:true,
       headerLeft: () => <HeaderLeftComp title={"My Stuff"}/>,
    }}/> 
    <Stack.Screen name='sport' component={Sport}  options={{presentation:"transparentModal", 
     headerTransparent:true,
       headerLeft: () => <HeaderLeftComp title={ "Sport"}/>,
    }}/> 
    <Stack.Screen name='movies' component={Movie}  options={{presentation:"transparentModal",
     headerTransparent:true,
       headerLeft: () => <HeaderLeftComp title={"Movies"}/>,
    }}/> 
  </Stack.Navigator>
  )
}

export default _layout;
