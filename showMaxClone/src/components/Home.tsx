import { useQuery } from "@tanstack/react-query";
import {View, Text, StyleSheet, Image, FlatList, ActivityIndicator, Pressable} from "react-native"
import { fetchTopRatedMovies } from "../services/movieApi";
import { MovieDBImageRetrieval } from "../services/retrivaImg";
import { Sec } from "./dummy";
import FlatlistHeader from "./flatlistHeader";
import { Link } from "expo-router";

  const Home = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ["movies"],
        queryFn: fetchTopRatedMovies
    });

    const updatedSec = Sec.map(item => {
      return {
          ...item,
          data: data 
      };
  });   



    const renderItem = ({item}) => {
        let imageStyle = {
            width: item.category === 'Popular Brand' ? 100 : 250,
            height: item.category === 'Popular Brand' ? 100 : 120,
            borderRadius: item.category === 'Popular Brand' ? 5 : 10,
        };

        return (
            <View style={{ margin: 5 }}>
                <Link href={{
                      pathname:"/(innerNavigation)/moviedetails",
                      params:{   
                        overView:item.overview,
                        title:item.title,
                        release:item.release_date,
                        img:item.poster_path,
                        id:item.id
                      }
                }}   asChild>
                    <Pressable>
                <Image
                    source={{ uri: `${MovieDBImageRetrieval}${item.poster_path}` }}
                    style={imageStyle}
                />
                </Pressable>
                </Link>
            </View>
        );
    };

    if (isLoading) return <ActivityIndicator style = {{alignSelf:"center", top:"100%", height:20, width:40}}/>
    if (error) return <Text style={{ color: "#fff" }}>Oops!</Text>;

    return (
            <FlatList
                data={updatedSec}
                ListHeaderComponent={ () => <FlatlistHeader data={data}/> }
                renderItem={({ item }) => (
                    <View style={{marginHorizontal: 10 , top:60, gap:10}}>
                        <Text style={{ color: "#fff", marginBottom:5, top:14,  left:10}}>{item.category}</Text>
                        <FlatList
                            horizontal
                            data={item.data}
                            renderItem={({ item }) => renderItem({ item})}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
    );
}


const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center"
    }
})
export default Home