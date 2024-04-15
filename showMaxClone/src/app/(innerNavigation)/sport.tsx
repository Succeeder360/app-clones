import { useNavigation } from "expo-router";
import {View, Text, Pressable} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";




const Sport = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            
            <Text style = {{color:"#fff"}}>Sports</Text>
           
        </SafeAreaView>
    );
}

export default Sport;