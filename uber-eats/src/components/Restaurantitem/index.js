import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const RestaurantItem = ({restuarant}) => {
   return(
    <View style = {styles.restaurantContainer}>
    <Image source={{uri:restuarant.image}} style = {styles.imageStyle}/>
    <View style = {styles.row}>
    <View style = {{flex:1}}>
    <Text style = {styles.title}>{restuarant.name}</Text>
    <Text style = {styles.subTitle}>${restuarant.deliveryFee} {restuarant.minDeliveryTime} &#8226; {restuarant.maxDeliveryTime} minutes</Text>
    </View>
    <View style = {styles.ratingContainer}>
        <Text style = {styles.rating}>{restuarant.rating}</Text>
    </View>
    </View>
   </View>
   )
}

export default RestaurantItem


const styles = StyleSheet.create({
    restaurantContainer:{
      width:"100%",
      marginVertical:10
    },
    imageStyle:{
      width:"100%",
      aspectRatio:5/3,
      marginBottom:5
    },
    title:{
      fontSize:16,
      fontWeight:"500",
      marginVertical:10
    },
     subTitle:{
      color:"gray"
     },
     row:{flexDirection:"row",
     alignItems:"center"
    },
    ratingContainer:{
        marginLeft:"auto",
        backgroundColor:"lightgray",
        width:30,
        height:30,
        borderRadius:40
    },
    rating:{
       alignSelf:"center",
       marginVertical:5
    }

  });



