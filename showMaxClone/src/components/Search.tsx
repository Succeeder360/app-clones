import { View, Text } from "react-native";
import { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import {Picker} from '@react-native-picker/picker';



const  Search = () => {
const homes = ["ho", "mov", "su"]
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <SafeAreaView style = {{backgroundColor:"red", flex:1}} >
      <Picker style = {{color:"white"}}
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label = {homes} value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
    </SafeAreaView>
  )
   
}

export default Search;