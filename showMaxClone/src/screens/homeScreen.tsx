
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import AnotherTrial from "../components/devember";
import Home from "../components/Home";

const queryClient = new QueryClient()

export default function  HomeScreen(){
    return(
        <QueryClientProvider client={queryClient}>
        <Home />
        </QueryClientProvider>
    )
}