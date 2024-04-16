import { useNavigation } from "expo-router";
import {View, Text, Pressable} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";




const MySTuff = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style = {{justifyContent:"center", alignItems:"center"}}>
            <Text style = {{color:"#fff"}}>My stuff</Text>
        </SafeAreaView>
    );
}

export default MySTuff;