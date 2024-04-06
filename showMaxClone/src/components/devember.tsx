import { useQuery } from "@tanstack/react-query";
import {View, Text, StyleSheet, Image, FlatList} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { fetchTopRatedMovies } from "../services/movieApi";
import { MovieDBImageRetrieval } from "../services/retrivaImg";



const AnotherTrial = () => {

  const {data, isLoading, error} = useQuery({
        queryKey:["movies"],
        queryFn:fetchTopRatedMovies
    })

    const sec = [
        {
        category:"Showmax Originals",
          data:data,
          mediaType: "series"
          
        },
        {
         
         category:" West Home Trending",
          data:data,
          mediaType: "series"
        },
        {
         
          category:"Recently Added Series",
          data:data,
          mediaType: "series"
          
        },
        {
       
          category:"Recently Added Movies",
          data:data,
          mediaType: "movies"
          
        },
        {
       
          category:"Must See Premier",
          data:data,
          mediaType: "series"
         
        },
        {
       
          category:"New Releases",
          data:data,
          mediaType: "series"
          
        },
        {
       
          category:"Top African Movies",
          data:data,
          mediaType: "series"
        },
     
        {
          category:"Award-Winnig Films",
          data:data,
          mediaType: "series"
        },
        {
       
          category:"Horror",
          data:data,
          mediaType: "movies"
          
        },
        {
       
          category:"Best of Rotten Tomatos",
          data:data,
          mediaType: "movies"
         
        },
        {
       
          category:"Best of Africa",
          data:data,
          mediaType: "movies"
         
        },
        {
       
          category:"Showmax Collections",
          data:data,
          mediaType: "series"
         
        },
        {
       
          category:"Thrills $ Chills",
          data:data,
          mediaType: "series"
         
        },
        {
       
          category:"Drama",
          data:data,
          mediaType: "movies"
         
        },
        {
       
          category:"Popular Brand",
          data:data,
          mediaType: "movies"
         
        }
      ]
    

   
  
    if(isLoading) return <Text style = {{color:"#fff"}}>loading...</Text>
    if(error) return <Text style = {{color:"#fff"}}>Opps</Text>

    return (
        <SafeAreaView style = {styles.container}>
         <FlatList 
    
    data={sec}
    renderItem={({item}) => (
        <View style={{ marginHorizontal: 10 }}>
            <Text style={{color: "#fff", marginBottom: 5}}>{item.category}</Text>
            <FlatList
            horizontal
                data={item.data}
                renderItem={({item: movieOrSeries}) => (
                    <View style={{ marginBottom: 10 }}>
                       
                        <Image
                            style={{height: 150, width: 200}}
                            source={{uri: `${MovieDBImageRetrieval}${movieOrSeries.poster_path}`}}
                        />
                    </View>
                )}
                keyExtractor={(movieOrSeries) => movieOrSeries.id.toString()}
            />
        </View>
    )}
    keyExtractor={(item, index) => index.toString()}
/>

        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container:{
     
        
        justifyContent:"center",
        alignItems:"center"
    }
})
export default AnotherTrial;