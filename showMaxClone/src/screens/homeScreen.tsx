import { View } from "react-native";
import Download from "../components/Download";
import Home from "../components/Home";
import TrialCom from "../components/constTrial";
import { SafeAreaView } from "react-native-safe-area-context";


export default function  HomeScreen(){

    return(
        <SafeAreaView>
        <TrialCom />
        </SafeAreaView>
    )
}