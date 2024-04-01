import { View, SectionList, Text, Image, StyleSheet} from "react-native"
import { movieType } from "../types/movieTypes";



const SectionContainer = ({item}) => {

    return(
        <View  style = {{flexDirection:"row"}}>
             <Text style={styles.title}>{item.title}</Text>
        <Image source={{uri:item.img }} height={100}  style = {{flex:1}} width={150}/>
        </View>
    )
}

export default SectionContainer;


const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      marginHorizontal: 10,
    },
    title: {
      color: 'white',
      marginBottom: 5,
    },
    image: {
      width: 100,
      height: 100,
      resizeMode: 'cover',
    },
  });