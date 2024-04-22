import {View, Text, Image, FlatList, StyleSheet} from "react-native";
import restaurants from "../../../assets/data/restaurants.json"
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";



const RestaurantHeader = ({restaurant}) => {
    return(
        <View style = {styles.page}>
        <Image source={{uri:restaurant.image}} style = {styles.image}/>
        </View>
    )
}

export default RestaurantHeader;


