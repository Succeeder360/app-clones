import Home from "@/src/components/Home";
import {View, Text, Pressable} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import Movie from "../app/(innerNavigation)/movies";



const MovieScreen = () => {
   const queryClient =  new QueryClient( )
    return (
        <SafeAreaView>
            <QueryClientProvider client={queryClient}>
            <Movie/>
            </QueryClientProvider>
        </SafeAreaView>
    );
}

export default MovieScreen;