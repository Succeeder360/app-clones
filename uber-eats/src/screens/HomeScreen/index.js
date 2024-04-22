import { StyleSheet, View, FlatList } from 'react-native';
import RestaurantItem from '../../components/Restaurantitem';
import restaurants from "../../../assets/data/restaurants.json";


const HomeScreen =  () => {
  return (
    <View style={styles.container}>
     <FlatList data={restaurants}
      renderItem={({item}) => <RestaurantItem restuarant={item}/>}
      showsVerticalScrollIndicator ={false}/>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container:{ padding:10}
});