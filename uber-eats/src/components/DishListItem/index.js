import {View, Text,Image,StyleSheet} from "react-native"

const DishListItem = ({dish}) => {
    return(
        <View style = {styles.container}>
            <View style = {{flexDirection:"row"}}>
            <View style = {{flex:1}}>
            <Text style = {styles.name}>{dish.name}</Text>
            <Text style = {styles.description}>{dish.description}</Text>
            <Text style = {styles.price}>${dish.price}</Text>
            </View>
            {dish.image && <Image source={{uri:dish.image}} style = {styles.image}/>}
           </View>
        </View>
    )
}


export default DishListItem;

const styles = StyleSheet.create({
    container:{
           paddingVertical:10,
           marginVertical:10,
          marginHorizontal:20,
           borderBottomColor:"lightgray",
           borderBottomWidth:1
    },
    name:{
        fontWeight:"600",
        fontSize:17,
        letterSpacing:0.5
    },
    description:{
        color:"gray",
        marginVertical:5
    },
    price:{
        fontSize:16
    },
    image:{
        height:75,
        aspectRatio:1
     
    }
})