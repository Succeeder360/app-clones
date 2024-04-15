import React from 'react';
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PickerScreen from '../app/(innerNavigation)';
import RNPickerSelect from "react-native-picker-select";
import { useState } from 'react';
import { Link } from 'expo-router';




const Header = () => {

  const routs = ['movies', 'tv', 'sport','mystuff']
  
    return (
        <View>
            <View style={{ flexDirection: "row", gap: 30 }}>
                {routs.map((heads, index) => (
                    <Link   key={index} href={`/(innerNavigation)/${heads}`} asChild>
                    <Pressable >
                        <Text style={styles.header}>{heads.charAt(0).toUpperCase() + heads.slice(1)}</Text>
                    </Pressable>
                    </Link>
                ))}
            </View>
            
        </View>
    );
};



export default Header

const styles = StyleSheet.create({
    header:{
        color:"#fff",
        fontWeight:"300",
        fontSize:20,
    }
})