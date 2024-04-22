import {View,FlatList} from "react-native";
import restaurants from "../../../assets/data/restaurants.json"
import {Ionicons} from '@expo/vector-icons';
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
import styles from "./styles";
import RestaurantHeader from "./Header";

const restaurant = restaurants[0]

const RestaurantDetailsPage = () => {
    return(
        <View>
        <FlatList ListHeaderComponent={ () => <RestaurantHeader restaurant={restaurant}/>} data={restaurant.dishes} renderItem={({item}) => <DishListItem dish={item}/>}/>
        <Ionicons name = "arrow-back-circle"  style = {styles.iconStyle} />
        </View>
    )
}

export default RestaurantDetailsPage;

