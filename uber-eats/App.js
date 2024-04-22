import { SafeAreaView, StyleSheet, View, } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailsPage from './src/screens/RestaurantDetailScreen';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <RestaurantDetailsPage/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
