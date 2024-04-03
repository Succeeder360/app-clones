import {View, Text, StyleSheet} from "react-native"
const Header = () => {

    return(
<View style = {{flexDirection:"row", gap:10, }}>
<Text style = {styles.header}>Movies</Text>
<Text style = {styles.header}>Tv</Text>
<Text style = {styles.header}>Sport</Text>
<Text style = {styles.header}>My Stuff</Text>
</View>
    )
}




export default Header

const styles = StyleSheet.create({
    header:{
        color:"#fff",
        fontWeight:"300",
        fontSize:20,
        
     
    }
})