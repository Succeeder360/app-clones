import { useLocalSearchParams, useNavigation } from "expo-router";
import { ImageBackground, Pressable, Text} from "react-native"
import { FlatList,View ,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MovieDBImageRetrieval } from "@/src/services/retrivaImg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const Moviedetails = () => {
    const {release, title, overView, img, id} = useLocalSearchParams()
   
   const navigation = useNavigation()

    return (
      <SafeAreaView style = {{ flex:1}}> 
           <ScrollView style = {{flex:1}}>
      <ImageBackground
          source={{ uri: `${MovieDBImageRetrieval}${img}` }}
          style={{ height:400, width:"100%"}} >
            <View style = {{ marginVertical:15,
               marginHorizontal:15,
                backgroundColor:'rgba(52, 52, 52, 0.8)',
                 borderRadius:30,
                 height:50, width:50}}>
                  <Pressable onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="chevron-left"
             size={40} 
             style = {{color:"#fff", alignSelf:"center", marginHorizontal:5, marginVertical:5, }}/>
             </Pressable>
            </View>
         </ImageBackground>
         <Text style = {{color:"#fff", margin:10}}>{release}</Text>
         <Text style = {{color:"#fff"}}>{overView}</Text>
      </ScrollView>
      </SafeAreaView>
    );
}

export default Moviedetails;