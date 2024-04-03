import {View, Animated, Text, StyleSheet, ImageBackground, Dimensions} from "react-native"

const {width} = Dimensions.get("window");

const SlideItem = ({item}) => {
    
       return(
       <View style = {styles.container}>
      <ImageBackground source={{uri:item.img}}  resizeMode="cover" style = {styles.img}>
       <View style = {styles.content}>
       <Text style = {styles.title}>{item.title}s</Text>
       <Text style = {styles.desc}>{item.desc}</Text>
       </View>
      </ImageBackground>
       </View>
       )
   }

   export default SlideItem;
   const styles = StyleSheet.create({
    container:{
      flex:1,    
    },
    content:{
        
    },
    img:{
       
       height:400,
       width,
       justifyContent:"center"  
    },
    title:{
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    desc:{
        color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', 
    },
   
})