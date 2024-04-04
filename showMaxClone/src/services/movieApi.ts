
const ApiKey = "2ee5e01e49c1516fc325ce1f4985c7d5"
const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=1`;


export const fetchTopRatedMovies = async () => {
    try {
      const response = await fetch(API_URL);
      const  data = await response.json();
      console.log(data.results)
       return data.results
       
    } catch (error) {
      throw new Error('Error fetching top rated movies');
    }
}