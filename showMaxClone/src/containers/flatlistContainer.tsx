import {View, Text, Image} from "react-native"

const FlatListContainer = ({item}) => {

return(
    <View style = {{backgroundColor:"green", flex:1}}>
    <Text style = {{alignSelf:"center"}}>{item.title}</Text>
    <Image source={{uri:item.img}} height={100} width={200}/>
  </View>
)

}


export default FlatListContainer;