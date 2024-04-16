import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import {View, Text, Pressable} from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";



const InnerHome = () => {
const navigation = useNavigation()
 
const goBack = () => {
    navigation.goBack()
};

    const data = [
        {
        title:"Home",
        name:"home"
    },
    {
        title:"movies",
        name: "movie-open"
    },

    {
        title:"tv",
        name:"youtube-tv"
    },

    {
        title:"sport",
        name:"soccer"
    },

    {
        title:"my stuff",
        name:"plus"
    },


];
    return (
        <SafeAreaView style = {{justifyContent:"center", backgroundColor: 'rgba(0, 0, 0, 0.945)', alignItems:"center", flex:1}}>
           {data.map((item, index) => (
            <Link href={`/${item.title}`} asChild>
            <Pressable key={index}    style = {{bottom:"20%", flexDirection:"row", gap:10, margin:10, }}>
                <MaterialCommunityIcons name={item.name} size={30}  color="gray" style = {{flex:1, marginLeft:120}}/>
                <Text style = {{color:"gray",fontWeight:"bold",fontSize:17, flex:1, marginRight:131,}} numberOfLines={1}>{item.title}</Text>
            </Pressable>
            </Link>

           ))}
           
           <Pressable  onPress={goBack} style = {{backgroundColor:"gray", borderRadius:30, top:"20%", height:40, width:40, justifyContent:"center", alignItems:"center"}}>
           <MaterialCommunityIcons name="close" size={30} color={"#fff"}/>
           </Pressable>
          
        </SafeAreaView>
    );
}

export default InnerHome;