import {Text,StyleSheet,SectionList} from "react-native"
import { SafeAreaView} from "react-native-safe-area-context";
import FooterComps from "./flatlistFooter";
import {useQuery}  from '@tanstack/react-query'
import {fetchTopRatedMovies} from "../services/movieApi";
import SlideItem from "./slideItem";


const TrialCom = () => {
 const {data, isLoading, error} = useQuery({
  queryKey:["movies"],
  queryFn:fetchTopRatedMovies
 })

  const sec = [
    {
     
      title:"Showmax Originals",
      data:data,
      mediaType: "series"
      
    },
    {
     
      title:" West Home Trending",
      data:data,
      mediaType: "series"
    },
    {
     
      title:"Recently Added Series",
      data:data,
      mediaType: "series"
      
    },
    {
   
      title:"Recently Added Movies",
      data:data,
      mediaType: "movies"
      
    },
    {
   
      title:"Must See Premier",
      data:data,
      mediaType: "series"
     
    },
    {
   
      title:"New Releases",
      data:data,
      mediaType: "series"
      
    },
    {
   
      title:"Top African Movies",
      data:data,
      mediaType: "series"
    },
 
    {
   
      title:"Award-Winnig Films",
      data:data,
      mediaType: "series"
      
    },
    {
   
      title:"Horror",
      data:data,
      mediaType: "movies"
      
    },
    {
   
      title:"Best of Rotten Tomatos",
      data:data,
      mediaType: "movies"
     
    },
    {
   
      title:"Best of Africa",
      data:data,
      mediaType: "movies"
     
    },
    {
   
      title:"Showmax Collections",
      data:data,
      mediaType: "series"
     
    },
    {
   
      title:"Thrills $ Chills",
      data:data,
      mediaType: "series"
     
    },
    {
   
      title:"Drama",
      data:data,
      mediaType: "movies"
     
    },
    {
   
      title:"Popular Brand",
      data:data,
      mediaType: "movies"
     
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
  

