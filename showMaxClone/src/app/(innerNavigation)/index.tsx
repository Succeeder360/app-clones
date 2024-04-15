import { useNavigation } from "expo-router";
import {View, Text, Pressable} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";




const InnerHome = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style = {{justifyContent:"center", alignItems:"center"}}>
            <Text style = {{color:"#fff"}}>Home</Text>
        </SafeAreaView>
    );
}

export default InnerHome;