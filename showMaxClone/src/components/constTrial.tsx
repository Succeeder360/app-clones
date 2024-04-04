import {Text,StyleSheet,SectionList, View, FlatList, Image} from "react-native"
import { SafeAreaView,  } from "react-native-safe-area-context";
import FooterComps from "./flatlistFooter";
import {useQuery}  from '@tanstack/react-query'
import Dev from "./devember";
import {fetchTopRatedMovies} from "../services/movieApi";
import { MovieDBImageRetrieval } from "../services/retrivaImg";


const TrialCom = () => {
 
  const {data, isLoading, error} = useQuery({
  queryKey:["movies"],
  queryFn:fetchTopRatedMovies
  })

  const sec = [
    {
     
      title:"Top 20 Movies",
      data:data
      
    },
    {
     
      title:"Trending",
      data:data,
     
    },
    {
     
      title:"Top Local Movies",
      data:data,
      
    },
    {
   
      title:"Must Watch Match",
      data:data,
      
    },
    {
   
      title:"Movies AtoZ",
      data:data,
     
    },
    {
   
      title:"Comedy",
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
   
      title:"Browse By Genre",
      data:data,
     
    }
  ]
  


  const SlideItem = () => {
    return(
      <FlatList data={data} renderItem={({item}) => (
        <Image source={{uri:`${MovieDBImageRetrieval}${item.poster_path}`}} height={400} width={430}/>
        
      )}
      horizontal
      showsHorizontalScrollIndicator = {false}/>
    )
  }




if(isLoading) return <Text style = {{color:"#fff"}}>loading...</Text>
if(error) return <Text style = {{color:"#fff"}}>Opps</Text>
    return(

    <SafeAreaView style = {{}}>
      <SectionList   ListHeaderComponent={() => <SlideItem/>} sections={sec}  renderItem={() => null
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
  

