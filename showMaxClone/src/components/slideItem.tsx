import {StyleSheet,Dimensions,Image} from "react-native"
import { MovieDBImageRetrieval } from "../services/retrivaImg";


const {width} = Dimensions.get("window");


 export const SlideItem = ({item}) => {
    return(
        <Image source={{uri:`${MovieDBImageRetrieval}${item.poster_path}`}} height={400} width={300}/>
    )
  }


   export default SlideItem;

   const styles = StyleSheet.create({
    container:{
      flex:1,  
    },
    img:{
       height:400,
       width,
     backgroundColor: 'rgba(0,0,0,0.5)'

    },
    title:{
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    desc:{
        color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', 
    },
   
})