import { useQuery } from "@tanstack/react-query";
import {View, Text, StyleSheet, Image, FlatList, ActivityIndicator, ScrollView} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { fetchTopRatedMovies } from "../services/movieApi";
import { MovieDBImageRetrieval } from "../services/retrivaImg";
import SharpHeaders from "./flatlistHeader";


  const AnotherTrial = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ["movies"],
        queryFn: fetchTopRatedMovies,
        


    },

  
  );
   


  
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

    const renderItem = ({item,category }) => {
        let imageStyle = {
            width: category === 'Popular Brand' ? 100 : 250,
            height: category === 'Popular Brand' ? 100 : 120,
            borderRadius: category === 'Popular Brand' ? 5 : 10,
        };

        return (
            <View style={{ margin: 5 }}>
               
                <Image
                    source={{ uri: `${MovieDBImageRetrieval}${item.poster_path}` }}
                    style={imageStyle}
                />
            </View>
        );
    };

 

    if (isLoading) return <ActivityIndicator style = {{alignSelf:"center", top:"100%", height:20, width:40}}/>
    if (error) return <Text style={{ color: "#fff" }}>Oops!</Text>;



    return (
        <SafeAreaView style={styles.container}>
             
            <FlatList
                data={sec}
                ListHeaderComponent={() => <SharpHeaders data={data}/>}
                renderItem={({ item }) => (
                    <View style={{ marginHorizontal: 10 , top:60, gap:10}}>
                        
                        <Text style={{ color: "#fff", marginBottom:5, top:14,  left:10}}>{item.category}</Text>
                        <FlatList
                        
                            horizontal
                            data={item.data}
                            renderItem={({ item }) => renderItem({ item, category: item.category })}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            
            />
        </SafeAreaView>
    );
}

 /**


    renderItem={({ item: movieOrSeries}) => (
                    <View style={{ marginBottom: 10 }}>
                       
                        <Image
                            style={{height: 150, width: 200}}
                            source={{uri: `${MovieDBImageRetrieval}${movieOrSeries.poster_path}`}}
                        />
                    </View>
                )}


*/

const styles = StyleSheet.create({
    container:{
     
        
        justifyContent:"center",
        alignItems:"center"
    }
})
export default AnotherTrial;