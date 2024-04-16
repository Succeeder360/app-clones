import {View, Pressable, Text} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Modal } from "react-native"
import { Stack } from "expo-router"

const HeaderLeftComp = ({title}:{title:string}) => {
  const navigation = useNavigation()
  const [showModal, setShowModal] = useState(false); 

  const items = ['Home', 'Movies', 'Sport', "My Stuff"]; 

  const toggleModal = () => {
    setShowModal(!showModal); 
};  
 
  return (
  
    <View style={{ flexDirection: "row", gap: 25,}}>
      <MaterialCommunityIcons name='alpha-s-box' size={25} color={"red"} />
      <Pressable
        style={{ flexDirection: "row", alignItems: 'center' }}
        onPress={() => navigation.navigate("index")}
      >
        <Text style={{ color: "#fff", top: 3 }}>{title}</Text>
        <MaterialCommunityIcons
          name='chevron-down'
          size={20}
          color={"#fff"}
        />
      </Pressable>
    
      <Modal
        visible={showModal}
        transparent={true}
        animationType='fade'
        onRequestClose={toggleModal} 
      >
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' , top:200, bottom:2, left:190}}>
          <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)' , padding: 20, borderRadius: 10, flex:1, width: '90%', maxHeight: '90%'}}>
           
            {items.map((item, index) => (
              <Pressable   key={index} onPress={() => { /* Handle item selection */ }}>
                <Text style={{ color:"red" , padding:5}}>{item}</Text>
              </Pressable>
            ))}

           <Pressable    onPress={toggleModal} style={{ marginBottom: 10, }}>
              <MaterialCommunityIcons name="close" size={30} color="white" style = {{top:450,}}/>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  
  )
}


export default HeaderLeftComp