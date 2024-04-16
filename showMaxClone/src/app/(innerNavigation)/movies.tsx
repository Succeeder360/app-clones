
import { QueryClient} from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import Movie from "@/src/components/movie";


const Movies = () => {
     
const queryClient = new QueryClient()

    return (
      <QueryClientProvider client={queryClient}>
        <Movie/>
        </QueryClientProvider>

    );
}

export default Movies;