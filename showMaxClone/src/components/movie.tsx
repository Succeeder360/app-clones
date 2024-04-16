import Nav from "../app/(innerNavigation)/nav";
import { fetchTopRatedTv } from "../services/movieApi";
import { useQuery } from "@tanstack/react-query";
import {Text, ActivityIndicator} from "react-native"



const Movie = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["movies"],
        queryFn: fetchTopRatedTv
    });

    if (isLoading) return <ActivityIndicator style = {{alignSelf:"center", top:"100%", height:20, width:40}}/>
    if (error) return <Text style={{ color: "#fff" }}>Oops!</Text>;


    return (
        <Nav data={data}/>
    );
}

export default Movie;