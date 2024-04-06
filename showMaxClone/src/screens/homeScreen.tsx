import TrialCom from "../components/constTrial";
import { SafeAreaView } from "react-native-safe-area-context";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import AnotherTrial from "../components/devember";

const queryClient = new QueryClient()

export default function  HomeScreen(){
    return(
        <SafeAreaView style = {{}}>
        <QueryClientProvider client={queryClient}>
        <AnotherTrial />
        </QueryClientProvider>
        </SafeAreaView>
    )
}