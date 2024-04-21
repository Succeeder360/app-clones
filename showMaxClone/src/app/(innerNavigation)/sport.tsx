
import { QueryClient} from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import Tvs from "@/src/components/tvs";


const Sport = () => {
     
const queryClient = new QueryClient()

    return (
      <QueryClientProvider client={queryClient}>
        <Tvs/>
        </QueryClientProvider>

    );
}

export default Sport;