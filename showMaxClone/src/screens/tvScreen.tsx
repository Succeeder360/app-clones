import Home from "@/src/components/Home";
import {View, Text, Pressable} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import Movie from "../app/(innerNavigation)/movies";
import TvDetails from "../app/(innerNavigation)/tv";



const TvScreen = () => {
   const queryClient =  new QueryClient( )
    return (
        <SafeAreaView>
            <QueryClientProvider client={queryClient}>
            <TvDetails/>
            </QueryClientProvider>
        </SafeAreaView>
    );
}

export default TvScreen;