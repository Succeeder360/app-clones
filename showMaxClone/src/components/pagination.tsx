import {View, Text, StyleSheet, Animated, Dimensions} from "react-native"
import React, { useState } from "react";

const {width, height} = Dimensions.get("screen")
const Pagination = ({data, scrollX, index}) => {

    
    return (
        <View style = {styles.container}>
          {data.map((_,idx) => {
             const inputRange = [(idx-1)* width, idx * width, (idx + 1) * width ]
             const dotWidth = scrollX.interpolate({
             inputRange,
             outputRange : [5,8, 5],
             extrapolate: "clamp"
            })
            const backgroundColor = scrollX.interpolate({
                inputRange,
                outputRange : ["gray", "#fff", "gray"],
                extrapolate: "clamp"
               })
               const height = scrollX.interpolate({
                inputRange,
                outputRange : [4,8,4],
                extrapolate: "clamp"
               })
            return(
            <Animated.View  key = {idx.toString()} style ={[styles.dot, {width:dotWidth, backgroundColor: backgroundColor, height:height}]}>
            </Animated.View>
          )
            }
          )}
            
        </View>
            
    );
             
}

export default Pagination;


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        gap:4,
        justifyContent:"center",
        alignItems:"center",
        top:13,
        
       
    },

dot:{
     borderRadius:6,
   
}
})