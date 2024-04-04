import {Text,StyleSheet,SectionList, View, FlatList, Image} from "react-native"
import { SafeAreaView,  } from "react-native-safe-area-context";
import FooterComps from "./flatlistFooter";
import {useQuery}  from '@tanstack/react-query'
import Dev from "./devember";
import {fetchTopRatedMovies} from "../services/movieApi";
import { MovieDBImageRetrieval } from "../services/retrivaImg";
import SlideItem from "./slideItem";


const TrialCom = () => {
 
  const {data, isLoading, error} = useQuery({
  queryKey:["movies"],
  queryFn:fetchTopRatedMovies
  })

  const sec = [
    {
     
      title:"Showmax Originals",
      data:data
      
    },
    {
     
      title:" West Home Trending",
      data:data,
     
    },
    {
     
      title:"Recently Added Series",
      data:data,
      
    },
    {
   
      title:"Recently Added Movies",
      data:data,
      
    },
    {
   
      title:"Must See Premier",
      data:data,
     
    },
    {
   
      title:"New Releases",
      data:data,
      
    },
    {
   
      title:"Top African Movies",
      data:data
    },
 
    {
   
      title:"Award-Winnig Films",
      data:data,
      
    },
    {
   
      title:"Horror",
      data:data,
      
    },
    {
   
      title:"Best of Rotten Tomatos",
      data:data,
     
    },
    {
   
      title:"Best of Africa",
      data:data,
     
    },
    {
   
      title:"Showmax Collections",
      data:data,
     
    },
    {
   
      title:"Thrills $ Chills",
      data:data,
     
    },
    {
   
      title:"Drama",
      data:data,
     
    },
    {
   
      title:"Popular Brand",
      data:data,
     
    }
  ]
  




if(isLoading) return <Text style = {{color:"#fff"}}>loading...</Text>
if(error) return <Text style = {{color:"#fff"}}>Opps</Text>

    return(
    <SafeAreaView style = {{}}>
      <SectionList   ListHeaderComponent={() => <SlideItem data={data}/>} sections={sec}  renderItem={() => null
      }
      ListFooterComponent={ () => <FooterComps data={sec}/> } 
      showsVerticalScrollIndicator = {false} />
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
  

